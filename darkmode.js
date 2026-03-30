// Apply saved theme immediately — runs before page renders to prevent flash
(function () {
  if (localStorage.getItem('ieltshub_theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
})();

function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('ieltshub_theme', isDark ? 'dark' : 'light');
  updateIcon(isDark);
}

function updateIcon(isDark) {
  const btn = document.getElementById('dark-toggle');
  if (!btn) return;
  btn.textContent = isDark ? '☀️' : '🌙';
  btn.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
}

// Set correct icon once DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  updateIcon(document.documentElement.classList.contains('dark'));
});
