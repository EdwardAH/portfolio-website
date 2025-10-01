'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-900"
            >
              Portfolio
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex space-x-8"
            >
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                  Edward Henriquez
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A passionate developer creating beautiful, functional, and user-centered digital experiences.
              </p>
              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/projects"
                    className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-block"
                  >
                    View My Work
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/contact"
                    className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all inline-block"
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-300">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-6xl font-bold text-white">
                  👨‍💻
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I&apos;m a passionate developer with a love for creating innovative solutions and beautiful user experiences. 
              With expertise in modern web technologies, I bring ideas to life through clean, efficient code.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                description: 'React, Next.js, TypeScript, Tailwind CSS',
                icon: '🎨'
              },
              {
                title: 'Backend Development',
                description: 'Node.js, Python, APIs, Databases',
                icon: '⚙️'
              },
              {
                title: 'UI/UX Design',
                description: 'Figma, User Research, Prototyping',
                icon: '✨'
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
                tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                image: '🛒'
              },
              {
                title: 'Task Management App',
                description: 'A collaborative task management tool with real-time updates',
                tech: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL'],
                image: '📋'
              },
              {
                title: 'Weather Dashboard',
                description: 'A beautiful weather app with location-based forecasts',
                tech: ['React', 'API Integration', 'Chart.js', 'Tailwind'],
                image: '🌤️'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:bg-gray-50 transition-all group shadow-sm"
              >
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Let&apos;s Work Together</h2>
            <p className="text-xl text-gray-600 mb-12">
              Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s discuss how we can bring your ideas to life.
            </p>
            
            <div className="flex justify-center space-x-6 mb-12">
              <motion.a
                href="mailto:edwardhenriquez@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:shadow-lg transition-all"
              >
                <Mail className="text-white" size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/EdwardAH"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:shadow-lg transition-all"
              >
                <Github className="text-white" size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/edward-henriquez"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:shadow-lg transition-all"
              >
                <Linkedin className="text-white" size={24} />
              </motion.a>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © 2025 Edward Henriquez. 
          </p>
        </div>
      </footer>
    </main>
  );
}