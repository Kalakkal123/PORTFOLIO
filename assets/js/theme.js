// =====================================================
// THEME.JS — Advanced Theme Controller
// Author: T Karthikeyan
// =====================================================

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

// -----------------------------------
// INITIAL THEME LOAD
// -----------------------------------
(function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const theme = savedTheme || (systemPrefersDark ? "dark" : "light");
  applyTheme(theme);
})();

// -----------------------------------
// TOGGLE CLICK
// -----------------------------------
themeToggle?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
});

// -----------------------------------
// APPLY THEME
// -----------------------------------
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // Icon swap
  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "🌙" : "☀️";
    themeToggle.classList.add("spin");
    setTimeout(() => themeToggle.classList.remove("spin"), 300);
  }
}
