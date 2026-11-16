// Baut Startseite, Produktseiten, Rechner und Newsletter-Kasten
// aus einstellungen.js, produkte.js, rechner.js und videos.js.
// Hier musst du normalerweise nichts ändern.
(function () {
  // Sprachen: Deutsch liegt unter myle.life/, die anderen in eigenen Ordnern (myle.life/en/…, /fr/…, /it/…).
  // Jede Seite sagt ihre Sprache in <html lang="…"> und lädt die Texte aus ihrem Ordner.
  const SPRACHEN = [
    { code: "de", name: "Deutsch" },
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "it", name: "Italiano" }
  ];
  const SPRACHE = SPRACHEN.some(s => s.code === document.documentElement.lang) ? document.documentElement.lang : "de";
  // t("deutsch", "englisch") wählt den Text in der Sprache der Seite. Französisch und Italienisch stehen in
  // fr/ui-texte.js bzw. it/ui-texte.js (UI_TEXTE: deutscher Text -> Übersetzung); fehlt einer, kommt Englisch.
  // {name} im Text ersetzt t durch den Wert, z. B. t("Alle {n} Helfer", "All {n} helpers", { n: 10 }).
  const UI = typeof UI_TEXTE !== "undefined" ? UI_TEXTE : {};
  const t = (de, en, werte) => {
    let s = SPRACHE === "de" ? de : SPRACHE === "en" ? en : UI[de] ?? en;
    if (Array.isArray(s)) s = werte && werte.n === 1 ? s[0] : s[1]; // [Einzahl, Mehrzahl]
    return werte ? s.replace(/\{(\w+)\}/g, (x, k) => k in werte ? werte[k] : x) : s;
  };
  const EN = SPRACHE === "en"; // nur Englisch schreibt das Euro-Zeichen vor die Zahl
  const DOPPELPUNKT = SPRACHE === "fr" ? "\u202f:" : ":"; // Französisch: schmales Leerzeichen vor dem Doppelpunkt
  const ZAHLEN = { de: "de-DE", en: "en-GB", fr: "fr-FR", it: "it-IT" }[SPRACHE];
  const LABELS = { zeit: t("spart Zeit", "saves time"), geld: t("spart Geld", "saves money"), muehe: t("spart Mühe", "saves effort") };
  const S = typeof SEITE !== "undefined" ? SEITE : {};
  const UM = typeof UEBER_MICH !== "undefined" ? UEBER_MICH : null;
  const NL = typeof NEWSLETTER !== "undefined" ? NEWSLETTER : null;
  const HAT_VIDEOS = typeof VIDEOS !== "undefined";
  const HAT_RECHNER = typeof RECHNER !== "undefined";
  const WENIG_BEWEGUNG = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // „Mich nicht zählen“ (Lukas 03.11.2026): ?nicht-zaehlen bzw. ?wieder-zaehlen hat das kleine Skript oben im <head>
  // schon gemerkt bzw. gelöscht. Hier nur kurz bestätigen und den Zusatz aus der Adresse nehmen.
  (() => {
    const q = location.search;
    const aus = /[?&]nicht-zaehlen(=|&|$)/.test(q), an = /[?&]wieder-zaehlen(=|&|$)/.test(q);
    if (!aus && !an) return;
    let gespeichert = false;
    try { gespeichert = !!localStorage.getItem("myle-nicht-zaehlen") === aus; } catch (e) { /* Speicher gesperrt */ }
    const text = !gespeichert
      ? t("Das hat nicht geklappt: Dein Browser lässt die Seite nichts speichern (zum Beispiel im privaten Fenster).", "That didn't work: your browser doesn't let the site store anything (for example in a private window).")
      : aus ? t("Erledigt: Dieser Browser wird in der Besucherstatistik nicht mehr gezählt.", "Done: this browser is no longer counted in the visitor statistics.")
      : t("Erledigt: Dieser Browser wird wieder gezählt.", "Done: this browser is counted again.");
    try {
      const u = new URL(location.href);
      u.searchParams.delete("nicht-zaehlen"); u.searchParams.delete("wieder-zaehlen");
      history.replaceState(history.state, "", u.pathname + u.search + u.hash);
    } catch (e) { /* egal */ }
    const zeige = () => {
      const d = document.createElement("div");
      d.className = "zaehl-hinweis"; d.setAttribute("role", "status"); d.textContent = text;
      const zu = document.createElement("button");
      zu.type = "button"; zu.textContent = "×"; zu.setAttribute("aria-label", t("Schließen", "Close"));
      zu.addEventListener("click", () => d.remove());
      d.appendChild(zu); document.body.appendChild(d);
      setTimeout(() => d.remove(), 12000);
    };
    if (document.body) zeige(); else document.addEventListener("DOMContentLoaded", zeige);
  })();

  // Links auf eigene Seiten ohne .html (myle.life/saugroboter), so wie Cloudflare die Seiten ausliefert und
  // wie sie in sitemap.xml stehen; "./" ist die Startseite der Sprache. Mit .html leitet Cloudflare nur um.
  // ---------- Kleine Helfer ----------
  const nf = (v, d = 0) => v.toLocaleString(ZAHLEN, { minimumFractionDigits: d, maximumFractionDigits: d });
  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function euro(v, mitVorzeichen) {
    const r = Math.round(v);
    const s = EN ? "€" + nf(Math.abs(r)) : nf(Math.abs(r)) + " €";
    if (!mitVorzeichen || r === 0) return (r < 0 ? "−" : "") + s;
    return (r > 0 ? "+" : "−") + s;
  }
  function stunden(h) {
    if (h < 1) return `${Math.round(h * 60)} ${t("Min.", "min")}`;
    if (h < 10) return `${nf(h, 1)} ${t("Std.", "h")}`;
    return `${nf(Math.round(h))} ${t("Std.", "h")}`;
  }
  // Zahl mit Einheit. Auf Englisch steht das Euro-Zeichen vorn: "€4 per month" statt "4 € pro Monat".
  const mitEinheit = (v, d, einheit) => EN && /^€/.test(einheit) ? `€${nf(v, d)}${einheit.slice(1)}` : `${nf(v, d)} ${einheit}`;
  function nachMonaten(m) {
    if (m === 0) return t("Beim Kauf", "At purchase");
    if (m % 12 === 0) return m === 12 ? t("Nach 1 Jahr", "After 1 year") : t("Nach {n} Jahren", "After {n} years", { n: m / 12 });
    return m === 1 ? t("Nach 1 Monat", "After 1 month") : t("Nach {n} Monaten", "After {n} months", { n: m });
  }
  function bezahltText(be) {
    if (be <= 1) return t("weniger als 1 Monat", "less than 1 month");
    if (be <= 24) return `${Math.ceil(be)} ${t("Monaten", "months")}`;
    return `${(be / 12).toLocaleString(ZAHLEN, { maximumFractionDigits: 1 })} ${t("Jahren", "years")}`;
  }
  function dezimalen(step) {
    const s = String(step);
    return s.includes(".") ? s.split(".")[1].length : 0;
  }
  const slug = s => String(s).toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const kurzname = p => p.kurzname || p.name.split(" ").slice(-1)[0];
  // Solange in einstellungen.js noch keine echte Partner-ID steht, bekommen die Amazon-Links gar keinen tag.
  // Eigene Tracking-ID pro Produktseite (einstellungen.js: trackingIds), damit Amazon PartnerNet die Klicks und Käufe
  // pro Seite getrennt zählt. Ohne Eintrag bleibt die normale Partner-ID. Es werden keine Daten der Besucher erfasst.
  const SEITEN_ID = (S.trackingIds || {})[document.body.dataset.produkt || ""];
  const partnerLink = u => {
    const id = String(S.partnerId || "").trim();
    const link = /^DEINPARTNERTAG/.test(id) || !id ? String(u || "").replace(/[?&]tag=DEINPARTNERTAG-21/g, "") : String(u || "").replace(/DEINPARTNERTAG-21/g, id);
    return SEITEN_ID && /^[a-z0-9-]+-2[01]$/.test(String(SEITEN_ID).trim()) ? link.replace(/([?&]tag=)[^&#]+/, "$1" + String(SEITEN_ID).trim()) : link;
  };
  // keinModell (Feld in produkte.js): Im Amazon-Shop dieses Landes ist gerade keins der Modelle lieferbar.
  // Dann zeigt die Seite statt der Modelle eine Hinweiskarte. Die Modelle bleiben in produkte.js stehen,
  // damit der Rechner weiter mit ihren Preisen und Gruppen rechnet. Wird eins lieferbar, kommt keinModell wieder weg.
  const alleModelle = p => p.modelle || [];
  const modelle = p => p.keinModell ? [] : alleModelle(p);
  const empfehlung = (p, ms = modelle(p)) => ms.find(m => m.empfohlen) || ms[0] || null;
  // Modelle nach "gruppe" sortiert, z. B. "Mit Wischwalze" und "Nur Saugen". Ohne Gruppen gibt es eine.
  function gruppen(p, ms = modelle(p)) {
    return [...new Set(ms.map(m => m.gruppe || ""))].map(name => {
      const info = (p.gruppen || []).find(g => g.name === name) || {};
      const gm = ms.filter(m => (m.gruppe || "") === name);
      return { ...info, name, modelle: gm, empf: gm.find(m => m.empfohlen) || gm[0] };
    });
  }
  const abPreis = g => Math.min(...g.modelle.map(m => Number(m.preis) || Infinity));
  // Amazon erlaubt keine eigenen Preisangaben neben Amazon-Links, darum nur Preisklassen
  const PREIS_KNOPF = t("Preis bei Amazon ansehen*", "See price on Amazon*");
  // Erklärung des Sternchens direkt beim Link (Medienanstalten und Amazon verlangen sie in unmittelbarer Nähe)
  const WERBELINK = `<p class="werbelink">${t("* Werbelink", "* Advertising link")}</p>`;
  function badges(p) {
    return `<div class="badges">${(p.spart || []).map(s => `<span class="badge">${LABELS[s] || esc(s)}</span>`).join("")}</div>`;
  }
  const liste = (titel, punkte, cls) => punkte && punkte.length ? `
    <div class="block ${cls}"><span class="block-titel">${titel}</span><ul>${punkte.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>` : "";

  // Foto; ohne Bild bleibt die Stelle leer, bis es echte Fotos gibt
  const TEILEN_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.8l7.4-4.3M8.3 13.2l7.4 4.3" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`;
  function foto(src, text, cls = "") {
    return src ? `<figure class="foto ${cls}"><img src="${esc(src)}" alt="${esc(text)}" loading="lazy"></figure>` : "";
  }

  // Helfer mit gemaltem Kachelbild unter /bilder/kacheln/<id>-400.webp und -800.webp (Startseite)
  const KACHELBILDER = new Set(["saugroboter", "waschtrockner", "airfryer", "thermostate", "klimaanlage", "smarte-lampen", "sparduschkopf",
    "balkonkraftwerk", "akkusauger", "reiskocher", "kaffeevollautomat", "kuechenmaschine-kochfunktion", "kuechenmaschine", "wassersprudler",
    "mini-geschirrspueler", "reinigungsbuerste", "stretchdeckel", "kindle", "zahnbuerste"]);
  // Ein Standbild aus dem Erklärvideo, solange es kein Foto gibt
  function standbild(p) {
    const v = HAT_VIDEOS && VIDEOS[p.video];
    if (!v) return `<div class="karte-symbol" aria-hidden="true">${esc(p.symbol || "✦")}</div>`;
    const k = Math.min(v.poster || 0, v.szenen.length - 1);
    return `<div class="buehne standbild" aria-hidden="true"><svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${v.szenen[k].svg}</svg></div>`;
  }
  function einfrieren(root) {
    root.querySelectorAll(".standbild svg").forEach(svg => {
      try { svg.pauseAnimations(); svg.setCurrentTime(99); } catch (e) { /* alter Browser: egal */ }
      if (window.hinterlegeSchrift) hinterlegeSchrift(svg); // dezentes Feld hinter der Schrift (videos.js)
    });
  }

  // Wie einfrieren, nur kommt das Feld hinter der Schrift erst nach dem Laden dazu, eine Grafik pro Schritt und die
  // sichtbaren zuerst. hinterlegeSchrift misst jede Grafik aus; für alle Standbilder der Startseite auf einmal hielt das
  // ein Handy beim Laden spürbar fest (Lighthouse: Total Blocking Time).
  function einfrierenSpaeter(root) {
    const svgs = [...root.querySelectorAll(".standbild svg")];
    svgs.forEach(svg => { try { svg.pauseAnimations(); svg.setCurrentTime(99); } catch (e) { /* alter Browser: egal */ } });
    if (!window.hinterlegeSchrift || !svgs.length) return;
    let q = einfrierenSpaeter.q; // eine Warteschlange für alle Aufrufe
    if (!q) {
      q = einfrierenSpaeter.q = { offen: new Set(), nah: new Set(), laeuft: false };
      q.io = "IntersectionObserver" in window
        ? new IntersectionObserver(es => es.forEach(e => (e.isIntersecting ? q.nah.add(e.target) : q.nah.delete(e.target))), { rootMargin: "300px 0px" })
        : null;
      q.spaeter = window.requestIdleCallback ? f => requestIdleCallback(f, { timeout: 400 }) : f => setTimeout(f, 20);
      q.schritt = () => {
        const svg = [...q.nah].find(x => q.offen.has(x)) || q.offen.values().next().value;
        if (!svg) { q.laeuft = false; return; }
        q.offen.delete(svg); q.nah.delete(svg);
        if (q.io) q.io.unobserve(svg);
        if (svg.isConnected) hinterlegeSchrift(svg);
        q.spaeter(q.schritt);
      };
    }
    svgs.forEach(svg => { q.offen.add(svg); if (q.io) q.io.observe(svg); });
    if (!q.laeuft) { q.laeuft = true; q.spaeter(q.schritt); }
  }

  // Unter dem Bild steht farbig hinterlegt, was das Produkt ersetzt ("Statt …"), damit man gleich
  // die Arbeit sieht, die nervt. Ohne "statt" in produkte.js steht dort klein der Bereich.
  function karte(p) {
    const ueber = p.statt
      ? `<span class="statt"><span>${esc(p.statt).replace(/^(statt|instead of)\s+/i, "<b>$1</b> ")}</span></span>`
      : `<span class="cat">${esc(p.kategorie)}</span>`;
    return `
      <a class="karte" href="${esc(p.id)}" data-kategorie="${esc(p.kategorie)}">
        <div class="karte-bild">${p.bild ? `<img src="${esc(p.bild)}" alt="${esc(p.name)}" loading="lazy">` : standbild(p)}</div>
        <div class="karte-text">
          ${ueber}
          <span class="karte-name">${esc(p.name)}</span>
          <span class="karte-zeile">${esc(p.nutzen || p.kurz)}</span>
          <span class="karte-fuss"><span class="mehr">${t("Ansehen", "View")}</span></span>
        </div>
      </a>`;
  }

  // ---------- Video-Vorschau in der Übersicht ----------
  // Am Computer mit Maus: Bleibt die Maus kurz auf einer Karte, öffnet sich das Video groß darüber.
  // Die Vorschau gehört zur Karte unter der Maus: Klicks gehen durch sie hindurch an die Karte.
  // Am Handy: Das Video der Karte, die gerade am besten zu sehen ist, läuft direkt im Kartenbild.
  // Beim ersten Mal startet jedes Video von vorn, danach geht es bei der zuletzt gezeigten Szene weiter.
  const MIT_MAUS = !!(window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  const gemerkt = {};
  let pop = null, popKarte = null, popProdukt = null, popVideo = null, popStart = "", ruhe = null;
  let zeigeTimer = 0, wegTimer = 0, leerTimer = 0, zuletzt = 0;
  const produktZu = k => PRODUKTE.find(x => x.id === k.getAttribute("href"));

  function vorschauFuer(container) {
    if (!MIT_MAUS || !HAT_VIDEOS || !container) return;
    container.querySelectorAll(".karte").forEach(k => {
      const p = produktZu(k);
      if (!p || !VIDEOS[p.video]) return;
      k.addEventListener("pointerenter", ev => {
        if (ev.pointerType !== "mouse" || ruhe === k) return;
        clearTimeout(wegTimer);
        if (popKarte === k) return;
        clearTimeout(zeigeTimer);
        // Von einer offenen Vorschau direkt zur nächsten Karte geht es schneller
        const schnell = popKarte || Date.now() - zuletzt < 400;
        zeigeTimer = setTimeout(() => oeffneVorschau(k, p), schnell ? 120 : 400);
      });
      k.addEventListener("pointerleave", () => {
        clearTimeout(zeigeTimer);
        if (ruhe === k) ruhe = null;
        if (popKarte === k) wegTimer = setTimeout(schliesseVorschau, 140);
      });
    });
  }

  function popBauen() {
    pop = document.createElement("div");
    pop.className = "vorschau-pop";
    pop.setAttribute("aria-hidden", "true");
    document.body.appendChild(pop);
    window.addEventListener("resize", () => vorschauZu());
    document.addEventListener("keydown", ev => { if (ev.key === "Escape") vorschauZu(); });
  }

  function oeffneVorschau(k, p) {
    if (!pop) popBauen();
    clearTimeout(wegTimer); clearTimeout(leerTimer);
    if (popVideo) { merke(); popVideo.anhalten(); }
    popKarte = k; popProdukt = p;
    const v = VIDEOS[p.video];
    pop.innerHTML = `
      <div class="video"></div>
      <div class="vp-fuss"><span class="vp-name">${esc(p.name)}</span><span class="mehr">${t("Ansehen", "View")}</span></div>`;
    popVideo = baueVideo(p, v, pop.querySelector(".video"), { vonSelbst: false, schleife: true, start: gemerkt[p.id] || 0 });
    pop.querySelectorAll("button").forEach(b => { b.tabIndex = -1; });

    // Mittig über dem Kartenbild, aber immer ganz im Fenster
    const bild = (k.querySelector(".karte-bild") || k).getBoundingClientRect();
    const fensterB = document.documentElement.clientWidth, fensterH = document.documentElement.clientHeight;
    const w = Math.round(Math.min(560, Math.max(420, bild.width * 2), fensterB - 32));
    pop.style.transition = "none";
    pop.classList.remove("offen");
    pop.style.transform = "none";
    pop.style.width = `${w}px`;
    const buehne = pop.querySelector(".buehne");
    const ox = pop.clientLeft + buehne.offsetLeft + buehne.offsetWidth / 2;
    const oy = pop.clientTop + buehne.offsetTop + buehne.offsetHeight / 2;
    const cx = bild.left + bild.width / 2, cy = bild.top + bild.height / 2;
    const links = Math.max(16, Math.min(cx - ox, fensterB - 16 - w));
    const oben = Math.max(8, Math.min(cy - oy, fensterH - 8 - pop.offsetHeight));
    pop.style.left = `${links + window.scrollX}px`;
    pop.style.top = `${oben + window.scrollY}px`;
    pop.style.transformOrigin = `${ox}px ${oy}px`;
    // Wächst aus dem Kartenbild heraus
    popStart = WENIG_BEWEGUNG ? "none" : `translate(${cx - links - ox}px, ${cy - oben - oy}px) scale(${(bild.width / buehne.offsetWidth).toFixed(3)})`;
    pop.style.transform = popStart;
    void pop.offsetWidth;
    pop.style.transition = "";
    pop.style.transform = "none";
    pop.classList.add("offen");
    popVideo.abspielen();
  }

  function schliesseVorschau() {
    clearTimeout(wegTimer);
    if (!pop || !popKarte) return;
    if (popVideo) { merke(); popVideo.anhalten(); }
    pop.classList.remove("offen");
    pop.style.transform = popStart;
    popKarte = null;
    zuletzt = Date.now();
    leerTimer = setTimeout(() => { pop.innerHTML = ""; popVideo = null; }, 260);
  }
  // Schließen per Escape, Filter oder Fenstergröße: dieselbe Karte erst wieder nach Verlassen
  function vorschauZu() {
    clearTimeout(zeigeTimer);
    if (popKarte) ruhe = popKarte;
    schliesseVorschau();
  }
  function merke() { if (popVideo && popProdukt) gemerkt[popProdukt.id] = popVideo.szene(); }

  // Am Handy: Es läuft immer nur ein Video, und zwar in der Karte, die der Bildschirmmitte am nächsten ist.
  // Es startet erst nach VIDEO_WARTEN Millisekunden, damit man vorher das Bild der Karte sieht.
  const VIDEO_WARTEN = 1500;
  function abspielenImBild(container) {
    if (MIT_MAUS || WENIG_BEWEGUNG || !HAT_VIDEOS || !container || !("IntersectionObserver" in window)) return;
    const sichtbar = new Map();
    let aktiv = null, player = null, geplant = false, startTimer = 0;
    function wechsle(k) {
      if (k === aktiv) return;
      clearTimeout(startTimer);
      if (aktiv) {
        if (player) { gemerkt[produktZu(aktiv).id] = player.szene(); player.anhalten(); player = null; }
        const box = aktiv.querySelector(".karte-video");
        if (box) box.remove();
      }
      aktiv = k;
      if (k) startTimer = setTimeout(() => starte(k), VIDEO_WARTEN);
    }
    function starte(k) {
      if (k !== aktiv) return;
      const p = produktZu(k);
      const box = document.createElement("div");
      box.className = "karte-video";
      box.setAttribute("aria-hidden", "true");
      k.querySelector(".karte-bild").appendChild(box);
      player = baueVideo(p, VIDEOS[p.video], box, { vonSelbst: false, schleife: true, schlicht: true, start: gemerkt[p.id] || 0 });
      player.abspielen();
    }
    function waehle() {
      const liste = [...sichtbar.keys()].filter(k => sichtbar.get(k).intersectionRatio >= 0.5);
      if (!liste.length) return wechsle(null);
      // Bildschirmmitte. Wächst die Seite in einem Vorschau-Fenster mit (sie scrollt dann nicht selbst),
      // nehmen wir die Mitte des sichtbaren Teils der Karten.
      let mitte = window.innerHeight / 2;
      if (window.self !== window.top && document.documentElement.scrollHeight <= window.innerHeight + 2) {
        const rs = [...sichtbar.values()].map(e => e.intersectionRect);
        mitte = (Math.min(...rs.map(r => r.top)) + Math.max(...rs.map(r => r.bottom))) / 2;
      }
      // Die laufende Karte bekommt einen kleinen Vorsprung, damit es nicht hin und her springt
      const abstand = k => { const r = k.getBoundingClientRect(); return Math.abs(r.top + r.height / 2 - mitte) - (k === aktiv ? 40 : 0); };
      wechsle(liste.sort((a, b) => abstand(a) - abstand(b))[0]);
    }
    const io = new IntersectionObserver(eintraege => {
      eintraege.forEach(e => { if (e.isIntersecting) sichtbar.set(e.target, e); else sichtbar.delete(e.target); });
      waehle();
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    container.querySelectorAll(".karte").forEach(k => { const p = produktZu(k); if (p && VIDEOS[p.video]) io.observe(k); });
    window.addEventListener("scroll", () => {
      if (geplant) return;
      geplant = true;
      requestAnimationFrame(() => { geplant = false; waehle(); });
    }, { passive: true });
  }

  // ---------- Gemeinsame Teile jeder Seite ----------
  // Farbverläufe und Schatten der Videos einmal für die ganze Seite
  if (typeof DEFS !== "undefined") {
    document.body.insertAdjacentHTML("afterbegin", `<svg class="defs-global" width="0" height="0" aria-hidden="true" focusable="false">${DEFS}</svg>`);
  }
  const typ = document.body.dataset.seite || (document.getElementById("uebersicht") ? "start" : "");
  const seitenName = esc(S.name || "");
  // Logo: Name gelb hinterlegt, daneben der Spruch (Anfangsbuchstaben fett, wenn sie den Namen ergeben)
  function logo() {
    const woerter = String(S.slogan || "").split(/\s+/).filter(Boolean);
    const passt = woerter.length > 1 && woerter.map(w => w[0]).join("").toLowerCase() === String(S.name || "").toLowerCase();
    const spruch = passt ? woerter.map(w => `<b>${esc(w[0])}</b>${esc(w.slice(1))}`).join(" ") : esc(S.slogan || "");
    return `<span class="logo-name">${seitenName}</span>${spruch ? `<span class="logo-spruch">${spruch}</span>` : ""}`;
  }
  // Sprachschalter: Knopf mit der Flagge der Sprache, darunter klappt eine Liste mit allen Sprachen auf.
  // Jeder Eintrag führt zur gleichen Seite in der anderen Sprache (Deutsch ohne Ordner, sonst /en/, /fr/, /it/).
  const pfadIn = code => "/" + (code === "de" ? "" : code + "/") + location.pathname.replace(/^\/(en|fr|it)(\/|$)/, "/").slice(1);
  const jetzt = SPRACHEN.find(s => s.code === SPRACHE);
  const flagge = code => `<span class="flagge flagge-${code}" aria-hidden="true"></span>`;
  const sprachen = `<div class="sprache">
          <button type="button" class="sprache-knopf" aria-expanded="false" aria-controls="sprache-liste" aria-label="${SPRACHE.toUpperCase()}, ${t("Sprache", "Language")}${DOPPELPUNKT} ${jetzt.name}">${flagge(SPRACHE)}<span class="sprache-code">${SPRACHE.toUpperCase()}</span><svg class="sprache-pfeil" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3"/></svg></button>
          <ul class="sprache-liste" id="sprache-liste" hidden>${SPRACHEN.map(s => `
            <li><a href="${pfadIn(s.code)}" lang="${s.code}" hreflang="${s.code}"${s.code === SPRACHE ? ' aria-current="true"' : ""}>${flagge(s.code)}<span>${s.name}</span></a></li>`).join("")}
          </ul>
        </div>`;
  const kopf = document.getElementById("kopf");
  if (kopf) {
    const nlLink = ["start", "produkt", "geschenke", "ratgeber", "ratgeber-liste"].includes(typ) ? "#newsletter" : "./#newsletter";
    kopf.outerHTML = `
      <header class="top"><div class="wrap">
        <a class="logo" href="./">${logo()}</a>
        <nav aria-label="${t("Hauptmenü", "Main menu")}"><a href="./#helfer">${t("Alle Helfer", "All helpers")}</a><a href="ratgeber"${["ratgeber", "ratgeber-liste"].includes(typ) ? ' aria-current="page"' : ""}>${t("Ratgeber", "Guides")}</a><a href="./#ueber-mich">${t("Über mich", "About me")}</a><a href="${nlLink}">Newsletter</a>${sprachen}${designKnopf()}</nav>
      </div></header>`;
    spracheSchalter();
    designSchalter();
  }
  const fuss = document.getElementById("fuss");
  if (fuss) {
    fuss.outerHTML = `
      <footer>
        <div class="wrap"><p class="notice">${t("* Werbelink: Kaufst du darüber, bekomme ich eine kleine Provision. Der Preis bleibt für dich gleich. Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Alle Ersparnisse sind Schätzungen.",
          "* Advertising link: if you buy through it, I get a small commission. The price stays the same for you. As an Amazon Associate I earn from qualifying purchases. All savings are estimates.")}</p></div>
        <div class="wrap fuss-zeile">
          <span>© ${new Date().getFullYear()} ${seitenName}</span>
          <nav aria-label="${t("Rechtliches", "Legal")}"><a href="./">${t("Startseite", "Home")}</a><a href="geschenke">${t("Geschenkideen", "Gift ideas")}</a><a href="ratgeber">${t("Ratgeber", "Guides")}</a><a href="impressum">${t("Impressum", "Legal notice")}</a><a href="datenschutz">${t("Datenschutz", "Privacy policy")}</a></nav>
        </div>
      </footer>`;
  }

  if (typ === "start") baueStart();
  if (typ === "produkt") baueProduktseite();
  if (typ === "geschenke") baueGeschenke();
  if (typ === "ratgeber") baueRatgeber();
  if (typ === "ratgeber-liste") baueRatgeberListe();
  document.querySelectorAll("[data-newsletter]").forEach(baueNewsletter);
  springeZumAnker();
  seitenwechsel();

  // ---------- Startseite ----------
  function baueStart() {
    // Vom 1. November bis Heiligabend: Hinweis auf die Geschenke-Seite unter dem Einstieg
    const heute = new Date(), intro = document.querySelector("main .intro");
    if (intro && (heute.getMonth() === 10 || (heute.getMonth() === 11 && heute.getDate() <= 24))) {
      const neu = intro.querySelector(".ratgeber-neu");
      (neu || intro).insertAdjacentHTML(neu ? "beforebegin" : "beforeend", `<a class="saison-hinweis" href="geschenke"><span class="saison-symbol" aria-hidden="true">🎁</span><span><strong>${t("Geschenke, die Zeit schenken", "Gifts that give time")}</strong><span>${t("Meine Ideen für Weihnachten", "My ideas for Christmas")}</span></span></a>`);
    }
    // Alle Helfer nach Tageszeit, daneben das Zeitkonto (Lukas 15.11.2026, Einzelheiten bei zeitkonto())
    const liste = document.getElementById("uebersicht");
    if (liste) baueTagUndKonto(liste);
    const um = document.getElementById("ueber-mich");
    if (um && UM) {
      const roboter = PRODUKTE.find(p => p.id === "saugroboter");
      // Ohne Foto steht der Text allein; weitere Fotos kommen in eine Reihe darunter
      const weitere = (UM.weitereFotos || []).filter(f => f && f.datei);
      um.classList.toggle("ohne-foto", !UM.foto);
      um.innerHTML = `
        ${UM.foto ? `<div class="um-fotos">${foto(UM.foto, UM.fotoText, "um-foto1")}</div>` : ""}
        <div class="um-text">
          <span class="eyebrow">${t("Wer hier empfiehlt", "Who's recommending")}</span>
          <h2 id="um-titel">${esc(UM.titel)}</h2>
          ${(UM.text || []).map(t => `<p>${esc(t)}</p>`).join("")}
          ${roboter ? `<a class="text-link" href="saugroboter">${t("Mein wichtigster Tipp: der Saug- und Wischroboter", "My top tip: the robot vacuum and mop")}</a>` : ""}
        </div>
        ${weitere.length ? `<div class="um-reihe">${weitere.map(f => foto(f.datei, f.text || "")).join("")}</div>` : ""}`;
    }
  }

  // ---------- Schalter Hell/Dunkel (Lukas 15.11.2026) ----------
  // Ohne Schalter folgt die Seite dem Browser. Mit dem Schalter gilt die eigene Wahl, gemerkt in localStorage „myle-design“
  // (Datenschutzerklärung, Abschnitt 4); das kleine Skript im <head> setzt sie auf jeder Seite, bevor sie erscheint.
  // Der Wechsel breitet sich als Kreis vom Schalter über die Seite aus (View Transitions), sonst blenden die Farben weich über.
  function designKnopf() {
    const sonne = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>`;
    const mond = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M19.5 14.6A7.8 7.8 0 1 1 9.4 4.5a6.2 6.2 0 0 0 10.1 10.1z"/></svg>`;
    return `<button type="button" class="design-schalter" role="switch" aria-checked="false" aria-label="${t("Dunkles Design", "Dark mode")}">
      <span class="ds-spur ds-hell">${sonne}</span><span class="ds-spur ds-dunkel">${mond}</span>
      <span class="ds-knopf"><span class="ds-sonne">${sonne}</span><span class="ds-mond">${mond}</span></span></button>`;
  }
  function designSchalter() {
    const knopf = document.querySelector(".design-schalter");
    if (!knopf) return;
    const html = document.documentElement;
    const browserDunkel = window.matchMedia ? matchMedia("(prefers-color-scheme: dark)") : { matches: false };
    const istDunkel = () => (html.dataset.theme ? html.dataset.theme === "dark" : browserDunkel.matches);
    const zeige = () => {
      knopf.setAttribute("aria-checked", String(istDunkel()));
      // Farbe der Browserleiste am Handy passend zur Wahl
      if (html.dataset.theme) document.querySelectorAll('meta[name="theme-color"]').forEach(m => m.setAttribute("content", istDunkel() ? "#0f1614" : "#b5d9c9"));
    };
    function setze(dunkel) {
      const anwenden = () => { html.dataset.theme = dunkel ? "dark" : "light"; zeige(); };
      try { localStorage.setItem("myle-design", dunkel ? "dunkel" : "hell"); } catch (e) { /* gesperrt: gilt nur auf dieser Seite */ }
      if (WENIG_BEWEGUNG) return anwenden();
      if (document.startViewTransition) {
        const r = knopf.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
        const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
        const vt = document.startViewTransition(anwenden);
        vt.ready.then(() => html.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 750, easing: "cubic-bezier(0.45, 0, 0.2, 1)", pseudoElement: "::view-transition-new(root)" })).catch(() => {});
        return;
      }
      html.classList.add("design-wechsel");
      anwenden();
      setTimeout(() => html.classList.remove("design-wechsel"), 700);
    }
    knopf.addEventListener("click", () => setze(!istDunkel()));
    if (browserDunkel.addEventListener) browserDunkel.addEventListener("change", zeige);
    addEventListener("pageshow", zeige);
    zeige();
  }

  // ---------- Zeitkonto: Startseite „Ein Tag mit deinen Helfern“ und Produktseiten (Lukas 15.11.2026) ----------
  // Auf der Startseite stehen alle Helfer nach Tageszeit. Ein Klick irgendwo auf die Kachel nimmt einen Helfer ins Zeitkonto
  // (oder wieder heraus), nur „Ansehen“ öffnet seine Seite. Das Konto zählt zusammen, wie viel Zeit und Geld die gewählten
  // Helfer im Jahr sparen: mit Durchschnittswerten (Startwerte der Rechner, gerundet wie auf der Geschenke-Seite) oder, wenn
  // man auf der Seite eines Helfers dessen Rechner umstellt, mit den eigenen Zahlen (Zeit und echtes Geld im Jahr, ohne den
  // Wert einer Freizeitstunde, sonst zählte die Zeit doppelt).
  // Gespeichert wird erst, wenn man das Konto selbst benutzt: localStorage „myle-zeitkonto“ (Datenschutzerklärung, Abschnitt 4).
  // „Konto leeren“ löscht den Eintrag. Ohne Eintrag zeigt die Startseite drei Beispiel-Helfer und die Produktseiten kein Konto.
  function zeitkonto() {
    if (zeitkonto.k) return zeitkonto.k;
    const SCHLUESSEL = "myle-zeitkonto";
    const P = id => PRODUKTE.find(p => p.id === id);
    const START = ["saugroboter", "airfryer", "kaffeevollautomat"].filter(P);
    // Durchschnitt pro Helfer: Stunden ab 5 im Jahr, Euro ab 20 im Jahr (wie auf der Geschenke-Seite).
    // Erst ausrechnen, wenn er gebraucht wird: Alle Rechner auf einmal durchzurechnen kostet am Handy spürbar Zeit.
    const schnitte = {};
    function SCHNITT(id) {
      if (!schnitte[id]) {
        const p = P(id);
        if (!p) return null;
        const e = jahresErsparnis(p);
        const std = e && e.std >= 5 ? (e.std >= 20 ? Math.round(e.std / 5) * 5 : Math.round(e.std)) : 0;
        const eur = e && e.geld >= 20 ? Math.round(e.geld / 5) * 5 : 0;
        schnitte[id] = { std, eur, rechner: !!e };
      }
      return schnitte[id];
    }
    const runde = w => ({ std: Math.max(0, Math.round(Number(w.std) || 0)), eur: Math.max(0, Math.round(Number(w.eur) || 0)) });

    // ---- Speicher ----
    const BEISPIEL = typ === "start" ? START : [];
    let wahl = new Set(BEISPIEL), eigene = {}, gespeichert = false;
    function laden() {
      let d;
      try { d = JSON.parse(localStorage.getItem(SCHLUESSEL) || "null"); } catch (e) { return; } // gesperrt: Stand der Seite behalten
      if (!d || d.v !== 1 || !Array.isArray(d.ids)) { wahl = new Set(BEISPIEL); eigene = {}; gespeichert = false; return; }
      wahl = new Set(d.ids.filter(id => P(id)));
      eigene = {};
      Object.keys(d.eigene || {}).forEach(id => {
        const x = d.eigene[id];
        if (P(id) && x && Number.isFinite(x.std) && Number.isFinite(x.eur)) eigene[id] = runde(x);
      });
      gespeichert = true;
    }
    laden();
    const hoerer = [];
    const melden = () => hoerer.forEach(f => { try { f(); } catch (e) { console.error(e); } });
    function speichern() {
      gespeichert = true;
      try { localStorage.setItem(SCHLUESSEL, JSON.stringify({ v: 1, ids: [...wahl], eigene })); } catch (e) { /* gesperrt: gilt nur auf dieser Seite */ }
      melden();
    }
    // Konto in einem anderen Tab geändert, oder „Zurück“ holt die Seite aus dem Browser-Cache: neu lesen
    addEventListener("storage", ev => { if (ev.key === SCHLUESSEL || ev.key === null) { laden(); melden(); } });
    addEventListener("pageshow", ev => { if (ev.persisted) { laden(); melden(); } });

    // ---- Rechnen und Texte ----
    const STD = t("Std.", "h");
    const ca = x => t("ca. {x}", "approx. {x}", { x });
    const wert = id => eigene[id] || SCHNITT(id);
    const teile = (w, mitCa) => {
      const x = [w.std ? `${nf(w.std)} ${STD}` : "", w.eur ? euro(w.eur) : ""].filter(Boolean).join(" + ");
      return x && mitCa ? ca(x) : x;
    };
    // Ersparnis eines Helfers, z. B. „ca. 50 Std. + 130 € im Jahr“; mit eigenen Zahlen ohne „ca.“
    function wertText(id, mitJahr = true) {
      const x = teile(wert(id), !eigene[id]);
      if (!x) return LABELS[(P(id).spart || [])[0]] || "";
      return mitJahr ? t("{x} im Jahr", "{x} a year", { x }) : x;
    }
    const art = id => { const w = wert(id); return w.std ? "zeit" : w.eur ? "geld" : "muehe"; };
    function summe() {
      let std = 0, eur = 0, n = 0, eigen = 0;
      wahl.forEach(id => { const w = wert(id); std += w.std; eur += w.eur; n++; if (eigene[id]) eigen++; });
      return { std, eur, n, eigen };
    }
    const stdText = n => (n ? ca(`${nf(n)} ${STD}`) : `0 ${STD}`);
    const eurText = n => (n ? ca(euro(n)) : euro(0));
    function tageText(std) {
      const d = Math.round(std / 8);
      if (d >= 2) return t("Das sind rund {n} volle Arbeitstage, die du für etwas anderes hast.", "That's about {n} full working days for other things.", { n: nf(d) });
      return d === 1 ? t("Das ist rund ein voller Arbeitstag, den du für etwas anderes hast.", "That's about one full working day for other things.") : "";
    }
    const anzahlText = n => n === 0 ? t("Noch kein Helfer gewählt", "No helpers chosen yet")
      : n === 1 ? t("1 Helfer gewählt", "1 helper chosen") : t("{n} Helfer gewählt", "{n} helpers chosen", { n });
    const helferText = n => (n === 1 ? t("1 Helfer", "1 helper") : t("{n} Helfer", "{n} helpers", { n }));
    // Wie das Konto rechnet (steht klein unter dem Konto); hier = id des Helfers auf seiner eigenen Seite
    function hinweisText(s, hier) {
      if (s.n && s.eigen === s.n) return t("Alles mit deinen eigenen Zahlen gerechnet.", "Everything calculated with your own numbers.");
      if (s.eigen === 1) return t("Ein Helfer mit deinen eigenen Zahlen, die anderen mit Durchschnittswerten.", "One helper with your own numbers, the others with average values.");
      if (s.eigen) return t("{n} Helfer mit deinen eigenen Zahlen, die anderen mit Durchschnittswerten.", "{n} helpers with your own numbers, the others with average values.", { n: s.eigen });
      if (hier && P(hier) && SCHNITT(hier).rechner) return t("Geschätzt mit Durchschnittswerten. Stellst du hier den Rechner um, zählen deine eigenen Zahlen.", "Estimated with average values. If you adjust the calculator here, your own numbers count.");
      // „kommt mit“ erst, wenn man das Konto benutzt hat: Die Beispiel-Helfer allein nimmt die Seite nicht mit
      return gespeichert
        ? t("Geschätzt mit Durchschnittswerten. Auf der Seite jedes Helfers rechnest du mit deinen eigenen Zahlen, und dein Konto kommt mit.", "Estimated with average values. On each helper's page you can use your own numbers, and your account comes along.")
        : t("Geschätzt mit Durchschnittswerten. Auf der Seite jedes Helfers rechnest du mit deinen eigenen Zahlen.", "Estimated with average values. On each helper's page you can use your own numbers.");
    }

    // Zahlen zählen kurz hoch oder runter, wenn sich das Konto ändert
    const zahlen = new WeakMap();
    function zahl(el, n, text) {
      const alt = zahlen.has(el) ? zahlen.get(el) : null;
      zahlen.set(el, n);
      if (WENIG_BEWEGUNG || alt === null || alt === n || !el.getClientRects().length) { el.textContent = text(n); return; }
      const t0 = performance.now(), dauer = 450;
      const schritt = jetzt => {
        if (zahlen.get(el) !== n) return;
        const f = Math.min(1, (jetzt - t0) / dauer), e = 1 - Math.pow(1 - f, 3);
        el.textContent = text(Math.round(alt + (n - alt) * e));
        if (f < 1) requestAnimationFrame(schritt);
      };
      requestAnimationFrame(schritt);
    }
    // Knopf „Ins Zeitkonto“ / „Im Zeitkonto“ (aria-pressed sagt, ob der Helfer drin ist). Für Vorleser steht der Name des
    // Helfers versteckt dahinter; so enthält der Name des Knopfs genau den sichtbaren Text (WCAG 2.5.3).
    const PLUS = `<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path class="kt-plus" d="M8 3v10M3 8h10"/><path class="kt-haken" d="M3 8.5l3 3 7-7"/></svg>`;
    const knopf = (id, cls = "") => `<button type="button" class="kt-wahl${cls ? " " + cls : ""}" data-wahl="${esc(id)}" aria-pressed="${wahl.has(id)}">${PLUS}<span class="kt-aus">${t("Ins Zeitkonto", "Add to time account")}</span><span class="kt-ein">${t("Im Zeitkonto", "In time account")}</span><span class="kt-wer">, ${esc(P(id).name)}</span></button>`;
    // Kurzer Hüpfer, wenn sich ein Knopf umschaltet
    function hupf(el) {
      if (WENIG_BEWEGUNG || !el || !el.animate) return;
      el.animate([{ transform: "scale(1)" }, { transform: "scale(1.12)" }, { transform: "scale(1)" }], { duration: 260, easing: "ease-out", composite: "add" });
    }

    zeitkonto.k = {
      P, SCHNITT, runde,
      gespeichert: () => gespeichert,
      hat: id => wahl.has(id),
      eigen: id => eigene[id] || null,
      ids: () => [...wahl],
      wertText, art, summe, stdText, eurText, tageText, anzahlText, helferText, hinweisText, zahl, knopf, hupf,
      // an: rein oder raus; w: eigene Zahlen (aus dem Rechner), die ab jetzt für diesen Helfer zählen
      setze(id, an, w) {
        if (!P(id)) return;
        if (an) { wahl.add(id); if (w) eigene[id] = runde(w); } else wahl.delete(id);
        speichern();
      },
      eigeneZahlen(id, w) { if (P(id)) { eigene[id] = runde(w); speichern(); } },
      schnitt(id) { delete eigene[id]; speichern(); },
      // Rundgang durch die Rechner: alle Helfer im Konto mit Rechner, offen = noch ohne eigene Zahlen
      rundgang() { const ids = [...wahl].filter(id => SCHNITT(id) && SCHNITT(id).rechner); return { ids, offen: ids.filter(id => !eigene[id]) }; },
      // „Konto leeren“ löscht auch den Eintrag im Browser: Bis zum Neuladen bleibt das Konto leer, danach ist alles wie beim ersten Besuch
      leeren() { wahl.clear(); eigene = {}; gespeichert = false; try { localStorage.removeItem(SCHLUESSEL); } catch (e) { /* gesperrt */ } melden(); },
      beiAenderung: f => hoerer.push(f)
    };
    return zeitkonto.k;
  }

  // Die Kachel mit dem Zeitkonto: dunkel, mit Summe, Tagen, Anzahl und „Konto leeren“
  function kontoKarte(cls = "") {
    return `
      <div class="kt-konto${cls ? " " + cls : ""}">
        <h3 class="kt-titel">${t("Dein Zeitkonto", "Your time account")}</h3>
        <p class="kt-summe"><strong data-k="std"></strong><span>${t("mehr freie Zeit im Jahr", "more free time a year")}</span></p>
        <p class="kt-tage" data-k="tage"></p>
        <p class="kt-summe"><strong data-k="eur"></strong><span>${t("gespart im Jahr", "saved a year")}</span></p>
        <a class="kt-rundgang" data-k-rundgang hidden></a>
        <p class="kt-anzahl"><span data-k="anzahl"></span><button type="button" class="kt-leeren" data-k-leeren>${t("Konto leeren", "Empty account")}</button></p>
        <p class="kt-klein" data-k="hinweis"></p>
      </div>`;
  }

  // Rundgang durch die Rechner (Lukas 16.11.2026): Ein Knopf im Konto führt der Reihe nach zu den Rechnern aller Helfer im Konto.
  // Die Liste reist in der Adresse mit (?rundgang=id1,id2#rechner), es wird nichts Neues gespeichert.
  function rundgangHref(ids, id) { return `${esc(id)}?rundgang=${ids.map(esc).join(",")}#rechner`; }
  function rundgangKnopf(el) {
    const r = zeitkonto().rundgang();
    el.hidden = !r.offen.length;
    if (!r.offen.length) return;
    el.href = rundgangHref(r.ids, r.offen[0]);
    el.textContent = r.offen.length === r.ids.length ? t("Mit deinen Zahlen rechnen", "Use your own numbers")
      : t("Deine Zahlen: noch {n} offen", "Your numbers: {n} left", { n: r.offen.length });
  }
  // Auf der Produktseite: Leiste oben mit Schritt, Punkten (Haken = eigene Zahlen) und „Weiter“
  function rundgangLeiste(id) {
    const K = zeitkonto();
    const rg = [...new Set((new URLSearchParams(location.search).get("rundgang") || "").split(","))].filter(x => K.P(x) && K.SCHNITT(x) && K.SCHNITT(x).rechner);
    const i = rg.indexOf(id);
    if (i < 0) return;
    const bar = document.createElement("nav");
    bar.className = "kt-rundgang-leiste";
    bar.setAttribute("aria-label", t("Deine Zahlen, Schritt für Schritt", "Your numbers, step by step"));
    document.body.prepend(bar);
    document.body.classList.add("kt-im-rundgang");
    const naechst = rg[i + 1];
    const malen = () => {
      bar.innerHTML = `<div class="kt-rg-innen">
        <span class="kt-rg-titel">${t("Deine Zahlen", "Your numbers")}<b>${t("{i} von {n}", "{i} of {n}", { i: i + 1, n: rg.length })}</b></span>
        <ol class="kt-rg-punkte">${rg.map(x => `<li><a href="${rundgangHref(rg, x)}" class="${x === id ? "jetzt" : ""}${K.eigen(x) ? " fertig" : ""}"${x === id ? ' aria-current="step"' : ""} title="${esc(K.P(x).name)}"><span class="kt-wer">${esc(K.P(x).name)}${K.eigen(x) ? ", " + t("erledigt", "done") : ""}</span></a></li>`).join("")}</ol>
        <span class="kt-rg-tipp">${K.eigen(id) ? t("Deine Zahlen sind im Konto.", "Your numbers are in your account.") : t("Stell den Rechner auf dich ein.", "Set the calculator to suit you.")}</span>
        <a class="kt-rg-weiter${K.eigen(id) ? " bereit" : ""}" href="${naechst ? rundgangHref(rg, naechst) : "./#helfer"}">${naechst
          ? `${t("Weiter", "Next")}<span class="kt-rg-name">: ${esc(K.P(naechst).name)}</span>` : t("Fertig", "Done")}</a>
        <a class="kt-rg-zu" href="${esc(id)}" aria-label="${t("Rundgang beenden", "End the walkthrough")}">✕</a>
      </div>`;
    };
    malen();
    K.beiAenderung(malen);
  }

  // Die Tageszeiten der Startseite mit ihren Helfern (ids aus produkte.js), vom Morgen bis zum Wochenende.
  // Neuer Helfer: hier eintragen. Wer fehlt, steht am Ende beim Wochenende.
  function tageszeiten() {
    return [
      { id: "morgen", name: t("Morgens", "Mornings"), text: t("Kaffee, Dusche, Zähne: Der Tag fängt entspannt an.", "Coffee, shower, teeth: the day starts relaxed."),
        ids: ["kaffeevollautomat", "sparduschkopf", "zahnbuerste"] },
      { id: "arbeit", name: t("Während du arbeitest", "While you work"), text: t("Zu Hause läuft die Arbeit weiter, nur ohne dich.", "At home the work carries on, just without you."),
        ids: ["waschtrockner", "saugroboter", "balkonkraftwerk", "thermostate"] },
      { id: "feierabend", name: t("Feierabend", "After work"), text: t("Du gibst die Zutaten hinein, den Rest erledigen die Helfer.", "You put the ingredients in, the helpers do the rest."),
        ids: ["airfryer", "reiskocher", "kuechenmaschine-kochfunktion", "wassersprudler"] },
      { id: "essen", name: t("Nach dem Essen", "After dinner"), text: t("Auch das Aufräumen gibst du ab.", "You hand off the tidying up too."),
        ids: ["mini-geschirrspueler", "stretchdeckel"] },
      { id: "abend", name: t("Abends", "Evenings"), text: t("Jetzt gehört die Zeit dir.", "Now the time is yours."),
        ids: ["smarte-lampen", "kindle", "klimaanlage"] },
      { id: "wochenende", name: t("Am Wochenende", "At the weekend"), text: t("Was übrig bleibt, geht leichter von der Hand.", "What's left is easier to get done."),
        ids: ["akkusauger", "reinigungsbuerste", "kuechenmaschine"] }
    ];
  }
  // Kleine Zeichen für die Tageszeiten (Strichzeichnungen, Farbe kommt aus dem Text)
  function tzIcon(id) {
    const d = {
      morgen: "M3 18h18M7 18a5 5 0 0 1 10 0M12 7.5v3M5.4 11.2l2 1.4M18.6 11.2l-2 1.4M9 21.5h6",
      arbeit: "M12 8.2a3.8 3.8 0 1 1 0 7.6a3.8 3.8 0 1 1 0-7.6zM12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8",
      feierabend: "M4 11h16v4.5a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 15.5zM2 11h2M20 11h2M9 7.5c0-1.2 1.2-1.6 1.2-2.8M14 7.5c0-1.2 1.2-1.6 1.2-2.8",
      essen: "M12 5.5a6.5 6.5 0 1 1 0 13a6.5 6.5 0 1 1 0-13zM12 9a3 3 0 1 1 0 6a3 3 0 1 1 0-6zM2.8 4v4.5M2.8 8.5v11M21.2 4c-1.4 0-2 2-2 4.5s.7 3 2 3v8",
      abend: "M19.5 14.6A7.8 7.8 0 1 1 9.4 4.5a6.2 6.2 0 0 0 10.1 10.1z",
      wochenende: "M5 6h14a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 19 20H5a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 5 6zM3.5 10.5h17M8 3.5v4M16 3.5v4M9 15l2 2 4-4"
    }[id];
    return `<span class="tz-icon"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${d}"/></svg></span>`;
  }

  // Startseite: links die Tageszeiten mit ihren Helfern, rechts (am PC) bleibt das Zeitkonto stehen, darüber das Video des
  // Helfers unter der Maus. Am Handy ist jede Tageszeit eine Reihe zum Wischen, das Konto steht als Leiste am unteren Rand.
  function baueTagUndKonto(ziel) {
    const K = zeitkonto(), P = K.P;
    const TAG = tageszeiten();
    const drin = new Set(TAG.flatMap(z => z.ids));
    TAG[TAG.length - 1].ids.push(...PRODUKTE.map(p => p.id).filter(id => !drin.has(id)));
    // Farbig hinterlegt, was der Helfer ersetzt („Statt …“), damit man gleich die Arbeit sieht, die nervt; ohne statt klein der Bereich
    const statt = p => p.statt
      ? `<span class="statt"><span>${esc(p.statt).replace(/^(statt|instead of)\s+/i, "<b>$1</b> ")}</span></span>`
      : `<span class="cat">${esc(p.kategorie)}</span>`;
    // Standbilder erst als leerer Rahmen; gebaut werden sie, wenn ihre Tageszeit in die Nähe des Bildschirms kommt (unten)
    // Gemalte Kachelbilder (Lukas hat sie am 16.11. pro Helfer ausgewählt). Neuer Helfer ohne Bild: Standbild aus dem Video.
    // Das Video läuft am Handy weiterhin im Bild (darüber), am PC über dem Konto.
    const kachelbild = p => KACHELBILDER.has(p.id)
      ? `<img class="kachel-foto" data-srcset="/bilder/kacheln/${esc(p.id)}-400.webp 400w, /bilder/kacheln/${esc(p.id)}-600.webp 600w, /bilder/kacheln/${esc(p.id)}-800.webp 800w" sizes="(max-width: 640px) calc(84vw - 22px), (max-width: 999px) 45vw, 340px" width="400" height="225" alt="" loading="lazy" decoding="async">`
      : "";
    const bild = p => `<div class="v-bild">${kachelbild(p) || (p.bild ? `<img src="${esc(p.bild)}" alt="${esc(p.name)}" loading="lazy">`
      : HAT_VIDEOS && VIDEOS[p.video] ? `<div class="buehne standbild" aria-hidden="true"></div>` : standbild(p))}</div>`;
    // Ein Klick irgendwo auf die Kachel nimmt den Helfer ins Konto. Der Knopf sitzt auf dem oberen Rand, „Ansehen“ öffnet die Seite.
    const kachel = p => `
      <div class="kt-karte" id="zu-${esc(p.id)}" data-kt="${esc(p.id)}" data-id="${esc(p.id)}">
        ${K.knopf(p.id, "kt-am-rand")}
        <div class="karte">
          <div class="karte-bild">${bild(p)}</div>
          <div class="karte-text">
            ${statt(p)}
            <span class="karte-name">${esc(p.name)}</span>
            <span class="karte-zeile">${esc(p.nutzen || p.kurz)}</span>
            <span class="karte-fuss"><span class="kt-wert" data-wert="${esc(p.id)}"></span><a class="mehr kt-ansehen" href="${esc(p.id)}" aria-label="${esc(t("{name} ansehen", "View {name}", { name: p.name }))}">${t("Ansehen", "View")}</a></span>
          </div>
        </div>
      </div>`;
    ziel.innerHTML = `
      <div class="t1-tag">${TAG.map((z, i) => ({ z, i, ps: z.ids.map(P).filter(Boolean) })).filter(x => x.ps.length).map(({ z, i, ps }) => `
        <section class="t1-band tz-${i + 1}" aria-labelledby="t1-${z.id}">
          <div class="t1-zeit">${tzIcon(z.id)}<div><h3 id="t1-${z.id}">${esc(z.name)}</h3><p>${esc(z.text)}</p></div></div>
          <div class="t1-karten">${ps.map(kachel).join("")}</div>
        </section>`).join("")}
      </div>
      <aside class="t1-seite" aria-label="${t("Dein Zeitkonto", "Your time account")}"><div class="t1-fest">
        <a class="kt-schau" href="saugroboter"><div class="v-bild"></div><span class="kt-schau-text"><span class="kt-schau-name"></span><span class="kt-schau-wert"></span></span></a>
        ${kontoKarte()}
      </div></aside>`;
    // Standbilder einer Tageszeit bauen, sobald sie in die Nähe des Bildschirms kommt, die ganze Reihe auf einmal (so kommt
    // beim Wischen am Handy nichts nach). Alle 19 gleich beim Laden zu bauen hielt das Handy spürbar auf.
    // Die Kachelbilder bekommen ihre Quelle auch erst hier (sonst lädt der Browser am Handy fast alle 19 auf einmal)
    const fuelle = band => {
      band.querySelectorAll("img.kachel-foto[data-srcset]").forEach(i => { i.srcset = i.dataset.srcset; i.removeAttribute("data-srcset"); });
      band.querySelectorAll(".kt-karte").forEach(k => {
        const leer = k.querySelector(".buehne.standbild:empty"), p = leer && P(k.dataset.id);
        if (p) leer.outerHTML = standbild(p);
      });
      einfrierenSpaeter(band);
    };
    const baender = ziel.querySelectorAll(".t1-band");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); fuelle(e.target); } }), { rootMargin: "800px 0px" });
      baender.forEach(b => io.observe(b));
    } else baender.forEach(fuelle);

    // Alles, was vom Konto abhängt, neu zeichnen (auch die Leiste am Handy)
    const bereiche = () => [ziel, document.querySelector(".kt-leiste")].filter(Boolean);
    function zeigen() {
      const s = K.summe();
      bereiche().forEach(b => {
        b.querySelectorAll('[data-k="std"]').forEach(el => K.zahl(el, s.std, K.stdText));
        b.querySelectorAll('[data-k="eur"]').forEach(el => K.zahl(el, s.eur, K.eurText));
        b.querySelectorAll('[data-k="tage"]').forEach(el => { el.textContent = K.tageText(s.std); });
        b.querySelectorAll('[data-k="anzahl"]').forEach(el => { el.textContent = K.anzahlText(s.n); });
        b.querySelectorAll('[data-k="hinweis"]').forEach(el => { el.textContent = K.hinweisText(s); });
        b.querySelectorAll("[data-k-leeren]").forEach(el => { el.hidden = s.n === 0; });
        b.querySelectorAll("[data-k-rundgang]").forEach(rundgangKnopf);
      });
      ziel.querySelectorAll("[data-wahl]").forEach(b => b.setAttribute("aria-pressed", String(K.hat(b.dataset.wahl))));
      ziel.querySelectorAll("[data-kt]").forEach(el => el.classList.toggle("kt-an", K.hat(el.dataset.kt)));
      ziel.querySelectorAll("[data-wert]").forEach(el => {
        const id = el.dataset.wert, a = K.art(id);
        el.className = "kt-wert" + (a === "geld" ? " kt-geld" : a === "muehe" ? " kt-muehe" : "");
        el.innerHTML = `<span>${esc(K.wertText(id))}</span>${K.eigen(id) ? `<span class="kt-eigen">${t("deine Zahlen", "your numbers")}</span>` : ""}`;
      });
    }
    K.beiAenderung(zeigen);
    // Klick auf den Knopf oder irgendwo auf die Kachel: Helfer rein oder raus. Nur „Ansehen“ (ein Link) öffnet die Seite des Helfers.
    const klick = ev => {
      const el = ev.target;
      if (!el.closest) return;
      const b = el.closest("[data-wahl]");
      if (b) { ev.preventDefault(); K.setze(b.dataset.wahl, !K.hat(b.dataset.wahl)); K.hupf(b); return; }
      if (el.closest("[data-k-leeren]")) { K.leeren(); return; }
      if (el.closest("a, button, input, label, summary, select, textarea")) return;
      const k = el.closest(".kt-karte[data-kt]");
      if (!k || ev.detail > 1) return; // Doppelklick zählt nur einmal
      K.setze(k.dataset.kt, !K.hat(k.dataset.kt));
      K.hupf(k.querySelector("[data-wahl]"));
    };
    ziel.addEventListener("click", klick);

    // Videos: Mit Maus läuft das Video des Helfers unter der Maus über dem Konto. Ohne Maus (Handy) läuft das Video der
    // Kachel, die ganz zu sehen ist und der Bildschirmmitte am nächsten steht, nach kurzer Pause in ihrem Bild.
    let film = null;
    function filmStart(bildEl, p) {
      if (film && film.bildEl === bildEl) return;
      filmStop();
      if (!bildEl || !p || !HAT_VIDEOS || !VIDEOS[p.video] || typeof baueVideo !== "function") return;
      const box = document.createElement("div");
      box.className = "karte-video";
      box.setAttribute("aria-hidden", "true");
      bildEl.appendChild(box);
      const player = baueVideo(p, VIDEOS[p.video], box, { vonSelbst: false, schleife: true, schlicht: true, start: 0 });
      player.abspielen();
      film = { bildEl, box, player };
    }
    function filmStop() {
      if (!film) return;
      film.player.anhalten(); film.box.remove(); film = null;
    }
    // Die Vorschau über dem Konto zeigt CSS nur am PC mit genug Höhe; erst dann baut sie ihr Standbild (spart am Handy Zeit)
    const schau = ziel.querySelector(".kt-schau");
    const schauBild = schau.querySelector(".v-bild"), schauName = schau.querySelector(".kt-schau-name"), schauWert = schau.querySelector(".kt-schau-wert");
    const schmal = window.matchMedia && matchMedia("(max-width: 999px)"), flach = window.matchMedia && matchMedia("(max-height: 760px)");
    const schauDa = () => !(schmal && schmal.matches) && !(flach && flach.matches);
    let schauId = "", schauGebaut = "";
    const zeigeSchau = id => {
      if (!P(id)) return;
      schauId = id;
      if (id === schauGebaut || !schauDa()) return;
      schauGebaut = id;
      const p = P(id);
      filmStop();
      schau.setAttribute("href", p.id);
      schauBild.innerHTML = standbild(p);
      einfrieren(schau);
      schauName.textContent = p.name;
      schauWert.textContent = K.wertText(id);
    };
    [schmal, flach].forEach(mq => mq && mq.addEventListener && mq.addEventListener("change", () => zeigeSchau(schauId)));
    K.beiAenderung(() => { if (schauGebaut) schauWert.textContent = K.wertText(schauGebaut); });
    if (MIT_MAUS) {
      let timer = 0, el = null;
      ziel.addEventListener("pointerover", ev => {
        if (ev.pointerType !== "mouse") return;
        const k = ev.target.closest(".kt-karte");
        if (!k || k === el) return;
        el = k; clearTimeout(timer);
        timer = setTimeout(() => { if (el === k) { zeigeSchau(k.dataset.id); if (schauDa()) filmStart(schauBild, P(k.dataset.id)); } }, 140);
      });
      ziel.addEventListener("pointerout", ev => {
        const k = ev.target.closest(".kt-karte");
        if (!k || (ev.relatedTarget && k.contains(ev.relatedTarget))) return;
        if (el === k) { el = null; clearTimeout(timer); filmStop(); }
      });
    } else if (!WENIG_BEWEGUNG) {
      let geplant = false, timer = 0, jetzt = null;
      const bildVon = k => k.querySelector(".v-bild");
      const waehle = () => {
        geplant = false;
        let best = null, bd = 1e9;
        const mitte = innerHeight * 0.5;
        ziel.querySelectorAll(".kt-karte").forEach(k => {
          const r = bildVon(k).getBoundingClientRect();
          if (!r.width || r.top < 70 || r.bottom > innerHeight - 8 || r.left < -4 || r.right > innerWidth + 4) return;
          const d = Math.abs(r.top + r.height / 2 - mitte) - (k === jetzt ? 40 : 0);
          if (d < bd) { bd = d; best = k; }
        });
        if (best === jetzt) return;
        jetzt = best; clearTimeout(timer); filmStop();
        if (best) timer = setTimeout(() => { if (jetzt === best && best.isConnected) filmStart(bildVon(best), P(best.dataset.id)); }, 1200);
      };
      const bald = () => { if (!geplant) { geplant = true; requestAnimationFrame(waehle); } };
      addEventListener("scroll", bald, { passive: true });
      addEventListener("resize", bald);
      ziel.addEventListener("scroll", bald, { passive: true, capture: true }); // Reihen zum Wischen
      bald();
    }
    ziel.addEventListener("focusin", ev => { const k = ev.target.closest(".kt-karte"); if (k) zeigeSchau(k.dataset.id); });
    zeigeSchau(K.ids()[0] || "saugroboter");

    // Am Handy: das Konto als schmale Leiste am unteren Rand, solange man bei den Tageszeiten ist. Tippen klappt es auf.
    // Steht die ganze Konto-Kachel gerade sichtbar auf der Seite, macht die Leiste Platz (sonst stünde es doppelt da).
    const l = document.createElement("div");
    l.className = "kt-leiste";
    l.innerHTML = `
      <div class="kt-blatt" id="kt-blatt" hidden>${kontoKarte("kt-im-blatt")}</div>
      <button type="button" class="kt-leiste-knopf" aria-expanded="false" aria-controls="kt-blatt">
        <span class="kt-leiste-titel">${t("Dein Zeitkonto", "Your time account")}</span>
        <span class="kt-leiste-werte"><strong data-k="std"></strong><span aria-hidden="true">·</span><strong data-k="eur"></strong><span class="kt-leiste-jahr">${t("im Jahr", "a year")}</span></span>
        <span class="kt-leiste-pfeil" aria-hidden="true"></span>
      </button>`;
    document.body.appendChild(l);
    l.addEventListener("click", klick);
    const lKnopf = l.querySelector(".kt-leiste-knopf"), blatt = l.querySelector(".kt-blatt");
    const auf = an => { lKnopf.setAttribute("aria-expanded", String(an)); blatt.hidden = !an; l.classList.toggle("kt-offen", an); };
    lKnopf.addEventListener("click", () => auf(lKnopf.getAttribute("aria-expanded") !== "true"));
    document.addEventListener("click", ev => { if (!blatt.hidden && !l.contains(ev.target)) auf(false); });
    addEventListener("keydown", ev => { if (ev.key === "Escape" && !blatt.hidden) { auf(false); lKnopf.focus(); } });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(e => { l.classList.toggle("kt-da", e[0].isIntersecting); if (!e[0].isIntersecting) auf(false); }, { rootMargin: "-25% 0px -25% 0px" })
        .observe(ziel.querySelector(".t1-tag"));
      const sichtbar = new Set();
      const io = new IntersectionObserver(e => {
        e.forEach(x => (x.intersectionRatio >= 0.5 ? sichtbar.add(x.target) : sichtbar.delete(x.target)));
        l.classList.toggle("kt-weg", sichtbar.size > 0);
        if (sichtbar.size) auf(false);
      }, { threshold: [0, 0.5, 1], rootMargin: "0px 0px -90px 0px" });
      ziel.querySelectorAll(".kt-konto").forEach(k => io.observe(k));
    }
    (ziel.closest(".helfer") || ziel).classList.add("kt-mit-leiste"); // am Handy Platz unter der letzten Reihe für die Leiste
    zeigen();

    // Zurück von einer Produktseite (#zu-<helfer>): Zur Kachel springt der Browser bzw. springeZumAnker, hier leuchtet sie kurz auf
    function zuKachel() {
      const m = /^#(zu-[a-z0-9-]+)$/.exec(location.hash);
      const k = m && document.getElementById(m[1]);
      if (!k) return;
      k.classList.add("kt-zurueck");
      setTimeout(() => k.classList.remove("kt-zurueck"), 1800);
    }
    zuKachel();
    addEventListener("hashchange", zuKachel);
  }

  // Produktseite: Knopf unter dem Namen und im Rechner, unten die Leiste mit dem Konto (am PC eine Karte rechts unten).
  // Knopf unter dem Namen und Leiste gibt es nur, wenn man das Konto schon benutzt hat; den Knopf im Rechner immer.
  function kontoProduktseite(p, ziel) {
    const K = zeitkonto(), id = p.id;
    if (!K.P(id)) return;
    let rechner = null; // die eigenen Zahlen aus dem Rechner, sobald man ihn selbst umgestellt hat

    // 1) Unter dem Namen (nach „Zuletzt geprüft“)
    const kopf = document.createElement("div");
    kopf.className = "kt-p-kopf";
    kopf.innerHTML = `${K.knopf(id, "kt-p-knopf")}<span class="kt-p-wert"></span>`;
    const heroText = ziel.querySelector(".p-hero-text");
    const nach = heroText && (heroText.querySelector(".geprueft-oben") || heroText.querySelector("h1"));
    if (nach) nach.after(kopf); else if (heroText) heroText.prepend(kopf);

    // 2) Im Rechner: Knopf neben „Ergebnis teilen“ und darunter, womit das Konto für diesen Helfer rechnet
    const teilen = ziel.querySelector(".rechner .teilen");
    let rZeile = null;
    if (teilen) {
      const tk = teilen.querySelector(".teilen-knopf");
      (tk || teilen.firstChild).insertAdjacentHTML(tk ? "afterend" : "beforebegin", K.knopf(id, "kt-r-knopf"));
      teilen.insertAdjacentHTML("afterend", `<p class="kt-r-zeile" hidden></p>`);
      rZeile = teilen.nextElementSibling;
    }

    // 3) Unten die Leiste (am PC eine kleine Karte rechts unten). Tippen klappt das ganze Konto auf.
    const leiste = document.createElement("div");
    leiste.className = "kt-leiste kt-p-leiste";
    leiste.innerHTML = `
      <div class="kt-blatt" id="kt-blatt" hidden>
        <div class="kt-konto kt-im-blatt">
          <h3 class="kt-titel">${t("Dein Zeitkonto", "Your time account")}</h3>
          <p class="kt-summe"><strong data-k="std"></strong><span>${t("mehr freie Zeit im Jahr", "more free time a year")}</span></p>
          <p class="kt-tage" data-k="tage"></p>
          <p class="kt-summe"><strong data-k="eur"></strong><span>${t("gespart im Jahr", "saved a year")}</span></p>
          <ul class="kt-liste" data-k="liste"></ul>
          <a class="kt-rundgang" data-k-rundgang hidden></a>
          <p class="kt-klein" data-k="hinweis"></p>
          <div class="kt-blatt-fuss"><a class="kt-alle" href="./#zu-${esc(id)}">${t("Alle Helfer ansehen", "See all helpers")}</a><button type="button" class="kt-leeren">${t("Konto leeren", "Empty account")}</button></div>
        </div>
      </div>
      <button type="button" class="kt-leiste-knopf" aria-expanded="false" aria-controls="kt-blatt">
        <span class="kt-leiste-titel">${t("Dein Zeitkonto", "Your time account")} · <span data-k="helfer"></span></span>
        <span class="kt-leiste-werte"><strong data-k="std"></strong><span aria-hidden="true">·</span><strong data-k="eur"></strong><span class="kt-leiste-jahr">${t("im Jahr", "a year")}</span></span>
        <span class="kt-leiste-pfeil" aria-hidden="true"></span>
      </button>`;
    document.body.appendChild(leiste);
    const lKnopf = leiste.querySelector(".kt-leiste-knopf"), blatt = leiste.querySelector(".kt-blatt");
    const auf = an => { lKnopf.setAttribute("aria-expanded", String(an)); blatt.hidden = !an; leiste.classList.toggle("kt-offen", an); };
    lKnopf.addEventListener("click", () => auf(lKnopf.getAttribute("aria-expanded") !== "true"));
    document.addEventListener("click", ev => { if (!blatt.hidden && !leiste.contains(ev.target)) auf(false); });
    addEventListener("keydown", ev => { if (ev.key === "Escape" && !blatt.hidden) { auf(false); lKnopf.focus(); } });
    leiste.querySelector(".kt-leeren").addEventListener("click", () => { auf(false); K.leeren(); });

    // Die Leiste macht Platz, solange ein Kaufknopf (Amazon) ganz unten im Bild steht. Am Handy geht sie über die ganze Breite,
    // am PC ist sie eine Karte rechts unten: Dort zählen nur Knöpfe, die wirklich unter der Karte liegen.
    if ("IntersectionObserver" in window) {
      const unten = new Set();
      const darunter = r => { const b = leiste.getBoundingClientRect(); return r.right > b.left - 16 && r.left < b.right + 16; };
      const io = new IntersectionObserver(e => {
        e.forEach(x => (x.isIntersecting && darunter(x.boundingClientRect) ? unten.add(x.target) : unten.delete(x.target)));
        leiste.classList.toggle("kt-weg", unten.size > 0);
        if (unten.size) auf(false);
      }, { rootMargin: "-86% 0px 0px 0px" });
      const beobachten = () => { io.disconnect(); unten.clear(); ziel.querySelectorAll("a.buy").forEach(b => io.observe(b)); };
      beobachten();
      let breite = innerWidth;
      addEventListener("resize", () => { if (innerWidth !== breite) { breite = innerWidth; beobachten(); } });
    }

    // Klick auf einen der Knöpfe: rein oder raus. Hat man den Rechner schon umgestellt, zählen gleich die eigenen Zahlen.
    document.addEventListener("click", ev => {
      const b = ev.target.closest && ev.target.closest("[data-wahl]");
      if (!b) return;
      ev.preventDefault();
      const an = !K.hat(b.dataset.wahl);
      K.setze(b.dataset.wahl, an, an && b.dataset.wahl === id ? rechner : null);
      K.hupf(b);
    });
    if (rZeile) rZeile.addEventListener("click", ev => { if (ev.target.closest(".kt-r-schnitt")) K.schnitt(id); });
    // Der Rechner meldet jedes neue Ergebnis (vonHand: Man hat selbst etwas umgestellt). Eigene Zahlen gibt es erst, wenn man
    // selbst etwas umgestellt hat; danach rechnet das Konto jede Änderung mit, solange der Helfer im Konto ist.
    zeitkonto.rechner = (pid, e, vonHand) => {
      if (pid !== id || !e) return;
      if (!vonHand && !rechner) return;
      rechner = K.runde({ std: (e.minutenProWoche * 52) / 60, eur: e.euroProMonat * 12 });
      if (K.hat(id)) K.eigeneZahlen(id, rechner); else zeigen();
    };

    let bereit = false; // die Leiste fährt erst nach dem ersten Bild herein
    function zeigen() {
      const s = K.summe(), an = K.hat(id), eig = K.eigen(id), da = K.gespeichert();
      document.querySelectorAll(`[data-wahl="${id}"]`).forEach(b => b.setAttribute("aria-pressed", String(an)));
      kopf.hidden = !da;
      kopf.querySelector(".kt-p-wert").innerHTML = esc(K.wertText(id)) + (an && eig ? ` <span class="kt-eigen">${t("deine Zahlen", "your numbers")}</span>` : "");
      if (rZeile) {
        const z = an && eig ? `${t("Dein Zeitkonto rechnet hier mit deinen Zahlen: {x} im Jahr.", "Your time account uses your numbers here: {x} a year.", { x: `<strong>${esc(K.wertText(id, false))}</strong>` })} <button type="button" class="kt-r-schnitt">${t("Durchschnitt nehmen", "Use the average")}</button>`
          : an ? esc(t("Im Zeitkonto mit dem Durchschnitt ({x}). Stellst du den Rechner um, zählen deine Zahlen.", "In your time account with the average ({x}). If you adjust the calculator, your numbers count.", { x: K.wertText(id) }))
          : !da ? esc(t("Im Zeitkonto sammelst du Helfer und siehst, wie viel Zeit und Geld im Jahr zusammenkommt.", "In the time account you collect helpers and see how much time and money adds up in a year."))
          : rechner ? esc(t("Nimmst du ihn ins Zeitkonto, zählen deine Zahlen von hier.", "If you add it to your time account, your numbers from here count.")) : "";
        rZeile.innerHTML = z;
        rZeile.hidden = !z;
      }
      const sichtbar = da && s.n > 0;
      if (!sichtbar) auf(false);
      if (bereit) leiste.classList.toggle("kt-da", sichtbar);
      document.body.classList.toggle("kt-mit-leiste", sichtbar);
      leiste.querySelectorAll('[data-k="std"]').forEach(el => K.zahl(el, s.std, K.stdText));
      leiste.querySelectorAll('[data-k="eur"]').forEach(el => K.zahl(el, s.eur, K.eurText));
      leiste.querySelector('[data-k="tage"]').textContent = K.tageText(s.std);
      leiste.querySelector('[data-k="helfer"]').textContent = K.helferText(s.n);
      leiste.querySelector('[data-k="hinweis"]').textContent = K.hinweisText(s, id);
      leiste.querySelectorAll("[data-k-rundgang]").forEach(rundgangKnopf);
      leiste.querySelector('[data-k="liste"]').innerHTML = PRODUKTE.filter(x => K.hat(x.id)).map(x => `
        <li${x.id === id ? ' class="kt-hier"' : ""}>${x.id === id ? `<span class="kt-l-name">${esc(x.name)}</span>` : `<a class="kt-l-name" href="${esc(x.id)}">${esc(x.name)}</a>`}<span class="kt-l-wert">${esc(K.wertText(x.id, false))}${K.eigen(x.id) ? ` <span class="kt-eigen">${t("deine Zahlen", "your numbers")}</span>` : ""}</span></li>`).join("");
    }
    K.beiAenderung(zeigen);
    zeigen();
    rundgangLeiste(id);
    requestAnimationFrame(() => requestAnimationFrame(() => { bereit = true; zeigen(); }));
  }

  // ---------- Geschenke-Seite (myle.life/geschenke, Texte in geschenke.js) ----------
  // Pro Gerät: wie viel Zeit (oder Geld) es im Jahr spart, gerechnet mit den Startwerten seines Rechners
  function jahresErsparnis(p) {
    const r = HAT_RECHNER && p.rechner && RECHNER[p.rechner];
    if (!r) return null;
    try {
      const w = Object.fromEntries(felderFuer(p, r).map(f => [f.id, f.wert]));
      const e = r.berechne(w);
      return { std: (e.minutenProWoche * 52) / 60, geld: e.euroProMonat * 12 };
    } catch (e) { return null; }
  }
  function baueGeschenke() {
    const ziel = document.getElementById("geschenkseite");
    const G = typeof GESCHENKE !== "undefined" ? GESCHENKE : null;
    if (!ziel || !G) return;
    const spart = p => {
      const e = jahresErsparnis(p);
      if (e && e.std >= 5) return G.spartStd.replace("{n}", nf(e.std >= 20 ? Math.round(e.std / 5) * 5 : Math.round(e.std)));
      if (e && e.geld >= 20) return G.spartGeld.replace("{geld}", euro(Math.round(e.geld / 5) * 5));
      return LABELS[(p.spart || [])[0]] || "";
    };
    const karteFuer = id => {
      const p = PRODUKTE.find(x => x.id === id);
      if (!p || p.keinModell) return "";
      return `
        <a class="karte geschenk" href="${esc(p.id)}">
          <div class="karte-bild">${p.bild ? `<img src="${esc(p.bild)}" alt="${esc(p.name)}" loading="lazy">` : standbild(p)}</div>
          <div class="karte-text">
            <span class="geschenk-spart">${esc(spart(p))}</span>
            <span class="karte-name">${esc(p.name)}</span>
            <span class="karte-zeile">${esc((G.warum || {})[id] || p.nutzen || p.kurz)}</span>
            <span class="karte-fuss"><span class="mehr">${esc(G.knopf)}</span></span>
          </div>
        </a>`;
    };
    const gruppen = (G.gruppen || []).map((g, i) => ({ ...g, karten: (g.produkte || []).map(karteFuer).filter(Boolean) })).filter(g => g.karten.length);
    ziel.innerHTML = `
      <nav class="wrap brotkrumen" aria-label="${t("Brotkrumen", "Breadcrumb")}"><a href="./#helfer">${t("Alle Helfer", "All helpers")}</a><span aria-hidden="true">/</span><span>${esc(G.eyebrow)}</span></nav>
      <section class="wrap intro geschenk-intro">
        <span class="eyebrow">${esc(G.eyebrow)}</span>
        <h1>${esc(G.titel)}</h1>
        ${(G.einstieg || []).map(x => `<p>${esc(x)}</p>`).join("")}
        <ul class="geschenk-sprung">${gruppen.map((g, i) => `<li><a class="chip" href="#gruppe-${i + 1}">${esc(g.titel)}</a></li>`).join("")}</ul>
      </section>
      ${gruppen.map((g, i) => `
      <section class="wrap p-block geschenk-gruppe" id="gruppe-${i + 1}" aria-labelledby="gruppe-${i + 1}-titel">
        <h2 class="p-titel" id="gruppe-${i + 1}-titel">${esc(g.titel)}</h2>
        ${g.text ? `<p class="p-intro">${esc(g.text)}</p>` : ""}
        <div class="karten">${g.karten.join("")}</div>
      </section>`).join("")}
      ${G.hinweis ? `<p class="wrap geschenk-hinweis">${esc(G.hinweis)}</p>` : ""}
      ${(G.fragen || []).length ? `
      <section class="wrap p-block" id="fragen" aria-labelledby="fragen-titel">
        <h2 class="p-titel" id="fragen-titel">${esc(G.fragenTitel)}</h2>
        <div class="faq">${G.fragen.map(q => `<details class="frage"><summary>${esc(q.f)}</summary><p>${esc(q.a)}</p></details>`).join("")}</div>
      </section>` : ""}
      <section class="wrap p-block" id="newsletter"><div data-newsletter></div></section>`;
    einfrieren(ziel);
  }

  // „Meine Quellen“ für Produkt- und Ratgeberseiten. Einträge ohne url stehen nur als Text da.
  function quellenAbschnitt(quellen, intro) {
    const qs = (quellen || []).filter(q => q && q.name && (!q.url || /^https:\/\//.test(q.url)));
    return qs.length ? `
      <section class="wrap p-block" id="quellen" aria-labelledby="quellen-titel">
        <h2 class="p-titel" id="quellen-titel">${t("Meine Quellen", "My sources")}</h2>
        <p class="p-intro">${intro}</p>
        ${(liste => qs.length > 6 ? `<details class="quellen-details"><summary>${t("Alle {n} Quellen anzeigen", "Show all {n} sources", { n: qs.length })}</summary>${liste}</details>` : liste)(
          `<ul class="quellen">${qs.map(q => `<li>${q.url ? `<a href="${esc(q.url)}" target="_blank" rel="nofollow noopener">${esc(q.name)}</a>` : esc(q.name)}${q.text ? `<span class="quelle-text">, ${esc(q.text)}</span>` : ""}</li>`).join("")}</ul>`)}
      </section>` : "";
  }

  // ---------- Ratgeber (myle.life/ratgeber und myle.life/ratgeber-<thema>, Texte in ratgeber.js) ----------
  // Jeder Ratgeber beantwortet eine Frage: kurze Antwort oben, dann Abschnitte, „Wann eher nicht“, Verweis auf die
  // passende Produktseite mit Rechner, Fragen und Antworten und „Meine Quellen“.
  function datumText(d) {
    return /^\d{4}-\d{2}-\d{2}$/.test(String(d || "")) ? new Date(d + "T12:00:00Z").toLocaleDateString(ZAHLEN, { month: "long", year: "numeric", timeZone: "UTC" }) : "";
  }
  function baueRatgeber() {
    const ziel = document.getElementById("ratgeberseite");
    const R = typeof RATGEBER !== "undefined" ? RATGEBER : [];
    const r = R.find(x => x.id === document.body.dataset.ratgeber);
    if (!ziel || !r) return;
    const p = PRODUKTE.find(x => x.id === r.produkt);
    const krume = `<nav class="wrap brotkrumen" aria-label="${t("Brotkrumen", "Breadcrumb")}"><a href="./#helfer">${t("Alle Helfer", "All helpers")}</a><span aria-hidden="true">/</span><a href="ratgeber">${t("Ratgeber", "Guides")}</a></nav>`;
    const monat = datumText(r.geprueft);
    const produktKarte = p ? `
      <aside class="wrap ratgeber-produkt">
        <div>
          <span class="eyebrow">${t("Meine Empfehlung dazu", "My recommendation")}</span>
          <strong>${esc(p.name)}</strong>
          <p>${esc((r.verweis && r.verweis.text) || p.nutzen || p.kurz)}</p>
        </div>
        <div class="ratgeber-knoepfe">
          <a class="buy" href="${esc(p.id)}">${esc((r.verweis && r.verweis.knopf) || t("Zur Empfehlung", "See my recommendation"))}</a>
          ${((r.verweis && r.verweis.weitere) || []).map(w => `<a class="text-link" href="${esc(String(w.link || "").replace(/^\//, ""))}">${esc(w.knopf)}</a>`).join("")}
          ${p.rechner ? `<a class="text-link" href="${esc(p.id)}#rechner">${t("Für deinen Haushalt ausrechnen", "Work it out for your household")}</a>` : ""}
        </div>
      </aside>` : "";
    ziel.innerHTML = `${krume}
      <article class="wrap ratgeber-text">
        <span class="eyebrow">${t("Ratgeber", "Guide")}</span>
        <h1>${esc(r.frage)}</h1>
        <p class="ratgeber-von">${t("Von {name}", "By {name}", { name: esc((UM && UM.name) || "Lukas") })}${monat ? ` · ${t("Zuletzt geprüft", "Last checked")}${DOPPELPUNKT} <time class="geprueft-datum" datetime="${esc(r.geprueft)}">${monat}</time>` : ""}</p>
        <div class="ratgeber-antwort"><span class="block-titel">${t("Kurz gesagt", "In short")}</span>${(Array.isArray(r.kurzantwort) ? r.kurzantwort : [r.kurzantwort]).map(x => `<p>${esc(x)}</p>`).join("")}</div>
        ${(r.abschnitte || []).map(a => a.art === "erfahrung" ? `
        <section class="ratgeber-erfahrung">
          <div class="erfahrung ohne-foto"><div class="erf-text">
            <span class="block-titel">${esc(a.titel)}</span>
            ${(a.absaetze || []).map(x => `<blockquote>${t("„", "“")}${esc(x)}${t("“", "”")}</blockquote>`).join("")}
            ${UM ? `<div class="erf-wer">${UM.avatar || UM.foto ? `<img class="avatar" src="${esc(UM.avatar || UM.foto)}" alt="">` : ""}<span>${esc(UM.name)}, ${t("Autor dieser Seite", "author of this site")}</span></div>` : ""}
          </div></div>
        </section>` : `
        <section>
          <h2>${esc(a.titel)}</h2>
          ${(a.absaetze || []).map(x => `<p>${esc(x)}</p>`).join("")}
          ${a.punkte && a.punkte.length ? `<ul>${a.punkte.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
          ${a.tabelle && a.tabelle.kopf && a.tabelle.zeilen ? `
          <div class="ratgeber-tabelle"><table>
            <thead><tr>${a.tabelle.kopf.map(k => `<th scope="col">${esc(k)}</th>`).join("")}</tr></thead>
            <tbody>${a.tabelle.zeilen.map(z => `<tr>${z.map((c, i) => i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td data-titel="${esc(a.tabelle.kopf[i] || "")}">${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
          </table></div>` : ""}
        </section>`).join("")}
        ${r.wannNicht && r.wannNicht.length ? `<section class="ratgeber-wann-nicht">${liste(esc(r.wannNichtTitel || t("Wann eher nicht", "When it's not the right choice")), r.wannNicht, "nachteile")}</section>` : ""}
      </article>
      ${produktKarte}
      ${(r.fragen || []).length ? `
      <section class="wrap p-block" id="fragen" aria-labelledby="fragen-titel">
        <h2 class="p-titel" id="fragen-titel">${t("Fragen und Antworten", "Questions and answers")}</h2>
        <div class="faq">${r.fragen.map(q => `<details class="frage"><summary>${esc(q.f)}</summary><p>${esc(q.a)}</p></details>`).join("")}</div>
      </section>` : ""}
      ${quellenAbschnitt(r.quellen, t("Auf diese Tests und Seiten stütze ich mich in diesem Ratgeber.", "This guide is based on these tests and pages."))}
      ${ratgeberListe(R.filter(x => x.id !== r.id), t("Weitere Ratgeber", "More guides"))}
      <section class="wrap p-block" id="newsletter"><div data-newsletter></div></section>`;
  }
  function ratgeberListe(R, titel, mitH1, id) {
    if (!R.length) return "";
    const kopf = mitH1 ? `<span class="eyebrow">${t("Ratgeber", "Guides")}</span><h1>${titel}</h1>` : `<h2 class="p-titel">${titel}</h2>`;
    return `
      <section class="wrap p-block ratgeber-liste${mitH1 ? " intro" : ""}"${id ? ` id="${id}"` : ""}>
        ${kopf}
        <div class="karten">${R.map(r => `
          <a class="karte ratgeber-karte" href="ratgeber-${esc(r.id)}">
            <div class="karte-text">
              <span class="cat">${t("Ratgeber", "Guide")}</span>
              <span class="karte-name">${esc(r.frage)}</span>
              <span class="karte-zeile">${esc(Array.isArray(r.kurzantwort) ? r.kurzantwort[0] : r.kurzantwort)}</span>
              <span class="karte-fuss"><span class="mehr">${t("Lesen", "Read")}</span></span>
            </div>
          </a>`).join("")}
        </div>
      </section>`;
  }
  function baueRatgeberListe() {
    const ziel = document.getElementById("ratgeberseite");
    const R = typeof RATGEBER !== "undefined" ? RATGEBER : [];
    if (!ziel) return;
    ziel.innerHTML = `<nav class="wrap brotkrumen" aria-label="${t("Brotkrumen", "Breadcrumb")}"><a href="./#helfer">${t("Alle Helfer", "All helpers")}</a><span aria-hidden="true">/</span><span>${t("Ratgeber", "Guides")}</span></nav>
      ${ratgeberListe(R, t("Ehrliche Antworten auf die Frage: Lohnt sich das?", "Honest answers to the question: is it worth it?"), true)}
      <section class="wrap p-block" id="newsletter"><div data-newsletter></div></section>`;
  }

  // ---------- Produktseite ----------
  function baueProduktseite() {
    const ziel = document.getElementById("produktseite");
    const p = PRODUKTE.find(x => x.id === document.body.dataset.produkt);
    if (!p) {
      ziel.innerHTML = `<section class="wrap leer"><h1>${t("Dieses Produkt gibt es nicht (mehr).", "This product doesn't exist (any more).")}</h1><p><a href="./">${t("Zur Startseite", "Go to the home page")}</a></p></section>`;
      return;
    }
    const r = HAT_RECHNER && RECHNER[p.rechner];
    const video = HAT_VIDEOS && VIDEOS[p.video];
    const ms = modelle(p);
    const empf = empfehlung(p);
    const muehe = p.fokus === "muehe";
    const gs = gruppen(p);
    const mitGruppen = gs.length > 1;
    // Im Kasten oben: Hinweis auf die anderen Gruppen, z. B. "Lieber günstiger? Nur Saugen"
    const andereGruppen = mitGruppen ? `
            <p class="empf-auch">${gs.slice(1).map((g, k) => `${abPreis(g) < abPreis(gs[0]) ? t("Lieber günstiger? ", "Prefer something cheaper? ") : t("Oder: ", "Or: ")}<a href="#modelle" data-gruppe="${k + 1}">${esc(g.name)}</a>`).join("<br>")}</p>` : "";

    // Nur am Handy (style.css): Dort kommen die Empfehlungen direkt nach dem Kopf (Version A). Diese Kachel oben sagt,
    // was nach den Produkten noch folgt, mit Sprungmarken (Lukas 03.11.2026).
    const danachTeile = [
      p.erfahrung && ["#erfahrung", t("Meine Erfahrung", "My experience")],
      p.profitipp && [p.erfahrung ? "#tipp" : "#erfahrung", t("Mein Tipp", "My tip")],
      ["#muehe-titel", t("Was es dir abnimmt", "What it takes off your hands")],
      r && ["#rechner", t("Rechner", "Calculator")],
      p.fragen && p.fragen.length && ["#fragen", t("Fragen und Antworten", "Questions and answers")]
    ].filter(Boolean);
    const danach = ms.length || p.keinModell ? `
          <div class="danach">
            <span class="danach-titel"><span aria-hidden="true">↓</span> ${t("Nach den Produkten findest du noch", "After the products you'll also find")}</span>
            <ul>${danachTeile.map(([h, x]) => `<li><a href="${h}">${x}</a></li>`).join("")}</ul>
          </div>` : "";
    const hero = `
      <nav class="wrap brotkrumen" aria-label="${t("Brotkrumen", "Breadcrumb")}"><a href="./#zu-${esc(p.id)}">${t("Alle Helfer", "All helpers")}</a><span aria-hidden="true">/</span><span>${esc(p.kategorie)}</span></nav>
      <section class="wrap p-hero">
        <div class="p-hero-text">
          <span class="eyebrow">${esc(p.kategorie)}</span>
          <h1>${esc(p.name)}</h1>
          ${geprueftZeile(p, true)}
          <p class="lead">${esc(p.kurz)}</p>
          <p class="leise">${esc(p.warum)}</p>
          ${badges(p)}${danach}
          ${empf ? `
          <div class="empf-box">
            <span class="empf-label">${t("Meine Empfehlung", "My recommendation")}</span>
            <strong class="empf-name">${esc(empf.name)}</strong>
            <span class="price">${t("Preisklasse", "Price range")}${DOPPELPUNKT} ${esc(empf.stufe)}</span>
            <div class="empf-knoepfe">
              <a class="buy" href="${esc(partnerLink(empf.link))}" target="_blank" rel="sponsored nofollow noopener">${PREIS_KNOPF}</a>
              ${ms.length > 1 ? `<a class="zweit" href="#modelle">${mitGruppen ? t("Alle Modelle", "All models") : t("Alle {n} Preisklassen", "All {n} price ranges", { n: ms.length })}</a>` : ""}
            </div>
            ${WERBELINK}${andereGruppen}
          </div>` : ""}
        </div>
        <div class="p-hero-medien">
          ${p.bild ? foto(p.bild, p.name, "hero-foto") : ""}
          ${video ? `<div class="video" data-video></div>` : ""}
        </div>
      </section>`;

    // Passende Ratgeber (Feld produkt in ratgeber.js, kurz in ratgeber-kurz.js), unter Fragen und Antworten
    const alleRatgeber = typeof RATGEBER_KURZ !== "undefined" ? RATGEBER_KURZ : [];
    const passendeRatgeber = alleRatgeber.filter(x => x.produkt === p.id || (x.weitereProdukte || []).includes(p.id));
    // Bis einschließlich 30.11.2026 steht der Black-Friday-Ratgeber auf jeder Produktseite (Versuch V4, Marketing 16.11.).
    // Am 1.12. diesen Block wieder löschen und vorrendern.js laufen lassen.
    const bf = alleRatgeber.find(x => x.id === "black-friday-echte-angebote");
    if (bf && !passendeRatgeber.includes(bf) && new Date() < new Date("2026-12-01T00:00:00+01:00")) passendeRatgeber.push(bf);
    const spruenge = [
      ms.length && ["#modelle", t("Preisklassen", "Price ranges")],
      r && ["#rechner", t("Rechner", "Calculator")],
      p.fragen && p.fragen.length && ["#fragen", t("Fragen und Antworten", "Questions and answers")],
      passendeRatgeber.length && ["#ratgeber", t("Ratgeber", "Guides")]
    ].filter(Boolean);
    const sprung = spruenge.length ? `<nav class="wrap sprung" aria-label="${t("Auf dieser Seite", "On this page")}">${spruenge.map(([h, t]) => `<a href="${h}">${t}</a>`).join("")}</nav>` : "";

    const erfahrung = p.erfahrung ? `
      <div class="erfahrung${p.erfahrung.bild ? "" : " ohne-foto"}">
        ${foto(p.erfahrung.bild, p.erfahrung.bildText || "", "erf-foto")}
        <div class="erf-text">
          <span class="block-titel">${esc(p.erfahrung.titel)}</span>
          <blockquote>${t("„", "“")}${esc(p.erfahrung.text)}${t("“", "”")}</blockquote>
          ${UM ? `<div class="erf-wer">${UM.avatar || UM.foto ? `<img class="avatar" src="${esc(UM.avatar || UM.foto)}" alt="">` : `<span class="avatar avatar-leer" aria-hidden="true">${esc((UM.name || "?").slice(0, 1))}</span>`}<span>${esc(UM.name)}, ${t("Autor dieser Seite", "author of this site")}</span></div>` : ""}
        </div>
      </div>` : "";
    const tipp = p.profitipp ? `
      <div class="profitipp" id="tipp">
        <strong>${esc(p.profitipp.titel)}</strong>
        ${p.profitipp.text ? `<p>${esc(p.profitipp.text)}</p>` : ""}
        ${p.profitipp.liste ? `<ol>${p.profitipp.liste.map(x => `<li>${esc(x)}</li>`).join("")}</ol>` : ""}
      </div>` : "";
    const erfBlock = erfahrung || tipp ? `<section class="wrap p-block p-erfahrung${erfahrung && tipp ? " zwei" : ""}" id="erfahrung">${erfahrung}${tipp}</section>` : "";

    const aufwand = p.muehe ? `
      <div class="aufwand" aria-label="${t("Aufwand im Vergleich", "Effort compared")}">
        <span class="block-titel">${t("So viel Mühe sparst du", "How much effort you save")}</span>
        ${[[t("Bisher", "Before"), p.muehe.vorher], [`${t("Mit", "With")} ${esc(kurzname(p))}`, p.muehe.nachher]].map(([l, n]) => `
          <div class="aufwand-zeile"><span>${l}</span><span class="punkte" role="img" aria-label="${t("Aufwand {n} von 5", "Effort {n} out of 5", { n })}">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= n ? "voll" : ""}"></i>`).join("")}</span></div>`).join("")}
      </div>` : "";
    const muehBlock = `
      <section class="wrap p-block" aria-labelledby="muehe-titel">
        <h2 class="p-titel" id="muehe-titel">${t("Was es dir abnimmt", "What it takes off your hands")}</h2>
        <div class="p-muehe">
          <div class="muehe-karte">${aufwand}<div class="vergleich" data-vergleich></div></div>
          <div class="p-listen">${liste(t("Passt zu dir, wenn …", "Right for you if …"), p.fuer, "fuer")}${liste(t("Ehrlich gesagt", "To be honest"), p.nachteile, "nachteile")}</div>
        </div>
      </section>`;

    // Bei mehreren Gruppen (z. B. mit und ohne Wischen) schaltet man oben zwischen ihnen um.
    // Ist im Shop dieses Landes gerade kein Modell lieferbar (keinModell), steht hier nur die Hinweiskarte.
    const mitAlternativen = ms.some(m => m.alternativen && m.alternativen.length);
    const modellBlock = ms.length ? `
      <section class="wrap p-block" id="modelle" aria-labelledby="modelle-titel">
        <h2 class="p-titel" id="modelle-titel">${t("Welches Modell passt zu dir?", "Which model is right for you?")}</h2>
        <p class="p-intro">${t("Für jede Preisklasse eine Empfehlung{alt}. Den aktuellen Preis siehst du jeweils bei Amazon.", "One recommendation for each price range{alt}. You can see the current price on Amazon.",
          { alt: mitAlternativen ? t(", dazu gute Alternativen anderer Marken", ", plus good alternatives from other brands") : "" })}</p>
        ${geprueftZeile(p)}
        ${mitGruppen ? `<div class="gruppen-wahl" role="group" aria-labelledby="modelle-titel">${gs.map((g, gi) => `
          <button type="button" class="gruppe-knopf" data-gruppe="${gi}" aria-pressed="${gi === 0}" aria-controls="gruppe-${gi}"><strong>${esc(g.name)}</strong></button>`).join("")}
        </div>` : ""}
        ${gs.map((g, gi) => `
        <div class="gruppe" id="gruppe-${gi}" data-gruppe="${gi}"${gi > 0 ? " hidden" : ""}>
          ${mitGruppen && g.text ? `<p class="gruppe-text">${esc(g.text)}</p>` : ""}
          <div class="modelle">${g.modelle.map((m, mi) => modellKarte(m, gi > 0 ? g.name : "", mi)).join("")}${gi === 0 && p.ohneTeuer ? leerKarte(p.ohneTeuer) : ""}</div>
        </div>`).join("")}
        ${zubehoerBlock(p)}
      </section>` : p.keinModell ? `
      <section class="wrap p-block" id="modelle" aria-labelledby="modelle-titel">
        <h2 class="p-titel" id="modelle-titel">${t("Welches Modell passt zu dir?", "Which model is right for you?")}</h2>
        <div class="modelle modelle-keins">${leerKarte(p.keinModell)}</div>
      </section>` : "";

    const rechnerBlock = r ? `
      <section class="wrap p-block" id="rechner" aria-labelledby="rechner-titel">
        <h2 class="p-titel" id="rechner-titel">${muehe ? t("Lohnt es sich auch in Euro?", "Is it worth it in euros, too?") : t("Rechne selbst nach", "Work it out yourself")}</h2>
        ${muehe
          ? `<p class="p-intro">${t("Dieses Produkt spart dir vor allem Mühe. Wenn du wissen willst, was es in Euro und Minuten bringt, öffne den Rechner.", "This product mainly saves you effort. If you want to know what it's worth in euros and minutes, open the calculator.")}</p>
             <details class="rechner-details"><summary>${t("Rechner öffnen", "Open the calculator")}</summary><div class="rechner" aria-label="${t("Ersparnis-Rechner für", "Savings calculator for")} ${esc(p.name)}"></div></details>`
          : `<p class="p-intro">${t("Stell ein, wie du lebst. Alles rechnet sich sofort neu.", "Set it to how you live. Everything recalculates instantly.")}</p>
             <div class="rechner" aria-label="${t("Ersparnis-Rechner für", "Savings calculator for")} ${esc(p.name)}"></div>`}
      </section>` : "";

    const fragenBlock = p.fragen && p.fragen.length ? `
      <section class="wrap p-block" id="fragen" aria-labelledby="fragen-titel">
        <h2 class="p-titel" id="fragen-titel">${t("Fragen und Antworten", "Questions and answers")}</h2>
        <div class="faq">${p.fragen.map(q => `<details class="frage"><summary>${esc(q.f)}</summary><p>${esc(q.a)}</p></details>`).join("")}</div>
      </section>` : "";

    // Quellen (Feld quellen in produkte.js): die Tests und Seiten, auf die sich die Seite beruft, zum Anklicken
    // Lukas 04.11.2026: Testseiten mit eigenen Affiliate-Links nur als Text nennen (ohne url), Links nur zu neutralen Seiten
    const quellenBlock = quellenAbschnitt(p.quellen, t("Auf diese Tests und Seiten stützen sich meine Empfehlungen.", "My recommendations are based on these tests and pages."));

    // Unten höchstens vier andere Helfer: erst die aus derselben Kategorie, dann die übrigen
    const andere = PRODUKTE.filter(x => x.id !== p.id);
    const auswahl = [...andere.filter(x => x.kategorie === p.kategorie), ...andere.filter(x => x.kategorie !== p.kategorie)].slice(0, 4);
    const weitere = auswahl.length ? `
      <section class="wrap p-block" aria-labelledby="weitere-titel">
        <h2 class="p-titel" id="weitere-titel">${t("Noch mehr Helfer für mehr Freizeit", "More helpers for more free time")}</h2>
        <div class="karten">${auswahl.map(karte).join("")}</div>
        ${andere.length > auswahl.length ? `<p class="alle-helfer"><a href="./#helfer">${t("Alle {n} Helfer ansehen", "See all {n} helpers", { n: PRODUKTE.length })}</a></p>` : ""}
      </section>` : "";

    const ratgeberBlock = ratgeberListe(passendeRatgeber, t("Passende Ratgeber", "Related guides"), false, "ratgeber");

    ziel.innerHTML = hero + sprung + erfBlock + muehBlock + modellBlock + rechnerBlock + fragenBlock + ratgeberBlock + quellenBlock + weitere +
      `<section class="wrap p-block" id="newsletter"><div data-newsletter></div></section>`;

    if (video) baueVideo(p, video, ziel.querySelector("[data-video]"));
    // Umschalter der Gruppen. Der Rechner rechnet dann mit der gewählten Gruppe und umgekehrt.
    let rechnerGruppe = null;
    function zeigeGruppe(gi, vomRechner) {
      if (!mitGruppen) return;
      ziel.querySelectorAll(".gruppe-knopf").forEach(b => b.setAttribute("aria-pressed", String(Number(b.dataset.gruppe) === gi)));
      ziel.querySelectorAll(".gruppe").forEach(d => { d.hidden = Number(d.dataset.gruppe) !== gi; });
      if (!vomRechner && rechnerGruppe) rechnerGruppe(gi);
    }
    if (r) rechnerGruppe = baueRechner(p, r, ziel, gi => zeigeGruppe(gi, true));
    // Ohne Rechner kommt der Vergleich „Bisher / Mit …“ direkt aus produkte.js (Feld vergleich)
    const vg = ziel.querySelector("[data-vergleich]");
    if (!r && vg && p.vergleich) vg.innerHTML = `
          <div><span class="v-titel">${esc(p.vergleich.vorherTitel || t("Bisher", "Before"))}</span><ul>${p.vergleich.vorher.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
          <div class="v-nachher"><span class="v-titel">${t("Mit", "With")} ${esc(kurzname(p))}</span><ul>${p.vergleich.nachher.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`;
    einfrieren(ziel);
    vorschauFuer(ziel);
    abspielenImBild(ziel.querySelector(".karten"));

    // Sprungadresse zu einem Modell der anderen Gruppe (z. B. #nur-saugen-guenstig): erst die Gruppe zeigen
    function gruppeFuerAnker() {
      const el = ankerZiel();
      const d = el && el.closest(".gruppe");
      if (!d || !d.hidden) return false;
      zeigeGruppe(Number(d.dataset.gruppe));
      return true;
    }
    gruppeFuerAnker();
    window.addEventListener("hashchange", () => { if (gruppeFuerAnker()) ankerZiel().scrollIntoView({ block: "start" }); });

    // Sprünge zum Rechner öffnen den eingeklappten Rechner
    const rechnerAuf = () => { const d = ziel.querySelector(".rechner-details"); if (d) d.open = true; };
    ziel.addEventListener("click", ev => {
      const gk = ev.target.closest(".gruppe-knopf, a[data-gruppe]");
      if (gk) zeigeGruppe(Number(gk.dataset.gruppe));
      if (ev.target.closest('a[href="#rechner"]')) rechnerAuf();
    });
    // Zeitkonto: Knopf unter dem Namen und im Rechner, unten die Leiste (nur wenn man das Konto schon benutzt hat)
    kontoProduktseite(p, ziel);
  }

  // „Zuletzt geprüft: November 2026“ unter der Einleitung der Modelle. Datum aus produkte.js (Feld geprueft) oder einstellungen.js.
  // Mit oben = true als kleines Abzeichen direkt unter dem Seitentitel (Lukas 04.11.: unten allein war zu versteckt).
  function geprueftZeile(p, oben) {
    const d = String(p.geprueft || S.geprueft || "");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) return "";
    const monat = new Date(d + "T12:00:00Z").toLocaleDateString(ZAHLEN, { month: "long", year: "numeric", timeZone: "UTC" });
    if (oben) return `<p class="geprueft-oben"><span aria-hidden="true">✓</span> ${t("Zuletzt geprüft", "Last checked")}${DOPPELPUNKT} <time datetime="${d}">${monat}</time></p>`;
    return `<p class="geprueft">${t("Zuletzt geprüft", "Last checked")}${DOPPELPUNKT} <time datetime="${d}">${monat}</time></p>`;
  }

  // Zubehör, das Lukas zum Produkt dazu empfiehlt (Feld zubehoer in produkte.js), z. B. der Ölsprüher beim Airfryer
  function zubehoerBlock(p) {
    const z = (p.zubehoer || []).filter(x => x && x.name && x.link);
    if (!z.length) return "";
    return `
        <div class="zubehoer">
          <h3 class="zubehoer-titel">${t("Das empfehle ich dir dazu", "I also recommend")}</h3>
          <div class="zubehoer-liste">${z.map(x => `
            <article class="zubehoer-karte">
              <h4>${esc(x.name)}</h4>
              ${x.text ? `<p>${esc(x.text)}</p>` : ""}
              <div class="modell-knoepfe">
                <a class="buy buy-zweit" href="${esc(partnerLink(x.link))}" target="_blank" rel="sponsored nofollow noopener">${PREIS_KNOPF}</a>
                ${WERBELINK}
              </div>
            </article>`).join("")}
          </div>
        </div>`;
  }

  // vorsilbe: Name der Gruppe, damit die Sprungadressen eindeutig bleiben (#guenstig, #nur-saugen-guenstig)
  // Leere Preisklasse: ehrlicher Hinweis statt eines Modells (Feld ohneTeuer in produkte.js)
  function leerKarte(o) {
    return `
      <article class="modell modell-leer">
        <div class="modell-kopf"><span class="stufe stufe-3">${esc(o.stufe)}</span></div>
        <h3>${esc(o.titel)}</h3>
        <p class="modell-fuer">${esc(o.text)}</p>
      </article>`;
  }

  function modellKarte(m, vorsilbe, nr = 0) {
    const alt = (m.alternativen || []).filter(a => a && a.name);
    return `
      <article class="modell${m.empfohlen ? " empfohlen" : ""}" id="${slug((vorsilbe ? vorsilbe + " " : "") + m.stufe)}">
        ${m.empfohlen ? `<span class="modell-band">${t("Meine Empfehlung", "My recommendation")}</span>` : ""}
        <div class="modell-kopf"><span class="stufe stufe-${Math.min(nr, 2) + 1}">${esc(m.stufe)}</span></div>
        ${foto(m.bild, m.name, "modell-foto")}
        <h3>${esc(m.name)}</h3>
        <ul class="haken-liste">${(m.punkte || []).map(x => `<li>${esc(x)}</li>`).join("")}</ul>
        ${m.fuer ? `<p class="modell-fuer">${esc(m.fuer)}</p>` : ""}
        ${m.hinweis ? `<div class="modell-hinweis"><span class="block-titel">${t("Ehrlich gesagt", "To be honest")}</span><p>${esc(m.hinweis)}</p></div>` : ""}
        <div class="modell-knoepfe">
          <a class="buy${m.empfohlen ? "" : " buy-zweit"}" href="${esc(partnerLink(m.link))}" target="_blank" rel="sponsored nofollow noopener">${PREIS_KNOPF}</a>
          ${WERBELINK}
        </div>
        ${alt.length ? `
        <div class="alternativen">
          <span class="alt-titel">${t("Auch gut", "Also good")}</span>
          <ul>${alt.map(a => `
            <li><a href="${esc(partnerLink(a.link))}" target="_blank" rel="sponsored nofollow noopener">${esc(a.name)}*</a>${a.text ? `<span class="alt-text">${esc(a.text)}</span>` : ""}</li>`).join("")}</ul>
          ${WERBELINK}
        </div>` : ""}
      </article>`;
  }

  // Sprachschalter auf- und zuklappen. Beim Wechsel bleibt man an derselben Stelle der Seite (z. B. #rechner).
  function spracheSchalter() {
    const box = document.querySelector(".sprache");
    if (!box) return;
    const knopf = box.querySelector(".sprache-knopf"), liste = box.querySelector(".sprache-liste");
    const auf = an => {
      knopf.setAttribute("aria-expanded", String(an));
      liste.hidden = !an;
      // Reicht der Platz links nicht (z. B. am Handy, wenn das Menü umbricht), klappt die Liste nach rechts auf
      box.classList.remove("links");
      if (an && liste.getBoundingClientRect().left < 8) box.classList.add("links");
    };
    knopf.addEventListener("click", () => auf(liste.hidden));
    document.addEventListener("click", e => { if (!box.contains(e.target)) auf(false); });
    box.addEventListener("keydown", e => { if (e.key === "Escape" && !liste.hidden) { auf(false); knopf.focus(); } });
    box.addEventListener("focusout", e => { if (e.relatedTarget && !box.contains(e.relatedTarget)) auf(false); });
    liste.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { a.href = a.getAttribute("href").split("#")[0] + location.hash; }));
  }

  // ---------- Seitenwechsel ----------
  // Nach dem Aufbau zu #rechner, #fragen usw. springen (der Inhalt entsteht erst jetzt)
  function ankerZiel() {
    try { return location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null; }
    catch (e) { return null; }
  }
  function springeZumAnker() {
    const el = ankerZiel();
    if (!el) return;
    if (el.id === "rechner") { const d = el.querySelector(".rechner-details"); if (d) d.open = true; }
    requestAnimationFrame(() => el.scrollIntoView({ block: "start" }));
  }

  // Im Vorschaufenster (z. B. bei claude.ai) steckt die Seite in einem Rahmen. Je nach Ansicht scrollt dort
  // das Fenster außen herum statt der Seite, oder es holt nach dem Wechsel die alte Stelle zurück. Darum sorgen
  // wir dort selbst dafür: Eine neue Seite beginnt oben (mit # beim Ziel), und "Zurück" landet wieder beim
  // angeklickten Produkt. Auf der echten Website erledigt das der Browser von allein.
  function seitenwechsel() {
    if (window.self === window.top) return;
    const MERKER = "myle-seitenwechsel";
    const html = document.documentElement;
    const nav = performance.getEntriesByType ? performance.getEntriesByType("navigation")[0] : null;
    const art = nav ? nav.type : "navigate";

    document.addEventListener("click", ev => {
      if (ev.defaultPrevented || ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;
      const a = ev.target.closest && ev.target.closest("a[href]");
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      const ziel = new URL(a.href, location.href), hier = new URL(location.href);
      if (ziel.origin !== hier.origin || (ziel.pathname === hier.pathname && ziel.search === hier.search)) return;
      try { sessionStorage.setItem(MERKER, JSON.stringify({ pfad: ziel.pathname, zeit: Date.now() })); } catch (e) { /* gesperrt: egal */ }
      // Für "Zurück": welcher Link es war
      try { history.replaceState(Object.assign({}, history.state, { mylelink: [...document.links].indexOf(a) }), ""); } catch (e) { /* egal */ }
      // Wächst der Rahmen mit der Seite mit, holen wir das Fenster außen herum schon jetzt nach oben.
      // Die alte Seite wird dabei ausgeblendet, damit nicht kurz ihr Anfang aufblitzt.
      if (html.scrollHeight <= window.innerHeight + 2) {
        html.style.visibility = "hidden";
        setTimeout(() => { html.style.visibility = ""; }, 3000);
      }
      rahmenOben();
    });
    window.addEventListener("pageshow", ev => { if (ev.persisted) { html.style.visibility = ""; zurueck(); } });

    if (art === "back_forward") zurueck();
    else if (art === "navigate" && ueberLink()) halten();

    // Kam man über einen Link auf einer unserer Seiten hierher?
    function ueberLink() {
      try {
        const m = JSON.parse(sessionStorage.getItem(MERKER) || "null");
        sessionStorage.removeItem(MERKER);
        return !!m && m.pfad === location.pathname && Date.now() - m.zeit < 15000;
      } catch (e) {
        // Ohne Speicher an der Herkunft erkennen
        try { return new URL(document.referrer).origin === new URL(location.href).origin; } catch (e2) { return false; }
      }
    }
    // Oben (bzw. beim Anker) bleiben, bis man selbst scrollt, auch wenn das Fenster die alte Stelle zurückholt
    function halten() {
      const anker = ankerZiel();
      const hin = () => { if (anker) anker.scrollIntoView({ block: "start" }); else { window.scrollTo(0, 0); rahmenOben(); } };
      let aus = false;
      const wache = () => { if (!aus) hin(); };
      const ende = () => {
        if (aus) return;
        aus = true;
        html.style.scrollBehavior = "";
        window.removeEventListener("scroll", wache);
      };
      html.style.scrollBehavior = "auto";
      hin();
      ["wheel", "touchstart", "keydown", "pointerdown"].forEach(t => window.addEventListener(t, ende, { once: true, passive: true, capture: true }));
      window.addEventListener("scroll", wache, { passive: true });
      window.addEventListener("load", () => { if (aus) return; hin(); setTimeout(ende, 4000); }, { once: true });
    }
    // Zurück: den angeklickten Link wieder ins Bild holen, falls er nicht zu sehen ist
    function zurueck() {
      const i = history.state && history.state.mylelink;
      const a = typeof i === "number" ? document.links[i] : null;
      if (!a || !("IntersectionObserver" in window)) return;
      const io = new IntersectionObserver(([e]) => {
        io.disconnect();
        if (e.intersectionRatio < 0.5) a.scrollIntoView({ block: "center" });
      }, { threshold: [0, 0.5] });
      io.observe(a);
    }
  }
  // Holt den oberen Rand des Rahmens ins Bild, ohne die Seite darin zu verschieben
  function rahmenOben() {
    const punkt = document.createElement("div");
    punkt.style.cssText = `position:absolute;top:${window.scrollY}px;left:0;width:1px;height:1px;visibility:hidden;pointer-events:none`;
    document.body.appendChild(punkt);
    punkt.scrollIntoView({ block: "nearest" });
    punkt.remove();
  }

  // ---------- Newsletter ----------
  function baueNewsletter(ziel, k) {
    if (!NL) return;
    const id = `nl-mail-${k}`;
    ziel.innerHTML = `
      <div class="nl">
        <div class="nl-text">
          <span class="eyebrow">${esc(NL.titel)}</span>
          <h2>${t("Keinen neuen Helfer mehr verpassen", "Never miss a new helper")}</h2>
          <p>${esc(NL.text)}</p>
        </div>
        <form class="nl-form" novalidate>
          <label for="${id}">${t("Deine E-Mail-Adresse", "Your email address")}</label>
          <div class="nl-zeile">
            <input type="email" id="${id}" name="email" autocomplete="email" required placeholder="${t("name@beispiel.de", "name@example.com")}">
            <button class="buy" type="submit">${t("Anmelden", "Sign up")}</button>
          </div>
          <p class="nl-klein">${t("Du bekommst zuerst eine Mail, in der du die Anmeldung bestätigst. Abmelden geht mit einem Klick in jeder Mail. Ich zähle nur anonym, wie oft Mails geöffnet und Links geklickt werden. Mehr dazu in der", "First you'll get an email to confirm your sign-up. You can unsubscribe with one click in every email. I only count anonymously how often emails are opened and links clicked. More about this in the")} <a href="datenschutz#newsletter">${t("Datenschutzerklärung", "privacy policy")}</a>.</p>
          <p class="nl-status" role="status" aria-live="polite"></p>
        </form>
      </div>`;
    const form = ziel.querySelector("form"), feld = form.querySelector("input"), status = form.querySelector(".nl-status");
    form.addEventListener("submit", async ev => {
      ev.preventDefault();
      status.className = "nl-status";
      if (!feld.value.trim() || !feld.checkValidity()) {
        status.textContent = t("Bitte gib eine gültige E-Mail-Adresse ein.", "Please enter a valid email address.");
        status.classList.add("fehler");
        feld.focus();
        return;
      }
      if (!NL.formularAdresse) {
        status.textContent = t("Danke! Die Anmeldung ist noch nicht freigeschaltet, deine Adresse wurde nicht gespeichert. Schau bald wieder vorbei.", "Thank you! Sign-up isn't open yet, so your address was not saved. Please check back soon.");
        console.info("Newsletter: In einstellungen.js ist noch keine formularAdresse eingetragen. Es wurde nichts verschickt.");
        return;
      }
      const daten = new FormData();
      daten.append(NL.feldName || "EMAIL", feld.value.trim());
      Object.entries(NL.zusatzFelder || {}).forEach(([n, v]) => daten.append(n, v));
      const knopf = form.querySelector("button");
      knopf.disabled = true;
      try {
        await fetch(NL.formularAdresse, { method: "POST", body: daten, mode: "no-cors" });
        status.textContent = t("Fast geschafft! Bitte bestätige deine Anmeldung über den Link in der Mail, die gerade bei dir ankommt.", "Almost done! Please confirm your sign-up with the link in the email that's arriving now.");
        status.classList.add("ok");
        form.reset();
      } catch (e) {
        status.textContent = t("Das hat leider nicht geklappt. Bitte versuch es später noch einmal.", "Sorry, that didn't work. Please try again later.");
        status.classList.add("fehler");
      } finally {
        knopf.disabled = false;
      }
    });
  }

  // ---------- Rechner ----------
  // Alle Regler eines Rechners: die eigenen plus Kaufpreis und Stundenwert.
  // Den Kaufpreis stellt der Besucher selbst ein; der Startwert ist grob gerundet.
  function felderFuer(p, r) {
    // Auch mit keinModell kommen Startwert und Spanne des Kaufpreises von den (ausgeblendeten) Modellen
    const ms = alleModelle(p);
    const empf = empfehlung(p, ms);
    const preis = Number(empf ? empf.preis : p.preis) || 0;
    const alle = [preis, ...ms.map(m => Number(m.preis)).filter(Boolean)];
    const lo = Math.min(...alle), hi = Math.max(...alle);
    const step = hi < 60 ? 1 : hi < 400 ? 5 : 10;
    const runde = Math.max(step, preis < 100 ? 10 : preis < 1000 ? 50 : 100);
    const start = Math.max(runde, Math.round(preis / runde) * runde);
    return [
      ...r.felder,
      { id: "preis", label: r.preisLabel || t("Was kostet dein Gerät?", "How much does your device cost?"), hinweis: r.preisHinweis || t("Den aktuellen Preis siehst du bei Amazon. Stell ihn hier ein.", "You can see the current price on Amazon. Set it here."), min: Math.max(step, Math.floor((lo * 0.5) / step) * step), max: Math.ceil((hi * 1.2) / step) * step, step, wert: start, einheit: "€" },
      { id: "stundenwert", label: t("Was ist dir eine Stunde Freizeit wert?", "What is an hour of free time worth to you?"), hinweis: t("0 € heißt: Nur echtes Geld zählt. Zum Vergleich: Der Mindestlohn liegt bei 13,90 € pro Stunde.", "€0 means only real money counts. For comparison: the German minimum wage is €13.90 per hour."), min: 0, max: 30, step: 0.5, wert: r.stundenwert || 0, einheit: t("€ pro Std.", "€ per hour") }
    ];
  }
  // r.kaufpreis: rechnet den ganzen Kaufpreis aus, z. B. Preis pro Thermostat mal Anzahl der Heizkörper
  function auswerten(r, w) {
    const e = r.berechne(w);
    const preis = r.kaufpreis ? r.kaufpreis(w) : w.preis;
    const stundenProMonat = (e.minutenProWoche * 52) / 12 / 60;
    const geldMonat = e.euroProMonat + stundenProMonat * w.stundenwert;
    return {
      ...e,
      stundenProMonat,
      geldMonat,
      preis,
      bezahlt: geldMonat > 0 ? preis / geldMonat : null,
      netto: m => geldMonat * m - preis,
      zeit: m => stundenProMonat * m
    };
  }

  // beiGruppe: wird aufgerufen, wenn man im Rechner eine andere Gruppe wählt (z. B. "Nur Saugen")
  function baueRechner(p, r, root, beiGruppe) {
    const box = root.querySelector(".rechner");
    const felder = felderFuer(p, r);
    const w = Object.fromEntries(felder.map(f => [f.id, f.wert]));
    // Mit keinModell gibt es die Gruppenwahl im Rechner nur, wenn sie die Rechnung ändert (Feld ohne, z. B. "Ohne Speicher")
    const alleGs = gruppen(p, alleModelle(p));
    const gs = !p.keinModell || alleGs.some(g => g.ohne) ? alleGs : [];
    let gruppe = 0;
    let letztes = null;
    // Regler, die bei einer Gruppe nicht zählen, z. B. Wischen bei Robotern, die nur saugen
    const ohneIds = new Set(gs.map(g => g.ohne).filter(Boolean));

    // f.schnitt: Durchschnitt für 1, 2, 3 und 4+ Personen, als kleine Zahlen unter dem Regler.
    // Statt Zahlen gehen auch Einträge wie { wert: 0.37, kurz: "DE", name: "Deutschland", zusatz: "…" }, z. B. der Strompreis pro Land.
    // Fährt man mit der Maus darüber (oder tippt darauf), zeigt eine kleine Sprechblase über dem Regler die Haushaltsgröße oder das Land
    const personen = i => i === 0 ? t("1 Person", "1 person") : i < 3 ? t("{n} Personen", "{n} people", { n: i + 1 }) : t("4 oder mehr Personen", "4 or more people");
    // Liegen zwei Werte nah beieinander (unter 8 % der Skala), teilen sie sich eine Marke (z. B. "AT · CH"), damit sich nichts
    // überdeckt und jede Marke auf dem Handy mindestens 24 px Platz zum Tippen hat
    const schnittMarken = f => {
      const marken = [];
      f.schnitt.forEach((v, i) => {
        const e = typeof v === "number"
          ? { wert: v, kurz: i < 3 ? String(i + 1) : "4+", name: personen(i), d: Number.isInteger(v) ? 0 : 1 }
          : { ...v, d: dezimalen(f.step) };
        const m = marken.find(m => Math.abs(m[0].wert - e.wert) < (f.max - f.min) * 0.08);
        if (m) m.push(e); else marken.push([e]);
      });
      return marken;
    };
    const schnittHtml = (f, id) => !f.schnitt ? "" : `
          <div class="schnitt" id="${id}-schnitt">${schnittMarken(f).map(m => {
            const zeilen = m.map(e => [e.name, `${t("im Schnitt", "on average")} ${mitEinheit(e.wert, e.d, f.einheit)}${e.zusatz ? ` (${e.zusatz})` : ""}`]);
            return `<button type="button" data-wert="${m[0].wert}" style="--p:${((m[0].wert - f.min) / (f.max - f.min)).toFixed(4)}" aria-label="${esc(m.map(e => e.kurz).join(" · ") + " – " + zeilen.map(z => `${z[0]}: ${z[1]}`).join(", "))}">${esc(m.map(e => e.kurz).join(" · "))}<span class="blase" aria-hidden="true">${zeilen.map(z => `<b>${esc(z[0])}</b>${esc(z[1])}`).join("")}</span></button>`;
          }).join("")}</div>`;

    const feldHtml = f => {
      const id = `${p.id}-${f.id}`;
      if (f.typ === "auswahl") {
        return `
          <fieldset class="feld">
            <legend>${esc(f.label)}</legend>
            <div class="optionen">
              ${f.optionen.map(o => `
                <label class="opt"><input type="radio" name="${id}" id="${id}-${esc(o.wert)}" value="${esc(o.wert)}" ${o.wert === f.wert ? "checked" : ""}><span>${esc(o.label)}</span></label>`).join("")}
            </div>
          </fieldset>`;
      }
      return `
        <div class="feld">
          <div class="feld-kopf"><label for="${id}">${esc(f.label)}</label><output for="${id}" id="${id}-wert"></output></div>
          <input type="range" id="${id}" min="${f.min}" max="${f.max}" step="${f.step}" value="${f.wert}">${schnittHtml(f, id)}
          ${f.hinweis ? `<span class="hinweis">${esc(f.hinweis)}</span>` : ""}
          ${f.schnittHinweis ? `<span class="hinweis">${esc(f.schnittHinweis)}</span>` : f.schnitt ? `<span class="hinweis">${t("Die Zahlen am Regler zeigen den Durchschnitt bei 1, 2, 3 und 4 oder mehr Personen im Haushalt.", "The numbers on the slider show the average for households of 1, 2, 3 and 4 or more people.")}</span>` : ""}
          ${ohneIds.has(f.id) ? `<span class="hinweis" data-aus hidden></span>` : ""}
        </div>`;
    };
    const gruppenwahl = gs.length > 1 ? `
      <fieldset class="feld modellwahl">
        <legend>${t("Was für ein Gerät?", "What kind of device?")}</legend>
        <div class="optionen">${gs.map((g, gi) => `<label class="opt"><input type="radio" name="${p.id}-gruppe" value="${gi}" ${gi === gruppe ? "checked" : ""}><span>${esc(g.name)}</span></label>`).join("")}</div>
      </fieldset>` : "";

    box.innerHTML = `
      <h3>${t("Was sparst du damit?", "What do you save?")}</h3>
      <form class="felder" onsubmit="return false">
        ${gruppenwahl}
        ${felder.filter(f => f.id !== "stundenwert").map(feldHtml).join("")}
      </form>
      <div class="ergebnis">
        <div class="ergebnis-text">
          <p class="fazit" aria-live="polite"></p>
          <div class="zahlen">
            <div><span class="zahl" data-z="w1"></span><span class="zahl-label" data-z="l1"></span></div>
            <div><span class="zahl" data-z="w2"></span><span class="zahl-label" data-z="l2"></span></div>
            <div><span class="zahl" data-z="w3"></span><span class="zahl-label" data-z="l3"></span></div>
          </div>
          <p class="extra" data-z="extra"></p>
          <div class="teilen">
            <button type="button" class="teilen-knopf">${TEILEN_ICON}<span>${t("Ergebnis teilen", "Share result")}</span></button>
            <span class="teilen-status" role="status" aria-live="polite"></span>
            <input class="teilen-feld" type="text" readonly hidden aria-label="${t("Text zum Kopieren", "Text to copy")}">
          </div>
          <details class="annahmen"><summary>${t("So rechne ich", "How I calculate")}</summary><p>${esc(r.annahmen)}</p><p>${t("„Geld unterm Strich“ heißt: alles, was du gespart hast, minus Kaufpreis. Alle Werte sind Schätzungen.", "“Net savings” means everything you have saved minus the purchase price. All values are estimates.")}</p></details>
        </div>
        <div class="ergebnis-grafik">
          <div class="chart-block">
            <div class="chart-kopf"><span class="chart-titel"></span></div>
            <form class="zeitwert" onsubmit="return false">${feldHtml(felder.find(f => f.id === "stundenwert"))}</form>
            <div class="chart"></div>
          </div>
          <details class="tabelle-details">
            <summary>${t("Jahr für Jahr in Zahlen", "Year by year in numbers")}</summary>
            <div class="tabelle-wrap"><table class="meilensteine"><thead></thead><tbody></tbody></table></div>
          </details>
        </div>
      </div>`;

    felder.forEach(f => {
      const id = `${p.id}-${f.id}`;
      if (f.typ === "auswahl") {
        box.querySelectorAll(`input[name="${id}"]`).forEach(i => i.addEventListener("change", () => { w[f.id] = i.value; neu(true); }));
      } else {
        const el = box.querySelector(`#${id}`);
        // Sprechblase eines Durchschnitts kurz zeigen (nach dem Tippen, oder wenn der Regler auf dieser Zahl steht)
        const leiste = box.querySelector(`#${id}-schnitt`);
        const blaseZeigen = b => {
          leiste.querySelectorAll(".zeigen").forEach(x => { if (x !== b) x.classList.remove("zeigen"); });
          if (!b) return;
          b.classList.add("zeigen");
          clearTimeout(b.blasenZeit);
          b.blasenZeit = setTimeout(() => b.classList.remove("zeigen"), 2000);
        };
        el.addEventListener("input", () => {
          w[f.id] = Number(el.value);
          neu(true);
          if (leiste) blaseZeigen(leiste.querySelector("button.an"));
        });
        // Tipp auf einen Durchschnitt: Der Regler springt dorthin (auf seine Schrittweite gerundet)
        if (leiste) leiste.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
          el.value = b.dataset.wert;
          w[f.id] = Number(el.value);
          neu(true);
          blaseZeigen(b);
        }));
      }
    });
    box.querySelectorAll(`input[name="${p.id}-gruppe"]`).forEach(inp => inp.addEventListener("change", () => {
      const g = Number(inp.value);
      if (!gs[g] || g === gruppe) return;
      gruppe = g;
      if (beiGruppe) beiGruppe(g);
      neu(true);
    }));

    // Ergebnis teilen: am Handy über das Teilen-Menü, sonst in die Zwischenablage
    const teilKnopf = box.querySelector(".teilen-knopf"), teilStatus = box.querySelector(".teilen-status"), teilFeld = box.querySelector(".teilen-feld");
    function teilText() {
      const e = letztes;
      const mit = `${t("Mit", "With")} ${r.mit || kurzname(p)}`;
      const geld = e.euroProMonat * 12;
      const was = e.minutenProWoche <= 0 ? euro(geld)
        : geld >= 1 ? t("{zeit} und {geld}", "{zeit} and {geld}", { zeit: stunden(e.zeit(12)), geld: euro(geld) }) : stunden(e.zeit(12));
      return t("{mit} spare ich laut Rechner {was} im Jahr. Rechne selbst nach:", "{mit}, the calculator says I save {was} a year. Work it out yourself:", { mit, was });
    }
    teilKnopf.addEventListener("click", async () => {
      const text = teilText();
      const url = location.href.split("#")[0] + "#rechner";
      teilStatus.textContent = "";
      if (navigator.share) {
        try { await navigator.share({ title: document.title, text, url }); return; }
        catch (err) { if (err && err.name === "AbortError") return; }
      }
      const voll = `${text} ${url}`;
      try {
        await navigator.clipboard.writeText(voll);
        teilFeld.hidden = true;
        teilStatus.textContent = t("Kopiert! Jetzt einfach in WhatsApp oder eine Mail einfügen.", "Copied! Now just paste it into WhatsApp or an email.");
      } catch (err) {
        teilFeld.hidden = false;
        teilFeld.value = voll;
        teilFeld.focus();
        teilFeld.select();
        teilStatus.textContent = t("Text markiert. Jetzt kopieren und einfügen, wo du magst.", "Text selected. Now copy it and paste it wherever you like.");
      }
    });

    function neu(vonHand) {
      felder.forEach(f => {
        if (f.typ === "auswahl") return;
        const out = box.querySelector(`#${p.id}-${f.id}-wert`);
        const d = Number.isInteger(w[f.id]) ? 0 : dezimalen(f.step);
        out.textContent = mitEinheit(w[f.id], d, f.einheit);
        // Der Durchschnitt, der zum eingestellten Wert passt, wird grün
        box.querySelectorAll(`#${p.id}-${f.id}-schnitt button`).forEach(b => b.classList.toggle("an", Math.abs(w[f.id] - Number(b.dataset.wert)) <= f.step / 2));
      });
      // Was bei dieser Gruppe nicht zählt, rechnet mit 0, und sein Regler wird ausgegraut
      const ohne = gs[gruppe] && gs[gruppe].ohne;
      ohneIds.forEach(id => {
        const el = box.querySelector(`#${p.id}-${id}`);
        if (!el) return;
        const aus = id === ohne;
        el.disabled = aus;
        el.closest(".feld").classList.toggle("aus", aus);
        const h = el.closest(".feld").querySelector("[data-aus]");
        h.hidden = !aus;
        h.textContent = aus ? t("Zählt bei „{name}“ nicht mit.", "Doesn't count for “{name}”.", { name: gs[gruppe].name }) : "";
      });

      const e = auswerten(r, ohne ? { ...w, [ohne]: 0 } : w);
      letztes = e;
      if (zeitkonto.rechner) zeitkonto.rechner(p.id, e, !!vonHand); // Zeitkonto: eigene Zahlen, sobald man selbst etwas umstellt
      const zeitJahr = e.zeit(12);
      const geldJahr = e.geldMonat * 12;
      const z = k => box.querySelector(`[data-z="${k}"]`);

      // Spart es bei diesen Angaben gar keine Zeit (z. B. Thermostate, wenn die Heizung bisher durchläuft), zeigen wir nur Geld
      const ohneZeit = e.minutenProWoche <= 0;
      // Ohne gesparte Zeit hat der Regler für den Wert einer Stunde keine Wirkung, also blenden wir ihn aus
      box.querySelector(".zeitwert").style.display = ohneZeit ? "none" : "";
      const stats = e.bezahlt && ohneZeit
        ? [[euro(geldJahr), t("Geld gespart pro Jahr", "Money saved per year")],
           [euro(e.netto(60), true), t("Unterm Strich nach 5 Jahren", "Net savings after 5 years")],
           [bezahltText(e.bezahlt), t("Kaufpreis wieder drin nach", "Pays for itself after")]]
        : ohneZeit
        ? [[euro(0), t("Geld gespart pro Jahr", "Money saved per year")],
           [euro(e.netto(60), true), t("Unterm Strich nach 5 Jahren", "Net savings after 5 years")],
           [t("rechnet sich nicht", "doesn't pay off"), t("Kaufpreis wieder drin", "Pays for itself")]]
        : e.bezahlt
        ? [[stunden(zeitJahr), t("Zeit gespart pro Jahr", "Time saved per year")],
           [euro(geldJahr), w.stundenwert > 0 ? t("Geld pro Jahr (mit Zeitwert)", "Money per year (incl. your time)") : t("Geld gespart pro Jahr", "Money saved per year")],
           [bezahltText(e.bezahlt), t("Kaufpreis wieder drin nach", "Pays for itself after")]]
        : [[stunden(e.minutenProWoche / 60), t("Zeit gespart pro Woche", "Time saved per week")],
           [stunden(zeitJahr), t("Zeit gespart pro Jahr", "Time saved per year")],
           [stunden(e.zeit(60)), t("Zeit gespart in 5 Jahren", "Time saved in 5 years")]];
      stats.forEach(([wert, label], i) => { z(`w${i + 1}`).textContent = wert; z(`l${i + 1}`).textContent = label; });
      z("extra").textContent = e.extra || "";
      z("extra").hidden = !e.extra;

      const fazit = box.querySelector(".fazit");
      const werte = { geld: euro(geldJahr), zeit: stunden(zeitJahr), woche: stunden(e.minutenProWoche / 60), preis: euro(e.preis), bezahlt: e.bezahlt ? bezahltText(e.bezahlt) : "",
        zeitwert: w.stundenwert > 0 ? t(" (deine Zeit eingerechnet)", " (counting your time)") : "" };
      fazit.innerHTML = e.bezahlt && ohneZeit
        ? t("Mit deinen Angaben sparst du pro Jahr <strong>{geld}</strong>. Dein Kaufpreis von {preis} ist nach <strong>{bezahlt}</strong> wieder drin.",
            "With your settings you save <strong>{geld}</strong> a year. Your purchase price of {preis} pays for itself after <strong>{bezahlt}</strong>.", werte)
        : ohneZeit
        ? t("Mit deinen Angaben spart dir das Gerät kein Geld.", "With your settings the device doesn't save you any money.")
        : e.bezahlt
        ? t("Mit deinen Angaben sparst du pro Jahr <strong>{zeit}</strong> und <strong>{geld}</strong>{zeitwert}. Dein Kaufpreis von {preis} ist nach <strong>{bezahlt}</strong> wieder drin.",
            "With your settings you save <strong>{zeit}</strong> and <strong>{geld}</strong> a year{zeitwert}. Your purchase price of {preis} pays for itself after <strong>{bezahlt}</strong>.", werte)
        : t("Mit deinen Angaben sparst du <strong>{woche} pro Woche</strong>, also <strong>{zeit} im Jahr</strong>. Das Gerät spart dir vor allem Zeit. Ob es sich auch in Euro lohnt, siehst du, wenn du am Regler über dem Diagramm einstellst, was dir eine Stunde Freizeit wert ist.",
            "With your settings you save <strong>{woche} a week</strong>, that's <strong>{zeit} a year</strong>. The device mainly saves you time. To see whether it also pays off in euros, use the slider above the chart to set what an hour of free time is worth to you.", werte);

      const mitGeld = !!e.bezahlt || ohneZeit;
      const mitZeit = !(mitGeld && ohneZeit);
      box.querySelector("thead").innerHTML = `<tr><th scope="col">${t("Zeitraum", "Period")}</th>${mitZeit ? `<th scope="col">${t("Zeit gespart", "Time saved")}</th>` : ""}${mitGeld ? `<th scope="col">${t("Geld unterm Strich", "Net savings")}</th>` : ""}</tr>`;
      box.querySelector("tbody").innerHTML = [1, 6, 12, 36, 60].map(m => {
        const n = e.netto(m);
        return `<tr><th scope="row">${nachMonaten(m)}</th>${mitZeit ? `<td>${stunden(e.zeit(m))}</td>` : ""}${mitGeld ? `<td class="${n >= 0 ? "plus" : "minus"}">${euro(n, true)}</td>` : ""}</tr>`;
      }).join("");

      zeichne(box, e);

      const v = root.querySelector("[data-vergleich]");
      if (v && e.vorher && e.nachher) {
        v.innerHTML = `
          <div><span class="v-titel">${esc(e.vorherTitel || t("Vorher", "Before"))}</span><ul>${e.vorher.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
          <div class="v-nachher"><span class="v-titel">${t("Mit", "With")} ${esc(kurzname(p))}</span><ul>${e.nachher.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`;
      }
    }
    neu();

    // Neu zeichnen, wenn sich die Breite ändert (Handy gedreht, Rechner aufgeklappt)
    const chartEl = box.querySelector(".chart");
    let breite = chartEl.clientWidth;
    const breiteGeaendert = () => {
      const b = chartEl.clientWidth;
      if (b && Math.abs(b - breite) > 8) { breite = b; zeichne(box, letztes); }
    };
    if (window.ResizeObserver) new ResizeObserver(breiteGeaendert).observe(chartEl);
    else window.addEventListener("resize", breiteGeaendert);

    // Für den Umschalter über den Modellen: im Rechner zur gewählten Gruppe wechseln
    return gi => {
      if (gi === gruppe || !gs[gi]) return;
      const radio = box.querySelector(`input[name="${p.id}-gruppe"][value="${gi}"]`);
      if (radio) radio.checked = true;
      gruppe = gi;
      neu();
    };
  }

  // ---------- Diagramm: Geld unterm Strich (oder gesparte Zeit) über die Monate ----------
  function zeichne(box, e) {
    // Spart der Rechner nur Geld (minutenProWoche 0), zeigen wir auch bei 0 € das Geld-Diagramm
    const geldModus = e.geldMonat > 0 || e.minutenProWoche <= 0;
    const be = e.bezahlt ?? Infinity;
    const N = geldModus ? (be === Infinity ? 60 : Math.min(60, Math.max(12, Math.ceil((be * 1.6) / 12) * 12))) : 24;
    const wert = m => (geldModus ? e.netto(m) : e.zeit(m));
    // Das Diagramm wird so breit gezeichnet, wie es angezeigt wird. So bleibt die Schrift am Handy lesbar.
    const chart = box.querySelector(".chart");
    const W = chart.clientWidth ? Math.round(Math.min(600, Math.max(300, chart.clientWidth))) : 600;
    const H = W < 480 ? 220 : 240, ml = 60, mr = 18, mt = 26, mb = 30;
    const pw = W - ml - mr, ph = H - mt - mb;

    let lo = Math.min(0, wert(0), wert(N)), hi = Math.max(0, wert(0), wert(N));
    if (hi - lo < 1e-6) hi = lo + 1;
    const roh = (hi - lo) / 4, mag = Math.pow(10, Math.floor(Math.log10(roh))), q = roh / mag;
    const step = (q <= 1 ? 1 : q <= 2 ? 2 : q <= 2.5 ? 2.5 : q <= 5 ? 5 : 10) * mag;
    lo = Math.floor(lo / step) * step; hi = Math.ceil(hi / step) * step;

    const x = m => ml + (m / N) * pw;
    const y = v => mt + ((hi - v) / (hi - lo)) * ph;
    const yLabel = v => (geldModus ? euro(v, v !== 0) : `${nf(v)} h`);

    let s = "";
    for (let v = lo; v <= hi + step / 2; v += step) {
      s += `<line class="${Math.abs(v) < step / 1000 ? "null" : "grid"}" x1="${ml}" x2="${W - mr}" y1="${y(v)}" y2="${y(v)}"/>`;
      s += `<text class="ach" x="${ml - 8}" y="${y(v) + 4}" text-anchor="end">${yLabel(Math.abs(v) < step / 1000 ? 0 : v)}</text>`;
    }
    const xStep = N <= 24 ? 6 : 12;
    for (let m = 0; m <= N; m += xStep) {
      const marke = m === 0 ? t("Kauf", "Buy") : m % 12 === 0 ? t("{n} J.", "{n} yr", { n: m / 12 }) : t("{n} Mon.", "{n} mo", { n: m });
      s += `<text class="ach" x="${x(m)}" y="${H - 8}" text-anchor="${m === 0 ? "start" : m === N ? "end" : "middle"}">${marke}</text>`;
    }

    // Flächen: unter null = noch nicht bezahlt, über null = Gewinn
    if (geldModus) {
      if (be < N) {
        s += `<polygon class="flaeche-minus" points="${x(0)},${y(wert(0))} ${x(be)},${y(0)} ${x(0)},${y(0)}"/>`;
        s += `<polygon class="flaeche-plus" points="${x(be)},${y(0)} ${x(N)},${y(wert(N))} ${x(N)},${y(0)}"/>`;
      } else {
        s += `<polygon class="flaeche-minus" points="${x(0)},${y(wert(0))} ${x(N)},${y(wert(N))} ${x(N)},${y(0)} ${x(0)},${y(0)}"/>`;
      }
    } else {
      s += `<polygon class="flaeche-plus" points="${x(0)},${y(0)} ${x(N)},${y(wert(N))} ${x(N)},${y(0)}"/>`;
    }
    s += `<line class="linie" x1="${x(0)}" y1="${y(wert(0))}" x2="${x(N)}" y2="${y(wert(N))}"/>`;

    if (geldModus && be <= N) {
      const bx = x(be), by = y(0);
      const anchor = bx > W - 140 ? "end" : bx < ml + 80 ? "start" : "middle";
      s += `<circle class="punkt" cx="${bx}" cy="${by}" r="5"/>`;
      s += `<text class="beschriftung" x="${bx}" y="${by - 12}" text-anchor="${anchor}">${t("bezahlt nach", "paid off after")} ${bezahltText(be)}</text>`;
    }
    const endLabel = geldModus ? euro(wert(N), true) : stunden(wert(N));
    if (!geldModus || be < N * 0.7) {
      s += `<circle class="punkt" cx="${x(N)}" cy="${y(wert(N))}" r="4"/>`;
      s += `<text class="beschriftung" x="${x(N) - 8}" y="${y(wert(N)) - 10}" text-anchor="end">${endLabel}</text>`;
    }

    s += `<line class="kreuz" x1="0" x2="0" y1="${mt}" y2="${H - mb}" visibility="hidden"/>`;
    s += `<circle class="punkt kreuz-punkt" r="5" cx="0" cy="0" visibility="hidden"/>`;
    s += `<rect class="hover" x="${ml}" y="${mt}" width="${pw}" height="${ph}"/>`;

    box.querySelector(".chart-titel").textContent = geldModus ? t("Geld unterm Strich seit dem Kauf", "Net savings since purchase") : t("Gesparte Zeit seit dem Kauf", "Time saved since purchase");
    chart.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${geldModus ? t("Geld unterm Strich", "Net savings") : t("Gesparte Zeit", "Time saved")} ${t("über", "over")} ${N} ${t("Monate", "months")}">${s}</svg><div class="tooltip" hidden></div>`;

    const svg = chart.querySelector("svg"), tip = chart.querySelector(".tooltip");
    const kreuz = svg.querySelector(".kreuz"), kp = svg.querySelector(".kreuz-punkt");
    svg.querySelector(".hover").addEventListener("pointermove", ev => {
      const rect = svg.getBoundingClientRect();
      const sx = ((ev.clientX - rect.left) / rect.width) * W;
      const m = Math.max(0, Math.min(N, Math.round(((sx - ml) / pw) * N)));
      kreuz.setAttribute("x1", x(m)); kreuz.setAttribute("x2", x(m)); kreuz.setAttribute("visibility", "visible");
      kp.setAttribute("cx", x(m)); kp.setAttribute("cy", y(wert(m))); kp.setAttribute("visibility", "visible");
      tip.innerHTML = `<strong>${nachMonaten(m)}</strong>${e.minutenProWoche > 0 ? `<br>${stunden(e.zeit(m))} ${t("gespart", "saved")}` : ""}${geldModus ? `<br>${euro(e.netto(m), true)} ${t("unterm Strich", "net")}` : ""}`;
      tip.hidden = false;
      const px = (x(m) / W) * 100;
      tip.style.left = `${px}%`;
      tip.style.transform = `translateX(${px > 70 ? "-105%" : px < 25 ? "5%" : "-50%"})`;
    });
    svg.querySelector(".hover").addEventListener("pointerleave", () => {
      tip.hidden = true;
      kreuz.setAttribute("visibility", "hidden"); kp.setAttribute("visibility", "hidden");
    });
  }
})();

// Besucherstatistik (Cloudflare Web Analytics, siehe Datenschutz): Cloudflare fügt das Zählskript selbst ein, seit dem 05.11.2026
// aber nicht mehr bei allen Besuchern. Darum lädt die Seite es hier selbst, wenn Cloudflare es nicht schon eingefügt hat
// (so wird niemand doppelt gezählt). Nur auf myle.life, nicht in der Vorschau oder im Texte-Editor.
// „Mich nicht zählen“ und die Prüf-Browser der Agenten blockt weiterhin die Sicherheitsregel oben im <head>.
(function () {
  if (!/(^|\.)myle\.life$/.test(location.hostname)) return;
  function laden() {
    if (document.querySelector('script[src*="cloudflareinsights.com/beacon"]')) return;
    var s = document.createElement("script");
    s.defer = true;
    s.src = "https://static.cloudflareinsights.com/beacon.min.js";
    s.setAttribute("data-cf-beacon", '{"token": "fc57503e21174189a7c2b18e0d23d3cd"}');
    document.body.appendChild(s);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", laden);
  else laden();
})();

// Eigener Klickzähler ohne Cookies (siehe Datenschutz, Abschnitt 3 „#zaehler“; Server: functions/api/ereignis.js).
// Meldet den Aufruf gleich nach dem Laden, Klicks sofort und alles andere gebündelt etwa 2 Sekunden später (spätestens,
// wenn die Seite verlassen oder verborgen wird). Grund: Die In-App-Browser von Instagram und TikTok schließen oft, ohne der
// Seite vorher Bescheid zu geben; eine Meldung erst beim Verlassen käme dann nie an. Ereignisse:
//   aufruf                      einmal pro Aufruf
//   box-gesehen / box-klick     Kaufempfehlung zur Hälfte sichtbar / Klick auf einen Shop-Link; Detail sagt, welche:
//                               oben (Kasten „Meine Empfehlung“), modell-<Stufe 1–3>-<Abschnitt>, alternative-…, zubehoer, sonst andere
//   rechner                     erste Eingabe im Rechner
//   scroll                      25, 50, 75, 100 (Prozent der Seite)
// Kein Cookie, kein Speicher, keine Kennung. Nur auf myle.life. „Mich nicht zählen“ und die Prüf-Browser der Agenten
// erkennt er an der Sicherheitsregel, die das Skript oben im <head> dann einfügt.
(function () {
  if (location.hostname !== "myle.life" || !navigator.sendBeacon) return;
  if (document.querySelector('meta[http-equiv="Content-Security-Policy"]')) return;
  var pfad = location.pathname.replace(/^\/(en|fr|it)\//, "/").replace(/\.html$/, "").replace(/^\/|\/$/g, "");
  var seite = (document.body.getAttribute("data-zaehler-seite") || pfad || "start").toLowerCase(); // 404-Seiten heißen „404“
  var sprache = (document.documentElement.lang || "de").slice(0, 2);
  if (!/^[a-z0-9-]{1,80}$/.test(seite)) return;
  var warte = [["aufruf", ""]], schon = {}, bald = 0;
  function merke(e, d) {
    var k = e + "|" + (d || "");
    if (schon[k] && e !== "box-klick") return;
    schon[k] = 1;
    warte.push([e, d || ""]);
    clearTimeout(bald);
    bald = setTimeout(senden, 2000);
  }
  function senden() {
    clearTimeout(bald);
    if (!warte.length) return;
    var teil = warte.splice(0, 40);
    try { navigator.sendBeacon("/api/ereignis", JSON.stringify({ s: seite, l: sprache, e: teil })); } catch (e) { /* egal */ }
  }
  function kurz(x) { return String(x || "").toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 50); }
  function box(el) {
    if (el.closest(".empf-box")) return "oben";
    if (el.closest(".zubehoer")) return "zubehoer";
    var m = el.closest("article.modell");
    if (m) {
      var st = m.querySelector(".stufe"), nr = st && (st.className.match(/stufe-(\d)/) || [])[1];
      return (el.closest(".alternativen") ? "alternative-" : "modell-") + (nr || "0") + (m.id ? "-" + kurz(m.id) : "");
    }
    return "andere";
  }
  document.addEventListener("click", function (ev) {
    var a = ev.target && ev.target.closest && ev.target.closest('a[rel~="sponsored"]');
    if (!a) return;
    merke("box-klick", box(a));
    senden();
  }, true);
  document.addEventListener("input", function (ev) {
    if (ev.target && ev.target.closest && ev.target.closest(".rechner, #rechner")) merke("rechner", "");
  }, true);
  document.addEventListener("change", function (ev) {
    if (ev.target && ev.target.closest && ev.target.closest(".rechner, #rechner")) merke("rechner", "");
  }, true);
  var marken = [25, 50, 75, 100], laeuft = false;
  function tiefe() {
    laeuft = false;
    var h = document.documentElement.scrollHeight, p = h > 0 ? (window.scrollY + window.innerHeight) / h * 100 : 0;
    while (marken.length && p >= (marken[0] === 100 ? 98 : marken[0])) merke("scroll", String(marken.shift()));
  }
  window.addEventListener("scroll", function () { if (!laeuft) { laeuft = true; requestAnimationFrame(tiefe); } }, { passive: true });
  function beobachten() {
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (e) {
        if (!e.isIntersecting) return;
        merke("box-gesehen", box(e.target));
        io.unobserve(e.target);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll(".empf-box, article.modell:not(.modell-leer), .zubehoer-karte").forEach(function (el) { io.observe(el); });
  }
  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden") senden(); });
  window.addEventListener("pagehide", senden);
  function start() { beobachten(); tiefe(); senden(); }
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start);
})();
