import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Home, Edit3, Settings, Info, HelpCircle, Layers, Hammer } from 'lucide-react';

// Import all edit components
import HeroEdit from '../pages/edit/Hero';
import AboutEdit from '../pages/edit/AboutProject';
import AmenitiesEdit from '../pages/edit/Amenities';
import FloorPlansEdit from '../components/home/FloorPlans';
import ConstructionEdit from '../pages/edit/ConstructionUpdates';
import FaqsEdit from '../pages/edit/FAQ';
import DeveloperEdit from '../components/home/DeveloperInfo';

const tabs = [
  { name: 'Hero Section', icon: Home, component: HeroEdit },
  { name: 'About Project', icon: Info, component: AboutEdit },
  { name: 'Amenities', icon: Settings, component: AmenitiesEdit },
  { name: 'Floor Plans', icon: Layers, component: FloorPlansEdit },
  { name: 'Construction Updates', icon: Hammer, component: ConstructionEdit },
  { name: 'FAQs', icon: HelpCircle, component: FaqsEdit },
  { name: 'Developer Info', icon: Edit3, component: DeveloperEdit },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  // 1. PROTECTION CHECK: Redirect to login if not authenticated
  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    if (isAuth !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  // 2. FIXED LOGOUT FUNCTION: Clears storage and redirects
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const ActiveComponent = tabs[activeTab].component;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navbar */}
      <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {/* Fallback to text if logo missing */}
              <div className="h-9 w-9 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">V</div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
                VIGHNAHARTA <span className="text-emerald-600">ADMIN</span>
              </h1>
            </div>
            <span className="hidden md:inline-block bg-emerald-100 text-emerald-700 text-xs px-4 py-1.5 rounded-full font-bold">
              CMS ACTIVE
            </span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-2.5 text-red-600 hover:bg-red-50 rounded-xl font-bold transition-all border border-transparent hover:border-red-100"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto flex w-full flex-1">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r p-6 hidden md:block">
          <div className="uppercase text-[10px] font-bold text-gray-400 mb-6 tracking-[0.2em] px-3">
            Navigation
          </div>
          
          <div className="space-y-1">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-left font-semibold transition-all ${
                  activeTab === index 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
                    : 'hover:bg-gray-50 text-slate-600'
                }`}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === index ? 'text-white' : 'text-emerald-500'}`} />
                {tab.name}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Edit Area */}
        <main className="flex-1 p-6 md:p-10 bg-slate-50/50">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <div className="mb-8 border-b border-slate-50 pb-6">
              <h2 className="text-3xl font-bold text-slate-800 italic font-serif">
                {tabs[activeTab].name}
              </h2>
              <p className="text-slate-500 mt-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Modify text content for this section
              </p>
            </div>
            
            {/* The actual Editor Component */}
            <div className="mt-4">
               <ActiveComponent />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}