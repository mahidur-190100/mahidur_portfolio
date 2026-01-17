import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaCalendarAlt, FaSchool, FaUniversity, FaGlobe } from 'react-icons/fa'
import { desc } from 'framer-motion/client'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const education = [
    {
      degree: "BSc in Computer Science and Engineering",
      institution: "BRAC UNIVERSITY",
      period: "2022–2026",
      location: "Dhaka, Bangladesh",
      description: "Final Year CSE Student at BRAC University | Passionate about Full-Stack Development & Scalable Systems",
      icon: <FaUniversity />,
      type: "university"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "CAMBRIAN COLLEGE",
      period: "2020–2022",
      location: "Chattogram, Bangladesh",
      description: "Group: Science | GPA: 5.00/5.00",
      icon: <FaSchool />,
      type: "college"
    }
  ]

  const languages = [
    { name: "Bengali", level: "Native", levelClass: "w-full" },
    { name: "English", level: "Professional Working Proficiency", levelClass: "w-4/5" },
    { name: "Chinese", level: "Basic Knowledge", levelClass: "w-1/3" }
  ]

  return (
    <section id="education" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              EDUCATION & LANGUAGES
            </span>
          </h2>
        </motion.div>

        {/* Education Row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-6 text-blue-300 flex items-center gap-3">
            <FaGraduationCap />
            Academic Background
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${
                    edu.type === "university" 
                      ? "bg-blue-900/30 text-blue-400" 
                      : "bg-green-900/30 text-green-400"
                  }`}>
                    {edu.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{edu.institution}</h4>
                    <p className="text-gray-400 text-sm">{edu.period}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-gray-300 mb-3">{edu.location}</p>
                {edu.description && (
                  <p className="text-gray-400">{edu.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages Row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-green-300 flex items-center gap-3">
            <FaGlobe />
            Language Skills
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <h4 className="font-bold text-lg">{lang.name}</h4>
                  </div>
                  <span className="text-sm text-gray-400">{lang.level}</span>
                </div>
                
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: lang.levelClass } : {}}
                    transition={{ duration: 1.5, delay: index * 0.2 + 0.7 }}
                    className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education