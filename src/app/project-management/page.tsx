'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function ProjectManagement() {
  const projects = [ 
    {
      title: 'Project Manager - H&E Investments',
      description: 'Managed the rehabilitation of fix/flip properties in the the Los Angeles area.',
      image: '🎯',
      tags: ['Procurement', 'Construction', 'Roadmapping', 'Risk Management', 'Timeline Planning'],
      link: '#',
      date: '2024',
      role: 'Project Manager'
    },

    {
      title: 'Product Launch — FitTrackr',
      description: 'Led end-to-end delivery of a fitness tracking app from planning through launch. Coordinated design, development, and QA across a cross-functional team.',
      image: '🏋️',
      tags: ['Agile', 'Sprint Planning', 'Stakeholder Updates', 'Launch'],
      link: '#',
      date: '2025',
      role: 'Project Lead'
    },

    {
      title: 'Team Onboarding Program',
      description: 'Designed and rolled out a structured onboarding process for new contributors, including documentation and check-in cadences.',
      image: '📋',
      tags: ['Process Design', 'Documentation', 'Team Coordination'],
      link: '#',
      date: '2024',
      role: 'Program Coordinator'
    }
  ];

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

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Project Management</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of projects I&apos;ve managed — from planning and coordination to delivery and launch.
              Add your own projects by editing this page.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:bg-gray-50 transition-all shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
                      {project.role}
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
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>View Details</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Collaborate?</h2>
            <p className="text-lg text-gray-600 mb-8">
              I&apos;m always open to discussing new initiatives and how I can help bring them to life.
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
            © 2025 Edward Henriquez.
          </p>
        </div>
      </footer>
    </main>
  );
}
