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
      <div className="flex flex-col gap-4 items-center justify-center lgl:mt-[8rem] mdl:mt-[5rem] mt-[3rem]">
        <h2 className="font-inter lgl:text-3xl mdl:text-3xl text-2xl text-primary-purple font-bold flex flex tems-center tracking-wide">
          Get In Touch
        </h2>
        <p className="max-w-[600px] text-center text-primary-text font-inter text-lg">
          Interested in discussing a project or want to know more about my work?
          Let's talk! I'm always open to new opportunities and collaborations.
        </p>
        <a href="mailto:harukafujii.dev@gmail.com">
          <button
            className="w-40 h-14 border border-primary-purple mt-6 font-inter text-lg font-extrabold
          text-primary-purple tracking-wider rounded-md hover:bg-primary-green duration-300">
            Say Hello
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;