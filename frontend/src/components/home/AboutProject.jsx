import { useEffect, useState } from 'react';
import { contentAPI } from '../../api/api';
import { Download } from 'lucide-react';

export default function AboutProject() {
  const [about, setAbout] = useState({
    title: 'About Project',
    description: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchAbout = async () => {
      try {
        const res = await contentAPI.getAboutProject();
        if (mounted && res?.data) {
          setAbout({
            title: res.data.title || 'About Project',
            description: res.data.description || ''
          });
        }
      } catch (err) {
        console.error('Failed to load About Project data:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchAbout();
    return () => { mounted = false; };
  }, []);

  if (loading) return <div className="py-20 bg-[#f4f9f7] animate-pulse h-[500px]" />;

  return (
    <section id="about" className="py-24 bg-[#e9f7f2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: EXACT Screenshot Circle Layout */}
          <div className="relative h-[450px] md:h-[550px] w-full flex items-center justify-center">
            
            {/* 1. Main Central Large Circle */}
            <div className="relative w-64 h-64 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-[10px] border-white shadow-xl z-10">
              <img
                src="https://images.unsplash.com/photo-1600607687940-47a04b629571?q=80&w=1000&auto=format&fit=crop"
                alt="Outdoor Terrace"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* 2. Top Left Circle - Overlapping */}
            <div className="absolute top-0 left-0 md:left-4 w-32 h-32 md:w-56 md:h-56 rounded-full overflow-hidden border-[8px] border-white shadow-2xl z-20">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
                alt="Lobby Area"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* 3. Bottom Right Circle - Small Overlap */}
            <div className="absolute bottom-4 right-4 md:right-20 w-28 h-28 md:w-44 md:h-44 rounded-full overflow-hidden border-[6px] border-white shadow-2xl z-30">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
                alt="Gym Area"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Background thin circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-emerald-200/50 rounded-full -z-0"></div>
          </div>

          {/* Right Content Side */}
          <div className="flex flex-col items-start px-4">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a3a3a] mb-8 font-bold">
              {about.title}
            </h2>
            
            <div className="text-gray-600 leading-relaxed space-y-6 text-base md:text-lg max-w-xl font-medium">
              {about.description ? (
                <p className="whitespace-pre-line">{about.description}</p>
              ) : (
                <>
                  <p>
                    At Vighnaharta Enclave, every detail reflects the grandest gesture of 
                    life in the most authentic and desirable home. Guided by a humanist 
                    approach, the architecture places people at the heart of the space. 
                    Built on the foundations of comfort, it evokes a true sense of freedom, 
                    protection, and belonging.
                  </p>
                  <p className="text-slate-500 italic">
                    "The moment I entered the house, it felt welcomed" — this feeling 
                    defines the privilege Vighnaharta Enclave offers. Thoughtfully 
                    designed with crafted amenities and timeless choices, the space 
                    resonates with the warmth and authenticity that you and your family 
                    truly deserve. It's the place your soul has long been searching for.
                  </p>
                </>
              )}
            </div>

            <button className="mt-10 bg-gradient-to-r from-[#91c141] to-[#add666] hover:from-[#7ba536] hover:to-[#91c141] text-white px-8 py-3.5 rounded-lg font-bold transition-all shadow-md flex items-center gap-3">
              Download Brochure
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}