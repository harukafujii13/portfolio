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
      <div>
        <div className="flex flex-col lgl:flex-row gap-16"></div>
        <div className="w-full lgl:w-2/3 text-base text-primary-text font-medium flex flex-col gap-4"></div>
      </div>
    </section>
  );
}

export default About;
