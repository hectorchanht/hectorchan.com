/* Hector blog language switch — four stops, all first class:
   EN / 粵語（繁） / 普通話（繁） / 普通話（簡）.
   Uses this site's own localStorage key ("hector-lang"); default EN. the legacy two-stop value "zh"
   maps to 粵語 ("yue"). EN is the default and the original text.
   The 粵語 blocks are written Cantonese (Traditional). The 普通話 blocks
   are authored written Mandarin in Taiwanese 國語 register (Traditional);
   the 普通話（簡） blocks were generated from them at build time with
   @dawn-studio/zh-convert v0.5.0 (Dawn's own Traditional→Simplified
   converter, ~/workspace/dawn-zh-convert) and proofread (驗+改) before
   shipping — they are stored text, not a runtime conversion. */
(function () {
  var LANGS = ["en", "yue", "cmn", "cmns"];
  var HTML_LANG = { en: "en", yue: "zh-Hant", cmn: "zh-Hant", cmns: "zh-Hans" };
  function apply(lang) {
    LANGS.forEach(function (l) {
      document.querySelectorAll(".i18n-" + l).forEach(function (el) { el.hidden = l !== lang; });
    });
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    var t = document.documentElement.getAttribute("data-title-" + lang);
    if (t) document.title = t;
    document.documentElement.lang = HTML_LANG[lang] || "en";
    try { localStorage.setItem("hector-lang", lang); } catch (e) {}
  }
  var saved = "en";
  try { saved = localStorage.getItem("hector-lang") || "en"; } catch (e) {}
  if (saved === "zh") saved = "yue";
  if (LANGS.indexOf(saved) < 0) saved = "en";
  document.querySelectorAll("[data-lang]").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });
  apply(saved);
})();
