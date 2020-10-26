import React, { Suspense, useLayoutEffect, useState, useRef } from "react"
import { Canvas, useLoader, useThree, useFrame, useResource } from "react-three-fiber"
import { CubeTextureLoader, WebGLCubeRenderTarget } from "three"
import { OrbitControls, Loader } from "drei"

function SkyBox() {
  const { scene } = useThree()
  const [texture] = useLoader(CubeTextureLoader, [[
  "/nz.jpg",
  "/pz.jpg",
  "/py.jpg",
  "/ny.jpg",
  "/px.jpg",
  "/nx.jpg"  ]])
  useLayoutEffect(() => {
    const oldBg = scene.background
    scene.background = texture
    // Clean up on unmount
    return () => {
      scene.background = oldBg
      texture.dispose()
    }
  }, [scene, texture])
  return null
}

function Sphere() {
  const camera = useResource()
  const { scene, gl } = useThree()
  const [cubeRenderTarget] = useState(() => new WebGLCubeRenderTarget(256))
  useFrame(() => camera.current.update(gl, scene))
  return (
    <>
      <cubeCamera ref={camera} args={[1, 1000, cubeRenderTarget]} />
      <mesh>
        <sphereBufferGeometry args={[2, 32, 32]} />
        <meshBasicMaterial envMap={cubeRenderTarget.texture} />
      </mesh>
    </>
  )
}

function Cube(props) {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01))
  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial />
    </mesh>
  )
}

export default function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} />
        <OrbitControls />
        <Sphere />
        <Cube position={[1.5, 1.5, 1.5]} />
        <Suspense fallback={null}>
          <SkyBox />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}
