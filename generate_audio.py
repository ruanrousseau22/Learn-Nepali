#!/usr/bin/env python3
"""
Sajilo Nepali — audio generator
--------------------------------
Reads audio_strings.json (the list of every Nepali word/phrase the app speaks),
synthesizes an MP3 for each one with Microsoft Edge neural TTS, and writes them
into ./audio/ with filenames the app looks up at runtime, plus a manifest.json.

The filename for each string is an 8-char FNV-1a hash that EXACTLY matches the
app's `audioKey()` function — do not change the hash.

USAGE
  pip install edge-tts                # one time
  python3 generate_audio.py           # male Nepali voice (default)
  python3 generate_audio.py --voice female
  python3 generate_audio.py --rate -10%        # 10% slower
  python3 generate_audio.py --workers 4        # parallel synthesis

NOTES
  - Resumable: it skips strings whose MP3 already exists, so re-running is cheap.
  - Switching voice? Delete the whole ./audio/ folder first so everything
    regenerates in the new voice:  rm -rf audio
  - manifest.json is rebuilt from whatever .mp3 files are actually in ./audio/.
"""

import argparse
import asyncio
import json
import os
import sys

try:
    import edge_tts
except ImportError:
    sys.exit("edge-tts is not installed. Run:  pip install edge-tts")

VOICES = {
    "male":   "ne-NP-SagarNeural",      # Nepali, male
    "female": "ne-NP-HemkalaNeural",    # Nepali, female
}

OUT_DIR = "audio"
STRINGS_FILE = "audio_strings.json"


def fnv1a(s: str) -> str:
    """8-hex FNV-1a over UTF-8 bytes — must match the app's audioKey()."""
    h = 0x811C9DC5
    for b in s.encode("utf-8"):
        h ^= b
        h = (h * 0x01000193) & 0xFFFFFFFF
    return format(h, "08x")


async def synth_one(text, key, voice, rate, sem, counters, total):
    path = os.path.join(OUT_DIR, key + ".mp3")
    if os.path.exists(path) and os.path.getsize(path) > 0:
        counters["skip"] += 1
        return
    async with sem:
        for attempt in range(3):
            try:
                tts = edge_tts.Communicate(text, voice, rate=rate)
                await tts.save(path)
                if os.path.getsize(path) == 0:
                    raise RuntimeError("empty file")
                counters["made"] += 1
                n = counters["made"] + counters["skip"] + counters["fail"]
                print(f"[{n}/{total}] {key}.mp3  {text}")
                return
            except Exception as e:
                if os.path.exists(path):
                    try:
                        os.remove(path)
                    except OSError:
                        pass
                if attempt == 2:
                    counters["fail"] += 1
                    counters["failed_list"].append((text, str(e)))
                    print(f"  ! FAILED  {text}  ({e})")
                else:
                    await asyncio.sleep(1.5 * (attempt + 1))


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--voice", default="male",
                    help="male | female | or an exact edge-tts voice id")
    ap.add_argument("--rate", default="+0%",
                    help='speaking rate, e.g. "-10%%" slower, "+10%%" faster')
    ap.add_argument("--workers", type=int, default=4,
                    help="parallel synthesis jobs (lower if you hit rate limits)")
    ap.add_argument("--strings", default=STRINGS_FILE)
    args = ap.parse_args()

    voice = VOICES.get(args.voice, args.voice)

    if not os.path.exists(args.strings):
        sys.exit(f"Cannot find {args.strings} (get the latest one from Claude).")

    with open(args.strings, encoding="utf-8") as f:
        strings = json.load(f)

    # de-duplicate by hash key
    by_key = {}
    for s in strings:
        if isinstance(s, str) and s.strip():
            by_key[fnv1a(s)] = s
    items = list(by_key.items())
    total = len(items)

    os.makedirs(OUT_DIR, exist_ok=True)
    print(f"Voice: {voice}   Rate: {args.rate}   Strings: {total}\n")

    counters = {"made": 0, "skip": 0, "fail": 0, "failed_list": []}
    sem = asyncio.Semaphore(max(1, args.workers))
    await asyncio.gather(*[
        synth_one(text, key, voice, args.rate, sem, counters, total)
        for key, text in items
    ])

    # rebuild manifest from what's actually on disk
    have = sorted(fn[:-4] for fn in os.listdir(OUT_DIR) if fn.endswith(".mp3"))
    with open(os.path.join(OUT_DIR, "manifest.json"), "w", encoding="utf-8") as f:
        json.dump(have, f, ensure_ascii=False)

    print(f"\nDone. new: {counters['made']}  skipped: {counters['skip']}  "
          f"failed: {counters['fail']}  |  manifest lists {len(have)} files.")
    if counters["failed_list"]:
        print("\nRe-run the script to retry these (it resumes automatically):")
        for t, e in counters["failed_list"][:20]:
            print(f"  - {t}  ({e})")


if __name__ == "__main__":
    asyncio.run(main())
