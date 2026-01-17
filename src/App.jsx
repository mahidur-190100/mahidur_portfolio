import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Extracurricular from './components/Extracurricular'
import Contact from './components/Contact'

function App() {
  // Custom mouse cursor
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }
    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900 to-gray-900"></div>
      
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-blue-400 pointer-events-none z-50 mix-blend-difference"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />
      
      {/* Particles background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Extracurricular />
        <Contact />
      </div>
    </div>
  )
}

export default App