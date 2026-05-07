const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0,229,255,0.12), #0c0c0c 60%)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.background = '#0c0c0c';
  });
});

console.log('TechZone loaded');
