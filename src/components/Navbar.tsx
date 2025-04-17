
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";
import { ShieldLogo } from "./ShieldLogo";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <ShieldLogo className="h-8 w-8 text-cipher-purple" />
          <span className="text-xl font-bold text-cipher-gray-dark">CipherGuard</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <Link to="/#features" className="font-medium text-cipher-gray hover:text-cipher-purple transition-colors">
              Features
            </Link>
            <Link to="/#how-it-works" className="font-medium text-cipher-gray hover:text-cipher-purple transition-colors">
              How It Works
            </Link>
            <Link to="/#pricing" className="font-medium text-cipher-gray hover:text-cipher-purple transition-colors">
              Pricing
            </Link>
            <Link to="/#faq" className="font-medium text-cipher-gray hover:text-cipher-purple transition-colors">
              FAQ
            </Link>
          </div>
          <Button variant="primary">Try For Free</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6 text-cipher-gray" /> : <Menu className="h-6 w-6 text-cipher-gray" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col gap-4 border-b border-gray-100">
          <Link to="/#features" className="font-medium text-cipher-gray py-2 hover:text-cipher-purple" onClick={toggleMenu}>
            Features
          </Link>
          <Link to="/#how-it-works" className="font-medium text-cipher-gray py-2 hover:text-cipher-purple" onClick={toggleMenu}>
            How It Works
          </Link>
          <Link to="/#pricing" className="font-medium text-cipher-gray py-2 hover:text-cipher-purple" onClick={toggleMenu}>
            Pricing
          </Link>
          <Link to="/#faq" className="font-medium text-cipher-gray py-2 hover:text-cipher-purple" onClick={toggleMenu}>
            FAQ
          </Link>
          <Button variant="primary" className="w-full mt-2" onClick={toggleMenu}>
            Try For Free
          </Button>
        </div>
      )}
    </nav>
  );
};
