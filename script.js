const waterLevel = document.getElementById("waterLevel");
const meterFill = document.getElementById("meterFill");
const status = document.getElementById("status");
const alertBox = document.getElementById("alertBox");
const updated = document.getElementById("updated");
const simulateBtn = document.getElementById("simulateBtn");

function updateDashboard(level) {
  waterLevel.textContent = level.toFixed(1) + " m";
  meterFill.style.width = Math.min(level / 10 * 100, 100) + "%";

  status.className = "status";
  alertBox.className = "alert";

  if (level < 5) {
    status.textContent = "SAFE";
    status.classList.add("safe");
    alertBox.textContent = "No immediate flood danger detected.";
    alertBox.classList.add("safe-alert");
  } else if (level < 7) {
    status.textContent = "WARNING";
    status.classList.add("warning");
    alertBox.textContent = "⚠️ Warning: Water level is rising. Monitor the situation and prepare for possible evacuation.";
    alertBox.classList.add("warning-alert");
  } else {
    status.textContent = "DANGER";
    status.classList.add("danger");
    alertBox.textContent = "🚨 DANGER: Critical water level detected. Follow official emergency instructions and move to a safe location.";
    alertBox.classList.add("danger-alert");
  }

  updated.textContent = new Date().toLocaleTimeString();
}

simulateBtn.addEventListener("click", () => {
  const level = Math.random() * 6 + 3; // demo value: 3–9 m
  updateDashboard(level);
});

// Simulated automatic sensor update every 15 seconds.
setInterval(() => {
  const level = Math.random() * 4 + 3;
  updateDashboard(level);
}, 15000);

updateDashboard(3.2);
