
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { ShieldLogo } from "./ShieldLogo";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <ShieldLogo className="h-6 w-6 text-cipher-purple" />
              <span className="text-lg font-bold text-cipher-gray-dark">CipherGuard</span>
            </Link>
            <p className="text-sm text-cipher-gray mb-4">
              Smart AI protection for young minds, keeping children safe online while respecting their privacy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cipher-gray hover:text-cipher-purple transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cipher-gray hover:text-cipher-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-cipher-gray hover:text-cipher-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cipher-gray hover:text-cipher-purple transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-cipher-gray-dark mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/#features" className="text-sm text-cipher-gray hover:text-cipher-purple transition-colors">Features</Link></li>
              <li><Link to="/#how-it-works" className="text-sm text-cipher-gray hover:text-cipher-purple transition-colors">How It Works</Link></li>
              <li><Link to="/#pricing" className="text-sm text-cipher-gray hover:text-cipher-purple transition-colors">Pricing</Link></li>
              <li><Link to="/testimonials" className="text-sm text-cipher-gray hover:text-cipher-purple transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-cipher-gray-dark mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm text-cipher-gray hover:text-cipher-purple transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-sm text-cipher-gray hover:text-cipher-purple transition-colors">Contact Us</Link></li>
              <li><Link to="/help" className="text-sm text-cipher-gray hover:text-cipher-purple transition-colors">Help Center</Link></li>
              <li><Link to="/community" className="text-sm text-cipher-gray hover:text-cipher-purple transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-cipher-gray-dark mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-cipher-gray hover:text-cipher-purple transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-cipher-gray hover:text-cipher-purple transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-sm text-cipher-gray hover:text-cipher-purple transition-colors">Cookie Policy</Link></li>
              <li><Link to="/compliance" className="text-sm text-cipher-gray hover:text-cipher-purple transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-cipher-gray">
            &copy; {new Date().getFullYear()} CipherGuard. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><Link to="/privacy" className="text-xs text-cipher-gray hover:text-cipher-purple transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-xs text-cipher-gray hover:text-cipher-purple transition-colors">Terms</Link></li>
              <li><Link to="/cookies" className="text-xs text-cipher-gray hover:text-cipher-purple transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
