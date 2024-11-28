const cards = document.querySelectorAll('.card');
const container = document.querySelector('.container');

container.addEventListener('scroll', () => {
  const containerRect = container.getBoundingClientRect();
  const containerCenter = containerRect.top + containerRect.height / 2;

  let closestCard = null;
  let closestDistance = Infinity;

  cards.forEach(card => {
    const cardRect = card.getBoundingClientRect();
    const cardCenter = cardRect.top + cardRect.height / 2;

    const distance = Math.abs(containerCenter - cardCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }
  });

  cards.forEach(card => card.classList.remove('active'));
  if (closestCard) {
    closestCard.classList.add('active');
  }
});
