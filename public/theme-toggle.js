// ===================================
// 1. MOBILE MENU TOGGLE LOGIC
// ===================================

const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});


// ===================================
// 2. DARK/LIGHT THEME TOGGLE LOGIC
// ===================================

const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const htmlElement = document.documentElement;

// Function to set the theme, save preference, and update the icon
function applyTheme(theme) {
    const isDark = theme === 'dark';
    
    if (isDark) {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
    
    // Update icons for both desktop and mobile buttons
    const icon = isDark ? '☀️' : '🌙';
    themeToggle.innerHTML = icon; 
    mobileThemeToggle.innerHTML = icon;
}

// Load initial theme on page load
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    applyTheme(savedTheme);
} else if (prefersDark) {
    applyTheme('dark');
} else {
    applyTheme('light');
}

// Event listeners for the theme buttons
const toggleTheme = () => {
    const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
};

themeToggle.addEventListener('click', toggleTheme);
mobileThemeToggle.addEventListener('click', toggleTheme);