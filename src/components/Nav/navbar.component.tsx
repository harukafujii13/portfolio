'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';

export default function Navbar() {
  const ref = useRef<string | any>('');
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });

    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('active');
    });

    e.currentTarget.classList.add('active');
  };

  return (
    <div className="w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-bg-light px-4 font-inter">
      <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <img
            className="w-[4.5rem]"
            src={'/img/logo.svg'}
            alt="logo"
          />
        </motion.div>

        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[1.1rem] gap-7">
            <Link
              href="#home"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium hover:text-primary-purple cursor-pointer duration-300 nav-link font-bold">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}>
                Home
              </motion.li>
            </Link>

            <Link
              href="#about"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium hover:text-primary-purple cursor-pointer duration-300 nav-link font-bold">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0.1, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}>
                <span className="text-primary-purple">01.</span> About
              </motion.li>
            </Link>

            <Link
              href="#skills"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium hover:text-primary-purple cursor-pointer duration-300 nav-link font-bold">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0.1, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}>
                <span className="text-primary-purple">02.</span> Skills
              </motion.li>
            </Link>

            <Link
              href="#Works"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium hover:text-primary-purple cursor-pointer duration-300 nav-link font-bold">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0.1, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}>
                <span className="text-primary-purple">03.</span> Works
              </motion.li>
            </Link>

            <Link
              href="#Contact"
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium hover:text-primary-purple cursor-pointer duration-300 nav-link font-bold">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0.1, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}>
                <span className="text-primary-purple">04.</span> Contact
              </motion.li>
            </Link>
          </ul>

          <a
            href="#"
            target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-2 rounded-md text-primary-purple text-[1.1rem] border border-primary-purple hover:bg-primary-green duration-300 font-bold">
              Resume
            </motion.button>
          </a>
        </div>

        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-primary-purple cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-primary-purple inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-primary-purple inline-flex transform trancelate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-primary-purple inline-flex transform trancelate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div>
  );
}
