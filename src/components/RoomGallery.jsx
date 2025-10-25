import React, { useState } from 'react';

const rooms = [
  {
    id: 'cosmic-suite',
    name: 'Cosmic Suite',
    beds: '1 King • 2 Guests',
    view: 'Panoramic galaxy view',
    price: 2499,
    image:
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'nebula-loft',
    name: 'Nebula Loft',
    beds: '2 Queens • 4 Guests',
    view: 'Orion Nebula side',
    price: 2190,
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'orbit-cabin',
    name: 'Orbit Cabin',
    beds: '1 Queen • 2 Guests',
    view: 'Earthrise viewport',
    price: 1690,
    image:
      'https://images.unsplash.com/photo-1547637589-f54c1b1c7f3d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'starlight-pod',
    name: 'Starlight Pod',
    beds: '1 Twin • 1 Guest',
    view: 'Milky Way skylight',
    price: 990,
    image:
      'https://images.unsplash.com/photo-1527030280862-64139fba04ca?q=80&w=1600&auto=format&fit=crop',
  },
];

const RoomGallery = () => {
  const [active, setActive] = useState(rooms[0]);

  return (
    <section id="rooms" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 text-white">
        <h2 className="text-2xl font-semibold md:text-3xl">Choose Your Room</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          From minimalist sleep pods to palatial cosmic suites, pick a room that matches your mission.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Thumbnails */}
        <div className="order-2 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:order-1 lg:col-span-2 lg:grid-cols-2">
          {rooms.map((room) => (
            <button
              key={room.id}
              onClick={() => setActive(room)}
              className={`group relative overflow-hidden rounded-xl border transition ${
                active.id === room.id ? 'border-purple-500' : 'border-white/10 hover:border-white/30'
              }`}
            >
              <img
                src={room.image}
                alt={room.name}
                className="h-28 w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 text-left text-xs font-medium text-white">
                {room.name}
              </div>
            </button>
          ))}
        </div>

        {/* Active Preview */}
        <div className="order-1 overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:order-2 lg:col-span-3">
          <div className="relative aspect-[16/9] w-full">
            <img
              src={active.image}
              alt={active.name}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          <div className="space-y-2 p-6 text-white">
            <h3 className="text-xl font-semibold">{active.name}</h3>
            <div className="text-sm text-white/70">{active.beds} • {active.view}</div>
            <div className="pt-2 text-white">
              <span className="text-2xl font-semibold">${active.price}</span>
              <span className="text-sm text-white/60"> / night</span>
            </div>
            <div className="pt-4">
              <button className="rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-500">
                Reserve this room
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomGallery;
