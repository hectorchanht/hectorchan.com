# Unified chrome — single source

`header.html` (the site nav) and `footer.html` in this folder are the
CANONICAL chrome for hectorchan.com. Every page of the site embeds a copy of
these exact blocks:

- header + footer: index.html, blog/index.html, blog/*.html, privacy.html,
  404.html
- EXCLUDED: admin/ (private console) and this chrome/ folder itself.

Static hosting has no includes, so pages carry embedded copies. When the
chrome changes: edit the fragment here FIRST, then re-apply it to every page
above in the same commit. Run `python3 chrome/check_chrome.py` — it diffs the
embedded nav/footer of every page against these fragments and fails on drift.
A page whose chrome differs from the fragment is a defect.
