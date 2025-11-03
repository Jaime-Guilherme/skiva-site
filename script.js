document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.querySelector('header nav');

  if (!toggle || !nav) return;

  function closeMenu() {
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    nav.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function (e) {
    if (nav.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // fechar menu ao clicar em um link
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  // fechar com ESC
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
    }
  });

  // fechar ao clicar fora (no header só)
  document.addEventListener('click', function (ev) {
    const isClickInsideHeader = ev.target.closest('header');
    if (!isClickInsideHeader && nav.classList.contains('open')) {
      closeMenu();
    }
  });
});
