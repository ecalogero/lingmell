# Skybox & Reflections in React Three Fiber

An interactive 3D scene built with React Three Fiber featuring a skybox environment, a real-time reflective sphere, and a rotating cube. Based on [Paul Henschel's cube camera / render target example](https://codesandbox.io/s/cubecamera-rendertarget-03b7e?file=/src/App.js).

## Preview

The scene includes:
- A 360° skybox made from 6 cubemap textures
- A reflective sphere that captures the environment in real time
- A rotating cube with standard lighting
- Mouse-controlled orbit camera

## Prerequisites

- [Node.js](https://nodejs.org/) v16 or later
- npm (comes with Node.js)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone <repo-url>
   cd lingmell
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   The app will open automatically at [http://localhost:3000](http://localhost:3000).

## Controls

- **Left-click + drag** — orbit around the scene
- **Right-click + drag** — pan
- **Scroll wheel** — zoom in/out

## Project Structure

```
src/
  App.js        # All 3D scene logic (SkyBox, Sphere, Cube components)
  index.js      # React entry point
public/
  px/nx/py/ny/pz/nz.jpg  # Cubemap skybox textures (6 faces)
```

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start development server at localhost:3000 |
| `npm run build` | Create an optimised production build |
| `npm test` | Run tests |

## Tech Stack

- [React](https://react.dev/) 18
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — React renderer for Three.js
- [Three.js](https://threejs.org/) — 3D graphics library
- [@react-three/drei](https://github.com/pmndrs/drei) — helpers and abstractions for R3F
