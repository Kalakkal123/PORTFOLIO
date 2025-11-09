// ================================
// THEME.JS — Dark/Light Mode Toggle
// ================================

const themeBtn = document.getElementById("themeToggle");

themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeBtn.textContent = isLight ? "🌞" : "🌓";
});

// --- Remember Theme Preference ---
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.add("light-mode");
    themeBtn.textContent = "🌞";
  }
});

// --- Light Mode Styles Override ---
const style = document.createElement("style");
style.textContent = `
body.light-mode {
  background: #f8f9fb;
  color: #0b0b0c;
}
body.light-mode .navbar {
  background: #fff;
  border-bottom: 1px solid #ddd;
}
body.light-mode .nav-links a { color: #333; }
body.light-mode .nav-links a:hover, body.light-mode .nav-links a.active { color: #9b59ff; }
body.light-mode .btn {
  border-color: #9b59ff;
  color: #9b59ff;
}
body.light-mode .btn:hover {
  background: #9b59ff;
  color: #fff;
}
`;
document.head.appendChild(style);
