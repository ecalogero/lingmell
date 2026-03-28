# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Start development server (localhost:3000)
npm run build    # Production build
npm test         # Run tests (jsdom environment)
```

## Architecture

This is a React Three Fiber 3D demo app, based on Paul Henschel's cube camera / render target example. It renders an interactive 3D scene with a skybox, a reflective sphere, and a rotating cube.

**Core stack:**
- `react-three-fiber` (v4) — React renderer for Three.js
- `three` — 3D graphics
- Create React App (no ejected config)

**`src/App.js`** contains all scene logic:
- `SkyBox` — Loads 6 cubemap textures from `public/` (nx/ny/nz/px/py/pz.jpg) via `CubeTextureLoader` and sets them as `scene.background`
- `Sphere` — Creates a `CubeCamera` render target each frame to capture real-time environment reflections, applied via `meshBasicMaterial.envMap`
- `Cube` — Rotating box using `meshStandardMaterial`
- `App` — Canvas root with `OrbitControls`, ambient/point lights, and `Suspense` for texture loading

**`src/CameraControls.js`** — Currently empty placeholder.

**Textures** live in `public/` as `.jpg` files (skybox faces + numbered variants).
