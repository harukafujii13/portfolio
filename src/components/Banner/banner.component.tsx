import React from 'react';
import { motion } from 'framer-motion';
import TypeWriter from '../TypeWriter/typeWriter.component';

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer max-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 font-inter tracking-wide">
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-base mdl:text-lg lg:text-2xl font-inter tracking-wide text-primary-purple font-extrabold">
        Hi, I&apos;m
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-[2rem] lgl:text-7xl mdl:text-6xl  font-tinter font-extrabold flex flex-col">
        HARUKA FUJII.
        <span className="text-[1.5rem] lg:text-5xl mdl:text-4xl  text-primary-text mt-2 lgl: mt-4 font-semibold">
          Creative&nbsp;
          <span className="text-primary-purple text-[1.5rem] lg:text-5xl mdl:text-4xl  font-black">
            Software Engineer&nbsp;
          </span>
          <br />
          specializing in Front-End.
        </span>
      </motion.h1>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-row font-montserrat">
        <h1 className="text-[1rem] lgl:text-2xl font-bold xs:text-[0.8rem] sm:text-[0.8rem]">
          I am
        </h1>
        <TypeWriter />
      </motion.div>
    </section>
  );
};

export default Banner;
