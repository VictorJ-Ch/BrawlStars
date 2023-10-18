//Cambio de tema, NOTA: por alguna razón este code no me deja trabajar por carpetas
function toggleTheme() {
    const themeLink = document.getElementById('theme-stylesheet');
    if (themeLink.getAttribute('href') === 'CSS/light.css') {
        themeLink.setAttribute('href', 'CSS/dark.css');
        localStorage.setItem('theme', 'dark');
    } else {
        themeLink.setAttribute('href', 'CSS/light.css');
        localStorage.setItem('theme', 'light');
    }
}
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', toggleTheme);
const selectedTheme = localStorage.getItem('theme');
if (selectedTheme === 'dark') {
    toggleTheme();
}