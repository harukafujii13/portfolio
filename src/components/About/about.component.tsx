import React from 'react';
import SectionTitle from '../SectionTitle/sectionTitle.component';

function About() {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
      <SectionTitle
        title="About Me"
        titleNo="01"
      />
      <div className="flex flex-col lgl:flex-row lgl:gap-16 mdl:gap-8 gap-8 lgl:mt-0 mt-4 flex-col-reverse items-center">
        <div className="w-full lgl:w-2/3 lgl:text-lg mdl:text-lg text-base text-primary-text font-medium flex flex-col font-inter tracking-wide p-2 lgl:p-0 ">
          <p>
            I am a Full-Stack Web Developer specializing in
            <span className="text-primary-purple font-extrabold lgl:text-xl mdl:text-xl text-lg">
              Typescript
            </span>
            ,&nbsp;
            <span className="text-primary-purple font-extrabold lgl:text-xl mdl:text-xl text-lg">
              React
            </span>
            , and&nbsp;
            <span className="text-primary-purple font-extrabold lgl:text-xl mdl:text-xl text-lg">
              Next.js
            </span>
            .
          </p>
          <p>
            I am always on the lookout for opportunities to acquire new
            knowledge and enhance my skill set. Passionate about clean and
            efficient code, I prioritize creating solutions that can be easily
            understood and integrated by my team members, thereby enhancing
            overall productivity and project success. I firmly believe that my
            dedication not only fuels my personal growth, but also significantly
            contributes to a project&apos;s performance.
          </p>
        </div>
        <div className="w-[320px] lgl:w-1/3 h-80 relative group flex justify-center items-center">
          <div className="absolute w-full h-80 -left-3 lgl:-left-6 -top-6 rounded-lg flex justify-center items-center">
            <div className="w-full h-full relative z-20 flex justify-center items-center">
              <img
                className="rounded-lg h-full w-auto object-cover"
                src={'/img/portfolio.svg'}
                alt="portfolioImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="max-lgl:-mr-10 inline-flex w-full h-full border-2  border-primary-purple rounded-md group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
