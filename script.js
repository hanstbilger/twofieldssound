const pressTiles = document.querySelectorAll('.press-tile');

window.addEventListener('scroll', fadeInTiles);

function fadeInTiles() {
  pressTiles.forEach((tile) => {
    const tileTop = tile.getBoundingClientRect().top;
    if (tileTop < window.innerHeight - 50) {
      tile.style.opacity = 1;
      tile.style.transform = 'translateY(0)';
    }
  });
}

// Initial check in case tiles are visible when the page loads
fadeInTiles();
