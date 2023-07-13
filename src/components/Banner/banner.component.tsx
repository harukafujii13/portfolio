import React from 'react';
import { motion } from 'framer-motion';
import TypeWriter from '../TypeWriter/typeWriter.component';

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer max-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 font-inter">
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-[1.7rem] font-inter tracking-wide text-primary-purple font-extrabold">
        Hi, I'm
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-[5rem] lgl:text-6xl font-tinter font-extrabold flex flex-col">
        HARUKA FUJII.{' '}
        <span className="text-[2.5rem] text-primary-text mt-2 lgl: mt-4 font-extrabold">
          Creative{' '}
          <span className="text-primary-purple text-[3rem] font-extrabold">
            Front-end Developer
          </span>{' '}
          <br />
          Based in Vancouver.
        </span>
      </motion.h1>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-row font-montserrat">
        <h1 className="text-[1.5rem] font-bold">I am</h1>
        <TypeWriter />
      </motion.div>
    </section>
  );
};

export default Banner;
