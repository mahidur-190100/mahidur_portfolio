import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaCheck,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all">
                <div className="p-3 bg-blue-900/30 rounded-lg">
                  <FaPhone className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-300">+8801576480207</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all">
                <div className="p-3 bg-green-900/30 rounded-lg">
                  <FaEnvelope className="text-green-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-300">mahidur952697@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all">
                <div className="p-3 bg-purple-900/30 rounded-lg">
                  <FaMapMarkerAlt className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-300">Merul Badda, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12"
            >
              <h3 className="text-xl font-bold mb-6">Connect with me</h3>
              <div className="flex gap-6">
                <motion.a
                  href="https://github.com/mahidur-190100"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 group"
                >
                  <FaGithub className="text-2xl text-gray-300 group-hover:text-white transition-colors" />
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/mahidur-rahman-107417331/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-gray-800 rounded-full hover:bg-blue-700 transition-all duration-300 group"
                >
                  <FaLinkedin className="text-2xl text-gray-300 group-hover:text-white transition-colors" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-all resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                {submitted ? (
                  <>
                    <FaCheck /> Message Sent!
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </motion.button>
              
              {/* Form Note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center text-gray-400 text-sm mt-6"
              >
                I'll get back to you within 24 hours
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact