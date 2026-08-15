#!/usr/bin/env python3
"""Image -> braille ASCII (Hermes caduceus style).

Usage: python img2braille.py <image> [max_width_chars] [--invert]
"""
import sys
from PIL import Image

# Braille dot bit positions for a 2x4 pixel cell
DOTS = {
    (0, 0): 0x01, (0, 1): 0x02, (0, 2): 0x04, (1, 0): 0x08,
    (1, 1): 0x10, (1, 2): 0x20, (0, 3): 0x40, (1, 3): 0x80,
}


def img_to_braille(path, max_width=100, invert=False, threshold=140, crop=None):
    img = Image.open(path).convert("L")
    w, h = img.size
    if crop:
        y0, y1 = crop
        img = img.crop((0, int(h * y0), w, int(h * y1)))
        w, h = img.size
    # monospace cells are ~2x as tall as wide; braille cells are 2x4 px
    scale = max_width / w
    target_w = max_width
    target_h = int(h * scale * 0.5)  # 0.5 accounts for 2x4 cell shape
    if target_h < 1:
        target_h = 1
    img = img.resize((target_w * 2, target_h * 4), Image.LANCZOS)
    px = img.load()
    out = []
    for cy in range(target_h):
        row = []
        for cx in range(target_w):
            bits = 0
            for (dx, dy), bit in DOTS.items():
                v = px[cx * 2 + dx, cy * 4 + dy]
                if not invert:
                    v = 255 - v  # dark pixels = filled dots
                if v > threshold:
                    bits |= bit
            row.append(chr(0x2800 + bits))
        out.append("".join(row))
    return "\n".join(out)


if __name__ == "__main__":
    path = sys.argv[1]
    mw = int(sys.argv[2]) if len(sys.argv) > 2 else 100
    inv = "--invert" in sys.argv
    crop = None
    if "--crop" in sys.argv:
        i = sys.argv.index("--crop")
        y0, y1 = (float(x) for x in sys.argv[i + 1].split(","))
        crop = (y0, y1)
    print(img_to_braille(path, max_width=mw, invert=inv, crop=crop))
