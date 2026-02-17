
(function(){
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
  const btn = document.getElementById('themeToggle');
  const pref = localStorage.getItem('theme');
  if(pref === 'light'){document.documentElement.classList.add('light');}
  btn && btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
  });
})();
