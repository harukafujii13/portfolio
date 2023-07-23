'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { TbBrandGithub } from 'react-icons/tb';
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from 'react-icons/sl';

export default function Navbar() {
  const ref = useRef<string | any>('');
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
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

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }

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

        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-primary-purple cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-primary-purple inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-primary-purple inline-flex transform trancelate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-primary-purple inline-flex transform trancelate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-2/5 h-full overflow-y-scroll scrollbarHide bg-[#ECE7EE] flex flex-col items-center px-4 py-10 relative">
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-primary-text cursor-pointer hover:text-primary-purple absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-7 items-center">
                  <Link
                    href="#home"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium hover:text-primary-purple cursor-pointer duration-300 nav-link font-bold">
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1,
                        ease: 'easeIn',
                      }}>
                      Home
                    </motion.li>
                  </Link>

                  <Link
                    href="#about"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium hover:text-primary-purple cursor-pointer duration-300 nav-link font-bold">
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.2,
                        ease: 'easeIn',
                      }}>
                      <span className="text-primary-purple">01.</span> About
                    </motion.li>
                  </Link>

                  <Link
                    href="#skills"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium hover:text-primary-purple cursor-pointer duration-300 nav-link font-bold">
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.3,
                        ease: 'easeIn',
                      }}>
                      <span className="text-primary-purple">02.</span> Skills
                    </motion.li>
                  </Link>

                  <Link
                    href="#Works"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium hover:text-primary-purple cursor-pointer duration-300 nav-link font-bold">
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.4,
                        ease: 'easeIn',
                      }}>
                      <span className="text-primary-purple">03.</span> Works
                    </motion.li>
                  </Link>

                  <Link
                    href="#Contact"
                    onClick={handleScroll}
                    className="flex items-center gap-1 font-medium hover:text-primary-purple cursor-pointer duration-300 nav-link font-bold">
                    <motion.li
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.5,
                        ease: 'easeIn',
                      }}>
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
                    transition={{ delay: 0.6, ease: 'easeIn' }}
                    className="w-32 h-10 rounded-md text-primary-purple text-[13px] border border-primary-purple hover:bg-primary-green duration-300">
                    Resume
                  </motion.button>
                </a>
                <div className="flex flex-row gap-4">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: 'easeIn' }}
                    href="https://github.com/harukafujii13"
                    target="_blank">
                    <span className="w-10 h-10 text-xl bg-primary-pink rounded-full inline-flex items-center justify-center hover:text-primary-purple cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.85, ease: 'easeIn' }}
                    href="https://www.linkedin.com/in/hfujii13/"
                    target="_blank">
                    <span className="w-10 h-10 text-xl bg-primary-pink rounded-full inline-flex items-center justify-center hover:text-primary-purple cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialLinkedin />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, ease: 'easeIn' }}
                    href="https://www.facebook.com/hfujii13"
                    target="_blank">
                    <span className="w-10 h-10 text-xl bg-primary-pink rounded-full inline-flex items-center justify-center hover:text-primary-purple cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialFacebook />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.95, ease: 'easeIn' }}
                    href="https://www.instagram.com/13hrk10"
                    target="_blank">
                    <span className="w-10 h-10 text-xl bg-primary-pink rounded-full inline-flex items-center justify-center hover:text-primary-purple cursor-pointer hover:-translate-y-2 transition-all duration-300">
                      <SlSocialInstagram />
                    </span>
                  </motion.a>
                </div>
                <div className="flex gap-4">
                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, ease: 'easeIn' }}
                    className="text-sm w-72 tracking-widest text-primary-text hover:text-primary-purple text-center mt-4"
                    href="mailto:harukafujii.dev@gmail.com">
                    harukafujii.dev@gmail.com
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
