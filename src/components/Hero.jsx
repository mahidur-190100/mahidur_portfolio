import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Profile Image Container */}
            <div className="relative w-64 h-64 mx-auto md:mx-0 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-70"></div>
              <img
                src="https://i.ibb.co.com/WQNgNZ6/DSC02133.jpg"
                alt="Mahidur Rahman"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-gray-800 shadow-2xl"
              />
             
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <span>+8801576480207</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span>mahidur952697@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Merul Badda, Dhaka</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              MAHIDUR <span className="text-blue-400">RAHMAN</span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-blue-300">
              <TypeAnimation
                sequence={[
                  'MERN Full Stack Developer',
                  2000,
                  'Frontend Developer',
                  2000,
                  'Canva Poster Designer ',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-gray-300 text-lg">
              Passionate full-stack developer with expertise in modern web technologies.
              Building efficient, scalable applications with clean code and best practices.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <motion.a
                href="https://github.com/mahidur-190100"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mahidur-rahman-107417331/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-gray-800 rounded-full hover:bg-blue-700 transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              View My Work →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero