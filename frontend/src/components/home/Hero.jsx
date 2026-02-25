import { useEffect, useState } from 'react';
import { contentAPI } from '../../api/api';

export default function Hero() {
  const [hero, setHero] = useState({
    main_heading: "THINKING OF A FANTASTIC VICINITY?",
    sub_heading: "20+ PODIUM LUXURIOUS AMENITIES | SPACIOUS BALCONY HOMES",
    one_bhk_price: "69.99 Lacs*",
    two_bhk_price: "96.99 Lacs*",
    location: "BLDG NO. 223/224, CIRCLE - KANNAMWAR NAGAR I, VIKHROLI (EAST)"
  });

  useEffect(() => {
    contentAPI.getHero().then(res => {
      if(res.data) setHero(res.data);
    }).catch(err => console.error("Using default content"));
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-white flex flex-col md:flex-row items-center overflow-hidden">
      {/* Left Side: Image Content */}
      <div className="w-full md:w-1/2 h-full p-6 md:p-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          <img 
            src="/building-render.jpg" 
            alt="Vighnaharta Infinity" 
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <h2 className="text-white text-3xl font-bold leading-tight uppercase tracking-tight">
              {hero.main_heading}
            </h2>
            <p className="text-emerald-400 font-semibold mt-2 tracking-widest text-sm">
              {hero.sub_heading}
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Pricing & Branding */}
      <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col items-center text-center">
        <div className="mb-8">
          <img src="/logo-tree.png" alt="Logo" className="w-20 mx-auto mb-2 opacity-80" />
          <h1 className="text-gray-500 text-lg tracking-[0.3em] uppercase">Vighnaharta</h1>
          <h2 className="text-5xl font-serif text-slate-800 font-light tracking-widest mt-1">INFINITY</h2>
          <div className="w-24 h-px bg-slate-300 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-100 rounded-xl overflow-hidden shadow-sm">
          {/* 1 BHK Box */}
          <div className="p-8 border-r border-slate-100 hover:bg-slate-50 transition-colors">
            <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Smart 1 BHK</p>
            <p className="text-xs line-through text-red-400">@ 74.99 Lacs</p>
            <p className="text-3xl font-bold text-slate-800 mt-1">₹ {hero.one_bhk_price}</p>
            <p className="text-[10px] text-gray-400 uppercase mt-2">onwards</p>
          </div>

          {/* 2 BHK Box */}
          <div className="p-8 hover:bg-slate-50 transition-colors">
            <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-2">Premium 2 BHK</p>
            <p className="text-xs line-through text-red-400">@ 1.05 Cr</p>
            <p className="text-3xl font-bold text-slate-800 mt-1">₹ {hero.two_bhk_price}</p>
            <p className="text-[10px] text-gray-400 uppercase mt-2">onwards</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center">
          <div className="flex items-center gap-2 text-red-600 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-[10px] font-bold tracking-tighter uppercase max-w-[250px]">
              {hero.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}