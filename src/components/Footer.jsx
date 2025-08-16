import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-light mt-10 py-6 text-gray-400">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        {/* Logo / Brand */}
        <div className="text-lg font-bold text-white">
          Movie<span className="text-red-500">App</span>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          {/*<a href="#" className="transition hover:text-white">*/}
          {/*  Home*/}
          {/*</a>*/}
          {/*<a href="#" className="transition hover:text-white">*/}
          {/*  Movies*/}
          {/*</a>*/}
          {/*<a href="#" className="transition hover:text-white">*/}
          {/*  About*/}
          {/*</a>*/}
          {/*<a href="#" className="transition hover:text-white">*/}
          {/*  Contact*/}
          {/*</a>*/}
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 md:text-right">
          © {new Date().getFullYear()} MovieApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
