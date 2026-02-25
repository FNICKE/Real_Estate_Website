import { useEffect, useState } from 'react';
import { contentAPI } from '../../api/api';

export default function ConstructionUpdates() {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchUpdates = async () => {
      try {
        const response = await contentAPI.getConstructionUpdates();
        if (mounted) {
          const data = Array.isArray(response.data) ? response.data : [];
          setUpdates(data);
          setError(null);
        }
      } catch (err) {
        console.error('Failed to load construction updates:', err);
        if (mounted) {
          setError('Unable to load construction updates right now.');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchUpdates();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Construction Updates</h2>
          <p className="opacity-80">Loading latest updates...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Construction Updates</h2>
          <p className="text-red-300 font-medium">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Construction Updates</h2>
        <p className="text-center opacity-80 mb-12">Real-time progress of your dream home</p>

        {updates.length === 0 ? (
          <div className="text-center opacity-80 py-12">
            No updates available at the moment.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {updates.map((u, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
              >
                <div className="text-emerald-400 text-sm font-medium uppercase tracking-wide">
                  {u.status || 'Update'}
                </div>
                <h3 className="text-2xl font-semibold mt-4">{u.title || 'Untitled Update'}</h3>
                <p className="mt-6 opacity-80 text-sm leading-relaxed">
                  {u.description || 'No description available.'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}