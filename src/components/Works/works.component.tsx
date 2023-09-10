import React from 'react';
import SectionTitle from '../SectionTitle/sectionTitle.component';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { RxOpenInNewWindow } from 'react-icons/rx';

const Works = () => {
  return (
    <section
      id="Works"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 bg-light">
      <SectionTitle
        title="Works"
        titleNo="02"
      />
      {/* Projects container */}
      <div className="w-full flex flex-col items-center lgl:gap-28 mdl:gap-14 gap-10 mt-10 px-5 md:px-0">
        {/* Project one*/}
        <div className="flex flex-col lgl:gap-6 mdl:gap-4 gap-2">
          <div className="text-2xl font-extrabold text-primary-purple font-montserrat flex justify-center">
            Cafe Hopping
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center lgl:gap-6 mdl:gap-6 gap-4">
            <a
              className="w-full lg:w-1/2 h-auto relative group"
              href="https://cafe-hopping.vercel.app/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="w-full h-full object-cover rounded-md shadow-lg"
                src={'/img/cafe_hopping.png'}
                alt="work"
              />
            </a>
            <div className="w-full lg:w-1/2 flex flex-col lgl:gap-6 mdl:gap-4 gap-2">
              <p className="bg-primary-pink text-sm md:text-base p-2 md:p-6 rounded-md font-inter bg-opacity-70">
                Discover and engage with cafes nearby or in a specified area
                using the Cafe Finder app. Save your favorite spots with the
                bookmark feature, see the most-liked cafes with the like
                feature, and check out reviews to find the perfect spot.
                It&apos;s a cafe lover&apos;s essential tool.
              </p>
              <ul className="text-xs md:text-sm font-inter tracking-wide flex flex-wrap gap-2 justify-start text-primary-text">
                <li>#Nextjs</li>
                <li>#next-auth</li>
                <li>#PostgreSQL</li>
                <li>#Prisma</li>
                <li>#TypeScript</li>
                <li>#Google Maps API</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/harukafujii13/CafeHopping_App.git"
                  className="hover:text-primary-purple duration-300"
                  target="_blank"
                  rel="noopener noreferrer">
                  <TbBrandGithubFilled />
                </a>
                <a
                  href="https://cafe-hopping.vercel.app/"
                  className="hover:text-primary-purple duration-300"
                  target="_blank"
                  rel="noopener noreferrer">
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Project two*/}
        <div className="flex flex-col lgl:gap-6 mdl:gap-4 gap-2">
          <div className="text-2xl font-extrabold text-primary-purple font-montserrat flex justify-center">
            Money Note
          </div>
          <div className="w-full flex flex-col lg:flex-row-reverse items-center lgl:gap-6 mdl:gap-6 gap-4">
            <a
              className="w-full lg:w-1/2 h-auto relative group"
              href="#"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="w-full h-full object-cover rounded-md shadow-lg"
                src={'/img/money_note.png'}
                alt="work"
              />
            </a>
            <div className="w-full lg:w-1/2 flex flex-col lgl:gap-6 mdl:gap-4 gap-2">
              <p className="bg-primary-green text-sm md:text-base p-2 md:p-6 rounded-md font-inter bg-opacity-70">
                This financial management app is your personal tool for easy and
                efficient tracking of your financial transactions. Quickly log,
                edit, or delete entries of your incomes and expenses, and always
                have a clear view of your total balance right on the homepage.
                Plus, make the app truly yours by customizing your profile on
                the profile page.
              </p>
              <ul className="text-xs md:text-sm font-inter tracking-wide flex flex-wrap gap-2  justify-start text-primary-text">
                <li>#React</li>
                <li>#RTK</li>
                <li>#MongoDB</li>
                <li>#Express</li>
                <li>#JWT</li>
                <li>#tailwind</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/harukafujii13/MoneyNote_App.git"
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
        {/* Project3 */}
        <div className="flex flex-col lgl:gap-6 mdl:gap-4 gap-2">
          <div className="text-2xl font-extrabold text-primary-purple font-montserrat flex justify-center">
            Teddies vs Monsters
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center lgl:gap-6 mdl:gap-6 gap-4">
            <a
              className="w-full lg:w-1/2 h-auto relative group"
              href="https://teddies-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="w-full h-full object-cover rounded-md shadow-lg"
                src={'/img/teddy.png'}
                alt="work"
              />
            </a>
            <div className="w-full lg:w-1/2 flex flex-col lgl:gap-6 mdl:gap-4 gap-2">
              <p className="bg-primary-pink text-sm md:text-base p-2 md:p-6 rounded-md font-inter bg-opacity-70">
                As part of a collaborative team project, we developed a gaming
                website for a real client. The site not only offers a platform
                where users can purchase gaming-related products but also serves
                as a hub for all essential company information.
              </p>
              <ul className="text-xs md:text-sm font-inter tracking-wide flex flex-wrap gap-2 justify-start text-primary-text">
                <li>#Nextjs</li>
                <li>#strapi</li>
                <li>#stripe</li>
                <li>#PostgreSQL</li>
                <li>#Cloudinary</li>
                <li>#docker</li>
                <li>#TypeScript</li>
                <li>#Storybook</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/jun-tsuno/teddies_frontend.git"
                  className="hover:text-primary-purple duration-300"
                  target="_blank"
                  rel="noopener noreferrer">
                  <TbBrandGithubFilled />
                </a>
                <a
                  href="https://teddies-frontend.vercel.app/"
                  className="hover:text-primary-purple duration-300"
                  target="_blank"
                  rel="noopener noreferrer">
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lgl:gap-6 mdl:gap-4 gap-2">
          <h3 className="text-2xl font-extrabold text-primary-purple font-montserrat flex justify-center">
            Aurora Forecast
          </h3>
          <div className="w-full flex flex-col lg:flex-row-reverse items-center lgl:gap-6 mdl:gap-6 gap-4">
            <a
              className="w-full lg:w-1/2 h-auto relative group"
              href="https://aurora-forecast.vercel.app/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                className="w-full h-full object-cover rounded-md shadow-lg"
                src={'/img/aurora.png'}
                alt="work"
              />
            </a>
            <div className="w-full lg:w-1/2 flex flex-col lgl:gap-6 mdl:gap-4 gap-2">
              <p className="bg-primary-green text-sm md:text-base p-2 md:p-6 rounded-md font-inter bg-opacity-70">
                With this aurora forecast app, users can search for a specific
                area and instantly see the current likelihood of witnessing the
                aurora in that location.
              </p>
              <ul className="text-xs md:text-sm font-inter tracking-wide flex flex-wrap gap-2 justify-start text-primary-text">
                <li>#React</li>
                <li>#Redux</li>
                <li>#Mapbox</li>
                <li>#API</li>
                <li>#tailwind</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  href="https://github.com/harukafujii13/Aurora_Forecast.git"
                  className="hover:text-primary-purple duration-300"
                  target="_blank"
                  rel="noopener noreferrer">
                  <TbBrandGithubFilled />
                </a>
                <a
                  href="https://aurora-forecast.vercel.app/"
                  className="hover:text-primary-purple duration-300"
                  target="_blank"
                  rel="noopener noreferrer">
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
