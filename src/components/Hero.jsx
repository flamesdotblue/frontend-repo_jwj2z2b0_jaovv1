import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center text-white md:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-purple-300" />
          <span className="text-xs font-medium tracking-wide text-purple-200/90">
            Orbital stays are now boarding
          </span>
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white drop-shadow md:text-6xl">
          Stay Among The Stars
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          Book luxurious cabins and suites in our curated collection of space hotels.
          Wake to planetary sunrises, drift to sleep under cosmic skylines.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#hotels"
            className="inline-flex items-center justify-center rounded-md bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-500"
          >
            Explore Hotels
          </a>
          <a
            href="#rooms"
            className="inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Browse Rooms
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
