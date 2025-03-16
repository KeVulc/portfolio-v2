import { motion } from "framer-motion";

export default function ProjectsGrid({ projects }) {
  return (
    <section className='relative pt-12 pb-24 px-4 text-center overflow-hidden'>
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute w-96 h-96 bg-gradient-to-r from-[#7cafd1]/30 to-[#b3aae2]/30 rounded-full blur-3xl -top-32 -left-32 animate-pulse' />
        <div className='absolute w-96 h-96 bg-gradient-to-l from-[#7cafd1]/30 to-[#b3aae2]/30 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse' />
      </div>

      <div className='max-w-6xl mx-auto relative'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className='text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 relative'
        >
          Projects
        </motion.h2>
        <span className='block h-1 w-24 bg-gradient-to-r from-sky-400 to-purple-500 animate-underline mx-auto mb-16' />

        <div className='grid md:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              data-aos='zoom-in-up'
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className='group relative h-full transform transition-all duration-300 hover:-translate-y-2'>
      {/* Glow effect */}
      <div className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-gradient-to-r from-sky-400/30 to-blue-500/30 blur-xl' />

      <div className='h-full bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 hover:border-sky-400/30 transition-all duration-300'>
        <div className='h-48 bg-gradient-to-br from-sky-900 to-blue-900 flex items-center justify-center relative overflow-hidden'>
          <span className='text-sky-300 text-5xl animate-float'>
            {project.emoji || "🚀"}
          </span>
          {/* Animated grid pattern */}
          <div className='absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]' />
        </div>

        <div className='p-6'>
          <h3 className='text-xl font-bold mb-2 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent'>
            {project.title}
          </h3>
          <p className='text-gray-300 mb-4 min-h-[80px]'>
            {project.description}
          </p>

          <div className='flex flex-wrap gap-2 mb-4'>
            {project.tech.split(",").map((tech, i) => (
              <span
                key={i}
                className='px-3 py-1 text-xs font-medium rounded-full bg-gray-700 text-sky-300 hover:bg-sky-500 hover:text-white transition-all duration-300'
              >
                {tech.trim()}
              </span>
            ))}
          </div>

          <div className='flex justify-between items-center border-t border-gray-700 pt-4'>
            <a
              href={project.link}
              className='flex items-center text-sky-300 hover:text-sky-200 group/link'
              aria-label={`View details for ${project.title}`}
            >
              <span className='mr-2'>Explore Project</span>
              <span className='group-hover/link:translate-x-1 transition-transform duration-300'>
                →
              </span>
            </a>
            {project.github && (
              <a
                href={project.github}
                className='text-gray-400 hover:text-sky-300 transition-colors duration-300'
                aria-label='GitHub repository'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
