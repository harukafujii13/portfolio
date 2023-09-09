import React from 'react';
import SectionTitle from '../SectionTitle/sectionTitle.component';

const Contact = () => {
  return (
    <section
      id="Contact"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 ">
      <SectionTitle
        title="Contact"
        titleNo="04"
      />
      <div className="flex flex-col lgl:gap-12 mdl:gap-12 gap-8 items-center justify-center lgl:mt-[8rem] mdl:mt-[5rem] mt-[3rem]">
        <h2 className="font-montserrat lgl:text-5xl mdl:text-3xl text-2xl text-primary-purple font-extrabold flex flex tems-center tracking-wide">
          Get In Touch
        </h2>
        <p className="max-w-[600px] text-center text-primary-text font-inter font-light xl:text-2xl lgl:text-xl mdl:text-base text-sm">
          Interested in discussing a project or want to know more about my work?
          Let&apos;s talk! I&apos;m always open to new opportunities and
          collaborations.
        </p>
        <a href="mailto:harukafujii.dev@gmail.com">
          <button
            className="w-40 h-14 border border-primary-purple font-inter text-lg font-extrabold
          text-primary-purple tracking-wider rounded-md hover:bg-primary-green duration-300">
            Say Hello
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
