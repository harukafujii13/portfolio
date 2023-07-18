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
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-lg text-primary-text font-medium flex flex-col gap-4 font-inter tracking-wide">
          <p>
            Hello! My name is Haruka Fujii, and I am a{' '}
            <span className="text-primary-purple font-extrabold text-xl">
              software engineer{' '}
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
            As a software engineer, my goal is to challenge myself by designing
            innovative tools and frameworks that have the potential to improve
            people's lives.
          </p>
        </div>
        <div className="w-full lgl:w-2/3 text-base text-primary-text font-medium flex flex-col gap-4"></div>
      </div>
    </section>
  );
}

export default About;
