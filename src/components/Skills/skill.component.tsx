import React from 'react';
import SectionTitle from '../SectionTitle/sectionTitle.component';
import SkillIcons from './skillIcons.component';
const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
      {' '}
      <SectionTitle
        title="Skills"
        titleNo="03"
      />
      <SkillIcons />
      <p className="font-inter text-xs sm:text-xs md:text-lg font-medium flex flex-row justify-end text-primary-purple">
        and my journey of learning still continues!
      </p>
    </section>
  );
};

export default Skills;
