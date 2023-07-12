import React from 'react';
import { TbBrandGithub } from 'react-icons/tb';
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from 'react-icons/sl';

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-row items-center justify-center gap-4 text-primary-primary-text ">
      <div className="flex flex-col gap-4">
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
        <a
          href="https://www.facebook.com/hfujii13"
          target="_blank">
          <span className="w-10 h-10 text-xl bg-primary-pink rounded-full inline-flex items-center justify-center hover:text-primary-purple cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialFacebook />
          </span>
        </a>
        <a
          href="https://www.instagram.com/13hrk10"
          target="_blank">
          <span className="w-10 h-10 text-xl bg-primary-pink rounded-full inline-flex items-center justify-center hover:text-primary-purple cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </a>
        <div className="w-[2px] h-32 bg-primary-purple self-center"></div>
      </div>
    </div>
  );
};

export default LeftSide;
