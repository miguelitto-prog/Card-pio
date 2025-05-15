
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    const details = item.querySelector('.dish-details');
    const isVisible = !details.classList.contains('hidden');

    // Fecha todos
    document.querySelectorAll('.dish-details').forEach(d => {
      d.classList.add('hidden');
    });

    // Mostra atual se não estava visível
    if (!isVisible) {
      details.classList.remove('hidden');
    }
  });
});
