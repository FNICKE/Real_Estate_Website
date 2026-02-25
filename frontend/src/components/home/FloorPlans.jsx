import { useEffect, useState } from 'react';
import { contentAPI } from '../../api/api';

export default function FloorPlans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchFloorPlans = async () => {
      try {
        const response = await contentAPI.getFloorPlans();
        if (isMounted) {
          setPlans(response.data || []);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError('Unable to load floor plans. Please try again later.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchFloorPlans();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section id="floorplans" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Floor Plans</h2>
          <div className="text-gray-600">Loading floor plans...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="floorplans" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Floor Plans</h2>
          <p className="text-red-600 font-medium">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="floorplans" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Floor Plans</h2>
        <p className="text-center text-gray-600 mb-12">
          Choose your perfect home from our thoughtfully designed layouts
        </p>

        {plans.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No floor plans available at the moment.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={`${plan.plan_type}-${index}`}
                className="bg-white rounded-3xl overflow-hidden shadow-xl transition-transform hover:scale-[1.02]"
              >
                <div className="bg-emerald-600 text-white p-6 text-center">
                  <h3 className="text-2xl font-bold">{plan.plan_type}</h3>
                </div>

                <div className="p-8 text-center">
                  <p className="text-5xl font-bold text-emerald-700">
                    {plan.area}
                  </p>
                  <p className="text-gray-500 mt-2 text-lg">RERA Carpet Area</p>

                  <button
                    className="mt-10 w-full bg-emerald-600 hover:bg-emerald-700 
                             text-white py-4 rounded-2xl font-medium text-lg
                             transition-colors duration-200"
                  >
                    {plan.price_info || 'Enquire for Price'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}