let stability = 100;
let log = [];

const messages = [
  "Shadow detected behind user.",
  "Audio anomaly: whispering.",
  "Time desync: 0.4 seconds.",
  "Unregistered entity detected.",
  "Memory leak in reality.",
  "Door appeared where none existed.",
  "Unknown signal received.",
  "Observer effect triggered.",
  "Object duplication event.",
  "Reality tearing..."
];

function triggerGlitch() {
  const msg = random(messages);

  stability -= randomNumber(5, 20);
  if (stability < 0) stability = 0;

  updateMeter();

  document.getElementById("status").textContent = msg;
  document.body.classList.add("glitch");

  setTimeout(() => {
    document.body.classList.remove("glitch");
  }, 300);

  addLog(msg);

  if (stability === 0) collapseReality();
}

function collapseReality() {
  document.getElementById("status").textContent =
    "REALITY COLLAPSE IMMINENT";
}

function updateMeter() {
  document.getElementById("meter").style.width = stability + "%";
}

function addLog(message) {
  const entry =
    new Date().toLocaleTimeString() + " — " + message;

  log.push(entry);

  const div = document.createElement("div");
  div.textContent = entry;
  document.getElementById("log").prepend(div);
}

function downloadLog() {
  const blob = new Blob([log.join("\n")], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "reality_incident_log.txt";
  a.click();
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
