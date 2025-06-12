// Cronômetro
function atualizarTempo() {
  const inicio = new Date("2024-05-31T00:00:00");
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").textContent =
    `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
}
setInterval(atualizarTempo, 1000);

// Carrossel automático aleatório
window.addEventListener('load', () => {
  const track = document.querySelector('.carousel-track');
  const images = Array.from(track.children);

  // Embaralhar as imagens
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    track.insertBefore(images[j], images[i]);
  }

  let index = 0;

  function updateCarousel() {
    const width = track.clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;
    index = (index + 1) % images.length;
  }

  setInterval(updateCarousel, 3000); // troca a cada 3 segundos
  updateCarousel();
});
