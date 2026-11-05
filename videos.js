/*
  Die Erklärvideos. Jedes Produkt in produkte.js verweist mit "video" auf
  einen Eintrag in VIDEOS (weiter unten).

  Ein Video ist keine Filmdatei, sondern eine Folge von gezeichneten Szenen,
  die sich im Browser bewegen. Deshalb lädt es sofort und kostet nichts.

  Jede Szene hat:
    dauer   Sekunden, die die Szene läuft
    titel   Überschrift unter dem Video
    text    Ein Satz dazu
    svg     Die Zeichnung mit Animationen (Klassen stehen in videos.css)
    vorher  true: oben rechts steht „Vorher“ (für die Szene, die zeigt, wie es bisher war);
            die übrigen Szenen dieses Videos zeigen dort dann „Nachher“

  Neue Szenen zu zeichnen ist Handarbeit. Texte und Dauer kannst du aber
  gefahrlos ändern.
*/

// Englische Seiten (myle.life/en/) laden vorher en/videos-texte.js mit VIDEO_TEXTE: deutscher Text -> englischer Text.
// T() übersetzt einen Text, wenn es dafür eine Übersetzung gibt, sonst bleibt er deutsch.
const T = s => (typeof VIDEO_TEXTE !== "undefined" && VIDEO_TEXTE[s]) || s;

// ---------- Licht, Schatten und Materialien, die alle Szenen benutzen ----------
const DEFS = `<defs>
  <filter id="v-sch" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#000" flood-opacity=".22"/></filter>
  <filter id="v-sch-weich" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#000" flood-opacity=".22"/></filter>
  <filter id="v-blur" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="2.5"/></filter>
  <filter id="v-blur-gross" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="9"/></filter>
  <linearGradient id="v-metall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbfcfd"/><stop offset=".45" stop-color="#dde3e6"/><stop offset=".55" stop-color="#c6ced2"/><stop offset="1" stop-color="#eef1f3"/></linearGradient>
  <linearGradient id="v-metall-h" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#eef1f3"/><stop offset=".5" stop-color="#c9d0d4"/><stop offset="1" stop-color="#f5f7f8"/></linearGradient>
  <linearGradient id="v-dunkel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a555a"/><stop offset="1" stop-color="#1c2326"/></linearGradient>
  <linearGradient id="v-glanz" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".6"/><stop offset=".5" stop-color="#fff" stop-opacity=".08"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
  <linearGradient id="v-abdunkeln" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".4"/></linearGradient>
  <linearGradient id="v-abdunkeln-r" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".35"/></linearGradient>
  <linearGradient id="v-glas" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".45"/><stop offset=".4" stop-color="#fff" stop-opacity=".05"/><stop offset="1" stop-color="#fff" stop-opacity=".3"/></linearGradient>
  <radialGradient id="v-glut-r"><stop offset="0" stop-color="#ffc06a" stop-opacity=".95"/><stop offset=".6" stop-color="#ff8a2a" stop-opacity=".5"/><stop offset="1" stop-color="#ff7a1a" stop-opacity="0"/></radialGradient>
  <radialGradient id="v-licht-r"><stop offset="0" stop-color="#fff7d6" stop-opacity=".95"/><stop offset="1" stop-color="#fff7d6" stop-opacity="0"/></radialGradient>
  <radialGradient id="v-boden-licht" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
  <linearGradient id="v-holz" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#dcc7a8"/><stop offset="1" stop-color="#bfa27c"/></linearGradient>
  <linearGradient id="v-wand-hell" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f9f6ef"/><stop offset="1" stop-color="#e6dfd2"/></linearGradient>
  <linearGradient id="v-wand-dunkel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9e3d7"/><stop offset="1" stop-color="#cbc2b1"/></linearGradient>
  <linearGradient id="v-keramik" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#cfd6da"/></linearGradient>
  <linearGradient id="v-gold-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7d775"/><stop offset="1" stop-color="#d4921c"/></linearGradient>
  <linearGradient id="v-blass-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6e9c4"/><stop offset="1" stop-color="#e3cf98"/></linearGradient>
  <linearGradient id="v-blau-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7cc8ff"/><stop offset="1" stop-color="#1f6fb5"/></linearGradient>
  <linearGradient id="v-leder" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9a6a46"/><stop offset="1" stop-color="#5b3b23"/></linearGradient>
  <linearGradient id="v-gruen-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6fbf7a"/><stop offset="1" stop-color="#2f7a3c"/></linearGradient>
  <linearGradient id="v-orange-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffa057"/><stop offset="1" stop-color="#e2641f"/></linearGradient>
  <linearGradient id="v-fliese-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e3e9ec"/></linearGradient>
  <linearGradient id="v-fliese-dunkel-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a4a47"/><stop offset="1" stop-color="#26332f"/></linearGradient>
  <linearGradient id="v-rot-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e86b5a"/><stop offset="1" stop-color="#b23b2c"/></linearGradient>
  <linearGradient id="v-braun-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e3a55a"/><stop offset="1" stop-color="#a5601f"/></linearGradient>
</defs>`;

// Die Schilder oben rechts (rechter Rand bei x 314): „Vorher“ für Szenen mit vorher: true, „Nachher“ für die übrigen Szenen desselben Videos
const schild = (wort, cls, breite) => `<g transform="translate(${314 - breite / 2} 15)"><g class="${cls} v-pop" style="--d:.2s"><rect x="${-breite / 2}" y="-10" width="${breite}" height="20" rx="10" filter="url(#v-sch)"/><text y="4.2" text-anchor="middle">${T(wort)}</text></g></g>`;
const VORHER = schild("Vorher", "v-vorher", 58), NACHHER = schild("Nachher", "v-nachher", 68);

// ---------- Bausteine, die mehrere Videos benutzen ----------
const figur = (x, y, cls = "") =>
  `<g class="figur ${cls}" transform="translate(${x} ${y})" filter="url(#v-sch)"><circle cx="0" cy="-32" r="6"/><path d="M-6 -23 Q0 -26 6 -23 L7 -4 H3 V14 H-3 V-4 H-7 Z"/></g>`;
// Dieselbe Figur als Frau: Haare bis auf die Schultern, Kleid. In neuen Videos abwechselnd Mann und Frau zeigen.
const figurFrau = (x, y, cls = "") =>
  `<g class="figur ${cls}" transform="translate(${x} ${y})" filter="url(#v-sch)"><path d="M-7.4 -31 C-8.2 -42.5 8.2 -42.5 7.4 -31 L8.6 -21.5 Q6 -20.4 4.4 -23.4 H-4.4 Q-6 -20.4 -8.6 -21.5 Z"/><circle cx="0" cy="-32" r="6"/><path d="M-5.6 -23 Q0 -25.6 5.6 -23 L10.5 0 H-10.5 Z"/><rect x="-4.6" y="-1" width="3.2" height="15" rx="1.4"/><rect x="1.4" y="-1" width="3.2" height="15" rx="1.4"/></g>`;

const uhr = (x, y, zeit, std, min) =>
  `<g transform="translate(${x} ${y})"><circle r="16" class="uhr" filter="url(#v-sch)"/><circle r="16" fill="url(#v-glanz)"/><line y2="-7" transform="rotate(${std})" class="zeiger"/><line y2="-11" transform="rotate(${min})" class="zeiger"/><circle r="1.6" class="zeiger-nabe"/><text y="28" text-anchor="middle" class="t-klein fett">${zeit}</text></g>`;

const haken = (x, y, d) =>
  `<g transform="translate(${x} ${y})"><g class="v-pop" style="--d:${d}s"><circle r="7" class="haken-kreis"/></g><path d="M-3.5 0 L-1 2.5 L3.5 -2.5" pathLength="1" class="haken v-zeichne" style="--d:${d + 0.25}s"/></g>`;

const funkel = (x, y, d, s = 1) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -6 L1.6 -1.6 L6 0 L1.6 1.6 L0 6 L-1.6 1.6 L-6 0 L-1.6 -1.6 Z" class="funkel v-funkel" style="--d:${d}s"/></g>`;

// Die Blase wächst mit dem Text, darum wird er schon hier übersetzt
const blase = (x, y, text, d, len, akzent) => {
  text = T(text);
  return `<g transform="translate(${x} ${y})"><g class="v-takt" style="--d:${d}s;--len:${len}s"><rect x="${-(text.length * 3.35 + 12)}" y="-10" width="${text.length * 6.7 + 24}" height="19" rx="9.5" class="${akzent ? "blase-akzent" : "blase"}" filter="url(#v-sch)"/><text y="3" text-anchor="middle" class="t-klein ${akzent ? "hell" : ""}">${text}</text></g></g>`;
};

const zeile = (x, y, text, d, cls = "t-mittel") =>
  `<g transform="translate(${x} ${y})"><g class="v-hoch" style="--d:${d}s">${haken(0, 0, d + 0.1)}<text x="14" y="4" class="${cls}">${text}</text></g></g>`;

const balken = (x, y, label, breite, wert, d, len, leise) =>
  `<g transform="translate(${x} ${y})"><text y="10" class="t-klein">${label}</text><g transform="translate(0 16)"><rect width="230" height="14" rx="7" class="balken-bg"/><rect width="${breite}" height="14" rx="7" class="balken ${leise ? "leise-balken" : ""} v-spur" style="--d:${d}s;--len:${len}s"/><rect width="${breite}" height="7" rx="7" fill="url(#v-glanz)" class="v-spur" style="--d:${d}s;--len:${len}s"/></g><text x="${breite + 8}" y="27" class="t-klein fett v-ein" style="--d:${d + len}s">${wert}</text></g>`;

const fliesen = (x0, y0, w, h, g = 28) => {
  let s = "";
  for (let y = y0; y < y0 + h; y += g) for (let x = x0; x < x0 + w; x += g) s += `<rect x="${x}" y="${y}" width="${g}" height="${g}" class="fliese"/><rect x="${x + 1}" y="${y + 1}" width="${g - 2}" height="${(g - 2) / 2}" fill="url(#v-glanz)" opacity=".5"/>`;
  return s;
};

// Ein Punkt, der einer Bahn folgt (z. B. ein Luft- oder Wassertropfen)
const partikel = (pfad, dauer, begin, r, cls) =>
  `<circle r="${r}" class="${cls}"><animateMotion dur="${dauer}s" begin="${begin}s" repeatCount="indefinite" rotate="0" path="${pfad}"/><animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.15;.8;1" dur="${dauer}s" begin="${begin}s" repeatCount="indefinite"/></circle>`;

const VIDEOS = {};

// Schrift, die über einer Zeichnung liegt (zum Beispiel über Möbeln oder einem Gerät), bekommt ein dezentes Feld
// in der Hintergrundfarbe dahinter, damit sie sich abhebt (Player und Standbilder der Karten). Schrift auf freiem Grund
// bleibt ohne Feld, ebenso Schrift in Schildchen und Blasen oder auf Geräten (eigene Farbe im style).
function hinterlegeSchrift(svg) {
  const NS = "http://www.w3.org/2000/svg";
  const S = svg.getBoundingClientRect();
  if (!S.width) return;
  // Gezeichnete Flächen der Szene; sehr breite oder hohe (Boden, Wand, Schatten unter allem) zählen als Hintergrund
  const flaechen = [...svg.querySelectorAll("rect, path, circle, ellipse, polygon, polyline, line, image")]
    .filter(el => !el.closest("defs, clipPath, mask, pattern, .v-vorher, .v-nachher") && !/blur/.test(el.getAttribute("filter") || "")) // weiche Schatten zählen nicht
    .map(el => el.getBoundingClientRect())
    .filter(r => r.width && r.height && r.width < S.width * 0.55 && r.height < S.height * 0.6);
  const ueberZeichnung = r => flaechen.some(f => {
    const b = Math.min(r.right, f.right) - Math.max(r.left, f.left), h = Math.min(r.bottom, f.bottom) - Math.max(r.top, f.top);
    return b > 0 && h > 0 && b * h > r.width * r.height * 0.08;
  });
  svg.querySelectorAll("text").forEach(tx => {
    if (tx.closest(".v-vorher, .v-nachher") || tx.classList.contains("hell") || /fill/.test(tx.getAttribute("style") || "")) return;
    let b;
    try { b = tx.getBBox(); } catch (e) { return; }
    if (!b.width) return;
    // Schrift auf einer kleinen Fläche direkt davor (Blase, Knopf, Etikett) hat schon einen Untergrund
    const davor = tx.previousElementSibling;
    if (davor && /^(rect|circle|ellipse|path)$/.test(davor.tagName)) {
      const f = davor.getBBox(), mx = b.x + b.width / 2, my = b.y + b.height / 2;
      if (f.width < 260 && mx > f.x && mx < f.x + f.width && my > f.y && my < f.y + f.height) return;
    }
    if (!ueberZeichnung(tx.getBoundingClientRect())) return;
    const feld = document.createElementNS(NS, "rect");
    const oben = b.y - 1, unten = Math.min(b.y + b.height + 1, 172); // unten frei lassen für die Fortschrittsbalken der Karten
    feld.setAttribute("x", (b.x - 3).toFixed(1)); feld.setAttribute("y", oben.toFixed(1));
    feld.setAttribute("width", (b.width + 6).toFixed(1)); feld.setAttribute("height", Math.max(0, unten - oben).toFixed(1));
    feld.setAttribute("rx", "4"); feld.setAttribute("class", "text-hg");
    // Bewegt sich die Schrift selbst (Klassen v-…), bewegt sich das Feld mit: beide in eine Gruppe mit dieser Bewegung
    const bewegung = [...tx.classList].filter(c => c.startsWith("v-"));
    if (bewegung.length) {
      const g = document.createElementNS(NS, "g");
      bewegung.forEach(c => { tx.classList.remove(c); g.classList.add(c); });
      const stil = (tx.getAttribute("style") || "").split(";").map(s => s.trim()).filter(Boolean);
      g.setAttribute("style", stil.filter(s => s.startsWith("--")).join(";"));
      const rest = stil.filter(s => !s.startsWith("--")).join(";");
      if (rest) tx.setAttribute("style", rest); else tx.removeAttribute("style");
      tx.replaceWith(g); g.append(feld, tx);
    } else tx.before(feld);
  });
}
window.hinterlegeSchrift = hinterlegeSchrift;

// ---------- Der Player ----------
// opt.vonSelbst = false: nicht automatisch starten, wenn das Video ins Bild kommt (für die Vorschau)
// opt.schleife = true: nach der letzten Szene wieder von vorn
// opt.start: mit dieser Szene beginnen (Zählung ab 0)
// opt.schlicht = true: nur Bild und Fortschritt, ohne Knöpfe und Text (für die Karten am Handy)
function baueVideo(p, video, ziel, opt = {}) {
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduziert = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const szenen = video.szenen, n = szenen.length, mitVorher = szenen.some(s => s.vorher);
  const playIcon = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2l10 6-10 6z"/></svg>`;
  const pauseIcon = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 2h4v12H3zM9 2h4v12H9z"/></svg>`;
  const nochmalIcon = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3a5 5 0 1 1-4.6 3H1.5A6.5 6.5 0 1 0 8 1.5V0L4 3l4 3V3z"/></svg>`;

  ziel.innerHTML = opt.schlicht ? `
    <div class="buehne pause"><div class="leinwand"></div></div>
    <div class="v-segmente">${szenen.map(() => `<span class="v-seg"><span></span></span>`).join("")}</div>` : `
    <div class="buehne pause" aria-label="${T("Erklärvideo")}: ${esc(p.name)}">
      <div class="leinwand"></div>
      <button type="button" class="v-overlay" aria-label="${T("Video abspielen")}"><span><span class="abspielen">${playIcon}</span><span class="nochmal">${nochmalIcon}</span></span></button>
    </div>
    <div class="untertitel" aria-live="polite"><strong></strong><span></span></div>
    <div class="v-leiste">
      <button type="button" class="v-btn v-play" aria-label="${T("Abspielen")}"><span class="play-icon">${playIcon}</span><span class="pause-icon">${pauseIcon}</span></button>
      <div class="v-segmente">${szenen.map((s, i) => `<button type="button" class="v-seg" aria-label="${T("Szene")} ${i + 1}: ${esc(s.titel)}"><span></span></button>`).join("")}</div>
      <span class="v-zaehler"></span>
      <button type="button" class="v-btn v-weiter" aria-label="${T("Nächste Szene")}"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 2l6 6-6 6V2z"/></svg></button>
    </div>`;

  const buehne = ziel.querySelector(".buehne"), leinwand = ziel.querySelector(".leinwand");
  const playBtn = ziel.querySelector(".v-play"), segs = [...ziel.querySelectorAll(".v-seg")];
  const titelEl = ziel.querySelector(".untertitel strong"), textEl = ziel.querySelector(".untertitel span"), zaehler = ziel.querySelector(".v-zaehler");
  let i = 0, laeuft = false, start = 0, vorher = 0, ende = false, benutzerPause = false, sichtbar = false;

  const svgEl = () => leinwand.querySelector("svg");

  function zeige(k) {
    i = k; ende = false; vorher = 0; start = performance.now();
    buehne.classList.remove("ende");
    leinwand.innerHTML = `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${DEFS}${szenen[k].svg}${szenen[k].vorher ? VORHER : mitVorher ? NACHHER : ""}</svg>`;
    if (titelEl) { titelEl.textContent = szenen[k].titel; textEl.textContent = szenen[k].text; }
    if (zaehler) zaehler.textContent = `${k + 1}/${n}`;
    segs.forEach((s, j) => { s.classList.toggle("fertig", j < k); if (j >= k) s.firstElementChild.style.width = "0"; });
    const svg = svgEl();
    hinterlegeSchrift(svg);
    // Weniger Bewegung eingestellt (zum Beispiel in Windows): Bis man auf Abspielen drückt, zeigt die Szene ihr fertiges Bild
    buehne.classList.toggle("still", reduziert && !laeuft);
    if (reduziert && !laeuft) { svg.pauseAnimations(); svg.setCurrentTime(99); }
    else if (!laeuft) svg.pauseAnimations();
  }
  function tick(now) {
    if (!laeuft) return;
    const t = vorher + (now - start), dauer = szenen[i].dauer * 1000;
    segs[i].firstElementChild.style.width = `${Math.min(100, (t / dauer) * 100)}%`;
    if (t >= dauer) {
      if (i < n - 1) zeige(i + 1);
      else if (opt.schleife) zeige(0);
      else { fertig(); return; }
    }
    requestAnimationFrame(tick);
  }
  function abspielen() {
    if (laeuft) return;
    if (ende) zeige(0);
    laeuft = true;
    if (buehne.classList.contains("still")) zeige(i); // aus dem Standbild heraus beginnt die Szene von vorn, jetzt mit Bewegung
    start = performance.now();
    buehne.classList.remove("pause", "wartet");
    if (playBtn) { playBtn.classList.add("laeuft"); playBtn.setAttribute("aria-label", T("Pause")); }
    svgEl().unpauseAnimations();
    requestAnimationFrame(tick);
  }
  function anhalten() {
    if (!laeuft) return;
    laeuft = false; vorher += performance.now() - start;
    buehne.classList.add("pause");
    if (playBtn) { playBtn.classList.remove("laeuft"); playBtn.setAttribute("aria-label", T("Abspielen")); }
    svgEl().pauseAnimations();
  }
  function fertig() {
    laeuft = false; ende = true;
    segs[i].classList.add("fertig"); segs[i].firstElementChild.style.width = "100%";
    buehne.classList.add("ende");
    if (playBtn) { playBtn.classList.remove("laeuft"); playBtn.setAttribute("aria-label", T("Nochmal abspielen")); }
  }

  if (!opt.schlicht) {
    playBtn.addEventListener("click", () => { if (laeuft) { benutzerPause = true; anhalten(); } else { benutzerPause = false; abspielen(); } });
    ziel.querySelector(".v-overlay").addEventListener("click", e => { e.stopPropagation(); benutzerPause = false; abspielen(); });
    buehne.addEventListener("click", () => { if (laeuft) { benutzerPause = true; anhalten(); } else { benutzerPause = false; abspielen(); } });
    ziel.querySelector(".v-weiter").addEventListener("click", () => { const war = laeuft; zeige((i + 1) % n); if (war) { start = performance.now(); svgEl().unpauseAnimations(); } });
    segs.forEach((s, j) => s.addEventListener("click", () => { const war = laeuft; zeige(j); if (war) { start = performance.now(); svgEl().unpauseAnimations(); } }));
  }

  zeige(Math.min(opt.start || 0, n - 1));
  if (opt.vonSelbst !== false && "IntersectionObserver" in window && !reduziert) {
    // Von selbst erst nach 1,5 Sekunden im Bild, damit man vorher das Startbild sieht (ohne Abspielknopf darüber)
    let warten = 0;
    buehne.classList.add("wartet");
    new IntersectionObserver(eintraege => {
      sichtbar = eintraege[0].isIntersecting;
      clearTimeout(warten);
      buehne.classList.toggle("wartet", sichtbar && !benutzerPause && !ende && !laeuft);
      if (buehne.classList.contains("wartet")) {
        warten = setTimeout(() => { buehne.classList.remove("wartet"); if (sichtbar && !benutzerPause && !ende) abspielen(); }, 1500);
      }
      if (!sichtbar && laeuft) anhalten();
    }, { threshold: 0.45 }).observe(buehne);
  }
  return { abspielen: () => { benutzerPause = false; abspielen(); }, anhalten, szene: () => i };
}
window.baueVideo = baueVideo;

// ============================================================
// Saug- und Wischroboter (Wohnung mit drei Räumen in 3D-Ansicht)
// ============================================================
(function () {
  // Projektion: Bodenkoordinaten (0..220 × 0..150) -> Bildschirm
  const k = 0.6, cI = 0.866, sI = 0.5, ox = 86, oy = 40, H = 24;
  const P = (x, y) => [ox + k * cI * (x - y), oy + k * sI * (x + y)];
  const pts = arr => arr.map(p => p.map(v => v.toFixed(1)).join(",")).join(" ");
  const hoch = ([x, y], h) => [x, y - h];
  const MATRIX = `matrix(${(k * cI).toFixed(4)} ${(k * sI).toFixed(4)} ${(-k * cI).toFixed(4)} ${(k * sI).toFixed(4)} ${ox} ${oy})`;

  // Ein Kasten auf dem Boden (Möbel, Station, Wand): drei sichtbare Flächen
  const box = (x, y, w, d, h, oben, links, rechts) => {
    const A = P(x, y), B = P(x + w, y), C = P(x + w, y + d), D = P(x, y + d);
    return `<polygon points="${pts([D, C, hoch(C, h), hoch(D, h)])}" fill="${links}"/>
            <polygon points="${pts([B, C, hoch(C, h), hoch(B, h)])}" fill="${rechts}"/>
            <polygon points="${pts([hoch(A, h), hoch(B, h), hoch(C, h), hoch(D, h)])}" fill="${oben}"/>`;
  };
  const wand = (x, y, w, d) => box(x, y, w, d, 10, "#f3eee6", "#d6cdbd", "#e4dccd");

  // Grundriss: Küche links hinten, Schlafzimmer links vorn, Wohnzimmer rechts.
  // Die Innenwände stehen bei x = 80 und y = 70. In der Wand x = 80 sind zwei Türen mit Schwelle.
  const TUER = 80, TEPPICH = { x: 112, y: 40, b: 84, t: 66 };
  // Eine waagrechte Bahn, die über den Teppich führt
  const ueberTeppich = s => s.a[1] >= TEPPICH.y && s.a[1] <= TEPPICH.y + TEPPICH.t && Math.min(s.a[0], s.b[0]) < TEPPICH.x + TEPPICH.b && Math.max(s.a[0], s.b[0]) > TEPPICH.x;

  const ROBO = `<circle r="9" fill="#1c2326"/><circle cx="-2" cy="-2" r="9" fill="#0b4f41"/><circle cx="-4" cy="-4" r="9" class="robo"/><circle cx="-6" cy="-6" r="9" class="robo"/><circle cx="-6" cy="-6" r="9" fill="url(#v-glanz)"/><circle cx="-8" cy="-8" r="2.6" fill="#1c2326"/>`;
  const MOPPS = `<circle cx="2" cy="2" r="9.6" fill="#7cc8ff"/>`; // schauen vorn unter dem Roboter hervor
  const amPlatz = (x, y) => `<g transform="translate(${x} ${y})">${MOPPS}${ROBO}</g>`;
  const STATION = [24, 29];

  // Eine Fahrt: Punkte, Geschwindigkeit (Bodeneinheiten pro Sekunde) und Startzeit in der Szene
  const fahrt = (punkte, v, start) => {
    const ab = []; let d = 0;
    for (let i = 1; i < punkte.length; i++) {
      const a = punkte[i - 1], b = punkte[i], l = Math.hypot(b[0] - a[0], b[1] - a[1]);
      ab.push({ a, b, d0: d, l }); d += l;
    }
    return { punkte, ab, start, dauer: d / v, zeit: s => start + s / v };
  };
  // Wann der Roboter auf einem waagrechten Abschnitt bei x ist
  const bei = (f, s, x) => f.zeit(s.d0 + Math.abs(x - s.a[0]));
  const bahnen = f => f.ab.filter(s => s.a[1] === s.b[1] && s.l > 30 && (s.a[0] < TUER) === (s.b[0] < TUER));
  const schwellen = f => f.ab.filter(s => (s.a[0] < TUER) !== (s.b[0] < TUER)).map(s => bei(f, s, TUER));
  // Abschnitte auf dem Teppich: [rein, raus] als Zeiten
  const teppichZeiten = f => bahnen(f).filter(ueberTeppich).map(s => {
    const rechts = s.b[0] > s.a[0], x1 = TEPPICH.x, x2 = TEPPICH.x + TEPPICH.b;
    return rechts ? [bei(f, s, x1), bei(f, s, x2)] : [bei(f, s, x2), bei(f, s, x1)];
  });

  // Der fahrende Roboter: hüpft kurz über jede Türschwelle, auf dem Teppich sind die Mopps oben
  const fahrender = f => {
    const [x0, y0] = f.punkte[0];
    const rel = "M" + f.punkte.map(([x, y]) => `${x - x0} ${y - y0}`).join(" L");
    const wechsel = teppichZeiten(f).flat();
    const kt = [0, ...wechsel.map(t => (t - f.start) / f.dauer)];
    const mopps = wechsel.length
      ? `<g>${MOPPS}<animate attributeName="opacity" calcMode="discrete" values="${kt.map((_, i) => (i % 2 ? 0 : 1)).join(";")}" keyTimes="${kt.map(t => t.toFixed(4)).join(";")}" dur="${f.dauer.toFixed(2)}s" begin="${f.start}s" fill="freeze"/></g>`
      : MOPPS;
    const sp = schwellen(f);
    const huckel = sp.length ? `<animateTransform attributeName="transform" type="translate" values="0 0;-2.8 -2.8;0 0" dur=".4s" begin="${sp.map(t => (t - 0.2).toFixed(2) + "s").join(";")}"/>` : "";
    return `<g transform="translate(${x0} ${y0})"><g><g>${huckel}${mopps}${ROBO}</g><animateMotion dur="${f.dauer.toFixed(2)}s" begin="${f.start}s" fill="freeze" path="${rel}"/></g></g>`;
  };

  // Nasse Spur auf Holz und Fliesen, auf dem Teppich nur eine helle Saugspur
  const spuren = f => bahnen(f).map(s => {
    const y = s.a[1], rechts = s.b[0] > s.a[0], v = 1 / (f.zeit(1) - f.zeit(0));
    const lo = Math.min(s.a[0], s.b[0]) - 9, hi = Math.max(s.a[0], s.b[0]) + 9;
    const grenzen = ueberTeppich(s) ? [lo, TEPPICH.x, TEPPICH.x + TEPPICH.b, hi] : [lo, hi];
    let r = "";
    for (let i = 0; i < grenzen.length - 1; i++) {
      const p0 = grenzen[i], p1 = grenzen[i + 1], teppich = grenzen.length > 2 && i === 1;
      const ab = rechts ? p0 - 9 - s.a[0] : s.a[0] - (p1 + 9);
      const d = f.zeit(s.d0 + Math.max(0, ab));
      r += `<rect x="${p0}" y="${y - 11}" width="${p1 - p0}" height="${y + 11 > 150 ? 150 - y + 11 : 22}" class="${teppich ? "spur-teppich" : "spur"} v-spur ${rechts ? "" : "von-rechts"}" style="--d:${d.toFixed(2)}s;--len:${((p1 - p0) / v).toFixed(2)}s"/>`;
    }
    return r;
  }).join("");

  // Staub auf den Bahnen; mitZeit: verschwindet, wenn der Roboter vorbeikommt
  const staub = (f, mitZeit) => bahnen(f).map((s, r) => {
    let out = "";
    const lo = Math.min(s.a[0], s.b[0]), hi = Math.max(s.a[0], s.b[0]);
    for (let x = lo + 4, i = 0; x < hi; x += 17, i++) {
      const jx = ((r * 7 + i) * 37) % 9 - 4, jy = ((r * 7 + i) * 53) % 13 - 6;
      const d = mitZeit ? ` v-weg" style="--d:${bei(f, s, x + jx).toFixed(2)}s` : "";
      out += `<circle cx="${x + jx}" cy="${s.a[1] + jy}" r="${1.6 + (i % 3) * 0.6}" class="staub${d}"/>`;
    }
    return out;
  }).join("");

  const wohnung = (boden, davor = "") => {
    const A = P(0, 0), B = P(220, 0), D = P(0, 150), C = P(220, 150);
    const tuerL = P(190, 0), tuerR = P(214, 0);
    const linien = (n, f) => Array.from({ length: n }, (_, i) => f(i)).join("");
    return `
      <!-- Rückwände mit Wohnungstür -->
      <polygon points="${pts([A, D, hoch(D, H), hoch(A, H)])}" fill="url(#v-wand-dunkel)"/>
      <polygon points="${pts([A, tuerL, hoch(tuerL, H), hoch(A, H)])}" fill="url(#v-wand-hell)"/>
      <polygon points="${pts([tuerR, B, hoch(B, H), hoch(tuerR, H)])}" fill="url(#v-wand-hell)"/>
      <polygon points="${pts([tuerL, tuerR, hoch(tuerR, H - 4), hoch(tuerL, H - 4)])}" fill="#2b3338"/>
      <polygon points="${pts([hoch(tuerL, H - 4), hoch(tuerR, H - 4), hoch(tuerR, H), hoch(tuerL, H)])}" fill="url(#v-wand-hell)"/>
      <!-- Böden: Fliesen in der Küche, Holz im Wohn- und Schlafzimmer, Teppich, Türschwellen -->
      <g transform="${MATRIX}">
        <rect x="0" y="0" width="80" height="70" fill="#eef1f2"/>
        ${linien(7, i => `<line x1="${(i + 1) * 10}" x2="${(i + 1) * 10}" y1="0" y2="70" stroke="#cdd5d9" stroke-width=".6"/>`)}
        ${linien(6, i => `<line x1="0" x2="80" y1="${(i + 1) * 10}" y2="${(i + 1) * 10}" stroke="#cdd5d9" stroke-width=".6"/>`)}
        <rect x="80" y="0" width="140" height="150" fill="url(#v-holz)"/>
        ${linien(7, i => `<line x1="80" x2="220" y1="${(i + 1) * 20}" y2="${(i + 1) * 20}" stroke="#a88c66" stroke-width=".6" opacity=".5"/>`)}
        <rect x="0" y="70" width="80" height="80" fill="url(#v-holz)"/>
        ${linien(4, i => `<line x1="${(i + 1) * 16}" x2="${(i + 1) * 16}" y1="70" y2="150" stroke="#a88c66" stroke-width=".6" opacity=".5"/>`)}
        <rect x="0" y="0" width="220" height="150" fill="url(#v-boden-licht)"/>
        <rect x="${TEPPICH.x}" y="${TEPPICH.y}" width="${TEPPICH.b}" height="${TEPPICH.t}" rx="2" fill="#b9c7c0"/>
        <rect x="${TEPPICH.x + 4}" y="${TEPPICH.y + 4}" width="${TEPPICH.b - 8}" height="${TEPPICH.t - 8}" rx="1" fill="none" stroke="#fff" stroke-width="1" opacity=".5"/>
        <rect x="77" y="47" width="6" height="22" fill="#a08a6a"/><rect x="77" y="47" width="2" height="22" fill="#fff" opacity=".35"/>
        <rect x="77" y="104" width="6" height="24" fill="#a08a6a"/><rect x="77" y="104" width="2" height="24" fill="#fff" opacity=".35"/>
        ${boden}
      </g>
      <!-- Wände zwischen den Räumen und Möbel, von hinten nach vorn -->
      ${box(18, 2, 58, 12, 18, "#f4f6f7", "#cfd6da", "#e2e7ea")}
      ${box(2, 20, 12, 18, 14, "#f4f6f7", "#cfd6da", "#e2e7ea")}
      ${wand(79, 0, 3, 47)}
      ${box(84, 3, 10, 10, 8, "#b86d4a", "#8f4f33", "#a35b3c")}
      <g transform="translate(${P(89, 8)[0].toFixed(1)} ${(P(89, 8)[1] - 8).toFixed(1)})"><circle cx="-5" cy="-6" r="6" fill="url(#v-gruen-g)"/><circle cx="5" cy="-8" r="7" fill="url(#v-gruen-g)"/><circle cx="0" cy="-14" r="6" fill="url(#v-gruen-g)"/></g>
      ${box(118, 2, 66, 6, 20, "#8aa39d", "#5f7a74", "#738e88")}
      ${box(118, 8, 66, 9, 10, "#9db5ae", "#6b8680", "#7f9a93")}
      ${wand(0, 69, 79, 3)}
      ${wand(79, 69, 3, 35)}
      ${box(2, 72, 38, 40, 8, "#e6ddcc", "#c9bfae", "#d9cfbd")}
      ${box(4, 74, 34, 8, 13, "#ffffff", "#d9dfe3", "#e8ecef")}
      ${box(3, 83, 36, 28, 11, "#dfe8ef", "#b9c6cf", "#ccd7de")}
      ${wand(79, 128, 3, 22)}
      <!-- vordere Kanten -->
      <polygon points="${pts([D, C, [C[0], C[1] + 4], [D[0], D[1] + 4]])}" fill="#8e7a5c" opacity=".55"/>
      <polygon points="${pts([B, C, [C[0], C[1] + 4], [B[0], B[1] + 4]])}" fill="#a28d6c" opacity=".55"/>
      ${davor}`;
  };

  // Die Fahrten: erst die Küche, dann über die Schwelle ins Wohnzimmer (Szene 2), dann Wohn- und Schlafzimmer (Szene 3)
  // Küche in zwei Teilen: A ab der Station, sobald die Tür zu ist (Szene 0), B nahtlos weiter bis zur Schwelle (Szene 1).
  // ERLEDIGT_A zeichnet in Szene 1 die schon gefahrene Spur von A ohne Animation (Start weit in der Vergangenheit).
  const KUECHE_A = fahrt([STATION, [64, 29], [64, 44], [28, 44]], 60, 1.25);
  const ERLEDIGT_A = fahrt(KUECHE_A.punkte, 60, -20);
  const KUECHE = fahrt([[28, 44], [28, 58], [64, 58], [100, 58]], 60, 0);
  const REST = fahrt([[100, 58], [100, 32], [206, 32], [206, 54], [100, 54], [100, 76], [206, 76], [206, 98], [100, 98], [100, 120], [206, 120], [206, 140], [100, 140], [100, 116], [62, 116], [62, 92], [70, 92], [70, 142], [20, 142], [20, 128], [50, 128]], 115, 0.4);
  const tSchwelle = schwellen(KUECHE)[0], tTeppich = teppichZeiten(REST)[0][0];

  const tuer = P(202, 6);
  const schwelle = P(TUER, 58);
  // Kleiner grüner Hinweis mit Spitze nach unten
  const hinweis = (x, y, text, d, len) => {
    text = T(text); // die Blase wächst mit dem Text
    return `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)})"><g class="v-takt" style="--d:${d.toFixed(2)}s;--len:${len}s"><rect x="${-(text.length * 2.75 + 9)}" y="-9" width="${text.length * 5.5 + 18}" height="17" rx="8.5" class="blase-akzent" filter="url(#v-sch)"/><path d="M-4.5 7.5 L0 13 L4.5 7.5 Z" class="blase-akzent"/><text y="3.2" text-anchor="middle" class="t-mini hell">${text}</text></g></g>`;
  };
  const raumname = (x, y, name) => { const [sx, sy] = P(x, y); return `<text x="${sx.toFixed(1)}" y="${sy.toFixed(1)}" text-anchor="middle" class="raum">${name}</text>`; };

  // Seitenansicht: Roboter fährt vom Holz auf den Teppich und hebt die Mopps an
  const seitenansicht = t0 => `
    <g transform="translate(210 26)">
      <rect width="102" height="130" rx="10" class="blase" filter="url(#v-sch)"/>
      <g class="v-takt" style="--d:0s;--len:${(t0 - 0.3).toFixed(2)}s"><text x="51" y="26" text-anchor="middle" class="t-klein fett">Holz: wischen</text></g>
      <g class="v-pop" style="--d:${(t0 - 0.3).toFixed(2)}s"><text x="51" y="24" text-anchor="middle" class="t-mittel fett">Teppich</text><text x="51" y="39" text-anchor="middle" class="t-mittel fett">erkannt</text></g>
      <rect x="6" y="86" width="44" height="7" fill="url(#v-holz)"/>
      <rect x="6" y="84.6" width="44" height="1.6" fill="#7cc8ff" opacity=".8"/>
      <rect x="48" y="80" width="48" height="13" rx="2" fill="#b9c7c0"/>
      ${Array.from({ length: 11 }, (_, i) => `<line x1="${51 + i * 4}" x2="${51 + i * 4}" y1="80.5" y2="84" stroke="#fff" stroke-width="1" opacity=".45"/>`).join("")}
      <g class="v-geh" style="--dx:44px;--dy:0px;--d:${(t0 - 0.2).toFixed(2)}s;--len:1.1s">
        <g class="v-geh" style="--dx:0px;--dy:-6px;--d:${(t0 + 0.05).toFixed(2)}s;--len:.3s">
          <g class="v-geh" style="--dx:0px;--dy:-4px;--d:${(t0 - 0.35).toFixed(2)}s;--len:.3s">
            <rect x="9" y="82" width="11" height="4" rx="1.5" fill="#7cc8ff"/><rect x="26" y="82" width="11" height="4" rx="1.5" fill="#7cc8ff"/>
          </g>
          <rect x="4" y="71" width="38" height="12" rx="5" class="robo"/>
          <rect x="4" y="71" width="38" height="6" rx="3" fill="url(#v-glanz)"/>
          <rect x="24" y="67" width="10" height="4" rx="1.5" fill="#1c2326"/>
          <circle cx="11" cy="83.5" r="2.5" fill="#1c2326"/><circle cx="35" cy="83.5" r="2.5" fill="#1c2326"/>
          <g class="v-takt" style="--d:${(t0 - 0.3).toFixed(2)}s;--len:1.6s">
            <path d="M14.5 96 V90 M12 92.5 L14.5 90 L17 92.5" class="pfeil" style="stroke-width:1.6"/>
            <path d="M31.5 96 V90 M29 92.5 L31.5 90 L34 92.5" class="pfeil" style="stroke-width:1.6"/>
          </g>
        </g>
      </g>
      <g class="v-hoch" style="--d:${(t0 + 0.5).toFixed(2)}s"><text x="51" y="112" text-anchor="middle" class="t-klein fett">Mopps hoch,</text><text x="51" y="125" text-anchor="middle" class="t-klein leise">nur saugen</text></g>
    </g>`;

  VIDEOS.saugroboter = { szenen: [
    {
      dauer: 4.5, titel: "8:30 Uhr: Du gehst zur Arbeit",
      text: "Kaum ist die Tür zu, legt er los.",
      svg: wohnung(spuren(KUECHE_A) + staub(KUECHE_A, true) + staub(KUECHE) + staub(REST) + fahrender(KUECHE_A),
        `<g class="schrift-dunkel v-ein" style="--d:.15s">${raumname(70, 66, "Küche")}${raumname(50, 128, "Schlafen")}${raumname(160, 146, "Wohnen")}</g>`) +
        `<g class="v-geh" style="--dx:21px;--dy:-12px;--d:.1s;--len:1.2s"><g class="v-weg" style="--d:1.05s">${figur(tuer[0], tuer[1] - 8)}</g></g>
         ${blase(tuer[0], tuer[1] - 58, "Bis später!", 0.1, 1.3)}
         ${uhr(272, 40, "8:30", 255, 180)}
         <text x="272" y="110" text-anchor="middle" class="t-mittel fett v-hoch" style="--d:1.1s">Tür zu.</text>
         <text x="272" y="126" text-anchor="middle" class="t-klein leise v-hoch" style="--d:1.2s">Ab ins Büro.</text>`
    },
    {
      dauer: 5, titel: "8:30 Uhr: Er startet selbstständig",
      text: "Dein Zeitplan in der App sagt: jetzt. Er saugt und wischt Raum für Raum und fährt einfach über leichte Türschwellen.",
      svg: wohnung(spuren(ERLEDIGT_A) + spuren(KUECHE) + staub(KUECHE, true) + staub(REST) + fahrender(KUECHE)) +
        `${uhr(272, 30, "8:30", 255, 180)}
         <g transform="translate(226 70)">
           <rect width="88" height="104" rx="10" fill="url(#v-dunkel)" filter="url(#v-sch)"/><rect x="5" y="8" width="78" height="88" rx="6" class="screen"/>
           <rect x="5" y="8" width="78" height="32" rx="6" fill="url(#v-glanz)" opacity=".5"/>
           <text x="44" y="25" text-anchor="middle" class="t-klein fett">Zeitplan</text>
           <text x="44" y="38.5" text-anchor="middle" class="t-mini leise" style="font-size:8.6px">Mo–Fr, 8:30 Uhr</text>
           <text x="44" y="50" text-anchor="middle" class="t-mini leise" style="font-size:8.6px">Saugen + Wischen</text>
           <rect x="31" y="59" width="26" height="14" rx="7" class="schalter v-faerb" style="--d:.1s"/>
           <circle cx="50" cy="66" r="5" class="knopf v-knopf" style="--d:.1s"/>
           <g transform="translate(44 86)"><g class="v-pop" style="--d:.3s"><rect x="-38" y="-8" width="76" height="16" rx="8" class="blase-akzent"/><text y="3" text-anchor="middle" class="t-mini hell">Startet jetzt</text></g></g>
         </g>
         ${hinweis(schwelle[0], schwelle[1] - 27, "Schwelle? Kein Problem", tSchwelle - 0.3, 2.6)}`
    },
    {
      dauer: 10, titel: "Teppich erkannt: Er saugt nur",
      text: "Auf dem Teppich hebt er die Wischmopps oder die Walze an und saugt nur. Holz und Fliesen wischt er feucht.",
      svg: wohnung(spuren(REST) + staub(REST, true) + fahrender(REST)) + seitenansicht(tTeppich)
    },
    {
      dauer: 7, titel: "Die Station macht den Rest",
      text: "Staub abgesaugt, Mopps gewaschen und getrocknet. Du musst nichts auswringen und keinen Staubbehälter leeren.",
      svg: `<ellipse cx="92" cy="166" rx="60" ry="8" fill="#000" opacity=".12" filter="url(#v-blur)"/>
         <polygon points="130,50 152,36 152,138 130,152" fill="#cfd6da"/>
         <polygon points="50,50 130,50 152,36 72,36" fill="#f6f8f9"/>
         <rect x="50" y="50" width="80" height="102" fill="url(#v-metall)"/>
         <rect x="50" y="50" width="80" height="102" fill="url(#v-glanz)" opacity=".4"/>
         <rect x="58" y="58" width="64" height="48" rx="5" fill="#1c2326" opacity=".85"/>
         <rect x="62" y="62" width="26" height="40" rx="3" fill="#2b3338"/><rect x="62" y="74" width="26" height="28" rx="3" fill="url(#v-blau-g)" opacity=".85"><animate attributeName="y" values="74;72;74" dur="2s" repeatCount="indefinite"/></rect><rect x="62" y="62" width="26" height="40" rx="3" fill="url(#v-glas)"/>
         <rect x="92" y="62" width="26" height="40" rx="3" fill="#2b3338"/><rect x="92" y="86" width="26" height="16" rx="3" fill="#6f6a5a"/><rect x="92" y="62" width="26" height="40" rx="3" fill="url(#v-glas)"/>
         <text x="75" y="114" text-anchor="middle" class="t-mini" style="font-size:7px;fill:#4a555a">Frisch</text><text x="105" y="114" text-anchor="middle" class="t-mini" style="font-size:7px;fill:#4a555a">Schmutz</text>
         <rect x="60" y="120" width="60" height="24" rx="5" fill="#dfe5e8"/><rect x="60" y="120" width="60" height="24" rx="5" fill="url(#v-abdunkeln)" opacity=".4"/><text x="90" y="135" text-anchor="middle" class="t-mini" style="fill:#4a555a;font-size:8.5px">Staubbeutel</text>
         ${[0, 1, 2, 3, 4, 5].map(i => partikel("M92 150 C92 138 100 136 104 122", 1.3, (i * 0.22).toFixed(2), 1.8, "staub"))}
         <ellipse cx="92" cy="160" rx="26" ry="9" fill="#1c2326"/><ellipse cx="92" cy="156" rx="26" ry="9" fill="#0b4f41"/><ellipse cx="92" cy="152" rx="26" ry="9" class="robo"/><ellipse cx="92" cy="152" rx="26" ry="9" fill="url(#v-glanz)"/><circle cx="92" cy="150" r="3" fill="#1c2326"/>
         ${zeile(170, 62, "Staub abgesaugt", 0.8)}
         ${zeile(170, 94, "Mopps gewaschen", 2)}
         ${zeile(170, 126, "Mopps getrocknet", 3.2)}
         <text x="126" y="166" class="t-mini leise v-hoch" style="--d:4s">Beutel alle paar Wochen wechseln.</text>`
    },
    {
      dauer: 6, titel: "17:30 Uhr: Alles sauber",
      text: "Jeden Tag, in allen Räumen, ohne dass du daran denkst. Deine Putzzeit: null Minuten.",
      svg: wohnung(amPlatz(...STATION)) +
        `${[[62, 58, 0, 1.2], [150, 70, 0.5, 1.4], [190, 122, 1, 1.2], [58, 120, 0.3, 1.1], [130, 128, 0.8, 1.4], [176, 40, 1.3, 1]].map(([x, y, d, s]) => funkel(P(x, y)[0], P(x, y)[1] - 6, d, s)).join("")}
         <g class="v-geh" style="--dx:-21px;--dy:12px;--d:.4s;--len:2.2s"><g class="v-ein" style="--d:.3s">${figur(tuer[0] + 21, tuer[1] - 20)}</g></g>
         ${uhr(272, 40, "17:30", 165, 180)}
         <g transform="translate(272 112)"><g class="v-pop" style="--d:2.8s"><text text-anchor="middle" class="t-gross">0 Min.</text><text y="16" text-anchor="middle" class="t-klein leise">Putzzeit für dich</text></g></g>`
    }
  ] };
})();

// ============================================================
// Airfryer
// ============================================================
(function () {
  const spirale = "M96 56 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8";
  const bahnL = "M150 92 C110 94 92 118 98 146 C104 152 120 150 132 140 C146 128 150 110 150 92";
  const bahnR = "M170 92 C210 94 228 118 222 146 C216 152 200 150 188 140 C174 128 170 110 170 92";
  const pommes = [0, 1, 2, 3, 4, 5].map(i => {
    const x = 106 + i * 20, rot = `rotate(${i % 2 ? -8 : 8} ${x + 4} 114)`;
    return `<rect x="${x}" y="96" width="9" height="36" rx="3" fill="url(#v-gold-g)" transform="${rot}"/>
            <rect x="${x}" y="96" width="9" height="36" rx="3" fill="url(#v-blass-g)" class="v-weg" style="--d:${(2 + i * 0.35).toFixed(2)}s" transform="${rot}"/>
            <rect x="${x + 1.5}" y="98" width="2.5" height="30" rx="1.2" fill="#fff" opacity=".35" transform="${rot}"/>`;
  }).join("");

  // Zwei-Korb-Airfryer von vorn: Anzeige, Sync-Knopf, zwei Schubladen mit Sichtfenster
  const anzeige = (x, temp, zeit) => `
    <rect x="${x - 22}" y="40" width="44" height="18" rx="3" fill="#151b1d"/>
    <text x="${x}" y="49.5" text-anchor="middle" style="fill:#ff9a3a;font-size:9px;font-family:monospace;font-weight:700">${temp}</text>
    <text x="${x}" y="56.8" text-anchor="middle" style="fill:#ff9a3a;font-size:7px;font-family:monospace;font-weight:700;opacity:.9">${zeit}</text>`;
  const schublade = (x, inhalt, start, len) => `
    <g transform="translate(${x} 70)">
      <rect width="68" height="84" rx="9" fill="#2b3338"/>
      <rect width="68" height="84" rx="9" fill="url(#v-glanz)" opacity=".2"/>
      <rect x="7" y="8" width="54" height="38" rx="5" fill="#111a1c"/>
      <rect x="7" y="8" width="54" height="38" rx="5" fill="url(#v-glut-r)" class="v-glut" style="--d:${start}s"/>
      ${inhalt}
      <rect x="7" y="8" width="54" height="38" rx="5" fill="url(#v-glas)"/>
      <rect x="7" y="52" width="54" height="4" rx="2" fill="#11181a"/>
      <rect x="7" y="52" width="54" height="4" rx="2" fill="#ff9a3a" class="v-spur" style="--d:${start}s;--len:${len}s"/>
      <rect x="12" y="64" width="44" height="10" rx="5" fill="#151b1d"/>
      <rect x="12" y="64" width="44" height="4" rx="2" fill="#fff" opacity=".12"/>
    </g>`;
  // Hähnchenkeule; roh = true: erst hell, dann wird sie im Video braun
  const keule = (x, y, r, roh = true, s = 1) => `
    <g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">
      <rect x="7" y="-1.6" width="9" height="3.2" rx="1.6" fill="#efe6d6"/>
      <circle cx="16.5" cy="-2" r="2.1" fill="#efe6d6"/><circle cx="16.5" cy="2" r="2.1" fill="#efe6d6"/>
      <ellipse rx="10" ry="6.5" fill="url(#v-braun-g)"/>
      ${roh ? `<ellipse rx="10" ry="6.5" fill="#f2c4b0" class="v-weg" style="--d:2.2s;animation-duration:2.6s"/>` : ""}
      <ellipse cx="-2" cy="-2.5" rx="5" ry="2" fill="#fff" opacity=".3"/>
    </g>`;
  // Große, fertige Keule für den Teller
  const keuleGross = (x, y, r, s = 1) => `
    <g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">
      <rect x="11" y="-1.9" width="10" height="3.8" rx="1.9" fill="#f1e7d4" stroke="#cdbb98" stroke-width=".6"/>
      <circle cx="21.5" cy="-2.3" r="2.5" fill="#f1e7d4" stroke="#cdbb98" stroke-width=".6"/><circle cx="21.5" cy="2.3" r="2.5" fill="#f1e7d4" stroke="#cdbb98" stroke-width=".6"/>
      <path d="M-12 0 C-12 -9 1 -10.5 8 -4.2 L13 -2 V2 L8 4.2 C1 10.5 -12 9 -12 0 Z" fill="url(#v-braun-g)"/>
      <g fill="#7a3f12" opacity=".35"><circle cx="-6" cy="2.5" r="1.1"/><circle cx="-1" cy="4.6" r=".9"/><circle cx="3" cy="1.8" r="1"/><circle cx="-8" cy="-2.2" r=".8"/></g>
      <path d="M-9 -3.2 C-6 -7 0 -7.4 4 -4.6" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".35"/>
    </g>`;
  // Hähnchenstück für die Pfanne: wird während der Szene braun
  const STUECK = "M-7.4 -2.4 Q-6.6 -4.8 -1.4 -4.4 Q4.6 -5.2 7.2 -2.4 Q8.4 1.2 6 3.6 Q1 5.2 -4 4.4 Q-8.4 3 -7.4 -2.4 Z";
  const stueck = (x, y, r) => `
    <g transform="translate(${x} ${y}) rotate(${r})">
      <path d="${STUECK}" fill="url(#v-braun-g)"/>
      <path d="${STUECK}" fill="#f2c4b0" class="v-weg" style="--d:1.6s;animation-duration:2.4s"/>
      <ellipse cx="-2" cy="-1.8" rx="3.4" ry="1.2" fill="#fff" opacity=".3"/>
    </g>`;
  // Gemüse. roest: ohne Angabe keine Röstspuren, 0 = gleich geröstet, sonst erscheinen sie nach so vielen Sekunden
  const roestspur = (roest, inhalt) => roest === undefined ? "" :
    `<g${roest ? ` class="v-ein" style="--d:${roest}s;animation-duration:1.4s"` : ""}>${inhalt}</g>`;
  const roeschen = (x, y, s, roest) => `
    <g transform="translate(${x} ${y}) scale(${s})">
      <path d="M-1.8 1 L-1.3 7 H1.3 L1.8 1 Z" fill="#a9cf8c"/>
      <circle cx="-3.6" cy="-.6" r="3.6" fill="url(#v-gruen-g)"/><circle cx="3.6" cy="-.6" r="3.6" fill="url(#v-gruen-g)"/><circle cy="-3.8" r="4.3" fill="url(#v-gruen-g)"/>
      ${roestspur(roest, `<g fill="#2b4220" opacity=".5"><circle cx="-4.6" cy="-1.8" r="1.1"/><circle cx="1.4" cy="-6.6" r="1.2"/><circle cx="5" cy="-1" r="1"/></g>`)}
      <circle cx="-1.4" cy="-5.2" r="1.4" fill="#fff" opacity=".35"/>
    </g>`;
  const streifen = (x, y, r, farbe, roest, s = 1) => `
    <g transform="translate(${x} ${y}) rotate(${r}) scale(${s})">
      <path d="M-7.5 .5 Q0 -6 7.5 .5 Q7.8 2.6 6 2.4 Q0 -2 -6 2.4 Q-7.8 2.6 -7.5 .5 Z" fill="url(#${farbe})"/>
      <path d="M-5 -1.2 Q0 -4.4 5 -1.2" fill="none" stroke="#fff" stroke-width=".9" stroke-linecap="round" opacity=".45"/>
      ${roestspur(roest, `<path d="M-3.2 -2 L-2.2 .8 M2 -2.2 L3 .6" stroke="#4a1d10" stroke-width=".9" stroke-linecap="round" opacity=".5"/>`)}
    </g>`;
  // Brokkoli und Paprika im zweiten Korb, sie bekommen gegen Ende Röstspuren
  const gemuese = `${roeschen(20, 30, .8, 4.2)}${roeschen(38, 25, .85, 4.4)}${roeschen(52, 32, .7, 4.6)}
    ${streifen(28, 38, 8, "v-rot-g", 4.3)}${streifen(46, 40, -10, "v-gold-g", 4.5)}${streifen(15, 41, 14, "v-orange-g", 4.4)}`;
  // Liegende Figur auf dem Sofa, mit Handy in der Hand
  const liegend = `
    <circle cx="216" cy="112" r="6.5" class="figur"/>
    <line x1="221" y1="119" x2="246" y2="128" class="figur-strich dick"/>
    <line x1="246" y1="128" x2="299" y2="120" class="figur-strich"/>
    <line x1="228" y1="121" x2="238" y2="109" class="figur-strich" style="stroke-width:4.5"/>
    <rect x="234.5" y="96.5" width="8" height="13" rx="1.6" class="phone"/>
    <rect x="235.7" y="98" width="5.6" height="9.8" rx=".8" class="screen"/>
    <rect x="235.7" y="98" width="5.6" height="9.8" rx=".8" class="blase-akzent v-ein" style="--d:5.6s"/>`;

  VIDEOS.airfryer = { szenen: [
    {
      dauer: 7, vorher: true, titel: "Bisher: Am Herd mit der Pfanne",
      text: "Danebenstehen, wenden, rühren. Das Fett spritzt auf Herd und Fliesen, und danach schrubbst du Pfanne und Herd.",
      svg: `<ellipse cx="124" cy="163" rx="114" ry="5" fill="#000" opacity=".14" filter="url(#v-blur)"/>
        <rect x="14" y="128" width="216" height="32" rx="3" fill="url(#v-wand-dunkel)"/>
        <line x1="122" y1="132" x2="122" y2="157" stroke="#000" stroke-opacity=".12"/>
        <rect x="108" y="136" width="9" height="2.6" rx="1.3" fill="#8a949a"/><rect x="127" y="136" width="9" height="2.6" rx="1.3" fill="#8a949a"/>
        <rect x="10" y="114" width="224" height="14" rx="3" fill="url(#v-keramik)"/>
        <rect x="10" y="125" width="224" height="4" rx="2" fill="#000" opacity=".08"/>
        ${[[30, 118], [44, 122], [206, 117], [218, 121], [196, 123], [54, 117]].map(([x, y], i) =>
          `<ellipse cx="${x}" cy="${y}" rx="${2.2 + (i % 2) * 0.8}" ry="1.1" fill="#c98a12" opacity=".55" class="v-ein" style="--d:${(1.4 + i * 0.35).toFixed(2)}s"/>`).join("")}
        <rect x="64" y="115.5" width="136" height="9" rx="2.5" fill="#1c2326"/>
        <rect x="64" y="115.5" width="136" height="4" rx="2" fill="#fff" opacity=".08"/>
        <ellipse cx="132" cy="120" rx="36" ry="3.4" fill="none" stroke="#ff7a1a" stroke-width="3" filter="url(#v-blur)" class="v-glut" style="--d:.2s"/>
        <ellipse cx="132" cy="120" rx="36" ry="3.4" fill="none" stroke="#ff9a3a" stroke-width="1.4" class="v-glut" style="--d:.2s"/>
        <path d="M88 105 L34 97 Q29 97 29 100.5 Q29 104 34 104 L88 110 Z" fill="url(#v-dunkel)"/>
        <path d="M86 106 L36 99" stroke="#fff" stroke-opacity=".22" stroke-width="1.2"/>
        <path d="M86 105 L92 117 Q132 122 172 117 L178 105 Z" fill="url(#v-dunkel)"/>
        <ellipse cx="132" cy="105" rx="46" ry="10.5" fill="#2b3338"/>
        <ellipse cx="132" cy="105.6" rx="42" ry="8.6" fill="#3b4448"/>
        <ellipse cx="126" cy="106" rx="32" ry="5.6" fill="#e8bd4f" opacity=".22"/>
        ${stueck(110, 103, -8)}${stueck(142, 108, 10)}${stueck(124, 110, 4)}
        ${roeschen(100, 107, .9)}${roeschen(150, 102, .85)}
        ${streifen(128, 101, -12, "v-rot-g")}${streifen(158, 108, 18, "v-gold-g")}${streifen(96, 112, 8, "v-orange-g")}
        ${[[104, 98, -16, -22], [122, 96, -5, -28], [142, 96, 7, -27], [162, 99, 18, -20], [112, 99, -26, -12], [156, 98, 26, -10], [96, 101, -30, -4], [170, 102, 30, -4]].map(([x, y, dx, dy], i) =>
          `<g transform="translate(${x} ${y})"><ellipse rx="2" ry="2.8" fill="#d99a1e" class="v-spritz" style="--dx:${dx}px;--dy:${dy}px;--d:${(0.8 + i * 0.19).toFixed(2)}s"/></g>`).join("")}
        ${[0, 1, 2].map(i => `<g transform="translate(${114 + i * 18} 92)"><ellipse rx="5" ry="3" class="dampf ueber-hell v-dampf" style="--d:${(0.6 + i * 0.5).toFixed(1)}s" filter="url(#v-blur)"/></g>`).join("")}
        <g transform="translate(240 120)"><g class="v-wackel" style="transform-origin:100% 50%">
          <line x1="0" y1="0" x2="-58" y2="-11" stroke="#4a555a" stroke-width="3" stroke-linecap="round"/>
          <path d="M-56 -14 L-80 -18 L-82 -8 L-58 -6 Z" fill="url(#v-metall)" filter="url(#v-sch)"/>
        </g></g>
        <g transform="translate(250 139) scale(1.5)">${figur(0, 0)}</g>
        ${blase(218, 72, "…", 1, 3)}
        <g transform="translate(62 44)"><circle r="24" class="ring-bg"/><circle r="24" pathLength="1" class="ring v-zeichne" style="--d:.2s;--len:4.2s" transform="rotate(-90)"/>
          <text y="4" text-anchor="middle" class="t-mittel fett">15 Min</text><text y="37" text-anchor="middle" class="t-mini leise">danebenstehen</text></g>
        <text x="124" y="169" text-anchor="middle" class="t-klein leise v-hoch" style="--d:2.6s">Danach: Pfanne und Herd schrubben.</text>`
    },
    {
      dauer: 9, titel: "Alles rein, Sync drücken, ab auf die Couch",
      text: "Jeder Korb hat eigene Temperatur und Zeit. Sync lässt den zweiten Korb später starten, damit Hähnchen und Gemüse gleichzeitig fertig sind. Mit App kommt die Nachricht aufs Handy.",
      svg: `<ellipse cx="100" cy="164" rx="84" ry="6" fill="#000" opacity=".16" filter="url(#v-blur)"/>
        <rect x="22" y="30" width="156" height="129" rx="14" fill="url(#v-dunkel)"/>
        <rect x="22" y="30" width="156" height="129" rx="14" fill="url(#v-glanz)" opacity=".18"/>
        <rect x="30" y="36" width="140" height="26" rx="8" fill="#0b0f10"/>
        ${anzeige(58, "200°", "25 MIN")}${anzeige(142, "190°", "12 MIN")}
        <g transform="translate(100 49)">
          <circle r="10" fill="#2b3338" stroke="#5a6468" stroke-width="1"/>
          <circle r="10" class="blase-akzent v-ein" style="--d:1s"/>
          <text y="2.4" text-anchor="middle" style="fill:#f3f7f5;font-size:6.2px;font-weight:800">SYNC</text>
          <g class="v-tipp" style="--d:.8s"><circle r="12" class="tipp"/></g>
        </g>
        ${schublade(28, `<g class="v-pop" style="--d:.15s">${keule(20, 20, -12)}${keule(26, 36, 10)}</g>`, 1.2, 3.8)}
        ${schublade(104, `<g class="v-pop" style="--d:.35s">${gemuese}</g>
          <g class="v-ein" style="--d:1.1s"><g class="v-weg" style="--d:2.6s"><rect x="14" y="21" width="40" height="13" rx="6.5" fill="#0b0f10" opacity=".85"/><text x="34" y="30" text-anchor="middle" class="t-mini" style="fill:#e8efec">wartet …</text></g></g>`, 2.72, 2.28)}
        ${haken(89, 78, 5.05)}${haken(165, 78, 5.15)}
        <text x="62" y="169" text-anchor="middle" class="t-mini leise">Hähnchen</text>
        <text x="138" y="169" text-anchor="middle" class="t-mini leise">Gemüse</text>
        ${blase(100, 17, "Alles rein", 0.05, 0.85)}${blase(100, 17, "Sync drücken", 0.85, 1.3)}
        <g transform="translate(100 17)"><g class="v-pop" style="--d:5.2s"><rect x="-58" y="-9" width="116" height="18" rx="9" class="blase-akzent" filter="url(#v-sch)"/><text y="3.5" text-anchor="middle" class="t-klein hell">Piep! Beides fertig</text></g></g>
        <ellipse cx="256" cy="160" rx="62" ry="5" fill="#000" opacity=".14" filter="url(#v-blur)"/>
        <rect x="204" y="150" width="5" height="8" rx="1.5" fill="#3a2616"/><rect x="303" y="150" width="5" height="8" rx="1.5" fill="#3a2616"/>
        <rect x="206" y="104" width="100" height="30" rx="9" fill="url(#v-leder)"/>
        <rect x="206" y="104" width="100" height="12" rx="6" fill="#fff" opacity=".12"/>
        <rect x="200" y="128" width="112" height="22" rx="7" fill="#6e482c"/>
        <rect x="200" y="128" width="112" height="8" rx="4" fill="#fff" opacity=".1"/>
        <rect x="196" y="116" width="16" height="36" rx="7" fill="url(#v-leder)"/>
        <rect x="300" y="116" width="16" height="36" rx="7" fill="url(#v-leder)"/>
        <g class="v-geh" style="--dx:30px;--d:1.3s;--len:.7s"><g class="v-weg" style="--d:1.9s">${figur(190, 150)}</g></g>
        <g class="v-ein" style="--d:1.9s">${liegend}</g>
        ${blase(256, 84, "Ab auf die Couch", 2, 2.2)}
        <g transform="translate(246 80)"><g class="v-pop" style="--d:5.6s">
          <rect x="-66" y="-15" width="138" height="30" rx="7" class="blase" filter="url(#v-sch)"/>
          <rect x="-60" y="-8" width="16" height="16" rx="4" class="blase-akzent"/>
          <path d="M-56 0.5 l3 3 l6 -7" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--accent-ink)"/>
          <text x="-38" y="-3" class="t-mini fett">Airfryer · jetzt</text>
          <text x="-38" y="9" class="t-mini">Dein Essen ist fertig</text>
        </g></g>`
    },
    {
      dauer: 8, titel: "Heiße Luft, kaum Vorheizen",
      text: "Oben heizt ein Element, ein Ventilator wirbelt die heiße Luft um das Essen. So wird es in Minuten knusprig.",
      svg: `<ellipse cx="160" cy="170" rx="92" ry="7" fill="#000" opacity=".15" filter="url(#v-blur)"/>
        <rect x="70" y="30" width="180" height="136" rx="16" fill="url(#v-metall)"/>
        <rect x="70" y="30" width="180" height="136" rx="16" fill="url(#v-glanz)" opacity=".35"/>
        <rect x="84" y="42" width="152" height="112" rx="10" fill="#242c2f"/>
        <rect x="84" y="42" width="152" height="112" rx="10" fill="url(#v-abdunkeln)"/>
        <path d="${spirale}" stroke="#ff8a2a" stroke-width="7" fill="none" stroke-linejoin="round" filter="url(#v-blur)" class="v-gluehen-weich" style="--d:.4s"/>
        <path d="${spirale}" class="spirale v-gluehen" style="--d:.4s"/>
        <g transform="translate(160 78)"><circle r="15" fill="#9aa5aa" opacity=".3" filter="url(#v-blur)"/><g class="v-dreh schnell"><ellipse rx="4" ry="13" fill="url(#v-metall)"/><ellipse rx="4" ry="13" fill="url(#v-metall)" transform="rotate(120)"/><ellipse rx="4" ry="13" fill="url(#v-metall)" transform="rotate(240)"/></g><circle r="3" fill="#1c2326"/></g>
        ${[0, 1, 2, 3, 4, 5].map(i => partikel(bahnL, 2.2, (i * 0.37).toFixed(2), 2, "luftpartikel") + partikel(bahnR, 2.2, (i * 0.37 + 0.18).toFixed(2), 2, "luftpartikel")).join("")}
        <rect x="96" y="110" width="128" height="36" rx="6" fill="#3b4448"/>
        <rect x="96" y="110" width="128" height="36" rx="6" fill="url(#v-glanz)" opacity=".25"/>
        ${pommes}
        <rect x="96" y="110" width="128" height="36" rx="6" fill="none" stroke="#5a6468" stroke-width="2"/>
        ${[0, 1, 2].map(i => `<g transform="translate(${120 + i * 40} 104)"><ellipse rx="5" ry="3" class="dampf v-dampf" style="--d:${(2.8 + i * 0.6).toFixed(1)}s" filter="url(#v-blur)"/></g>`).join("")}
        <g transform="translate(160 20)"><g class="v-pop" style="--d:.6s">${(b => `<rect x="${-b / 2}" y="-10" width="${b}" height="18" rx="9" class="blase-akzent" filter="url(#v-sch)"/>`)(Math.max(92, Math.round(T("Kaum Vorheizen").length * 5.6 + 12)))}<text y="3" text-anchor="middle" class="t-klein hell">Kaum Vorheizen</text></g></g>
        <g transform="translate(160 162)"><g class="v-pop" style="--d:4.8s"><rect x="-76" y="-11" width="152" height="20" rx="10" class="blase-akzent" filter="url(#v-sch)"/><text y="3" text-anchor="middle" class="t-klein hell">Knusprig nach 12 Minuten</text></g></g>`
    },
    {
      dauer: 7, titel: "Und es schmeckt besser",
      text: "Gemüse wird knackiger und schmeckt intensiver, Hähnchen wird jedes Mal perfekt zart.",
      svg: `<ellipse cx="96" cy="144" rx="86" ry="6" fill="#000" opacity=".16" filter="url(#v-blur)"/>
        <g class="v-pop" style="--d:.1s">
          <ellipse cx="96" cy="104" rx="84" ry="36" fill="url(#v-keramik)" filter="url(#v-sch-weich)"/>
          <ellipse cx="96" cy="102.5" rx="82" ry="34.5" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.5"/>
          <ellipse cx="96" cy="105.5" rx="65" ry="26" fill="#f6f8f9"/>
          <ellipse cx="96" cy="105.5" rx="65" ry="26" fill="none" stroke="#000" stroke-opacity=".07" stroke-width="2"/>
          ${keuleGross(52, 96, -12, 1.45)}${keuleGross(58, 115, 14, 1.45)}
          ${streifen(104, 117, 32, "v-gold-g", 0, 1.6)}${roeschen(112, 96, 1.7, 0)}${roeschen(140, 102, 1.6, 0)}${roeschen(124, 118, 1.5, 0)}
          ${streifen(152, 118, -24, "v-rot-g", 0, 1.6)}${streifen(152, 90, 12, "v-orange-g", 0, 1.6)}
        </g>
        ${[0, 1, 2].map(i => `<g transform="translate(${46 + i * 14} 82)"><ellipse rx="5" ry="3" class="dampf ueber-hell v-dampf" style="--d:${(0.5 + i * 0.45).toFixed(2)}s" filter="url(#v-blur)"/></g>`).join("")}
        ${funkel(130, 84, 1.3)}${funkel(160, 106, 1.7, .8)}${funkel(44, 92, 3.1, .8)}
        <g transform="translate(132 66)"><g class="v-takt" style="--d:1.2s;--len:1.3s">
          <path d="M-14 4 L-9 2 M-12 -6 L-7 -3 M-3 -12 L-1 -7" style="stroke:var(--v-warm)" stroke-width="2" stroke-linecap="round"/>
          <text x="2" y="-2" class="t-klein fett" style="fill:var(--v-warm)">knack!</text>
        </g></g>
        ${zeile(188, 76, "Gemüse knackig", 0.8, "t-mittel fett")}
        ${zeile(188, 102, "Mehr Geschmack", 1.8, "t-mittel fett")}
        ${zeile(188, 128, "Hähnchen zart", 2.8, "t-mittel fett")}
        <g transform="translate(160 162)"><g class="v-pop" style="--d:4s"><rect x="-82" y="-10" width="164" height="19" rx="9.5" class="blase-akzent" filter="url(#v-sch)"/><text y="3.5" text-anchor="middle" class="t-klein hell">Besser als aus der Pfanne</text></g></g>`
    },
    {
      dauer: 6, titel: "Fast ohne Öl",
      text: "Ein Esslöffel reicht. Eine Fritteuse braucht zwei bis drei Liter, die du irgendwann entsorgen musst.",
      svg: `<text x="160" y="26" text-anchor="middle" class="t-mittel fett v-hoch" style="--d:.3s">So viel Öl brauchst du</text>
        <ellipse cx="95" cy="156" rx="40" ry="5" fill="#000" opacity=".14" filter="url(#v-blur)"/>
        <g transform="translate(60 44)"><g class="v-schrumpf" style="--d:2.4s">
          <rect x="24" y="-12" width="22" height="16" rx="3" fill="#2b3338"/>
          <rect x="0" y="0" width="70" height="108" rx="10" fill="url(#v-gold-g)"/>
          <rect x="0" y="0" width="70" height="108" rx="10" fill="url(#v-glas)"/>
          <rect x="10" y="40" width="50" height="34" rx="4" fill="#fff" opacity=".9"/>
          <text x="35" y="54" text-anchor="middle" class="t-mini fett" style="fill:#1c2326;font-size:8px">FRITTIERÖL</text>
          <text x="35" y="68" text-anchor="middle" class="t-gross" style="fill:#1c2326">3 L</text>
        </g></g>
        <text x="95" y="169" text-anchor="middle" class="t-klein leise">Fritteuse</text>
        <text x="160" y="102" text-anchor="middle" class="t-gross leise v-ein" style="--d:2.5s">→</text>
        <ellipse cx="240" cy="118" rx="26" ry="4" fill="#000" opacity=".14" filter="url(#v-blur)"/>
        <g transform="translate(240 96)"><g class="v-pop" style="--d:2.8s">
          <rect x="-4" y="-66" width="8" height="56" rx="4" fill="url(#v-metall-h)"/>
          <ellipse rx="22" ry="12" fill="url(#v-metall)"/><ellipse cy="1" rx="16" ry="7" fill="url(#v-gold-g)"/><ellipse cx="-5" cy="-2" rx="5" ry="2" fill="#fff" opacity=".5"/>
          <text y="36" text-anchor="middle" class="t-gross">1 EL</text>
        </g></g>
        <text x="240" y="169" text-anchor="middle" class="t-klein leise">Airfryer</text>`
    },
    {
      dauer: 7, titel: "Fertig. Körbe in die Spülmaschine",
      text: "Keine Pfanne schrubben, keine Fettspritzer auf dem Herd, kein Blech einweichen.",
      svg: `<text x="238" y="38" text-anchor="middle" class="t-klein leise">Spülmaschine</text>
        <ellipse cx="238" cy="168" rx="70" ry="6" fill="#000" opacity=".14" filter="url(#v-blur)"/>
        <g transform="translate(176 46)">
          <rect width="124" height="118" rx="6" fill="url(#v-metall)"/>
          <rect x="8" y="26" width="108" height="84" rx="4" fill="#1e2629"/>
          <polygon points="18,104 106,104 96,56 28,56" fill="#2c3539"/>
          ${[0, 1, 2].map(i => `<line x1="${26 - i * 3}" x2="${98 + i * 3}" y1="${64 + i * 18}" y2="${64 + i * 18}" stroke="#6b767b" stroke-width="1.2"/>`).join("")}
          ${[0, 1, 2, 3].map(i => `<line x1="${30 + i * 18}" y1="56" x2="${22 + i * 22}" y2="104" stroke="#6b767b" stroke-width="1"/>`).join("")}
          <rect x="0" y="0" width="124" height="18" rx="6" fill="#2b3338"/><circle cx="14" cy="9" r="4" fill="url(#v-metall)"/>
          <rect x="8" y="26" width="108" height="84" rx="4" fill="url(#v-glas)" opacity=".4"/>
        </g>
        <g transform="translate(40 86)"><g class="v-geh" style="--dx:150px;--d:.6s;--len:1.6s">
          <rect width="70" height="30" rx="6" fill="#3b4448" filter="url(#v-sch)"/><rect width="70" height="15" rx="6" fill="url(#v-glanz)" opacity=".4"/>
          <rect x="-18" y="10" width="20" height="8" rx="4" fill="#1c2326"/>
        </g></g>
        ${[0, 1, 2, 3, 4].map(i => `<g transform="translate(${200 + i * 18} 78)"><ellipse rx="1.6" ry="3" class="tropfen v-tropf" style="--d:${(2.4 + i * 0.15).toFixed(2)}s"/></g>`).join("")}
        ${haken(276, 72, 2.6)}
        <text x="30" y="150" class="t-mittel fett v-hoch" style="--d:3s">Keine Pfanne,</text><text x="30" y="166" class="t-mittel fett v-hoch" style="--d:3.2s">keinen Herd schrubben.</text>`
    },
    {
      dauer: 6, titel: "Du stehst kaum noch am Herd",
      text: "Hähnchen mit Gemüse für zwei: Mit der Pfanne stehst du rund 15 Minuten daneben und wendest. Mit dem Airfryer nur kurz zum Einfüllen.",
      svg: `<text x="30" y="30" class="t-mittel fett">So lange stehst du dabei</text>
        <text x="30" y="46" class="t-klein leise">Hähnchen mit Gemüse für zwei</text>
        ${balken(30, 60, "Mit der Pfanne", 205, "ca. 15 Min", 0.3, 1.4, true)}
        ${balken(30, 108, "Mit dem Airfryer", 26, "ca. 2 Min", 1.2, 0.4, false)}
        <text x="30" y="168" class="t-klein leise v-hoch" style="--d:2.2s">Den Rest erledigt er von allein.</text>`
    }
  ] };
})();

// ============================================================
// Elektrische Reinigungsbürste
// ============================================================
(function () {
  const dreck = (punkte, delays) => punkte.map(([x, y], i) =>
    `<g transform="translate(${x} ${y})"><path d="M-7 -2 C-6 -5 -2 -5 0 -4 C3 -5 7 -3 7 0 C8 3 4 5 1 4 C-2 5 -7 3 -7 -2 Z" class="dreck${delays ? " v-weg" : ""}" style="--d:${delays ? delays[i] : 0}s"/></g>`).join("");
  // Schmutz an der Duschwand: zwei Reihen, die die Bürste nacheinander abfährt
  const band1 = [34, 48, 62, 76, 90, 104, 118].map((x, i) => [x, 74 + ((i * 7) % 9) - 4]);
  const band2 = [34, 48, 62, 76, 90, 104, 118].map((x, i) => [x, 112 + ((i * 5) % 9) - 4]);
  const d1 = band1.map(([x]) => (0.15 + (x - 34) / 84 * 2.4).toFixed(2));
  const d2 = band2.map(([x]) => (3.05 + (118 - x) / 84 * 3).toFixed(2));
  const borsten = (n, r) => Array.from({ length: n }, (_, i) => `<line x2="${r}" transform="rotate(${i * 360 / n})" class="borste"/>`).join("");
  // Bürstenkopf von schräg oben: unten dunkel, oben Akzent mit Glanz, Borsten drehen sich
  const kopf = (r, squash) => `
    <ellipse cy="${(r * 0.35).toFixed(1)}" rx="${r}" ry="${(r * squash).toFixed(1)}" fill="#0b4f41"/>
    <g transform="scale(1 ${squash})"><g class="v-dreh schnell"><circle r="${r}" class="buerste"/>${borsten(10, r - 1)}<circle r="${r * 0.28}" fill="#1c2326"/></g></g>
    <ellipse cy="${(-r * 0.3).toFixed(1)}" rx="${r * 0.7}" ry="${(r * squash * 0.35).toFixed(1)}" fill="#fff" opacity=".28"/>`;
  const spritzer = [[-16, -10], [16, -8], [-14, 12], [15, 12]].map(([dx, dy], i) =>
    `<ellipse rx="1.6" ry="2.2" class="tropfen v-spritz" style="--dx:${dx}px;--dy:${dy}px;--d:${(i * 0.18).toFixed(2)}s"/>`).join("");
  // Das Bad von vorn: links die Dusche mit Fliesen bis oben, rechts Spiegel, Waschbecken und Toilette
  const bodenFugen = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320]
    .map(x => `<line x1="${x}" y1="150" x2="${(160 + (x - 160) * 1.35).toFixed(1)}" y2="180" class="bad-fuge"/>`).join("");
  const bad = `
    <rect width="320" height="150" class="bad-wand"/>
    ${fliesen(0, 15, 150, 135, 15)}${fliesen(150, 75, 180, 75, 15)}
    <rect x="0" y="150" width="320" height="30" class="bad-boden"/>${bodenFugen}
    <line x1="0" y1="157.5" x2="320" y2="157.5" class="bad-fuge"/><line x1="0" y1="167" x2="320" y2="167" class="bad-fuge"/>
    <rect x="0" y="150" width="320" height="30" fill="url(#v-abdunkeln)" opacity=".25"/>
    <path d="M0 150 H148 L146 160 H0 Z" fill="url(#v-keramik)" opacity=".9"/><rect x="62" y="154" width="22" height="2.6" rx="1.3" fill="#8a949a"/>
    <rect x="148" y="15" width="2" height="135" fill="#000" opacity=".08"/>
    <rect x="86" y="15" width="4" height="10" fill="url(#v-metall-h)"/><ellipse cx="88" cy="27" rx="17" ry="3.6" fill="url(#v-metall)" filter="url(#v-sch)"/>
    <rect x="14" y="44" width="3" height="72" rx="1.5" fill="url(#v-metall-h)"/>
    <g transform="translate(15.5 52) rotate(-18)"><rect x="-3" y="0" width="6" height="17" rx="3" fill="url(#v-metall-h)"/><ellipse rx="5.5" ry="3" fill="url(#v-metall)"/></g>
    <path d="M18 67 C 8 92, 34 104, 30 114" fill="none" stroke="#aeb8bd" stroke-width="2"/>
    <rect x="20" y="113" width="22" height="7" rx="3.5" fill="url(#v-metall)" filter="url(#v-sch)"/><rect x="28" y="109" width="6" height="5" rx="1.5" fill="url(#v-metall-h)"/>
    <rect x="104" y="38" width="36" height="20" rx="2" class="bad-nische"/>
    <rect x="109" y="44" width="8" height="14" rx="2.5" fill="url(#v-blau-g)"/><rect x="111" y="41" width="4" height="4" rx="1" fill="#e9eef1"/>
    <rect x="120" y="47" width="7" height="11" rx="2.5" fill="url(#v-orange-g)"/><rect x="130" y="48" width="6" height="10" rx="2" fill="url(#v-gruen-g)"/>
    <rect x="172" y="38" width="50" height="42" rx="6" fill="url(#v-metall)" filter="url(#v-sch)"/>
    <rect x="175" y="41" width="44" height="36" rx="4" fill="#cfe0e8"/>
    <path d="M182 41 H195 L178 66 V53 Z M200 41 H206 L183 77 H178 Z" fill="#fff" opacity=".45"/>
    <rect x="182" y="31" width="30" height="4" rx="2" fill="url(#v-metall)"/>
    <rect x="166" y="100" width="62" height="6" rx="2" fill="url(#v-keramik)" filter="url(#v-sch)"/>
    <path d="M181 100 Q182 89 197 89 Q212 89 213 100 Z" fill="url(#v-keramik)" stroke="#c9d0d4" stroke-width=".8"/>
    <path d="M201 100 V87 Q201 83 197 83 H193" fill="none" stroke="#aeb8bd" stroke-width="3" stroke-linecap="round"/>
    <rect x="171" y="91" width="7" height="9" rx="1.5" fill="url(#v-blau-g)"/><line x1="173" y1="91" x2="172" y2="84" stroke="#e86b5a" stroke-width="1.6" stroke-linecap="round"/><line x1="176" y1="91" x2="177.5" y2="85" stroke="#4c9a5a" stroke-width="1.6" stroke-linecap="round"/>
    <rect x="217" y="90" width="6" height="10" rx="2" fill="url(#v-gold-g)"/><rect x="219" y="86.5" width="2" height="4" fill="#8a949a"/>
    <rect x="168" y="106" width="58" height="30" rx="2" fill="url(#v-holz)" filter="url(#v-sch)"/>
    <line x1="197" y1="108" x2="197" y2="134" stroke="#9c8262" stroke-width="1"/>
    <rect x="192" y="114" width="2" height="10" rx="1" fill="url(#v-metall-h)"/><rect x="200" y="114" width="2" height="10" rx="1" fill="url(#v-metall-h)"/>
    <ellipse cx="197" cy="146" rx="26" ry="2.5" fill="#000" opacity=".12" filter="url(#v-blur)"/>
    <circle cx="238.5" cy="80" r="4" fill="none" stroke="#aeb8bd" stroke-width="1.6"/>
    <path d="M232 83 H245 V108 Q238.5 111 232 108 Z" fill="url(#v-gruen-g)"/><rect x="232" y="100" width="13" height="2" fill="#fff" opacity=".35"/>
    <g filter="url(#v-sch)">
      <rect x="255" y="103" width="24" height="19" rx="3" fill="url(#v-keramik)"/>
      <path d="M252 122 H282 V126 Q282 128 280 128 H254 Q252 128 252 126 Z" fill="url(#v-keramik)"/>
      <path d="M254 128 H280 C280 137 276 141 271 143 L272 150 H262 L263 143 C258 141 254 137 254 128 Z" fill="url(#v-keramik)"/>
    </g>
    <rect x="263" y="100" width="8" height="3" rx="1.5" fill="url(#v-metall)"/><line x1="254" y1="128.5" x2="280" y2="128.5" stroke="#c9d0d4" stroke-width=".8"/>
    <rect x="291" y="108" width="13" height="2" rx="1" fill="url(#v-metall)"/>
    <rect x="292" y="110" width="11" height="11" rx="2.5" fill="#fbfcfd" stroke="#d6dedb" stroke-width=".8"/><rect x="293" y="120" width="9" height="6" fill="#fbfcfd"/>
    <g transform="translate(305 150)"><path d="M-7 0 L-8.5 -12 H8.5 L7 0 Z" fill="url(#v-orange-g)"/><path d="M0 -12 C-10 -16 -12 -28 -4 -32 C-3 -24 -1 -18 0 -12 Z M0 -12 C8 -18 12 -28 6 -34 C3 -26 1 -19 0 -12 Z M0 -12 C-2 -22 1 -32 3 -38 C5 -28 3 -20 0 -12 Z" fill="url(#v-gruen-g)"/></g>`;

  const eimer = `<g transform="translate(8 150)" filter="url(#v-sch)"><path d="M0 0 L4 -28 H34 L38 0 Z" fill="url(#v-blau-g)"/><path d="M0 0 L4 -28 H34 L38 0 Z" fill="url(#v-glas)"/><ellipse cx="19" cy="-28" rx="15" ry="3" fill="#8fd0ff"/><path d="M6 -30 A13 13 0 0 1 32 -30" fill="none" stroke="#8a949a" stroke-width="2"/></g>`;

  VIDEOS.buerste = { szenen: [
    {
      dauer: 5, vorher: true, titel: "Bisher: Schrubben auf Knien",
      text: "Schwamm, Scheuermittel und viel Kraft. Am Ende tun Rücken und Arme weh.",
      svg: `${bad}
        ${dreck([[34, 70], [78, 64], [124, 82], [30, 104], [96, 126], [128, 116], [58, 90], [110, 98]])}
        ${eimer}
        <g class="figur" transform="translate(64 160)" filter="url(#v-sch)">
          <rect x="-36" y="-7" width="33" height="7" rx="3.5"/><rect x="-38" y="-11" width="6" height="11" rx="3"/>
          <rect x="-14" y="-30" width="11" height="25" rx="5"/>
          <line x1="-8" y1="-30" x2="14" y2="-50" class="figur-strich dick"/>
          <circle cx="21" cy="-58" r="6"/>
          <g class="v-wackel" style="transform-origin:0 0"><line x1="14" y1="-48" x2="32" y2="-20" class="figur-strich"/><rect x="26" y="-20" width="16" height="9" rx="2" fill="url(#v-gold-g)"/></g>
        </g>
        <g transform="translate(90 102)"><ellipse rx="1.6" ry="2.6" class="schweiss v-tropf" style="--d:.4s"/></g>
        <g transform="translate(96 112)"><ellipse rx="1.6" ry="2.6" class="schweiss v-tropf" style="--d:.9s"/></g>
        <g class="schrift-dunkel">${uhr(292, 44, "40 Min", 0, 240)}</g>
        ${blase(112, 84, "Aua, mein Rücken!", 2.4, 2.2)}`
    },
    {
      dauer: 7, titel: "Die Bürste dreht sich selbstständig",
      text: "Mehrere hundert Umdrehungen pro Minute. Du stehst aufrecht und führst sie mit leichtem Druck über die Fliesen.",
      svg: `${bad}
        ${dreck(band1, d1)}${dreck(band2, d2)}
        ${funkel(56, 72, 3, 1.2)}${funkel(100, 68, 3.4, 1)}${funkel(80, 112, 6.2, 1.2)}
        <g transform="translate(150 150) scale(1.9)">${figur(0, -14)}</g>
        <line x1="139" y1="97" x2="34" y2="74" stroke="#2b3338" stroke-width="5" stroke-linecap="round"><animate attributeName="x2" values="34;118;118;34" keyTimes="0;0.4;0.5;1" dur="6s" fill="freeze"/><animate attributeName="y2" values="74;74;112;112" keyTimes="0;0.4;0.5;1" dur="6s" fill="freeze"/></line>
        <line x1="139" y1="97" x2="34" y2="74" stroke="#c9d0d4" stroke-width="1.5" stroke-linecap="round" opacity=".8"><animate attributeName="x2" values="34;118;118;34" keyTimes="0;0.4;0.5;1" dur="6s" fill="freeze"/><animate attributeName="y2" values="74;74;112;112" keyTimes="0;0.4;0.5;1" dur="6s" fill="freeze"/></line>
        <g><animateTransform attributeName="transform" type="translate" values="34 74;118 74;118 112;34 112" keyTimes="0;0.4;0.5;1" dur="6s" fill="freeze"/>
          <ellipse cy="8" rx="15" ry="5" fill="#000" opacity=".25" filter="url(#v-blur)"/>
          ${kopf(13, 0.6)}${spritzer}</g>
        ${blase(80, 44, "Dreht von allein", 0.4, 2.2, true)}
        ${blase(232, 160, "Kein Bücken, kein Knien", 3.4, 2.6, true)}`
    },
    {
      dauer: 5, titel: "Ein Griff, viele Aufsätze",
      text: "Rundbürste für Fliesen, Eckbürste für Fugen, Schwamm fürs Waschbecken, Scheuerpad für den Backofen.",
      svg: `<text x="160" y="30" text-anchor="middle" class="t-mittel fett">Ein Griff, vier Aufsätze</text>
        <g transform="translate(160 44)" filter="url(#v-sch)"><rect x="-7" y="0" width="14" height="70" rx="7" fill="url(#v-metall-h)"/><rect x="-10" y="0" width="20" height="26" rx="6" fill="url(#v-dunkel)"/><circle cy="13" r="3" fill="#3fc1a1"/></g>
        <g transform="translate(160 134)"><g class="v-takt" style="--d:0s;--len:1.4s"><ellipse cy="6" rx="22" ry="8" fill="#000" opacity=".2" filter="url(#v-blur)"/><circle r="22" class="buerste"/>${borsten(12, 20)}<circle r="22" fill="url(#v-glanz)" opacity=".5"/><circle r="4" fill="#1c2326"/></g></g>
        <text x="160" y="169" text-anchor="middle" class="t-klein v-takt" style="--d:0s;--len:1.4s">Rundbürste: Fliesen, Wanne</text>
        <g transform="translate(160 134)"><g class="v-takt" style="--d:1.2s;--len:1.4s"><path d="M-20 -14 L20 -14 L0 24 Z" class="buerste" filter="url(#v-sch)"/><path d="M-20 -14 L20 -14 L0 24 Z" fill="url(#v-glanz)" opacity=".5"/><path d="M-10 -8 L0 12 M10 -8 L0 12" class="borste"/></g></g>
        <text x="160" y="169" text-anchor="middle" class="t-klein v-takt" style="--d:1.2s;--len:1.4s">Eckbürste: Fugen, Ecken</text>
        <g transform="translate(160 134)"><g class="v-takt" style="--d:2.4s;--len:1.4s"><rect x="-24" y="-14" width="48" height="26" rx="6" fill="url(#v-gold-g)" filter="url(#v-sch)"/><rect x="-24" y="-14" width="48" height="13" rx="6" fill="url(#v-glanz)" opacity=".5"/></g></g>
        <text x="160" y="169" text-anchor="middle" class="t-klein v-takt" style="--d:2.4s;--len:1.4s">Schwamm: Spüle, Waschbecken</text>
        <g transform="translate(160 134)"><g class="v-takt v-letzter" style="--d:3.6s;--len:1.5s"><ellipse cy="4" rx="26" ry="9" fill="#6b767b"/><ellipse rx="26" ry="9" fill="url(#v-metall)"/></g></g>
        <text x="160" y="169" text-anchor="middle" class="t-klein v-takt v-letzter" style="--d:3.6s;--len:1.5s">Scheuerpad: Backofen, Grill</text>`
    },
    {
      dauer: 6, titel: "Leichter und etwas schneller",
      text: "Ohne Knien und mit wenig Kraft. Wir rechnen mit etwa einem Viertel weniger Zeit.",
      svg: `<text x="30" y="34" class="t-mittel fett">Beispiel: Bad putzen, einmal pro Woche</text>
        ${balken(30, 58, "Mit Schwamm und Lappen", 200, "ca. 40 Min", 0.3, 1.2, true)}
        ${balken(30, 110, "Mit elektrischer Bürste", 150, "ca. 30 Min", 1.2, 0.8, false)}
        ${funkel(284, 60, 2.4, 1.3)}${funkel(300, 100, 2.9, 1)}${funkel(276, 130, 3.3, 1.2)}
        <text x="30" y="168" class="t-klein leise v-hoch" style="--d:2.4s">Und du stehst dabei aufrecht.</text>`
    }
  ] };
})();

// ============================================================
// Silikon-Stretchdeckel
// ============================================================
(function () {
  // Holz-Arbeitsplatte mit Vorderkante
  const platte = `<rect y="128" width="320" height="32" fill="url(#v-holz)"/><rect y="128" width="320" height="32" fill="url(#v-boden-licht)"/><rect y="158" width="320" height="22" fill="#8a6f50"/><rect y="158" width="320" height="22" fill="url(#v-abdunkeln)" opacity=".45"/>`;
  const schatten = (x, y, rx) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${(rx * 0.2).toFixed(1)}" fill="#000" opacity=".16" filter="url(#v-blur)"/>`;
  // Keramikschüssel von schräg oben, auf Wunsch mit Salat
  const schuessel = (x, y, inhalt = true, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
      ${schatten(0, 30, 30)}
      <path d="M-30 0 C-28 22 -14 30 0 30 C14 30 28 22 30 0 Z" fill="url(#v-keramik)"/>
      <path d="M-30 0 C-28 22 -14 30 0 30 C14 30 28 22 30 0 Z" fill="url(#v-abdunkeln-r)" opacity=".45"/>
      <ellipse rx="30" ry="7" fill="#f3f6f7"/><ellipse rx="26" ry="5" fill="#d3dadd"/>
      ${inhalt ? `<ellipse cy="1" rx="23" ry="3.8" fill="url(#v-gruen-g)"/><circle cx="-8" r="2.6" fill="url(#v-rot-g)"/><circle cx="8" cy="1" r="2.2" fill="url(#v-gold-g)"/><circle cx="1" cy="-1" r="1.6" fill="#fff" opacity=".7"/>` : ""}
    </g>`;
  const folienbox = `<g transform="translate(36 106)" filter="url(#v-sch)">
      <rect width="92" height="28" rx="3" fill="#cfae7e"/><rect width="92" height="28" rx="3" fill="url(#v-abdunkeln)" opacity=".3"/>
      <rect x="-1" y="-9" width="94" height="11" rx="2" fill="#e0c69c"/><rect x="-1" y="-9" width="94" height="5" rx="2" fill="url(#v-glanz)" opacity=".7"/>
      <path d="M2 2 ${"l3 -3 l3 3 ".repeat(15)}" fill="none" stroke="#9aa5aa" stroke-width="1"/>
      <text x="46" y="19" text-anchor="middle" class="t-mini fett" style="fill:#5b3b23;font-size:8px">FRISCHHALTEFOLIE</text>
    </g>`;
  const folie = `<g transform="translate(128 96)"><g class="v-weg" style="--d:2s"><g class="v-wackel" style="transform-origin:0 50%">
      <path d="M0 0 C26 -12 54 -8 80 2 L76 44 C50 34 24 40 2 34 Z" fill="#fff" opacity=".5"/>
      <path d="M0 0 C26 -12 54 -8 80 2 L76 44 C50 34 24 40 2 34 Z" fill="url(#v-glas)"/>
      <path d="M8 8 C30 2 50 6 66 10 M6 26 C30 20 48 28 68 30 M42 2 L38 36" class="folie-falte"/>
    </g></g></g>`;
  const knaeuel = `<g transform="translate(150 112)"><g class="v-geh" style="--dx:112px;--dy:-32px;--d:2.9s;--len:.7s"><g class="v-weg" style="--d:3.7s"><g class="v-pop" style="--d:2.1s">
      <circle r="13" fill="#fff" opacity=".6"/><circle r="13" fill="url(#v-glas)"/><circle r="13" fill="none" stroke="#b9c3c8" stroke-width="1"/>
      <path d="M-8 -4 Q-1 2 6 -6 M-6 6 Q2 1 8 6 M-2 -10 Q3 -4 1 4" class="folie-falte"/>
    </g></g></g></g>`;
  const muelleimer = `<g transform="translate(234 72)">
      ${schatten(28, 90, 30)}
      <path d="M2 8 L7 88 H49 L54 8 Z" fill="url(#v-metall-h)"/>
      <path d="M2 8 L7 88 H49 L54 8 Z" fill="url(#v-abdunkeln)" opacity=".22"/>
      <rect x="4" y="22" width="48" height="3" fill="#b4bec3" opacity=".8"/>
      <ellipse cx="28" cy="8" rx="27" ry="6" fill="#dfe5e8"/><ellipse cx="28" cy="8" rx="23" ry="4.5" fill="#1c2326"/>
      <g transform="rotate(-18 4 6)"><ellipse cx="28" cy="6" rx="28" ry="6" fill="url(#v-metall)"/><ellipse cx="22" cy="4" rx="10" ry="2.5" fill="#fff" opacity=".45"/></g>
      <rect x="18" y="86" width="22" height="5" rx="2" fill="#5a6468"/>
    </g>`;
  // Glasdose und halbe Melone
  const form = `<g transform="translate(160 110)">
      ${schatten(0, 28, 34)}
      <path d="M-30 0 L-28 26 H28 L30 0 Z" fill="#9fc6d8" opacity=".55"/>
      <rect x="-20" y="8" width="40" height="14" rx="2" fill="url(#v-orange-g)" opacity=".85"/>
      <path d="M-30 0 L-28 26 H28 L30 0 Z" fill="url(#v-glas)"/>
      <path d="M-30 0 L-28 26 H28 L30 0 Z" fill="none" stroke="#8fb9cc" stroke-width="1.2"/>
      <rect x="-32" y="-3" width="64" height="5" rx="2.5" fill="#c7e2ec"/><rect x="-32" y="-3" width="64" height="5" rx="2.5" fill="url(#v-glanz)"/>
    </g>`;
  const melone = `<g transform="translate(250 110)">
      ${schatten(0, 26, 30)}
      <path d="M-26 0 A26 26 0 0 0 26 0 Z" fill="url(#v-gruen-g)"/>
      <path d="M-26 0 A26 26 0 0 0 26 0 Z" fill="url(#v-abdunkeln-r)" opacity=".45"/>
      <path d="M-18 16 Q-10 22 0 24" fill="none" stroke="#2f7a3c" stroke-width="2" opacity=".6"/>
      <ellipse rx="26" ry="5.5" fill="#f1f6e6"/><ellipse rx="22" ry="4" fill="url(#v-rot-g)"/>
      <ellipse cx="-8" rx="1.6" ry=".9" fill="#1c2326"/><ellipse cx="4" cy="1" rx="1.6" ry=".9" fill="#1c2326"/><ellipse cx="12" cy="-1" rx="1.6" ry=".9" fill="#1c2326"/>
    </g>`;
  const rund = (rx, ry) => `<ellipse rx="${rx}" ry="${ry}" class="deckel"/><ellipse rx="${rx}" ry="${ry}" fill="url(#v-glanz)"/><ellipse rx="${rx - 5}" ry="${ry - 2.5}" fill="none" stroke="#fff" stroke-opacity=".4"/>`;
  const eckig = `<rect x="-32" y="-7" width="64" height="14" rx="7" class="deckel"/><rect x="-32" y="-7" width="64" height="14" rx="7" fill="url(#v-glanz)"/><rect x="-27" y="-4" width="54" height="8" rx="4" fill="none" stroke="#fff" stroke-opacity=".4"/>`;
  const deckel = (x, y, form, d) => `<g transform="translate(${x} ${y})"><g class="v-schnapp" style="--d:${d}s">${form}</g></g>`;
  const pfeile = (x, y, d) => `<g transform="translate(${x - 36} ${y})"><g class="v-takt" style="--d:${d}s;--len:.9s"><path d="M6 -5 L0 0 L6 5" class="pfeil"/></g></g><g transform="translate(${x + 36} ${y})"><g class="v-takt" style="--d:${d}s;--len:.9s"><path d="M-6 -5 L0 0 L-6 5" class="pfeil"/></g></g>`;

  VIDEOS.deckel = { szenen: [
    {
      dauer: 7, vorher: true, titel: "Bisher: Folie, die an sich selbst klebt",
      text: "Abrollen, abreißen, und schon klebt sie zusammen. Einmal benutzen, wegwerfen.",
      svg: `${platte}
        <text x="120" y="26" text-anchor="middle" class="t-mittel fett">Frischhaltefolie, jeden Tag</text>
        ${schuessel(190, 108)}
        ${folienbox}
        ${folie}
        ${blase(150, 66, "Klebt!", 0.6, 1.4)}
        ${knaeuel}
        ${muelleimer}
        <text x="262" y="40" text-anchor="middle" class="t-klein leise v-hoch" style="--d:3.8s">Ein Stück pro Tag:</text>
        <text x="262" y="54" text-anchor="middle" class="t-klein fett v-hoch" style="--d:4s">365 Stück im Jahr</text>`
    },
    {
      dauer: 8, titel: "Drüberziehen, fertig",
      text: "Der Deckel dehnt sich über runde, eckige und sogar angeschnittene Sachen. Ganz übergezogen hält er dicht.",
      svg: `${platte}
        <text x="160" y="28" text-anchor="middle" class="t-mittel fett">Drüberziehen, fertig</text>
        ${schuessel(70, 108, false)}
        ${form}
        ${melone}
        ${deckel(70, 108, rund(31, 7.5), 0.5)}${pfeile(70, 108, 0.35)}
        ${deckel(160, 108, eckig, 2.3)}${pfeile(160, 108, 2.15)}
        ${deckel(250, 110, rund(27, 6), 4.1)}${pfeile(250, 110, 3.95)}
        <text x="70" y="150" text-anchor="middle" class="t-klein fett v-ein" style="--d:.9s;fill:#3b2f22">Schüssel</text>
        <text x="160" y="150" text-anchor="middle" class="t-klein fett v-ein" style="--d:2.7s;fill:#3b2f22">Dose</text>
        <text x="250" y="150" text-anchor="middle" class="t-klein fett v-ein" style="--d:4.5s;fill:#3b2f22">Melone</text>
        <text x="160" y="169" text-anchor="middle" class="t-mittel fett v-hoch" style="--d:5s;fill:#fff8ec">Sechs Größen, passt auf vieles.</text>`
    },
    {
      dauer: 7, titel: "Spülen und wieder benutzen",
      text: "Spülmaschinenfest und immer wieder benutzbar, statt jedes Mal ein neues Stück Folie.",
      svg: `<circle cx="110" cy="96" r="52" class="kreis-pfad"/>
        <g transform="translate(110 46)">${schuessel(0, 0, false, 0.55)}${rund(17, 4)}</g><text x="110" y="24" text-anchor="middle" class="t-mini leise">Benutzen</text>
        <g transform="translate(141 108)" filter="url(#v-sch)"><rect width="28" height="28" rx="3" fill="url(#v-metall)"/><rect width="28" height="6" rx="3" fill="#2b3338"/><rect x="3" y="9" width="22" height="16" rx="2" fill="#1e2629"/><path d="M5 19 q3 -3 6 0 t6 0 t6 0" class="welle"/><rect x="3" y="9" width="22" height="16" rx="2" fill="url(#v-glas)" opacity=".5"/></g>
        ${[0, 1, 2].map(i => `<g transform="translate(${149 + i * 6} 104)"><ellipse rx="1.4" ry="2.4" class="tropfen v-tropf" style="--d:${(0.6 + i * 0.4).toFixed(1)}s"/></g>`).join("")}
        ${funkel(174, 102, 0.5, 0.8)}${funkel(136, 136, 1.6, 0.7)}
        <text x="155" y="152" text-anchor="middle" class="t-mini leise">Spülen</text>
        <g transform="translate(51 108)" filter="url(#v-sch)"><rect width="28" height="28" rx="2" fill="url(#v-holz)"/><rect width="28" height="28" rx="2" fill="url(#v-abdunkeln)" opacity=".25"/><line x1="14" y1="2" x2="14" y2="26" stroke="#8a6f50" stroke-width="1"/><circle cx="11" cy="14" r="1.2" fill="#5b3b23"/><circle cx="17" cy="14" r="1.2" fill="#5b3b23"/></g>
        <text x="65" y="152" text-anchor="middle" class="t-mini leise">Schrank</text>
        <g><animateMotion dur="3.2s" repeatCount="indefinite" rotate="0" path="M110 46 a50 50 0 1 1 -0.1 0"/><ellipse cy="3" rx="9" ry="3" fill="#000" opacity=".2" filter="url(#v-blur)"/><ellipse rx="9" ry="3" class="deckel-klein"/><ellipse rx="9" ry="3" fill="url(#v-glanz)"/></g>
        ${zeile(190, 60, "Wieder und wieder", 0.4)}
        ${zeile(190, 92, "Spülmaschinenfest", 1.4)}
        ${zeile(190, 124, "Nichts klebt", 2.4)}
        <text x="160" y="169" text-anchor="middle" class="t-klein leise v-hoch" style="--d:3.4s">Statt Meter um Meter Folie im Müll.</text>`
    }
  ] };
})();

// ============================================================
// Kindle
// ============================================================
(function () {
  // Ein Buch von schräg oben: Einband, Buchrücken, Seiten
  const buch3d = (w, h, cls) => `<rect x="1" y="${h - 1}" width="${w}" height="5" rx="1.5" fill="#efe9da"/><rect x="3" y="${h + 1}" width="${w - 4}" height="1.5" fill="#cfc7b4"/><rect width="${w}" height="${h}" rx="2" class="buch ${cls}"/><rect width="${w}" height="${h}" rx="2" fill="url(#v-glanz)" opacity=".35"/><rect width="7" height="${h}" rx="1.5" fill="#000" opacity=".22"/>`;
  // Der E-Reader mit Tiefe und Schatten; inhalt = was auf dem Bildschirm steht
  const reader = (x, y, inhalt = "", w = 60, h = 104) => `<g transform="translate(${x} ${y})">
      <ellipse cx="${w / 2}" cy="${h + 5}" rx="${w / 2 + 10}" ry="6" fill="#000" opacity=".22" filter="url(#v-blur)"/>
      <rect x="2" y="2" width="${w}" height="${h}" rx="7" fill="#0b0f10"/>
      <rect width="${w}" height="${h}" rx="7" fill="url(#v-dunkel)"/><rect width="${w}" height="${h}" rx="7" fill="url(#v-glanz)" opacity=".2"/>
      <rect x="5" y="6" width="${w - 10}" height="${h - 16}" rx="3" class="reader-screen"/>
      ${inhalt}
      <rect x="5" y="6" width="${w - 10}" height="${h - 16}" rx="3" fill="url(#v-glas)" opacity=".25"/>
      <rect x="${w / 2 - 7}" y="${h - 6}" width="14" height="2" rx="1" fill="#6b767b"/>
    </g>`;
  const koffer = inhalt => `<g transform="translate(60 56)">
      <path d="M10 44 L16 -22 Q16 -28 22 -28 H128 Q134 -28 134 -22 L140 44 Z" fill="url(#v-leder)"/>
      <path d="M10 44 L16 -22 Q16 -28 22 -28 H128 Q134 -28 134 -22 L140 44 Z" fill="url(#v-abdunkeln)" opacity=".45"/>
      <path d="M22 38 L27 -16 H123 L128 38 Z" fill="#cdbda3" opacity=".55"/>
      <path d="M22 38 L27 -16 H123 L128 38 Z" fill="url(#v-abdunkeln)" opacity=".3"/>
      <ellipse cx="75" cy="112" rx="82" ry="8" fill="#000" opacity=".2" filter="url(#v-blur)"/>
      <rect y="40" width="150" height="70" rx="10" fill="url(#v-leder)"/>
      <rect y="40" width="150" height="70" rx="10" fill="url(#v-glanz)" opacity=".2"/>
      <rect x="8" y="46" width="134" height="58" rx="6" fill="#d9c9ae"/><rect x="8" y="46" width="134" height="58" rx="6" fill="url(#v-abdunkeln)" opacity=".3"/>
      ${inhalt}
      <rect x="60" y="106" width="30" height="7" rx="3.5" fill="#3b2a1c"/>
      <rect x="-2" y="70" width="6" height="12" rx="2" fill="#3b2a1c"/><rect x="146" y="70" width="6" height="12" rx="2" fill="#3b2a1c"/>
    </g>`;
  const zeilen = (n, y0, abstand, hoehe, breit) => Array.from({ length: n }, (_, i) =>
    `<rect x="10" y="${y0 + i * abstand}" width="${i % 3 === 2 ? breit - 12 : breit}" height="${hoehe}" rx="${hoehe / 2}" class="zeile"/>`).join("");

  VIDEOS.kindle = { szenen: [
    {
      dauer: 7, vorher: true, titel: "Bisher: Bücher sind schwer und sperrig",
      text: "Vier Bücher im Koffer wiegen über ein Kilo. Und das Regal zu Hause ist irgendwann voll.",
      svg: `<text x="135" y="20" text-anchor="middle" class="t-mittel fett">Vier Bücher für den Urlaub</text>
        ${koffer([0, 1, 2, 3].map(i => `<g transform="translate(28 ${88 - i * 13})"><g class="v-fall" style="--d:${(0.3 + i * 0.6).toFixed(1)}s">${buch3d(94, 12, "b" + i)}</g></g>`).join(""))}
        <g transform="translate(258 100)"><g class="v-pop" style="--d:3s"><rect x="-44" y="-18" width="88" height="46" rx="8" class="blase" filter="url(#v-sch)"/><text y="4" text-anchor="middle" class="t-gross">1,5 kg</text><text y="20" text-anchor="middle" class="t-mini leise">4 Bücher</text></g></g>
        <text x="264" y="150" text-anchor="middle" class="t-klein leise v-hoch" style="--d:2.8s">Jedes Buch wiegt</text><text x="264" y="164" text-anchor="middle" class="t-klein leise v-hoch" style="--d:2.9s">300 bis 500 g.</text>`
    },
    {
      dauer: 8, titel: "Tausende Bücher, 200 Gramm",
      text: "Deine ganze Bibliothek passt auf ein Gerät, das leichter ist als ein Taschenbuch.",
      svg: `<g transform="translate(160 86)"><circle r="80" fill="url(#v-licht-r)" class="v-ein" style="--d:3.4s" opacity=".7"/></g>
        ${reader(130, 34, [0, 1, 2, 3, 4, 5].map(i => `<rect x="10" y="${14 + i * 11}" width="${i % 3 ? 40 : 30}" height="3" rx="1.5" class="zeile v-ein" style="--d:${(1 + i * 0.5).toFixed(1)}s"/>`).join(""))}
        ${[[-130, -60], [-120, 20], [-110, 70], [130, -60], [120, 10], [115, 70], [-60, -80], [60, -80], [-70, 80], [70, 80]].map(([sx, sy], i) =>
          `<g transform="translate(160 88)"><g class="v-flug" style="--sx:${sx}px;--sy:${sy}px;--d:${(0.2 + i * 0.32).toFixed(2)}s"><g transform="translate(-12 -16)">${buch3d(24, 32, "b" + (i % 4))}</g></g></g>`).join("")}
        <text x="160" y="162" text-anchor="middle" class="t-mittel fett v-takt" style="--d:.9s;--len:1.3s">12 Bücher</text>
        <text x="160" y="162" text-anchor="middle" class="t-mittel fett v-takt" style="--d:2.2s;--len:1.3s">500 Bücher</text>
        <g transform="translate(160 158)"><g class="v-pop" style="--d:3.6s"><text text-anchor="middle" class="t-gross">Tausende Bücher</text></g></g>
        <g transform="translate(256 72)"><g class="v-pop" style="--d:4.4s"><rect x="-52" y="-19" width="104" height="62" rx="9" class="blase" filter="url(#v-sch)"/><text y="2" text-anchor="middle" class="t-gross">200 g</text><text y="19" text-anchor="middle" class="t-mini leise">leichter als</text><text y="32" text-anchor="middle" class="t-mini leise">ein Taschenbuch</text></g></g>`
    },
    {
      dauer: 7, titel: "Kaufen und in Sekunden lesen",
      text: "Kein Weg in den Laden, kein Warten auf das Paket. Auch abends um elf oder im Urlaub.",
      svg: `${reader(60, 30, `<g class="v-weg" style="--d:2.8s">
            ${[0, 2, 3].map((b, i) => `<g transform="translate(${10 + i * 14} 12)"><rect width="12" height="16" rx="1.5" class="buch b${b}"/><rect width="12" height="16" rx="1.5" fill="url(#v-glanz)" opacity=".4"/></g>`).join("")}
            <rect x="10" y="34" width="34" height="3" rx="1.5" class="zeile"/><rect x="10" y="41" width="26" height="3" rx="1.5" class="zeile"/>
            <rect x="10" y="70" width="40" height="14" rx="4" class="blase-akzent"/><text x="30" y="80" text-anchor="middle" class="t-mini hell">Kaufen</text>
            <g transform="translate(10 90)"><rect width="40" height="4" rx="2" class="balken-bg"/><rect width="40" height="4" rx="2" class="balken v-spur" style="--d:1.5s;--len:1.1s"/></g>
          </g>
          <g class="v-ein" style="--d:3s">${zeilen(7, 16, 10, 3, 40)}</g>`)}
        <g transform="translate(90 107)"><circle r="10" class="tipp v-tipp" style="--d:.9s"/></g>
        <g transform="translate(101 126)"><g class="v-geh" style="--dx:-8px;--dy:-14px;--d:.3s;--len:.6s"><g class="v-weg" style="--d:1.6s"><g class="figur" transform="rotate(-28)" filter="url(#v-sch)"><rect x="-5" y="-6" width="10" height="46" rx="5"/><rect x="-11" y="14" width="22" height="34" rx="8"/></g></g></g></g>
        <g transform="translate(118 20)" fill="none" stroke-width="2" stroke-linecap="round" style="stroke:var(--accent)">
          <circle r="1.6" stroke="none" class="v-ein" style="fill:var(--accent);--d:1.5s"/>
          <path d="M-5 -4 A7 7 0 0 1 5 -4" class="v-ein" style="--d:1.7s"/>
          <path d="M-9 -8 A12.5 12.5 0 0 1 9 -8" class="v-ein" style="--d:1.9s"/>
          <path d="M-13 -12 A18 18 0 0 1 13 -12" class="v-ein" style="--d:2.1s"/>
        </g>
        ${zeile(150, 60, "Kein Weg zum Laden", 0.5)}
        ${zeile(150, 92, "Kein Warten aufs Paket", 1.6)}
        ${zeile(150, 124, "In Sekunden lesen", 2.9)}
        <text x="134" y="162" class="t-klein leise v-hoch" style="--d:3.8s">Auch um 23 Uhr. Auch im Urlaub.</text>`
    },
    {
      dauer: 7, titel: "Große Schrift, mit Licht, Akku für Wochen",
      text: "Schrift größer stellen, abends ohne Lampe lesen, und nur alle paar Wochen laden.",
      svg: `<rect width="320" height="180" class="nacht v-nacht" style="--d:2.2s"/>
        <g class="v-ein" style="--d:2.6s"><g transform="translate(272 60)">
          <rect x="-30" y="-30" width="60" height="60" rx="3" fill="#0e1a24"/>
          <g transform="translate(14 -8)"><path d="M0 -10 A10 10 0 1 0 0 10 A14 14 0 0 1 0 -10 Z" class="mond"/></g>
          ${[[-20, -20], [-12, 8], [-22, 18], [22, 22], [6, -24]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="1.1" fill="#fff" class="v-funkel" style="--d:${(i * 0.5).toFixed(1)}s"/>`).join("")}
          <rect x="-30" y="-30" width="60" height="60" rx="3" fill="none" stroke="#3a4a52" stroke-width="3"/><line y1="-30" y2="30" stroke="#3a4a52" stroke-width="3"/><line x1="-30" x2="30" stroke="#3a4a52" stroke-width="3"/>
        </g></g>
        <g transform="translate(160 86)"><circle r="90" fill="url(#v-licht-r)" class="v-ein" style="--d:2.6s" opacity=".5"/></g>
        ${reader(130, 34, `<rect x="5" y="6" width="50" height="88" rx="3" fill="url(#v-licht-r)" class="v-ein" style="--d:2.6s" opacity=".9"/>
          <g class="v-weg" style="--d:1.2s">${zeilen(8, 14, 9, 2.5, 38)}</g>
          <g class="v-ein" style="--d:1.4s">${zeilen(5, 16, 14, 5, 40)}</g>`)}
        ${blase(160, 158, "Schrift größer", 0.3, 1.8)}
        <text x="160" y="162" text-anchor="middle" class="t-klein hell v-hoch" style="--d:2.9s">Licht eingebaut: lesen im Dunkeln</text>
        <g transform="translate(36 40)"><g class="v-hoch" style="--d:3.8s"><rect width="44" height="20" rx="4" class="akku-rahmen"/><rect x="44" y="6" width="4" height="8" rx="1" class="akku-pol"/><g transform="translate(3 3)"><rect width="38" height="14" rx="2" fill="url(#v-gruen-g)" class="v-spur" style="--d:4s;--len:.8s"/></g><text x="22" y="36" text-anchor="middle" class="t-mini hell">Akku: Wochen</text></g></g>`
    }
  ] };
})();

// ============================================================
// Waschtrockner
// ============================================================
(function () {
  // Holzboden mit Fußleiste ab Höhe y
  const boden = y => `<rect y="${y - 3}" width="320" height="4" fill="#d8cfbf"/><rect y="${y}" width="320" height="${180 - y}" fill="url(#v-holz)"/><rect y="${y}" width="320" height="${180 - y}" fill="url(#v-abdunkeln)" opacity=".25"/>`;
  // Trommel mit Löchern und bunter Wäsche (Mitte 0,0), auf Wunsch drehend
  const loecher = r => Array.from({ length: 14 }, (_, i) => {
    const a = (i * 2 * Math.PI) / 14;
    return `<circle cx="${(Math.cos(a) * r * 0.86).toFixed(1)}" cy="${(Math.sin(a) * r * 0.86).toFixed(1)}" r="${(r * 0.045).toFixed(2)}" fill="#56626a"/>`;
  }).join("");
  const kleider = r => [[-0.34, 0.32, 0.44, 0.26, "url(#v-blau-g)", 25], [0.36, 0.24, 0.38, 0.24, "url(#v-rot-g)", -30], [0.04, -0.38, 0.42, 0.22, "url(#v-gold-g)", 10], [-0.4, -0.14, 0.26, 0.18, "url(#v-gruen-g)", -50], [0.3, -0.04, 0.2, 0.14, "#f3f6f7", 0]]
    .map(([x, y, rx, ry, f, w]) => `<ellipse cx="${(x * r).toFixed(1)}" cy="${(y * r).toFixed(1)}" rx="${(rx * r).toFixed(1)}" ry="${(ry * r).toFixed(1)}" fill="${f}" transform="rotate(${w} ${(x * r).toFixed(1)} ${(y * r).toFixed(1)})"/>`).join("");
  const trommel = (r, dreht = false, dauer = 3, mitWaesche = true) =>
    `<g${dreht ? ` class="v-dreh" style="animation-duration:${dauer}s"` : ""}><circle r="${r}" fill="#1c2326" opacity=".01"/>${loecher(r)}${mitWaesche ? kleider(r) : ""}</g>`;
  // Der Waschtrockner von vorn (100 × 120): trommel = Inhalt hinter dem Glas, anzeige = Text im Display
  const maschine = (x, y, s, trommelInhalt = "", anzeige = "") => `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cx="50" cy="121" rx="58" ry="6" fill="#000" opacity=".18" filter="url(#v-blur)"/>
      <rect width="100" height="120" rx="9" fill="#f7f9fa"/>
      <rect width="100" height="120" rx="9" fill="url(#v-abdunkeln-r)" opacity=".3"/>
      <rect x=".6" y=".6" width="98.8" height="118.8" rx="8.5" fill="none" stroke="#cfd6da" stroke-width="1.2"/>
      <rect width="100" height="24" rx="9" fill="#e9eef1"/><rect y="15" width="100" height="9" fill="#e9eef1"/>
      <line x1="2" y1="24" x2="98" y2="24" stroke="#cfd6da"/>
      <rect x="7" y="6" width="25" height="12" rx="2.5" fill="url(#v-metall)"/><rect x="9" y="14" width="21" height="2" rx="1" fill="#aab4b8"/>
      <circle cx="43" cy="12" r="6.5" fill="url(#v-metall)" stroke="#bcc5c9" stroke-width=".8"/><line x1="43" y1="12" x2="43" y2="7.2" stroke="#5a6468" stroke-width="1.4" stroke-linecap="round"/>
      <rect x="55" y="5" width="39" height="14" rx="3" fill="#151b1d"/>
      ${anzeige}
      <circle cx="50" cy="70" r="36" fill="url(#v-metall)"/><circle cx="50" cy="70" r="36" fill="none" stroke="#b4bec3"/>
      <circle cx="50" cy="70" r="29.5" fill="#3b4448"/><circle cx="50" cy="70" r="26" fill="#1c2326"/>
      <g transform="translate(50 70)">${trommelInhalt}</g>
      <circle cx="50" cy="70" r="26" fill="url(#v-glas)" opacity=".6"/>
      <path d="M32 60 A20 20 0 0 1 45 49" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2.4" stroke-linecap="round"/>
      <rect x="84" y="63" width="5" height="14" rx="2.5" fill="#cfd6da"/>
      <rect x="8" y="119" width="11" height="4" rx="1.5" fill="#5a6468"/><rect x="81" y="119" width="11" height="4" rx="1.5" fill="#5a6468"/>
    </g>`;
  const anzeige = (text, cls = "", stil = "") => `<text x="74.5" y="15.3" text-anchor="middle" class="${cls}" style="fill:#7ee2c4;font-size:9px;font-family:monospace;font-weight:700;${stil}">${text}</text>`;
  // Kleidung zum Aufhängen (Ursprung = Aufhängepunkt oben)
  const shirt = f => `<path d="M-11 0 H11 L18 6 L14 11 L10 8 V27 H-10 V8 L-14 11 L-18 6 Z" fill="${f}"/><path d="M-11 0 H11 L18 6 L14 11 L10 8 V27 H-10 V8 L-14 11 L-18 6 Z" fill="url(#v-glanz)" opacity=".35"/><path d="M-4 0 Q0 4 4 0" fill="none" stroke="#000" stroke-opacity=".2"/>`;
  const handtuch = (f, h = 30) => `<rect x="-9" y="0" width="18" height="${h}" rx="1.5" fill="${f}"/><rect x="-9" y="${h - 6}" width="18" height="2" fill="#fff" opacity=".4"/><rect x="-9" y="0" width="18" height="${h}" rx="1.5" fill="url(#v-glanz)" opacity=".3"/>`;
  const socken = f => `<path d="M-7 0 H-1 V12 Q-1 16 4 16 H6 V21 H0 Q-7 21 -7 14 Z" fill="${f}"/><path d="M2 0 H8 V10 Q8 14 13 14 H15 V19 H9 Q2 19 2 12 Z" fill="${f}" opacity=".85"/>`;
  const korb = (x, y, inhalt = "") => `<g transform="translate(${x} ${y})">
      <ellipse cy="1" rx="30" ry="3.5" fill="#000" opacity=".16" filter="url(#v-blur)"/>
      ${inhalt}
      <path d="M-27 -26 H27 L22 0 H-22 Z" fill="url(#v-holz)"/><path d="M-27 -26 H27 L22 0 H-22 Z" fill="url(#v-abdunkeln)" opacity=".3"/>
      ${[-19, -12, -5].map(y => `<line x1="${-25 + (26 + y) * 0.19}" y1="${y}" x2="${25 - (26 + y) * 0.19}" y2="${y}" stroke="#8a6f50" stroke-width="1" opacity=".6"/>`).join("")}
      <rect x="-29" y="-29" width="58" height="5" rx="2.5" fill="#cfae7e"/>
    </g>`;
  const waescheImKorb = `<ellipse cx="-12" cy="-27" rx="12" ry="6" fill="url(#v-blau-g)"/><ellipse cx="6" cy="-29" rx="13" ry="7" fill="url(#v-rot-g)"/><ellipse cx="16" cy="-26" rx="9" ry="5" fill="url(#v-gold-g)"/>`;
  const stapel = [["url(#v-blau-g)", 0], ["#f3f6f7", 1], ["url(#v-rot-g)", 2], ["url(#v-gruen-g)", 3]];

  VIDEOS.waschtrockner = { szenen: [
    {
      dauer: 7, vorher: true, titel: "Bisher: Wäsche aufhängen",
      text: "Jedes Teil einzeln aufhängen, einen Tag warten, wieder abnehmen. Und danach noch bügeln.",
      svg: `${boden(146)}
        <text x="22" y="28" class="t-mittel fett">Aufhängen, warten, abnehmen</text>
        ${korb(48, 146, waescheImKorb)}
        <g stroke-linecap="round">
          <line x1="122" y1="146" x2="152" y2="80" stroke="#9aa5aa" stroke-width="2.6"/><line x1="182" y1="146" x2="152" y2="80" stroke="#b4bec3" stroke-width="2.6"/>
          <line x1="202" y1="146" x2="232" y2="80" stroke="#9aa5aa" stroke-width="2.6"/><line x1="262" y1="146" x2="232" y2="80" stroke="#b4bec3" stroke-width="2.6"/>
          <line x1="126" y1="80" x2="258" y2="80" stroke="#c6ced2" stroke-width="2.4"/>
        </g>
        ${[[140, shirt("url(#v-blau-g)")], [162, handtuch("url(#v-orange-g)")], [184, shirt("url(#v-rot-g)")], [204, socken("url(#v-gruen-g)")], [223, handtuch("url(#v-gold-g)", 26)], [245, shirt("#eef1f3")]]
          .map(([x, teil], i) => `<g transform="translate(${x} 80)"><g class="v-pop" style="--d:${(0.4 + i * 0.5).toFixed(1)}s">${teil}</g></g>`).join("")}
        <g transform="translate(98 146) scale(1.5)">${figur(0, -14)}</g>
        <line x1="102" y1="94" x2="124" y2="80" class="figur-strich" style="stroke-width:4.5"/>
        ${blase(98, 50, "Und noch eins …", 1, 2.6)}
        <g transform="translate(286 48)"><circle r="20" class="ring-bg"/><circle r="20" pathLength="1" class="ring v-zeichne" style="--d:.3s;--len:4.2s" transform="rotate(-90)"/>
          <text y="4" text-anchor="middle" class="t-mittel fett">1 Tag</text><text y="33" text-anchor="middle" class="t-mini leise">trocknen</text></g>
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:2.6s;fill:#3b2f22">Und danach noch bügeln.</text>`
    },
    {
      dauer: 7, titel: "Morgens: Wäsche rein, Endzeit einstellen",
      text: "Du stellst ein, wann alles fertig sein soll, zum Beispiel 18 Uhr. Er rechnet selbst aus, wann er anfangen muss.",
      svg: `${boden(152)}
        ${maschine(26, 30, 1, `<g class="v-ein" style="--d:1.4s">${trommel(24)}</g>`, `${anzeige("--:--", "v-weg", "--d:2.3s")}${anzeige("18:00", "v-ein", "--d:2.4s")}`)}
        ${korb(168, 152, `<g class="v-weg" style="--d:1.3s">${waescheImKorb}</g>`)}
        ${[[0.2, shirt("url(#v-blau-g)")], [0.5, socken("url(#v-gruen-g)")], [0.8, handtuch("url(#v-orange-g)", 22)], [1.1, shirt("url(#v-rot-g)")]]
          .map(([d, teil]) => `<g transform="translate(76 100)"><g class="v-flug" style="--sx:92px;--sy:22px;--d:${d}s"><g transform="scale(.7) translate(0 -12)">${teil}</g></g></g>`).join("")}
        <g transform="translate(100.5 42)"><circle r="10" class="tipp v-tipp" style="--d:2.1s"/></g>
        ${blase(100, 17, "Fertig um 18 Uhr", 2.5, 3.5, true)}
        ${uhr(292, 45, "7:30", 225, 180)}
        ${zeile(206, 84, "Wäsche rein", 0.4)}
        ${zeile(206, 110, "Endzeit: 18 Uhr", 2.4)}
        ${zeile(206, 136, "Ab zur Arbeit", 4)}`
    },
    {
      dauer: 8, titel: "Er wäscht, trocknet und glättet mit Dampf",
      text: "Erst waschen, dann trocknen, ohne Umräumen. Falten lockert ein Dampfprogramm, zum Beispiel i-\u2060Refresh bei Haier.",
      svg: `<rect x="12" y="6" width="176" height="190" rx="14" fill="#f7f9fa"/><rect x="12" y="6" width="176" height="190" rx="14" fill="url(#v-abdunkeln-r)" opacity=".25"/>
        <rect x="12.6" y="6.6" width="174.8" height="190" rx="13.5" fill="none" stroke="#cfd6da" stroke-width="1.2"/>
        <rect x="60" y="13" width="80" height="17" rx="4" fill="#151b1d"/>
        ${[["WASCHEN", "v-takt", "--d:0s;--len:2.5s"], ["TROCKNEN", "v-takt", "--d:2.4s;--len:2.5s"], ["DAMPF", "v-ein", "--d:4.8s"]]
          .map(([t, c, s]) => `<text x="100" y="25" text-anchor="middle" class="${c}" style="fill:#7ee2c4;font-size:9px;font-family:monospace;font-weight:700;letter-spacing:1px;${s}">${t}</text>`).join("")}
        <circle cx="100" cy="106" r="62" fill="url(#v-metall)"/><circle cx="100" cy="106" r="62" fill="none" stroke="#b4bec3"/>
        <circle cx="100" cy="106" r="52" fill="#3b4448"/><circle cx="100" cy="106" r="47" fill="#1c2326"/>
        <g transform="translate(100 106)">
          ${trommel(43, true, 2.6)}
          <g class="v-weg" style="--d:2.4s"><ellipse cy="27" rx="40" ry="13" fill="#4f9fd8" opacity=".5"/>
            ${[-24, -12, 0, 12, 24].map((x, i) => `<circle cx="${x}" cy="30" r="2" fill="#d6efff" class="v-dampf" style="--d:${(i * 0.35).toFixed(2)}s"/>`).join("")}</g>
          <g class="v-ein" style="--d:2.4s"><g class="v-weg" style="--d:4.8s"><circle r="46" fill="url(#v-glut-r)" opacity=".4"/>
            ${[0, 1, 2, 3, 4, 5].map(i => partikel("M0 -32 A32 32 0 1 1 -0.1 -32", 1.6, (i * 0.27).toFixed(2), 2, "luftpartikel")).join("")}</g></g>
          <g class="v-ein" style="--d:4.8s">
            <ellipse cx="-14" cy="-4" rx="14" ry="7" class="dampf" opacity=".35" filter="url(#v-blur)"/><ellipse cx="12" cy="10" rx="16" ry="8" class="dampf" opacity=".3" filter="url(#v-blur)"/>
            ${[[-20, 12], [6, -8], [22, 16], [-4, 22]].map(([x, y], i) => `<g transform="translate(${x} ${y})"><ellipse rx="9" ry="5" class="dampf v-dampf" style="--d:${(4.9 + i * 0.4).toFixed(1)}s" filter="url(#v-blur)"/></g>`).join("")}
          </g>
        </g>
        <circle cx="100" cy="106" r="47" fill="url(#v-glas)" opacity=".6"/>
        <path d="M66 86 A38 38 0 0 1 90 66" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3.5" stroke-linecap="round"/>
        <rect x="168" y="96" width="8" height="22" rx="4" fill="#cfd6da"/>
        ${zeile(204, 68, "Waschen", 0.3)}
        ${zeile(204, 100, "Trocknen", 2.6)}
        ${zeile(204, 132, "Weniger Falten", 5)}`
    },
    {
      dauer: 6, titel: "18 Uhr: gewaschen und trocken",
      text: "Du kommst heim, und die Wäsche ist fertig. Kein Wäscheständer im Wohnzimmer, kein Abnehmen.",
      svg: `${boden(152)}
        ${maschine(22, 30, 1, trommel(24, false, 3, false), anzeige("FERTIG"))}
        ${korb(176, 152, stapel.map(([f, i]) => `<g class="v-pop" style="--d:${(0.5 + i * 0.35).toFixed(2)}s"><rect x="-21" y="${-36 - i * 9}" width="42" height="10" rx="3" fill="${f}" stroke="#000" stroke-opacity=".14" stroke-width=".8"/><rect x="-21" y="${-36 - i * 9}" width="42" height="4" rx="2" fill="#fff" opacity=".3"/></g>`).join(""))}
        ${funkel(146, 92, 2, 1)}${funkel(206, 84, 2.4, 1.2)}${funkel(178, 62, 2.8, 0.9)}
        <g class="v-geh" style="--dx:-34px;--d:.3s;--len:1.6s"><g class="v-ein" style="--d:.2s"><g transform="translate(266 152) scale(1.5)">${figur(0, -14)}</g></g></g>
        ${uhr(292, 45, "18:00", 180, 0)}
        <g transform="translate(286 122)"><g class="v-pop" style="--d:2.6s"><text text-anchor="middle" class="t-gross">0 Min.</text><text y="15" text-anchor="middle" class="t-klein leise">aufhängen</text></g></g>`
    }
  ] };
})();

// ============================================================
// Akku-Staubsauger
// ============================================================
(function () {
  const boden = y => `<rect y="${y - 3}" width="320" height="4" fill="#d8cfbf"/><rect y="${y}" width="320" height="${180 - y}" fill="url(#v-holz)"/><rect y="${y}" width="320" height="${180 - y}" fill="url(#v-abdunkeln)" opacity=".25"/>`;
  // Akku-Staubsauger von der Seite, Ursprung = Düse am Boden, etwa 120 hoch
  const stab = `
      <rect x="-15" y="-9" width="32" height="9" rx="4.5" fill="#2b3338"/>
      <rect x="-13" y="-8" width="28" height="2.6" rx="1.3" fill="#3fc1a1" opacity=".85"/>
      <circle cx="-9" cy="-1" r="2" fill="#11181a"/><circle cx="11" cy="-1" r="2" fill="#11181a"/>
      <rect x="-2.2" y="-82" width="4.4" height="74" rx="2.2" fill="url(#v-metall-h)"/>
      <rect x="-7.5" y="-106" width="15" height="25" rx="5" fill="#cfe9f7" opacity=".9"/>
      <rect x="-6" y="-90" width="12" height="8" rx="3" fill="#9aa5a0" opacity=".8"/>
      <rect x="-7.5" y="-106" width="15" height="25" rx="5" fill="url(#v-glas)"/>
      <rect x="-8.5" y="-122" width="17" height="17" rx="6" fill="#2b3338"/>
      <rect x="-8.5" y="-122" width="17" height="6" rx="3" fill="#3fc1a1"/>
      <path d="M7 -120 Q23 -122 21 -104 L16 -100 Q17 -113 7 -111 Z" fill="#1c2326"/>
      <rect x="8" y="-102" width="8" height="15" rx="3" fill="#3b4448"/>`;
  // Handsauger waagerecht, Düse zeigt nach links, Ursprung = Spitze der Düse
  const hand = `
      <path d="M0 -3 L26 -6 V6 L0 3 Z" fill="#2b3338"/>
      <rect x="26" y="-10" width="30" height="20" rx="7" fill="#cfe9f7" opacity=".9"/>
      <rect x="40" y="-2" width="14" height="10" rx="3" fill="#9aa5a0" opacity=".8"/>
      <rect x="26" y="-10" width="30" height="20" rx="7" fill="url(#v-glas)"/>
      <rect x="55" y="-12" width="22" height="24" rx="8" fill="#2b3338"/><rect x="55" y="-12" width="22" height="7" rx="3.5" fill="#3fc1a1"/>
      <path d="M74 -8 Q93 -10 91 8 L85 12 Q87 0 74 2 Z" fill="#1c2326"/>
      <rect x="70" y="10" width="14" height="9" rx="3" fill="#3b4448"/>`;
  const krumen = (punkte, delays) => punkte.map(([x, y], i) =>
    `<g transform="translate(${x} ${y})"><path d="M-3 -1 C-2 -3 1 -3 2 -2 C4 -2 4 1 2 2 C0 3 -3 2 -3 -1 Z" class="dreck${delays ? " v-weg" : ""}" style="--d:${delays ? delays[i] : 0}s"/></g>`).join("");
  const halter = (x, y) => `<rect x="${x - 8}" y="${y - 10}" width="16" height="22" rx="3" fill="#2b3338" stroke="#5a6468" stroke-width=".8" filter="url(#v-sch)"/><circle cx="${x}" cy="${y + 6}" r="1.6" fill="#3fc1a1"/>`;
  // Figur, die den Sauger schräg vor sich herschiebt (Füße bei x, 146)
  const schieber = x => `<g transform="translate(${x} 146) scale(1.5)">${figur(0, -14)}</g>
      <line x1="${x + 4}" y1="94" x2="${x + 12}" y2="101" class="figur-strich" style="stroke-width:4.5"/>
      <g transform="translate(${x + 40} 146) rotate(-27) scale(.5)">${stab}</g>`;
  const steckdose = (x, y) => `<rect x="${x - 8}" y="${y - 9}" width="16" height="18" rx="3" fill="#f3f6f7" stroke="#cfd6da"/><circle cx="${x - 2.5}" cy="${y}" r="1.2" fill="#5a6468"/><circle cx="${x + 2.5}" cy="${y}" r="1.2" fill="#5a6468"/>`;
  const sofa = `<rect x="44" y="76" width="152" height="40" rx="10" fill="url(#v-leder)"/><rect x="44" y="76" width="152" height="14" rx="7" fill="#fff" opacity=".1"/>
      <rect x="36" y="108" width="168" height="30" rx="8" fill="#6e482c"/><rect x="36" y="108" width="168" height="10" rx="5" fill="#fff" opacity=".1"/>
      <rect x="30" y="92" width="20" height="50" rx="8" fill="url(#v-leder)"/><rect x="190" y="92" width="20" height="50" rx="8" fill="url(#v-leder)"/>
      <rect x="44" y="140" width="6" height="10" rx="2" fill="#3a2616"/><rect x="190" y="140" width="6" height="10" rx="2" fill="#3a2616"/>`;
  const treppe = `<path d="M30 156 V134 H72 V112 H114 V90 H156 V68 H210 V156 Z" fill="url(#v-holz)"/><path d="M30 156 V134 H72 V112 H114 V90 H156 V68 H210 V156 Z" fill="url(#v-abdunkeln)" opacity=".25"/>
      ${[[30, 134, 42], [72, 112, 42], [114, 90, 42], [156, 68, 54]].map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="4" fill="#8a6f50"/>`).join("")}`;
  const autositz = `<path d="M60 156 V92 Q60 66 86 64 H112 Q132 64 134 88 L140 118 H196 Q212 118 212 134 V156 Z" fill="#4a555a"/>
      <path d="M60 156 V92 Q60 66 86 64 H112 Q132 64 134 88 L140 118 H196 Q212 118 212 134 V156 Z" fill="url(#v-glanz)" opacity=".2"/>
      <path d="M74 82 H120 M74 100 H124 M150 130 H200" stroke="#2b3338" stroke-width="1.4" stroke-dasharray="3 2"/>
      <rect x="78" y="40" width="34" height="22" rx="8" fill="#4a555a"/>`;
  const vignette = (d, len, bild, krumenListe, handPos, letzte) => `<g class="v-takt${letzte ? " v-letzter" : ""}" style="--d:${d}s;--len:${len}s">${bild}
      ${krumen(krumenListe, krumenListe.map((_, i) => (d + 0.7 + i * 0.18).toFixed(2)))}
      <g transform="translate(${handPos[0]} ${handPos[1]})"><g class="v-wackel" style="animation-duration:.7s">${hand}</g></g></g>`;

  VIDEOS.akkusauger = { szenen: [
    {
      dauer: 7, vorher: true, titel: "Bisher: Kabel und schwerer Sauger",
      text: "Sauger aus der Kammer holen, einstecken, losziehen. Und in jedem Zimmer wieder umstecken.",
      svg: `${boden(146)}
        ${steckdose(24, 116)}
        <g class="v-weg" style="--d:1.6s"><path d="M66 138 C44 148 30 146 24 126" fill="none" stroke="#5a6468" stroke-width="2"/><rect x="19.5" y="117" width="9" height="10" rx="2" fill="#4a555a"/></g>
        <g class="v-ein" style="--d:1.6s"><path d="M66 138 C54 143 46 143 40 142" fill="none" stroke="#5a6468" stroke-width="2"/><g transform="translate(36 141) rotate(-80)"><rect x="-5" y="-4" width="10" height="9" rx="2" fill="#4a555a"/><rect x="-3" y="-8" width="1.6" height="4" fill="#8a949a"/><rect x="1.4" y="-8" width="1.6" height="4" fill="#8a949a"/></g></g>
        ${funkel(28, 112, 1.7, 0.8)}
        <g transform="translate(64 146)">
          <ellipse cx="35" cy="1" rx="40" ry="4" fill="#000" opacity=".18" filter="url(#v-blur)"/>
          <path d="M2 -4 Q0 -30 30 -32 H50 Q70 -30 70 -10 V-4 Z" fill="url(#v-rot-g)"/>
          <path d="M2 -4 Q0 -30 30 -32 H50 Q70 -30 70 -10 V-4 Z" fill="url(#v-glanz)" opacity=".35"/>
          <rect x="22" y="-38" width="24" height="7" rx="3.5" fill="#2b3338"/>
          <circle cx="15" cy="-4" r="6" fill="#1c2326"/><circle cx="15" cy="-4" r="2.4" fill="#6b767b"/>
          <circle cx="57" cy="-4" r="6" fill="#1c2326"/><circle cx="57" cy="-4" r="2.4" fill="#6b767b"/>
          <circle cx="70" cy="-18" r="5" fill="#2b3338"/>
        </g>
        <g transform="translate(196 146) scale(1.5)">${figur(0, -14)}</g>
        <path d="M134 128 C150 142 160 98 180 101" fill="none" stroke="#3b4448" stroke-width="5" stroke-linecap="round"/>
        <path d="M134 128 C150 142 160 98 180 101" fill="none" stroke="#5a6468" stroke-width="5" stroke-dasharray="1.4 2.6"/>
        <line x1="180" y1="101" x2="222" y2="141" stroke="#8a949a" stroke-width="4" stroke-linecap="round"/><line x1="180" y1="101" x2="222" y2="141" stroke="#e3e9ec" stroke-width="1.4" stroke-linecap="round"/>
        <rect x="210" y="139" width="30" height="7" rx="3" fill="#2b3338"/>
        ${blase(52, 92, "Stecker raus!", 1.8, 1.8)}
        ${blase(52, 92, "Umstecken …", 3.5, 1.5)}
        <text x="160" y="168" text-anchor="middle" class="t-klein v-hoch" style="--d:2.8s;fill:#3b2f22">In jedem Zimmer neu einstecken.</text>`
    },
    {
      dauer: 6, titel: "Von der Wand nehmen und los",
      text: "Er hängt geladen an der Wand. Du nimmst ihn, saugst ohne Kabel durch die Wohnung und hängst ihn zurück.",
      svg: `${boden(146)}
        ${halter(42, 60)}
        <g class="v-weg" style="--d:.9s"><g transform="translate(42 132) scale(.55)">${stab}</g></g>
        ${krumen([[112, 144], [134, 143], [156, 145], [178, 143], [200, 144], [222, 143], [244, 145]], [112, 134, 156, 178, 200, 222, 244].map(x => (1.1 + ((x - 98) / 150) * 3.4).toFixed(2)))}
        <g class="v-ein" style="--d:.9s"><g class="v-geh" style="--dx:150px;--d:1.1s;--len:3.4s">${schieber(58)}</g></g>
        ${blase(170, 38, "Kein Kabel", 1.3, 1.9, true)}
        ${blase(170, 38, "Kein Umstecken", 3.2, 2.4, true)}
        ${funkel(140, 134, 3.6, 0.8)}${funkel(196, 136, 4.3, 0.8)}${funkel(250, 134, 5, 0.8)}`
    },
    {
      dauer: 6, titel: "Ein Handgriff, und er ist ein Handsauger",
      text: "Rohr ab, schon saugst du Sofa, Treppe und Auto. Ganz ohne zweites Gerät.",
      svg: `<text x="160" y="22" text-anchor="middle" class="t-mittel fett">Ein Gerät für alles</text>
        ${vignette(0, 2, sofa, [[70, 106], [86, 104], [104, 106]], [62, 104], false)}
        ${vignette(1.9, 2, treppe, [[84, 110], [98, 109], [126, 88], [140, 87]], [76, 102], false)}
        ${vignette(3.8, 2.6, autositz, [[150, 116], [166, 115], [182, 116]], [146, 108], true)}
        <text x="270" y="96" text-anchor="middle" class="t-gross v-takt" style="--d:0s;--len:2s">Sofa</text>
        <text x="270" y="96" text-anchor="middle" class="t-gross v-takt" style="--d:1.9s;--len:2s">Treppe</text>
        <text x="270" y="96" text-anchor="middle" class="t-gross v-takt v-letzter" style="--d:3.8s;--len:2.6s">Auto</text>`
    },
    {
      dauer: 6, titel: "Zurück an die Wand, dort lädt er",
      text: "Den Staub leerst du über dem Mülleimer aus. Dann hängt er wieder an der Wand und lädt, bis du ihn brauchst.",
      svg: `${boden(146)}
        ${halter(54, 54)}
        <g transform="translate(54 128) scale(.55)">${stab}</g>
        <g transform="translate(86 64)"><g class="v-hoch" style="--d:.3s">
          <rect width="44" height="20" rx="4" fill="none" stroke-width="2" style="stroke:var(--ink)"/><rect x="44" y="6" width="4" height="8" rx="1" style="fill:var(--ink)"/>
          <g transform="translate(3 3)"><rect width="38" height="14" rx="2" fill="url(#v-gruen-g)" class="v-spur" style="--d:.6s;--len:2.6s"/></g>
          <path d="M24 3 L17 11 H22 L19 17 L27 8 H22 Z" fill="#fff" stroke="#1c2326" stroke-width=".6"/>
          <text x="22" y="34" text-anchor="middle" class="t-mini leise">lädt</text>
        </g></g>
        ${zeile(168, 62, "Lädt an der Wand", 0.5)}
        ${zeile(168, 94, "Ohne Staubbeutel", 1.7)}
        ${zeile(168, 126, "Immer griffbereit", 2.9)}`
    }
  ] };
})();

// ============================================================
// Reiskocher
// ============================================================
(function () {
  // Holz-Arbeitsplatte mit Vorderkante
  const platte = `<rect y="128" width="320" height="32" fill="url(#v-holz)"/><rect y="128" width="320" height="32" fill="url(#v-boden-licht)"/><rect y="158" width="320" height="22" fill="#8a6f50"/><rect y="158" width="320" height="22" fill="url(#v-abdunkeln)" opacity=".45"/>`;
  // Reiskocher von vorn, Ursprung = Mitte unten; offen = Deckel hochgeklappt, inhalt = was im Topf liegt
  const kocher = (x, y, s, { anzeige = "", knopf = "", offen = false, inhalt = "" } = {}) => `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cy="1" rx="52" ry="5" fill="#000" opacity=".18" filter="url(#v-blur)"/>
      ${offen ? `<path d="M-44 -52 Q-46 -114 0 -116 Q46 -114 44 -52 Z" fill="#aab4b8"/><path d="M-37 -57 Q-39 -106 0 -108 Q39 -106 37 -57 Z" fill="url(#v-metall)"/>` : ""}
      <path d="M-42 0 L-45 -42 Q-45 -52 -35 -53 H35 Q45 -52 45 -42 L42 0 Z" fill="#f7f9fa"/>
      <path d="M-42 0 L-45 -42 Q-45 -52 -35 -53 H35 Q45 -52 45 -42 L42 0 Z" fill="url(#v-abdunkeln-r)" opacity=".3"/>
      <path d="M-42 0 L-45 -42 Q-45 -52 -35 -53 H35 Q45 -52 45 -42 L42 0 Z" fill="none" stroke="#cfd6da"/>
      ${offen ? `<ellipse cy="-53" rx="39" ry="7.5" fill="#cfd6da"/><ellipse cy="-53" rx="35" ry="6" fill="#1c2326"/>${inhalt}`
        : `<path d="M-47 -51 Q-47 -77 0 -79 Q47 -77 47 -51 Z" fill="#3b4448"/><path d="M-36 -62 Q-20 -73 8 -74" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="3" stroke-linecap="round"/>
           <rect x="-49" y="-55" width="98" height="6" rx="3" fill="#2b3338"/><rect x="-7" y="-83" width="14" height="6" rx="3" fill="#1c2326"/>`}
      <rect x="-24" y="-41" width="48" height="28" rx="5" fill="#1c2326"/>
      <rect x="-20" y="-38" width="40" height="12" rx="2" fill="#0b0f10"/>
      ${anzeige}
      <circle cx="-12" cy="-19" r="3" fill="#3b4448"/><circle cx="0" cy="-19" r="3" fill="#3fc1a1"/><circle cx="12" cy="-19" r="3" fill="#3b4448"/>
      ${knopf}
      <rect x="-49" y="-40" width="5" height="10" rx="2" fill="#cfd6da"/><rect x="44" y="-40" width="5" height="10" rx="2" fill="#cfd6da"/>
    </g>`;
  const text = (t, cls = "", stil = "") => `<text y="-29" text-anchor="middle" class="${cls}" style="fill:#ff9a3a;font-size:8.5px;font-family:monospace;font-weight:700;${stil}">${t}</text>`;
  const koerner = (n, cx, cy, rx, ry) => Array.from({ length: n }, (_, i) => {
    const a = i * 2.39996, r = Math.sqrt((i + 0.5) / n);
    const x = cx + Math.cos(a) * r * rx, y = cy + Math.sin(a) * r * ry;
    return `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="2.1" ry="1.1" fill="#fff" stroke="#e6dcc4" stroke-width=".5" transform="rotate(${(i * 47) % 180} ${x.toFixed(1)} ${y.toFixed(1)})"/>`;
  }).join("");

  VIDEOS.reiskocher = { szenen: [
    {
      dauer: 7, vorher: true, titel: "Bisher: Reis im Topf",
      text: "Danebenstehen, damit nichts überkocht. Und manchmal brennt unten trotzdem etwas an.",
      svg: `${platte}
        <rect x="58" y="123" width="144" height="7" rx="2" fill="#151b1d"/><rect x="58" y="123" width="144" height="1.5" rx=".75" fill="#56626a"/>
        <ellipse cx="130" cy="125" rx="42" ry="5" fill="#ff6a2a" opacity=".6" filter="url(#v-blur)" class="v-gluehen-weich" style="--d:.2s"/>
        <rect x="80" y="92" width="14" height="5" rx="2.5" fill="#2b3338"/><rect x="166" y="92" width="14" height="5" rx="2.5" fill="#2b3338"/>
        <path d="M92 86 H168 V118 Q168 124 160 124 H100 Q92 124 92 118 Z" fill="url(#v-metall)"/>
        <path d="M92 86 H168 V118 Q168 124 160 124 H100 Q92 124 92 118 Z" fill="url(#v-abdunkeln-r)" opacity=".35"/>
        <g class="v-pop" style="--d:1.1s">
          ${[[100, 85, 6], [112, 83, 7], [126, 82, 7], [140, 83, 7], [154, 84, 6], [164, 86, 5]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fffdf6" stroke="#d9d1bd" stroke-width=".8"/>`).join("")}
          <path d="M93 86 Q91 100 95 106 Q97 98 98 88 Z M166 86 Q170 96 167 104 Q164 96 162 88 Z" fill="#fffdf6" stroke="#d9d1bd" stroke-width=".8"/>
        </g>
        <g transform="translate(130 84)"><g class="v-wackel" style="animation-duration:.22s"><ellipse rx="40" ry="5.5" fill="url(#v-metall)"/><ellipse rx="40" ry="5.5" fill="none" stroke="#aab4b8"/><rect x="-6" y="-9" width="12" height="5" rx="2" fill="#2b3338"/></g></g>
        ${[0, 1, 2].map(i => `<g transform="translate(${112 + i * 18} 70)"><ellipse rx="6" ry="4" class="dampf ueber-hell v-dampf" style="--d:${(0.3 + i * 0.5).toFixed(1)}s" filter="url(#v-blur)"/></g>`).join("")}
        ${blase(130, 50, "Kocht über!", 1.2, 2)}
        ${blase(130, 50, "Unten brennt es an", 3.2, 1.8)}
        <g transform="translate(270 54)"><circle r="20" class="ring-bg"/><circle r="20" pathLength="1" class="ring v-zeichne" style="--d:.2s;--len:4.3s" transform="rotate(-90)"/>
          <text y="3.5" text-anchor="middle" class="t-mittel fett" style="font-size:10px">20 Min</text><text y="33" text-anchor="middle" class="t-mini leise">auf dem Herd</text></g>
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:2.8s;fill:#f3ead9">Danach: Topf einweichen und schrubben.</text>`
    },
    {
      dauer: 7, titel: "Reis und Wasser rein, Knopf drücken",
      text: "Wie viel Wasser hinein muss, zeigen dir Striche im Topf. Dann Deckel zu und einschalten.",
      svg: `${platte}
        <g class="v-weg" style="--d:2.8s">${kocher(92, 140, 1.15, { offen: true, inhalt: `<g class="v-ein" style="--d:1s"><ellipse cy="-52" rx="31" ry="4.6" fill="#f3efe3"/></g><g class="v-ein" style="--d:2s"><ellipse cy="-53.5" rx="33" ry="5.2" fill="#4f9fd8" opacity=".55"/></g>` })}</g>
        <g class="v-ein" style="--d:2.8s">${kocher(92, 140, 1.15, { anzeige: `${text("-- --", "v-weg", "--d:3.4s")}${text("37 MIN", "v-ein", "--d:3.5s")}` })}</g>
        <g class="v-ein" style="--d:.1s"><g class="v-weg" style="--d:1.3s"><g transform="translate(66 50) rotate(38)"><path d="M-10 -12 H10 L8 10 H-8 Z" fill="#f3f6f7" stroke="#9aa5aa"/><path d="M-9 -4 H9 L8 9 H-8 Z" fill="#f3efe3"/></g></g></g>
        <g class="v-weg" style="--d:1.35s">${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<g transform="translate(${80 + (i % 4) * 5} ${76 + (i % 3) * 2})"><g class="v-fall" style="--d:${(0.3 + i * 0.1).toFixed(1)}s"><ellipse rx="2" ry="1.1" fill="#fff" stroke="#e6dcc4" stroke-width=".5"/></g></g>`).join("")}</g>
        <g class="v-ein" style="--d:1.4s"><g class="v-weg" style="--d:2.4s"><g transform="translate(36 44) rotate(28)"><path d="M-12 -14 H10 V14 Q10 18 6 18 H-8 Q-12 18 -12 14 Z" class="kanne"/><path d="M10 -10 L18 -16" class="kanne"/><rect x="-11" y="2" width="20" height="14" rx="2" fill="#4f9fd8" opacity=".5"/></g>
          <path d="M54 34 Q66 44 82 76" fill="none" stroke="#4f9fd8" stroke-width="3" stroke-linecap="round" opacity=".8"/></g></g>
        <g transform="translate(92 118)"><circle r="8" class="tipp v-tipp" style="--d:3.2s"/></g>
        ${zeile(176, 50, "Reis rein", 0.4)}
        ${zeile(176, 79, "Wasser dazu", 1.6)}
        ${zeile(176, 108, "Knopf drücken", 3.3)}`
    },
    {
      dauer: 7, titel: "Er kocht und hält dann warm",
      text: "Mit der richtigen Wassermenge kocht nichts über, und nichts brennt an. Ist das Wasser aufgesogen, schaltet er selbstständig aufs Warmhalten.",
      svg: `${platte}
        ${kocher(96, 140, 1.2, {
          anzeige: `${text("KOCHEN", "v-takt", "--d:0s;--len:3.7s")}${text("WARM", "v-ein", "--d:3.6s")}`,
          knopf: `<circle cx="0" cy="-19" r="3" fill="#ff9a3a" class="v-ein" style="--d:3.6s"/>`
        })}
        <g class="v-weg" style="--d:3.6s">${[0, 1, 2, 3].map(i => `<g transform="translate(${92 + (i % 2) * 8} 36)"><ellipse rx="7" ry="4.5" class="dampf ueber-hell v-dampf" style="--d:${(i * 0.5).toFixed(1)}s" filter="url(#v-blur)"/></g>`).join("")}</g>
        <g class="v-ein" style="--d:3.6s"><g transform="translate(96 36)"><ellipse rx="5" ry="3" class="dampf ueber-hell v-dampf" style="--d:3.8s;animation-duration:3s" filter="url(#v-blur)"/></g></g>
        ${zeile(184, 50, "Kocht nicht über", 0.5)}
        ${zeile(184, 79, "Brennt nicht an", 1.8)}
        ${zeile(184, 108, "Hält dann warm", 3.7)}`
    },
    {
      dauer: 7, titel: "Locker gegarter Reis",
      text: "Ein gutes Gerät gart den Reis gleichmäßig. Unten bildet sich höchstens eine dünne, helle Kruste. Den Topf spülst du danach kurz aus.",
      svg: `${platte}
        <ellipse cx="110" cy="131" rx="44" ry="5" fill="#000" opacity=".15" filter="url(#v-blur)"/>
        <path d="M70 100 Q72 128 110 130 Q148 128 150 100 Z" fill="url(#v-keramik)"/>
        <path d="M70 100 Q72 128 110 130 Q148 128 150 100 Z" fill="url(#v-abdunkeln-r)" opacity=".3"/>
        <path d="M76 112 Q110 121 144 112" fill="none" stroke="#2d8ec7" stroke-width="2" opacity=".6"/>
        <ellipse cx="110" cy="100" rx="40" ry="7" fill="#f3f6f7"/>
        <path d="M74 100 Q77 76 110 74 Q143 76 146 100 Z" fill="#fbf8ef"/>
        ${koerner(46, 110, 89, 30, 13)}
        <line x1="128" y1="62" x2="178" y2="94" stroke="#8a6f50" stroke-width="2.6" stroke-linecap="round"/><line x1="134" y1="58" x2="182" y2="90" stroke="#a5835e" stroke-width="2.6" stroke-linecap="round"/>
        ${[0, 1, 2].map(i => `<g transform="translate(${98 + i * 12} 66)"><ellipse rx="6" ry="4" class="dampf ueber-hell v-dampf" style="--d:${(0.2 + i * 0.6).toFixed(1)}s" filter="url(#v-blur)"/></g>`).join("")}
        ${funkel(66, 80, 0.6, 1)}${funkel(152, 70, 1.1, 0.9)}${funkel(156, 110, 1.6, 0.8)}
        <path d="M208 98 Q210 124 240 126 Q270 124 272 98 Z" fill="#2b3338"/><ellipse cx="240" cy="98" rx="32" ry="6" fill="url(#v-metall)"/><ellipse cx="240" cy="98" rx="28" ry="4.5" fill="#1c2326"/>
        <rect x="232" y="30" width="16" height="8" rx="3" fill="url(#v-metall)"/><rect x="236" y="38" width="8" height="6" fill="url(#v-metall-h)"/>
        ${[0, 1, 2, 3].map(i => `<g transform="translate(${236 + (i % 2) * 8} 52)"><ellipse rx="1.8" ry="3" class="tropfen v-tropf" style="--d:${(0.8 + i * 0.25).toFixed(2)}s;animation-duration:.8s"/></g>`).join("")}
        <text x="240" y="146" text-anchor="middle" class="t-klein v-hoch" style="--d:1.6s;fill:#3b2f22">Kurz ausspülen, fertig</text>
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:2.6s;fill:#f3ead9">Locker, und nichts brennt an.</text>`
    }
  ] };
})();

// Welche Szene als Standbild in der Übersicht gezeigt wird (gezählt ab 0)
// ============================================================
// Smarte Heizkörper-Thermostate (Figur: Frau)
// ============================================================
(function () {
  const boden = y => `<rect y="${y - 3}" width="320" height="4" fill="#d8cfbf"/><rect y="${y}" width="320" height="${180 - y}" fill="url(#v-holz)"/><rect y="${y}" width="320" height="${180 - y}" fill="url(#v-abdunkeln)" opacity=".25"/>`;
  // Fenster über dem Heizkörper
  const fenster = `<rect x="38" y="24" width="84" height="64" rx="3" fill="#f7f9fa" filter="url(#v-sch)"/>
    <rect x="43" y="29" width="74" height="54" rx="1.5" fill="#cfe6f5"/><rect x="43" y="29" width="74" height="54" rx="1.5" fill="url(#v-glas)"/>
    <rect x="78.5" y="29" width="3" height="54" fill="#f7f9fa"/><rect x="43" y="54" width="74" height="3" fill="#f7f9fa"/>
    <rect x="34" y="86" width="92" height="5" rx="2" fill="#e9eef1"/>`;
  // Heizkörper (Rippen), rechts das Ventil mit dem Thermostat
  const heizkoerper = (x, y, w, h) => `<g transform="translate(${x} ${y})">
      <ellipse cx="${w / 2}" cy="${h + 9}" rx="${w / 2 + 6}" ry="3" fill="#000" opacity=".12" filter="url(#v-blur)"/>
      <rect x="6" y="${h - 2}" width="4" height="11" fill="#c6ced2"/><rect x="${w - 10}" y="${h - 2}" width="4" height="11" fill="#c6ced2"/>
      <rect width="${w}" height="${h}" rx="3" fill="#f4f6f7" stroke="#cfd6da"/>
      ${Array.from({ length: Math.floor(w / 7) - 1 }, (_, i) => `<line x1="${7 + i * 7}" y1="3" x2="${7 + i * 7}" y2="${h - 3}" stroke="#d6dde0" stroke-width="1.6"/>`).join("")}
      <rect width="${w}" height="${h / 2}" rx="3" fill="url(#v-glanz)" opacity=".5"/>
      <rect x="${w}" y="${h - 9}" width="6" height="5" fill="#c6ced2"/>
      <rect x="${w + 5}" y="${h - 20}" width="11" height="19" rx="3" fill="#f7f9fa" stroke="#cfd6da"/>
      <rect x="${w + 7}" y="${h - 17}" width="7" height="4.5" rx="1" fill="#151b1d"/>
    </g>`;
  // Wärme, die vom Heizkörper aufsteigt
  const waerme = (x, y, w, d = 0) => [0, 1, 2, 3].map(i => `<g transform="translate(${x + 8 + i * ((w - 16) / 3)} ${y})"><path d="M0 0 q3 -4 0 -8 q-3 -4 0 -8" fill="none" stroke="#ff9a3a" stroke-width="2" stroke-linecap="round" class="v-dampf" style="--d:${(d + i * 0.4).toFixed(1)}s;animation-duration:1.8s"/></g>`).join("");
  // Lupe auf das Thermostat: großes Display mit Temperatur. temps = [[text, farbe, klasse, stil], …]
  const lupe = (x, y, temps, label) => `<line x1="${x - 18}" y1="${y + 20}" x2="128" y2="120" stroke="#9aa5aa" stroke-width="1" stroke-dasharray="2 2"/>
    <g transform="translate(${x} ${y})">
      <circle r="27" fill="#f7f9fa" stroke="#cfd6da" stroke-width="2" filter="url(#v-sch)"/>
      <rect x="-19" y="-13" width="38" height="24" rx="4" fill="#151b1d"/>
      ${temps.map(([text, farbe, cls, stil]) => `<text y="5.5" text-anchor="middle" class="${cls}" style="fill:${farbe};font-size:15px;font-family:monospace;font-weight:700;${stil}">${text}</text>`).join("")}
      <text y="40" text-anchor="middle" class="t-mini leise">${label}</text>
    </g>`;
  const WARM = "#ffb060", SPAR = "#7ee2c4";
  const sofa = `<ellipse cx="196" cy="151" rx="48" ry="3.5" fill="#000" opacity=".14" filter="url(#v-blur)"/>
    <rect x="156" y="140" width="4" height="9" rx="1.5" fill="#3a2616"/><rect x="232" y="140" width="4" height="9" rx="1.5" fill="#3a2616"/>
    <rect x="160" y="104" width="72" height="24" rx="8" fill="url(#v-leder)"/><rect x="160" y="104" width="72" height="10" rx="5" fill="#fff" opacity=".12"/>
    <rect x="154" y="122" width="84" height="20" rx="6" fill="#6e482c"/>
    <rect x="150" y="114" width="12" height="30" rx="6" fill="url(#v-leder)"/><rect x="230" y="114" width="12" height="30" rx="6" fill="url(#v-leder)"/>`;
  const tuer = `<rect x="262" y="60" width="40" height="92" rx="2" fill="#d8cfbf"/>
    <rect x="266" y="64" width="32" height="88" fill="url(#v-holz)"/><rect x="266" y="64" width="32" height="88" fill="url(#v-abdunkeln-r)" opacity=".25"/>
    <circle cx="271" cy="110" r="2.2" fill="#8a949a"/>`;
  const raum = `${boden(152)}${fenster}${heizkoerper(44, 100, 72, 40)}${sofa}${tuer}`;
  // Eine Euro-Münze, die nach oben davonschwebt
  const muenze = (x, y, d) => `<g transform="translate(${x} ${y})"><g class="v-saug" style="--d:${d}s;animation-duration:2.4s"><circle r="6.5" fill="url(#v-gold-g)" stroke="#b8860b" stroke-width=".8"/><text y="3" text-anchor="middle" style="font-size:8px;font-weight:800;fill:#7a4d0a">€</text></g></g>`;
  // Alter Drehregler mit Zahlen (von der Seite)
  const drehregler = `<rect width="34" height="30" rx="6" fill="#f7f9fa" stroke="#cfd6da"/>
    ${[6, 12, 18, 24, 30].map(x => `<line x1="${x - 2}" y1="3" x2="${x - 2}" y2="27" stroke="#dde3e6" stroke-width="1.6"/>`).join("")}
    <text x="17" y="19" text-anchor="middle" style="font-size:9px;font-weight:700;fill:#5a6468">3</text>`;
  // Smartes Thermostat (von der Seite) mit Display
  const smart = temp => `<rect width="40" height="36" rx="8" fill="#f7f9fa" stroke="#cfd6da"/><rect width="40" height="18" rx="8" fill="url(#v-glanz)" opacity=".6"/>
    <rect x="8" y="9" width="24" height="15" rx="3" fill="#151b1d"/>
    <text x="20" y="20" text-anchor="middle" style="fill:${WARM};font-size:9.5px;font-family:monospace;font-weight:700">${temp}</text>`;

  VIDEOS.thermostate = { szenen: [
    {
      dauer: 7, vorher: true, titel: "Bisher: Geheizt, obwohl niemand da ist",
      text: "Du bist bei der Arbeit, und die Heizung läuft trotzdem den ganzen Tag. Oder du hast vergessen, sie runterzudrehen.",
      svg: `${raum}
        ${waerme(44, 94, 72)}
        ${muenze(60, 96, 0.6)}${muenze(84, 92, 1.4)}${muenze(104, 96, 2.2)}
        ${lupe(170, 50, [["21°", WARM, "", ""]], "läuft den ganzen Tag")}
        <g transform="translate(226 40)"><circle r="20" class="ring-bg"/><circle r="20" pathLength="1" class="ring v-zeichne" style="--d:.3s;--len:4.6s" transform="rotate(-90)"/>
          <text y="4" text-anchor="middle" class="t-mittel fett">9 Std.</text><text y="33" text-anchor="middle" class="t-mini leise">niemand da</text></g>
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:2.4s;fill:#3b2f22">Heizkosten für eine leere Wohnung.</text>`
    },
    {
      dauer: 6, titel: "Du gehst, das Thermostat dreht runter",
      text: "Im Heizplan steht, wann du aus dem Haus gehst. Dann dreht das Thermostat selbstständig auf 17 Grad. Vergessen kannst du es nicht mehr.",
      svg: `${raum}
        <g class="v-weg" style="--d:2.6s">${waerme(44, 94, 72)}</g>
        ${lupe(170, 50, [["21°", WARM, "v-weg", "--d:2.4s"], ["17°", SPAR, "v-ein", "--d:2.5s"]], "Heizplan: Sparen")}
        ${uhr(226, 36, "7:30", 225, 180)}
        <g class="v-geh" style="--dx:46px;--d:.5s;--len:1.6s"><g class="v-weg" style="--d:2.1s"><g transform="translate(238 152) scale(1.5)">${figurFrau(0, -14)}</g></g></g>
        ${blase(82, 14, "Spart Heizkosten", 3.2, 2.8, true)}`
    },
    {
      dauer: 7, titel: "Kurz vor Feierabend wird es warm",
      text: "Kurz bevor du heimkommst, heizt das Thermostat wieder auf. Du kommst jeden Tag in eine warme Wohnung.",
      svg: `${raum}
        <rect width="320" height="180" fill="#ff9a3a" opacity=".07" class="v-ein" style="--d:1.6s;animation-duration:1.6s"/>
        <g class="v-ein" style="--d:1.4s">${waerme(44, 94, 72, 1.4)}</g>
        ${lupe(170, 50, [["17°", SPAR, "v-weg", "--d:1.1s"], ["21°", WARM, "v-ein", "--d:1.2s"]], "Heizplan: Warm")}
        <g class="v-weg" style="--d:3.4s">${uhr(226, 36, "17:00", 150, 0)}</g>
        <g class="v-ein" style="--d:3.5s">${uhr(226, 36, "17:30", 165, 180)}</g>
        <g class="v-geh" style="--dx:-44px;--d:3.7s;--len:1.4s"><g class="v-ein" style="--d:3.6s"><g transform="translate(284 152) scale(1.5)">${figurFrau(0, -14)}</g></g></g>
        ${blase(82, 14, "Schön warm", 5.2, 1.9, true)}`
    },
    {
      dauer: 7, titel: "Einmal einstellen: dein Heizplan",
      text: "In der App legst du fest, wann es warm sein soll, für jeden Tag und jeden Raum. Danach musst du nichts mehr tun.",
      svg: `<ellipse cx="88" cy="170" rx="48" ry="4" fill="#000" opacity=".14" filter="url(#v-blur)"/>
        <rect x="34" y="8" width="108" height="160" rx="14" class="phone" filter="url(#v-sch)"/>
        <rect x="40" y="16" width="96" height="144" rx="9" class="screen"/>
        <text x="50" y="34" class="t-klein fett">Heizplan</text>
        <text x="50" y="46" class="t-mini leise">Wohnzimmer</text>
        ${["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((tag, i) => {
          const y = 56 + i * 13, we = i > 4;
          // Warme Zeiten (in Stunden): werktags morgens und abends, am Wochenende den ganzen Tag
          const bloecke = we ? [[8, 23]] : [[6, 8], [17, 23]];
          return `<text x="50" y="${y + 7}" class="t-mini">${tag}</text>
            <rect x="66" y="${y}" width="62" height="8" rx="4" class="balken-bg"/>
            ${bloecke.map(([a, b]) => `<rect x="${(66 + a * 62 / 24).toFixed(1)}" y="${y}" width="${((b - a) * 62 / 24).toFixed(1)}" height="8" rx="3" fill="#ff9a3a" class="v-spur" style="--d:${(0.4 + i * 0.25).toFixed(2)}s;--len:.5s"/>`).join("")}`;
        }).join("")}
        <text x="66" y="156" class="t-mini leise">0</text><text x="97" y="156" text-anchor="middle" class="t-mini leise">12</text><text x="128" y="156" text-anchor="end" class="t-mini leise">24</text>
        ${zeile(166, 62, "Morgens warm", 2.3)}
        ${zeile(166, 94, "Tagsüber sparen", 2.9)}
        ${zeile(166, 126, "Abends warm", 3.5)}`
    },
    {
      dauer: 7, titel: "In ein paar Minuten selbst montiert",
      text: "Alten Drehregler abschrauben, das Thermostat aufschrauben, fertig. Kein Wasser ablassen, kein Handwerker. Beim Auszug schraubst du den alten Regler wieder dran.",
      svg: `${boden(152)}
        <g transform="translate(24 78)">
          <ellipse cx="70" cy="74" rx="76" ry="3.5" fill="#000" opacity=".12" filter="url(#v-blur)"/>
          <rect x="10" y="60" width="5" height="14" fill="#c6ced2"/><rect x="125" y="60" width="5" height="14" fill="#c6ced2"/>
          <rect width="140" height="64" rx="4" fill="#f4f6f7" stroke="#cfd6da"/>
          ${Array.from({ length: 19 }, (_, i) => `<line x1="${7 + i * 7}" y1="4" x2="${7 + i * 7}" y2="60" stroke="#d6dde0" stroke-width="1.8"/>`).join("")}
          <rect width="140" height="32" rx="4" fill="url(#v-glanz)" opacity=".5"/>
          <rect x="140" y="44" width="16" height="10" fill="#c6ced2"/>
          <rect x="154" y="38" width="12" height="22" rx="2" fill="url(#v-metall)" stroke="#b4bec3"/>
        </g>
        <g transform="translate(190 112)"><g class="v-geh" style="--dx:56px;--dy:-58px;--d:.7s;--len:1s"><g class="v-weg" style="--d:1.6s">${drehregler}</g></g></g>
        <g transform="translate(190 108)"><g class="v-fall" style="--d:2.1s">${smart("21°")}</g></g>
        ${haken(244, 112, 3)}
        ${zeile(20, 22, "Alten Regler abschrauben", 0.4, "t-klein")}
        ${zeile(20, 44, "Thermostat aufschrauben", 2.1, "t-klein")}
        ${zeile(20, 66, "Kein Handwerker nötig", 3.3, "t-klein")}`
    },
    {
      dauer: 6, titel: "Rund 10 Prozent weniger Heizkosten",
      text: "So viel spart ein Heizplan laut co2online. Je öfter du weg bist, desto mehr.",
      svg: `<text x="30" y="30" class="t-mittel fett">Deine Heizkosten im Jahr</text>
        <text x="30" y="46" class="t-klein leise">im Schnitt</text>
        ${balken(30, 60, "Ohne Heizplan", 220, "100 %", 0.3, 1.2, true)}
        ${balken(30, 106, "Mit Heizplan", 198, "90 %", 1.3, 1.1, false)}
        <text x="30" y="166" class="t-klein leise v-hoch" style="--d:2.6s">Je öfter du weg bist, desto mehr sparst du.</text>`
    }
  ] };
})();

// ============================================================
// Elektrische Zahnbürste
// ============================================================
(function () {
  // Bad von vorn: Fliesen, Spiegel, Waschbecken
  const bad = `
    <rect width="320" height="180" class="bad-wand"/>${fliesen(0, 112, 320, 70, 17)}
    <rect x="34" y="18" width="104" height="80" rx="7" fill="url(#v-metall)" filter="url(#v-sch)"/>
    <rect x="38" y="22" width="96" height="72" rx="5" fill="#cfe0e8"/>
    <path d="M46 22 H62 L40 56 V40 Z M70 22 H77 L44 76 H38 V70 Z" fill="#fff" opacity=".45"/>
    <rect x="22" y="122" width="128" height="7" rx="2" fill="url(#v-keramik)" filter="url(#v-sch)"/>
    <path d="M46 122 Q48 108 86 108 Q124 108 126 122 Z" fill="url(#v-keramik)" stroke="#c9d0d4" stroke-width=".8"/>
    <path d="M92 122 V106 Q92 101 87 101 H82" fill="none" stroke="#aeb8bd" stroke-width="3" stroke-linecap="round"/>
    <rect x="30" y="111" width="9" height="11" rx="2" fill="url(#v-blau-g)"/>`;
  // Zahnreihe von nah: oben und unten Zähne, dazwischen der Mund
  const xs = [44, 76, 108, 140, 172, 204, 236, 268];
  const zaehne = `
    <rect width="320" height="180" fill="#5a2430"/>
    <path d="M0 0 H320 V52 Q160 62 0 52 Z" fill="#e58b96"/><path d="M0 180 H320 V136 Q160 126 0 136 Z" fill="#e58b96"/>
    ${xs.map(x => `<rect x="${x - 14}" y="44" width="28" height="44" rx="9" fill="url(#v-keramik)"/><rect x="${x - 11}" y="48" width="9" height="30" rx="4" fill="#fff" opacity=".55"/>`).join("")}
    ${xs.map(x => `<rect x="${x - 14}" y="100" width="28" height="42" rx="9" fill="url(#v-keramik)"/>`).join("")}`;
  const belag = xs.map((x, i) => `<g transform="translate(${x} ${58 + (i % 2) * 6})"><ellipse rx="${7 + (i % 3)}" ry="4" fill="#e3c76a" opacity=".85" class="v-weg" style="--d:${(0.3 + (x - 44) / 224 * 4.6).toFixed(2)}s"/></g>`).join("");
  // Elektrische Zahnbürste von der Seite, Kopf links; vibriert = schnelles Zittern
  const buerste = (licht = "") => `
    <g filter="url(#v-sch)">
      <rect x="10" y="-7" width="150" height="14" rx="7" fill="url(#v-metall-h)"/><rect x="10" y="-7" width="150" height="7" rx="7" fill="url(#v-glanz)"/>
      <rect x="-6" y="-4" width="20" height="8" rx="4" fill="url(#v-metall)"/>
      <rect x="-22" y="-10" width="18" height="20" rx="6" fill="#f7f9fa"/>
      ${[-18, -14, -10, -6].map(x => `<line x1="${x}" y1="-10" x2="${x}" y2="-16" stroke="#7cc8ff" stroke-width="2.4" stroke-linecap="round"/>`).join("")}
      <circle cx="70" cy="0" r="3.2" fill="#3b4448"/>
    </g>${licht}`;

  VIDEOS.zahnbuerste = { szenen: [
    {
      dauer: 6, vorher: true, titel: "Bisher: Putzen von Hand",
      text: "Hin und her schrubben, mal zu fest, mal zu kurz. Ob die zwei Minuten um sind, weißt du meist nicht.",
      svg: `${bad}
        <g transform="translate(214 170) scale(2.2)">${figur(0, -14)}</g>
        <line x1="203" y1="98" x2="193" y2="83" class="figur-strich"/>
        <g transform="translate(192 80)"><g class="v-wackel" style="animation-duration:.2s"><rect x="0" y="-2.5" width="27" height="5" rx="2.5" fill="url(#v-blau-g)"/><rect x="21" y="-7.5" width="7" height="5" rx="1.5" fill="#fff" stroke="#c9d0d4" stroke-width=".6"/></g></g>
        <g transform="translate(282 64)"><circle r="18" class="ring-bg"/><text y="4" text-anchor="middle" class="t-mittel fett">?</text><text y="32" text-anchor="middle" class="t-mini leise">2 Min?</text></g>
        ${blase(118, 146, "Zu fest? Zu kurz?", 1.4, 3.6)}`
    },
    {
      dauer: 7, titel: "Sie putzt für dich",
      text: "Der Bürstenkopf bewegt sich selbstständig. Du führst die Bürste nur langsam von Zahn zu Zahn.",
      svg: `${zaehne}${belag}
        ${funkel(76, 60, 2, 1)}${funkel(172, 66, 3.2, 1.1)}${funkel(268, 60, 4.8, 1)}
        <g><animateTransform attributeName="transform" type="translate" values="56 70;282 70" keyTimes="0;1" dur="5s" fill="freeze"/>
          <g>${buerste()}<animateTransform attributeName="transform" type="translate" values="0 -1.4;0 1.4;0 -1.4" dur=".09s" repeatCount="indefinite"/></g></g>
        ${blase(160, 158, "Bewegt sich selbstständig", 0.4, 2.8, true)}
        ${blase(160, 158, "Du führst sie nur", 3.4, 3.2, true)}`
    },
    {
      dauer: 6, titel: "Zu fest gedrückt? Sie merkt es",
      text: "Gute Modelle haben einen Drucksensor. Drückst du zu fest, warnen sie dich oder putzen sanfter.",
      svg: `<rect width="320" height="180" fill="#5a2430"/>
        <path d="M0 0 H88 Q76 90 88 180 H0 Z" fill="#e58b96"/>
        <rect x="28" y="40" width="46" height="58" rx="12" fill="url(#v-keramik)"/><rect x="28" y="104" width="46" height="56" rx="12" fill="url(#v-keramik)"/>
        <g transform="translate(93 101)"><g class="v-weg" style="--d:3s">${buerste(`<circle cx="70" cy="0" r="7" fill="none" stroke="#e86b5a" stroke-width="3"/>`)}</g></g>
        <g transform="translate(99 101)"><g class="v-ein" style="--d:3s">${buerste(`<circle cx="70" cy="0" r="7" fill="none" stroke="#3fc1a1" stroke-width="3"/>`)}</g></g>
        <g class="v-weg" style="--d:3s"><path d="M236 74 H196 M208 64 L196 74 L208 84" fill="none" stroke="#e86b5a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
        ${blase(210, 40, "Zu fest!", 0.5, 2.4)}
        ${blase(210, 40, "So ist es richtig", 3.3, 2.6, true)}`
    },
    {
      dauer: 7, titel: "Sie zählt die zwei Minuten mit",
      text: "Ein Timer zeigt dir, wann zwei Minuten um sind. Viele Modelle geben alle 30 Sekunden ein Zeichen, dann wechselst du die Seite.",
      svg: `<rect width="320" height="180" class="bad-wand"/>
        <g transform="translate(96 88)"><circle r="44" class="ring-bg"/>
          ${[0, 1, 2, 3].map(k => {
            const a0 = (-90 + 90 * k + 4) * Math.PI / 180, a1 = (-90 + 90 * (k + 1) - 4) * Math.PI / 180;
            return `<path d="M${(44 * Math.cos(a0)).toFixed(1)} ${(44 * Math.sin(a0)).toFixed(1)} A44 44 0 0 1 ${(44 * Math.cos(a1)).toFixed(1)} ${(44 * Math.sin(a1)).toFixed(1)}" pathLength="1" class="ring v-zeichne" style="--d:${(0.3 + k * 0.85).toFixed(2)}s;--len:0.8s"/>`;
          }).join("")}
          <text y="6" text-anchor="middle" class="t-gross fett v-ein" style="--d:3.7s">2:00</text></g>
        ${zeile(176, 62, "Alle 30 s ein Zeichen", 0.5)}
        ${zeile(176, 96, "Seite wechseln", 1.6)}
        ${zeile(176, 130, "Nach 2 Min fertig", 3.6)}`
    },
    {
      dauer: 7, titel: "Sauberer als von Hand",
      text: "Eine große Auswertung von 51 Studien (Cochrane) zeigt: Nach drei Monaten haben Menschen mit elektrischer Zahnbürste 21 % weniger Zahnbelag.",
      svg: `<text x="30" y="34" class="t-mittel fett">Zahnbelag nach drei Monaten</text>
        ${balken(30, 58, "Mit der Handzahnbürste", 200, "100 %", 0.3, 1.2, true)}
        ${balken(30, 110, "Mit der elektrischen", 158, "21 % weniger", 1.2, 0.8, false)}
        ${funkel(284, 60, 2.4, 1.3)}${funkel(300, 100, 2.9, 1)}
        <text x="30" y="168" class="t-klein leise v-hoch" style="--d:2.4s">Quelle: Cochrane, 51 Studien</text>`
    }
  ] };
})();

// ============================================================
// Küchenmaschine mit Kochfunktion (Figur: Frau)
// ============================================================
(function () {
  // Holz-Arbeitsplatte mit Vorderkante; breite = wie weit sie nach rechts reicht
  const platte = (breite = 320) => `<rect y="128" width="${breite}" height="32" fill="url(#v-holz)"/><rect y="128" width="${breite}" height="32" fill="url(#v-boden-licht)"/><rect y="158" width="${breite}" height="22" fill="#8a6f50"/><rect y="158" width="${breite}" height="22" fill="url(#v-abdunkeln)" opacity=".45"/>`;
  // Anzeige der Maschine (orange Schrift auf schwarz)
  const text = (t, cls = "", stil = "") => `<text y="-28" text-anchor="middle" class="${cls}" style="fill:#ff9a3a;font-size:8.5px;font-family:monospace;font-weight:700;${stil}">${t}</text>`;
  // Küchenmaschine mit Kochfunktion von vorn, Ursprung = Mitte unten.
  // offen = ohne Deckel (inhalt liegt dann oben im Topf), fenster = Blick in den Topf (Messer und Suppe)
  const maschine = (x, y, s, { anzeige = "", offen = false, inhalt = "", fenster = "" } = {}) => `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cy="1" rx="46" ry="4.5" fill="#000" opacity=".18" filter="url(#v-blur)"/>
      <path d="M-40 0 L-37 -39 Q-36 -46 -29 -46 H29 Q36 -46 37 -39 L40 0 Z" fill="#f7f9fa"/>
      <path d="M-40 0 L-37 -39 Q-36 -46 -29 -46 H29 Q36 -46 37 -39 L40 0 Z" fill="url(#v-abdunkeln-r)" opacity=".3"/>
      <path d="M-40 0 L-37 -39 Q-36 -46 -29 -46 H29 Q36 -46 37 -39 L40 0 Z" fill="none" stroke="#cfd6da"/>
      <rect x="-21" y="-39" width="42" height="15" rx="3" fill="#0b0f10"/>
      ${anzeige}
      <circle cy="-12" r="7.5" fill="#dde3e6" stroke="#aab4b8"/><circle cy="-12" r="4.6" fill="#f7f9fa"/><rect x="-.8" y="-17" width="1.6" height="4" rx=".8" fill="#8a949a"/>
      <path d="M26 -84 Q42 -82 41 -66 Q40 -53 25 -53" fill="none" stroke="#3b4448" stroke-width="5" stroke-linecap="round"/>
      <path d="M-24 -46 L-28 -88 H28 L24 -46 Z" fill="url(#v-metall)"/>
      <path d="M-24 -46 L-28 -88 H28 L24 -46 Z" fill="url(#v-abdunkeln-r)" opacity=".35"/>
      ${fenster}
      ${offen ? `<ellipse cy="-88" rx="28" ry="4.5" fill="#cfd6da"/><ellipse cy="-88" rx="25" ry="3.4" fill="#1c2326"/>${inhalt}`
        : `<rect x="-31" y="-94" width="62" height="7" rx="3" fill="#3b4448"/><rect x="-6" y="-100" width="12" height="7" rx="2" fill="#2b3338"/>`}
    </g>`;
  // Stückchen, die im Topf mitkreisen (Farbe direkt, partikel() setzt sonst nur eine Klasse)
  const stueck = (pfad, dauer, begin, r, farbe) => partikel(pfad, dauer, begin, r, "").replace('class=""', `style="fill:${farbe}"`);
  // Blick in den Topf: Suppe, kreisende Stückchen und das Messer, das sich dreht
  const fenster = `<rect x="-16" y="-82" width="32" height="30" rx="6" fill="#1c2326"/>
      <rect x="-14" y="-74" width="28" height="20" rx="4" fill="#e9a23b"/>
      <rect x="-14" y="-74" width="28" height="7" rx="3" fill="#fff" opacity=".18"/>
      ${stueck("M-10 -66 A10 4 0 1 0 10 -66 A10 4 0 1 0 -10 -66", 0.9, 0, 1.8, "#3f8f4a")}
      ${stueck("M10 -63 A10 4 0 1 0 -10 -63 A10 4 0 1 0 10 -63", 0.9, 0.3, 1.6, "#f3e6c4")}
      ${stueck("M-8 -69 A8 3 0 1 0 8 -69 A8 3 0 1 0 -8 -69", 0.8, 0.5, 1.4, "#e2641f")}
      <g transform="translate(0 -58)"><path d="M-11 0 L0 -1.6 L11 0 L0 1.6 Z" fill="#dde3e6" stroke="#8a949a" stroke-width=".5"><animateTransform attributeName="transform" type="scale" values="1 1;.15 1;1 1" dur=".22s" repeatCount="indefinite"/></path><rect x="-1.4" y="0" width="2.8" height="4" fill="#8a949a"/></g>
      <rect x="-16" y="-82" width="32" height="30" rx="6" fill="url(#v-glas)"/>`;
  // Spüle in der Arbeitsplatte mit Wasserhahn; inhalt = was darin steht
  const spuele = (x, inhalt = "", tropfen = false) => `<g transform="translate(${x} 0)">
      <rect x="0" y="129" width="96" height="9" rx="3" fill="#aab4b8"/><rect x="4" y="130.5" width="88" height="6" rx="2" fill="#5a6468"/>
      ${inhalt}
      <rect x="44" y="96" width="8" height="34" rx="3" fill="url(#v-metall-h)"/><path d="M48 98 Q48 84 62 84 H70 V91 H62 Q55 91 55 98" fill="url(#v-metall)" stroke="#aab4b8" stroke-width=".6"/>
      ${tropfen ? [0, 1].map(i => `<g transform="translate(66 96)"><ellipse rx="1.6" ry="2.6" class="tropfen v-tropf" style="--d:${(0.6 + i * 0.5).toFixed(1)}s;animation-duration:1s"/></g>`).join("") : ""}
    </g>`;
  // Topf von vorn (Ursprung Mitte unten)
  const topf = (x, y, s, schmutz = false) => `<g transform="translate(${x} ${y}) scale(${s})">
      <rect x="-31" y="-28" width="7" height="4" rx="2" fill="#2b3338"/><rect x="24" y="-28" width="7" height="4" rx="2" fill="#2b3338"/>
      <path d="M-25 -30 H25 V-4 Q25 0 21 0 H-21 Q-25 0 -25 -4 Z" fill="url(#v-metall)"/><path d="M-25 -30 H25 V-4 Q25 0 21 0 H-21 Q-25 0 -25 -4 Z" fill="url(#v-abdunkeln-r)" opacity=".35"/>
      <ellipse cy="-30" rx="25" ry="3.5" fill="#aab4b8"/>
      ${schmutz ? `<path d="M-18 -26 Q-10 -20 -14 -12 M6 -24 Q14 -18 10 -10" fill="none" stroke="#9a6a46" stroke-width="2.4" stroke-linecap="round" opacity=".75"/>` : ""}
    </g>`;
  // Schneidebrett mit Messer; schraeg = schräg in die Spüle gestellt
  const brett = (x, y, drehung = 0) => `<g transform="translate(${x} ${y}) rotate(${drehung})">
      <rect x="-26" y="-4" width="52" height="7" rx="3" fill="#c49a6c"/><rect x="-26" y="-4" width="52" height="3" rx="1.5" fill="#dcc7a8"/><circle cx="21" cy="-.5" r="1.6" fill="#8a6f50"/>
    </g>`;
  const messer = (x, y, drehung = 0) => `<g transform="translate(${x} ${y}) rotate(${drehung})"><path d="M0 -1.6 H18 Q22 -1.6 23 0 Q21 2 18 2 H0 Z" fill="#dde3e6" stroke="#8a949a" stroke-width=".5"/><rect x="-11" y="-2" width="11" height="4.2" rx="1.6" fill="#2b3338"/></g>`;
  const zwiebel = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 -10 Q8 -9 8 -2 Q8 4 0 4 Q-8 4 -8 -2 Q-8 -9 0 -10 Z" fill="#d9a25a"/><path d="M0 -10 Q2 -13 1 -15" fill="none" stroke="#a5601f" stroke-width="1.2" stroke-linecap="round"/><path d="M-3 -7 Q-5 -2 -2 2" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.2"/></g>`;
  // Stoppuhr-Ring, dessen Zeiger läuft (ohne Zahl)
  const laeuft = (x, y, label) => `<g transform="translate(${x} ${y})"><circle r="17" class="uhr" filter="url(#v-sch)"/><circle r="17" fill="url(#v-glanz)"/>
      <g class="v-dreh" style="animation-duration:2.4s"><circle r="12" fill="none"/><line y2="-11" class="zeiger"/></g><circle r="1.8" class="zeiger-nabe"/>
      <text y="31" text-anchor="middle" class="t-mini leise">${label}</text></g>`;
  // Sofa mit der Frau, die eine Tasse hält
  const sofaFrau = `<rect x="212" y="148" width="4" height="7" rx="1.5" fill="#3a2616"/><rect x="290" y="148" width="4" height="7" rx="1.5" fill="#3a2616"/>
      <ellipse cx="253" cy="156" rx="48" ry="3.5" fill="#000" opacity=".14" filter="url(#v-blur)"/>
      <rect x="216" y="100" width="74" height="28" rx="8" fill="url(#v-leder)"/><rect x="216" y="100" width="74" height="10" rx="5" fill="#fff" opacity=".12"/>
      <g transform="translate(254 152) scale(1.3)">${figurFrau(0, -14)}</g>
      <rect x="210" y="124" width="86" height="22" rx="6" fill="#6e482c"/>
      <rect x="206" y="114" width="12" height="34" rx="6" fill="url(#v-leder)"/><rect x="288" y="114" width="12" height="34" rx="6" fill="url(#v-leder)"/>
      <line x1="248" y1="108" x2="240" y2="116" class="figur-strich" style="stroke-width:4"/>
      <g transform="translate(236 112)"><rect x="-5" y="-3" width="10" height="11" rx="2" fill="#3fc1a1"/><path d="M-5 0 Q-9 0 -9 3 Q-9 6 -5 6" fill="none" stroke="#3fc1a1" stroke-width="1.6"/>
        <ellipse cy="-7" rx="3" ry="2.2" class="dampf ueber-hell v-dampf" style="--d:.4s;animation-duration:2.6s" filter="url(#v-blur)"/></g>`;
  // Holzboden rechts neben der Küchenzeile
  const boden = x => `<rect x="${x}" y="150" width="${320 - x}" height="30" fill="url(#v-holz)"/><rect x="${x}" y="150" width="${320 - x}" height="30" fill="url(#v-abdunkeln)" opacity=".25"/><rect x="${x}" y="147" width="${320 - x}" height="3" fill="#d8cfbf"/>`;

  // ---------- Szene „Nicht nur Suppe“: vier Gerichte nacheinander ----------
  // Zeitfenster der vier Gerichte; das letzte bleibt bis zum Szenenende stehen
  const GERICHT_AB = [0.1, 2.1, 3.9, 5.7];
  const phase = (i, inhalt) => i < 3 ? `<g class="v-takt" style="--d:${GERICHT_AB[i]}s;--len:2s">${inhalt}</g>` : `<g class="v-ein" style="--d:${GERICHT_AB[i]}s">${inhalt}</g>`;
  // Messer im Topf; dauer = wie schnell es sich dreht
  const messerTopf = (y, dauer) => `<g transform="translate(0 ${y})"><path d="M-11 0 L0 -1.6 L11 0 L0 1.6 Z" fill="#dde3e6" stroke="#8a949a" stroke-width=".5"><animateTransform attributeName="transform" type="scale" values="1 1;.15 1;1 1" dur="${dauer}s" repeatCount="indefinite"/></path><rect x="-1.4" y="0" width="2.8" height="4" fill="#8a949a"/></g>`;
  const topfInnen = `<rect x="-14" y="-74" width="28" height="20" rx="4" fill="#2b3338"/>`;
  // Blick in den Topf: Kraut hacken, Teig kneten, im Korb dämpfen, Soße rühren
  const fensterGerichte = `<rect x="-16" y="-82" width="32" height="30" rx="6" fill="#1c2326"/>
      ${phase(0, `${topfInnen}<path d="M-14 -54 Q-12 -60 -7 -60.5 Q-4 -63.5 0 -61.5 Q4 -64 8 -60.5 Q12.5 -60 14 -54 Z" fill="#dfeec2"/><path d="M-9 -57.5 Q-5 -60 -1 -58.5 M3 -59 Q7 -60.5 10 -57.5" fill="none" stroke="#b9d98e" stroke-width="1"/>
        <rect x="-8" y="-58.6" width="2.8" height="1.7" fill="#e2641f"/><rect x="-1.5" y="-60.4" width="2.8" height="1.7" fill="#e2641f"/><rect x="5" y="-57.8" width="2.8" height="1.7" fill="#e2641f"/>
        ${stueck("M-10 -66 A10 4 0 1 0 10 -66 A10 4 0 1 0 -10 -66", 0.5, 0, 1.9, "#dfeec2")}
        ${stueck("M10 -65 A10 4 0 1 0 -10 -65 A10 4 0 1 0 10 -65", 0.5, 0.2, 1.6, "#e2641f")}
        ${stueck("M-8 -70 A8 3 0 1 0 8 -70 A8 3 0 1 0 -8 -70", 0.45, 0.1, 1.6, "#c9e3a0")}
        ${messerTopf(-62, 0.12)}`)}
      ${phase(1, `${topfInnen}${messerTopf(-56, 0.6)}
        <g transform="translate(0 -62)"><g class="v-wackel" style="animation-duration:.45s"><path d="M-11 6 Q-11 -6 0 -6 Q11 -6 11 6 Z" fill="#f1dcae"/><path d="M-6 -2 Q-2 -4.5 3 -4.5" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.6" stroke-linecap="round"/></g></g>`)}
      ${phase(2, `${topfInnen}<rect x="-14" y="-60" width="28" height="6" rx="2" fill="#7cc8ff" opacity=".75"/>
        ${partikel("M-6 -55 L-6 -60", 0.9, 0, 0.8, "dampf")}${partikel("M5 -55 L5 -60", 0.9, 0.45, 0.8, "dampf")}
        <path d="M-13 -66 H13 L11 -61.5 H-11 Z" fill="#3b4448" stroke="#aab4b8" stroke-width=".8"/><path d="M-6 -66 V-61.5 M0 -66 V-61.5 M6 -66 V-61.5" stroke="#aab4b8" stroke-width=".6"/>
        <ellipse cx="-7.5" cy="-68" rx="4.4" ry="2.8" fill="#d9b25a"/>
        <path d="M-2 -67 Q1 -71.5 6 -69.6 Q8.4 -68.6 6.6 -67 Q1.6 -65.6 -2 -67 Z" fill="#f3c9b0"/>
        <circle cx="10" cy="-68.6" r="2.2" fill="#3f8f4a"/><circle cx="11.4" cy="-70.4" r="1.6" fill="#4fa35a"/>`)}
      ${phase(3, `${topfInnen}<rect x="-14" y="-69" width="28" height="15" rx="3" fill="#c8432b"/><rect x="-14" y="-69" width="28" height="4" rx="2" fill="#fff" opacity=".15"/>
        ${stueck("M-10 -63 A10 4 0 1 0 10 -63 A10 4 0 1 0 -10 -63", 1.1, 0, 1.4, "#3f8f4a")}
        ${stueck("M9 -61 A9 3.5 0 1 0 -9 -61 A9 3.5 0 1 0 9 -61", 1.1, 0.4, 1.3, "#f3e6c4")}
        ${messerTopf(-58, 0.5)}`)}
      <rect x="-16" y="-82" width="32" height="30" rx="6" fill="url(#v-glas)"/>`;
  // Anzeige: ein Balken läuft für jedes Gericht einmal voll
  const balkenAnzeige = `<rect x="-16" y="-33" width="32" height="3" rx="1.5" fill="#ff9a3a" opacity=".22"/>
      ${GERICHT_AB.map((d, i) => phase(i, `<rect x="-16" y="-33" width="32" height="3" rx="1.5" fill="#ff9a3a" class="v-spur" style="--d:${d}s;--len:${i < 3 ? 1.7 : 2.6}s"/>`)).join("")}`;
  // Ein Gericht in der Liste rechts: rundes Bild und Name
  const gericht = (y, bild, name, d) => `<g transform="translate(166 ${y})"><g class="v-hoch" style="--d:${d}s"><circle r="12.5" class="blase" filter="url(#v-sch)"/><g transform="scale(1.15)">${bild}</g><text x="20" y="4.6" class="t-mittel">${name}</text></g></g>`;
  const bildKrautsalat = `<path d="M-8 -1 Q-7.5 6.5 0 6.5 Q7.5 6.5 8 -1 Z" fill="url(#v-keramik)"/><ellipse cy="-1" rx="8" ry="2.4" fill="#e3e9ec"/>
      <path d="M-6.4 -1.6 Q-4 -6 -.5 -3.6 Q3 -7 6.4 -1.6 Z" fill="#dfeec2"/>
      <path d="M-3 -3.4 l2 -1.2 M1.6 -4.4 l2.2 .8 M-.6 -2.2 l1.8 -.4" stroke="#e2641f" stroke-width="1" stroke-linecap="round"/><path d="M-4.6 -2.6 l1.4 -1.6 M3.4 -2.4 l1.2 -1.4" stroke="#9cc46a" stroke-width=".9" stroke-linecap="round"/>`;
  const bildTeig = `<ellipse cy="5.2" rx="9" ry="1.6" fill="#e6dcc6"/><path d="M-8 5 Q-8 -6 0 -6 Q8 -6 8 5 Z" fill="#f1dcae"/>
      <path d="M-4.5 -2.5 Q-1.5 -4.5 2 -4.5" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="1.4" stroke-linecap="round"/>`;
  const bildFisch = `<ellipse cy="3" rx="9.5" ry="3.4" fill="#e3e9ec" stroke="#cfd6da" stroke-width=".6"/>
      <path d="M-4.5 1.2 Q-1 -3.8 4.6 -2.2 Q7 -1.4 6.4 .6 Q1.6 2.8 -4.5 1.2 Z" fill="#f3c9b0"/><ellipse cx="5.4" cy="2.6" rx="2.6" ry="1.8" fill="#d9b25a"/>
      <circle cx="-5.6" cy="1.8" r="1.9" fill="#3f8f4a"/><circle cx="-4.2" cy=".2" r="1.4" fill="#4fa35a"/>
      <path d="M-1.6 -5.4 q1.4 -1.4 0 -2.8 M2.2 -5.4 q1.4 -1.4 0 -2.8" stroke="#aab4b8" stroke-width=".9" fill="none" stroke-linecap="round"/>`;
  const bildSosse = `<rect x="-10.2" y="-1" width="2.8" height="1.8" rx=".9" fill="#2b3338"/><rect x="7.4" y="-1" width="2.8" height="1.8" rx=".9" fill="#2b3338"/>
      <path d="M-7.5 -2 H7.5 V4 Q7.5 6.5 5 6.5 H-5 Q-7.5 6.5 -7.5 4 Z" fill="url(#v-metall)"/><ellipse cy="-2" rx="7.5" ry="2" fill="#c8432b"/>
      <path d="M1 -2.6 q2 -2 3.6 -.6 q-1.6 1.4 -3.6 .6 Z" fill="#3f8f4a"/>`;

  VIDEOS["kuechenmaschine-kochfunktion"] = { szenen: [
    {
      dauer: 7.5, vorher: true, titel: "Bisher: Am Herd kochen",
      text: "Zwiebeln schneiden, rühren, danebenstehen, damit nichts anbrennt. Danach stapeln sich Brett, Messer und Töpfe in der Spüle.",
      svg: `<g transform="translate(166 160) scale(1.6)">${figurFrau(0, -14)}</g>
        ${platte()}
        <rect x="64" y="129" width="88" height="8" rx="2" fill="#151b1d"/><rect x="64" y="129" width="88" height="1.5" rx=".75" fill="#56626a"/>
        <ellipse cx="108" cy="131" rx="30" ry="4" fill="#ff6a2a" opacity=".6" filter="url(#v-blur)" class="v-gluehen-weich" style="--d:.2s"/>
        <g transform="translate(108 104)"><g class="v-wackel" style="animation-duration:.45s;transform-origin:50% 100%"><line x1="0" y1="0" x2="16" y2="-30" stroke="#a5835e" stroke-width="3" stroke-linecap="round"/></g></g>
        ${topf(108, 134, 1.05)}
        <line x1="157" y1="102" x2="125" y2="76" class="figur-strich" style="stroke-width:5"/>
        ${[0, 1, 2].map(i => `<g transform="translate(${94 + i * 14} 96)"><ellipse rx="6" ry="4" class="dampf ueber-hell v-dampf" style="--d:${(0.2 + i * 0.6).toFixed(1)}s" filter="url(#v-blur)"/></g>`).join("")}
        ${brett(34, 140)}${zwiebel(22, 137, 0.8)}${zwiebel(36, 138, 0.6)}${messer(40, 135, -8)}
        ${spuele(202, `${topf(22, 136, 0.8, true)}${topf(22, 114, 0.62, true)}${brett(80, 114, -66)}${messer(90, 118, -104)}`)}
        ${laeuft(50, 60, "danebenstehen")}
        ${blase(176, 44, "Rühren, rühren, rühren", 0.6, 3.3)}
        ${blase(176, 44, "Bloß nicht anbrennen lassen", 4.0, 3.2)}
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:2.8s;fill:#f3ead9">Danach: Brett, Messer und zwei Töpfe spülen.</text>`
    },
    {
      dauer: 7, titel: "Zutaten rein, Programm wählen",
      text: "Zwiebeln, Gemüse und Brühe kommen in den Mixtopf. Deckel drauf, Programm wählen, starten.",
      svg: `${platte()}
        <g class="v-weg" style="--d:2.6s">${maschine(96, 140, 1.05, { offen: true, anzeige: text("-- --") })}</g>
        <g class="v-ein" style="--d:2.6s">${maschine(96, 140, 1.05, { anzeige: `${text("-- --", "v-weg", "--d:3.4s")}${text("SUPPE", "v-ein", "--d:3.5s")}` })}</g>
        <g class="v-weg" style="--d:1.2s">${[0, 1, 2, 3, 4].map(i => `<g transform="translate(${86 + (i % 3) * 9} ${44 + (i % 2) * 3})"><g class="v-fall" style="--d:${(0.3 + i * 0.15).toFixed(2)}s">${i % 2 ? `<circle r="3" fill="#e2641f"/>` : `<path d="M-3.5 0 Q0 -5 3.5 0 Z" fill="#d9a25a"/>`}</g></g>`).join("")}</g>
        <g class="v-ein" style="--d:1.3s"><g class="v-weg" style="--d:2.4s"><g transform="translate(42 40) rotate(28)"><path d="M-12 -14 H10 V14 Q10 18 6 18 H-8 Q-12 18 -12 14 Z" class="kanne"/><path d="M10 -10 L18 -16" class="kanne"/><rect x="-11" y="2" width="20" height="14" rx="2" fill="#c98a3a" opacity=".6"/></g>
          <path d="M60 30 Q74 36 88 46" fill="none" stroke="#c98a3a" stroke-width="3" stroke-linecap="round" opacity=".8"/></g></g>
        <g class="v-ein" style="--d:3.2s"><g transform="translate(96 127)"><circle r="9" class="tipp v-tipp" style="--d:3.2s"/></g></g>
        ${zeile(176, 50, "Zutaten rein", 0.4)}
        ${zeile(176, 79, "Deckel drauf", 2.4)}
        ${zeile(176, 108, "Programm wählen", 3.3)}`
    },
    {
      dauer: 7, titel: "Sie schneidet, rührt und kocht",
      text: "Das Messer im Topf zerkleinert und rührt, der Topf heizt dabei. Du musst nicht danebenstehen.",
      svg: `${boden(176)}${platte(178)}
        ${maschine(92, 140, 1.15, { anzeige: text("100°"), fenster })}
        ${[0, 1, 2].map(i => `<g transform="translate(${86 + i * 6} 22)"><ellipse rx="6" ry="4" class="dampf ueber-hell v-dampf" style="--d:${(0.2 + i * 0.6).toFixed(1)}s" filter="url(#v-blur)"/></g>`).join("")}
        ${sofaFrau}
        ${blase(98, 158, "Zerkleinert und rührt", 0.5, 3.0)}
        ${blase(98, 158, "Und kocht dabei", 3.7, 3.1)}
        <text x="254" y="64" text-anchor="middle" class="t-klein v-hoch" style="--d:1.6s">Zeit für dich</text>`
    },
    {
      dauer: 9, titel: "Und nicht nur Suppe",
      text: "Sie hackt Weißkohl für Krautsalat und knetet Pizzateig. Im Dampfkorb gart sie Fisch und Gemüse, und eine Soße rührt sie beim Kochen selbst.",
      svg: `${platte()}
        ${maschine(82, 140, 1.2, { anzeige: balkenAnzeige, fenster: `<g transform="translate(0 -67) scale(1.3) translate(0 67)">${fensterGerichte}</g>` })}
        <g class="v-ein" style="--d:${GERICHT_AB[2]}s">${[0, 1, 2].map(i => `<g transform="translate(${76 + i * 6} 19)"><ellipse rx="6" ry="4" class="dampf ueber-hell v-dampf" style="--d:${(0.2 + i * 0.6).toFixed(1)}s" filter="url(#v-blur)"/></g>`).join("")}</g>
        ${gericht(34, bildKrautsalat, "Krautsalat", GERICHT_AB[0] + 0.3)}
        ${gericht(61, bildTeig, "Pizzateig", GERICHT_AB[1] + 0.1)}
        ${gericht(88, bildFisch, "Fisch mit Gemüse", GERICHT_AB[2] + 0.1)}
        ${gericht(115, bildSosse, "Tomatensoße", GERICHT_AB[3] + 0.1)}
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:1.2s;fill:#f3ead9">Ein Gerät, viele Gerichte.</text>`
    },
    {
      dauer: 7, titel: "Am Ende: nur der Mixtopf",
      text: "Statt Brett, Messer und zwei Töpfen spülst du danach den Mixtopf, das Messer und den Deckel.",
      svg: `${platte()}
        <ellipse cx="86" cy="141" rx="40" ry="4.5" fill="#000" opacity=".15" filter="url(#v-blur)"/>
        <path d="M50 112 Q52 138 86 140 Q120 138 122 112 Z" fill="url(#v-keramik)"/><path d="M50 112 Q52 138 86 140 Q120 138 122 112 Z" fill="url(#v-abdunkeln-r)" opacity=".3"/>
        <ellipse cx="86" cy="112" rx="36" ry="6.5" fill="#f3f6f7"/><ellipse cx="86" cy="112.5" rx="31" ry="4.8" fill="#e9a23b"/>
        <circle cx="76" cy="112" r="2" fill="#2f7a3c"/><circle cx="92" cy="113" r="1.6" fill="#e2641f"/><circle cx="98" cy="111.5" r="1.4" fill="#2f7a3c"/>
        ${[0, 1, 2].map(i => `<g transform="translate(${74 + i * 12} 98)"><ellipse rx="6" ry="4" class="dampf ueber-hell v-dampf" style="--d:${(0.2 + i * 0.6).toFixed(1)}s" filter="url(#v-blur)"/></g>`).join("")}
        ${funkel(48, 96, 0.6, 1)}${funkel(128, 92, 1.2, 0.9)}
        ${spuele(196, `<g class="v-ein" style="--d:.8s"><g transform="translate(26 137) scale(-.62 .62)"><path d="M-24 0 L-28 -42 H28 L24 0 Z" fill="url(#v-metall)"/><path d="M27 -36 Q42 -34 41 -18 Q40 -6 25 -6" fill="none" stroke="#3b4448" stroke-width="5" stroke-linecap="round"/></g>
          <g transform="translate(80 127) rotate(-14)"><rect x="-15" y="-3" width="30" height="5" rx="2.5" fill="#3b4448"/></g>
          <g transform="translate(62 132)"><path d="M-7 0 L0 -1.4 L7 0 L0 1.4 Z" fill="#dde3e6" stroke="#8a949a" stroke-width=".5"/><rect x="-1.2" y="0" width="2.4" height="4" fill="#8a949a"/></g></g>`, true)}
        <text x="244" y="72" text-anchor="middle" class="t-klein v-hoch" style="--d:1.4s">Mixtopf, Messer, Deckel</text>
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:2.4s;fill:#f3ead9">Kein Stapel mehr in der Spüle.</text>`
    }
  ] };
})();

// ============================================================
// Küchenmaschine zum Kneten und Rühren (Figur: Mann)
// ============================================================
(function () {
  const platte = (breite = 320) => `<rect y="128" width="${breite}" height="32" fill="url(#v-holz)"/><rect y="128" width="${breite}" height="32" fill="url(#v-boden-licht)"/><rect y="158" width="${breite}" height="22" fill="#8a6f50"/><rect y="158" width="${breite}" height="22" fill="url(#v-abdunkeln)" opacity=".45"/>`;
  // Küchenmaschine mit Schwenkarm von vorn, Ursprung = Mitte unten.
  // werkzeug = Knethaken unter dem Arm, inhalt = was oben in der Schüssel zu sehen ist, knopf = Drehknopf (Inhalt wird mitgedreht)
  const maschine = (x, y, s, { werkzeug = "", inhalt = "", knopf = "" } = {}) => `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cy="1" rx="54" ry="4.5" fill="#000" opacity=".18" filter="url(#v-blur)"/>
      <rect x="-50" y="-10" width="100" height="10" rx="4" fill="#f7f9fa" stroke="#cfd6da"/>
      <path d="M-48 -9 V-72 Q-48 -86 -34 -86 H30 Q40 -86 40 -76 Q40 -66 30 -66 H-22 V-9 Z" fill="#f7f9fa"/>
      <path d="M-48 -9 V-72 Q-48 -86 -34 -86 H30 Q40 -86 40 -76 Q40 -66 30 -66 H-22 V-9 Z" fill="url(#v-abdunkeln-r)" opacity=".25"/>
      <path d="M-48 -9 V-72 Q-48 -86 -34 -86 H30 Q40 -86 40 -76 Q40 -66 30 -66 H-22 V-9 Z" fill="none" stroke="#cfd6da"/>
      <rect x="-46" y="-84" width="80" height="6" rx="3" fill="#fff" opacity=".5"/>
      <g transform="translate(-35 -40)"><circle r="8" fill="#dde3e6" stroke="#aab4b8"/><g>${knopf}<rect x="-1" y="-7" width="2" height="5" rx="1" fill="#3b4448"/><circle r="4.4" fill="#f7f9fa"/></g></g>
      ${werkzeug}
      <path d="M-16 -52 H40 L35 -15 Q34 -10 29 -10 H-5 Q-10 -10 -11 -15 Z" fill="url(#v-metall)"/>
      <path d="M-16 -52 H40 L35 -15 Q34 -10 29 -10 H-5 Q-10 -10 -11 -15 Z" fill="url(#v-abdunkeln-r)" opacity=".35"/>
      <ellipse cx="12" cy="-52" rx="28" ry="4.5" fill="#cfd6da"/><ellipse cx="12" cy="-52" rx="25" ry="3.4" fill="#2b3338"/>
      ${inhalt}
    </g>`;
  // Knethaken am Arm (Ursprung Nabe unter dem Arm); kreist = schwingt im Kreis durch die Schüssel
  const haken = kreist => `<g>${kreist ? `<animateTransform attributeName="transform" type="rotate" values="-11 12 -66;11 12 -66;-11 12 -66" dur="1.1s" repeatCount="indefinite"/>` : ""}
      <rect x="9" y="-68" width="6" height="5" rx="1.5" fill="#8a949a"/><path d="M12 -64 V-50 Q12 -44 6 -44 Q2 -44 2 -48" fill="none" stroke="#c6ced2" stroke-width="3.4" stroke-linecap="round"/></g>`;
  // Teig oben in der Schüssel; glatt = runde, glänzende Kugel
  const teig = (glatt, wackelt) => `<g transform="translate(12 -52)"><g ${wackelt ? `class="v-wackel" style="animation-duration:.55s"` : ""}>
      ${glatt ? `<path d="M-18 1 Q-17 -15 0 -16 Q17 -15 18 1 Z" fill="#f1dcae"/><path d="M-10 -9 Q-4 -13 3 -13" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2.2" stroke-linecap="round"/>`
        : `<path d="M-19 1 Q-18 -9 -10 -10 Q-6 -15 1 -12 Q8 -16 13 -10 Q19 -9 19 1 Z" fill="#ecd3a0"/><circle cx="-6" cy="-5" r="2" fill="#fff" opacity=".5"/><circle cx="7" cy="-6" r="1.6" fill="#fff" opacity=".5"/>`}
    </g></g>`;
  const ring = (x, y, zahl, label, d, len) => `<g transform="translate(${x} ${y})"><circle r="20" class="ring-bg"/><circle r="20" pathLength="1" class="ring v-zeichne" style="--d:${d}s;--len:${len}s" transform="rotate(-90)"/>
      <text y="3.5" text-anchor="middle" class="t-mittel fett" style="font-size:10px">${zahl}</text><text y="33" text-anchor="middle" class="t-mini leise">${label}</text></g>`;
  // Mehl auf der Arbeitsfläche
  const mehl = [[64, 136, 16, 3], [150, 140, 20, 3.5], [100, 150, 26, 3.5], [178, 134, 10, 2.4], [40, 146, 12, 2.6]]
    .map(([x, y, rx, ry]) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#fbf8ef" opacity=".9"/>`).join("");
  const schuessel = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cy="1" rx="22" ry="3" fill="#000" opacity=".14" filter="url(#v-blur)"/>
      <path d="M-22 -18 Q-20 0 0 0 Q20 0 22 -18 Z" fill="url(#v-keramik)"/><ellipse cy="-18" rx="22" ry="3.6" fill="#e3e9ec"/></g>`;
  const handmixer = (x, y) => `<g transform="translate(${x} ${y})">
      <line x1="-6" y1="-6" x2="-6" y2="8" stroke="#aab4b8" stroke-width="1.6"/><line x1="4" y1="-6" x2="4" y2="8" stroke="#aab4b8" stroke-width="1.6"/>
      <ellipse cx="-6" cy="5" rx="3" ry="4" fill="none" stroke="#aab4b8" stroke-width="1.2"/><ellipse cx="4" cy="5" rx="3" ry="4" fill="none" stroke="#aab4b8" stroke-width="1.2"/>
      <path d="M-16 -20 H18 Q24 -20 24 -14 V-8 Q24 -4 18 -4 H-12 Q-16 -4 -16 -8 Z" fill="#f7f9fa" stroke="#cfd6da"/>
      <path d="M-10 -20 Q-10 -30 0 -30 H12 Q18 -30 18 -24 V-20" fill="none" stroke="#cfd6da" stroke-width="4"/></g>`;
  // Werkzeuge, die in die Spülmaschine wandern
  const knethaken = `<rect x="-3" y="-16" width="6" height="5" rx="1.5" fill="#8a949a"/><path d="M0 -12 V2 Q0 8 -6 8 Q-10 8 -10 4" fill="none" stroke="#c6ced2" stroke-width="3.2" stroke-linecap="round"/>`;
  const besen = `<rect x="-3" y="-16" width="6" height="5" rx="1.5" fill="#8a949a"/><line x1="0" y1="-12" x2="0" y2="-4" stroke="#c6ced2" stroke-width="2.4"/>
      <path d="M0 -6 Q-9 2 0 10 Q9 2 0 -6 M0 -6 Q-4 2 0 10 Q4 2 0 -6" fill="none" stroke="#c6ced2" stroke-width="1.4"/>`;

  VIDEOS.kuechenmaschine = { szenen: [
    {
      dauer: 7.5, vorher: true, titel: "Bisher: Teig von Hand kneten",
      text: "Hefeteig knetest du von Hand mindestens acht Minuten. Das Mehl staubt, und die Arme werden müde.",
      svg: `<g transform="translate(98 160) scale(1.6)">${figur(0, -14)}</g>
        ${platte()}${mehl}
        <g transform="translate(140 140)"><g><animateTransform attributeName="transform" type="scale" values="1 1;1.14 .8;1 1" dur=".7s" repeatCount="indefinite"/>
          <path d="M-17 0 Q-18 -12 0 -13 Q18 -12 17 0 Z" fill="#ecd3a0"/><circle cx="-5" cy="-6" r="2" fill="#fff" opacity=".5"/></g></g>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;2 3.5;0 0" dur=".7s" repeatCount="indefinite"/>
          <line x1="104" y1="104" x2="131" y2="125" class="figur-strich" style="stroke-width:5"/><line x1="106" y1="110" x2="149" y2="125" class="figur-strich" style="stroke-width:5"/>
          <circle cx="132" cy="126" r="3.4" class="figur"/><circle cx="150" cy="126" r="3.4" class="figur"/></g>
        ${[0, 1, 2, 3].map(i => `<g transform="translate(${122 + i * 12} 126)"><ellipse rx="5.5" ry="4" fill="#fbf8ef" class="v-dampf" style="--d:${(0.1 + i * 0.45).toFixed(2)}s;animation-duration:1.6s" filter="url(#v-blur)"/></g>`).join("")}
        <g transform="translate(84 80)"><ellipse rx="1.6" ry="2.6" class="schweiss v-tropf" style="--d:.9s"/></g>
        <g transform="translate(112 78)"><ellipse rx="1.6" ry="2.6" class="schweiss v-tropf" style="--d:1.5s"/></g>
        ${schuessel(214, 146)}${handmixer(262, 144)}
        ${ring(280, 66, "8 Min", "mindestens", 0.2, 6.6)}
        ${blase(128, 44, "Kneten, kneten, kneten", 0.6, 3.3)}
        ${blase(128, 44, "Und überall Mehl", 4.1, 3.2)}
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:2.8s;fill:#f3ead9">Danach: Hände und Arbeitsfläche voller Teig.</text>`
    },
    {
      dauer: 7, titel: "Zutaten rein, Stufe wählen",
      text: "Mehl, Hefe, Wasser und Salz kommen in die Schüssel. Knethaken einsetzen, Stufe wählen, fertig.",
      svg: `${platte()}
        ${maschine(92, 140, 1.15, {
          werkzeug: `<g class="v-ein" style="--d:2.2s">${haken(false)}</g>`,
          inhalt: `<g class="v-ein" style="--d:1.2s">${teig(false, false)}</g>`,
          knopf: `<animateTransform attributeName="transform" type="rotate" values="0;0;120" keyTimes="0;.82;1" dur="4s" fill="freeze"/>`
        })}
        <g class="v-weg" style="--d:1.3s">${[0, 1, 2, 3, 4, 5].map(i => `<g transform="translate(${96 + (i % 3) * 7} ${40 + (i % 2) * 3})"><g class="v-fall" style="--d:${(0.2 + i * 0.12).toFixed(2)}s"><circle r="${i % 2 ? 2.4 : 3}" fill="#fbf8ef" stroke="#d9d1bd" stroke-width=".6"/></g></g>`).join("")}</g>
        <g class="v-ein" style="--d:.1s"><g class="v-weg" style="--d:1.3s"><g transform="translate(70 36) rotate(32)"><path d="M-11 -14 H11 L9 12 H-9 Z" fill="#f3efe3" stroke="#d9d1bd"/><rect x="-7" y="-4" width="14" height="8" rx="1.5" fill="#e2641f" opacity=".8"/></g></g></g>
        <g class="v-ein" style="--d:1.3s"><g class="v-weg" style="--d:2.2s"><g transform="translate(44 40) rotate(28)"><path d="M-12 -14 H10 V14 Q10 18 6 18 H-8 Q-12 18 -12 14 Z" class="kanne"/><path d="M10 -10 L18 -16" class="kanne"/><rect x="-11" y="2" width="20" height="14" rx="2" fill="#4f9fd8" opacity=".5"/></g>
          <path d="M62 30 Q84 38 102 66" fill="none" stroke="#4f9fd8" stroke-width="3" stroke-linecap="round" opacity=".8"/></g></g>
        <g class="v-ein" style="--d:3.3s"><g transform="translate(52 94)"><circle r="9" class="tipp v-tipp" style="--d:3.3s"/></g></g>
        ${zeile(160, 50, "Mehl und Zutaten rein", 0.4)}
        ${zeile(160, 79, "Knethaken einsetzen", 2.0)}
        ${zeile(160, 108, "Stufe wählen", 3.3)}`
    },
    {
      dauer: 7, titel: "Sie knetet allein",
      text: "Der Knethaken kreist durch die Schüssel. Du schneidest derweil den Belag oder fettest die Kuchenform.",
      svg: `<g transform="translate(240 160) scale(1.6)">${figur(0, -14)}</g>
        ${platte()}
        ${maschine(84, 140, 1.15, { werkzeug: haken(true), inhalt: teig(false, true) })}
        <path d="M78 66 A20 6 0 1 0 116 66" class="kreis-pfad v-ein" style="--d:.6s"/>
        <rect x="202" y="133" width="80" height="6" rx="2.5" fill="#c49a6c"/><rect x="202" y="133" width="80" height="2.5" rx="1.2" fill="#dcc7a8"/>
        <g transform="translate(266 128)"><path d="M-9 4 Q-10 -6 0 -7 Q10 -6 9 4 Z" fill="#d1503d"/><path d="M-2 -7 Q0 -11 3 -10" fill="none" stroke="#2f7a3c" stroke-width="1.6" stroke-linecap="round"/><path d="M-5 -3 Q-6 0 -4 2" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="1.2"/></g>
        ${[[214, 1.4], [222, 2.1], [230, 2.8], [218, 3.5], [226, 4.2], [234, 4.9]].map(([x, d], i) => `<g transform="translate(${x} ${i < 3 ? 131 : 128.5})"><g class="v-pop" style="--d:${d}s"><rect x="-2.6" y="-2" width="5.2" height="4" rx="1.2" fill="${i % 2 ? "#e2641f" : "#d1503d"}"/></g></g>`).join("")}
        <g><animateTransform attributeName="transform" type="translate" values="0 0;0 -6;0 0" dur=".7s" begin=".6s" repeatCount="indefinite"/>
          <line x1="249" y1="105" x2="252" y2="122" class="figur-strich" style="stroke-width:5"/><circle cx="252" cy="123" r="3.4" class="figur"/>
          <g transform="translate(250 126)"><rect x="-2" y="-4" width="4.4" height="9" rx="1.6" fill="#2b3338"/><path d="M-1.6 4 H2 V16 Q2 18 -1 18 Q-6 15 -6 9 Q-6 4 -1.6 4 Z" fill="#dde3e6" stroke="#8a949a" stroke-width=".5"/></g></g>
        ${blase(92, 26, "Knetet allein", 0.5, 3.1)}
        ${blase(92, 26, "Du hast die Hände frei", 3.8, 3.0)}`
    },
    {
      dauer: 7, titel: "Glatter Teig, Teile in die Spülmaschine",
      text: "Am Ende liegt ein glatter Teig in der Schüssel. Knethaken und Besen dürfen in die Spülmaschine.",
      svg: `<rect y="104" width="320" height="76" fill="#e9e3d7"/><rect y="104" width="320" height="76" fill="url(#v-abdunkeln)" opacity=".15"/>
        <rect y="96" width="320" height="8" fill="url(#v-holz)"/><rect y="103" width="320" height="3" fill="#8a6f50"/>
        ${[[8, 82], [96, 92]].map(([x, w]) => `<rect x="${x}" y="112" width="${w}" height="56" rx="2" fill="#f4efe6" stroke="#d8cfbf"/><rect x="${x + w / 2 - 9}" y="117" width="18" height="2.6" rx="1.3" fill="#aab4b8"/>`).join("")}
        <rect x="196" y="108" width="100" height="60" rx="2" fill="#3b4448"/><rect x="200" y="112" width="92" height="52" rx="2" fill="#5a6468"/>
        <rect x="200" y="112" width="92" height="52" rx="2" fill="url(#v-abdunkeln)" opacity=".35"/>
        <path d="M196 168 H296 L306 178 H186 Z" fill="#dde3e6" stroke="#aab4b8"/>
        <g stroke="#cfd6da" stroke-width="1.4">${[206, 218, 230, 242, 254, 266, 278].map(x => `<line x1="${x}" y1="150" x2="${x}" y2="136"/>`).join("")}<line x1="202" y1="150" x2="290" y2="150"/></g>
        <g class="v-ein" style="--d:2.05s"><g transform="translate(222 142) rotate(-60)">${knethaken}</g></g>
        <g class="v-ein" style="--d:2.35s"><g transform="translate(262 142) rotate(-62)">${besen}</g></g>
        <g transform="translate(222 142)"><g class="v-flug" style="--d:1.2s;--sx:-126px;--sy:-78px"><g transform="rotate(-60)">${knethaken}</g></g></g>
        <g transform="translate(262 142)"><g class="v-flug" style="--d:1.5s;--sx:-128px;--sy:-52px"><g transform="rotate(-62)">${besen}</g></g></g>
        <g transform="translate(96 96)"><ellipse cy="0" rx="34" ry="3.5" fill="#000" opacity=".14" filter="url(#v-blur)"/>
          <path d="M-30 -32 L-26 -4 Q-25 0 -20 0 H20 Q25 0 26 -4 L30 -32 Z" fill="url(#v-metall)"/><path d="M-30 -32 L-26 -4 Q-25 0 -20 0 H20 Q25 0 26 -4 L30 -32 Z" fill="url(#v-abdunkeln-r)" opacity=".35"/>
          <ellipse cy="-32" rx="30" ry="4.5" fill="#cfd6da"/><ellipse cy="-32" rx="27" ry="3.4" fill="#2b3338"/>
          <g transform="translate(-12 0)">${teig(true, false).replace("translate(12 -52)", "translate(12 -32)")}</g></g>
        ${funkel(62, 52, 0.5, 1)}${funkel(128, 48, 1.0, 0.9)}${funkel(110, 30, 1.6, 0.7)}
        <text x="96" y="30" text-anchor="middle" class="t-klein v-hoch" style="--d:.6s">Glatt und geschmeidig</text>
        <text x="246" y="80" text-anchor="middle" class="t-klein v-hoch" style="--d:2.4s">Spülmaschinenfest</text>`
    }
  ] };
})();

// ============================================================
// Wassersprudler (Figur: Frau)
// ============================================================
(function () {
  const platte = (breite = 320) => `<rect y="128" width="${breite}" height="32" fill="url(#v-holz)"/><rect y="128" width="${breite}" height="32" fill="url(#v-boden-licht)"/><rect y="158" width="${breite}" height="22" fill="#8a6f50"/><rect y="158" width="${breite}" height="22" fill="url(#v-abdunkeln)" opacity=".45"/>`;
  // Sixpack mit sechs 1,5-Liter-Flaschen, Ursprung = Griff oben in der Mitte (dort hält die Hand)
  const sixpack = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
      <path d="M-4 3 Q0 -2 4 3" fill="none" stroke="#cfd6da" stroke-width="1.4"/>
      <rect x="-10" y="3" width="20" height="17" rx="2.5" fill="#7cc8ff" opacity=".55"/>
      ${[-6.5, 0, 6.5].map(bx => `<rect x="${bx - 2.6}" y="5" width="5.2" height="14" rx="2" fill="#b9e2ff" opacity=".8"/><rect x="${bx - 1.2}" y="2.6" width="2.4" height="2.6" rx=".6" fill="#1f6fb5"/>`).join("")}
      <rect x="-10" y="9" width="20" height="5" fill="#1f6fb5" opacity=".55"/>
      <rect x="-10" y="3" width="20" height="17" rx="2.5" fill="url(#v-glas)"/>
    </g>`;
  // Leere Plastikflasche, Ursprung = Mitte unten; wasser = gefüllt (0 bis 1, mit v-fuell)
  const flasche = (fuellung = "", deckel = true) => `<path d="M-7 0 Q-8 0 -8 -2 V-30 Q-8 -36 -3 -38 V-43 H3 V-38 Q8 -36 8 -30 V-2 Q8 0 7 0 Z" fill="#e8f5ff" opacity=".6" stroke="#9fc7e3" stroke-width=".8"/>
      ${fuellung}
      <path d="M-5 -30 V-6" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>
      ${deckel ? `<rect x="-3.6" y="-47" width="7.2" height="4.4" rx="1.2" fill="#3b4448"/>` : ""}`;
  // Wasser in der Flasche, steigt von unten (d = Beginn, len = Dauer)
  const wasser = (d, len) => `<rect x="-7.4" y="-31" width="14.8" height="30.4" rx="2" fill="#7cc8ff" opacity=".7" class="v-fuell" style="--d:${d}s;--len:${len}s"/>`;
  // Halter unter dem Kopf des Sprudlers, in dem der Flaschenhals steckt (Sprudler-Koordinaten)
  const halter = `<rect x="-13" y="-73" width="10" height="16.5" rx="2" fill="#1c2326" stroke="#6b767b" stroke-width=".6"/><rect x="-11.4" y="-71" width="1.6" height="12" rx=".8" fill="#fff" opacity=".16"/>`;
  // Wassersprudler von vorn ohne Logo, Ursprung = Mitte unten. hebel = Inhalt der Hebel-Gruppe (Animation), inhalt = was in der Flasche passiert
  const sprudler = (x, y, s, { hebel = "", flascheDrin = true, inhalt = "" } = {}) => `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cy="1" rx="30" ry="3.5" fill="#000" opacity=".18" filter="url(#v-blur)"/>
      <rect x="-24" y="-6" width="48" height="6" rx="3" fill="#2b3338"/>
      <rect x="2" y="-84" width="20" height="80" rx="6" fill="url(#v-dunkel)" stroke="#6b767b" stroke-width=".8"/>
      <rect x="4" y="-82" width="4" height="74" rx="2" fill="#fff" opacity=".12"/>
      <g>${hebel}<rect x="18" y="-82" width="14" height="7" rx="3.5" fill="#cfd6da" stroke="#8a949a" stroke-width=".6"/></g>
      <rect x="-22" y="-90" width="44" height="18" rx="7" fill="url(#v-dunkel)" stroke="#6b767b" stroke-width=".8"/>
      <rect x="-20" y="-88" width="40" height="5" rx="2.5" fill="#fff" opacity=".14"/>
      ${halter}
      ${flascheDrin ? `<g transform="translate(-8 -5) scale(1.25)">${flasche(`<rect x="-7.4" y="-31" width="14.8" height="30.4" rx="2" fill="#7cc8ff" opacity=".7"/>${inhalt}`, false)}</g>${halter}` : ""}
    </g>`;
  // Nur der Halter, für Szenen, in denen die Flasche einzeln animiert wird: nach der Flasche zeichnen, dann steckt ihr Hals darin
  const stutzen = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})">${halter}</g>`;
  // Bläschen, die in der Flasche aufsteigen (in Flaschen-Koordinaten)
  const blasen = (begin, n = 6) => Array.from({ length: n }, (_, i) => {
    const x = -5 + (i * 2.3) % 10, d = (begin + i * 0.17).toFixed(2);
    return `<circle r="${(0.7 + (i % 3) * 0.35).toFixed(2)}" fill="#fff" opacity="0"><animateMotion dur="${(0.9 + (i % 3) * 0.25).toFixed(2)}s" begin="${d}s" repeatCount="indefinite" path="M${x} -2 Q${x + 1.5} -16 ${x} -30"/><animate attributeName="opacity" values="0;.9;.9;0" keyTimes="0;.1;.8;1" dur="${(0.9 + (i % 3) * 0.25).toFixed(2)}s" begin="${d}s" repeatCount="indefinite"/></circle>`;
  }).join("");
  // Spüle mit hohem Wasserhahn (Hahnende bei x+66, y 53)
  const spuele = x => `<g transform="translate(${x} 0)">
      <rect x="0" y="129" width="96" height="9" rx="3" fill="#aab4b8"/><rect x="4" y="130.5" width="88" height="6" rx="2" fill="#5a6468"/>
      <rect x="44" y="58" width="8" height="72" rx="3" fill="url(#v-metall-h)"/><path d="M48 60 Q48 46 62 46 H70 V53 H62 Q55 53 55 60" fill="url(#v-metall)" stroke="#aab4b8" stroke-width=".6"/>
    </g>`;
  const glas = (x, y, d, len) => `<g transform="translate(${x} ${y})">
      <path d="M-9 -26 L-7.5 -1 Q-7.4 0 -6 0 H6 Q7.4 0 7.5 -1 L9 -26 Z" fill="#e8f5ff" opacity=".45" stroke="#9fc7e3" stroke-width=".8"/>
      <path d="M-8.3 -18 L-7.5 -1 H7.5 L8.3 -18 Z" fill="#7cc8ff" opacity=".7" class="v-fuell" style="--d:${d}s;--len:${len}s"/>
      <g class="v-ein" style="--d:${d + len}s">${[[-4, 0], [0, 0.4], [3.5, 0.2], [-1.5, 0.7]].map(([bx, b]) => `<circle r=".8" fill="#fff" opacity="0"><animateMotion dur="1.1s" begin="${(d + len + b).toFixed(2)}s" repeatCount="indefinite" path="M${bx} -2 V-17"/><animate attributeName="opacity" values="0;.9;0" dur="1.1s" begin="${(d + len + b).toFixed(2)}s" repeatCount="indefinite"/></circle>`).join("")}</g>
      <path d="M-6 -22 L-5 -4" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity=".6"/>
    </g>`;

  // Frau mit zwei Sixpacks (Ursprung = Füße), ohne eigene Bewegung
  const frauMitSixpacks = `${figurFrau(0, -14)}
      <line x1="-6" y1="-35" x2="-12" y2="-19" class="figur-strich" style="stroke-width:3"/><line x1="6" y1="-35" x2="12" y2="-19" class="figur-strich" style="stroke-width:3"/>
      ${sixpack(-13, -19, 0.7)}${sixpack(13, -19, 0.7)}`;

  VIDEOS.wassersprudler = { szenen: [
    {
      dauer: 7.5, vorher: true, titel: "Bisher: Sixpacks die Treppe hoch",
      text: "Wasser im Supermarkt kaufen, ins Auto laden und dann die Treppe hoch. Zwei Sixpacks mit 1,5-Liter-Flaschen wiegen zusammen rund 18 Kilo.",
      svg: `<path d="M0 158 V150 H44 V140 H88 V130 H132 V120 H176 V110 H320 V158 Z" fill="url(#v-holz)"/><path d="M0 158 V150 H44 V140 H88 V130 H132 V120 H176 V110 H320 V158 Z" fill="url(#v-abdunkeln)" opacity=".25"/>
        ${[[0, 150, 44], [44, 140, 44], [88, 130, 44], [132, 120, 44], [176, 110, 144]].map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="3.5" fill="#8a6f50"/>`).join("")}
        <rect x="258" y="52" width="38" height="58" rx="2" fill="#f4efe6" stroke="#d8cfbf"/><rect x="262" y="56" width="30" height="54" rx="1.5" fill="#e9e3d7"/><circle cx="287" cy="84" r="2" fill="#aab4b8"/>
        <g><animateTransform attributeName="transform" type="translate" values="22 150;66 140;110 130;154 120;198 110;222 110" keyTimes="0;.14;.32;.56;.86;1" begin=".2s" dur="6.6s" fill="freeze"/>
          <g transform="scale(1.3)"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur=".75s" repeatCount="indefinite"/>${frauMitSixpacks}
            <g transform="translate(-7 -46)"><ellipse rx="1.3" ry="2.1" class="schweiss v-tropf" style="--d:2.6s"/></g><g transform="translate(8 -48)"><ellipse rx="1.3" ry="2.1" class="schweiss v-tropf" style="--d:3.3s"/></g></g></g></g>
        <rect y="158" width="320" height="22" fill="#8a6f50"/><rect y="158" width="320" height="22" fill="url(#v-abdunkeln)" opacity=".45"/>
        ${blase(104, 22, "Zwei Sixpacks, 18 Kilo", 0.6, 3.3)}
        ${blase(104, 22, "Puh, wird das schwer", 4.0, 3.3)}
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:2.8s;fill:#f3ead9">Und später muss das Leergut zurück.</text>`
    },
    {
      dauer: 7, vorher: true, titel: "Bisher: Leergut zurückbringen",
      text: "Die leeren Flaschen sammeln sich in der Tüte. Dann geht es zum Pfandautomaten, Flasche für Flasche.",
      svg: `<rect y="150" width="320" height="30" fill="#d9dfe2"/><rect y="150" width="320" height="30" fill="url(#v-abdunkeln)" opacity=".3"/>
        ${[40, 120, 200, 280].map(x => `<line x1="${x}" y1="150" x2="${x - 14}" y2="180" stroke="#aab4b8" stroke-width=".8"/>`).join("")}
        <ellipse cx="208" cy="151" rx="40" ry="4" fill="#000" opacity=".16" filter="url(#v-blur)"/>
        <rect x="172" y="40" width="72" height="111" rx="5" fill="#eef1f3" stroke="#cfd6da"/><rect x="172" y="40" width="72" height="111" rx="5" fill="url(#v-abdunkeln-r)" opacity=".25"/>
        <rect x="182" y="50" width="52" height="22" rx="3" fill="#1c2326"/>
        <path d="M200 61 H214 M209 56 L214 61 L209 66" fill="none" stroke="#3fc1a1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="208" cy="94" r="13" fill="#5a6468"/><circle cx="208" cy="94" r="10" fill="#0b0f10"/>
        <rect x="186" y="122" width="44" height="14" rx="2" fill="#cfd6da"/><rect x="190" y="126" width="36" height="6" rx="1.5" fill="#5a6468"/>
        <g transform="translate(102 152) scale(1.45)">${figurFrau(0, -14)}</g>
        <line x1="110" y1="102" x2="124" y2="116" class="figur-strich" style="stroke-width:4.4"/>
        <g transform="translate(130 118)"><path d="M-12 2 L-10 30 Q-10 33 -7 33 H7 Q10 33 10 30 L12 2 Z" fill="#fff" opacity=".55" stroke="#cfd6da"/>
          ${[[-7, 30, -8], [-1, 31, 4], [5, 30, 10], [-4, 30, 18], [3, 31, -14]].map(([bx, by, r], i) => `<g class="v-weg" style="--d:${(1.05 + i * 0.9).toFixed(2)}s"><g transform="translate(${bx} ${by}) rotate(${r}) scale(.55)">${flasche("")}</g></g>`).join("")}
          <path d="M-12 2 Q0 -6 12 2" fill="none" stroke="#cfd6da" stroke-width="1.4"/></g>
        ${[1.0, 1.9, 2.8, 3.7, 4.6].map((d, i) => `<g transform="translate(208 98)"><g class="v-flug" style="--d:${d}s;--sx:${-80 + (i % 3) * 4}px;--sy:24px"><g transform="scale(.75)">${flasche("")}</g></g></g>`).join("")}
        ${blase(96, 36, "Flasche für Flasche", 0.6, 3.2)}
        ${blase(96, 36, "Bis die Tüte leer ist", 4.0, 3.0)}`
    },
    {
      dauer: 7, titel: "Leitungswasser in die Flasche",
      text: "Du füllst die Flasche am Wasserhahn und setzt sie in den Sprudler.",
      svg: `<g transform="translate(162 160) scale(2.3)">${figurFrau(0, -14)}</g>
        ${platte()}
        ${spuele(40)}
        ${sprudler(232, 128, 0.95, { flascheDrin: false })}
        <g class="v-ein" style="--d:.5s"><g class="v-weg" style="--d:2.7s"><rect x="104.9" y="53" width="2.2" height="25" rx="1.1" fill="#7cc8ff" opacity=".85"/></g></g>
        <g transform="translate(106 129)"><animateTransform attributeName="transform" type="translate" values="106 129;106 129;110 124;162 123;224.4 127.5;224.4 123.25;224.4 123.25" keyTimes="0;.6;.66;.78;.88;.94;1" dur="5s" fill="freeze"/>
          <g transform="scale(1.1875)">${flasche(wasser(0.6, 2.1), false)}</g></g>
        ${stutzen(232, 128, 0.95)}
        <g class="v-ein" style="--d:4.75s"><g transform="translate(224.4 66)"><circle r="8" class="tipp v-tipp" style="--d:4.75s"/></g></g>
        <g class="v-weg" style="--d:5.4s">
          <line x1="149" y1="80" x2="106" y2="107.6" class="figur-strich" style="stroke-width:6"><animate attributeName="x1" values="149;149;149;162;175;175;175" keyTimes="0;.6;.66;.78;.88;.94;1" dur="5s" fill="freeze"/><animate attributeName="x2" values="106;106;110;162;224.4;224.4;224.4" keyTimes="0;.6;.66;.78;.88;.94;1" dur="5s" fill="freeze"/><animate attributeName="y2" values="107.6;107.6;102.6;101.6;106.1;101.85;101.85" keyTimes="0;.6;.66;.78;.88;.94;1" dur="5s" fill="freeze"/></line>
          <circle cx="106" cy="107.6" r="4.6" class="figur"><animate attributeName="cx" values="106;106;110;162;224.4;224.4;224.4" keyTimes="0;.6;.66;.78;.88;.94;1" dur="5s" fill="freeze"/><animate attributeName="cy" values="107.6;107.6;102.6;101.6;106.1;101.85;101.85" keyTimes="0;.6;.66;.78;.88;.94;1" dur="5s" fill="freeze"/></circle></g>
        ${blase(150, 22, "Leitungswasser rein", 0.5, 3.0)}
        ${blase(150, 22, "Flasche einsetzen", 3.7, 3.1)}`
    },
    {
      dauer: 7.5, titel: "Drücken, und es sprudelt",
      text: "Ein paar Mal drücken, schon hat das Wasser Kohlensäure. Wie sprudelig es wird, entscheidest du selbst.",
      svg: `<g transform="translate(196 160) scale(2.3)">${figurFrau(0, -14)}</g>
        ${platte()}
        ${sprudler(140, 128, 0.95, {
          hebel: `<animateTransform attributeName="transform" type="translate" values="0 0;0 3.5;0 0;0 0;0 3.5;0 0;0 0;0 3.5;0 0" keyTimes="0;.08;.2;.33;.41;.53;.66;.74;.86" begin=".8s" dur="2.6s" fill="freeze"/>`,
          flascheDrin: false
        })}
        <g class="v-ein" style="--d:3.9s">${glas(279, 128, 5.6, 1.2)}</g>
        <g transform="translate(132.4 123.25)"><animateTransform attributeName="transform" type="translate" values="132.4 123.25;132.4 123.25;132.4 126.25;150 124;176 118;226 88" keyTimes="0;.7407;.8056;.8611;.9259;1" dur="5.4s" fill="freeze"/>
          <g><animateTransform attributeName="transform" type="rotate" values="0;0;0;15;55;100" keyTimes="0;.7407;.8056;.8611;.9259;1" dur="5.4s" fill="freeze"/>
            <g transform="scale(1.1875)">${flasche(`<rect x="-7.4" y="-31" width="14.8" height="30.4" rx="2" fill="#7cc8ff" opacity=".7"/>${blasen(1.0, 8)}`, false)}</g></g></g>
        ${stutzen(140, 128, 0.95)}
        <g class="v-ein" style="--d:5.5s"><g class="v-weg" style="--d:6.9s"><path d="M276.3 97.5 Q277.2 106 277.4 123" fill="none" stroke="#7cc8ff" stroke-width="2.4" stroke-linecap="round" opacity=".9"/></g></g>
        <g class="v-weg" style="--d:3.6s"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 3.7;0 0;0 0;0 3.7;0 0;0 0;0 3.7;0 0" keyTimes="0;.08;.2;.33;.41;.53;.66;.74;.86" begin=".8s" dur="2.6s" fill="freeze"/>
          <line x1="184" y1="80" x2="170" y2="56" class="figur-strich" style="stroke-width:6"/><circle cx="169" cy="54" r="4.6" class="figur"/></g></g>
        <g class="v-ein" style="--d:3.6s">
          <line x1="184" y1="80" x2="169" y2="54" class="figur-strich" style="stroke-width:6"><animate attributeName="x1" values="184;184;184;184;196;207" keyTimes="0;.194;.417;.583;.778;1" begin="3.6s" dur="1.8s" fill="freeze"/><animate attributeName="x2" values="169;132.4;132.4;155.5;193.5;247.1" keyTimes="0;.194;.417;.583;.778;1" begin="3.6s" dur="1.8s" fill="freeze"/><animate attributeName="y2" values="54;101.9;104.85;103.3;105.7;91.7" keyTimes="0;.194;.417;.583;.778;1" begin="3.6s" dur="1.8s" fill="freeze"/></line>
          <circle cx="169" cy="54" r="4.6" class="figur"><animate attributeName="cx" values="169;132.4;132.4;155.5;193.5;247.1" keyTimes="0;.194;.417;.583;.778;1" begin="3.6s" dur="1.8s" fill="freeze"/><animate attributeName="cy" values="54;101.9;104.85;103.3;105.7;91.7" keyTimes="0;.194;.417;.583;.778;1" begin="3.6s" dur="1.8s" fill="freeze"/></circle></g>
        ${[0.85, 1.7, 2.55].map(d => `<g class="v-ein" style="--d:${d}s"><g transform="translate(166 53)"><circle r="8" class="tipp v-tipp" style="--d:${d}s"/></g></g>`).join("")}
        ${blase(92, 26, "Drücken, und es sprudelt", 0.5, 3.2)}
        ${blase(92, 26, "Frisch eingeschenkt", 4.0, 3.2)}`
    },
    {
      dauer: 7, titel: "Die Ecke bleibt leer",
      text: "Keine Sixpacks mehr in der Ecke und kein Leergut. Nur den Gaszylinder tauschst du ab und zu.",
      svg: `<rect y="136" width="320" height="44" fill="url(#v-holz)"/><rect y="136" width="320" height="44" fill="url(#v-abdunkeln)" opacity=".2"/><rect y="133" width="320" height="3" fill="#d8cfbf"/>
        ${[[40, 112], [64, 112], [88, 112], [52, 92], [76, 92]].map(([x, y]) => `<rect x="${x - 11}" y="${y}" width="22" height="20" rx="2.5" class="kreis-pfad v-ein" style="--d:1.4s"/>`).join("")}
        <g class="v-weg" style="--d:1.2s">${[[40, 112], [64, 112], [88, 112], [52, 92], [76, 92]].map(([x, y]) => sixpack(x, y - 3, 1.1)).join("")}</g>
        ${funkel(36, 84, 1.8, 0.9)}${funkel(100, 80, 2.3, 1.1)}${funkel(66, 70, 2.8, 0.8)}
        <text x="66" y="56" text-anchor="middle" class="t-klein v-hoch" style="--d:1.6s">Die Ecke bleibt frei</text>
        <g transform="translate(232 152) scale(1.55)">${figurFrau(0, -14)}</g>
        <line x1="240" y1="102" x2="246" y2="84" class="figur-strich" style="stroke-width:4.6"/>
        <g transform="translate(248 86) scale(.62)">${glas(0, 0, 0, 0.01)}</g>
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:2.4s;fill:#3b2f22">Nur der Gaszylinder wird ab und zu getauscht.</text>`
    }
  ] };
})();

// ============================================================
// Sparduschkopf (Figur: Mann)
// ============================================================
(function () {
  // Bad: Fliesenwand und Boden
  const bad = `<rect width="320" height="180" class="bad-wand"/>${fliesen(0, 0, 320, 150, 25)}<rect y="150" width="320" height="30" class="bad-boden"/><rect y="150" width="320" height="2" fill="#000" opacity=".08"/>`;
  // Duschkopf, Ursprung = Anschluss am Schlauch; spar = schlanker Sparduschkopf
  const kopf = spar => spar
    ? `<rect x="-3" y="-3" width="8" height="6" rx="2" fill="#aab4b8"/><path d="M4 -7 Q20 -9 24 2 Q20 10 4 7 Z" fill="url(#v-metall)" stroke="#8a949a" stroke-width=".6"/><path d="M22 -3 L24 2 L22 7" fill="none" stroke="#3fc1a1" stroke-width="1.6" stroke-linecap="round"/>`
    : `<rect x="-3" y="-3" width="8" height="6" rx="2" fill="#aab4b8"/><path d="M4 -10 Q26 -14 30 2 Q26 16 4 10 Z" fill="url(#v-metall)" stroke="#8a949a" stroke-width=".6"/><path d="M28 -6 L30 2 L28 10" fill="none" stroke="#5a6468" stroke-width="2.2" stroke-linecap="round"/>`;
  // Wasserstrahlen aus dem Kopf (Kopf zeigt schräg nach unten), n = wie viele
  const strahl = (n, breite) => Array.from({ length: n }, (_, i) => {
    const x = 104 + (i - (n - 1) / 2) * breite;
    return `<line x1="${(104 + (i - (n - 1) / 2) * 3).toFixed(1)}" y1="44" x2="${x.toFixed(1)}" y2="150" stroke="#7cc8ff" stroke-width="1.4" stroke-dasharray="6 4" class="v-fliess" opacity=".75"/>`;
  }).join("");
  // Dusche: Rohr an der Wand, Kopf an der Halterung über dem Mann (Kopf-Anschluss bei 86 38)
  const dusche = (spar, viel) => `<rect x="62" y="34" width="5" height="80" rx="2.5" fill="url(#v-metall-h)"/><rect x="54" y="104" width="22" height="10" rx="4" fill="url(#v-metall)" stroke="#aab4b8" stroke-width=".6"/>
      <path d="M64 36 H82" stroke="#aab4b8" stroke-width="4" stroke-linecap="round"/>
      ${strahl(viel ? 9 : 6, viel ? 5.2 : 4.4)}
      <g transform="translate(86 38) rotate(48)">${kopf(spar)}</g>`;
  // Mann unter der Dusche hinter einer Glaswand, mit Dampf
  const duschMann = `<g transform="translate(108 160) scale(1.6)">${figur(0, -14)}</g>
      ${[0, 1, 2].map(i => `<g transform="translate(${92 + i * 16} ${70 - (i % 2) * 6})"><ellipse rx="8" ry="5" class="dampf ueber-hell v-dampf" style="--d:${(0.3 + i * 0.6).toFixed(1)}s" filter="url(#v-blur)"/></g>`).join("")}
      <rect x="44" y="104" width="124" height="48" rx="2" fill="#dff1fb" opacity=".55"/><rect x="44" y="104" width="124" height="48" rx="2" fill="url(#v-glas)"/><rect x="44" y="104" width="124" height="48" rx="2" fill="none" stroke="#aab4b8" stroke-width="1.2"/>`;
  // Warmwasser-Gerät an der Wand; ruhig = die Flamme ist kleiner und pulsiert langsamer
  const geraet = ruhig => `<g transform="translate(206 40)">
      <rect x="-17" y="0" width="34" height="48" rx="5" fill="#f7f9fa" stroke="#cfd6da" filter="url(#v-sch)"/><rect x="-11" y="8" width="22" height="20" rx="3" fill="#1c2326"/>
      <g transform="translate(0 25)"><g class="v-pop" style="--d:.3s"><path d="M0 0 Q-7 -3 -4 -10 Q-2 -6 0 -14 Q3 -7 5 -9 Q8 -2 0 0 Z" fill="url(#v-orange-g)" transform="scale(${ruhig ? 0.62 : 1})">
        <animate attributeName="opacity" values="1;.65;1" dur="${ruhig ? 2.2 : 0.5}s" repeatCount="indefinite"/></path></g></g>
      <path d="M-8 48 V58 M8 48 V58" stroke="#aab4b8" stroke-width="2.4"/>
      <text y="72" text-anchor="middle" class="t-mini leise">Warmwasser</text></g>`;
  // Messeimer mit Strichen; d/len = wann und wie schnell er voll läuft, bis = wie voll am Ende (0 bis 1)
  const eimer = (x, d, len, bis = 1, label = "Messeimer") => `<g transform="translate(${x} 156)">
      <ellipse cy="1" rx="20" ry="3" fill="#000" opacity=".14" filter="url(#v-blur)"/>
      <path d="M-18 -44 L-14 0 H14 L18 -44 Z" fill="#f7f9fa" opacity=".7" stroke="#aab4b8" stroke-width="1.2"/>
      <path d="M${(-14 - 4 * bis).toFixed(1)} ${(-44 * bis).toFixed(1)} L-14 0 H14 L${(14 + 4 * bis).toFixed(1)} ${(-44 * bis).toFixed(1)} Z" fill="#7cc8ff" opacity=".75" class="v-fuell" style="--d:${d}s;--len:${len}s"/>
      ${[-11, -22, -33].map(y => `<line x1="9" y1="${y}" x2="15" y2="${y}" stroke="#5a6468" stroke-width="1"/>`).join("")}
      <path d="M-18 -44 Q0 -56 18 -44" fill="none" stroke="#8a949a" stroke-width="1.2"/>
      <text y="-60" text-anchor="middle" class="t-mini leise">${label}</text></g>`;

  VIDEOS.sparduschkopf = { szenen: [
    {
      dauer: 7.5, vorher: true, titel: "Bisher: Der alte Duschkopf",
      text: "Durch einen alten Duschkopf läuft viel Wasser. Im Messeimer sieht man es: Er ist in kurzer Zeit voll. Und das ganze Wasser muss warm gemacht werden.",
      svg: `${bad}
        ${dusche(false, true)}${duschMann}
        ${geraet(false)}
        ${eimer(274, 0.6, 2.6)}
        ${blase(132, 20, "Der Eimer ist schnell voll", 0.6, 3.3)}
        ${blase(132, 20, "Und alles wird warm gemacht", 4.0, 3.3)}
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:2.8s;fill:#2b3338">Viel Wasser, und alles muss warm werden.</text>`
    },
    {
      dauer: 6.5, titel: "Duschkopf tauschen",
      text: "Den alten Duschkopf vom Schlauch abschrauben, den neuen anschrauben. Meist geht das ganz ohne Werkzeug.",
      svg: `${bad}
        <path d="M-10 170 C40 160 70 140 96 112" fill="none" stroke="#aab4b8" stroke-width="7" stroke-linecap="round"/>
        <path d="M-10 170 C40 160 70 140 96 112" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".5"/>
        <g transform="translate(96 112) rotate(-48)"><rect x="-2" y="-6" width="14" height="12" rx="3" fill="url(#v-metall)" stroke="#8a949a" stroke-width=".6"/></g>
        <g class="v-weg" style="--d:2.3s"><g transform="translate(106 102) rotate(-48) scale(2.2)"><g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;34 0" keyTimes="0;.45;1" dur="2.2s" fill="freeze"/>${kopf(false)}<circle cx="16" cy="1" r="4.2" class="figur"/><line x1="16" y1="4" x2="6" y2="40" class="figur-strich" style="stroke-width:5"/></g></g></g>
        <g class="v-ein" style="--d:2.6s"><g transform="translate(106 102) rotate(-48) scale(2.2)"><g transform="translate(34 0)"><animateTransform attributeName="transform" type="translate" values="34 0;0 0;0 0" keyTimes="0;.7;1" begin="2.6s" dur="2s" fill="freeze"/>${kopf(true)}<circle cx="16" cy="1" r="4.2" class="figur"/><line x1="16" y1="4" x2="6" y2="40" class="figur-strich" style="stroke-width:5"/></g></g></g>
        <g class="v-ein" style="--d:0.6s"><g class="v-weg" style="--d:2.1s"><g transform="translate(96 112)"><g class="v-dreh" style="animation-duration:1.1s"><path d="M0 -17 A17 17 0 1 1 -15 -8" fill="none" stroke="#3fc1a1" stroke-width="2.6" stroke-linecap="round"/><path d="M-19 -13 L-15 -7.5 L-9.5 -10.5" fill="none" stroke="#3fc1a1" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></g></g></g></g><g class="v-ein" style="--d:3.0s"><g class="v-weg" style="--d:4.6s"><g transform="translate(96 112)"><g class="v-dreh" style="animation-duration:1.1s"><path d="M0 -17 A17 17 0 1 1 -15 -8" fill="none" stroke="#3fc1a1" stroke-width="2.6" stroke-linecap="round"/><path d="M-19 -13 L-15 -7.5 L-9.5 -10.5" fill="none" stroke="#3fc1a1" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></g></g></g></g>
        ${zeile(176, 44, "Alten abschrauben", 0.5)}
        ${zeile(176, 72, "Neuen anschrauben", 2.7)}
        ${zeile(176, 100, "Meist ohne Werkzeug", 3.4, "t-klein")}`
    },
    {
      dauer: 7.5, titel: "Gleich warm, weniger Wasser",
      text: "Du duschst so warm und so lange wie vorher. Aber der Messeimer füllt sich sichtbar langsamer, und das Gerät muss weniger Wasser heizen.",
      svg: `${bad}
        ${dusche(true, false)}${duschMann}
        ${geraet(true)}
        ${eimer(274, 0.6, 5.2)}
        ${blase(132, 20, "Genauso warm", 0.6, 3.3)}
        ${blase(132, 20, "Der Eimer füllt sich langsamer", 4.0, 3.3)}`
    },
    {
      dauer: 6.5, titel: "Gleich lange geduscht",
      text: "Bei gleicher Duschzeit läuft durch den Sparduschkopf weniger Wasser. Bei einem alten Duschkopf mit 15 Litern pro Minute ist es nur gut halb so viel.",
      svg: `${bad}
        <text x="160" y="46" text-anchor="middle" class="t-mittel fett v-hoch" style="--d:.3s">Gleich lange geduscht</text>
        ${eimer(92, 0.8, 2.4, 1, "Alter Duschkopf")}
        ${eimer(228, 0.8, 2.4, 0.57, "Sparduschkopf")}
        ${funkel(256, 126, 3.4, 1)}${funkel(198, 132, 3.9, 0.8)}`
    }
  ] };
})();

// ============================================================
// Kaffeevollautomat (Figur: Frau)
// ============================================================
(function () {
  const platte = (breite = 320) => `<rect y="128" width="${breite}" height="32" fill="url(#v-holz)"/><rect y="128" width="${breite}" height="32" fill="url(#v-boden-licht)"/><rect y="158" width="${breite}" height="22" fill="#8a6f50"/><rect y="158" width="${breite}" height="22" fill="url(#v-abdunkeln)" opacity=".45"/>`;
  const KAPSEL_FARBEN = ["#b23b2c", "#d4921c", "#6b3f8f", "#2f7a3c", "#1f6fb5"];
  // Kaffeekapsel von der Seite, Ursprung = Mitte
  const kapsel = (farbe, s = 1) => `<g transform="scale(${s})"><path d="M-5 -3.6 H5 L3.4 3.6 H-3.4 Z" fill="${farbe}"/><rect x="-6" y="-4.6" width="12" height="1.8" rx=".6" fill="#cfd6da"/><path d="M-4 -2 H1" stroke="#fff" stroke-opacity=".35" stroke-width="1"/></g>`;
  // Tasse von vorn, Ursprung = Mitte unten; kaffee/schaum = Füllung mit v-fuell (Beginn, Dauer)
  const tasse = (x, y, s, fuell = null) => `<g transform="translate(${x} ${y}) scale(${s})">
      <path d="M7 -9 Q13 -9 13 -5 Q13 -1 7 -2" fill="none" stroke="#e3e9ec" stroke-width="2.2"/>
      <path d="M-8 -12 H8 L7 -2 Q6.5 0 4.5 0 H-4.5 Q-6.5 0 -7 -2 Z" fill="url(#v-keramik)" stroke="#cfd6da" stroke-width=".6"/>
      ${fuell ? `<path d="M-7.6 -10 H7.6 L6.8 -2.4 Q6.4 -.8 4.4 -.8 H-4.4 Q-6.4 -.8 -6.8 -2.4 Z" fill="#6b3f1f" class="v-fuell" style="--d:${fuell[0]}s;--len:${fuell[1]}s"/>
        <ellipse cy="-10.4" rx="7.6" ry="1.8" fill="#f3e6c4" class="v-pop" style="--d:${(fuell[0] + fuell[1] + 0.2).toFixed(2)}s"/>` : ""}
    </g>`;
  // Kapselmaschine, Ursprung = Mitte unten
  const kapselMaschine = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cy="1" rx="22" ry="3" fill="#000" opacity=".16" filter="url(#v-blur)"/>
      <rect x="-16" y="-4" width="32" height="4" rx="2" fill="#5a6468"/>
      <path d="M-14 -4 V-52 Q-14 -60 -6 -60 H8 Q14 -60 14 -52 V-4 Z" fill="#c9302c"/><path d="M-14 -4 V-52 Q-14 -60 -6 -60 H8 Q14 -60 14 -52 V-4 Z" fill="url(#v-glanz)" opacity=".35"/>
      <rect x="-14" y="-40" width="28" height="12" fill="#2b3338"/><rect x="-4" y="-30" width="8" height="5" rx="1.5" fill="#1c2326"/>
      <path d="M-10 -60 L10 -66" stroke="#2b3338" stroke-width="3.4" stroke-linecap="round"/>
    </g>`;

  VIDEOS.kaffeevollautomat = { szenen: [
    {
      dauer: 7.5, vorher: true, titel: "Bisher: Kapsel für Kapsel",
      text: "Kapsel rein, Kaffee läuft, die leere Kapsel fällt in den Behälter. Der ist schon wieder voll, und im Ständer liegt keine Kapsel mehr.",
      svg: `<g transform="translate(150 160) scale(1.6)">${figurFrau(0, -14)}</g>
        <line x1="140" y1="102" x2="108" y2="78" class="figur-strich" style="stroke-width:5"/>
        ${platte()}
        ${kapselMaschine(94, 128, 1.15)}
        <g transform="translate(94 120)"><g class="v-fall" style="--d:.6s">${kapsel(KAPSEL_FARBEN[1], 1.2)}</g></g>
        <g class="v-ein" style="--d:1.4s"><g class="v-weg" style="--d:3.6s"><rect x="93" y="100" width="2.4" height="19" rx="1.2" fill="#6b3f1f"/></g></g>
        ${tasse(94, 127, 1.05, [1.4, 2.2])}
        <g transform="translate(40 128)">
          <rect x="-20" y="-30" width="40" height="30" rx="3" fill="#e8f5ff" opacity=".45" stroke="#aab4b8"/>
          ${[[-14, -4, 0], [-4, -4, 1], [6, -4, 2], [15, -4, 3], [-10, -12, 4], [0, -12, 0], [10, -12, 2], [-15, -20, 3], [-5, -20, 1], [5, -20, 4], [14, -20, 0], [-8, -28, 2], [3, -28, 3], [12, -29, 1]].map(([kx, ky, f], i) => `<g transform="translate(${kx} ${ky}) rotate(${(i * 37) % 60 - 30})">${kapsel(KAPSEL_FARBEN[f], 1.05)}</g>`).join("")}
          <g transform="translate(-2 -50)"><g class="v-fall" style="--d:3.8s"><g transform="rotate(20)">${kapsel(KAPSEL_FARBEN[1], 1.05)}</g></g></g>
          <g transform="translate(-30 2)"><g class="v-pop" style="--d:4.5s"><g transform="rotate(-70)">${kapsel(KAPSEL_FARBEN[1], 1.05)}</g></g></g>
        </g>
        <g transform="translate(250 128)">
          <rect x="-1.5" y="-56" width="3" height="56" fill="#8a949a"/><ellipse cy="-1" rx="12" ry="2.5" fill="#5a6468"/>
          ${[-48, -38, -28, -18, -8].map(ry => `<ellipse cx="-7" cy="${ry}" rx="5" ry="1.6" fill="none" stroke="#8a949a" stroke-width="1.2"/><ellipse cx="7" cy="${ry}" rx="5" ry="1.6" fill="none" stroke="#8a949a" stroke-width="1.2"/>`).join("")}
        </g>
        <text x="250" y="140" text-anchor="middle" class="t-mini leise v-hoch" style="--d:4.6s;fill:#3b2f22">Ständer leer</text>
        ${blase(118, 30, "Behälter schon wieder voll", 0.6, 3.3)}
        ${blase(118, 30, "Und keine Kapsel mehr da", 4.0, 3.3)}
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:2.8s;fill:#f3ead9">Also Jacke an und ab ins Café.</text>`
    },
    {
      dauer: 7, vorher: true, titel: "Bisher: Schlange im Café",
      text: "Mit Jacke ins Café und anstehen. Am Ende gibt es einen Pappbecher.",
      svg: `<rect y="150" width="320" height="30" fill="url(#v-holz)"/><rect y="150" width="320" height="30" fill="url(#v-abdunkeln)" opacity=".25"/>
        <rect x="214" y="104" width="106" height="48" fill="#6e482c"/><rect x="210" y="98" width="110" height="8" rx="2" fill="#3a2616"/>
        <g transform="translate(286 98)"><rect x="-20" y="-36" width="40" height="36" rx="3" fill="#cfd6da"/><rect x="-20" y="-36" width="40" height="8" rx="3" fill="#8a949a"/><rect x="-12" y="-22" width="6" height="8" rx="1" fill="#2b3338"/><rect x="6" y="-22" width="6" height="8" rx="1" fill="#2b3338"/></g>
        ${[[184, 1.5, false], [156, 1.5, true], [128, 1.5, false]].map(([x, s, frau]) => `<g transform="translate(${x} 152) scale(${s})" opacity=".55">${frau ? figurFrau(0, -14) : figur(0, -14)}</g>`).join("")}
        <g><animateTransform attributeName="transform" type="translate" values="-40 0;0 0" keyTimes="0;1" begin=".3s" dur="1.6s" fill="freeze"/>
          <g transform="translate(96 152) scale(1.5)">${figurFrau(0, -14)}<path d="M-6.4 -23.4 Q0 -26 6.4 -23.4 L9.5 -2 H-9.5 Z" fill="#b35a3c"/><path d="M0 -24 V-3" stroke="#7d3a24" stroke-width="1"/></g></g>
        <g class="v-pop" style="--d:4.6s"><g transform="translate(226 96)"><path d="M-5 -14 H5 L4 0 H-4 Z" fill="#f4efe6" stroke="#cfd6da" stroke-width=".6"/><rect x="-5.6" y="-16" width="11.2" height="3" rx="1" fill="#5a6468"/><rect x="-4.6" y="-9" width="9" height="4" fill="#a5601f" opacity=".7"/></g></g>
        ${blase(110, 34, "Anstehen", 0.6, 3.4)}
        ${blase(110, 34, "Für einen Pappbecher", 4.0, 3.0)}`
    },
    {
      dauer: 6.5, titel: "Bohnen oben rein",
      text: "Der Vollautomat mahlt frische Bohnen. Du füllst sie oben in den Behälter, das reicht für viele Tassen.",
      svg: `${platte()}
        <g transform="translate(110 128) scale(.85)">
          <ellipse cy="1" rx="40" ry="4" fill="#000" opacity=".18" filter="url(#v-blur)"/>
          <rect x="-34" y="-96" width="68" height="96" rx="7" fill="url(#v-dunkel)" stroke="#6b767b" stroke-width=".8"/>
          <rect x="-28" y="-90" width="56" height="10" rx="4" fill="#5a6468"/>
          <g class="v-weg" style="--d:.6s"><rect x="-26" y="-94" width="34" height="6" rx="3" fill="#8a949a"/></g>
          <g class="v-ein" style="--d:.6s"><g class="v-weg" style="--d:4.4s"><rect x="-26" y="-92" width="34" height="4" rx="1.5" fill="#1c2326"/>
            <path d="M-24 -92 Q-9 -88 6 -92" fill="#6b3f1f" class="v-fuell" style="--d:1.4s;--len:2.4s"/></g></g>
          <g class="v-ein" style="--d:4.4s"><rect x="-26" y="-94" width="34" height="6" rx="3" fill="#8a949a"/></g>
          <rect x="-24" y="-74" width="48" height="14" rx="3" fill="#1c2326"/>
        </g>
        <g class="v-ein" style="--d:.8s"><g class="v-weg" style="--d:4.2s">
          <line x1="214" y1="-6" x2="146" y2="14" class="figur-strich" style="stroke-width:6"/><circle cx="144" cy="15" r="5" class="figur"/>
          <g transform="translate(130 22) rotate(-115)"><path d="M-12 -18 H12 L10 16 H-10 Z" fill="#c49a6c"/><rect x="-12" y="-18" width="24" height="5" fill="#8a6f50"/><circle cy="2" r="5" fill="#8a6f50" opacity=".5"/></g></g></g>
        ${Array.from({ length: 12 }, (_, i) => `<g transform="translate(${110 + (i % 3) * 3} 31)"><g class="v-ein" style="--d:${(1.2 + (i % 6) * 0.1).toFixed(1)}s"><g class="v-weg" style="--d:3.8s"><g><animateTransform attributeName="transform" type="translate" values="0 0;-6 17" dur=".6s" begin="${(i * 0.05).toFixed(2)}s" repeatCount="indefinite"/><ellipse rx="2.2" ry="1.5" fill="#6b3f1f" stroke="#3a2616" stroke-width=".5"/></g></g></g></g>`).join("")}
        ${zeile(176, 62, "Bohnen oben rein", 0.5)}
        ${zeile(176, 91, "Deckel zu", 3.4)}`
    },
    {
      dauer: 7.5, titel: "Ein Knopf, fertig",
      text: "Tasse drunter, Knopf drücken. Der Automat mahlt, brüht und schäumt die Milch auf. Du setzt dich derweil an den Tisch.",
      svg: `${platte(206)}<rect x="206" y="150" width="114" height="30" fill="url(#v-holz)"/><rect x="206" y="150" width="114" height="30" fill="url(#v-abdunkeln)" opacity=".25"/>
        <g transform="translate(96 128)">
          <ellipse cy="1" rx="40" ry="4" fill="#000" opacity=".18" filter="url(#v-blur)"/>
          <rect x="-34" y="-96" width="68" height="96" rx="7" fill="url(#v-dunkel)" stroke="#6b767b" stroke-width=".8"/>
          <rect x="-28" y="-90" width="56" height="10" rx="4" fill="#5a6468"/><rect x="-26" y="-94" width="34" height="6" rx="3" fill="#8a949a"/>
          <rect x="-24" y="-74" width="48" height="14" rx="3" fill="#1c2326"/>
          ${[-14, -2, 10].map((bx, i) => `<circle cx="${bx}" cy="-67" r="3.2" fill="${i === 1 ? "#3fc1a1" : "#5a6468"}"/>`).join("")}
          <rect x="-12" y="-54" width="24" height="7" rx="2" fill="#5a6468"/>
          <rect x="-6" y="-48" width="3" height="5" fill="#8a949a"/><rect x="3" y="-48" width="3" height="5" fill="#8a949a"/>
          <rect x="-26" y="-8" width="52" height="8" rx="2" fill="#5a6468"/>${[-18, -10, -2, 6, 14].map(gx => `<line x1="${gx}" y1="-7" x2="${gx + 4}" y2="-7" stroke="#2b3338" stroke-width="1.4"/>`).join("")}
          <g class="v-ein" style="--d:1.6s"><g class="v-weg" style="--d:3.6s"><rect x="-5.2" y="-43" width="1.6" height="26" fill="#6b3f1f"/></g></g>
          <g class="v-ein" style="--d:3.6s"><g class="v-weg" style="--d:5.0s"><rect x="3.6" y="-43" width="2" height="26" fill="#f3e6c4"/></g></g>
        </g>
        <g class="v-hoch" style="--d:.3s">${tasse(96, 120, 1.25, [1.7, 3.2])}</g>
        <g class="v-ein" style="--d:1.0s"><g transform="translate(94 61)"><circle r="7" class="tipp v-tipp" style="--d:1.0s"/></g></g>
        ${[0, 1].map(i => `<g transform="translate(${92 + i * 8} 96)"><ellipse rx="4" ry="3" class="dampf ueber-hell v-dampf" style="--d:${(5.0 + i * 0.6).toFixed(1)}s" filter="url(#v-blur)"/></g>`).join("")}
        <rect x="216" y="112" width="84" height="6" rx="2" fill="#a5835e"/><rect x="226" y="118" width="4" height="34" fill="#8a6f50"/><rect x="286" y="118" width="4" height="34" fill="#8a6f50"/>
        <g transform="translate(278 152) scale(1.45)">${figurFrau(0, -14)}</g>
        <rect x="250" y="122" width="22" height="5" rx="2" fill="#8a6f50"/><rect x="252" y="127" width="3" height="25" fill="#6e482c"/>
        <g class="v-ein" style="--d:5.4s"><g transform="translate(262 112)">${tasse(0, 0, 0.9, null).replace('<path d="M-8 -12', '<path d="M-7.6 -10.4 H7.6" stroke="#6b3f1f" stroke-width="2"/><path d="M-8 -12')}</g>
          <line x1="272" y1="98" x2="266" y2="108" class="figur-strich" style="stroke-width:4.4"/></g>
        ${blase(214, 54, "Ein Knopf", 0.5, 3.1)}
        ${blase(214, 54, "Kaffee und Milchschaum", 3.8, 3.4)}`
    },
    {
      dauer: 7, titel: "Ehrlich: ein paar Handgriffe",
      text: "Regelmäßig leerst du die Tropfschale und den Kaffeesatz. Viele Geräte melden sich, wenn es so weit ist.",
      svg: `${platte()}
        <g transform="translate(92 128)">
          <ellipse cy="1" rx="40" ry="4" fill="#000" opacity=".18" filter="url(#v-blur)"/>
          <rect x="-34" y="-96" width="68" height="96" rx="7" fill="url(#v-dunkel)" stroke="#6b767b" stroke-width=".8"/>
          <rect x="-28" y="-90" width="56" height="10" rx="4" fill="#5a6468"/><rect x="-26" y="-94" width="34" height="6" rx="3" fill="#8a949a"/>
          <rect x="-24" y="-74" width="48" height="14" rx="3" fill="#1c2326"/>
          <rect x="-12" y="-54" width="24" height="7" rx="2" fill="#5a6468"/>
          <rect x="-26" y="-14" width="52" height="6" rx="1" fill="#1c2326"/>
          <g><animateTransform attributeName="transform" type="translate" values="0 0;0 0;62 0" keyTimes="0;.3;1" dur="2s" fill="freeze"/>
            <rect x="-26" y="-14" width="52" height="14" rx="2" fill="#5a6468"/>${[-18, -10, -2, 6, 14].map(gx => `<line x1="${gx}" y1="-13" x2="${gx + 4}" y2="-13" stroke="#2b3338" stroke-width="1.4"/>`).join("")}
            <g transform="translate(14 -2)"><g class="v-ein" style="--d:1.4s"><g class="v-weg" style="--d:2.9s">${[[-6, 0], [0, -2], [6, 0], [-2, -5], [4, -6]].map(([px, py]) => `<circle cx="${px}" cy="${py}" r="3.4" fill="#3a2616" stroke="#8a6f50" stroke-width=".8"/>`).join("")}</g></g></g></g>
        </g>
        <g transform="translate(250 152)"><path d="M-17 -34 H17 L14 0 H-14 Z" fill="#7a4a2a"/><rect x="-19" y="-38" width="38" height="6" rx="2" fill="#5b3b23"/>
          <path d="M-5 -16 Q0 -26 6 -20 Q4 -12 -5 -16 Z" fill="#6fbf7a"/><path d="M-5 -16 L3 -21" stroke="#2f7a3c" stroke-width=".8"/></g>
        <g class="v-ein" style="--d:2.9s"><g class="v-weg" style="--d:3.9s"><g transform="translate(168 124)"><g><animateTransform attributeName="transform" type="translate" values="0 0;40 -30;82 -6" keyTimes="0;.5;1" begin="2.9s" dur="1s" fill="freeze"/>${[[-6, 0], [0, -2], [6, 0], [-2, -5], [4, -6]].map(([px, py]) => `<circle cx="${px}" cy="${py}" r="3.4" fill="#3a2616" stroke="#8a6f50" stroke-width=".8"/>`).join("")}</g></g></g></g>
        ${funkel(250, 104, 4.0, 0.8)}
        <text x="250" y="96" text-anchor="middle" class="t-mini leise v-hoch" style="--d:3.0s">Biomüll</text>
        ${zeile(160, 40, "Tropfschale leeren", 0.6, "t-klein")}
        ${zeile(160, 64, "Kaffeesatz in den Biomüll", 2.6, "t-klein")}`
    }
  ] };
})();

// ============================================================
// Mini-Geschirrspüler (Figur: Frau)
// ============================================================
(function () {
  // Holz-Arbeitsplatte mit Vorderkante; breite = wie weit sie nach rechts reicht
  const platte = (breite = 320) => `<rect y="128" width="${breite}" height="32" fill="url(#v-holz)"/><rect y="128" width="${breite}" height="32" fill="url(#v-boden-licht)"/><rect y="158" width="${breite}" height="22" fill="#8a6f50"/><rect y="158" width="${breite}" height="22" fill="url(#v-abdunkeln)" opacity=".45"/>`;
  // Holzboden rechts neben der Küchenzeile
  const boden = x => `<rect x="${x}" y="150" width="${320 - x}" height="30" fill="url(#v-holz)"/><rect x="${x}" y="150" width="${320 - x}" height="30" fill="url(#v-abdunkeln)" opacity=".25"/><rect x="${x}" y="147" width="${320 - x}" height="3" fill="#d8cfbf"/>`;
  // Schaumwolken auf dem Spülwasser (in Spülen-Koordinaten): erst grau etwas größer, dann weiß, so bekommt jede Wolke einen feinen Rand
  const WOLKE = [[0, 0, 4.6], [5, 0.6, 3.8], [-4.4, 1, 3.2]];
  const schaum = breite => Array.from({ length: Math.floor((breite - 12) / 15) + 1 }, (_, i) => `<g transform="translate(${10 + i * 15} ${127 + (i % 2) * 1.5})">${WOLKE.map(([cx, cy, r]) => `<circle cx="${cx}" cy="${cy}" r="${r + 0.7}" fill="#cfd6da"/>`).join("")}${WOLKE.map(([cx, cy, r]) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff"/>`).join("")}</g>`).join("");
  // Spüle in der Arbeitsplatte mit Wasserhahn; inhalt = was darin steht, mitSchaum = Spülwasser mit Schaum, hahn = wo der Hahn steht
  const spuele = (x, inhalt = "", mitSchaum = false, breite = 96, hahn = 44) => `<g transform="translate(${x} 0)">
      <rect x="${hahn}" y="96" width="8" height="34" rx="3" fill="url(#v-metall-h)"/><path d="M${hahn + 4} 98 Q${hahn + 4} 84 ${hahn + 18} 84 H${hahn + 26} V91 H${hahn + 18} Q${hahn + 11} 91 ${hahn + 11} 98" fill="url(#v-metall)" stroke="#aab4b8" stroke-width=".6"/>
      <rect x="0" y="129" width="${breite}" height="9" rx="3" fill="#aab4b8"/><rect x="4" y="130.5" width="${breite - 8}" height="6" rx="2" fill="#5a6468"/>
      ${inhalt}
      ${mitSchaum ? schaum(breite) : ""}
    </g>`;
  // Teller von vorn (stehend); schmutz = Soßenreste
  const teller = (x, y, r = 10, schmutz = false) => `<g transform="translate(${x} ${y})">
      <circle r="${r}" fill="url(#v-keramik)" stroke="#9aa4a8" stroke-width=".8"/><circle r="${(r * 0.62).toFixed(1)}" fill="#fbfcfd" stroke="#dde3e6" stroke-width=".7"/>
      ${schmutz ? `<ellipse cx="${(-r * 0.25).toFixed(1)}" cy="${(-r * 0.1).toFixed(1)}" rx="${(r * 0.3).toFixed(1)}" ry="${(r * 0.2).toFixed(1)}" fill="#c98a3a" opacity=".8"/><circle cx="${(r * 0.3).toFixed(1)}" cy="${(r * 0.28).toFixed(1)}" r="${(r * 0.13).toFixed(1)}" fill="#b23b2c" opacity=".7"/><circle cx="${(r * 0.12).toFixed(1)}" cy="${(-r * 0.4).toFixed(1)}" r="${(r * 0.08).toFixed(1)}" fill="#2f7a3c" opacity=".7"/>` : ""}
    </g>`;
  // Teller liegend im Stapel (Ursprung = Unterkante des Stapels); weg = Zeitpunkte, an denen die obersten Teller verschwinden
  const stapel = (x, y, n, weg = [], s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">${Array.from({ length: n }, (_, i) => {
      const d = weg[n - 1 - i];
      const t = `<g transform="translate(0 ${-3 - i * 3.4})"><ellipse rx="16" ry="4" fill="url(#v-keramik)" stroke="#aab4b8" stroke-width=".6"/><ellipse cy="-.6" rx="9.5" ry="2.2" fill="#fbfcfd" stroke="#dde3e6" stroke-width=".5"/><ellipse cx="-3" cy="-.8" rx="3.4" ry="1.1" fill="#c98a3a" opacity=".8"/><circle cx="3.6" cy="-.3" r=".9" fill="#b23b2c" opacity=".7"/></g>`;
      return d === undefined ? t : `<g class="v-weg" style="--d:${d}s">${t}</g>`;
    }).join("")}</g>`;
  // Trinkglas (Ursprung = Mitte unten); kopf = umgedreht, schmutz = Saftrest
  const GLAS = s => `<path d="M-6 -16 L-5 -1 Q-5 0 -4 0 H4 Q5 0 5 -1 L6 -16 Z" fill="#e8f5ff" opacity=".6" stroke="#9fc7e3" stroke-width=".8"/>${s ? `<path d="M-5.4 -6 L-5 -1 H5 L5.4 -6 Z" fill="#e9a23b" opacity=".5"/>` : ""}<path d="M-3.6 -13 L-3 -3" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity=".7"/>`;
  const glas = (x, y, s = 1, kopf = false, schmutz = false) => `<g transform="translate(${x} ${y}) scale(${s})${kopf ? " translate(0 -16) rotate(180)" : ""}">${GLAS(schmutz)}</g>`;
  // Topf von vorn (Ursprung Mitte unten)
  const topf = (x, y, s, schmutz = false) => `<g transform="translate(${x} ${y}) scale(${s})">
      <rect x="-31" y="-28" width="7" height="4" rx="2" fill="#2b3338"/><rect x="24" y="-28" width="7" height="4" rx="2" fill="#2b3338"/>
      <path d="M-25 -30 H25 V-4 Q25 0 21 0 H-21 Q-25 0 -25 -4 Z" fill="url(#v-metall)"/><path d="M-25 -30 H25 V-4 Q25 0 21 0 H-21 Q-25 0 -25 -4 Z" fill="url(#v-abdunkeln-r)" opacity=".35"/>
      <ellipse cy="-30" rx="25" ry="3.5" fill="#aab4b8"/>
      ${schmutz ? `<path d="M-18 -26 Q-10 -20 -14 -12 M6 -24 Q14 -18 10 -10" fill="none" stroke="#9a6a46" stroke-width="2.4" stroke-linecap="round" opacity=".75"/>` : ""}
    </g>`;
  // Schwamm, der hin und her reibt
  const schwamm = (x, y, dauer = 0.5) => `<g transform="translate(${x} ${y})"><g><animateTransform attributeName="transform" type="translate" values="0 0;-5 -2;3 2;0 0" dur="${dauer}s" repeatCount="indefinite"/>
      <rect x="-6" y="-4" width="12" height="8" rx="2" fill="#f7d775"/><rect x="-6" y="-4" width="12" height="3" rx="1.5" fill="#3f8f4a"/></g></g>`;
  // Seifenblasen, die aufsteigen
  const blaeschen = (x, y, n = 3) => Array.from({ length: n }, (_, i) => `<g transform="translate(${x + i * 7} ${y})"><circle r="${(1.6 + (i % 2) * 0.8).toFixed(1)}" class="dampf ueber-hell v-dampf" style="--d:${(0.3 + i * 0.7).toFixed(1)}s;animation-duration:1.8s" stroke="#9fc7e3" stroke-width=".5"/></g>`).join("");
  // Abtropfgitter (x = linke Kante, steht bei y 138); inhalt steht hinter den Drähten
  const gitter = (x, inhalt = "", oben = "", s = 1) => `<g transform="translate(${x} 138) scale(${s}) translate(0 -138)">
      ${inhalt}
      <g stroke="#8a949a" stroke-width="1.1" stroke-linecap="round">${[6, 16, 26, 36, 46, 56, 66].map(dx => `<line x1="${dx}" y1="108" x2="${dx}" y2="130"/>`).join("")}<line x1="2" y1="108" x2="70" y2="108"/></g>
      <rect x="0" y="129" width="72" height="9" rx="2" fill="#dde3e6" stroke="#aab4b8" stroke-width=".6"/><rect x="0" y="129" width="72" height="9" rx="2" fill="url(#v-glanz)" opacity=".6"/>
      ${oben}
    </g>`;

  // Der Mini-Geschirrspüler von vorn, Ursprung = Mitte unten.
  // offen = Tür unten aufgeklappt (Blick in den Korb), inhalt = was im Korb steht, an = ab wann das grüne Licht leuchtet,
  // tuer = Tür (auch über dem offenen Korb, z. B. beim Zumachen), klappe = die aufgeklappte Tür unten
  const TUER = `<rect x="-37" y="-47" width="74" height="44" rx="4" fill="#f3f6f7" stroke="#cfd6da" stroke-width=".8"/>
      <rect x="-37" y="-47" width="74" height="44" rx="4" fill="url(#v-glanz)" opacity=".55"/>
      <rect x="-16" y="-44" width="32" height="4.5" rx="2.2" fill="#cfd6da"/><rect x="-14" y="-43" width="28" height="1.4" rx=".7" fill="#8a949a" opacity=".6"/>`;
  const KLAPPE = `<path d="M-37 -3 L-43 7 H43 L37 -3 Z" fill="#f3f6f7" stroke="#cfd6da" stroke-width=".8"/><path d="M-37 -3 L-43 7 H43 L37 -3 Z" fill="url(#v-abdunkeln)" opacity=".25"/><rect x="-16" y="3" width="32" height="2.4" rx="1.2" fill="#cfd6da"/>`;
  const KORB_HINTEN = `<rect x="-35" y="-46" width="70" height="43" rx="3" fill="#5a6468"/><rect x="-35" y="-46" width="70" height="43" rx="3" fill="url(#v-abdunkeln)" opacity=".6"/><rect x="-33" y="-44" width="6" height="39" rx="2" fill="#fff" opacity=".08"/>`;
  const KORB_VORN = `<g stroke="#e3e9ec" stroke-width="1.1" stroke-linecap="round" fill="none"><path d="M-31 -15 H31"/><path d="M-31 -6 H31"/>${[-27, -19, -11, -3, 5, 13, 21, 29].map(x => `<path d="M${x} -15 V-6"/>`).join("")}</g>`;
  const geraet = (x, y, s, { offen = false, inhalt = "", an = false, balken = false, tuer = offen ? "" : TUER, klappe = KLAPPE } = {}) => `<g transform="translate(${x} ${y}) scale(${s})">
      <ellipse cy="1" rx="44" ry="4.5" fill="#000" opacity=".18" filter="url(#v-blur)"/>
      <rect x="-40" y="-60" width="80" height="60" rx="6" fill="#f7f9fa"/>
      <rect x="-40" y="-60" width="80" height="60" rx="6" fill="url(#v-abdunkeln-r)" opacity=".3"/>
      <rect x="-40" y="-60" width="80" height="60" rx="6" fill="none" stroke="#cfd6da"/>
      <rect x="-34" y="-57.5" width="26" height="7" rx="2" fill="#0b0f10"/>
      <circle cx="-30" cy="-54" r="1.5" fill="#3b4448"/>
      ${an === false ? "" : `<g class="v-ein" style="--d:${an}s"><circle cx="-30" cy="-54" r="4" fill="#3fc1a1" opacity=".45" filter="url(#v-blur)"/><circle cx="-30" cy="-54" r="1.6" fill="#3fc1a1"/></g>`}
      ${balken === false ? "" : `<rect x="-26" y="-55" width="15" height="2" rx="1" fill="#3fc1a1" class="v-spur" style="--d:${balken}s;--len:6s"/>`}
      ${[16, 23].map(cx => `<circle cx="${cx}" cy="-54" r="2.2" fill="#dde3e6" stroke="#aab4b8" stroke-width=".6"/>`).join("")}
      <circle cx="31" cy="-54" r="3.2" fill="#dde3e6" stroke="#aab4b8" stroke-width=".7"/><circle cx="31" cy="-54" r="1.3" fill="#3fc1a1" opacity=".8"/>
      ${offen ? `${KORB_HINTEN}${inhalt}${KORB_VORN}${klappe}` : ""}
      ${tuer}
      <rect x="-34" y="-1" width="6" height="2.5" rx="1" fill="#3b4448"/><rect x="28" y="-1" width="6" height="2.5" rx="1" fill="#3b4448"/>
    </g>`;
  // Die Tür klappt nach unten auf (Scharnier unten bei y -3)
  const tuerAuf = d => `<g transform="translate(0 -3)"><g><animateTransform attributeName="transform" type="scale" values="1 1;1 0" begin="${d}s" dur=".45s" fill="freeze"/><g transform="translate(0 3)">${TUER}</g></g></g>`;
  // Was im Korb steht: drei Teller und zwei umgedrehte Gläser (in Geräte-Koordinaten)
  const KORB_TELLER = [-24, -14, -4], KORB_GLAESER = [14, 25];
  const korbSauber = `${KORB_TELLER.map(x => teller(x, -22, 10)).join("")}${KORB_GLAESER.map(x => glas(x, -6, 0.85, true)).join("")}`;
  // Ein Teil wandert vom Stapel (gx, gy auf der Bühne) in den Korb (kx, ky im Gerät bei 250/142, Maßstab 1.15)
  const einraeumen = (gx, gy, kx, ky, d, bild) => {
    const sx = (gx - 250) / 1.15, sy = (gy - 142) / 1.15;
    return `<g transform="translate(${sx.toFixed(1)} ${sy.toFixed(1)})"><g class="v-ein" style="--d:${d}s"><g class="v-geh" style="--dx:${(kx - sx).toFixed(1)}px;--dy:${(ky - sy).toFixed(1)}px;--d:${(d + 0.1).toFixed(1)}s;--len:.7s">${bild}</g></g></g>`;
  };
  // Sofa mit der Frau, die ein Buch liest
  const sofaFrau = `<rect x="212" y="148" width="4" height="7" rx="1.5" fill="#3a2616"/><rect x="290" y="148" width="4" height="7" rx="1.5" fill="#3a2616"/>
      <ellipse cx="253" cy="156" rx="48" ry="3.5" fill="#000" opacity=".14" filter="url(#v-blur)"/>
      <rect x="216" y="100" width="74" height="28" rx="8" fill="url(#v-leder)"/><rect x="216" y="100" width="74" height="10" rx="5" fill="#fff" opacity=".12"/>
      <g transform="translate(254 152) scale(1.3)">${figurFrau(0, -14)}</g>
      <rect x="210" y="124" width="86" height="22" rx="6" fill="#6e482c"/>
      <rect x="206" y="114" width="12" height="34" rx="6" fill="url(#v-leder)"/><rect x="288" y="114" width="12" height="34" rx="6" fill="url(#v-leder)"/>
      <line x1="248" y1="108" x2="241" y2="117" class="figur-strich" style="stroke-width:4"/><line x1="260" y1="108" x2="250" y2="118" class="figur-strich" style="stroke-width:4"/>
      <g transform="translate(244 116) rotate(-8)"><path d="M0 -7 Q-5 -9 -11 -7 V5 Q-5 3 0 5 Z" fill="#fbfcfd" stroke="#cfd6da" stroke-width=".6"/><path d="M0 -7 Q5 -9 11 -7 V5 Q5 3 0 5 Z" fill="#f3f6f7" stroke="#cfd6da" stroke-width=".6"/>
        <path d="M-8 -4 H-3 M-8 -1 H-3 M-8 2 H-4 M3 -4 H8 M3 -1 H8" stroke="#aab4b8" stroke-width=".7"/><path d="M-11 5 Q-5 3 0 5 Q5 3 11 5 V7 Q5 5 0 7 Q-5 5 -11 7 Z" fill="#1f6fb5"/></g>`;
  // Arm der großen Frau hinter der Arbeitsplatte (Schultern bei y 103)
  const arm = (x1, x2, y2, cls = "", d = 0) => `<line x1="${x1}" y1="103" x2="${x2}" y2="${y2}" class="figur-strich ${cls}" style="stroke-width:5${cls ? `;--d:${d}s` : ""}"/>`;
  const frau = x => `<g transform="translate(${x} 160) scale(1.6)">${figurFrau(0, -14)}</g>`;

  VIDEOS["mini-geschirrspueler"] = { szenen: [
    {
      dauer: 7.5, vorher: true, titel: "Bisher: Abwasch von Hand",
      text: "Nach dem Essen stapeln sich Teller und Gläser neben der Spüle. Sie schrubbt Teil für Teil, das Abtropfgitter läuft über, und dann trocknet sie noch ab.",
      svg: `${frau(150)}
        ${platte()}
        ${stapel(28, 138, 6, [0.6, 1.4, 2.2, 3.0], 1.35)}
        <g class="v-weg" style="--d:1.8s">${glas(58, 138, 1.2, false, true)}</g>${glas(70, 138, 1.2, false, true)}
        ${spuele(80, `<g class="v-weg" style="--d:4.3s">${teller(48, 119, 13, true)}${schwamm(54, 114)}</g>`, true, 112, 8)}
        <g class="v-weg" style="--d:4.3s">${arm(142, 136, 112)}${blaeschen(110, 116)}</g>
        ${gitter(212, `${[12, 24, 36, 48].map((x, i) => `<g class="v-pop" style="--d:${(1.1 + i * 0.8).toFixed(1)}s">${teller(x, 116, 11)}</g>`).join("")}
          <g class="v-pop" style="--d:2.3s">${glas(62, 128, 1, true)}</g>`,
          `<g transform="translate(40 99) rotate(-24)"><g class="v-pop" style="--d:4.7s"><g class="v-wackel" style="animation-duration:.6s">${teller(0, 0, 10)}</g></g></g>
          <g transform="translate(24 101) rotate(18)"><g class="v-pop" style="--d:5.2s"><g class="v-wackel" style="animation-duration:.55s">${teller(0, 0, 10)}</g></g></g>
          <g transform="translate(60 106)"><g class="v-pop" style="--d:5.7s"><g class="v-wackel" style="animation-duration:.5s">${glas(0, 0, 0.9, true)}</g></g></g>`, 1.3)}
        <g class="v-ein" style="--d:4.4s">${arm(158, 198, 100)}
          <g transform="translate(205 96) scale(1.3)">${teller(0, 0, 10)}<g class="v-wackel" style="animation-duration:.45s"><path d="M-7 -12 H7 Q10 0 6 13 H-7 Q-4 0 -7 -12 Z" fill="#fbfcfd" stroke="#dde3e6" stroke-width=".6"/><path d="M-6 -6 H8 M-5 6 H7" stroke="#e86b5a" stroke-width="1.6"/></g></g></g>
        ${blase(110, 40, "Teil für Teil schrubben", 0.4, 3.6)}
        ${blase(110, 40, "Und dann noch abtrocknen", 4.3, 3.0)}
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:2.6s;fill:#f3ead9">Das Abtropfgitter läuft über.</text>`
    },
    {
      dauer: 6.5, titel: "Einräumen und Tür zu",
      text: "Ein kleines Gerät steht auf der Arbeitsplatte neben der Spüle. Sie räumt Teller und Gläser ein und schließt die Tür.",
      svg: `${frau(184)}
        ${platte()}
        ${spuele(4)}
        ${stapel(122, 138, 3, [0.5, 1.3, 2.1])}
        <g class="v-weg" style="--d:2.9s">${glas(146, 138, 1, false, true)}</g><g class="v-weg" style="--d:3.4s">${glas(156, 138, 1, false, true)}</g>
        <g class="v-weg" style="--d:3.9s">${arm(192, 228, 114)}</g>
        <g class="v-ein" style="--d:4s">${arm(192, 226, 95)}</g>
        ${geraet(250, 142, 1.15, {
          offen: true,
          inhalt: `${KORB_TELLER.map((x, i) => einraeumen(122, 120, x, -22, 0.5 + i * 0.8, teller(0, 0, 10, true))).join("")}
            ${KORB_GLAESER.map((x, i) => einraeumen(146 + i * 10, 138, x, -6, 2.9 + i * 0.5, glas(0, 0, 0.85, true, true))).join("")}`,
          klappe: `<g class="v-weg" style="--d:4.1s">${KLAPPE}</g>`,
          tuer: `<g class="v-fuell" style="--d:4s;--len:.5s">${TUER}</g>`
        })}
        ${blase(120, 40, "Teller und Gläser rein", 0.4, 3.4)}
        ${blase(120, 40, "Tür zu", 4.0, 2.4)}
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:1s;fill:#f3ead9">Klein und direkt auf der Arbeitsplatte.</text>`
    },
    {
      dauer: 7.5, titel: "Knopf drücken, Zeit für dich",
      text: "Ein Knopfdruck, und die Maschine spült. Sie setzt sich aufs Sofa und liest in Ruhe.",
      svg: `${boden(176)}${platte(178)}
        ${geraet(92, 142, 1.2, { an: 0.9, balken: 1 })}
        <g class="v-ein" style="--d:.5s"><g transform="translate(129.2 77.2)"><circle r="8" class="tipp v-tipp" style="--d:.5s"/></g></g>
        ${sofaFrau}
        ${blase(98, 40, "Knopf drücken", 0.3, 3.2)}
        ${blase(98, 40, "Die Maschine spült", 3.8, 3.4)}
        <text x="254" y="64" text-anchor="middle" class="t-klein v-hoch" style="--d:1.6s">Zeit für dich</text>`
    },
    {
      dauer: 7, titel: "Später: Tür auf, alles sauber",
      text: "Ist das Programm fertig, öffnet sie die Tür. Etwas Dampf steigt auf, Teller und Gläser sind sauber, und sie räumt sie aus.",
      svg: `${frau(214)}
        ${platte()}
        ${geraet(120, 142, 1.3, {
          offen: true,
          inhalt: `${korbSauber}${funkel(-19, -30, 1.6, 0.7)}${funkel(-2, -28, 2.1, 0.6)}${funkel(22, -18, 2.6, 0.6)}`,
          klappe: `<g class="v-ein" style="--d:1s">${KLAPPE}</g>`,
          tuer: tuerAuf(0.7)
        })}
        <g class="v-ein" style="--d:1.1s">${[0, 1, 2].map(i => `<g transform="translate(${100 + i * 18} 80)"><ellipse rx="10" ry="6" class="dampf ueber-hell v-dampf" style="--d:${(1.1 + i * 0.5).toFixed(1)}s;animation-duration:2.6s" filter="url(#v-blur)"/></g>`).join("")}</g>
        <g class="v-weg" style="--d:1.2s">${arm(204, 161, 86)}</g>
        <g class="v-ein" style="--d:3.4s">${arm(206, 186, 98)}${teller(182, 94, 10)}${funkel(190, 84, 3.6, 0.7)}</g>
        ${blase(120, 36, "Tür auf, alles sauber", 0.4, 3.4)}
        ${blase(120, 36, "Nur noch ausräumen", 4.0, 2.8)}
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:2s;fill:#f3ead9">Kein Stapel mehr neben der Spüle.</text>`
    },
    {
      dauer: 7, titel: "Ehrlich: große Töpfe von Hand",
      text: "Große Töpfe und Pfannen passen meist nicht hinein. Die spült sie weiter kurz von Hand.",
      svg: `${frau(176)}
        ${platte()}
        ${spuele(40, `${topf(76, 137, 1.05, true)}${schwamm(82, 110, 0.45)}`, true, 124, 6)}
        ${arm(168, 128, 108)}
        ${blaeschen(100, 104)}
        ${geraet(256, 142, 1, { an: 4.1, balken: 4.1 })}
        ${blase(150, 40, "Großer Topf? Kurz von Hand", 0.5, 3.4)}
        ${blase(150, 40, "Den Rest spült die Maschine", 4.1, 2.8)}
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:1.6s;fill:#f3ead9">Töpfe und Pfannen passen meist nicht hinein.</text>`
    }
  ] };
})();

// ============================================================
// Balkonkraftwerk (Figur: Mann)
// ============================================================
(function () {
  // Links die Wohnung (bis zur Außenwand bei x 168), rechts die Dachterrasse
  const WAND = 168, AUSSEN = 178;
  const boden = `<rect y="147" width="${WAND}" height="3" fill="#d8cfbf"/><rect y="150" width="${WAND}" height="30" fill="url(#v-holz)"/><rect y="150" width="${WAND}" height="30" fill="url(#v-abdunkeln)" opacity=".25"/>`;
  const himmel = `<rect x="${AUSSEN}" width="${320 - AUSSEN}" height="146" fill="#cfe6f5"/><rect x="${AUSSEN}" width="${320 - AUSSEN}" height="146" fill="url(#v-glas)" opacity=".6"/>`;
  const terrasse = `<rect x="${AUSSEN}" y="146" width="${320 - AUSSEN}" height="34" fill="#c3cacd"/>
      ${[0, 1, 2, 3, 4].map(i => `<line x1="${AUSSEN + 6 + i * 30}" y1="146" x2="${AUSSEN - 2 + i * 36}" y2="180" stroke="#aeb6ba" stroke-width="1"/>`).join("")}
      <line x1="${AUSSEN}" y1="160" x2="320" y2="160" stroke="#aeb6ba" stroke-width="1"/><rect x="${AUSSEN}" y="146" width="${320 - AUSSEN}" height="34" fill="url(#v-abdunkeln)" opacity=".25"/>`;
  const aussenwand = `<rect x="${WAND}" width="${AUSSEN - WAND}" height="180" fill="#e4dccd"/><rect x="${WAND}" width="${AUSSEN - WAND}" height="180" fill="url(#v-abdunkeln-r)" opacity=".3"/>`;
  // Außensteckdose an der Wand, mit Klappdeckel
  const steckdose = `<g transform="translate(${AUSSEN + 6} 126)"><rect x="-6" y="-7" width="12" height="14" rx="2.5" fill="#f3f6f7" stroke="#aab4b8" stroke-width=".8"/><rect x="-6" y="-8.5" width="12" height="4" rx="1.5" fill="#dde3e6" stroke="#aab4b8" stroke-width=".6"/><circle cx="-2" cy="1.5" r=".9" fill="#5a6468"/><circle cx="2" cy="1.5" r=".9" fill="#5a6468"/></g>`;
  // Sonne mit Strahlen, die sich langsam drehen
  const sonne = (x, y) => `<g transform="translate(${x} ${y})"><g class="v-dreh" style="animation-duration:14s">
      ${Array.from({ length: 10 }, (_, i) => `<line x1="0" y1="-15" x2="0" y2="-20" stroke="#f5b82e" stroke-width="2" stroke-linecap="round" transform="rotate(${i * 36})"/>`).join("")}</g>
      <circle r="12" fill="#ffd23f"/><circle r="12" fill="url(#v-glanz)" opacity=".5"/></g>`;
  // Kühlschrank, Router auf einer Kommode, Schreibtisch mit Laptop
  const kuehlschrank = `<ellipse cx="23" cy="150" rx="20" ry="2.5" fill="#000" opacity=".14" filter="url(#v-blur)"/>
      <rect x="6" y="64" width="34" height="86" rx="4" fill="url(#v-keramik)" stroke="#cfd6da"/><line x1="7" y1="96" x2="39" y2="96" stroke="#cfd6da" stroke-width="1.4"/>
      <rect x="10.4" y="80" width="2.6" height="13" rx="1.3" fill="#aab4b8"/><rect x="10.4" y="100" width="2.6" height="22" rx="1.3" fill="#aab4b8"/>`;
  const kommode = `<rect x="52" y="124" width="34" height="26" rx="2" fill="#c49a6c"/><rect x="52" y="124" width="34" height="3" rx="1" fill="#dcc7a8"/><line x1="54" y1="137" x2="84" y2="137" stroke="#8a6f50" stroke-width=".8"/><rect x="66" y="130" width="6" height="1.6" rx=".8" fill="#8a6f50"/><rect x="66" y="142" width="6" height="1.6" rx=".8" fill="#8a6f50"/>`;
  const router = `<g transform="translate(69 120)"><line x1="-8" y1="-2" x2="-11" y2="-14" stroke="#3b4448" stroke-width="1.6" stroke-linecap="round"/><line x1="8" y1="-2" x2="11" y2="-14" stroke="#3b4448" stroke-width="1.6" stroke-linecap="round"/>
      <rect x="-13" y="-4" width="26" height="8" rx="2.5" fill="#2b3338"/>
      ${[0, 1, 2].map(i => `<circle cx="${-6 + i * 4}" cy="0" r="1" fill="#3fc1a1"><animate attributeName="opacity" values="1;.15;1" dur="${(0.5 + i * 0.17).toFixed(2)}s" repeatCount="indefinite"/></circle>`).join("")}</g>`;
  // Der Mann sitzt hinter dem Laptop (man sieht die Rückseite des Deckels)
  const schreibtisch = (mitMann = true) => `${mitMann ? `<g transform="translate(125 150) scale(1.5)">${figur(0, -14)}</g>` : ""}
      <ellipse cx="125" cy="98" rx="20" ry="9" fill="url(#v-licht-r)" opacity=".5"/>
      <rect x="110" y="112" width="30" height="4" rx="1" fill="#aab4b8"/><rect x="113" y="96" width="24" height="17" rx="2" fill="url(#v-metall)" stroke="#aab4b8" stroke-width=".6"/>
      <rect x="92" y="116" width="66" height="4" rx="1" fill="#8a6f50"/><rect x="95" y="120" width="3" height="30" fill="#6e5a42"/><rect x="152" y="120" width="3" height="30" fill="#6e5a42"/>`;
  // Stromzähler mit Drehscheibe (von vorn gezeichnet); dauer = eine Umdrehung in Sekunden. Läuft immer vorwärts.
  const zaehler = dauer => `<g transform="translate(72 50)">
      <rect x="-17" y="-24" width="34" height="48" rx="4" fill="#f3f6f7" stroke="#aab4b8" filter="url(#v-sch)"/>
      <rect x="-12" y="-18" width="24" height="7" rx="1.5" fill="#2b3338"/>${[0, 1, 2, 3, 4].map(i => `<rect x="${-10.6 + i * 4.4}" y="-16.6" width="3.4" height="4.2" rx=".6" fill="#5a6468"/>`).join("")}
      <circle cy="7" r="11" fill="#dde3e6" stroke="#aab4b8"/>
      <g transform="translate(0 7)"><g class="v-dreh" style="animation-duration:${dauer}s"><circle r="8.6" fill="#f7f9fa"/><rect x="-1.5" y="-8.6" width="3" height="4.6" fill="#d8402c"/></g></g>
      <circle cy="7" r="11" fill="url(#v-glas)"/>
    </g>
    <text x="72" y="87" text-anchor="middle" class="t-mini leise">Stromzähler</text>`;
  // Solarmodul auf der Flachdach-Halterung, schräg; Ursprung = Mitte unten auf dem Boden
  const modul = (x, y = 146, an = false) => `<g transform="translate(${x} ${y})">
      <ellipse cx="-12" cy="0" rx="26" ry="2.4" fill="#000" opacity=".14" filter="url(#v-blur)"/>
      <line x1="-30" y1="-31" x2="-30" y2="0" stroke="#8a949a" stroke-width="2"/><line x1="0" y1="-31" x2="0" y2="0" stroke="#8a949a" stroke-width="2"/>
      <line x1="-36" y1="0" x2="12" y2="0" stroke="#8a949a" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M-36 -32 H4 L10 -8 H-30 Z" fill="#1f3f6b" stroke="#dde3e6" stroke-width="1.2" stroke-linejoin="round"/>
      ${[1, 2, 3].map(i => `<line x1="${-36 + i * 10}" y1="-32" x2="${-30 + i * 10}" y2="-8" stroke="#5f86b5" stroke-width=".6"/>`).join("")}
      ${[1, 2].map(i => `<line x1="${-36 + i * 2}" y1="${-32 + i * 8}" x2="${4 + i * 2}" y2="${-32 + i * 8}" stroke="#5f86b5" stroke-width=".6"/>`).join("")}
      <path d="M-36 -32 H4 L6 -24 H-34 Z" fill="#fff" opacity=".18"/>
      ${an ? `<path d="M-26 -32 H-18 L-12 -8 H-20 Z" fill="#fff" opacity=".22"/>${funkel(-12, -22, 0.4, 0.7)}${funkel(2, -14, 1.2, 0.6)}` : ""}
      <line x1="-28" y1="-8" x2="-28" y2="0" stroke="#8a949a" stroke-width="2"/><line x1="8" y1="-8" x2="8" y2="0" stroke="#8a949a" stroke-width="2"/>
    </g>`;
  const MODULE = [250, 298];
  // Draußen vor dem hellen Himmel bleibt die Figur auch im dunklen Design dunkel
  const DUNKEL = "#15211d";
  const figurDraussen = () => figur(0, -14).replace('class="figur ', `style="fill:${DUNKEL}" class="figur `);
  // Kabel vom ersten Modul über den Boden zur Außensteckdose
  const KABEL = `M${MODULE[0] - 30} 146 H${AUSSEN + 12} Q${AUSSEN + 6} 146 ${AUSSEN + 6} 140 V134`;
  const kabel = (zeichnen = "") => `<path d="${KABEL}" fill="none" stroke="#2b3338" stroke-width="2.2" stroke-linecap="round" ${zeichnen ? `pathLength="1" stroke-dasharray="1" class="v-zeichne" style="${zeichnen}"` : ""}/>`;
  // Lichtfluss: gelbe Striche laufen über das Kabel, im Haus zu Kühlschrank, Router und Laptop
  const fluss = d => `<g class="v-ein" style="--d:${d}s">
      <path d="${KABEL}" fill="none" stroke="#ffd23f" stroke-width="2.4" stroke-dasharray="5 5" class="v-fliess" style="animation-direction:reverse"/>
      ${["M163 128 Q150 132 146 122 Q143 115 138 114", "M164 134 V147 H40", "M86 147 V128 Q86 121 80 121"].map(p => `<path d="${p}" fill="none" stroke="#ffd23f" stroke-width="1.8" stroke-dasharray="4 5" stroke-linecap="round" class="v-fliess" style="animation-direction:reverse" opacity=".9"/>`).join("")}
      ${funkel(140, 104, d + 0.6, 0.8)}${funkel(69, 104, d + 0.9, 0.8)}${funkel(30, 70, d + 1.2, 0.8)}
    </g>`;
  const strahlen = d => `<g class="v-ein" style="--d:${d}s">${[[236, 120], [284, 120], [264, 112]].map(([x, y]) => `<line x1="282" y1="56" x2="${x}" y2="${y}" stroke="#f5b82e" stroke-width="1.6" stroke-dasharray="3 5" class="v-fliess" style="animation-direction:reverse" opacity=".85"/>`).join("")}</g>`;
  const innenSteckdose = `<rect x="160" y="124" width="7" height="12" rx="1.5" fill="#f3f6f7" stroke="#aab4b8" stroke-width=".6"/>`;
  const wohnung = (mitMann = true) => `${boden}${kuehlschrank}${kommode}${router}${schreibtisch(mitMann)}${innenSteckdose}`;
  const draussen = (vorBoden = "") => `${himmel}${vorBoden}${terrasse}${aussenwand}${steckdose}`;

  VIDEOS.balkonkraftwerk = { szenen: [
    {
      dauer: 7.5, vorher: true, titel: "Bisher: Die Sonne scheint ungenutzt",
      text: "Tagsüber laufen Kühlschrank, Router und Laptop. Draußen scheint die Sonne auf die leere Dachterrasse, und der Stromzähler dreht sich zügig.",
      svg: `${draussen(sonne(282, 56))}
        ${wohnung()}${zaehler(0.7)}
        ${blase(122, 14, "Alles kommt aus dem Netz", 0.4, 3.3)}
        ${blase(122, 14, "Der Zähler dreht sich zügig", 3.9, 3.5)}
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:2.8s;fill:#3b2f22">Draußen scheint die Sonne aufs leere Dach.</text>`
    },
    {
      dauer: 7, titel: "Zwei Module, ein Stecker",
      text: "Zwei Solarmodule kommen schräg auf die Dachterrasse. Dann steckt er den Stecker in die Außensteckdose.",
      svg: `${draussen(sonne(282, 56))}
        ${wohnung(false)}${zaehler(0.7)}
        <g class="v-schnapp" style="--d:.5s">${modul(MODULE[1])}</g>
        <g class="v-schnapp" style="--d:1.2s">${modul(MODULE[0])}</g>
        ${kabel("--d:2.3s;--len:.9s")}
        <g class="v-geh" style="--dx:-46px;--d:1.4s;--len:1s"><g transform="translate(${AUSSEN + 66} 150) scale(1.5)">${figurDraussen()}</g></g>
        <line x1="${AUSSEN + 16}" y1="104" x2="${AUSSEN + 8}" y2="128" class="figur-strich v-ein" style="stroke:${DUNKEL};stroke-width:4;--d:2.9s"/>
        <g class="v-ein" style="--d:3.3s"><g transform="translate(${AUSSEN + 6} 128)"><circle r="9" class="tipp v-tipp" style="--d:3.3s"/></g></g>
        ${blase(122, 14, "Zwei Module schräg aufstellen", 0.3, 3.1)}
        ${blase(122, 14, "Stecker in die Außensteckdose", 3.5, 3.3)}`
    },
    {
      dauer: 7.5, titel: "Die Sonne liefert mit",
      text: "Scheint die Sonne, fließt Strom von den Modulen über die Steckdose zu Kühlschrank, Router und Laptop. Der Zähler dreht sich deutlich langsamer.",
      svg: `${draussen(`${strahlen(0.3)}${sonne(282, 56)}`)}
        ${modul(MODULE[1], 146, true)}${modul(MODULE[0], 146, true)}${kabel()}
        ${wohnung()}${zaehler(2.8)}
        ${fluss(0.8)}
        ${blase(122, 14, "Strom fließt ins Haus", 0.5, 3.3)}
        ${blase(122, 14, "Der Zähler dreht langsamer", 3.9, 3.4)}
        <text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:1.6s;fill:#3b2f22">Ein Teil des Stroms kommt jetzt vom Dach.</text>`
    },
    {
      dauer: 7.5, titel: "Ehrlich: nur, wenn die Sonne scheint",
      text: "Abends und nachts liefern die Module nichts, dann kommt der Strom wieder aus dem Netz. Darum lohnt es sich, Waschmaschine oder Spülmaschine mittags laufen zu lassen.",
      svg: `${draussen(`<g class="v-geh" style="--dy:110px;--d:.3s;--len:1.8s">${sonne(282, 56)}</g>
        <rect x="${AUSSEN}" width="${320 - AUSSEN}" height="146" fill="#1d2b45" opacity=".88" class="v-nacht" style="--d:.4s"/>`)}
        ${modul(MODULE[1])}${modul(MODULE[0])}${kabel()}
        <rect x="${WAND}" width="${320 - WAND}" height="180" fill="#1d2b45" opacity=".42" class="v-nacht" style="--d:.4s"/>
        <g class="v-ein" style="--d:1.8s"><g transform="translate(286 52)"><circle r="9" fill="#f3ead9"/><circle cx="4" cy="-3" r="8" fill="#1d2b45" opacity=".88"/></g>
          ${[[214, 30], [236, 50], [300, 92], [204, 74], [262, 34]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="1" fill="#f3ead9" class="v-funkel" style="--d:${(2 + i * 0.3).toFixed(1)}s"/>`).join("")}</g>
        ${wohnung()}${zaehler(0.8)}
        ${blase(122, 14, "Abends kommt nichts vom Dach", 0.6, 3.4)}
        ${blase(122, 14, "Tipp: mittags waschen", 4.2, 3.2, true)}`
    }
  ] };
})();

// ============================================================
// Klimaanlage (Figur: Mann)
// ============================================================
(function () {
  // Schnitt durch das Zimmer: links das Zimmer bis zur Außenwand (x 214), in der Wand das Fenster, rechts draußen
  const WAND = 214, AUSSEN = 226;
  const NACHT = "#1d2b45", HELL = "#f3ead9", DECKE = "#6f9bd8", DECKE_NACHT = "#4a6a9c";
  const boden = `<rect y="147" width="${WAND}" height="3" fill="#d8cfbf"/><rect y="150" width="${WAND}" height="30" fill="url(#v-holz)"/><rect y="150" width="${WAND}" height="30" fill="url(#v-abdunkeln)" opacity=".25"/>`;
  // Draußen: Himmel, unten Baumkronen (das Zimmer liegt im Obergeschoss)
  const draussen = `<rect x="${AUSSEN}" width="${320 - AUSSEN}" height="180" fill="#cfe6f5"/><rect x="${AUSSEN}" width="${320 - AUSSEN}" height="180" fill="url(#v-glas)" opacity=".6"/>
      <g fill="url(#v-gruen-g)"><circle cx="248" cy="181" r="14"/><circle cx="274" cy="172" r="17"/><circle cx="302" cy="178" r="15"/><circle cx="322" cy="167" r="13"/></g>
      <g fill="#fff" opacity=".14"><circle cx="270" cy="165" r="7"/><circle cx="298" cy="172" r="6"/></g>`;
  const sonne = `<g transform="translate(290 54)"><g class="v-dreh" style="animation-duration:14s">
      ${Array.from({ length: 10 }, (_, i) => `<line x1="0" y1="-15" x2="0" y2="-20" stroke="#f5b82e" stroke-width="2" stroke-linecap="round" transform="rotate(${i * 36})"/>`).join("")}</g>
      <circle r="12" fill="#ffd23f"/><circle r="12" fill="url(#v-glanz)" opacity=".5"/></g>`;
  // Nacht draußen: dunkler Himmel, Mond und Sterne (oben rechts bleibt frei für das Schild)
  const nachtDraussen = `<rect x="${AUSSEN}" y="-10" width="${340 - AUSSEN}" height="200" fill="${NACHT}" opacity=".88"/>
      <g transform="translate(288 56)"><circle r="9" fill="${HELL}"/><circle cx="4" cy="-3" r="8" fill="${NACHT}" opacity=".88"/></g>
      ${[[240, 40], [262, 34], [308, 42], [250, 74], [304, 92], [278, 104]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="1" fill="${HELL}" class="v-funkel" style="--d:${(0.4 + i * 0.3).toFixed(1)}s"/>`).join("")}`;
  // Außenwand im Schnitt mit der Fensteröffnung (y 58 bis 112), innen das Fensterbrett, außen das Blech
  const wand = (nacht = false) => `<rect x="${WAND}" width="${AUSSEN - WAND}" height="180" fill="#e4dccd"/><rect x="${WAND}" width="${AUSSEN - WAND}" height="180" fill="url(#v-abdunkeln-r)" opacity=".3"/>
      <rect x="${WAND}" y="58" width="${AUSSEN - WAND}" height="54" fill="#cfe6f5"/>${nacht ? `<rect x="${WAND}" y="58" width="${AUSSEN - WAND}" height="54" fill="${NACHT}" opacity=".88"/>` : ""}
      <rect x="216" y="57.5" width="8" height="3.5" fill="#f7f9fa" stroke="#c6ced2" stroke-width=".6"/>
      <rect x="216" y="108" width="8" height="4" fill="#f7f9fa" stroke="#c6ced2" stroke-width=".6"/>
      <rect x="202" y="111" width="14" height="3.5" rx="1" fill="#f3f6f7" stroke="#c6ced2" stroke-width=".6"/>
      <path d="M224 110.4 L234 113 V115.4 L224 112.8 Z" fill="#aab4b8"/>${vorhang}`;
  // Vorhang links am Fenster, zur Seite gebunden, darüber die Stange: so liest man die Öffnung als Fenster
  const vorhang = `<rect x="198" y="50.6" width="18" height="1.6" rx=".8" fill="#8a949a"/><circle cx="198.4" cy="51.4" r="1.6" fill="#8a949a"/>
      <path d="M204 52.2 H212 Q213 70 211.6 86 Q210.6 96 212.4 104 H203.2 Q205.2 95 204 86 Q202.6 70 204 52.2 Z" fill="#f1e4cc" stroke="#d8c7a6" stroke-width=".5"/>
      <path d="M206.6 53.6 Q206 75 206.8 102 M209.4 53.6 Q210 75 209.2 102" fill="none" stroke="#d8c7a6" stroke-width=".6"/>`;
  // Fensterflügel im Schnitt: Rahmen oben und unten, dazwischen das Glas; unten = Unterkante (108 = zu)
  const fluegel = (unten = 108) => `<rect x="218.8" y="64" width="2.4" height="${unten - 68}" fill="#8cc8ec"/><rect x="219.2" y="64" width=".8" height="${unten - 68}" fill="#fff" opacity=".85"/>
      <rect x="216.6" y="61" width="6.8" height="4" rx="1" fill="#f7f9fa" stroke="#c6ced2" stroke-width=".6"/>
      <rect x="216.6" y="${unten - 4}" width="6.8" height="4" rx="1" fill="#f7f9fa" stroke="#c6ced2" stroke-width=".6"/>`;
  const gekippt = `<g transform="rotate(-9 217 108)">${fluegel()}</g>`;
  // Nach dem Aufstellen steht das Fenster unten einen Spalt offen: dort läuft die flache Leitung durch, die Dichtung schließt den Rest
  const SPALT = 101;
  const dichtung = `<rect x="216.4" y="101.2" width="7.2" height="3.6" rx="1" fill="#3b4448"/>`;
  const LEITUNG = "M208 122 C211 122 210 110.2 212.5 109.4 L215.5 106.4 H224 L229 110.2 C233.5 111.6 236 114.2 236 119.6";
  const leitung = (zeichnen = "") => {
    const z = zeichnen ? ` pathLength="1" stroke-dasharray="1" class="v-zeichne" style="${zeichnen}"` : "";
    return `<path d="${LEITUNG}" fill="none" stroke="#8a949a" stroke-width="3.4" stroke-linejoin="round"${z}/><path d="${LEITUNG}" fill="none" stroke="#eef1f3" stroke-width="2" stroke-linejoin="round"${z}/>`;
  };
  // Halterung: hängt am Fensterrahmen, ohne Bohren; unten die Ablage für das Außenteil
  const halterung = `<path d="M222.6 112.4 V109.6 Q222.6 108.8 223.4 108.8 H226.4 Q227.2 108.8 227.2 109.6 V141.8 H258" fill="none" stroke="#4a555a" stroke-width="1.8" stroke-linejoin="round"/>
      <line x1="227.2" y1="160" x2="255" y2="142.6" stroke="#4a555a" stroke-width="1.6"/>`;
  // Kleines Außenteil (26 x 22, Ursprung oben links); an = der Lüfter dreht ab d, dauer = eine Umdrehung
  const aussenteil = (an = false, d = 0, dauer = 0.35) => `<rect width="26" height="22" rx="3" fill="url(#v-keramik)" stroke="#8a949a" stroke-width=".8"/>
      <circle cx="11" cy="11" r="8.4" fill="#dfe5e8" stroke="#8a949a" stroke-width=".8"/>
      <g transform="translate(11 11)"><g${an ? ` class="v-dreh" style="animation-duration:${dauer}s;animation-delay:${d}s"` : ""}><circle r="7.2" fill="none"/>${[0, 120, 240].map(w => `<path d="M0 0 C1.6 -2.2 4.6 -4.6 1.2 -6.9 C-.8 -4.8 -1 -2 0 0 Z" fill="#6f7c82" transform="rotate(${w})"/>`).join("")}</g><circle r="1.4" fill="#4a555a"/></g>
      ${[4, 7.5, 11, 14.5, 18].map(y => { const h = Math.sqrt(70.6 - (y - 11) ** 2); return `<line x1="${(11 - h).toFixed(1)}" y1="${y}" x2="${(11 + h).toFixed(1)}" y2="${y}" stroke="#8a949a" stroke-width=".45" opacity=".8"/>`; }).join("")}
      ${[0, 1, 2].map(i => `<line x1="${21.4 + i * 1.5}" y1="4" x2="${21.4 + i * 1.5}" y2="18" stroke="#8a949a" stroke-width=".6"/>`).join("")}`;
  const AUSSENTEIL = [230, 119.6];
  // Die warme Luft, die das Außenteil nach draußen bläst
  const abwaerme = d => `<g class="v-ein" style="--d:${d}s">${["M258 124 C270 120 282 126 300 120", "M258 131 C272 129 284 134 304 130", "M258 138 C270 140 282 138 298 145"].map(p => `<path d="${p}" class="luft v-fliess"/>`).join("")}</g>`;
  // Innengerät (26 x 31, Ursprung oben links) auf Rollen; an = die Anzeige leuchtet ab d
  const innengeraet = (an = false, d = 0) => `<ellipse cx="13" cy="35" rx="15" ry="2" fill="#000" opacity=".14" filter="url(#v-blur)"/>
      <rect width="26" height="31" rx="4" fill="url(#v-keramik)" stroke="#8a949a" stroke-width=".8"/>
      <rect x="1" y="1" width="24" height="12" rx="3.5" fill="url(#v-glanz)" opacity=".6"/>
      <rect x="3" y="2.2" width="20" height="3.4" rx="1.4" fill="#4a555a"/>${[7, 11, 15, 19].map(x => `<line x1="${x}" y1="2.4" x2="${x}" y2="5.4" stroke="#aab4b8" stroke-width=".6"/>`).join("")}
      <rect x="8" y="9" width="10" height="4" rx="1.4" fill="#1c2326"/>
      ${an ? `<rect x="9.6" y="10.3" width="6.8" height="1.4" rx=".7" fill="#7ee2c4" class="v-ein" style="--d:${d}s"/>` : ""}
      ${[19, 22, 25].map(y => `<line x1="5" y1="${y}" x2="21" y2="${y}" stroke="#c6ced2" stroke-width=".8"/>`).join("")}
      <circle cx="4.5" cy="32.6" r="2.4" fill="#3b4448"/><circle cx="21.5" cy="32.6" r="2.4" fill="#3b4448"/>`;
  const AM_FENSTER = 182;
  // Kühle Luft (blaue Wellen) strömt oben aus dem Innengerät ins Zimmer
  const kuehl = (pfade, d, stil = "") => `<g class="v-ein" style="--d:${d}s">${pfade.map(p => `<path d="${p}" fill="none" stroke="#5db4f0" stroke-width="2.2" stroke-dasharray="6 5" stroke-linecap="round" class="v-fliess" style="${stil}"/>`).join("")}</g>`;
  // Bett links, Kopfende bei x 6; gemacht = die Decke liegt glatt darauf
  const bett = (gemacht = true) => `<ellipse cx="51" cy="150" rx="47" ry="2.5" fill="#000" opacity=".14" filter="url(#v-blur)"/>
      <rect x="6" y="94" width="7" height="56" rx="3" fill="url(#v-holz)" stroke="#a5865f" stroke-width=".6"/>
      <rect x="89" y="115" width="7" height="35" rx="3" fill="url(#v-holz)" stroke="#a5865f" stroke-width=".6"/>
      <rect x="11" y="128" width="80" height="10" rx="2" fill="#bfa27c"/><rect x="11" y="128" width="80" height="10" rx="2" fill="url(#v-abdunkeln)" opacity=".35"/>
      <rect x="13" y="119" width="76" height="10" rx="3" fill="#f4f6f7" stroke="#cfd6da" stroke-width=".6"/>
      <rect x="15" y="111.5" width="21" height="8.5" rx="4.2" fill="#fbfcfd" stroke="#cfd6da" stroke-width=".6"/>
      ${gemacht ? `<path d="M40 118.4 H89 V129.5 Q89 131.5 87 131.5 H40 Z" fill="${DECKE}"/><path d="M40 118.4 H89 V121 H40 Z" fill="#fff" opacity=".22"/>` : ""}`;
  // Er liegt im Bett, der Kopf auf dem Kissen
  const liegend = `<g transform="translate(90 115) rotate(-82) scale(1.4)">${figur(0, -14)}</g>`;
  // Die Decke über ihm (Kopf und Schultern bleiben frei)
  const deckeAuf = farbe => `<path d="M42 103 Q46 99.6 54 100.2 L68 100.6 Q82 102 90 107 Q93 109 93 113 V123 Q93 125 91 125 H42 Q39.5 125 39.5 122.5 V105.5 Q39.5 103.4 42 103 Z" fill="${farbe}"/>
      <path d="M42 103 Q46 99.6 54 100.2 L68 100.6 Q82 102 90 107" fill="none" stroke="#fff" stroke-width="1.4" opacity=".22"/>`;
  // Die weggestrampelte Decke, zerknüllt auf dem Boden vor dem Bett
  const deckeBoden = farbe => `<path d="M50 150 Q47 143 54 141 Q57 135.5 65 138.5 Q71 134 78 138.5 Q86 137 88 143 Q93 146 91 150 Z" fill="${farbe}"/>
      <path d="M57 145 Q63 141 69 144 M73 142 Q79 140 84 144" fill="none" stroke="#fff" stroke-width="1" opacity=".25"/>`;
  // Standventilator, leicht zur Seite gedreht: er bläst nach rechts zum Schreibtisch
  const ventilator = (dauer = 0.3) => `<g transform="translate(106 0)">
      <ellipse cy="149.4" rx="8" ry="1.9" fill="#4a555a"/><rect x="-1.2" y="112" width="2.4" height="37" fill="#8a949a"/>
      <g transform="translate(0 103) scale(.78 1)">
        <circle r="9.4" fill="#f3f6f7" stroke="#8a949a" stroke-width="1"/>
        <g class="v-dreh" style="animation-duration:${dauer}s"><circle r="8" fill="none"/>${[0, 120, 240].map(w => `<path d="M0 0 C2 -2.6 5.6 -5.4 1.4 -8 C-1 -5.6 -1.2 -2.4 0 0 Z" fill="#9fb4bd" transform="rotate(${w})"/>`).join("")}</g>
        <circle r="1.7" fill="#4a555a"/>
        ${[-6, -3, 0, 3, 6].map(y => { const h = Math.sqrt(88.4 - y * y).toFixed(1); return `<line x1="-${h}" y1="${y}" x2="${h}" y2="${y}" stroke="#8a949a" stroke-width=".45" opacity=".7"/>`; }).join("")}
      </g></g>`;
  // Er wirbelt nur warme Luft herum
  const ventilatorLuft = ["M114 97 C120 94 126 92 134 90", "M115 103 C121 101 127 100 135 98", "M114 109 C120 108 126 107 133 106"].map(p => `<path d="${p}" class="luft v-fliess"/>`).join("");
  // Schreibtisch mit Laptop (man sieht die Rückseite des Deckels); offen = aufgeklappt
  const schreibtisch = (offen = true) => `${offen ? `<ellipse cx="145" cy="98" rx="20" ry="9" fill="url(#v-licht-r)" opacity=".5"/>
      <rect x="130" y="112" width="30" height="4" rx="1" fill="#aab4b8"/><rect x="133" y="96" width="24" height="17" rx="2" fill="url(#v-metall)" stroke="#aab4b8" stroke-width=".6"/>`
      : `<rect x="131" y="112.4" width="28" height="3.6" rx="1" fill="#aab4b8"/>`}
      <rect x="118" y="116" width="54" height="4" rx="1" fill="#8a6f50"/><rect x="121" y="120" width="3" height="30" fill="#6e5a42"/><rect x="166" y="120" width="3" height="30" fill="#6e5a42"/>`;
  const mannAmTisch = `<g transform="translate(145 150) scale(1.5)">${figur(0, -14)}</g>`;
  // Fächer in seiner Hand, er wedelt sich Luft zu
  const faecher = `<line x1="153" y1="98" x2="159.4" y2="86.6" class="figur-strich" style="stroke-width:4.4"/>
      <g transform="translate(159.5 86)"><g><animateTransform attributeName="transform" type="rotate" values="-16;18;-16" dur=".6s" repeatCount="indefinite"/>
        <path d="M0 0 L-11.5 -5 A12.5 12.5 0 0 1 -3 -12.1 Z" fill="#f6d36b" stroke="#c99a2e" stroke-width=".7" stroke-linejoin="round"/>
        ${[-148, -134, -120, -106].map(w => `<line x2="${(12 * Math.cos(w * Math.PI / 180)).toFixed(1)}" y2="${(12 * Math.sin(w * Math.PI / 180)).toFixed(1)}" stroke="#c99a2e" stroke-width=".5"/>`).join("")}</g>
        <circle r="2.6" class="figur"/></g>`;
  // Die Sonne scheint durchs Fenster bis an den Schreibtisch
  const strahlen = [[138, 86], [151, 104], [166, 117]].map(([x, y]) => {
    const dx = x - 290, dy = y - 54, l = Math.hypot(dx, dy);
    return `<line x1="${(290 + 15 * dx / l).toFixed(1)}" y1="${(54 + 15 * dy / l).toFixed(1)}" x2="${x}" y2="${y}" stroke="#f5b82e" stroke-width="1.6" stroke-dasharray="3 5" class="v-fliess" opacity=".85"/>`;
  }).join("");
  // Hitze: warmer Schleier über dem Zimmer, Luft flimmert, Schweißtropfen
  const hitze = op => `<rect width="${WAND}" height="180" fill="#ff7a2e" opacity="${op}"/>`;
  // Abkühlung: dezent blau gefärbtes Zimmer (Lukas 2026-10-30)
  const kuehle = op => `<rect width="${WAND}" height="180" fill="#3d9cf0" opacity="${op}"/>`;
  // Raumthermometer an der Wand (Lukas 2026-10-30: Temperatur anzeigen); werte = [[ab Sekunde, Grad], …],
  // jede Zahl springt wie auf einem echten Display um (SMIL set), im Standbild steht die letzte
  const gradFarbe = g => g >= 28 ? "#ff7a3d" : g >= 26 ? "#eef3f5" : "#62bfff";
  const thermoRahmen = `<rect x="164" y="38" width="32" height="17" rx="3" fill="#f4f6f7" stroke="#aab4b8" stroke-width=".6"/>`;
  const thermoAnzeige = werte => `<rect x="166" y="40" width="28" height="13" rx="1.8" fill="#1d2629"/>` + werte.map(([ab, g], i) => {
    const bis = werte[i + 1] ? werte[i + 1][0] : null, f = gradFarbe(g);
    const umschalten = i === 0 ? (bis === null ? "" : `<set attributeName="visibility" to="hidden" begin="${bis}s"/>`)
      : `<set attributeName="visibility" to="visible" begin="${ab}s"${bis === null ? "" : ` end="${bis}s"`}/>`;
    return `<g visibility="${i === 0 ? "visible" : "hidden"}">${umschalten}<rect x="168.7" y="42.3" width="2" height="6.2" rx="1" fill="${f}"/><circle cx="169.7" cy="49.3" r="1.75" fill="${f}"/><text x="182.6" y="50.2" text-anchor="middle" style="font-size:8.2px;font-weight:700;fill:${f}">${g}°C</text></g>`;
  }).join("");
  const thermo = werte => thermoRahmen + thermoAnzeige(werte);
  // zählt von a nach b, ab Sekunde d alle schritt Sekunden um 1 Grad
  const zaehlen = (a, b, d, schritt) => Array.from({ length: Math.abs(a - b) + 1 }, (_, i) => [i ? +(d + (i - 1) * schritt).toFixed(2) : 0, a + (b < a ? -i : i)]);
  const flimmern = (punkte, d = 0) => punkte.map(([x, y], i) => `<g transform="translate(${x} ${y})"><path d="M0 0 q3 -4 0 -8 q-3 -4 0 -8" fill="none" stroke="#ff9a3a" stroke-width="1.8" stroke-linecap="round" class="v-dampf" style="--d:${(d + i * 0.35).toFixed(2)}s;animation-duration:2s"/></g>`).join("");
  const tropfen = punkte => punkte.map(([x, y, d]) => `<g transform="translate(${x} ${y})"><ellipse rx="1.4" ry="2.3" class="schweiss v-tropf" style="--d:${d}s"/></g>`).join("");
  // Nachts: das Zimmer dunkler (Wand und Fenster eingeschlossen)
  const nachtDrinnen = `<rect width="${AUSSEN}" height="180" fill="${NACHT}" opacity=".5"/>`;
  // Zzz über dem Schlafenden: jedes Z steigt einmal auf und verblasst, das letzte bleibt im Standbild stehen
  const zzz = (d, n = 5) => Array.from({ length: n }, (_, i) => { const klein = (n - 1 - i) % 2; return `<g class="v-geh" style="--dx:${klein ? 7 : 4}px;--dy:-22px;--d:${(d + i * 0.8).toFixed(1)}s;--len:2.4s"><g class="v-takt${i === n - 1 ? " v-letzter" : ""}" style="--d:${(d + i * 0.8).toFixed(1)}s;--len:2.4s"><g transform="translate(${klein ? 36 : 32} 96) scale(${klein ? 1.25 : 1.5})"><path d="M-3 -3 H3 L-3 3 H3" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g></g></g>`; }).join("");
  // Fernbedienung ablegen: Hand runter auf den Tisch, loslassen, Arm zurück hinter den Laptopdeckel
  const AB = `begin="2.4s" dur=".4s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".4 0 .2 1"`;
  const ablegen = (ax, ay) => [[ax, "161;161.5;161.5;149"], [ay, "89;111.2;111.2;104"]].map(([a, v]) => `<animate attributeName="${a}" values="${v}" keyTimes="0;.47;.59;1" calcMode="spline" keySplines=".4 0 .2 1;0 0 1 1;.4 0 .6 1" begin="2.4s" dur=".85s" fill="freeze"/>`).join("");
  const unterschrift = (text, d, nacht = false) => `<text x="107" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:${d}s;fill:${nacht ? HELL : "#3b2f22"}">${text}</text>`;

  VIDEOS.klimaanlage = { szenen: [
    {
      dauer: 7.5, vorher: true, titel: "Bisher: Zu heiß zum Arbeiten",
      text: "Die Sonne knallt aufs Fenster, und das Zimmer heizt sich immer weiter auf. Er fächelt sich Luft zu, und der Ventilator wirbelt nur warme Luft herum.",
      svg: `${draussen}${sonne}${wand()}${fluegel()}${boden}
        ${strahlen}
        ${bett()}${ventilator()}${ventilatorLuft}
        ${mannAmTisch}${faecher}${schreibtisch()}
        ${tropfen([[133, 79, 0.6], [137.5, 70.5, 1.3]])}
        ${hitze(0.1)}<g class="v-ein" style="--d:.4s;animation-duration:3s">${hitze(0.1)}</g>
        ${thermo([[0, 29], [1.4, 30], [2.8, 31]])}
        ${flimmern([[28, 104], [62, 100], [124, 88], [178, 106], [200, 100]], 0.3)}
        ${blase(112, 14, "Das Zimmer heizt sich auf", 0.4, 3.3)}
        ${blase(112, 14, "Der Ventilator hilft kaum", 3.9, 3.4)}
        ${unterschrift("Die Sonne knallt aufs Fenster.", 2.6)}`
    },
    {
      dauer: 7.5, vorher: true, titel: "Bisher: Nachts kaum Schlaf",
      text: "Auch nachts kühlt das Zimmer kaum ab, obwohl das Fenster gekippt ist. Er wälzt sich hin und her und strampelt die Decke weg.",
      svg: `${draussen}${nachtDraussen}${wand(true)}${gekippt}
        ${boden}${bett(false)}${ventilator(0.4)}${schreibtisch(false)}${thermoRahmen}
        ${nachtDrinnen}
        <g class="v-ein" style="--d:.6s">${["M246 62 C238 59.5 230 59.5 221 62 C213 64.5 205 69 194 71", "M248 70 C240 67 231 66 223 66.5 C214 67.5 207 73 198 78"].map(p => `<path d="${p}" class="luft v-fliess"/>`).join("")}</g>
        <g class="v-wackel" style="animation-duration:1.1s">${liegend}<g class="v-weg" style="--d:1.4s">${deckeAuf(DECKE_NACHT)}</g>${tropfen([[17, 98, 0.5], [30, 93, 1.2]])}</g>
        <g class="v-geh" style="--dx:4px;--dy:30px;--d:1.4s;--len:.55s"><g class="v-ein" style="--d:1.35s;animation-duration:.3s"><g transform="translate(-4 -30)">${deckeBoden(DECKE_NACHT)}</g></g></g>
        ${hitze(0.15)}
        ${thermoAnzeige([[0, 28]])}
        ${flimmern([[60, 96], [124, 96], [178, 104]], 0.5)}
        ${blase(112, 14, "Nachts kühlt es kaum ab", 0.4, 3.3)}
        ${blase(112, 14, "Zu heiß zum Schlafen", 3.9, 3.4)}
        ${unterschrift("Lüften hilft kaum.", 2.4, true)}`
    },
    {
      dauer: 8, titel: "Einfach selbst aufgestellt",
      text: "Er rollt das Innengerät auf seinen Rollen ans Fenster und hängt das kleine Außenteil draußen in die Halterung, ganz ohne Bohren. Die flache Leitung läuft durch den Fensterspalt, eine Dichtung schließt ihn.",
      svg: `${draussen}${sonne}${wand()}
        <g class="v-weg" style="--d:2s">${fluegel()}</g>
        <g class="v-ein" style="--d:4.5s">${fluegel(SPALT)}</g>
        <g class="v-schnapp" style="--d:2.6s">${halterung}</g>
        ${boden}${bett()}${schreibtisch()}
        ${hitze(0.17)}
        ${thermo([[0, 31]])}
        <g class="v-geh" style="--dx:84px;--dy:0px;--d:.3s;--len:1.5s"><g transform="translate(84 150) scale(1.5)">${figur(0, -14)}</g>
          <g class="v-weg" style="--d:1.9s"><line x1="92" y1="98" x2="97.4" y2="103.6" class="figur-strich" style="stroke-width:4.4"/><circle cx="97.4" cy="103.6" r="2.6" class="figur"/></g></g>
        <g class="v-geh" style="--dx:84px;--dy:0px;--d:.3s;--len:1.5s"><g transform="translate(98 115)">${innengeraet()}</g>
          <g class="v-geh" style="--dx:0px;--dy:-12px;--d:2.7s;--len:.25s"><g class="v-geh" style="--dx:48px;--dy:0px;--d:2.95s;--len:.4s"><g class="v-geh" style="--dx:0px;--dy:38.6px;--d:3.35s;--len:.3s"><g transform="translate(98 93)">${aussenteil()}</g></g></g></g></g>
        ${leitung("--d:3.8s;--len:.7s")}
        <g class="v-ein" style="--d:2.2s;animation-duration:.25s"><g class="v-weg" style="--d:4s;animation-duration:.2s">
          <line x1="176" y1="98" x2="182.6" y2="103" class="figur-strich" style="stroke-width:4.4"><animate attributeName="x2" values="182.6;182.6;208;208;178" keyTimes="0;.192;.5;.731;1" begin="2.7s" dur="1.3s" fill="freeze"/><animate attributeName="y2" values="103;91;92;92;100" keyTimes="0;.192;.5;.731;1" begin="2.7s" dur="1.3s" fill="freeze"/></line>
          <circle cx="182.6" cy="103" r="2.6" class="figur"><animate attributeName="cx" values="182.6;182.6;208;208;178" keyTimes="0;.192;.5;.731;1" begin="2.7s" dur="1.3s" fill="freeze"/><animate attributeName="cy" values="103;91;92;92;100" keyTimes="0;.192;.5;.731;1" begin="2.7s" dur="1.3s" fill="freeze"/></circle></g></g>
        <g class="v-pop" style="--d:4.75s">${dichtung}</g>
        <g class="v-ein schrift-dunkel" style="--d:4.9s"><line x1="238.5" y1="95" x2="224.6" y2="102.4" stroke="#15211d" stroke-width=".7"/><text x="240" y="98" class="t-mini">Dichtung</text></g>
        ${blase(112, 14, "Ans Fenster rollen", 0.3, 3.0)}
        ${blase(112, 14, "Außenteil einhängen", 3.4, 3.3)}
        ${unterschrift("Ohne Bohren, ohne Werkzeug.", 2.6)}`
    },
    {
      dauer: 7.5, titel: "Ein Knopfdruck, und es wird kühl",
      text: "Kühle Luft strömt ins Zimmer, die Wärme gibt das Außenteil draußen ab. Er arbeitet entspannt weiter.",
      svg: `${draussen}${sonne}${wand()}${fluegel(SPALT)}${dichtung}${halterung}
        <g transform="translate(${AUSSENTEIL})">${aussenteil(true, 1)}</g>
        ${abwaerme(1.2)}
        ${boden}${bett()}
        <g transform="translate(${AM_FENSTER} 115)">${innengeraet(true, 0.9)}</g>${leitung()}
        ${mannAmTisch}
        <g class="v-weg" style="--d:3.3s;animation-duration:.1s"><line x1="153" y1="98" x2="161" y2="89" class="figur-strich" style="stroke-width:4.4">${ablegen("x2", "y2")}</line></g>
        <g transform="translate(162 88.5)"><animateTransform attributeName="transform" type="translate" values="162 88.5;162.5 114.2" ${AB}/><g transform="rotate(35)"><animateTransform attributeName="transform" type="rotate" values="35;0" ${AB}/>
          <rect x="-2" y="-1.8" width="9" height="3.6" rx="1.2" fill="#2b3338" stroke="#aab4b8" stroke-width=".6"/><circle cx="6" r=".8" fill="#e8574a"/></g></g>
        <g class="v-weg" style="--d:3.3s;animation-duration:.1s"><circle cx="161" cy="89" r="2.6" class="figur">${ablegen("cx", "cy")}</circle></g>
        ${schreibtisch()}
        <g class="v-weg" style="--d:1.4s;animation-duration:3s">${hitze(0.17)}</g>
        <g class="v-weg" style="--d:1.4s;animation-duration:1.2s">${flimmern([[28, 104], [62, 100], [124, 88]], 0)}</g>
        <g class="v-ein" style="--d:1.4s;animation-duration:3s">${kuehle(0.13)}</g>
        ${thermo(zaehlen(31, 25, 1.6, 0.5))}
        ${kuehl(["M185 113 C178 105 170 109 162 102 C156 97 150 100 143 95", "M184 118 C176 111 168 117 160 111 C153 106 146 111 139 106", "M184 123 C175 119 166 125 157 120 C149 115 141 120 133 115"], 1)}
        <g transform="translate(169 93.5)"><circle r="6" class="tipp v-tipp" style="--d:.5s"/></g>
        <g class="v-takt" style="--d:.6s;--len:.9s"><g transform="translate(169 93.5) rotate(35)">${[4, 7, 10].map(r => `<path d="M${(r * 0.766).toFixed(2)} ${(-r * 0.643).toFixed(2)} A${r} ${r} 0 0 1 ${(r * 0.766).toFixed(2)} ${(r * 0.643).toFixed(2)}" fill="none" class="tipp" style="stroke-width:1.4"/>`).join("")}</g></g>
        ${blase(112, 14, "Kühle Luft strömt herein", 0.9, 3.2)}
        ${blase(112, 14, "Die Wärme geht nach draußen", 4.4, 3.0)}
        ${unterschrift("Drinnen wird es spürbar kühler.", 1.6)}`
    },
    {
      dauer: 7.5, titel: "Und nachts ruhig schlafen",
      text: "Vor dem Schlafengehen kühlt er das Schlafzimmer herunter. So schläft er auch in heißen Nächten ruhig.",
      svg: `${draussen}${nachtDraussen}${wand(true)}${fluegel(SPALT)}${dichtung}${halterung}
        <g transform="translate(${AUSSENTEIL})">${aussenteil(true, 0, 0.6)}<rect width="26" height="22" rx="3" fill="${NACHT}" opacity=".35"/></g>
        <g opacity=".7">${abwaerme(0.3)}</g>
        ${boden}${bett(false)}${schreibtisch(false)}${thermoRahmen}
        <g transform="translate(${AM_FENSTER} 115)">${innengeraet()}</g>${leitung()}
        ${nachtDrinnen}${kuehle(0.12)}
        ${thermoAnzeige(zaehlen(25, 19, 0.6, 0.5))}
        <rect x="191.6" y="125.3" width="6.8" height="1.4" rx=".7" fill="#7ee2c4"/>
        <g opacity=".8">${kuehl(["M184 116 C164 104 148 112 128 103 C112 96 98 103 80 96", "M184 122 C166 114 150 121 132 113 C116 106 102 112 86 106"], 0.3, "animation-duration:1.6s")}</g>
        ${liegend}${deckeAuf(DECKE_NACHT)}
        ${zzz(1.8, 6)}
        ${blase(112, 14, "Vorher herunterkühlen", 0.5, 3.3)}
        ${blase(112, 14, "Ruhig schlafen", 4.1, 3.0)}
        ${unterschrift("Auch in heißen Nächten.", 1.6, true)}`
    }
  ] };
})();

// ============================================================
// Smarte Lampen (Figur: Frau)
// ============================================================
(function () {
  // Wohnzimmer: links die Stehleuchte (x 30), das Sofa mit der Pendelleuchte darüber (x 104), am Fenster das Sideboard
  // mit Tischlampe (x 176), Router und Zentrale, rechts die Tür mit Lichtschalter. Schlafzimmer: Nachttisch, Bett, Küchentür.
  // Keine Marken, keine Zahlen: Die Lampen und die Zentrale sind neutral gezeichnet (Vorgabe faktencheck-max/smarte-lampen.md, A5).
  const NACHT = "#16223a", HELL = "#f3ead9", ABEND = "#2c3f6b", TAG = "#cfe6f5";
  // Lichtfarben: schein = Lichtschein, schirm = leuchtender Schirm
  const WEISS = { schein: "#fff1c9", schirm: "#fff8e6" }, WARM = { schein: "#ffb24d", schirm: "#ffd48a" }, KALT = { schein: "#eaf5ff", schirm: "#f8fbff" };
  const DECKE = "#7fa98f", DECKE_NACHT = "#4f6f62";
  const boden = `<rect y="147" width="320" height="3" fill="#d8cfbf"/><rect y="150" width="320" height="30" fill="url(#v-holz)"/><rect y="150" width="320" height="30" fill="url(#v-abdunkeln)" opacity=".25"/>`;
  // Dunkelheit über dem Zimmer (die Figur liegt immer darüber, damit man sie sieht)
  const dunkel = op => `<rect width="320" height="180" fill="${NACHT}" opacity="${op}"/>`;
  const schein = (x, y, r, farbe, op) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${farbe}" opacity="${op}" filter="url(#v-blur-gross)"/>`;
  const fenster = (himmel, extra = "") => `<rect x="160" y="28" width="54" height="52" rx="2" fill="#f7f9fa" filter="url(#v-sch)"/>
      <rect x="164" y="32" width="46" height="44" fill="${himmel}"/>${extra}<rect x="164" y="32" width="46" height="44" fill="url(#v-glas)" opacity=".45"/>
      <rect x="185.5" y="32" width="3" height="44" fill="#f7f9fa"/><rect x="164" y="52.5" width="46" height="3" fill="#f7f9fa"/>
      <rect x="156" y="79" width="62" height="3.5" rx="1.5" fill="#e9eef1"/>`;
  const abendHimmel = `<circle cx="201" cy="41" r="4.6" fill="${HELL}"/><circle cx="203.4" cy="39.6" r="4.1" fill="${ABEND}"/>
      ${[[170, 39], [177, 64], [197, 68], [171, 48], [206, 62]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".8" fill="${HELL}"/>`).join("")}`;
  // Stehleuchte links
  const SCHIRM_S = "M21.5 64 H38.5 L42.5 79 H17.5 Z";
  const stehleuchte = `<ellipse cx="30" cy="149.4" rx="9" ry="2" fill="#4a555a"/><rect x="29.1" y="79" width="1.8" height="70" fill="#8a949a"/>
      <path d="${SCHIRM_S}" fill="#efe3cc" stroke="#cdbb98" stroke-width=".6"/><line x1="23" y1="66" x2="37" y2="66" stroke="#fff" stroke-width="1" opacity=".35"/>`;
  const stehAn = L => `${schein(30, 76, 24, L.schein, 0.55)}<path d="M17.5 79 H42.5 L60 148 H0 Z" fill="${L.schein}" opacity=".16"/><path d="${SCHIRM_S}" fill="${L.schirm}" stroke="${L.schein}" stroke-width=".8"/>`;
  // Pendelleuchte über dem Sofa
  const pendel = `<line x1="104" y1="0" x2="104" y2="25" stroke="#5b666b" stroke-width="1"/>
      <path d="M92 35 Q92 24.5 104 24.5 Q116 24.5 116 35 Z" fill="#4a555a"/><path d="M95.5 29 Q98.5 26.2 103 25.8" fill="none" stroke="#fff" stroke-width=".8" opacity=".3"/>`;
  const pendelAn = L => `${schein(104, 40, 22, L.schein, 0.6)}<path d="M93 35 H115 L150 148 H58 Z" fill="${L.schein}" opacity=".15"/><ellipse cx="104" cy="35.4" rx="7" ry="2.2" fill="${L.schirm}"/>`;
  // Tischlampe auf dem Sideboard
  const SCHIRM_T = "M168.5 98 H183.5 L186.5 109 H165.5 Z";
  const tischlampe = `<rect x="173.6" y="109" width="4.8" height="8.4" rx="1.2" fill="#c9b79a"/><ellipse cx="176" cy="117.6" rx="5" ry="1" fill="#a5865f"/>
      <path d="${SCHIRM_T}" fill="#efe3cc" stroke="#cdbb98" stroke-width=".6"/>`;
  const tischAn = L => `${schein(176, 105, 18, L.schein, 0.55)}<path d="${SCHIRM_T}" fill="${L.schirm}" stroke="${L.schein}" stroke-width=".8"/>`;
  const sideboard = `<ellipse cx="193" cy="150" rx="38" ry="2.2" fill="#000" opacity=".12" filter="url(#v-blur)"/>
      <rect x="158" y="118" width="70" height="28" rx="2" fill="url(#v-holz)" stroke="#a5865f" stroke-width=".6"/>
      <line x1="193" y1="121" x2="193" y2="143" stroke="#a5865f" stroke-width=".6"/><circle cx="189.5" cy="132" r="1" fill="#8a6f50"/><circle cx="196.5" cy="132" r="1" fill="#8a6f50"/>
      <rect x="161" y="146" width="3" height="4" fill="#6e5a42"/><rect x="222" y="146" width="3" height="4" fill="#6e5a42"/>`;
  const router = `<line x1="201" y1="110.5" x2="199.4" y2="102.5" stroke="#2b3338" stroke-width="1.3" stroke-linecap="round"/><line x1="210" y1="110.5" x2="211.6" y2="102.5" stroke="#2b3338" stroke-width="1.3" stroke-linecap="round"/>
      <rect x="198" y="110" width="15" height="8" rx="1.6" fill="#2b3338"/>${[202, 205.5, 209].map(x => `<circle cx="${x}" cy="114" r=".7" fill="#7ee2c4"/>`).join("")}`;
  // Die Zentrale: kleine weiße Box neben dem Router, oben ein Lichtpunkt
  const zentrale = `<path d="M216.4 116 H213" stroke="#8a949a" stroke-width="1"/><rect x="216" y="111.6" width="11" height="6.4" rx="2.6" fill="url(#v-keramik)" stroke="#aab4b8" stroke-width=".6"/>
      <circle cx="221.5" cy="114.6" r="1.6" fill="#dde3e6" stroke="#c6ced2" stroke-width=".4"/>`;
  const zentraleAn = `<circle cx="221.5" cy="114.6" r="4.5" fill="#9fd3ff" opacity=".85" filter="url(#v-blur)"/><circle cx="221.5" cy="114.6" r="1.6" fill="#7cc8ff"/>`;
  const sofa = `<ellipse cx="100" cy="150.5" rx="48" ry="3" fill="#000" opacity=".14" filter="url(#v-blur)"/>
      <rect x="60" y="140" width="4" height="9" rx="1.5" fill="#3a2616"/><rect x="136" y="140" width="4" height="9" rx="1.5" fill="#3a2616"/>
      <rect x="64" y="104" width="72" height="24" rx="8" fill="url(#v-leder)"/><rect x="64" y="104" width="72" height="10" rx="5" fill="#fff" opacity=".12"/>
      <rect x="58" y="122" width="84" height="20" rx="6" fill="#6e482c"/>
      <rect x="54" y="114" width="12" height="30" rx="6" fill="url(#v-leder)"/><rect x="134" y="114" width="12" height="30" rx="6" fill="url(#v-leder)"/>
      <rect x="69" y="109" width="15" height="13" rx="4" fill="#d9a441" transform="rotate(-8 76.5 115.5)"/>`;
  // Tür rechts (Scharnier rechts bei x 302); flur = Farbe dahinter. auf = 0 (zu) bis 1 (offen),
  // wechsel = [[ab Sekunde, von, nach, Dauer], …]
  const tuerRahmen = (flur = "#26303a") => `<rect x="266" y="60" width="40" height="92" rx="2" fill="#d8cfbf"/><rect x="270" y="64" width="32" height="88" fill="${flur}"/>`;
  // schatten = so dunkel wie das Zimmer, wenn das Türblatt über einem Licht dahinter liegt (sonst 0)
  const tuerBlatt = (auf = 0, wechsel = [], schatten = 0) => {
    const x = a => (270 + 25 * a).toFixed(1), w = a => (32 - 25 * a).toFixed(1), k = a => (275 + 23 * a).toFixed(1);
    const an = (attr, f) => wechsel.map(([d, von, nach, len]) => `<animate attributeName="${attr}" values="${f(von)};${f(nach)}" begin="${d}s" dur="${len}s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".4 0 .2 1"/>`).join("");
    return `<rect x="${x(auf)}" y="64" width="${w(auf)}" height="88" fill="url(#v-holz)">${an("x", x)}${an("width", w)}</rect>
      <rect x="${x(auf)}" y="64" width="${w(auf)}" height="88" fill="url(#v-abdunkeln-r)" opacity=".25">${an("x", x)}${an("width", w)}</rect>
      <circle cx="${k(auf)}" cy="110" r="2.2" fill="#8a949a">${an("cx", k)}</circle>${schatten ? `
      <rect x="${x(auf)}" y="64" width="${w(auf)}" height="88" fill="${NACHT}" opacity="${schatten}">${an("x", x)}${an("width", w)}</rect>` : ""}`;
  };
  // Normaler Lichtschalter neben der Tür, links daneben der kleine runde Schalter zum Ankleben
  const schalter = `<rect x="252" y="94" width="9" height="13" rx="1.6" fill="#f7f9fa" stroke="#c6ced2" stroke-width=".6"/><rect x="254" y="96.6" width="5" height="7.8" rx="1" fill="#eef1f3" stroke="#c6ced2" stroke-width=".4"/>
      <line x1="254.6" y1="99" x2="258.4" y2="99" stroke="#c6ced2" stroke-width=".5"/>`;
  const knopf = `<circle cx="243" cy="100.5" r="4.4" fill="#f7f9fa" stroke="#c6ced2" stroke-width=".6"/><circle cx="243" cy="100.5" r="2.6" fill="#eef1f3" stroke="#d6dde0" stroke-width=".5"/>`;
  const wohnzimmer = (himmel, extra, flur) => `${fenster(himmel, extra)}${stehleuchte}${pendel}${sideboard}${tischlampe}${router}${boden}${sofa}${tuerRahmen(flur)}`;

  // Mia steht (Füße bei y 150): Kopf bei (x, 81), Schultern bei (x ± 8.4, 94.5)
  const steht = x => `<g transform="translate(${x} 150) scale(1.5)">${figurFrau(0, -14)}</g>`;
  // Mia sitzt von vorn: Schoß bei (x, y), darüber der kürzere Oberkörper; mit Beinen bis zum Boden bei y + 22 (Sofa)
  // oder ohne (im Bett unter der Decke). Kopf bei (x, y - 38), Schultern bei (x ± 8.4, y - 24.5)
  const sitzt = (x, y = 128, beine = true) => `<g class="figur" transform="translate(${x} ${y}) scale(1.5)" filter="url(#v-sch)"><path d="M-7.4 -24.3 C-8.2 -35.8 8.2 -35.8 7.4 -24.3 L8.6 -14.8 Q6 -13.7 4.4 -16.7 H-4.4 Q-6 -13.7 -8.6 -14.8 Z"/><circle cx="0" cy="-25.3" r="6"/><path d="M-5.6 -16.3 Q0 -18.9 5.6 -16.3 L6 -7 Q10.5 -6 10.5 -1 V0 H-10.5 V-1 Q-10.5 -6 -6 -7 Z"/>${beine ? `<rect x="-4.6" y="-1" width="3.2" height="15.7" rx="1.4"/><rect x="1.4" y="-1" width="3.2" height="15.7" rx="1.4"/>` : ""}</g>`;
  // Arm: Linie von der Schulter zur Hand; weg = [[x, y], …] Handpositionen ab Sekunde d über dauer (keyTimes kt)
  const arm = (sx, sy, weg, d = 0, dauer = 0, kt = "") => {
    const [hx, hy] = weg[0];
    const a = (attr, i) => weg.length < 2 ? "" : `<animate attributeName="${attr}" values="${weg.map(p => p[i]).join(";")}" keyTimes="${kt || weg.map((_, j) => (j / (weg.length - 1)).toFixed(3)).join(";")}" begin="${d}s" dur="${dauer}s" fill="freeze" calcMode="spline" keySplines="${weg.slice(1).map(() => ".4 0 .3 1").join(";")}"/>`;
    return `<line x1="${sx}" y1="${sy}" x2="${hx}" y2="${hy}" class="figur-strich" style="stroke-width:4.4">${a("x2", 0)}${a("y2", 1)}</line><circle cx="${hx}" cy="${hy}" r="2.6" class="figur">${a("cx", 0)}${a("cy", 1)}</circle>`;
  };
  // Angewinkelter Arm: Oberarm zum Ellbogen, Unterarm zur Hand; e und h = [[x, y] vorher, [x, y] nachher], Bewegung ab Sekunde d über dauer
  const armKnick = (sx, sy, e, h, d, dauer) => {
    const a = (attr, p, i) => `<animate attributeName="${attr}" values="${p[0][i]};${p[1][i]}" begin="${d}s" dur="${dauer}s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".4 0 .3 1"/>`;
    return `<line x1="${sx}" y1="${sy}" x2="${e[0][0]}" y2="${e[0][1]}" class="figur-strich" style="stroke-width:4.4">${a("x2", e, 0)}${a("y2", e, 1)}</line>
      <line x1="${e[0][0]}" y1="${e[0][1]}" x2="${h[0][0]}" y2="${h[0][1]}" class="figur-strich" style="stroke-width:4.4">${a("x1", e, 0)}${a("y1", e, 1)}${a("x2", h, 0)}${a("y2", h, 1)}</line>
      <circle cx="${h[0][0]}" cy="${h[0][1]}" r="2.6" class="figur">${a("cx", h, 0)}${a("cy", h, 1)}</circle>`;
  };
  const tipp = (x, y, d) => `<g class="v-ein" style="--d:${d}s;animation-duration:.05s"><g transform="translate(${x} ${y})"><circle r="6" class="tipp v-tipp" style="--d:${d}s"/></g></g>`;
  const unterschrift = (text, d, nacht = false) => `<text x="160" y="169" text-anchor="middle" class="t-klein v-hoch" style="--d:${d}s;fill:${nacht ? HELL : "#3b2f22"}">${text}</text>`;

  // Schlafzimmer: Nachttisch mit Lampe, Bett (Kopfende links), die Decke in Mias Farbe
  const NACHTLAMPE = "M11 104 H25 L27.5 114 H8.5 Z";
  const nachttisch = `<rect x="8" y="122" width="20" height="28" rx="1.5" fill="url(#v-holz)" stroke="#a5865f" stroke-width=".6"/><line x1="10" y1="134" x2="26" y2="134" stroke="#a5865f" stroke-width=".6"/><circle cx="18" cy="128.5" r=".9" fill="#8a6f50"/>
      <rect x="16.4" y="114" width="3.2" height="8" rx="1" fill="#c9b79a"/><path d="${NACHTLAMPE}" fill="#efe3cc" stroke="#cdbb98" stroke-width=".6"/>`;
  const nachtlampeAn = L => `${schein(18, 110, 26, L.schein, 0.65)}<path d="${NACHTLAMPE}" fill="${L.schirm}" stroke="${L.schein}" stroke-width=".8"/>`;
  const bett = `<ellipse cx="77" cy="150" rx="47" ry="2.5" fill="#000" opacity=".14" filter="url(#v-blur)"/>
      <rect x="32" y="94" width="7" height="56" rx="3" fill="url(#v-holz)" stroke="#a5865f" stroke-width=".6"/>
      <rect x="115" y="115" width="7" height="35" rx="3" fill="url(#v-holz)" stroke="#a5865f" stroke-width=".6"/>
      <rect x="37" y="128" width="80" height="10" rx="2" fill="#bfa27c"/><rect x="37" y="128" width="80" height="10" rx="2" fill="url(#v-abdunkeln)" opacity=".35"/>
      <rect x="39" y="119" width="76" height="10" rx="3" fill="#f4f6f7" stroke="#cfd6da" stroke-width=".6"/>
      <rect x="41" y="111.5" width="21" height="8.5" rx="4.2" fill="#fbfcfd" stroke="#cfd6da" stroke-width=".6"/>`;
  const liegt = `<g transform="translate(116 115) rotate(-82) scale(1.4)">${figurFrau(0, -14)}</g>`;
  const deckeAuf = f => `<path d="M68 103 Q72 99.6 80 100.2 L94 100.6 Q108 102 116 107 Q119 109 119 113 V123 Q119 125 117 125 H68 Q65.5 125 65.5 122.5 V105.5 Q65.5 103.4 68 103 Z" fill="${f}"/>
      <path d="M68 103 Q72 99.6 80 100.2 L94 100.6 Q108 102 116 107" fill="none" stroke="#fff" stroke-width="1.4" opacity=".22"/>`;
  // Zurückgeschlagen: die Decke liegt gefaltet am Fußende
  const deckeZurueck = f => `<path d="M90 117.5 Q91 111.5 98 111.5 H114 Q118.6 111.5 118.6 116 V124.5 Q118.6 126.6 116.4 126.6 H92 Q90 126.6 90 124.6 Z" fill="${f}"/><path d="M92 116 Q99 113.4 117 114.4" fill="none" stroke="#fff" stroke-width="1.2" opacity=".22"/>`;
  // Im Sitzen: die Decke über dem Schoß
  const deckeSitzend = f => `<path d="M48 115.5 Q52 111 62 112 H113 Q119 112 119 117 V123 Q119 125.5 116.5 125.5 H50.5 Q48 125.5 48 123 Z" fill="${f}"/><path d="M50 114 Q56 111.6 64 112.6 H114" fill="none" stroke="#fff" stroke-width="1.2" opacity=".22"/>`;
  // Licht aus der Küche: Streifen unter der Tür, Ritzen an den Seiten, Schein auf dem Boden
  const KUECHE = "#ffd36b";
  const kuechenlicht = `<ellipse cx="286" cy="153.5" rx="34" ry="5" fill="${KUECHE}" opacity=".75" filter="url(#v-blur)"/><rect x="270" y="150" width="32" height="2.2" fill="${KUECHE}"/>
      <rect x="269.2" y="64" width="1.2" height="88" fill="${KUECHE}" opacity=".7"/><rect x="301.6" y="64" width="1.2" height="88" fill="${KUECHE}" opacity=".7"/>`;
  // Zzz über der Schlafenden: jedes Z steigt einmal auf und verblasst
  const zzz = (d, n) => Array.from({ length: n }, (_, i) => { const klein = (n - 1 - i) % 2; return `<g class="v-geh" style="--dx:${klein ? 7 : 4}px;--dy:-22px;--d:${(d + i * 0.8).toFixed(1)}s;--len:2.4s"><g class="v-takt" style="--d:${(d + i * 0.8).toFixed(1)}s;--len:2.4s"><g transform="translate(${klein ? 62 : 58} 96) scale(${klein ? 1.25 : 1.5})"><path d="M-3 -3 H3 L-3 3 H3" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g></g></g>`; }).join("");

  // Funkwellen zwischen den drei Lampen (Stehleuchte, Pendelleuchte, Tischlampe): daran merken die Lampen eine Bewegung
  const LAMPEN = [[30, 72], [104, 37], [176, 103]];
  const funk = (stil, op) => [[0, 1], [1, 2], [0, 2]].map(([a, b]) => `<line x1="${LAMPEN[a][0]}" y1="${LAMPEN[a][1]}" x2="${LAMPEN[b][0]}" y2="${LAMPEN[b][1]}" stroke="#9fd3ff" stroke-width="1.3" stroke-dasharray="2.5 4" stroke-linecap="round" opacity="${op}" class="v-fliess" style="${stil}"/>`).join("")
    + LAMPEN.map(([x, y]) => [5, 9].map(r => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#9fd3ff" stroke-width=".9" opacity="${(op * (r === 5 ? 0.9 : 0.5)).toFixed(2)}"/>`).join("")).join("");
  // Handy in Mias Hand (sitzend auf dem Sofa), Mitte bei (x, y), leicht gekippt; der Bildschirm wird ab Sekunde d warm
  const handyKlein = (d, x, y) => {
    const dreh = `transform="rotate(12 ${x} ${y})"`;
    return `<rect x="${x - 3.5}" y="${y - 5.3}" width="7" height="10.6" rx="1.5" class="phone" ${dreh}/><rect x="${x - 2.6}" y="${y - 4.1}" width="5.2" height="8.2" rx=".8" class="screen" ${dreh}/>
      <rect x="${x - 2.6}" y="${y - 4.1}" width="5.2" height="8.2" rx=".8" fill="${WARM.schein}" class="v-ein" style="--d:${d}s" ${dreh}/>`;
  };
  // Lupe mit dem Handy: Szenen als farbige Kacheln (Farben nur als Akzent); gewaehlt = Kachel 0 bis 3, die angetippt wird
  const szenenHandy = (cx, cy, d, tippen) => {
    const kacheln = ["v-gold-g", "v-orange-g", "v-blau-g", "v-gruen-g"];
    const k = (i, x, y) => `<g class="v-pop" style="--d:${(d + 0.15 + i * 0.12).toFixed(2)}s"><rect x="${x}" y="${y}" width="11" height="11" rx="2.4" fill="url(#${kacheln[i]})"/><rect x="${x}" y="${y}" width="11" height="5" rx="2.4" fill="url(#v-glanz)" opacity=".6"/></g>`;
    const x0 = cx - 13, y0 = cy - 6;
    const auswahl = tippen ? `<rect x="${x0 + 12}" y="${y0 - 1}" width="13" height="13" rx="3.2" fill="none" stroke="#fff" stroke-width="1.6" class="v-ein" style="--d:${tippen + 0.1}s"/>
        <path d="M${x0 + 15.6} ${y0 + 5.6} L${x0 + 17.6} ${y0 + 7.6} L${x0 + 21.4} ${y0 + 3.6}" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" class="v-zeichne" style="--d:${tippen + 0.15}s;--len:.3s"/>
        ${tipp(x0 + 18.5, y0 + 5.5, tippen)}` : "";
    return `<g transform="translate(${cx} ${cy})"><g class="v-pop" style="--d:${d}s"><g transform="translate(${-cx} ${-cy})">
        <circle cx="${cx}" cy="${cy}" r="28" fill="#f7f9fa" stroke="#cfd6da" stroke-width="2" filter="url(#v-sch)"/>
        <rect x="${cx - 16}" y="${cy - 24}" width="32" height="48" rx="5" class="phone"/><rect x="${cx - 13.5}" y="${cy - 20.5}" width="27" height="41" rx="2.5" class="screen"/>
        <text x="${cx - 10.5}" y="${cy - 11}" class="t-mini fett" style="font-size:6.5px">Szenen</text>
        ${k(0, x0, y0)}${k(1, x0 + 13, y0)}${k(2, x0, y0 + 13)}${k(3, x0 + 13, y0 + 13)}${auswahl}
      </g></g></g>`;
  };

  VIDEOS["smarte-lampen"] = { szenen: [
    {
      dauer: 8, vorher: true, titel: "Bisher: Im Dunkeln nach dem Schalter tasten",
      text: "Abends kommt sie im Dunkeln nach Hause und tastet an der Wand nach dem Lichtschalter. Dann blendet grelles, kaltes Deckenlicht.",
      svg: `${wohnzimmer(ABEND, abendHimmel)}${tuerBlatt(0, [[0.2, 0, 1, 0.5]])}${schalter}
        <g class="v-weg" style="--d:3.9s;animation-duration:.15s">${dunkel(0.64)}</g>
        <g class="v-ein" style="--d:3.9s;animation-duration:.15s">
          <rect width="320" height="180" fill="${KALT.schein}" opacity=".2"/>${pendelAn(KALT)}${schein(104, 38, 40, "#ffffff", 0.45)}
          <g transform="translate(104 37)">${Array.from({ length: 9 }, (_, i) => `<line x1="0" y1="14" x2="0" y2="22" stroke="#cfe6ff" stroke-width="1.4" stroke-linecap="round" transform="rotate(${-80 + i * 20})"/>`).join("")}</g>
        </g>
        <g class="v-ein" style="--d:.45s;animation-duration:.3s"><g class="v-geh" style="--dx:-50px;--dy:0px;--d:.6s;--len:.9s">
          ${steht(286)}
          <g class="v-ein" style="--d:1.3s;animation-duration:.25s"><g class="v-weg" style="--d:4.45s;animation-duration:.1s">
            ${arm(294.4, 94.5, [[296, 106], [303, 91], [306.5, 96], [302.5, 104.5], [307, 105], [304.5, 97.5], [306.5, 100.5], [306.5, 100.5], [296, 106]], 1.35, 3.05, "0;.13;.3;.46;.6;.74;.85;.9;1")}
          </g></g>
          <g class="v-ein" style="--d:4s;animation-duration:.15s">${armKnick(277.6, 94.5, [[276.6, 100.5], [268.5, 84]], [[276, 106], [276.5, 76.5]], 4, 0.35)}</g>
        </g></g>
        ${tipp(256.5, 100.5, 3.85)}
        ${blase(130, 14, "Wo ist der Schalter?", 0.4, 3.3)}
        ${blase(130, 14, "Grell und kalt", 4.1, 3.6)}
        <g class="v-weg" style="--d:3.9s;animation-duration:.15s">${unterschrift("Abends kommt sie nach Hause.", 0.6, true)}</g>
        <g class="v-ein" style="--d:3.9s;animation-duration:.15s"><text x="160" y="169" text-anchor="middle" class="t-klein" style="fill:#3b2f22">Abends kommt sie nach Hause.</text></g>`
    },
    {
      dauer: 8, vorher: true, titel: "Bisher: Noch mal aufstehen",
      text: "Sie liegt schon im Bett, da sieht sie Licht unter der Küchentür. Also steht sie noch einmal auf und macht es aus.",
      svg: `${fenster(NACHT, `<g opacity=".9">${abendHimmel}</g>`)}${nachttisch}${bett}${boden}${tuerRahmen()}
        ${dunkel(0.58)}
        <g class="v-ein" style="--d:6.55s;animation-duration:.4s"><rect x="270" y="64" width="32" height="88" fill="#ffe3a3"/>${schein(286, 112, 40, KUECHE, 0.4)}
          <path d="M270 151 H302 L314 166 H264 Z" fill="${KUECHE}" opacity=".4" filter="url(#v-blur)"/></g>
        ${tuerBlatt(0, [[6.5, 0, 1, 0.5]], 0.58)}
        ${kuechenlicht}
        <g class="v-weg" style="--d:3.4s">${liegt}${deckeAuf(DECKE_NACHT)}</g>
        <g class="v-ein" style="--d:3.4s">${deckeZurueck(DECKE_NACHT)}</g>
        <g class="v-ein" style="--d:3.5s;animation-duration:.4s"><g class="v-geh" style="--dx:110px;--dy:0px;--d:4.1s;--len:2.3s">${steht(138)}
          <g class="v-ein" style="--d:6.2s;animation-duration:.15s"><g class="v-weg" style="--d:7.2s;animation-duration:.1s">${arm(146.4, 94.5, [[148, 106], [165, 110], [165, 110], [148, 106]], 6.2, 1, "0;.3;.6;1")}</g></g>
        </g></g>
        ${blase(130, 14, "Küchenlicht vergessen", 0.4, 3.2)}
        ${blase(130, 14, "Noch mal aufstehen", 4.0, 3.6)}
        ${unterschrift("Sie liegt schon im Bett.", 0.8, true)}`
    },
    {
      dauer: 8.5, titel: "Einfach reinschrauben",
      text: "Sie schraubt die smarte Lampe statt der alten Glühbirne in ihre Stehleuchte. Die kleine Zentrale kommt an den Router, und in der App warten fertige Lichtszenen.",
      svg: `${wohnzimmer(TAG)}${tuerBlatt(0)}${schalter}${zentrale}
        <g class="v-ein" style="--d:3.8s">${zentraleAn}</g>
        ${tipp(221.5, 114.6, 3.7)}
        <g class="v-ein" style="--d:3.9s"><line x1="221.5" y1="110.4" x2="221.5" y2="101" stroke-width=".7" style="stroke:var(--ink)"/><text x="221.5" y="98" text-anchor="middle" class="t-mini">Zentrale</text></g>
        ${steht(52)}
        <g class="v-ein" style="--d:.2s;animation-duration:.25s"><g class="v-weg" style="--d:3.05s;animation-duration:.1s">
          ${arm(43.6, 94.5, [[42, 106], [33, 64.5], [33, 64.5], [34.5, 63], [33, 64.5], [42, 106]], 0.25, 2.8, "0;.18;.4;.6;.8;1")}
        </g></g>
        <g class="v-pop" style="--d:.5s"><g class="v-weg" style="--d:3.3s">
          <line x1="40" y1="64" x2="62" y2="56" stroke="#9aa5aa" stroke-width="1" stroke-dasharray="2 2"/>
          <circle cx="84" cy="52" r="23" fill="#f7f9fa" stroke="#cfd6da" stroke-width="2" filter="url(#v-sch)"/>
          <path d="M70 60 H98 L101 72 H67 Z" fill="#efe3cc" stroke="#cdbb98" stroke-width=".6"/>
          <rect x="78.5" y="58" width="11" height="9" rx="1.6" fill="#8a949a"/>${[60.2, 62.6, 64.8].map(y => `<line x1="79.5" y1="${y}" x2="88.5" y2="${y}" stroke="#5b666b" stroke-width=".7"/>`).join("")}
          <g class="v-geh" style="--dx:0px;--dy:7px;--d:.9s;--len:1.5s">
            <path d="M80 53 V47.6 Q76 44.6 76 39.4 A8 8 0 1 1 92 39.4 Q92 44.6 88 47.6 V53 Z" fill="#fffdf6" stroke="#cfd6da" stroke-width=".8"/>
            <rect x="80" y="47.4" width="8" height="6" rx="1" fill="#c6ced2"/>${[49, 51.2].map(y => `<line x1="80.4" y1="${y}" x2="87.6" y2="${y + 0.9}" stroke="#8a949a" stroke-width=".6"/>`).join("")}
            <path d="M80 53 V47.6 Q76 44.6 76 39.4 A8 8 0 1 1 92 39.4 Q92 44.6 88 47.6 V53 Z" fill="${WEISS.schein}" class="v-ein" style="--d:2.6s"/>
          </g>
          <g class="v-ein" style="--d:.9s"><g class="v-weg" style="--d:2.4s"><g transform="translate(84 44)"><g class="v-dreh" style="animation-duration:.9s"><path d="M-12.5 0 A12.5 12.5 0 0 1 8.8 -8.8" fill="none" stroke="#0d6e5b" stroke-width="1.6" stroke-linecap="round"/><path d="M8.8 -8.8 L4.6 -9.8 M8.8 -8.8 L8.2 -4.6" fill="none" stroke="#0d6e5b" stroke-width="1.6" stroke-linecap="round"/></g></g></g></g>
        </g></g>
        <g class="v-ein" style="--d:4.9s;animation-duration:.25s">${arm(60.4, 94.5, [[62, 108]])}<rect x="61" y="99.5" width="7" height="10.6" rx="1.5" class="phone"/><rect x="61.9" y="100.7" width="5.2" height="8.2" rx=".8" class="screen"/></g>
        <g class="v-ein" style="--d:5.1s"><line x1="69" y1="103" x2="81" y2="91" stroke="#9aa5aa" stroke-width="1" stroke-dasharray="2 2"/></g>
        ${szenenHandy(104, 68, 5.1, 0)}
        ${blase(130, 14, "Lampe reinschrauben", 0.3, 3.0)}
        ${blase(130, 14, "Zentrale an den Router", 3.5, 3.1)}
        ${unterschrift("In der App wählst du Szenen.", 5.0)}`
    },
    {
      dauer: 7.5, titel: "Licht an, sobald sie hereinkommt",
      text: "Sie kommt ins Wohnzimmer, und die Lampen gehen sanft an. Ab drei Lampen in einem Raum merken sie die Bewegung an ihren Funksignalen, dafür braucht es die passende Zentrale.",
      svg: `${wohnzimmer(ABEND, abendHimmel)}${tuerBlatt(0, [[0.2, 0, 1, 0.5]])}${schalter}${knopf}${zentrale}
        <g class="v-weg" style="--d:1.95s;animation-duration:1s">${dunkel(0.42)}</g>${dunkel(0.15)}
        ${zentraleAn}
        <g class="v-weg" style="--d:2.6s;animation-duration:.8s">${funk("", 0.75)}</g>
        <g class="v-ein" style="--d:1.9s;animation-duration:.25s"><g class="v-weg" style="--d:2.6s;animation-duration:.6s">${funk("animation-duration:.4s", 1)}</g></g>
        <g class="v-ein" style="--d:3.2s">${funk("animation-duration:1.6s", 0.3)}</g>
        <g class="v-ein" style="--d:2.05s;animation-duration:.9s">${tischAn(WEISS)}</g>
        <g class="v-ein" style="--d:2.25s;animation-duration:.9s">${pendelAn(WEISS)}</g>
        <g class="v-ein" style="--d:2.45s;animation-duration:.9s">${stehAn(WEISS)}</g>
        <g class="v-ein" style="--d:.45s;animation-duration:.3s"><g class="v-geh" style="--dx:-148px;--dy:0px;--d:.6s;--len:2s">${steht(286)}</g></g>
        ${blase(130, 14, "Sie kommt nach Hause", 0.3, 3.1)}
        ${blase(130, 14, "Licht geht von selbst an", 3.7, 3.6)}
        ${unterschrift("Die Lampen merken die Bewegung.", 2.7)}`
    },
    {
      dauer: 7.5, titel: "Ein Tipp, und es wird gemütlich",
      text: "Auf dem Sofa tippt sie in der App auf eine Szene. Das Licht wird warm und gedimmt, genau richtig zum Entspannen.",
      svg: `${wohnzimmer(ABEND, abendHimmel)}${tuerBlatt(0)}${schalter}${knopf}${zentrale}
        ${dunkel(0.15)}
        <g class="v-ein" style="--d:1.75s;animation-duration:1.2s">${dunkel(0.14)}<rect width="320" height="180" fill="#ff9a3a" opacity=".16"/></g>
        ${zentraleAn}
        <g class="v-weg" style="--d:1.75s;animation-duration:1.2s">${tischAn(WEISS)}${pendelAn(WEISS)}${stehAn(WEISS)}</g>
        <g class="v-ein" style="--d:1.75s;animation-duration:1.2s">${tischAn(WARM)}${pendelAn(WARM)}${stehAn(WARM)}</g>
        ${sitzt(100)}
        ${arm(108.4, 103.5, [[115, 116]])}${handyKlein(1.6, 116.2, 110.8)}
        <g class="v-weg" style="--d:4.6s"><g class="v-ein" style="--d:.3s"><line x1="120.5" y1="105.5" x2="145.4" y2="76.9" stroke="#9aa5aa" stroke-width="1" stroke-dasharray="2 2"/></g>
          ${szenenHandy(164, 56, 0.3, 1.45)}</g>
        ${blase(130, 14, "Ein Tipp auf die Szene", 0.3, 3.1)}
        ${blase(130, 14, "Warm und gedimmt", 3.8, 3.5)}
        ${unterschrift("So wird es richtig gemütlich.", 2.6)}`
    },
    {
      dauer: 7.5, titel: "Morgens sanft geweckt",
      text: "Am Morgen wird die Lampe am Bett nach Zeitplan langsam heller. So wacht sie nicht im Dunkeln auf, sondern entspannt.",
      svg: `${fenster(NACHT, `<rect x="164" y="32" width="46" height="44" fill="#f2b38a" class="v-ein" style="--d:.6s;animation-duration:3s"/><rect x="164" y="32" width="46" height="44" fill="${TAG}" class="v-ein" style="--d:3.6s;animation-duration:2.4s"/>`)}
        ${nachttisch}${bett}${boden}${tuerRahmen()}${tuerBlatt(0)}
        <g class="v-weg" style="--d:.5s;animation-duration:4s">${dunkel(0.45)}</g>${dunkel(0.1)}
        <g class="v-ein" style="--d:.4s;animation-duration:3.6s">${nachtlampeAn(WARM)}<rect width="320" height="180" fill="#ffb24d" opacity=".07"/></g>
        <g class="v-weg" style="--d:4.3s">${liegt}${deckeAuf(DECKE)}</g>
        ${zzz(0.4, 3)}
        <g class="v-ein" style="--d:4.3s">${sitzt(64, 123, false)}${deckeSitzend(DECKE)}
          <g class="v-ein" style="--d:4.9s;animation-duration:.2s">${arm(55.6, 98.5, [[57.5, 108], [47, 78]], 4.9, 0.45)}${arm(72.4, 98.5, [[70.5, 108], [81, 78]], 4.9, 0.45)}</g></g>
        ${blase(130, 14, "Das Licht wird langsam heller", 0.4, 3.5)}
        ${blase(130, 14, "Entspannt aufwachen", 4.2, 3.1)}
        <g class="v-weg" style="--d:3.8s;animation-duration:.6s">${unterschrift("Nach Zeitplan, jeden Morgen.", 1.6, true)}</g>
        <g class="v-ein" style="--d:3.8s;animation-duration:.6s"><text x="160" y="169" text-anchor="middle" class="t-klein" style="fill:#3b2f22">Nach Zeitplan, jeden Morgen.</text></g>`
    },
    {
      dauer: 7.5, titel: "Beim Gehen alles aus",
      text: "An der Tür drückt sie den kleinen Schalter, der neben dem normalen Lichtschalter klebt, und alle Lampen gehen nacheinander aus. Mit einem Tipp in der App geht das auch von unterwegs.",
      svg: `${wohnzimmer(ABEND, abendHimmel)}${tuerBlatt(0, [[2.7, 0, 1, 0.5], [5.0, 1, 0, 0.5]])}${schalter}${knopf}${zentrale}
        ${dunkel(0.15)}
        <g class="v-ein" style="--d:1.4s;animation-duration:.35s">${dunkel(0.16)}</g>
        <g class="v-ein" style="--d:1.8s;animation-duration:.35s">${dunkel(0.16)}</g>
        <g class="v-ein" style="--d:2.2s;animation-duration:.35s">${dunkel(0.2)}</g>
        ${zentraleAn}
        <g class="v-weg" style="--d:1.4s;animation-duration:.35s">${tischAn(WEISS)}</g>
        <g class="v-weg" style="--d:1.8s;animation-duration:.35s">${pendelAn(WEISS)}</g>
        <g class="v-weg" style="--d:2.2s;animation-duration:.35s">${stehAn(WEISS)}</g>
        <g class="v-pop" style="--d:2.7s"><rect x="249.5" y="91.5" width="14" height="18" rx="3" class="tipp" style="stroke-width:1.4"/></g>
        <g class="v-weg" style="--d:4.3s;animation-duration:.4s"><g class="v-geh" style="--dx:60px;--dy:0px;--d:3s;--len:1.3s">
          ${steht(226)}
          <g class="v-ein" style="--d:.5s;animation-duration:.25s"><g class="v-weg" style="--d:1.75s;animation-duration:.1s">${arm(234.4, 94.5, [[236, 106], [241.6, 100.5], [241.6, 100.5], [236, 106]], 0.55, 1.2, "0;.4;.6;1")}</g></g>
        </g></g>
        ${tipp(243, 100.5, 1.05)}
        ${blase(130, 14, "Ein Druck beim Gehen", 0.3, 3.1)}
        ${blase(130, 14, "Alle Lampen gehen aus", 3.7, 3.6)}
        ${unterschrift("Der normale Schalter bleibt an.", 2.6, true)}`
    }
  ] };
})();

VIDEOS.saugroboter.poster = 4;
VIDEOS.airfryer.poster = 1;
VIDEOS.buerste.poster = 1;
VIDEOS.deckel.poster = 1;
VIDEOS.kindle.poster = 1;
VIDEOS.waschtrockner.poster = 1;
VIDEOS.akkusauger.poster = 3;
VIDEOS.reiskocher.poster = 2;
VIDEOS.thermostate.poster = 2;
VIDEOS.zahnbuerste.poster = 1;
VIDEOS.sparduschkopf.poster = 2;
VIDEOS.kaffeevollautomat.poster = 3;
VIDEOS.wassersprudler.poster = 3;
VIDEOS["kuechenmaschine-kochfunktion"].poster = 3;
VIDEOS.kuechenmaschine.poster = 2;
VIDEOS["mini-geschirrspueler"].poster = 3;
VIDEOS.balkonkraftwerk.poster = 2;
VIDEOS.klimaanlage.poster = 3;
VIDEOS["smarte-lampen"].poster = 4;

// Englische Seiten: Titel, Text und die Schrift in den Zeichnungen übersetzen (nur Texte, für die es eine Übersetzung gibt)
if (typeof VIDEO_TEXTE !== "undefined") {
  Object.values(VIDEOS).forEach(v => v.szenen.forEach(s => {
    s.titel = T(s.titel);
    s.text = T(s.text);
    s.svg = s.svg.replace(/>([^<>]*[A-Za-zÄÖÜäöüß][^<>]*)</g, (alt, x) => { const k = x.trim(), e = T(k); return e === k ? alt : `>${x.replace(k, e)}<`; });
  }));
}
