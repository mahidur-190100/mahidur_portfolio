import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaGithub, FaServer, FaGlobe } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: "Public Infrastructure Issue Reporting System",
      description: "A Full-Stack web application that allows citizens to report public infrastructure problems and enables govt admins and staff to manage, track and resolve these issues efficiently.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      links: {
        live: "https://dancing-malasada-a53a98.netlify.app/",
        client: "https://github.com/mahidur-190100/public-infra-report",
        server: "https://github.com/mahidur-190100/public-infra-report-server"
      },
      image: "https://i.ibb.co.com/spxyBgYV/Chat-GPT-Image-Jan-17-2026-09-59-44-PM.png"
    },
    {
      title: "Emergency Service Web App",
      description: "A responsive emergency contact platform built with HTML, CSS, and Tailwind CSS that allows users to call emergency numbers using a point-based system.",
      tags: ["HTML", "CSS", "Tailwind", "JavaScript"],
      links: {
        live: "https://mahidur-190100.github.io/emergency-hotline/",
        github: "https://github.com/mahidur-190100/emergency-hotline"
      },
      image: "https://i.ibb.co.com/fzBQ7d7b/Chat-GPT-Image-Jan-17-2026-10-07-54-PM.jpg"
      
    }
  ]

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing my best work and recent projects
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/30 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-700 shadow-2xl"
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30"></div>
                </div>
                
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                      >
                        <FaGlobe /> Live Demo
                      </motion.a>
                    )}
                    
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gray-700 rounded-full font-semibold hover:bg-gray-600 transition-all"
                      >
                        <FaGithub /> GitHub
                      </motion.a>
                    )}
                    
                    {project.links.client && (
                      <motion.a
                        href={project.links.client}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-full font-semibold hover:bg-purple-700 transition-all"
                      >
                        <FaGithub /> Client
                      </motion.a>
                    )}
                    
                    {project.links.server && (
                      <motion.a
                        href={project.links.server}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-green-600 rounded-full font-semibold hover:bg-green-700 transition-all"
                      >
                        <FaServer /> Server
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects