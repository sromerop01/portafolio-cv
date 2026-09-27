/* ==========================================================================
   Sección Inicio (#hero)
   ========================================================================== */

// --- Efecto scramble del eyebrow y el rol ---

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>-_/\\[]{}#*+=';
const SCRAMBLE_STEP_MS = 22;       // cada paso dura 22 ms...
const SCRAMBLE_CHARS_PER_STEP = 2; // ...y revela 2 caracteres más
const SCRAMBLE_STAGGER_MS = 120;   // cada texto arranca 120 ms después del anterior

function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

// Los primeros `revealed` caracteres son los reales; el resto, aleatorios (los espacios se conservan).
function scrambleText(text, revealed) {
  return Array.from(text, (char, i) =>
    i < revealed || char === ' ' ? char : randomChar()
  ).join('');
}

function scramble(element, delay) {
  const text = element.textContent;

  // El texto real sigue en su sitio pero invisible: reserva el espacio exacto
  // (nada se desplaza) y los lectores de pantalla lo siguen leyendo.
  const ghost = document.createElement('span');
  ghost.className = 'scramble__ghost';
  ghost.textContent = text;

  // Capa superpuesta con los caracteres aleatorios.
  const noise = document.createElement('span');
  noise.className = 'scramble__noise';
  noise.setAttribute('aria-hidden', 'true');
  noise.textContent = scrambleText(text, 0);

  element.replaceChildren(ghost, noise);

  const start = performance.now() + delay;
  const timer = setInterval(() => {
    const steps = Math.floor((performance.now() - start) / SCRAMBLE_STEP_MS);
    const revealed = Math.max(0, steps) * SCRAMBLE_CHARS_PER_STEP;

    if (revealed >= text.length) {
      clearInterval(timer);
      element.textContent = text; // se restaura el texto plano original
      return;
    }

    noise.textContent = scrambleText(text, revealed);
  }, SCRAMBLE_STEP_MS);
}

function initScramble() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // En orden del documento: eyebrow (0 ms) y rol (120 ms)
  document.querySelectorAll('[data-scramble]').forEach((element, index) => {
    scramble(element, index * SCRAMBLE_STAGGER_MS);
  });
}

// --- Fallback de la foto de la credencial: si no carga, se ocultan la imagen y el ícono roto y quedan las iniciales ---

function initPhotoFallback() {
  const photo = document.querySelector('.credential__img');
  if (!photo) return;

  const showInitials = () => photo.classList.add('is-broken');

  // Si la foto falló antes de que corriera este script, el evento 'error' ya pasó.
  if (photo.complete && photo.naturalWidth === 0) {
    showInitials();
  } else {
    photo.addEventListener('error', showInitials, { once: true });
  }
}

initScramble();
initPhotoFallback();
