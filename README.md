# Portafolio CV — Santiago Romero Porras

Portafolio y hoja de vida web de Santiago Romero Porras, Ingeniero Mecánico formándose como Ingeniero de Sistemas. Presenta su perfil, experiencia, proyectos, habilidades, certificaciones, formación y datos de contacto, con una estética oscura de plano técnico ("blueprint") y detalles tipo terminal.

## Secciones

| # | Sección | Contenido |
| --- | --- | --- |
| — | Inicio | Presentación, credencial con foto y botones de contacto, proyectos y descarga del CV |
| 01 | Perfil | Resumen profesional y línea de tiempo de formación |
| 02 | Experiencia | Cargo actual y responsabilidades |
| 03 | Proyectos | 5 proyectos con tecnologías y enlaces a demo o repositorio |
| 04 | Habilidades | Marquee con los íconos del stack y tabla por área |
| 05 | Certificaciones | Certificaciones cloud, cada una con enlace a su credencial pública |
| 06 | Educación e idiomas | Carreras e idiomas |
| 07 | Contacto | Correo, WhatsApp, LinkedIn, GitHub y descarga de la hoja de vida en PDF |

Un header fijo enlaza las 7 secciones y resalta la que está a la vista. El pie de página incluye "Volver arriba ↑".

## Tecnologías

HTML, CSS y JavaScript, sin frameworks, librerías ni proceso de compilación. El único recurso externo son las fuentes IBM Plex Mono e IBM Plex Sans de Google Fonts.

## Estructura

```text
index.html                Contenido de todas las secciones, header de navegación y sprite de íconos en línea
styles.css                Estilos por sección (paleta, fuentes y alto del header como variables en :root)
script.js                 Scramble del Inicio, respaldo de la foto, brillo/inclinación de Proyectos
                          y navegación (menú móvil y sección activa)
assets/docs/              Hoja de vida en PDF (la descargan el botón del Inicio y el enlace de Contacto)
assets/img/               Foto de perfil e imagen para compartir en redes (og-image.png)
assets/sromerop-icons/
  favicon/                Favicons, íconos de la app y site.webmanifest
  skills/                 Paquete de íconos de origen (el sitio no lo carga: los símbolos se copian a index.html)
CLAUDE.md                 Convenciones del proyecto para asistentes de IA
```

## Ejecutar en local

Sirve la carpeta con un servidor local y abre `http://localhost:8000`:

```bash
python3 -m http.server 8000
```

También sirve Live Server. Abierto como archivo (`file://`), el navegador bloquea el manifest; el resto de la página funciona igual.

## Live demo

Puedes verlo aquí: <https://sromerop.sales-control.com/>

## Despliegue

El CDN del hosting guarda en caché `styles.css` y `script.js`, pero no `index.html`. Cada vez que cambies alguno de los dos, sube el parámetro `?v=` de sus rutas en `index.html` (formato `AAAAMMDD`; si ya tiene la fecha de hoy, agrega una letra: `20260929b`). Si no, el navegador recibe el HTML nuevo con el CSS o el JS viejos.

## Detalles

- **Responsive:** diseño para móvil primero, con un solo punto de quiebre en 960 px.
- **Navegación:** header fijo con la marca y enlaces a las 7 secciones. Por debajo de 960 px, los enlaces se abren con el botón de menú (tres líneas, que pasan a una X), y el menú se cierra al elegir un enlace o con Esc.
- **Íconos:** los de Habilidades y Contacto van en un sprite SVG dentro de `index.html`, así se ven sin pedir archivos aparte.
- **Accesibilidad:**
  - HTML semántico y elementos decorativos con `aria-hidden`;
  - enlace "Saltar al contenido" al primer Tab;
  - la sección visible se marca con `aria-current` en la navegación;
  - contorno visible al navegar con teclado y áreas táctiles de al menos 44 px;
  - con `prefers-reduced-motion` se desactivan las animaciones y el desplazamiento suave.
- **Sin JavaScript:** todo el contenido y los enlaces siguen funcionando; en móvil, la navegación se muestra como una fila con scroll horizontal. Solo se pierden el efecto scramble, la inclinación de las tarjetas, el menú desplegable y el resaltado de la sección visible.
