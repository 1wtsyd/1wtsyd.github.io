const themeToggleButton = document.getElementById('theme-toggle');
const telegramButton = document.getElementById('telegram')

themeToggleButton.addEventListener('click', () => {
    themeToggleButton.textContent = "Белая тема";
    document.body.classList.toggle('dark-theme');
    if(document.body.classList != 'dark-theme') {
        themeToggleButton.textContent = "Темная тема";
    }
});

telegramButton.addEventListener('click', () => {
    window.open('https://t.me/iwtsyd', '_blank');
});