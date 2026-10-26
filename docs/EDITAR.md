# Guía para editar y publicar el portafolio

Todo el contenido está en `src/content/` y los textos de la interfaz en `src/i18n/dictionaries/`. Cada texto tiene su versión `en` y `es` lado a lado: si cambias uno, cambia el otro.

## Cambios frecuentes

| Quiero… | Archivo |
| --- | --- |
| Cambiar mi titular, presentación, disponibilidad o el perfil del CV | `src/content/profile.ts` (bloque `intro`) |
| Cambiar correo, teléfono, LinkedIn, GitHub o dominio | `src/content/profile.ts` |
| Ocultar la línea "Disponible ya…" (por ejemplo, si consigo trabajo) | `src/content/profile.ts` → `available: false` |
| Editar un trabajo o sus logros | `src/content/experience.ts` |
| Agregar o quitar habilidades | `src/content/skills.ts` |
| Editar formación o idiomas | `src/content/education.ts` |
| Editar proyectos de la universidad | `src/content/projects/minor.ts` |
| Cambiar botones, menús y textos fijos | `src/i18n/dictionaries/en.ts` y `es.ts` |
| Cambiar mi foto | Reemplaza `public/images/rene.webp` (proporción 4:5, idealmente 800 × 1000 px) |

## Agregar un proyecto nuevo (por ejemplo, el sistema de reservas)

1. Copia `src/content/projects/nexa-website.ts` como `src/content/projects/reservas.ts`.
2. Cambia `slug` (será la URL: `/work/reservas` y `/es/proyectos/reservas`), `order`, nombre, textos, stack y enlaces.
3. Guarda las capturas en `public/work/reservas/`: escritorio a 1440 × 900 y móvil a 780 × 1688, en `.webp`.
4. Impórtalo en `src/content/projects/index.ts` y agrégalo a la lista.
5. Si el proyecto usa PostgreSQL, agrégalo en `src/content/skills.ts` (hoy no aparece porque ningún proyecto lo usa todavía).
6. Revisa que el CV siga en una página: `npm run cv:pdf` te avisa si se pasa.

Los textos largos de cada caso aceptan Markdown sencillo: listas con `-`, listas numeradas, **negritas**, `código`, [enlaces](https://ejemplo.com) y bloques de código con tres comillas invertidas.

## Regenerar el CV en PDF y las imágenes para redes

Cada vez que cambies experiencia, habilidades, proyectos o el perfil:

```bash
npx playwright install chromium   # solo la primera vez
npm run build && npm start        # terminal 1
npm run cv:pdf                    # terminal 2: crea public/cv/Rene-Rangel-CV-EN.pdf y -ES.pdf
npm run og                        # terminal 2: crea public/og/og-en.png y og-es.png
```

El CV debe quedar en **una página**. Si el script avisa que son dos, recorta una viñeta.

## Publicar por primera vez

1. **Dirección.** El sitio vive gratis en `https://renerangel.netlify.app` (Netlify). Si ese nombre ya está ocupado y eliges otro, cambia `url` en `src/content/profile.ts` (o la variable `NEXT_PUBLIC_SITE_URL` en Netlify) y vuelve a generar el CV y las imágenes con `OG_HOST=<tu-nombre>.netlify.app npm run og`, porque el CV imprime la dirección del sitio. Más adelante, si compras un dominio propio (por ejemplo `renerangel.dev`), se conecta en Netlify en Domain management y se cambia la misma línea.
2. **GitHub.** Crea un repositorio público llamado `portfolio` en tu cuenta `renerangelb-bit` (el pie de página enlaza a `github.com/renerangelb-bit/portfolio`) y sube el proyecto:
   ```bash
   git init
   git add .
   git commit -m "Portfolio: first version"
   git branch -M main
   git remote add origin https://github.com/renerangelb-bit/portfolio.git
   git push -u origin main
   ```
3. **Netlify.** Add new site → Import from Git → elige el repositorio. Netlify lee `netlify.toml`, no hay que configurar nada más.
4. **Nombre del sitio en Netlify.** Site configuration → Change site name → `renerangel`. Así la dirección queda `renerangel.netlify.app`, con HTTPS incluido.
5. **Comprueba** que abren `/`, `/es`, los dos casos, `/cv` y que el botón "Download CV (PDF)" descarga el archivo.

## Después de publicar

- Pon `renerangel.netlify.app` en LinkedIn (sección Contacto y en el titular o "Destacado"), en tu perfil de GitHub y en tu firma de correo.
- Cambia la biografía de GitHub para que coincida: "Full-stack developer. React, Next.js, TypeScript, Node.js, SQL." (hoy dice "React & Java Spring Boot").
- Usa `docs/github-profile-README.md` como README de tu perfil de GitHub (repositorio `renerangelb-bit/renerangelb-bit`).

## Antes de cada entrevista

Repasa el código de cada proyecto del portafolio hasta poder explicar sin notas por qué está hecho así: la función `computeTotals`, el hook `useHydrated`, cómo se sincronizan los filtros con la URL, el orden de revisiones de la API de contacto de NEXA y cómo funciona el cambio de idioma. Es lo primero que te van a preguntar.
