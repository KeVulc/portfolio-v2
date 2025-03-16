import { motion } from "framer-motion";

export default function ExperienceTimeline({ experiences }) {
  return (
    <section className='relative pt-12 pb-24 px-4 text-center overflow-hidden'>
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute w-96 h-96 bg-gradient-to-r from-[#7cafd1]/30 to-[#b3aae2]/30 rounded-full blur-3xl -bottom-32 -left-32 animate-pulse' />
        <div className='absolute w-96 h-96 bg-gradient-to-l from-[#7cafd1]/30 to-[#b3aae2]/30 rounded-full blur-3xl -top-32 -right-32 animate-pulse' />
      </div>

      <div className='max-w-6xl mx-auto relative'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className='text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 relative'
        >
          Professional Journey
        </motion.h2>
        <span className='block h-1 w-24 bg-gradient-to-r from-sky-400 to-purple-500 animate-underline mx-auto mb-16' />

        <div className='relative space-y-12 before:absolute before:left-1/2 before:-translate-x-1/2 before:h-full before:w-1 before:bg-gradient-to-b before:from-sky-400 before:to-purple-500 before:z-0'>
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={`${exp.company}-${index}`}
              experience={exp}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ experience, index }) {
  return (
    <div
      className={`relative group md:w-1/2 ${
        index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
      } z-10`}
      data-aos={`zoom-in`}
      data-aos-delay={index * 100}
    >
      {/* Timeline dot aligned with card center */}
      <div
        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-sky-400  ${
          index % 2 === 0 ? "-right-2" : "-left-2"
        }`}
      />

      <div className='relative space-y-4 p-6 bg-gray-800 rounded-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700 hover:border-sky-400/30 group-hover:before:opacity-100'>
        <div className='absolute inset-0 rounded-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10 bg-gradient-to-r from-sky-400/30 to-blue-500/30 blur-xl' />

        {/* Content */}
        <h3 className='text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent animate-text'>
          {experience?.role || "Role not specified"}
        </h3>

        <div className='flex items-center gap-2 md:justify-start'>
          <span className='text-sm font-semibold text-sky-400 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 mr-1 text-sky-400'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z'
                clipRule='evenodd'
              />
            </svg>
            {experience?.company}
          </span>
          <span className='text-gray-500'>•</span>
          <span className='text-sm text-gray-400 italic'>
            {experience?.period}
          </span>
        </div>

        <ul className='space-y-2 text-gray-300'>
          {experience?.points?.map((point, i) => (
            <li key={i} className='flex gap-2 group/li'>
              <span className='text-sky-400 transition-transform duration-300 group-hover/li:translate-x-1'>
                ▹
              </span>
              <span className='group-hover/li:text-gray-100 transition-colors duration-300'>
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
