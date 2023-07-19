import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiGraphql,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
} from 'react-icons/si';

import { DiNodejsSmall, DiSass } from 'react-icons/di';
import { FaGithub } from 'react-icons/fa';

const icons = [
  { icon: <FaGithub />, name: 'Github' },
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <SiCss3 />, name: 'CSS3' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiRedux />, name: 'Redux' },
  { icon: <SiGraphql />, name: 'GraphQL' },
  { icon: <DiNodejsSmall />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express' },
  { icon: <SiMysql />, name: 'Mysql' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiFirebase />, name: 'Firebase' },
  { icon: <SiTailwindcss />, name: 'TailwindCSS' },
  { icon: <SiBootstrap />, name: 'Bootstrap' },
  { icon: <SiMui />, name: 'MUI' },
  { icon: <DiSass />, name: 'Sass' },
];

const SkillIcons = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
      {icons.map((icon, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center mb-4">
            <div className="text-normal sm:text-lg md:text-2xl mb-3">
              {icon.icon}
            </div>
            <p className="text-sm sm:text-sm md:text-base font-semibold font-inter">
              {icon.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillIcons;
