import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypeWriter = () => {
  const [text] = useTypewriter({
    words: [
      'a passionate developer.',
      'constantly expanding my knowledge.',
      'open to exchanging opinions.',
      'good at cooping with stress.',
    ],
    loop: false,
    typeSpeed: 100,
    delaySpeed: 2000,
  });

  return (
    <>
      <span className="xl:pl-[0.4rem] lgl:pl-[0.4rem] lg:pl-[0.4rem] mdl:pl-[0.4rem] sml:pl-[0.4rem] pl-[0.25rem] font-bold text-xs sml:text-base xl:text-2xl lgl:text-xl mdl:text-lg flex items-center">
        {text}
      </span>
      <Cursor cursorBlinking={false} />
    </>
  );
};

export default TypeWriter;
