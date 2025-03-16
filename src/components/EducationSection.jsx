// components/EducationSection.jsx
import { FaFileAlt, FaTrophy, FaGraduationCap } from "react-icons/fa";
import * as Icons from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

export default function EducationSection({ education }) {
  return (
    <section className='relative pt-12 pb-24 px-4 text-center overflow-hidden '>
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute w-96 h-96 bg-gradient-to-r from-[#7cafd1]/30 to-[#b3aae2]/30 rounded-full blur-3xl -top-32 -left-32 animate-pulse' />
        <div className='absolute w-96 h-96 bg-gradient-to-l from-[#7cafd1]/30 to-[#b3aae2]/30 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse' />
      </div>

      <div className='max-w-4xl mx-auto relative'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className='text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 relative'
        >
          Education
        </motion.h2>
        <span className='block h-1 w-24 bg-gradient-to-r from-sky-400 to-purple-500 animate-underline mx-auto mb-16' />

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='group relative mb-8'
            >
              <div className='absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10' />

              <motion.div
                variants={itemVariants}
                className='bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 transition-all duration-300 hover:border-sky-400/30 hover:scale-[1.02]'
              >
                <div className='flex items-start gap-4 mb-4'>
                  <FaGraduationCap className='flex-shrink-0 w-8 h-8 text-sky-400 mt-1' />
                  <div className=''>
                    <h3 className='text-left text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent'>
                      {edu.institution}
                    </h3>
                    <p className='text-lg text-gray-300 mt-1 italic'>
                      {edu.degree} <span className='text-sky-400 mx-2'>•</span>{" "}
                      {edu.year}
                    </p>
                  </div>
                </div>

                {edu.honors && edu.honors.length > 0 && (
                  <div className='ml-12 pl-4 border-l-2 border-sky-400/30'>
                    <h4 className='flex items-center gap-2 text-lg font-semibold text-sky-300 mb-3'>
                      <FaTrophy className='w-5 h-5' />
                      Honors & Awards
                    </h4>
                    <ul className='space-y-3'>
                      {edu.honors.map((honor, i) => (
                        <li
                          key={i}
                          className='flex items-start gap-3 text-gray-300 group/honor'
                        >
                          <span className='text-sky-400 mt-1'>▹</span>
                          <span className='group-hover/honor:text-gray-100 transition-colors'>
                            {honor}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {edu.thesis && (
                  <div className='mt-6 ml-12'>
                    <ThesisLink thesis={edu.thesis} />
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ThesisLink({ thesis }) {
  const IconComponent = Icons[thesis.icon] || FaFileAlt;
  return (
    <div className='group relative'>
      <h4 className='text-lg font-semibold mb-3 text-gray-200 flex items-center gap-2'>
        <span className='text-sky-300 to-blue-500 bg-clip-text'>
          Master's Thesis
        </span>
      </h4>
      <a
        href={thesis.link}
        className='flex items-center p-3 rounded-lg border border-gray-700 hover:border-sky-400/50 transition-all duration-300 bg-gray-900/50 hover:bg-gray-800/50'
        target='_blank'
        rel='noopener noreferrer'
      >
        <IconComponent className='mr-3 w-5 h-5 text-sky-400 group-hover:animate-bounce' />
        <span className='text-gray-300 group-hover:text-sky-300 transition-colors'>
          {thesis.title}
        </span>
      </a>
    </div>
  );
}
