import { useEffect, useState } from 'react';
import { contentAPI } from '../../api/api';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQs() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState(-1); // changed default to closed

  useEffect(() => {
    let mounted = true;

    const fetchFaqs = async () => {
      try {
        const res = await contentAPI.getFaqs();
        if (mounted) {
          const data = Array.isArray(res?.data) ? res.data : [];
          setFaqs(data);
          setError(null);
        }
      } catch (err) {
        console.error('FAQs fetch failed:', err);
        if (mounted) {
          setError('Could not load FAQs at the moment');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchFaqs();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="text-gray-600">Loading questions...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <p className="text-red-600 font-medium">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        {faqs.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No FAQs available right now
          </div>
        ) : (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="border border-gray-200 rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="flex justify-between items-center px-8 py-6 bg-gray-50 hover:bg-gray-100 transition-colors">
                  <h3 className="font-medium pr-8">{faq.question || 'Question missing'}</h3>
                  {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
                {openIndex === index && (
                  <div className="px-8 pb-8 pt-2 text-gray-600 leading-relaxed">
                    {faq.answer || 'No answer provided'}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}