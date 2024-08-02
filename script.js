
const modeToggle = document.getElementById('theme-checkbox');
const body = document.body;

let isDarkMode = false;

modeToggle.addEventListener('click', () => {
    // Toggle dark mode
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-mode', isDarkMode);

    // Move the icon to the right
    modeToggle.classList.toggle('moved');
});