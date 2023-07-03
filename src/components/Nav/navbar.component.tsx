'use client';

export default function Navbar() {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bg-light px-4">
      <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between">
        <div>
          <img
            className="w-14"
            src={'/img/logo.svg'}
            alt="login page picture"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}
