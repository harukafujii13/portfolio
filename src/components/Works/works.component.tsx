import React from 'react';
import SectionTitle from '../SectionTitle/sectionTitle.component';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { RxOpenInNewWindow } from 'react-icons/rx';

const Works = () => {
  return (
    <section
      id="works"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 bg-light">
      <SectionTitle
        title="Works"
        titleNo="03"
      />
      {/* Projects container */}
      <div className="w-full flex flex-col items-center gap-28 mt-10 px-5 md:px-0">
        {/* Project one*/}
        <div className="w-full flex flex-col lg:flex-row items-center gap-6">
          <a
            className="w-full lg:w-1/2 h-auto relative group mb-6 lg:mb-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="w-full h-full object-cover rounded-md shadow-lg"
              src={'/img/work.svg'}
              alt="work"
            />
          </a>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h3 className="text-2xl font-extrabold text-primary-purple font-montserrat">
              Project Name
            </h3>
            <p className="bg-primary-pink text-sm md:text-base p-2 md:p-6 rounded-md font-inter">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              rem quia obcaecati et provident cum, fugiat numquam soluta,
              perspiciatis magnam non nulla eos tempore expedita at, asperiores
              ea veritatis eum.
            </p>
            <ul className="text-xs md:text-sm font-inter tracking-wide flex flex-wrap gap-2 md:gap-5 justify-start text-primary-text">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Tailwind</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="#"
                className="hover:text-primary-purple duration-300"
                target="_blank"
                rel="noopener noreferrer">
                <TbBrandGithubFilled />
              </a>
              <a
                href="#"
                className="hover:text-primary-purple duration-300"
                target="_blank"
                rel="noopener noreferrer">
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* Project two*/}
        <div className="w-full flex flex-col lg:flex-row-reverse items-center gap-6 mt-10">
          <a
            className="w-full lg:w-1/2 h-auto relative group mb-6 lg:mb-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="w-full h-full object-cover rounded-md shadow-lg"
              src={'/img/work.svg'}
              alt="work"
            />
          </a>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h3 className="text-2xl font-extrabold text-primary-purple font-montserrat">
              Project Name
            </h3>
            <p className="bg-primary-green text-sm md:text-base p-2 md:p-6 rounded-md font-inter">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              rem quia obcaecati et provident cum, fugiat numquam soluta,
              perspiciatis magnam non nulla eos tempore expedita at, asperiores
              ea veritatis eum.
            </p>
            <ul className="text-xs md:text-sm font-inter tracking-wide flex flex-wrap gap-2 md:gap-5 justify-start text-primary-text">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Tailwind</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="#"
                className="hover:text-primary-purple duration-300"
                target="_blank"
                rel="noopener noreferrer">
                <TbBrandGithubFilled />
              </a>
              <a
                href="#"
                className="hover:text-primary-purple duration-300"
                target="_blank"
                rel="noopener noreferrer">
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* Project3 */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-6">
          <a
            className="w-full lg:w-1/2 h-auto relative group mb-6 lg:mb-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="w-full h-full object-cover rounded-md shadow-lg"
              src={'/img/work.svg'}
              alt="work"
            />
          </a>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h3 className="text-2xl font-extrabold text-primary-purple font-montserrat">
              Project Name
            </h3>
            <p className="bg-primary-pink text-sm md:text-base p-2 md:p-6 rounded-md font-inter">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              rem quia obcaecati et provident cum, fugiat numquam soluta,
              perspiciatis magnam non nulla eos tempore expedita at, asperiores
              ea veritatis eum.
            </p>
            <ul className="text-xs md:text-sm font-inter tracking-wide flex flex-wrap gap-2 md:gap-5 justify-start text-primary-text">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Tailwind</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="#"
                className="hover:text-primary-purple duration-300"
                target="_blank"
                rel="noopener noreferrer">
                <TbBrandGithubFilled />
              </a>
              <a
                href="#"
                className="hover:text-primary-purple duration-300"
                target="_blank"
                rel="noopener noreferrer">
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row-reverse items-center gap-6 mt-10">
          <a
            className="w-full lg:w-1/2 h-auto relative group mb-6 lg:mb-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className="w-full h-full object-cover rounded-md shadow-lg"
              src={'/img/work.svg'}
              alt="work"
            />
          </a>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h3 className="text-2xl font-extrabold text-primary-purple font-montserrat">
              Project Name
            </h3>
            <p className="bg-primary-green text-sm md:text-base p-2 md:p-6 rounded-md font-inter">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              rem quia obcaecati et provident cum, fugiat numquam soluta,
              perspiciatis magnam non nulla eos tempore expedita at, asperiores
              ea veritatis eum.
            </p>
            <ul className="text-xs md:text-sm font-inter tracking-wide flex flex-wrap gap-2 md:gap-5 justify-start text-primary-text">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Tailwind</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="#"
                className="hover:text-primary-purple duration-300"
                target="_blank"
                rel="noopener noreferrer">
                <TbBrandGithubFilled />
              </a>
              <a
                href="#"
                className="hover:text-primary-purple duration-300"
                target="_blank"
                rel="noopener noreferrer">
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
