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
      <div className="flex flex-col lgl:flex-row lgl:gap-16 gap-2 lgl:mt-0 mt-4 flex-col-reverse lgl:items-center">
        <div className="w-full lgl:w-2/3 text-lg text-primary-text font-medium flex flex-col gap-4 font-inter tracking-wide">
          <p>
            Hello! My name is Haruka Fujii, and I am a{' '}
            <span className="text-primary-purple font-extrabold text-xl">
              Software Engineer{' '}
            </span>
            based in Vancouver. If I were to describe myself in a single word,
            it would be{' '}
            <span className="text-primary-purple font-extrabold text-xl">
              "adventurous"
            </span>
            .
          </p>
          <p>
            After graduating from university, I worked as a salesperson for a
            Japanese trading company for two years. Seeking new challenges, I
            transitioned into the field of engineering, which brought me to
            Vancouver.
          </p>
          <p>
            I am committed to learning new skills every day, which I believe is
            essential for my growth as an engineer. Currently, I'm rigorously
            learning{' '}
            <span className="text-primary-purple font-extrabold text-xl">
              Typescript
            </span>
            ,{' '}
            <span className="text-primary-purple font-extrabold text-xl">
              React
            </span>
            , and{' '}
            <span className="text-primary-purple font-extrabold text-xl">
              Next.js
            </span>
            , and I genuinely enjoy the process of acquiring new knowledge.
          </p>
          <p>
            As a software engineer, I'm going to challenge myself by designing
            innovative tools and frameworks that have the potential to improve
            people's lives.
          </p>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group flex justify-center items-center">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg flex justify-center items-center">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0 justify-center items-center">
              <img
                className="rounded-lg h-full object-cover"
                src={'/img/portfolio.svg'}
                alt="portfolioImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 rounded-md top-0 left-0 group-hover:bg-transparent duration-300">
                {' '}
                <div className="hidden lgl:inline-flex w-full h-80 border-2 border-primary-green rounded-md group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
