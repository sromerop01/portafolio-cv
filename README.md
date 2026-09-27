# Portafolio CV — Santiago Romero Porras

Portafolio y hoja de vida web de Santiago Romero Porras, Ingeniero Mecánico formándose como Ingeniero de Sistemas. Presenta su perfil, experiencia, proyectos, habilidades, certificaciones, formación y datos de contacto, con una estética oscura de plano técnico ("blueprint") y detalles tipo terminal.

## Secciones

| # | Sección | Contenido |
|---|---------|-----------|
| — | Inicio | Presentación, credencial con foto y botones de contacto y proyectos |
| 01 | Perfil | Resumen profesional y línea de tiempo de formación |
| 02 | Experiencia | Cargo actual y responsabilidades |
| 03 | Proyectos | 5 proyectos con tecnologías y enlaces a demo o repositorio |
| 04 | Habilidades | Marquee con el stack y tabla por área |
| 05 | Certificaciones | Certificaciones cloud |
| 06 | Educación e idiomas | Carreras e idiomas |
| 07 | Contacto | Correo, LinkedIn y GitHub |

## Tecnologías

HTML, CSS y JavaScript, sin frameworks, librerías ni proceso de compilación. El único recurso externo son las fuentes IBM Plex Mono e IBM Plex Sans de Google Fonts.

## Estructura

```
index.html            Contenido de todas las secciones
styles.css            Estilos (paleta y fuentes como variables en :root)
script.js             Efecto scramble del Inicio y brillo/inclinación de las tarjetas de Proyectos
assets/img/perfil.jpeg
```

## Cómo verlo

Abre `index.html` en el navegador, o sírvelo localmente:

```bash
python3 -m http.server 8000
```

y entra a <http://localhost:8000>.

## Detalles

- **Responsive:** diseño para móvil primero, con un solo punto de quiebre en 960 px.
- **Accesibilidad:**
  - HTML semántico y elementos decorativos con `aria-hidden`;
  - contorno visible al navegar con teclado;
  - con `prefers-reduced-motion` se desactivan las animaciones.
- **Sin JavaScript:** todo el contenido sigue visible; solo se pierden el efecto scramble y la inclinación de las tarjetas.
