import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { usePortfolioData } from '../../../contexts/PortfolioContext';
export default function Header() {
  const {navigation } = usePortfolioData();
  const header = navigation.header
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="w-full py-4 px-6 bg-brand-darkBlue shadow-md fixed top-0 z-50">
      <div className="max-w-container mx-auto flex justify-between items-center">
        
        {/* Logo / Brand */}
        <Link to='/'
        className="text-brand-yellow font-extrabold text-2xl hover-none">
          MPHO.SHABALALA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {header.map(link => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-brand-yellow transition ${
                  isActive ? "text-brand-yellow font-bold" : "text-brand-lightGray"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-between w-6 h-6 focus:outline-none"
          >
            <span
              className={`block h-0.5 bg-brand-yellow transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-brand-yellow transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-brand-yellow transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 bg-brand-darkBlue py-4 px-6 space-y-4 shadow-lg rounded-lg">
          {header.map(link => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`block hover:text-brand-yellow transition ${
                  isActive ? "text-brand-yellow font-bold" : "text-brand-lightGray"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
