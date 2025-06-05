window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;

  setTimeout(() => {
    // Aplicar la transición de opacidad primero
    loader.style.transition = "opacity 0.5s ease";
    // Luego bajar opacidad a 0 para iniciar la transición
    loader.style.opacity = "0";

    // Esperar 500 ms para ocultarlo completamente del DOM y flujo
    setTimeout(() => {
      loader.style.display = "none";
      // Opcional: quitar el z-index para que no interfiera si alguna vez vuelve a mostrarse
      loader.style.zIndex = "-1";
    }, 500);
  }, 500);

  // Fallback en caso de que algo falle, aseguramos que desaparezca
  setTimeout(() => {
    if (loader.style.display !== "none") {
      loader.style.display = "none";
      loader.style.zIndex = "-1";
    }
  }, 5000);
});

document.addEventListener('DOMContentLoaded', () => {
  const ids = ['personaRen', 'personaIan'];

  // Detectar dispositivo táctil
  const isTouchDevice = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;

  if (!isTouchDevice) return; // Si no es táctil, no agregamos toggle por click

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', () => {
        el.classList.toggle('active');
      });
    }
  });
});
