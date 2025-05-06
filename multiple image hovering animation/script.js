// Optional: You can hook events here
const imageCards = document.querySelectorAll('.image-card');

imageCards.forEach(card => {
  card.addEventListener('click', () => {
    alert(`You clicked on ${card.querySelector('.overlay').textContent}`);
  });
});
