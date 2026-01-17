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
import axios from 'axios'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Your Discord webhook URL
  const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1462147818851536896/HBAmvTsjBdXbrk9H6tjFOnAcurWhQzw--bzsdwCR0f2UZbZTroJ3zCrWbnZDvI2LxN4I'

  // Send message to Discord webhook
  const sendToDiscord = async (data) => {
    const bangladeshTime = new Date().toLocaleString('en-BD', {
      timeZone: 'Asia/Dhaka',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
    
    const discordPayload = {
      username: "Portfolio Contact Form",
      avatar_url: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      embeds: [{
        title: "📬 New Message from Portfolio",
        color: 5814783,
        fields: [
          {
            name: "Name",
            value: data.name || "Anonymous",
            inline: true
          },
          {
            name: "Email",
            value: data.email || "Not provided",
            inline: true
          },
          {
            name: "Message",
            value: data.message.substring(0, 500) + (data.message.length > 500 ? "..." : ""),
            inline: false
          },
          {
            name: "Time",
            value: bangladeshTime,
            inline: true
          }
        ]
      }]
    }

    try {
      await axios.post(DISCORD_WEBHOOK_URL, discordPayload)
      return true
    } catch (error) {
      console.error('Discord webhook error:', error)
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Send to Discord
      await sendToDiscord(formData)
      
      // Show success message
      setSubmitted(true)
      
      // Reset form
      setFormData({ name: '', email: '', message: '' })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
      
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsLoading(false)
    }
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
              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all border border-gray-700/50">
                <div className="p-3 bg-blue-900/30 rounded-lg">
                  <FaPhone className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200">Phone</h3>
                  <a 
                    href="tel:+8801576480207" 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    +880 1576-480207
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all border border-gray-700/50">
                <div className="p-3 bg-green-900/30 rounded-lg">
                  <FaEnvelope className="text-green-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200">Email</h3>
                  <a 
                    href="mailto:mahidur952697@gmail.com" 
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    mahidur952697@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all border border-gray-700/50">
                <div className="p-3 bg-purple-900/30 rounded-lg">
                  <FaMapMarkerAlt className="text-purple-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200">Location</h3>
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
              <h3 className="text-xl font-bold mb-6 text-gray-200">Connect with me</h3>
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
            <div className="p-6 bg-gray-900/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-gray-200 mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-gray-100 placeholder-gray-500"
                    placeholder="Your name"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-gray-100 placeholder-gray-500"
                    placeholder="your.email@example.com"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="4"
                    className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-all text-gray-100 placeholder-gray-500 resize-none"
                    placeholder="Your message here..."
                    required
                    disabled={isLoading}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                  className={`w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-blue-500/30 transition-all ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <FaCheck /> Message Sent!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Simple Success Message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-900/90 to-purple-900/90 text-white p-6 rounded-xl shadow-2xl border border-blue-700/50 max-w-md z-50"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-800/50 rounded-lg">
                <FaCheck className="text-blue-300 text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Thank You!</h4>
                <p className="text-blue-100">
                  I have received your message. I'll reply to you soon.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Contact