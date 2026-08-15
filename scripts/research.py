#!/usr/bin/env python3
"""Research helper: Bing link discovery + page text extraction (no API keys)."""
import base64
import html
import re
import sys
import urllib.parse
import urllib.request

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}


def fetch(url):
    req = urllib.request.Request(url, headers=UA)
    return urllib.request.urlopen(req, timeout=25).read().decode("utf-8", "replace")


def bing_links(q, n=10):
    page = fetch("https://www.bing.com/search?q=" + urllib.parse.quote(q))
    links = []
    for m in re.finditer(r"u=a1([A-Za-z0-9_-]+)", page):
        b = m.group(1) + "=" * (-len(m.group(1)) % 4)
        try:
            u = base64.urlsafe_b64decode(b).decode()
        except Exception:
            continue
        if u.startswith("http") and "bing.com" not in u:
            links.append(u)
    seen, out = set(), []
    for u in links:
        if u not in seen:
            seen.add(u)
            out.append(u)
    return out[:n]


def text_of(url, maxchars=60000):
    raw = fetch(url)
    raw = re.sub(r"<script.*?</script>|<style.*?</style>|<nav.*?</nav>", " ", raw, flags=re.S | re.I)
    raw = re.sub(r"<[^>]+>", " ", raw)
    return html.unescape(re.sub(r"\s+", " ", raw))[:maxchars]


def windows(text, keywords, width=420, maxhits=6):
    out = []
    for kw in keywords:
        for m in re.finditer(kw, text, re.I):
            a = max(0, m.start() - 40)
            out.append(text[a : m.start() + width].strip())
            if len(out) >= maxhits:
                break
    return out


if __name__ == "__main__":
    mode = sys.argv[1]
    if mode == "links":
        for q in sys.argv[2:]:
            print(f"### QUERY: {q}")
            for u in bing_links(q):
                print(" ", u)
    elif mode == "text":
        url = sys.argv[2]
        kws = sys.argv[3].split(",")
        t = text_of(url)
        print(f"### {url}")
        for w in windows(t, kws):
            print(" -", w[:500])
