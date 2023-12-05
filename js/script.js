// Mobile Menu Script
const mobile_bar = document.querySelector('.mobile_bar');

console.log(mobile_bar);

mobile_bar.addEventListener('click', () => {
  document.querySelector('.main_menu').classList.toggle('open');
});

// Light and Dark Mode
const darkTheme = document.querySelector('.dark_theme');

console.log(darkTheme);

darkTheme.addEventListener('click', () => {
  darkTheme.querySelector('i').classList.toggle('fa-sun');
  darkTheme.querySelector('i').classList.toggle('fa-moon');
  document.body.classList.toggle('dark');
});

window.addEventListener('load', () => {
  if (document.body.classList.contains('dark')) {
    darkTheme.querySelector('i').classList.add('fa-sun');
  } else {
    darkTheme.querySelector('i').classList.add('fa-moon');
  }
});
