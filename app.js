/* Volta — renders data/content.js in Arabic or English */
(function () {
  var C = window.VOLTA_CONTENT;
  var KEY = "volta-lang";

  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }

  function savedLang() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function saveLang(l) {
    try { localStorage.setItem(KEY, l); } catch (e) {}
  }

  function render(lang) {
    var t = C[lang];
    var root = document.documentElement;
    root.lang = lang;
    root.dir = t.dir;

    document.querySelectorAll("[data-nav]").forEach(function (a) {
      a.textContent = t.nav[a.getAttribute("data-nav")];
    });
    document.querySelector("[data-skip]").textContent =
      lang === "ar" ? "انتقل إلى المحتوى" : "Skip to content";
    $("langToggle").textContent = t.langLabel;
    $("langToggle").setAttribute("lang", lang === "ar" ? "en" : "ar");

    $("heroYear").textContent = t.hero.year;
    $("heroTitle").textContent = t.hero.title;
    $("heroLead").textContent = t.hero.lead;
    $("heroCta").textContent = t.hero.cta;

    $("storyTitle").textContent = t.story.title;
    var body = $("storyBody"); clear(body);
    t.story.paragraphs.forEach(function (p) { body.appendChild(el("p", null, p)); });
    $("quoteLabel").textContent = t.story.quoteLabel;
    $("quoteText").textContent = t.story.quote;

    $("foundersTitle").textContent = t.founders.title;
    $("foundersNote").textContent = t.founders.note;
    var fl = $("foundersList"); clear(fl);
    t.founders.names.forEach(function (n) { fl.appendChild(el("li", null, n)); });

    $("timelineTitle").textContent = t.timeline.title;
    var tl = $("timelineList"); clear(tl);
    t.timeline.items.forEach(function (i) {
      var li = el("li");
      li.appendChild(el("span", "y", i.year));
      li.appendChild(el("span", "t", i.text));
      tl.appendChild(li);
    });

    $("homesTitle").textContent = t.homes.title;
    var hl = $("homesList"); clear(hl);
    t.homes.items.forEach(function (h, idx) {
      var img = C.images[idx];
      var fig = el("figure", "ground");
      var a = el("a");
      a.href = img.page; a.target = "_blank"; a.rel = "noopener";
      a.setAttribute("aria-label", h.name);
      var ph = el("div", "ph");
      var im = new Image();
      im.alt = h.name; im.loading = "lazy"; im.src = img.src;
      im.onerror = function () { im.remove(); };
      ph.appendChild(im); a.appendChild(ph); fig.appendChild(a);
      var cap = el("figcaption");
      cap.appendChild(el("strong", null, h.name));
      cap.appendChild(el("span", null, h.caption));
      fig.appendChild(cap);
      hl.appendChild(fig);
    });

    $("honoursTitle").textContent = t.honours.title;
    var ho = $("honoursList"); clear(ho);
    t.honours.items.forEach(function (h) {
      var d = el("div");
      d.appendChild(el("dt", null, h.n));
      d.appendChild(el("dd", null, h.label));
      ho.appendChild(d);
    });

    $("disclaimer").textContent = t.footer.disclaimer;
    $("creditsTitle").textContent = t.footer.creditsTitle;
    $("credits").textContent = t.footer.credits;
    $("sourcesTitle").textContent = t.footer.sourcesTitle;
    var sl = $("sourcesList"); clear(sl);
    C.sources.forEach(function (s) {
      var li = el("li"); var a = el("a", null, s.title);
      a.href = s.url; a.target = "_blank"; a.rel = "noopener";
      li.appendChild(a); sl.appendChild(li);
    });

    document.title = lang === "ar" ? "فولتا — الاتحاد ١٩٢٧" : "Volta — Al-Ittihad, 1927";
  }

  var lang = savedLang() === "en" ? "en" : "ar";
  render(lang);
  $("langToggle").addEventListener("click", function () {
    lang = lang === "ar" ? "en" : "ar";
    saveLang(lang);
    render(lang);
  });
})();
