'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bg-light px-4 font-init">
      <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <img
            className="w-[4.5rem]"
            src={'/img/logo2.svg'}
            alt="logo"
          />
        </motion.div>

        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[1rem] gap-7">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-primary-gray hover:text-primary-purple cursor-pointer duration-300 nav-link font-medium">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
                Home
              </motion.li>
            </Link>

            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-primary-gray hover:text-primary-purple cursor-pointer duration-300 nav-link font-medium">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0.1, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}>
                <span className="text-primary-purple">01.</span> About
              </motion.li>
            </Link>

            <Link
              href="#skills"
              className="flex items-center gap-1 font-medium text-primary-gray hover:text-primary-purple cursor-pointer duration-300 nav-link font-medium">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0.1, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}>
                <span className="text-primary-purple">02.</span> Skills
              </motion.li>
            </Link>

            <Link
              href="#Works"
              className="flex items-center gap-1 font-medium text-primary-gray hover:text-primary-purple cursor-pointer duration-300 nav-link font-medium">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0.1, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}>
                <span className="text-primary-purple">03.</span> Works
              </motion.li>
            </Link>

            <Link
              href="#Contact"
              className="flex items-center gap-1 font-medium text-primary-gray hover:text-primary-purple cursor-pointer duration-300 nav-link font-medium">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0.1, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}>
                <span className="text-primary-purple">04.</span> Contact
              </motion.li>
            </Link>
          </ul>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="px-4 py-2 rounded-md text-primary-purple text-[1rem] border border-primary-purple hover:bg-hoverColor duration-300 font-medium">
            Resume
          </motion.button>
        </div>
      </div>
    </div>
  );
}
