'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '🛒',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'JWT'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://ecommerce-demo.vercel.app',
      date: '2024',
      category: 'Full Stack'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '📋',
      tech: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Prisma', 'Tailwind'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://task-manager-demo.vercel.app',
      date: '2024',
      category: 'Web App'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '🌤️',
      tech: ['React', 'API Integration', 'Chart.js', 'Tailwind', 'Geolocation'],
      github: 'https://github.com/yourusername/weather-dashboard',
      demo: 'https://weather-dashboard-demo.vercel.app',
      date: '2023',
      category: 'Frontend'
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, SEO optimization, and content management system.',
      image: '📝',
      tech: ['Next.js', 'MDX', 'Tailwind', 'Vercel', 'SEO'],
      github: 'https://github.com/yourusername/blog-platform',
      demo: 'https://blog-platform-demo.vercel.app',
      date: '2023',
      category: 'Frontend'
    },
    {
      title: 'API Gateway',
      description: 'A microservices API gateway with authentication, rate limiting, and request routing capabilities.',
      image: '🔗',
      tech: ['Node.js', 'Express', 'Redis', 'Docker', 'JWT', 'Rate Limiting'],
      github: 'https://github.com/yourusername/api-gateway',
      demo: 'https://api-gateway-demo.herokuapp.com',
      date: '2023',
      category: 'Backend'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth animations, modern design, and optimized performance.',
      image: '💼',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vercel'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://your-portfolio.vercel.app',
      date: '2024',
      category: 'Frontend'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Web App'];

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
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
              <Link href="/projects" className="text-gray-900 font-medium">Projects</Link>
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

      {/* Projects Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development. 
              Each project represents a unique challenge and learning opportunity.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  category === 'All' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="bg-white backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:bg-gray-50 transition-all group shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                      {project.category}
                    </span>
                    <span className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {project.date}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
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
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Working Together?</h2>
            <p className="text-lg text-gray-600 mb-8">
              I&apos;m always excited to work on new projects and collaborate with amazing people.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
            © 2024 Your Name. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  );
}
