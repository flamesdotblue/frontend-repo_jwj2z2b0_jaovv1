import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} Orbital Stays. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#hotels" className="hover:text-white">Hotels</a>
          <a href="#rooms" className="hover:text-white">Rooms</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
