import React from 'react';
import { Star } from 'lucide-react';

const hotels = [
  {
    id: 'aurora-station',
    name: 'Aurora Station',
    orbit: 'Low Earth Orbit',
    rating: 4.9,
    price: 1899,
    image:
      'https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'luna-dome',
    name: 'Luna Dome Resort',
    orbit: 'Sea of Tranquility, Moon',
    rating: 4.8,
    price: 2499,
    image:
      'https://images.unsplash.com/photo-1544551763-7ef03887f24e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'nebula-haven',
    name: 'Nebula Haven',
    orbit: 'Geostationary Orbit',
    rating: 4.7,
    price: 1690,
    image:
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'mars-lookout',
    name: 'Mars Lookout Suites',
    orbit: 'Areostationary Orbit, Mars',
    rating: 4.9,
    price: 3290,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
];

const Rating = ({ value }) => {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`f-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
      {half && <Star className="h-4 w-4 fill-yellow-400/50 text-yellow-400/50" />}
    </div>
  );
};

const HotelCard = ({ hotel }) => (
  <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur transition hover:translate-y-[-2px] hover:bg-white/10">
    <div className="relative aspect-[16/10] w-full overflow-hidden">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur">
        {hotel.orbit}
      </div>
    </div>
    <div className="space-y-3 p-5 text-white">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{hotel.name}</h3>
          <div className="mt-1 text-sm text-white/70">{hotel.orbit}</div>
        </div>
        <Rating value={hotel.rating} />
      </div>
      <div className="flex items-center justify-between">
        <div className="text-white">
          <span className="text-xl font-semibold">${hotel.price}</span>
          <span className="text-sm text-white/60"> / night</span>
        </div>
        <button className="rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-purple-600/30 transition hover:bg-purple-500">
          Book now
        </button>
      </div>
    </div>
  </div>
);

const HotelList = () => {
  return (
    <section id="hotels" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Featured Space Hotels</h2>
          <p className="mt-2 text-white/70">A curated selection of cosmic stays ready for liftoff.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {hotels.map((h) => (
          <HotelCard key={h.id} hotel={h} />)
        )}
      </div>
    </section>
  );
};

export default HotelList;
