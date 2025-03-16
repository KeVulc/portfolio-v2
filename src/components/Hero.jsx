import { FaLinkedin, FaFilePdf, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const iconMap = {
  linkedin: FaLinkedin,
  email: HiMail,
  pdf: FaFilePdf,
  github: FaGithub,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const iconVariants = {
  hover: { scale: 1.1, rotate: 10 },
  tap: { scale: 0.95 },
};

export default function Hero({ title, subtitle, socialLinks }) {
  const [currentPretitleIndex, setCurrentPretitleIndex] = useState(0);
  // const timeoutRef = useRef(null);
  // const lastUpdateRef = useRef(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPretitleIndex(
        (prevIndex) => (prevIndex + 1) % subtitle.pretitle.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [subtitle.pretitle.length]);

  return (
    <section className='relative pt-28 pb-24 px-4 text-center overflow-hidden'>
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute w-96 h-96 bg-gradient-to-r from-[#7cafd1]/30 to-[#b3aae2]/30 rounded-full blur-3xl -top-32 -left-32 animate-pulse' />
        <div className='absolute w-96 h-96 bg-gradient-to-l from-[#7cafd1]/30 to-[#b3aae2]/30 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse' />
      </div>

      <motion.div
        className='max-w-4xl mx-auto relative'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className='text-6xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent mb-8'
        >
          {title}
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className='text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent relative flex items-center justify-center'
        >
          <div className='relative h-8 inline-flex items-center bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent text-center'>
            <AnimatePresence mode='wait' exitBeforeEnter>
              <motion.span
                key={currentPretitleIndex}
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 1 }}
                className='absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap'
              >
                {subtitle.pretitle[currentPretitleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h2>
        <h2 className='ml-2 text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent'>
          {subtitle.posttitle}
        </h2>

        <motion.div
          className='flex justify-center space-x-6 mt-8'
          variants={containerVariants}
        >
          {socialLinks?.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <motion.a
                key={`${link.icon}-${link.text}`}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center p-3 rounded-lg backdrop-blur-sm bg-transparent transition-all duration-300'
                aria-label={link.ariaLabel || link.text}
                variants={itemVariants}
                whileHover='hover'
                whileTap='tap'
              >
                <motion.div
                  variants={iconVariants}
                  className='text-sky-400/90 group-hover:text-purple-500/90 transition-colors duration-300'
                >
                  <Icon className='w-7 h-7' />
                </motion.div>
                <span className='ml-2 text-sky-400/90 group-hover:text-purple-500/90 font-medium hidden md:inline-block transition-colors'>
                  {link.text}
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
