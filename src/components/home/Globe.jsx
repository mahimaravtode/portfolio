import { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'

// Generate random points on sphere surface
const generatePoints = (count, radius) => {
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(2 * Math.random() - 1)
    const theta = Math.sqrt(count * Math.PI) * phi
    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = radius * Math.sin(phi) * Math.sin(theta)
    const z = radius * Math.cos(phi)
    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z
  }
  return positions
}

const GlobePoints = ({ radius }) => {
  const pointsRef = useRef()
  const positions = useMemo(() => generatePoints(2000, radius), [radius])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005
    }
  })

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial
        transparent
        color="#D3FD50"
        size={0.08}
        sizeAttenuation
        depthWrite={false}
        opacity={1}
      />
    </Points>
  )
}

const GlobeMesh = () => {
  const meshRef = useRef()
  const atmosphereRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0008
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.0008
    }
  })

  return (
    <group>
      {/* Main globe sphere */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#0a0a0a"
          roughness={0.6}
          metalness={0.4}
          wireframe
          transparent
          opacity={0.8}
        />
      </Sphere>

      {/* Inner glow sphere */}
      <Sphere args={[1.95, 64, 64]}>
        <meshStandardMaterial
          color="#D3FD50"
          roughness={0.9}
          metalness={0.1}
          transparent
          opacity={0.08}
        />
      </Sphere>

      {/* Atmosphere glow */}
      <Sphere ref={atmosphereRef} args={[2.15, 64, 64]}>
        <meshStandardMaterial
          color="#D3FD50"
          roughness={1}
          metalness={0}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Points on surface */}
      <GlobePoints radius={2} />
    </group>
  )
}

const Globe = () => {
  const containerRef = useRef(null)
  const globeRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scroll-based scaling and position animation
    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = window.innerHeight * 0.8
      const progress = Math.min(scrollY / maxScroll, 1)
      
      // Scale from 1 to 3 based on scroll
      const scale = 1 + progress * 2
      
      // Move globe down and scale up
      const yPos = progress * 2
      
      if (globeRef.current) {
        gsap.to(globeRef.current.scale, {
          x: scale,
          y: scale,
          z: scale,
          duration: 0.5,
          ease: 'power2.out'
        })
        gsap.to(globeRef.current.position, {
          y: -yPos,
          duration: 0.5,
          ease: 'power2.out'
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#D3FD50" />
        <directionalLight position={[-5, -5, -5]} intensity={0.6} color="#D3FD50" />
        <pointLight position={[0, 10, 0]} intensity={1} color="#D3FD50" />
        <pointLight position={[0, -10, 0]} intensity={0.5} color="#D3FD50" />
        
        <group ref={globeRef}>
          <GlobeMesh />
        </group>
      </Canvas>
    </div>
  )
}

export default Globe
