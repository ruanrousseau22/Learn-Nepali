#!/usr/bin/env python3
"""Generate recorded audio for Bhasaly language packs via edge-tts.

Reads the language's strings file (a JSON array of native-script strings),
synthesizes each with Microsoft edge-tts, and writes <outdir>/<fnv1a-8hex>.mp3
plus <outdir>/manifest.json (a JSON array of the 8-hex keys).

The hash matches the app's runtime audioKey(): FNV-1a over UTF-8 bytes
(h=0x811c9dc5; per byte h^=b; h=(h*0x01000193)&0xFFFFFFFF; 8 hex digits).

Usage:
  pip install edge-tts            # once (needs internet — Microsoft TTS)
  python3 generate_audio.py                   # Nepali, male voice (default)
  python3 generate_audio.py --lang km         # Khmer, male voice
  python3 generate_audio.py --voice female --rate -10%

Resumable: existing mp3s are skipped. Switching voice? Delete the outdir
first so every clip regenerates.
"""
import argparse, asyncio, json, sys
from pathlib import Path

LANGS = {
    "ne": {
        "strings": "audio_strings.json",
        "outdir": "audio",
        "voices": {"male": "ne-NP-SagarNeural", "female": "ne-NP-HemkalaNeural"},
    },
    "km": {
        "strings": "audio_strings_km.json",
        "outdir": "audio-km",
        "voices": {"male": "km-KH-PisethNeural", "female": "km-KH-SreymomNeural"},
    },
    "my": {
        "strings": "audio_strings_my.json",
        "outdir": "audio-my",
        "voices": {"male": "my-MM-ThihaNeural", "female": "my-MM-NilarNeural"},
    },
    "si": {
        "strings": "audio_strings_si.json",
        "outdir": "audio-si",
        "voices": {"male": "si-LK-SameeraNeural", "female": "si-LK-ThiliniNeural"},
    },
}


def fnv1a(s: str) -> str:
    h = 0x811C9DC5
    for b in s.encode("utf-8"):
        h ^= b
        h = (h * 0x01000193) & 0xFFFFFFFF
    return format(h, "08x")


async def synth(text: str, voice: str, rate: str, path: Path) -> bool:
    import edge_tts
    kw = {"rate": rate} if rate else {}
    tts = edge_tts.Communicate(text, voice, **kw)
    tmp = path.with_suffix(".part")
    try:
        await tts.save(str(tmp))
        tmp.rename(path)
        return True
    except Exception as e:
        if tmp.exists():
            tmp.unlink()
        print(f"  FAIL {path.name}: {e}", file=sys.stderr)
        return False


async def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--lang", choices=sorted(LANGS), default="ne")
    ap.add_argument("--voice", choices=["male", "female"], default="male")
    ap.add_argument("--rate", default="", help="e.g. -10%%")
    args = ap.parse_args()

    cfg = LANGS[args.lang]
    root = Path(__file__).resolve().parent
    strings_path = root / cfg["strings"]
    outdir = root / cfg["outdir"]
    voice = cfg["voices"][args.voice]

    if not strings_path.exists():
        print(f"missing {strings_path.name} — regenerate it from the pack first", file=sys.stderr)
        return 1
    strings = json.loads(strings_path.read_text(encoding="utf-8"))
    outdir.mkdir(exist_ok=True)

    print(f"{args.lang}: {len(strings)} strings -> {outdir.name}/ (voice {voice})")
    done = failed = skipped = 0
    keys = []
    for i, text in enumerate(strings, 1):
        key = fnv1a(text)
        path = outdir / f"{key}.mp3"
        if path.exists() and path.stat().st_size > 0:
            skipped += 1
            keys.append(key)
            continue
        ok = await synth(text, voice, args.rate, path)
        if ok:
            done += 1
            keys.append(key)
            print(f"  [{i}/{len(strings)}] {key} {text[:32]}")
        else:
            failed += 1
        await asyncio.sleep(0.25)  # be gentle with the service

    (outdir / "manifest.json").write_text(json.dumps(sorted(keys)), encoding="utf-8")
    print(f"done: {done} new, {skipped} existing, {failed} failed; manifest {len(keys)} keys")
    return 1 if failed else 0


if __name__ == "__main__":
    try:
        import edge_tts  # noqa: F401
    except ImportError:
        print("edge-tts not installed — run: pip install edge-tts", file=sys.stderr)
        sys.exit(1)
    sys.exit(asyncio.run(main()))
