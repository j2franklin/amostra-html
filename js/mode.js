const modeToggle = document.getElementById('mode-toggle');
const themeLink = document.getElementById('theme');
const button = document.getElementById('toggle-mode-button');

function setTheme(theme) {
    const isNight = theme === 'night';

    themeLink.setAttribute(
        'href',
        isNight ? 'style/var-night.css' : 'style/var-day.css'
    );

    button.textContent = isNight ? '☀️' : '🌙';

    localStorage.setItem('theme', theme);
}

modeToggle.addEventListener('click', () => {
    const isDay = themeLink
        .getAttribute('href')
        .includes('var-day.css');

    setTheme(isDay ? 'night' : 'day');
});

// Aplica o tema salvo ao carregar
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'day';
    setTheme(savedTheme);
});
