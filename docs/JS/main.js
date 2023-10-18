// Función para cambiar el tema en index.html
function toggleTheme() {
    const themeLink = document.getElementById('theme-stylesheet');
    if (themeLink.getAttribute('href') === './CSS/light.css') {
        themeLink.setAttribute('href', './CSS/dark.css');
        localStorage.setItem('theme', 'dark');
    } else {
        themeLink.setAttribute('href', './CSS/light.css');
        localStorage.setItem('theme', 'light');
    }
}
// Agregar un evento al botón
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', toggleTheme);
// Comprobar si se ha seleccionado un tema previamente
const selectedTheme = localStorage.getItem('theme');
if (selectedTheme === 'dark') {
    toggleTheme(); // Cambiar al tema oscuro si estaba seleccionado
}
//OTRO
// Función para cambiar el tema en index.html
function toggleTheme2() {
    const themeLink = document.getElementById('theme-stylesheet');
    if (themeLink.getAttribute('href') === '../CSS/light.css') {
        themeLink.setAttribute('href', '../CSS/dark.css');
        localStorage.setItem('theme', 'dark');
    } else {
        themeLink.setAttribute('href', '../CSS/light.css');
        localStorage.setItem('theme', 'light');
    }
}
// Agregar un evento al botón
const themeToggleBtn2 = document.getElementById('theme-toggle2');
themeToggleBtn.addEventListener('click', toggleTheme2);
// Comprobar si se ha seleccionado un tema previamente
const selectedTheme2 = localStorage.getItem('theme');
if (selectedTheme === 'dark') {
    toggleTheme(); // Cambiar al tema oscuro si estaba seleccionado
}