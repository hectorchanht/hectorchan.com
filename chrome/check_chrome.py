#!/usr/bin/env python3
"""Fail if any hectorchan.com page's embedded chrome drifts from chrome/."""
import re, sys, pathlib
root = pathlib.Path(__file__).parent.parent
def norm(s): return re.sub(r"\s+", " ", s or "").strip()
canon_nav = norm((root/"chrome/header.html").read_text(encoding="utf-8"))
canon_foot = norm((root/"chrome/footer.html").read_text(encoding="utf-8"))
pages = ["index.html","blog/index.html","privacy.html","404.html"] + \
        [str(p.relative_to(root)) for p in sorted((root/"blog").glob("*.html")) if p.name != "index.html"]
bad = 0
for pg in pages:
    t = (root/pg).read_text(encoding="utf-8")
    nav = re.search(r'<nav class="nav" id="nav">.*?</nav>', t, re.S)
    foot = re.search(r"<footer>.*?</footer>", t, re.S)
    if not nav or norm(nav.group(0)) != canon_nav: print("NAV DRIFT:", pg); bad = 1
    if not foot or norm(foot.group(0)) != canon_foot: print("FOOTER DRIFT:", pg); bad = 1
print("chrome OK" if not bad else "chrome DRIFT FOUND")
sys.exit(bad)
