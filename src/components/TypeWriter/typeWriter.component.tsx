import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypeWriter = () => {
  const [text] = useTypewriter({
    words: [
      'a passionate developer.',
      'constantly expanding my knowledge.',
      'open to exchanging opinions.',
      'good at handling stress.',
    ],
    loop: false,
    typeSpeed: 100,
    delaySpeed: 2000,
  });

  return (
    <>
      <span className="pl-[0.5rem] text-[1rem] lgl:text-2xl font-extrabold">
        {text}
      </span>
      <Cursor cursorBlinking={false} />
    </>
  );
};

export default TypeWriter;
