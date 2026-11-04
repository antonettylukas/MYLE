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
          <button type="button" class="sprache-knopf" aria-expanded="false" aria-controls="sprache-liste" aria-label="${t("Sprache", "Language")}${DOPPELPUNKT} ${jetzt.name}">${flagge(SPRACHE)}<span class="sprache-code">${SPRACHE.toUpperCase()}</span><svg class="sprache-pfeil" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5l3 3 3-3"/></svg></button>
          <ul class="sprache-liste" id="sprache-liste" hidden>${SPRACHEN.map(s => `
            <li><a href="${pfadIn(s.code)}" lang="${s.code}" hreflang="${s.code}"${s.code === SPRACHE ? ' aria-current="true"' : ""}>${flagge(s.code)}<span>${s.name}</span></a></li>`).join("")}
          </ul>
        </div>`;
  const kopf = document.getElementById("kopf");
  if (kopf) {
    const nlLink = typ === "start" || typ === "produkt" ? "#newsletter" : "./#newsletter";
    kopf.outerHTML = `
      <header class="top"><div class="wrap">
        <a class="logo" href="./">${logo()}</a>
        <nav aria-label="${t("Hauptmenü", "Main menu")}"><a href="./#helfer">${t("Alle Helfer", "All helpers")}</a><a href="./#ueber-mich">${t("Über mich", "About me")}</a><a href="${nlLink}">Newsletter</a>${sprachen}</nav>
      </div></header>`;
    spracheSchalter();
  }
  const fuss = document.getElementById("fuss");
  if (fuss) {
    fuss.outerHTML = `
      <footer>
        <div class="wrap"><p class="notice">${t("* Werbelink: Kaufst du darüber, bekomme ich eine kleine Provision. Der Preis bleibt für dich gleich. Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Alle Ersparnisse sind Schätzungen.",
          "* Advertising link: if you buy through it, I get a small commission. The price stays the same for you. As an Amazon Associate I earn from qualifying purchases. All savings are estimates.")}</p></div>
        <div class="wrap fuss-zeile">
          <span>© ${new Date().getFullYear()} ${seitenName}</span>
          <nav aria-label="${t("Rechtliches", "Legal")}"><a href="./">${t("Startseite", "Home")}</a><a href="impressum">${t("Impressum", "Legal notice")}</a><a href="datenschutz">${t("Datenschutz", "Privacy policy")}</a></nav>
        </div>
      </footer>`;
  }

  if (typ === "start") baueStart();
  if (typ === "produkt") baueProduktseite();
  document.querySelectorAll("[data-newsletter]").forEach(baueNewsletter);
  springeZumAnker();
  seitenwechsel();

  // ---------- Startseite ----------
  function baueStart() {
    const liste = document.getElementById("uebersicht");
    if (liste) {
      liste.innerHTML = PRODUKTE.map(karte).join("");
      einfrieren(liste);
      vorschauFuer(liste);
      abspielenImBild(liste);
      const filter = document.getElementById("filter");
      const kategorien = [...new Set(PRODUKTE.map(p => p.kategorie))];
      if (filter && kategorien.length > 1) {
        filter.innerHTML = ["", ...kategorien].map(k =>
          `<button type="button" class="chip" data-filter="${esc(k)}" aria-pressed="${k === ""}">${k ? esc(k) : t("Alle", "All")}</button>`).join("");
        filter.addEventListener("click", ev => {
          const b = ev.target.closest("[data-filter]");
          if (!b) return;
          const k = b.dataset.filter;
          filter.querySelectorAll("[data-filter]").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
          vorschauZu();
          liste.querySelectorAll(".karte").forEach(c => { c.hidden = !!k && c.dataset.kategorie !== k; });
        });
      }
    }
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
      <nav class="wrap brotkrumen" aria-label="${t("Brotkrumen", "Breadcrumb")}"><a href="./#helfer">${t("Alle Helfer", "All helpers")}</a><span aria-hidden="true">/</span><span>${esc(p.kategorie)}</span></nav>
      <section class="wrap p-hero">
        <div class="p-hero-text">
          <span class="eyebrow">${esc(p.kategorie)}</span>
          <h1>${esc(p.name)}</h1>
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

    const spruenge = [
      ms.length && ["#modelle", t("Preisklassen", "Price ranges")],
      r && ["#rechner", t("Rechner", "Calculator")],
      p.fragen && p.fragen.length && ["#fragen", t("Fragen und Antworten", "Questions and answers")]
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
    const qs = (p.quellen || []).filter(q => q && q.name && (!q.url || /^https:\/\//.test(q.url)));
    const quellenBlock = qs.length ? `
      <section class="wrap p-block" id="quellen" aria-labelledby="quellen-titel">
        <h2 class="p-titel" id="quellen-titel">${t("Meine Quellen", "My sources")}</h2>
        <p class="p-intro">${t("Auf diese Tests und Seiten stützen sich meine Empfehlungen.", "My recommendations are based on these tests and pages.")}</p>
        ${(liste => qs.length > 6 ? `<details class="quellen-details"><summary>${t("Alle {n} Quellen anzeigen", "Show all {n} sources", { n: qs.length })}</summary>${liste}</details>` : liste)(
          `<ul class="quellen">${qs.map(q => `<li>${q.url ? `<a href="${esc(q.url)}" target="_blank" rel="nofollow noopener">${esc(q.name)}</a>` : esc(q.name)}${q.text ? `<span class="quelle-text">, ${esc(q.text)}</span>` : ""}</li>`).join("")}</ul>`)}
      </section>` : "";

    // Unten höchstens vier andere Helfer: erst die aus derselben Kategorie, dann die übrigen
    const andere = PRODUKTE.filter(x => x.id !== p.id);
    const auswahl = [...andere.filter(x => x.kategorie === p.kategorie), ...andere.filter(x => x.kategorie !== p.kategorie)].slice(0, 4);
    const weitere = auswahl.length ? `
      <section class="wrap p-block" aria-labelledby="weitere-titel">
        <h2 class="p-titel" id="weitere-titel">${t("Noch mehr Helfer für mehr Freizeit", "More helpers for more free time")}</h2>
        <div class="karten">${auswahl.map(karte).join("")}</div>
        ${andere.length > auswahl.length ? `<p class="alle-helfer"><a href="./#helfer">${t("Alle {n} Helfer ansehen", "See all {n} helpers", { n: PRODUKTE.length })}</a></p>` : ""}
      </section>` : "";

    ziel.innerHTML = hero + sprung + erfBlock + muehBlock + modellBlock + rechnerBlock + fragenBlock + quellenBlock + weitere +
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
  }

  // „Zuletzt geprüft: November 2026“ unter der Einleitung der Modelle. Datum aus produkte.js (Feld geprueft) oder einstellungen.js.
  function geprueftZeile(p) {
    const d = String(p.geprueft || S.geprueft || "");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) return "";
    const monat = new Date(d + "T12:00:00Z").toLocaleDateString(ZAHLEN, { month: "long", year: "numeric", timeZone: "UTC" });
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
          <p class="nl-klein">${t("Du bekommst zuerst eine Mail, in der du die Anmeldung bestätigst. Abmelden geht mit einem Klick in jeder Mail. Mehr dazu in der", "First you'll get an email to confirm your sign-up. You can unsubscribe with one click in every email. More about this in the")} <a href="datenschutz#newsletter">${t("Datenschutzerklärung", "privacy policy")}</a>.</p>
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
    // Liegen zwei Werte fast gleich, teilen sie sich eine Marke (z. B. "AT · CH"), damit sich nichts überdeckt
    const schnittMarken = f => {
      const marken = [];
      f.schnitt.forEach((v, i) => {
        const e = typeof v === "number"
          ? { wert: v, kurz: i < 3 ? String(i + 1) : "4+", name: personen(i), d: Number.isInteger(v) ? 0 : 1 }
          : { ...v, d: dezimalen(f.step) };
        const m = marken.find(m => Math.abs(m[0].wert - e.wert) < (f.max - f.min) * 0.04);
        if (m) m.push(e); else marken.push([e]);
      });
      return marken;
    };
    const schnittHtml = (f, id) => !f.schnitt ? "" : `
          <div class="schnitt" id="${id}-schnitt">${schnittMarken(f).map(m => {
            const zeilen = m.map(e => [e.name, `${t("im Schnitt", "on average")} ${mitEinheit(e.wert, e.d, f.einheit)}${e.zusatz ? ` (${e.zusatz})` : ""}`]);
            return `<button type="button" data-wert="${m[0].wert}" style="--p:${((m[0].wert - f.min) / (f.max - f.min)).toFixed(4)}" aria-label="${esc(zeilen.map(z => `${z[0]}: ${z[1]}`).join(", "))}">${esc(m.map(e => e.kurz).join(" · "))}<span class="blase" aria-hidden="true">${zeilen.map(z => `<b>${esc(z[0])}</b>${esc(z[1])}`).join("")}</span></button>`;
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
        box.querySelectorAll(`input[name="${id}"]`).forEach(i => i.addEventListener("change", () => { w[f.id] = i.value; neu(); }));
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
          neu();
          if (leiste) blaseZeigen(leiste.querySelector("button.an"));
        });
        // Tipp auf einen Durchschnitt: Der Regler springt dorthin (auf seine Schrittweite gerundet)
        if (leiste) leiste.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
          el.value = b.dataset.wert;
          w[f.id] = Number(el.value);
          neu();
          blaseZeigen(b);
        }));
      }
    });
    box.querySelectorAll(`input[name="${p.id}-gruppe"]`).forEach(inp => inp.addEventListener("change", () => {
      const g = Number(inp.value);
      if (!gs[g] || g === gruppe) return;
      gruppe = g;
      if (beiGruppe) beiGruppe(g);
      neu();
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

    function neu() {
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
