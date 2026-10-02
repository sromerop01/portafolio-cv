# Portafolio CV — Santiago Romero Porras

Portafolio y hoja de vida web de Santiago Romero Porras (Ingeniero Mecánico formándose como Ingeniero de Sistemas). Lo revisan reclutadores y empresas que evalúan su perfil para prácticas: todo cambio debe verse profesional y funcionar bien en escritorio y en celular. Estética de plano técnico oscuro, acento ámbar y detalles tipo terminal (`$ whoami`, `// comentario`, `›`).

Producción: https://sromerop.sales-control.com/

## Stack y archivos

- HTML, CSS y JavaScript sin frameworks, librerías, npm ni proceso de compilación. No agregues dependencias.
- `index.html`: todo el contenido. Al inicio del `<body>` está el sprite de íconos en línea (`svg.icon-sprite`).
- `styles.css`: organizado por sección con comentarios de encabezado. Paleta y fuentes en `:root`.
- `script.js`: una función `init*` por comportamiento, llamada justo después de definirla. Si agregas un comportamiento, sigue ese patrón.
- `assets/img/`: foto de perfil e imagen para compartir. `assets/sromerop-icons/favicon/`: favicons y manifest.
- `assets/sromerop-icons/skills/` es el paquete de íconos de origen. El sitio no carga `skills-sprite.svg`, `skills.css` ni `contact.css`: para usar un ícono, copia su `<symbol>` al sprite en línea de `index.html` y úsalo con `<svg aria-hidden="true" focusable="false"><use href="#i-nombre"></use></svg>`.

## Probar en local

- Sirve la carpeta con `python3 -m http.server 8000` (o Live Server) y abre `http://localhost:8000`.
- No abras `index.html` como archivo (`file://`): el navegador bloquea el manifest con un error de CORS que no es un problema del código.
- `.htaccess` (por ejemplo, la página 404) solo funciona en producción; los servidores locales no lo leen.

## Publicación

- Se publica por SSH: el repo está clonado en la carpeta pública del servidor y se actualiza con `git pull` de `main`. Un push no publica nada por sí solo.
- Todo lo que está en el repo queda accesible en el sitio, incluidos este archivo y `README.md`. No guardes notas privadas, borradores ni credenciales en el repo.

## Caché del CDN: regla obligatoria

- IMPORTANTE: el CDN guarda en caché `styles.css` y `script.js` (no `index.html`). Cada vez que cambies alguno de los dos, sube el parámetro `?v=` en sus dos rutas de `index.html` (y en `404.html` si existe).
- Formato: fecha del cambio `AAAAMMDD`; si ya tiene la fecha de hoy, agrega una letra (`20260929b` → `20260929c`).
- Google Fonts carga aparte las flechas (`↗`, `↑`) con el parámetro `text=` de un segundo enlace. Toda flecha nueva se suma a ese parámetro, o se verá en otra fuente.

## Diseño

- Usa siempre las variables de `:root`, nunca colores sueltos: `--bg` #0A1120, `--surface` #111A2C, `--text` #E9ECF4, `--text-muted` #8C97AC, `--accent` #E8A33D, `--border` #24304A, `--grid-line`.
- Fuentes: `--font-mono` (IBM Plex Mono) para títulos, etiquetas, botones y detalles de terminal; `--font-sans` (IBM Plex Sans) para el texto corrido.
- Solo tema oscuro (`color-scheme: dark`). No agregues tema claro ni media queries de `prefers-color-scheme`.
- Móvil primero, con un solo punto de quiebre: `@media (width < 960px)` / `@media (width >= 960px)`.
- `--header-h` es el alto del header fijo; úsalo para el alto del Inicio y los `scroll-margin-top`.
- Estructura de sección: `<section id="…" class="section" aria-labelledby="…-title">` → `.container` → `.sheet-header` (número `aria-hidden` + `h2`). Las tarjetas parten de la clase base `.card`.
- Nombres de clase en BEM (`bloque__elemento--modificador`). Estados con `is-*` (`.is-open`, `.is-hovered`). El `<html>` recibe `.js` cuando hay JavaScript.
- Clases y funciones en inglés; textos visibles y comentarios en español. Los comentarios explican el porqué, como los de `?v=` y del sprite.

## Accesibilidad (se revisa en cada tarjeta)

- Lo decorativo lleva `aria-hidden="true"`; los íconos, además, `focusable="false"`.
- Foco con teclado visible: `:focus-visible` con `outline: 2px solid var(--accent); outline-offset: 3px`.
- Área táctil de al menos 44px de alto en elementos interactivos.
- Todo movimiento respeta `prefers-reduced-motion`; los efectos de mouse solo con `(hover: hover)` o `pointer: fine`.
- Sin JavaScript todo el contenido sigue visible y usable; el JS solo mejora.
- Enlaces externos: `target="_blank"`, `rel="noopener noreferrer"` y `aria-label` que termina en "(abre en una pestaña nueva)".
- No agregues textos visibles de menos de 12px.
- Sin scroll horizontal entre 320px y 1440px.
- Para insertar texto desde JS usa `textContent`, nunca `innerHTML` con datos.

## Patrones ya resueltos

- Tarjeta clicable completa: enlace extendido con `::after` (ver `.project__link`). No envuelvas la tarjeta en un `<a>`.
- Botón con dos estados: clase `is-*` y texto o `aria-label` actualizados desde JS (ver `.marquee-toggle`).
- Íconos: `<symbol>` en el sprite en línea + `<use href="#i-…">`.

## Flujo de trabajo

- Las tareas vienen del tablero de Trello "Portafolio CV" (Backlog → To Do → Doing → En revisión → Done). Cada tarjeta está numerada (`NN · título`), tiene criterios de aceptación y un prompt con este formato: contexto, tarea, datos exactos, restricciones, proceso y criterios de cumplido.
- Antes de editar, lee los archivos que vas a tocar y explica tu plan en 3 a 5 líneas.
- Cambia solo lo que pide la tarea. No toques textos, colores ni diseño de otras secciones.
- No inventes contenido (proyectos, cifras, fechas, URLs, textos). Si falta un dato, pregunta.
- Al terminar, repasa los criterios de aceptación uno por uno. Si no puedes abrir el sitio en un navegador, no des nada por revisado: entrega la lista de pruebas para que Santiago las haga.
- Commits con Conventional Commits: `tipo(ámbito): descripción` (`feat`, `fix`, `docs`, `style`, `refactor`, `chore`); el ámbito es la sección o parte (`hero`, `nav`, `projects`, `skills`, `contact`, `icons`…). No hagas commit ni push salvo que Santiago lo pida.
- Si cambian las secciones o la estructura de archivos, actualiza `README.md`.
