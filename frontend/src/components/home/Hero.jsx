import { useEffect, useState } from 'react';
import { contentAPI } from '../../api/api';
import { MapPin } from 'lucide-react';

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
      if (res.data) setHero(res.data);
    }).catch(err => console.error("Using default content"));
  }, []);

  return (
    <section className="relative w-full bg-white flex flex-col md:flex-row min-h-[600px]">
      {/* Left Side: Image and Overlay Text */}
      <div className="w-full md:w-1/2 relative p-4 md:p-8">
        <div className="absolute top-12 left-12 z-10 max-w-md">
          <h2 className="text-[#1a3a3a] text-3xl md:text-4xl font-bold leading-tight uppercase tracking-tight mb-2">
            {hero.main_heading}
          </h2>
          <p className="text-gray-600 font-bold text-xs md:text-sm tracking-wide bg-white/80 backdrop-blur-sm inline-block px-2 py-1">
            {hero.sub_heading}
          </p>
        </div>
        
        <div className="w-full h-[400px] md:h-[550px] rounded-sm overflow-hidden shadow-lg mt-16">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000" 
            alt="Vighnaharta Infinity Building" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Side: Branding & Pricing */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12 text-center">
        {/* Branding Section */}
        <div className="mb-10 w-full flex flex-col items-center">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2913/2913520.png" 
            alt="Tree Logo" 
            className="w-16 mb-2 opacity-70 grayscale" 
          />
          <p className="text-gray-400 text-sm tracking-[0.4em] uppercase mb-1">Vighnaharta</p>
          <h1 className="text-5xl md:text-6xl font-serif text-slate-800 tracking-widest uppercase">Infinity</h1>
          
          {/* Decorative Divider with Diamond */}
          <div className="flex items-center w-full max-w-xs mt-6">
            <div className="flex-1 h-[1px] bg-slate-300"></div>
            <div className="mx-2 text-slate-400 text-xs">◆</div>
            <div className="flex-1 h-[1px] bg-slate-300"></div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="flex flex-row items-center justify-center w-full gap-8 md:gap-12">
          {/* 1 BHK */}
          <div className="text-center">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-1">Smart 1 BHK</h3>
            <div className="relative inline-block">
              <span className="text-xs text-slate-400">@ 74.99 Lacs</span>
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500 -rotate-12"></div>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">₹ {hero.one_bhk_price}</p>
            <p className="text-[10px] text-gray-500 uppercase font-semibold">onwards</p>
          </div>

          {/* Vertical Divider */}
          <div className="w-[1px] h-20 bg-slate-200"></div>

          {/* 2 BHK */}
          <div className="text-center">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-1">Premium 2 BHK</h3>
            <div className="relative inline-block">
              <span className="text-xs text-slate-400">@ 1.05 Cr</span>
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500 -rotate-12"></div>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">₹ {hero.two_bhk_price}</p>
            <p className="text-[10px] text-gray-500 uppercase font-semibold">onwards</p>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-12 w-full flex flex-col items-center">
          <div className="flex items-center w-full max-w-xs mb-6">
            <div className="flex-1 h-[1px] bg-slate-300"></div>
            <div className="mx-2 text-slate-400 text-xs">◆</div>
            <div className="flex-1 h-[1px] bg-slate-300"></div>
          </div>

          <div className="flex items-start gap-2 justify-center max-w-sm">
            <MapPin className="text-red-600 w-5 h-5 shrink-0" />
            <span className="text-[11px] font-bold text-slate-700 leading-tight tracking-tight text-center">
              {hero.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}