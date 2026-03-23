// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme on page load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeButton();
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Save preference
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        
        updateThemeButton();
    });
});

function updateThemeButton() {
    const themeToggle = document.getElementById('theme-toggle');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
}
