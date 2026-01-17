import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaUsers, FaChartLine, FaLaptopCode, FaHandsHelping } from 'react-icons/fa'

const Extracurricular = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const activities = [
    {
      title: "Director, IT Department",
      organization: "BRAC University Response Team",
      period: "2023 - Present",
      description: "Leading IT infrastructure development, managing technical operations, and implementing digital solutions for campus initiatives.",
      icon: <FaLaptopCode />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Senior Executive, Finance Department",
      organization: "BRAC University Compute Club",
      period: "2024 - 2025",
      description: "Managed club finances, budget planning, and financial reporting for technical events and workshops.",
      icon: <FaChartLine />,
      color: "from-purple-500 to-pink-500"
    }
  ]

  const skills = [
    "Team Leadership",
    "Project Management",
    "Strategic Planning",
    "Communication",
    "Problem Solving",
    "Event Organization"
  ]

  return (
    <section id="extracurricular" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              LEADERSHIP & ACTIVITIES
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Beyond academics: Leadership roles and organizational experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${activity.color}`}>
                  <span className="text-2xl">{activity.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{activity.title}</h3>
                  <p className="text-blue-300 font-semibold">{activity.organization}</p>
                  <p className="text-gray-400 text-sm mt-1">{activity.period}</p>
                </div>
              </div>
              <p className="text-gray-300">{activity.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills Gained */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Skills Developed
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-gray-700/50 rounded-full border border-gray-600 hover:bg-gray-600/50 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Extracurricular