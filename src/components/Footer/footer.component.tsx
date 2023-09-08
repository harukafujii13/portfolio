import React from 'react';
import { TbBrandGithub } from 'react-icons/tb';
import { SlSocialLinkedin } from 'react-icons/sl';

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a
        href="https://github.com/harukafujii13"
        target="_blank">
        <span className="w-10 h-10 text-xl bg-primary-pink rounded-full inline-flex items-center justify-center hover:text-primary-purple cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <TbBrandGithub />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/hfujii13/"
        target="_blank">
        <span className="w-10 h-10 text-xl bg-primary-pink rounded-full inline-flex items-center justify-center hover:text-primary-purple cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialLinkedin />
        </span>
      </a>
    </div>
  );
};

export default Footer;
