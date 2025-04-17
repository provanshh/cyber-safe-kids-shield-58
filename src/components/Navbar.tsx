
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

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 w-full fixed top-0 z-50 bg-[#0A0A14]/80 backdrop-blur-md border-b border-[#2A2A3C]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <ShieldLogo className="h-8 w-8 text-cipher-purple" />
          <span className="text-xl font-bold text-white neon-text">CipherGuard</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <button 
              onClick={() => scrollToSection('features')}
              className="font-medium text-gray-300 hover:text-cipher-purple transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="font-medium text-gray-300 hover:text-cipher-purple transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="font-medium text-gray-300 hover:text-cipher-purple transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="font-medium text-gray-300 hover:text-cipher-purple transition-colors"
            >
              FAQ
            </button>
            <Link to="/dashboard" className="font-medium text-cipher-blue hover:text-cipher-blue-light transition-colors">
              Dashboard
            </Link>
          </div>
          <Button variant="primary">Try For Free</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0A0A14] shadow-lg py-4 px-6 flex flex-col gap-4 border-b border-[#2A2A3C] z-50">
          <button 
            onClick={() => scrollToSection('features')}
            className="font-medium text-gray-300 py-2 hover:text-cipher-purple"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="font-medium text-gray-300 py-2 hover:text-cipher-purple"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="font-medium text-gray-300 py-2 hover:text-cipher-purple"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="font-medium text-gray-300 py-2 hover:text-cipher-purple"
          >
            FAQ
          </button>
          <Link to="/dashboard" className="font-medium text-cipher-blue py-2 hover:text-cipher-blue-light">
            Dashboard
          </Link>
          <Button variant="primary" className="w-full mt-2" onClick={toggleMenu}>
            Try For Free
          </Button>
        </div>
      )}
    </nav>
  );
};
