// ===== Workout data =====
// videoKey: shared video identifier — same movement, same video on every day
const WORKOUT_DAYS = [
  {
    id: "monday",
    weekday: 1,
    short: "Seg",
    name: "Segunda",
    focus: "Upper — Força + Jiu-jítsu",
    exercises: [
      { id: "mon-bench", videoKey: "bench-press", name: "Supino reto", scheme: "5×5" },
      { id: "mon-weighted-pullup", videoKey: "pullup", name: "Barra fixa com peso (ou puxada pesada)", scheme: "5×5" },
      { id: "mon-barbell-row", videoKey: "barbell-row", name: "Remada curvada", scheme: "4×6" },
      { id: "mon-ohp", videoKey: "overhead-press", name: "Desenvolvimento militar", scheme: "4×5" },
      { id: "mon-curl", videoKey: "barbell-curl", name: "Rosca direta", scheme: "3×6–8" },
      { id: "mon-lateral-raise", videoKey: "lateral-raise", name: "Elevação lateral", scheme: "3×12" },
      { id: "mon-farmers-walk", videoKey: "farmers-walk", name: "Farmer's Walk", scheme: "4×40–60s", grip: true },
      { id: "mon-dead-hang", videoKey: "dead-hang", name: "Dead Hang", scheme: "3× até quase falhar", grip: true },
    ],
  },
  {
    id: "tuesday",
    weekday: 2,
    short: "Ter",
    name: "Terça",
    focus: "Lower — Força",
    exercises: [
      { id: "tue-squat", videoKey: "squat", name: "Agachamento livre", scheme: "5×5" },
      { id: "tue-rdl", videoKey: "rdl", name: "Levantamento terra romeno", scheme: "4×6" },
      { id: "tue-lunge", videoKey: "db-lunge", name: "Afundo com halteres", scheme: "3×8 cada perna" },
      { id: "tue-calf-raise", videoKey: "standing-calf-raise", name: "Panturrilha em pé", scheme: "4×15" },
      { id: "tue-weighted-plank", videoKey: "weighted-plank", name: "Prancha com peso", scheme: "3×1min", core: true },
      { id: "tue-leg-raise", videoKey: "leg-raise", name: "Elevação de pernas", scheme: "3×15", core: true },
    ],
  },
  {
    id: "wednesday",
    weekday: 3,
    short: "Qua",
    name: "Quarta",
    focus: "Upper — Potência + Jiu-jítsu",
    exercises: [
      { id: "wed-speed-bench", videoKey: "speed-bench", name: "Supino explosivo", scheme: "6×3", note: "60–70% da carga máxima" },
      { id: "wed-pullup", videoKey: "pullup", name: "Barra fixa", scheme: "4× máximo" },
      { id: "wed-seated-row", videoKey: "seated-row", name: "Remada baixa", scheme: "4×8" },
      { id: "wed-db-press", videoKey: "db-shoulder-press", name: "Desenvolvimento com halteres", scheme: "3×8" },
      { id: "wed-face-pull", videoKey: "face-pull", name: "Face Pull", scheme: "3×15" },
      { id: "wed-hammer-curl", videoKey: "hammer-curl", name: "Rosca martelo", scheme: "3×8–10" },
      { id: "wed-triceps-rope", videoKey: "triceps-rope", name: "Tríceps corda", scheme: "3×10" },
      { id: "wed-towel-hang", videoKey: "towel-hang", name: "Hangs na toalha", scheme: "3×30–45s", grip: true },
    ],
  },
  {
    id: "thursday",
    weekday: 4,
    short: "Qui",
    name: "Quinta",
    focus: "Full Body — Pesado",
    exercises: [
      { id: "thu-deadlift", videoKey: "deadlift", name: "Levantamento terra", scheme: "5×3" },
      { id: "thu-incline-bench", videoKey: "incline-bench", name: "Supino inclinado", scheme: "4×6" },
      { id: "thu-pullup", videoKey: "pullup", name: "Barra fixa", scheme: "4×6" },
      { id: "thu-ohp", videoKey: "overhead-press", name: "Desenvolvimento militar", scheme: "3×8" },
      { id: "thu-one-arm-row", videoKey: "one-arm-row", name: "Remada unilateral", scheme: "3×10" },
      { id: "thu-heavy-farmers", videoKey: "farmers-walk", name: "Farmer's Walk pesado", scheme: "5×30s", grip: true },
      { id: "thu-cable-crunch", videoKey: "cable-crunch", name: "Abdominal na polia ou máquina", scheme: "3×15", core: true },
    ],
  },
  {
    id: "friday",
    weekday: 5,
    short: "Sex",
    name: "Sexta",
    focus: "Upper — Resistência + Jiu-jítsu",
    exercises: [
      { id: "fri-bench", videoKey: "bench-press", name: "Supino reto", scheme: "3×10" },
      { id: "fri-one-arm-row", videoKey: "one-arm-row", name: "Remada unilateral", scheme: "3×10" },
      { id: "fri-pullup", videoKey: "pullup", name: "Barra fixa", scheme: "3× máximo" },
      { id: "fri-preacher-curl", videoKey: "preacher-curl", name: "Rosca Scott", scheme: "3×10–12" },
      { id: "fri-reverse-curl", videoKey: "reverse-curl", name: "Rosca inversa", scheme: "3×12" },
      { id: "fri-french-press", videoKey: "french-press", name: "Tríceps francês", scheme: "3×12" },
      { id: "fri-lateral-raise", videoKey: "lateral-raise", name: "Elevação lateral", scheme: "3×15" },
      { id: "fri-reverse-fly", videoKey: "reverse-fly", name: "Crucifixo inverso (ou Face Pull)", scheme: "3×15" },
      { id: "fri-dead-hang", videoKey: "dead-hang", name: "Dead Hang", scheme: "3× até quase falhar", grip: true },
      { id: "fri-wrist-roller", videoKey: "wrist-roller", name: "Wrist Roller", scheme: "3 voltas", grip: true },
    ],
  },
];

const RULES = [
  {
    title: "Exercícios principais",
    items: [
      "<strong>Supino, Barra fixa, Agachamento e Terra</strong>",
      "Trabalhe sempre entre <strong>3 e 6 repetições</strong>",
      "Foque em aumentar a carga aos poucos (progressão)",
    ],
  },
  {
    title: "Exercícios acessórios",
    items: ["Fique entre <strong>8 e 15 repetições</strong>"],
  },
  {
    title: "Finalizador de pegada (todo treino)",
    items: [
      "Farmer's Walk",
      "Dead Hang",
      "Hangs na toalha",
      "Wrist Roller",
      "Isso fortalece exatamente a pegada que costuma falhar no kimono",
    ],
  },
  {
    title: "Filosofia do treino",
    items: [
      "Menos isoladores de bíceps/tríceps, mais <strong>barra fixa, remadas, farmer's walk, toalha e terra</strong>",
      "Força nos movimentos básicos, costas e pegada muito fortes",
      "Pernas fortes para explosão, base e raspagens",
    ],
  },
];

// ===== Persistence (localStorage) =====
const storage = {
  read(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

const VIDEOS_KEY = "workout-videos";
const LOADS_KEY = "workout-loads";
const DONE_KEY = "workout-done";

// Old per-day ids → new shared videoKeys (keeps videos saved before this update)
const LEGACY_VIDEO_IDS = {
  "mon-bench": "bench-press",
  "mon-weighted-pullup": "pullup",
  "mon-barbell-row": "barbell-row",
  "mon-ohp": "overhead-press",
  "mon-dips": "dips",
  "mon-farmers-walk": "farmers-walk",
  "mon-dead-hang": "dead-hang",
  "tue-squat": "squat",
  "tue-rdl": "rdl",
  "tue-lunge": "db-lunge",
  "tue-calf-raise": "standing-calf-raise",
  "tue-weighted-plank": "weighted-plank",
  "tue-leg-raise": "leg-raise",
  "wed-speed-bench": "speed-bench",
  "wed-pullup": "pullup",
  "wed-seated-row": "seated-row",
  "wed-face-pull": "face-pull",
  "wed-hammer-curl": "hammer-curl",
  "wed-triceps-rope": "triceps-rope",
  "wed-towel-hang": "towel-hang",
  "thu-deadlift": "deadlift",
  "thu-incline-bench": "incline-bench",
  "thu-pullup": "pullup",
  "thu-ohp": "overhead-press",
  "thu-heavy-farmers": "farmers-walk",
  "thu-cable-crunch": "cable-crunch",
  "fri-bench": "bench-press",
  "fri-one-arm-row": "one-arm-row",
  "fri-pullup": "pullup",
  "fri-curl": "barbell-curl",
  "fri-french-press": "french-press",
  "fri-dead-hang": "dead-hang",
  "fri-wrist-roller": "wrist-roller",
};

function migrateLegacyVideos() {
  const videos = storage.read(VIDEOS_KEY, {});
  let changed = false;
  for (const [oldId, videoKey] of Object.entries(LEGACY_VIDEO_IDS)) {
    if (videos[oldId]) {
      if (!videos[videoKey]) videos[videoKey] = videos[oldId];
      delete videos[oldId];
      changed = true;
    }
  }
  if (changed) storage.write(VIDEOS_KEY, videos);
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

// Done state resets automatically every day
function readDoneState() {
  const saved = storage.read(DONE_KEY, null);
  if (!saved || saved.date !== todayKey()) {
    return { date: todayKey(), items: {} };
  }
  return saved;
}

// ===== Video helpers =====
function parseYouTubeId(url) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/
  );
  return match ? match[1] : null;
}

function isValidUrl(url) {
  return /^https?:\/\//i.test(url);
}

// ===== Rendering =====
const app = document.getElementById("app");
const tabsNav = document.getElementById("day-tabs");

function renderTabs(activeId) {
  tabsNav.innerHTML = "";
  const tabs = [...WORKOUT_DAYS, { id: "rules", short: "Regras" }];

  for (const tab of tabs) {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (tab.id === activeId ? " active" : "");
    btn.textContent = tab.short;
    btn.addEventListener("click", () => selectTab(tab.id));
    tabsNav.appendChild(btn);
  }
}

function selectTab(id) {
  renderTabs(id);
  if (id === "rules") {
    renderRules();
  } else {
    renderDay(WORKOUT_DAYS.find((d) => d.id === id));
  }
}

function renderRules() {
  app.innerHTML = "";
  const title = document.createElement("h2");
  title.className = "day-title";
  title.textContent = "📋 Regras do treino";
  app.appendChild(title);

  for (const section of RULES) {
    const box = document.createElement("section");
    box.className = "rules-section";
    box.innerHTML = `<h3>${section.title}</h3><ul>${section.items
      .map((item) => `<li>${item}</li>`)
      .join("")}</ul>`;
    app.appendChild(box);
  }
}

function renderDay(day) {
  app.innerHTML = "";

  const title = document.createElement("h2");
  title.className = "day-title";
  title.textContent = day.name;
  app.appendChild(title);

  const focus = document.createElement("p");
  focus.className = "day-focus";
  focus.textContent = day.focus;
  app.appendChild(focus);

  const progress = document.createElement("div");
  progress.className = "progress-wrap";
  progress.innerHTML = `
    <div class="progress-label"></div>
    <div class="progress-bar"><div class="progress-fill"></div></div>
  `;
  app.appendChild(progress);

  for (const exercise of day.exercises) {
    app.appendChild(buildExerciseCard(exercise, day));
  }

  updateProgress(day);
}

function updateProgress(day) {
  const done = readDoneState();
  const total = day.exercises.length;
  const completed = day.exercises.filter((e) => done.items[e.id]).length;

  const label = app.querySelector(".progress-label");
  const fill = app.querySelector(".progress-fill");
  if (!label || !fill) return;

  label.textContent = `${completed} de ${total} exercícios concluídos hoje`;
  fill.style.width = `${(completed / total) * 100}%`;
}

function buildExerciseCard(exercise, day) {
  const card = document.createElement("article");
  card.className = "exercise-card";

  const doneState = readDoneState();
  if (doneState.items[exercise.id]) card.classList.add("done");

  // --- Header: checkbox + name + load input ---
  const header = document.createElement("div");
  header.className = "exercise-header";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "exercise-check";
  checkbox.checked = Boolean(doneState.items[exercise.id]);
  checkbox.setAttribute("aria-label", `Concluir ${exercise.name}`);
  checkbox.addEventListener("change", () => {
    const state = readDoneState();
    state.items[exercise.id] = checkbox.checked;
    storage.write(DONE_KEY, state);
    card.classList.toggle("done", checkbox.checked);
    updateProgress(day);
  });

  const info = document.createElement("div");
  info.className = "exercise-info";

  const name = document.createElement("div");
  name.className = "exercise-name";
  name.textContent = exercise.name;
  info.appendChild(name);

  if (exercise.note) {
    const note = document.createElement("div");
    note.className = "exercise-note";
    note.textContent = exercise.note;
    info.appendChild(note);
  }

  const badges = document.createElement("div");
  badges.className = "badges";
  badges.appendChild(buildBadge(exercise.scheme, "badge-scheme"));
  if (exercise.grip) badges.appendChild(buildBadge("✊ Pegada", "badge-grip"));
  if (exercise.core) badges.appendChild(buildBadge("Core", "badge-core"));
  info.appendChild(badges);

  const loadWrap = document.createElement("div");
  loadWrap.className = "load-wrap";
  const loadInput = document.createElement("input");
  loadInput.type = "number";
  loadInput.inputMode = "decimal";
  loadInput.className = "load-input";
  loadInput.placeholder = "—";
  loadInput.setAttribute("aria-label", `Carga de ${exercise.name} em kg`);
  const loads = storage.read(LOADS_KEY, {});
  if (loads[exercise.id] != null) loadInput.value = loads[exercise.id];
  loadInput.addEventListener("change", () => {
    const current = storage.read(LOADS_KEY, {});
    current[exercise.id] = loadInput.value;
    storage.write(LOADS_KEY, current);
  });
  const unit = document.createElement("span");
  unit.className = "load-unit";
  unit.textContent = "kg";
  loadWrap.append(loadInput, unit);

  header.append(checkbox, info, loadWrap);
  card.appendChild(header);

  // --- Video section ---
  const videoSection = document.createElement("div");
  videoSection.className = "video-section";
  card.appendChild(videoSection);
  renderVideoSection(videoSection, exercise);

  return card;
}

function buildBadge(text, className) {
  const badge = document.createElement("span");
  badge.className = `badge ${className}`;
  badge.textContent = text;
  return badge;
}

function renderVideoSection(container, exercise) {
  container.innerHTML = "";
  const videos = storage.read(VIDEOS_KEY, {});
  const url = videos[exercise.videoKey];

  if (url) {
    const videoId = parseYouTubeId(url);

    if (videoId) {
      const frame = document.createElement("div");
      frame.className = "video-frame";
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
      iframe.title = `Vídeo: ${exercise.name}`;
      iframe.allow = "accelerometer; encrypted-media; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      frame.appendChild(iframe);
      container.appendChild(frame);
    } else {
      // Non-YouTube link: show it as a clickable link
      const link = document.createElement("a");
      link.className = "video-link";
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "🔗 Abrir vídeo do exercício";
      container.appendChild(link);
    }

    const actions = document.createElement("div");
    actions.className = "video-actions";

    const changeBtn = document.createElement("button");
    changeBtn.className = "btn";
    changeBtn.textContent = "Trocar vídeo";
    changeBtn.addEventListener("click", () => showVideoForm(container, exercise));

    const removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-danger";
    removeBtn.textContent = "Remover";
    removeBtn.addEventListener("click", () => {
      const current = storage.read(VIDEOS_KEY, {});
      delete current[exercise.videoKey];
      storage.write(VIDEOS_KEY, current);
      renderVideoSection(container, exercise);
    });

    actions.append(changeBtn, removeBtn);
    container.appendChild(actions);
  } else {
    const addBtn = document.createElement("button");
    addBtn.className = "btn";
    addBtn.textContent = "🎥 Adicionar vídeo";
    addBtn.addEventListener("click", () => showVideoForm(container, exercise));
    container.appendChild(addBtn);
  }
}

function showVideoForm(container, exercise) {
  container.innerHTML = "";

  const form = document.createElement("form");
  form.className = "video-form";

  const input = document.createElement("input");
  input.type = "url";
  input.className = "video-input";
  input.placeholder = "Cole o link do YouTube aqui";
  input.required = true;

  const saveBtn = document.createElement("button");
  saveBtn.type = "submit";
  saveBtn.className = "btn btn-primary";
  saveBtn.textContent = "Salvar";

  form.append(input, saveBtn);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = input.value.trim();
    if (!isValidUrl(url)) {
      input.setCustomValidity("Cole um link válido começando com http:// ou https://");
      input.reportValidity();
      return;
    }
    const videos = storage.read(VIDEOS_KEY, {});
    videos[exercise.videoKey] = url;
    storage.write(VIDEOS_KEY, videos);
    renderVideoSection(container, exercise);
  });

  input.addEventListener("input", () => input.setCustomValidity(""));

  const hint = document.createElement("p");
  hint.className = "video-hint";
  hint.textContent = "O vídeo vale para este exercício em todos os dias da semana.";

  container.append(form, hint);
  input.focus();
}

// ===== Init =====
function init() {
  migrateLegacyVideos();

  const now = new Date();

  const todayLabel = document.getElementById("today-label");
  todayLabel.textContent = now.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const weekday = now.getDay(); // 0 = domingo, 6 = sábado
  const todayWorkout = WORKOUT_DAYS.find((d) => d.weekday === weekday);

  if (todayWorkout) {
    selectTab(todayWorkout.id);
  } else {
    // Weekend: show Monday with a rest banner on top
    selectTab("monday");
    const banner = document.createElement("div");
    banner.className = "rest-banner";
    banner.textContent = "🧘 Fim de semana — descanso ou treino livre. Segunda o plano recomeça!";
    app.prepend(banner);
  }
}

init();