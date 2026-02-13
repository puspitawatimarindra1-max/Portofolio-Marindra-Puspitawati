 function setTheme(theme) {
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    var switchThemeBtn = document.getElementById('switchTheme');
    if (switchThemeBtn) {
        switchThemeBtn.innerHTML = theme === 'dark' ?  '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
    }
}

var currentTheme = localStorage.getItem('theme') || 'dark';
setTheme(currentTheme);

var switchThemeBtn = document.getElementById('switchTheme');
if (switchThemeBtn) {
    switchThemeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(currentTheme);
    });
}

window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById("backToTopButton");
    if (backToTopButton) {
        const shouldShow = window.scrollY > 400;
        backToTopButton.style.display = shouldShow ? 'block' : 'none';
    }
}, { passive: true });

function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
