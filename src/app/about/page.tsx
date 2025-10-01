'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Portfolio
            </Link>
            <div className="flex space-x-8">
              <Link href="/about" className="text-gray-900 font-medium">About</Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* About Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I&apos;m a passionate developer with a love for creating innovative solutions and beautiful user experiences. 
              With expertise in modern web technologies, I bring ideas to life through clean, efficient code.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-300">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-6xl font-bold text-white">
                  👨‍💻
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">My Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I started my journey in web development with a curiosity about how websites work. 
                Over the years, I&apos;ve honed my skills in both frontend and backend technologies, 
                always striving to create solutions that are not only functional but also beautiful and user-friendly.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open source projects, 
                or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date 
                with the latest trends in web development.
              </p>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Skills & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Frontend Development',
                  description: 'React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3',
                  icon: '🎨',
                  skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
                },
                {
                  title: 'Backend Development',
                  description: 'Node.js, Python, APIs, Databases, Server Architecture',
                  icon: '⚙️',
                  skills: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']
                },
                {
                  title: 'Tools & Technologies',
                  description: 'Git, Docker, AWS, CI/CD, Testing, Performance Optimization',
                  icon: '🛠️',
                  skills: ['Git', 'Docker', 'AWS', 'Jest', 'Webpack', 'Vercel']
                }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{skill.title}</h3>
                  <p className="text-gray-600 mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Experience</h2>
            <div className="space-y-8">
              {[
                {
                  title: 'Senior Frontend Developer',
                  company: 'Tech Company',
                  period: '2022 - Present',
                  description: 'Leading frontend development initiatives and mentoring junior developers.'
                },
                {
                  title: 'Full Stack Developer',
                  company: 'Startup Inc',
                  period: '2020 - 2022',
                  description: 'Developed full-stack applications using React, Node.js, and modern cloud technologies.'
                },
                {
                  title: 'Frontend Developer',
                  company: 'Digital Agency',
                  period: '2018 - 2020',
                  description: 'Created responsive websites and web applications for various clients.'
                }
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-gray-600">{exp.company}</p>
                      <p className="text-gray-500">{exp.description}</p>
                    </div>
                    <span className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
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
