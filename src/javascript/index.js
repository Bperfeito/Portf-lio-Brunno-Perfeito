document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });