import React from 'react';
import { TbBrandGithub } from 'react-icons/tb';
import { SlSocialLinkedin } from 'react-icons/sl';

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-row items-center justify-start gap-4 text-primary-primary-gray">
      <div className="flex flex-col gap-4">
        <a
          href="https://github.com/harukafujii13"
          target="_blank">
          <span className="w-10 h-10 text-xl bg-primary-green rounded-full inline-flex items-center justify-center hover:text-primary-purple cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/hfujii13/"
          target="_blank">
          <span className="w-10 h-10 text-xl bg-primary-green rounded-full inline-flex items-center justify-center hover:text-primary-purple cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>
        <div className="w-[2px] h-32 bg-primary-pink"></div>
      </div>
    </div>
  );
};

export default LeftSide;
