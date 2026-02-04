const themeLink = document.querySelector("#theme-variables");
const toggleBtn = document.querySelector("#theme-toggle");

function setTheme(theme) {
  themeLink.href =
    theme === "night"
      ? "styles/variables-night.css"
      : "styles/variables-day.css";

  toggleBtn.textContent = theme === "night" ? "☀️" : "🌙";

  localStorage.setItem("theme", theme);
}

toggleBtn.addEventListener("click", () => {
  const currentTheme =
    themeLink.href.includes("night") ? "night" : "day";

  setTheme(currentTheme === "day" ? "night" : "day");

});

const savedTheme = localStorage.getItem("theme") || "day";
setTheme(savedTheme);


