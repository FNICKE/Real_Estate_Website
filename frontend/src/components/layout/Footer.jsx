import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Column 1 - Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Vighnaharta" className="h-12" />
              <div>
                <h3 className="font-bold text-2xl tracking-tight">VIGHNAHARTA</h3>
                <p className="text-emerald-400 text-sm -mt-1">INFINITY</p>
              </div>
            </div>
            <p className="text-emerald-200 text-sm leading-relaxed">
              Premium 1 & 2 BHK homes in Virbhol (East). 
              Luxury living with world-class amenities.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-5 text-emerald-400">Quick Links</h4>
            <ul className="space-y-3 text-emerald-100">
              <li><a href="#about" className="hover:text-white transition">About Project</a></li>
              <li><a href="#floorplans" className="hover:text-white transition">Floor Plans</a></li>
              <li><a href="#amenities" className="hover:text-white transition">Amenities</a></li>
              <li><a href="#updates" className="hover:text-white transition">Construction Updates</a></li>
              <li><a href="/admin" className="hover:text-white transition">Admin Panel</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-5 text-emerald-400">Get In Touch</h4>
            <div className="space-y-4 text-emerald-100 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  R.S. No. 223/214<br />
                  Circle Kannamwar Nagar U, Virbhol (East)
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:sales@vighnaharta.in" className="hover:text-white">sales@vighnaharta.in</a>
              </div>
            </div>
          </div>

          {/* Column 4 - Follow Us */}
          <div>
            <h4 className="font-semibold text-lg mb-5 text-emerald-400">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-emerald-900 hover:bg-emerald-700 rounded-xl flex items-center justify-center transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-900 hover:bg-emerald-700 rounded-xl flex items-center justify-center transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-900 hover:bg-emerald-700 rounded-xl flex items-center justify-center transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-900 hover:bg-emerald-700 rounded-xl flex items-center justify-center transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-10">
              <p className="text-xs uppercase tracking-widest text-emerald-500">RERA No.</p>
              <p className="text-sm text-emerald-300">P52000012345</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-900 mt-16 pt-8 text-center text-xs text-emerald-400">
          © {new Date().getFullYear()} Vighnaharta Infinity. All Rights Reserved | 
          Designed with ❤️ for Luxury Living
        </div>
      </div>
    </footer>
  );
}