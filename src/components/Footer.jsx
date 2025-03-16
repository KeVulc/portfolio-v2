import { HiPhone, HiMail } from "react-icons/hi";
import { motion } from "framer-motion";

const Footer = ({ footer }) => {
  const iconVariants = {
    hover: { scale: 1.1, rotate: 10 },
    tap: { scale: 0.95 },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <footer className='bg-gray-800 text-gray-300 py-12 px-4'>
      <div className='max-w-4xl mx-auto text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className='text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500 relative'
        >
          Let's Connect
        </motion.h2>
        <div className='flex justify-center space-x-6 mb-6'>
          {footer.phone && (
            <motion.a
              href={`tel:${footer.phone.raw}`}
              className='group flex items-center p-3 rounded-lg backdrop-blur-sm bg-transparent transition-all duration-300'
              aria-label='Phone'
              variants={itemVariants}
              whileHover='hover'
              whileTap='tap'
            >
              <motion.div
                variants={iconVariants}
                className='text-sky-400/90 group-hover:text-purple-500/90 transition-colors duration-300'
              >
                <HiPhone className='w-7 h-7' />
              </motion.div>
              <span className='ml-2 text-sky-400/90 group-hover:text-purple-500/90 font-medium hidden md:inline-block transition-colors'>
                {footer.phone.formatted}
              </span>
            </motion.a>
          )}
          <motion.a
            href={`mailto:${footer.email}`}
            className='group flex items-center p-3 rounded-lg backdrop-blur-sm bg-transparent transition-all duration-300'
            aria-label='Email'
            variants={itemVariants}
            whileHover='hover'
            whileTap='tap'
          >
            <motion.div
              variants={iconVariants}
              className='text-sky-400/90 group-hover:text-purple-500/90 transition-colors duration-300'
            >
              <HiMail className='w-7 h-7' />
            </motion.div>
            <span className='ml-2 text-sky-400/90 group-hover:text-purple-500/90 font-medium hidden md:inline-block transition-colors'>
              Email
            </span>
          </motion.a>
        </div>
        <p className='text-gray-400'>
          © {new Date().getFullYear()} {footer.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
