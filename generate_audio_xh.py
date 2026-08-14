#!/usr/bin/env python3
"""Xhosa audio generator — the generate_audio.py sibling for languages with
no edge-tts voice. Reads audio_strings_xh.json, synthesizes each string with
the LOCAL UBC-NLP/Simba-TTS-xho model (VITS, CC-BY-4.0 — attribution lives in
terms.html + the Settings voice line), and writes audio-xh/<fnv1a-8hex>.mp3
(or, with --faith, reads audio_strings_xhf.json and writes audio-xhf/)
plus a manifest.json (a JSON array of the 8-hex keys), exactly like
generate_audio.py so the app cannot tell the difference.

Runtime: needs torch/transformers/lameenc — they live in the dedicated venv
at ~/.bhasaly-xhosa-tts (created Aug 2026). This script re-execs itself with
that interpreter, so plain `python3 generate_audio_xh.py` works.
Resumable: existing keys are skipped; partial writes use .part files.
Never run two copies at once (same .part discipline as generate_audio.py).
"""
import json, os, pathlib, sys

VENV = pathlib.Path.home() / ".bhasaly-xhosa-tts" / "bin" / "python"
try:
    import torch  # noqa: F401
except ModuleNotFoundError:
    if not VENV.exists():
        sys.exit("venv missing — python3 -m venv ~/.bhasaly-xhosa-tts && "
                 "~/.bhasaly-xhosa-tts/bin/pip install torch transformers scipy lameenc")
    os.execv(str(VENV), [str(VENV)] + sys.argv)

import numpy as np
from transformers import VitsModel, AutoTokenizer
import lameenc

ROOT = pathlib.Path(__file__).parent
FAITH = "--faith" in sys.argv   # faith pack: audio_strings_xhf.json -> audio-xhf/
STRINGS = ROOT / ("audio_strings_xhf.json" if FAITH else "audio_strings_xh.json")
OUTDIR = ROOT / ("audio-xhf" if FAITH else "audio-xh")
MODEL = "UBC-NLP/Simba-TTS-xho"


# Bare alphabet letters synthesize as NOISE on this VITS model (out-of-
# distribution inputs — confirmed by spectral-flatness measurement, Aug 2026).
# SPEAK_AS stores a clip under the LETTER's key that SPEAKS a clean
# demonstration instead (the bn/my letter-name precedent): vowels as the
# long vowel, consonants as the letter+a syllable. All 22 spoken forms
# verified speech-like (duration >0.4s, flatness <0.05, voiced ratio >0.7).
SPEAK_AS = {
    "a": "aa", "e": "ee", "i": "ii", "o": "oo", "u": "uu",
    "c": "ca", "x": "xa", "q": "qa", "ch": "cha", "xh": "xha", "qh": "qha",
    "gc": "gca", "gx": "gxa", "gq": "gqa", "nc": "nca", "nx": "nxa",
    "nq": "nqa", "hl": "hla", "dl": "dla", "tsh": "tsha", "ny": "nya",
    "ng": "nga",
}


def fnv1a(s: str) -> str:
    h = 0x811C9DC5
    for b in s.encode("utf-8"):
        h ^= b
        h = (h * 0x01000193) & 0xFFFFFFFF
    return format(h, "08x")


def to_mp3(wav: np.ndarray, sr: int) -> bytes:
    pcm = np.int16(wav / max(1e-9, np.abs(wav).max()) * 32767 * 0.9)
    enc = lameenc.Encoder()
    enc.set_bit_rate(64)
    enc.set_in_sample_rate(sr)
    enc.set_channels(1)
    enc.set_quality(2)
    return bytes(enc.encode(pcm.tobytes())) + bytes(enc.flush())


def main():
    texts = json.loads(STRINGS.read_text(encoding="utf-8"))
    OUTDIR.mkdir(exist_ok=True)
    print(f"loading {MODEL} …")
    model = VitsModel.from_pretrained(MODEL)
    tok = AutoTokenizer.from_pretrained(MODEL)
    sr = model.config.sampling_rate

    keys, done, skipped, failed = set(), 0, 0, 0
    for i, text in enumerate(texts, 1):
        key = fnv1a(text)
        keys.add(key)
        path = OUTDIR / f"{key}.mp3"
        if path.exists():
            skipped += 1
            continue
        try:
            spoken = SPEAK_AS.get(text, text)
            inputs = tok(spoken, return_tensors="pt")
            with torch.no_grad():
                wav = model(**inputs).waveform[0].numpy()
            tmp = path.with_suffix(".part")
            tmp.write_bytes(to_mp3(wav, sr))
            tmp.rename(path)
            done += 1
            print(f"  [{i}/{len(texts)}] {key} {text[:40]}")
        except Exception as e:  # noqa: BLE001
            failed += 1
            print(f"  [{i}/{len(texts)}] FAILED {key}: {e}")
    (OUTDIR / "manifest.json").write_text(json.dumps(sorted(keys)), encoding="utf-8")
    print(f"done: {done} new, {skipped} existing, {failed} failed; manifest {len(keys)} keys")


if __name__ == "__main__":
    main()
