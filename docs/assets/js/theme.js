// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.setAttribute('aria-label', 'Toggle dark mode');
  themeToggle.innerHTML = `
    <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM12 21.75a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V21a.75.75 0 01-.75.75zM3 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3.75A.75.75 0 013 12zM21 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h2.25A.75.75 0 0121 12zM5.47 5.47a.75.75 0 011.06 0l1.59 1.59a.75.75 0 11-1.06 1.06L5.47 6.53a.75.75 0 010-1.06zM18.53 5.47a.75.75 0 010 1.06l-1.59 1.59a.75.75 0 01-1.06-1.06l1.59-1.59a.75.75 0 011.06 0zM5.47 18.53a.75.75 0 010-1.06l1.59-1.59a.75.75 0 111.06 1.06l-1.59 1.59a.75.75 0 01-1.06 0zM18.53 18.53a.75.75 0 01-1.06 0l-1.59-1.59a.75.75 0 111.06-1.06l1.59 1.59a.75.75 0 010 1.06z"/>
    </svg>
    <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>
    </svg>
  `;
  document.body.appendChild(themeToggle);

  // Check for saved theme preference or system preference
  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Apply theme
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update button icon visibility
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    if (theme === 'dark') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  };

  // Initialize theme
  setTheme(getPreferredTheme());

  // Toggle theme
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}); 