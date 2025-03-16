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

export default function SkillsGrid({ skills }) {
  return (
    <section className='relative pt-12 pb-24 px-4 text-center overflow-hidden'>
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute w-96 h-96 bg-gradient-to-r from-[#7cafd1]/30 to-[#b3aae2]/30 rounded-full blur-3xl -bottom-32 -left-32 animate-pulse ' />
        <div className='absolute w-96 h-96 bg-gradient-to-l from-[#7cafd1]/30 to-[#b3aae2]/30 rounded-full blur-3xl -top-32 -right-32 animate-pulse' />
      </div>

      <div className='max-w-7xl mx-auto relative'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className='text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 relative'
        >
          Technical Expertise
        </motion.h2>
        <span className='block h-1 w-24 bg-gradient-to-r from-sky-400 to-purple-500 animate-underline mx-auto mb-16' />

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'
        >
          {skills.map((skill, index) => (
            <motion.div
              key={`${skill.category}-${skill.name}-${index}`}
              variants={itemVariants}
            >
              <SkillBadge skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillBadge({ skill }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative p-6 rounded-2xl text-center cursor-default transition-all duration-300 group overflow-hidden
        ${
          skill.level === "expert"
            ? "bg-gradient-to-br from-sky-400 to-sky-900"
            : skill.level === "intermediate"
            ? "bg-gradient-to-br from-purple-400 to-purple-900"
            : "bg-gradient-to-br from-gray-800 to-gray-900"
        }
      `}
    >
      {/* Skill icon (you would need to add icons to your skill data) */}
      {skill.icon && (
        <div className='text-4xl mb-3 opacity-90'>{skill.icon}</div>
      )}

      {/* Skill name with glow effect */}
      <div
        className={`text-lg font-semibold mb-1 ${
          skill.level === "expert"
            ? "text-[#ffffff]"
            : skill.level === "intermediate"
            ? "text-[#ffffff]"
            : "text-[#ffffff]"
        }`}
      >
        {skill.name}
      </div>

      {/* Category badge with animation */}
      {skill.category && (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className='inline-block px-3 py-1 text-xs font-medium rounded-full mt-2 
            bg-white/5 backdrop-blur-sm border border-white/10'
        >
          {skill.category}
        </motion.div>
      )}

      {/* Level indicator dots */}
      <div className='flex justify-center mt-3 space-x-1'>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i <
              (skill.level === "expert"
                ? 3
                : skill.level === "intermediate"
                ? 2
                : 1)
                ? skill.level === "expert"
                  ? "bg-sky-400"
                  : skill.level === "intermediate"
                  ? "bg-purple-400"
                  : "bg-gray-400"
                : "bg-white/10"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
