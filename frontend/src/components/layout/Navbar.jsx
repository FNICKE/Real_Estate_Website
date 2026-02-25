import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Vighnaharta" className="h-10" /> {/* put your logo in public */}
          <div>
            <h1 className="font-bold text-xl text-emerald-700">VIGHNAHARTA</h1>
            <p className="text-xs -mt-1">INFINITY</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-emerald-600" >About</a>
          <a href="#amenities" className="hover:text-emerald-600">Amenities</a>
          <a href="#floorplans" className="hover:text-emerald-600">Floor Plans</a>
          <a href="#updates" className="hover:text-emerald-600">Updates</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="/login" className="text-sm font-medium px-5 py-2 border border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-50">
            Admin Login
          </a>
          <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-emerald-700">
            Enquiry Now
          </button>
        </div>
      </div>
    </nav>
  );
}