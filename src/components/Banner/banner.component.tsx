import React from 'react';
import { motion } from 'framer-motion';
import TypeWriter from '../TypeWriter/typeWriter.component';

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer max-auto py-10 mdl:py-24 flex flex-col gap-1 xl:gap-4 lgl:gap-3 mdl:gap-3 mdl:px-10 xl:px-4 font-inter tracking-wide">
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-base mdl:text-lg xl:text-2xl lgl:text-xl font-inter tracking-wide text-primary-purple font-extrabold">
        Hi, I&apos;m
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl xl:text-7xl lgl:text-6xl mdl:text-5xl  font-tinter font-extrabold flex flex-col gap-1 xl:gap-4 lgl:gap-3 mdl:gap-3">
        HARUKA FUJII.
        <div className="flex flex-col items-start xl:gap-2 lgl:gap-1 gap-0">
          <span className="text-xl xl:text-5xl lgl:text-4xl mdl:text-3xl text-primary-text font-semibold">
            Creative&nbsp;
            <span className="text-primary-purple font-black">
              Software Engineer&nbsp;
            </span>
          </span>
          <span className="text-xl xl:text-5xl lgl:text-4xl mdl:text-3xl text-primary-text font-semibold">
            specializing in Front-End.
          </span>
        </div>
      </motion.h1>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-row font-montserrat">
        <h1 className="font-bold text-xs sml:text-base xl:text-2xl lgl:text-xl mdl:text-lg flex items-center">
          I am
        </h1>
        <TypeWriter />
      </motion.div>
    </section>
  );
};

export default Banner;
