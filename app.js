/* hectorchan.com — lightweight reactivity, no frameworks */
(function () {
  "use strict";

  var nav = document.getElementById("nav");
  var menuBtn = document.getElementById("menuBtn");
  var navLinks = document.getElementById("navLinks");

  /* sticky nav background */
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* mobile menu */
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") navLinks.classList.remove("open");
    });
  }

  /* scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          ro.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* animated counters */
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    if (isNaN(target)) return;
    var dur = 1400, start = null;
    function ease(t) { return 1 - Math.pow(1 - t, 3); }
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(target * ease(p)).toLocaleString("en-US");
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var nums = document.querySelectorAll(".num[data-count]");
  if ("IntersectionObserver" in window && nums.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          animateCount(en.target);
          co.unobserve(en.target);
        }
      });
    }, { threshold: 0.5 });
    nums.forEach(function (el) { co.observe(el); });
  }

  /* active section in nav */
  var sections = document.querySelectorAll("main section[id]");
  var linkMap = {};
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (a) {
    linkMap[a.getAttribute("href").slice(1)] = a;
  });
  if ("IntersectionObserver" in window && sections.length) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var link = linkMap[en.target.id];
        if (!link) return;
        if (en.isIntersecting) {
          Object.keys(linkMap).forEach(function (k) { linkMap[k].classList.remove("active"); });
          link.classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { so.observe(s); });
  }
})();
