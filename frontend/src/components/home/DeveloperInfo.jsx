import { useEffect, useState } from 'react';
import { contentAPI } from '../../api/api';

export default function DeveloperInfo() {
  const [dev, setDev] = useState({});

  useEffect(() => {
    contentAPI.getDeveloper().then(res => setDev(res.data));
  }, []);

  const stats = [
    { label: 'Projects', value: dev.projects },
    { label: 'Built Area', value: dev.built_area },
    { label: 'Ongoing', value: dev.ongoing },
    { label: 'Upcoming', value: dev.upcoming },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">{dev.title || 'About Developer'}</h2>
            <div className="text-lg leading-relaxed text-gray-700">
              {dev.description || 'Vighnaharta Group is more than just a real estate developer...'}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="bg-emerald-50 rounded-3xl p-8 text-center">
                <div className="text-5xl font-bold text-emerald-600">{s.value}</div>
                <div className="mt-3 text-sm uppercase tracking-widest text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}