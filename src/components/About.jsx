import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
        </motion.div>

        {/* Coding Terminal Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-gray-900/90 px-6 py-4 border-b border-gray-800/50 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm text-gray-400 font-mono ml-4">about_mahidur.js — terminal</div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-8">
            <div className="font-mono text-sm md:text-base">
              {/* Command Line 1 */}
              <div className="mb-4">
                <span className="text-green-400">mahidur@portfolio</span>
                <span className="text-cyan-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-300">$ </span>
                <span className="text-white">cat about_me.txt</span>
              </div>

              {/* Output 1 */}
              <div className="ml-8 mb-6 text-gray-300 leading-relaxed">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-cyan-400">{"//"}</span>
                  <span className="text-cyan-300 font-semibold">MERN full-stack developer</span>
                  <span className="text-gray-500">,</span>
                   <span className="text-cyan-300 font-semibold">Frontend developer</span>
                  <span className="text-gray-500">and</span>
                  <span className="text-blue-300">Computer Science student</span>
                  <span className="text-gray-500">at BRAC University</span>
                </div>
                <div className="text-lg mb-4">
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
              <div className="mb-4">
                <span className="text-green-400">mahidur@portfolio</span>
                <span className="text-cyan-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-300">$ </span>
                <span className="text-white">npm run skills</span>
              </div>

              {/* Output 2 */}
              <div className="ml-8 mb-6 text-gray-300 leading-relaxed">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-cyan-400">{"//"}</span>
                  <span className="text-cyan-300 font-semibold">Specialization:</span>
                </div>
                <div className="text-lg mb-4">
                  <span className="text-gray-200">
                    Creating responsive interfaces and scalable backend systems with{" "}
                    <span className="text-green-500">MongoDB</span> database integration.
                  </span>
                </div>
              </div>

              {/* Command Line 3 */}
              <div className="mb-4">
                <span className="text-green-400">mahidur@portfolio</span>
                <span className="text-cyan-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-300">$ </span>
                <span className="text-white">git status --opportunities</span>
              </div>

              {/* Output 3 */}
              <div className="ml-8 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-cyan-400">{"//"}</span>
                  <span className="text-cyan-300 font-semibold">Current Status:</span>
                </div>
                <div className="text-lg text-gray-200 mb-6">
                  Seeking opportunities to apply my skills in dynamic development environments.
                </div>
                
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {['Internships', 'Part-time', 'MERN Projects', 'Freelance'].map((item) => (
                    <div key={item} className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-3 text-center">
                      <span className="text-cyan-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div> */}
              </div>

              {/* Current Command Line (Blinking Cursor) */}
              <div className="flex items-center">
                <span className="text-green-400">mahidur@portfolio</span>
                <span className="text-cyan-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-gray-300">$ </span>
                <div className="flex items-center">
                  <span className="text-white">_</span>
                  <div className="w-2 h-5 bg-cyan-400 ml-1 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Footer */}
          <div className="bg-gray-900/90 px-6 py-3 border-t border-gray-800/50 text-xs text-gray-500 font-mono flex justify-between">
            <div className="flex items-center gap-4">
              <span className="text-green-400">main</span>
              <span className="text-yellow-400">●</span>
              <span>UTF-8</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Ln 24, Col 15</span>
              <span>JavaScript</span>
              <span>100%</span>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Badges */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-4"
        >
          {[
            { name: 'React', color: 'text-cyan-400', bg: 'bg-cyan-900/20' },
            { name: 'Node.js', color: 'text-green-400', bg: 'bg-green-900/20' },
            { name: 'Express', color: 'text-gray-300', bg: 'bg-gray-800/20' },
            { name: 'MongoDB', color: 'text-green-500', bg: 'bg-green-900/20' },
            { name: 'JavaScript', color: 'text-yellow-400', bg: 'bg-yellow-900/20' },
            { name: 'Tailwind', color: 'text-blue-400', bg: 'bg-blue-900/20' },
          ].map((tech) => (
            <div key={tech.name} className={`${tech.bg} border border-gray-800/50 rounded-lg p-3 text-center`}>
              <span className={`${tech.color} font-medium`}>{tech.name}</span>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  )
}

export default About