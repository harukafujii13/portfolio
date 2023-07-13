import React from 'react';

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-[3rem] text-primary-pink">
      <a href="mailto:harukafujii.dev@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-primary-text hover:text-primary-purple font-inter text-[1rem]">
          harukafujii.dev@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-32 bg-primary-purple inline-flex"></span>
    </div>
  );
};

export default RightSide;
