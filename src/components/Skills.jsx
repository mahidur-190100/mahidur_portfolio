import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaJs, FaReact, FaNodeJs, FaDatabase, 
  FaGitAlt, FaFire, FaFigma, FaPython,
  FaHtml5, FaCss3Alt, FaPaintBrush,
  FaUsers
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiExpress, SiMongodb, 
  SiVercel, SiNetlify, SiMysql, SiCanva
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillsByCategory = {
    Frontend: [
      { name: "JavaScript (ES6+)", icon: <FaJs />, color: "text-blue-400" },
      { name: "React.js", icon: <FaReact />, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-400" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-400" }
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-400" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
      { name: "REST APIs", icon: <FaDatabase />, color: "text-blue-400" }
    ],
    "Tools & Technologies": [
      { name: "Git & GitHub", icon: <FaGitAlt />, color: "text-orange-400" },
      { name: "Firebase", icon: <FaFire />, color: "text-yellow-400" },
      { name: "Figma", icon: <FaFigma />, color: "text-purple-400" },
      { name: "Vercel", icon: <SiVercel />, color: "text-gray-400" },
      { name: "Netlify", icon: <SiNetlify />, color: "text-cyan-400" }
    ],
    "Additional Skills": [
      { name: "Python", icon: <FaPython />, color: "text-blue-400" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
      { name: "Poster Design", icon: <FaPaintBrush />, color: "text-pink-400" },
      { name: "Canva", icon: <SiCanva />, color: "text-blue-400" },
      { name: "Teamwork", icon: <FaUsers />, color: "text-green-400" }
    ]
  }

  return (
    <section id="skills" className="py-20 px-4 md:px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SKILLS & EXPERTISE
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-blue-300 border-b border-gray-700 pb-3">
                {category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex flex-col items-center group"
                  >
                    <div className={`text-4xl mb-3 p-4 bg-gray-800/50 rounded-2xl group-hover:bg-gray-700/50 transition-all duration-300 ${skill.color}`}>
                      {skill.icon}
                    </div>
                    
                    <h4 className="font-semibold text-sm md:text-base text-center group-hover:text-blue-300 transition-colors">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills