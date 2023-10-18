    //Bttn
    document.addEventListener('DOMContentLoaded', function() {
        const returnBttn = document.getElementById('returnBttn');
        if (returnBttn) {
            returnBttn.addEventListener('click', function() {
                window.location.href = '/docs/Index.html';
            });
        }
    });

    // Función para cambiar el tema
    function toggleTheme() {
        const themeLink = document.getElementById('theme-stylesheet');
        if (themeLink.getAttribute('href') === '/docs/CSS/light.css') {
            themeLink.setAttribute('href', '/docs/CSS/dark.css');
            localStorage.setItem('theme', 'dark');
        } else {
            themeLink.setAttribute('href', '/docs/CSS/light.css');
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