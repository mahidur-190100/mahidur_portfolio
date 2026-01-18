import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            MERN Stack Developer • Frontend Developer • Computer Science Student
          </p>
        </motion.div>

        {/* Coding Terminal Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-xl md:rounded-2xl overflow-hidden"
        >
          {/* Terminal Header - Responsive */}
          <div className="bg-gray-900/90 px-4 sm:px-6 py-3 md:py-4 border-b border-gray-800/50 flex items-center gap-2 sm:gap-3">
            <div className="flex gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs sm:text-sm text-gray-400 font-mono ml-3 sm:ml-4 truncate">
              about_mahidur.js — terminal
            </div>
          </div>

          {/* Terminal Content - Responsive */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="font-mono text-xs sm:text-sm md:text-base overflow-x-auto">
              
              {/* Command Line 1 */}
              <div className="mb-3 sm:mb-4">
                <span className="text-green-400">mahidur@portfolio</span>
                <span className="text-cyan-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-300">$ </span>
                <span className="text-white">cat about_me.txt</span>
              </div>

              {/* Output 1 - Responsive */}
              <div className="ml-4 sm:ml-6 md:ml-8 mb-4 sm:mb-6 text-gray-300">
                <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                  <span className="text-cyan-400">{"//"}</span>
                  <span className="text-cyan-300 font-semibold text-sm sm:text-base">MERN full-stack developer</span>
                  <span className="text-gray-500">,</span>
                  <span className="text-cyan-300 font-semibold text-sm sm:text-base">Frontend developer</span>
                  <span className="text-gray-500">and</span>
                  <span className="text-blue-300 text-sm sm:text-base">Computer Science student</span>
                  <span className="text-gray-500 text-sm sm:text-base">at BRAC University</span>
                </div>
                <div className="text-base sm:text-lg mb-4">
                  <span className="text-gray-200">
                    I build modern web applications using{" "}
                    <span className="text-cyan-300">React</span>,{" "}
                    <span className="text-green-400">Node.js</span>,{" "}
                    <span className="text-yellow-400">Express</span>, and{" "}
                    <span className="text-green-500">MongoDB</span>.
                  </span>
                </div>
              </div>

              {/* Command Line 2 */}
              <div className="mb-3 sm:mb-4">
                <span className="text-green-400">mahidur@portfolio</span>
                <span className="text-cyan-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-300">$ </span>
                <span className="text-white">npm run skills</span>
              </div>

              {/* Output 2 - Responsive */}
              <div className="ml-4 sm:ml-6 md:ml-8 mb-4 sm:mb-6 text-gray-300">
                <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                  <span className="text-cyan-400">{"//"}</span>
                  <span className="text-cyan-300 font-semibold text-sm sm:text-base">Specialization:</span>
                </div>
                <div className="text-base sm:text-lg mb-4">
                  <span className="text-gray-200">
                    Creating responsive interfaces and scalable backend systems with{" "}
                    <span className="text-green-500">MongoDB</span> database integration.
                  </span>
                </div>
              </div>

              {/* Command Line 3 */}
              <div className="mb-3 sm:mb-4">
                <span className="text-green-400">mahidur@portfolio</span>
                <span className="text-cyan-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-300">$ </span>
                <span className="text-white">git status --opportunities</span>
              </div>

              {/* Output 3 - Responsive */}
              <div className="ml-4 sm:ml-6 md:ml-8 mb-6 sm:mb-8">
                <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                  <span className="text-cyan-400">{"//"}</span>
                  <span className="text-cyan-300 font-semibold text-sm sm:text-base">Current Status:</span>
                </div>
                <div className="text-base sm:text-lg text-gray-200 mb-6">
                  Seeking opportunities to apply my skills in dynamic development environments.
                </div>
              </div>

              {/* Current Command Line (Blinking Cursor) */}
              <div className="flex items-center">
                <span className="text-green-400">mahidur@portfolio</span>
                <span className="text-cyan-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-300">$ </span>
                <div className="flex items-center">
                  <span className="text-white">_</span>
                  <div className="w-1.5 h-4 sm:w-2 sm:h-5 bg-cyan-400 ml-1 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Footer - Responsive */}
          <div className="bg-gray-900/90 px-4 sm:px-6 py-2 sm:py-3 border-t border-gray-800/50 text-[10px] sm:text-xs text-gray-500 font-mono flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-green-400">main</span>
              <span className="text-yellow-400 hidden sm:inline">●</span>
              <span className="hidden sm:inline">UTF-8</span>
              <span className="sm:hidden">UTF-8</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <span>Ln 24, Col 15</span>
              <span className="hidden sm:inline">JavaScript</span>
              <span>100%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About