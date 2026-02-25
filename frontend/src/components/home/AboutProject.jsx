import { useEffect, useState } from 'react';
import { contentAPI } from '../../api/api';
import { Download } from 'lucide-react';

export default function AboutProject() {
  const [about, setAbout] = useState({
    title: '',
    description: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchAbout = async () => {
      try {
        const res = await contentAPI.getAboutProject();
        if (mounted) {
          const data = res?.data && typeof res.data === 'object' && !Array.isArray(res.data)
            ? res.data
            : {};
          setAbout({
            title: data.title || '',
            description: data.description || ''
          });
          setError(null);
        }
      } catch (err) {
        console.error('Failed to load About Project data:', err);
        if (mounted) {
          setError('Unable to load project information right now.');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchAbout();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section id="about" className="py-20 bg-[#f4f9f7]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-10 w-48 bg-emerald-200 rounded mb-6"></div>
            <div className="h-4 w-full max-w-lg bg-emerald-100 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-emerald-100 rounded"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-24 bg-[#f4f9f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Overlapping Circular Images (Replicating Screenshot Layout) */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Main Central Image */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[12px] border-white shadow-2xl z-10">
              <img
                src="http://googleusercontent.com/image_collection/image_retrieval/14462919386349806610_0"
                alt="Main Project Building"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            {/* Top Left Circle */}
            <div className="absolute top-0 left-4 md:left-12 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-white shadow-xl z-20">
              <img
                src="http://googleusercontent.com/image_collection/image_retrieval/15581210181109941755_0"
                alt="Balcony Lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom Right Circle */}
            <div className="absolute bottom-4 right-4 md:right-12 w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl z-30">
              <img
                src="http://googleusercontent.com/image_collection/image_retrieval/6897826993407548477_0"
                alt="Interior Lobby"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Accent Decoration (Green Circle) */}
            <div className="absolute -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-emerald-100 rounded-full"></div>
          </div>

          {/* Right Content Side */}
          <div className="flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-8 relative">
              {about.title || 'About Project'}
              <span className="absolute -bottom-3 left-0 w-20 h-1 bg-emerald-500"></span>
            </h2>
            
            <div className="text-gray-600 leading-relaxed space-y-4 text-lg max-w-xl">
              {about.description ? (
                <p>{about.description}</p>
              ) : (
                <>
                  <p>
                    At Vighnaharta Enclave, every detail reflects the grandest gesture of life in the most 
                    authentic and desirable home. Guided by a humanist approach, the architecture places 
                    people at the heart of the space.
                  </p>
                  <p className="italic text-slate-500">
                    "The moment I entered the house, it felt welcomed" - this feeling defines the privilege 
                    Vighnaharta Enclave offers. Built on the foundations of comfort, it evokes a true sense 
                    of freedom and belonging.
                  </p>
                </>
              )}
            </div>

            <button className="group mt-12 flex items-center gap-4 bg-[#91c141] hover:bg-[#7ba536] text-white px-10 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-[#91c141]/30">
              <Download className="w-5 h-5 group-hover:bounce" />
              DOWNLOAD BROCHURE
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}