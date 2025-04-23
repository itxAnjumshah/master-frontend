import { useState, useEffect, useCallback, memo } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/masterlogo.png";

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize AOS only once
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      disable: 'mobile' // Disable on mobile for better performance
    });
  }, []);

  // Update active state based on location
  useEffect(() => {
    const path = location.pathname.substring(1);
    if (path && path !== "certificate") {
      setActive(path);
      scrollToSection(path);
    }
  }, [location.pathname]);

  const menuItems = [
    { name: "Home", id: "home", path: "/" },
    { name: "About", id: "about", path: "/about" },
    { name: "Services", id: "services", path: "/services" },
    { name: "Our Clients", id: "client", path: "/client" },
    { name: "Certificate", id: "certificate", path: "/certificate" },
    
    { name: "Contact", id: "contact", path: "/contact" },
  ];

  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) {
      const navHeight = 64; // Height of the navbar
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
    }
  }, []);

  const handleNavigation = useCallback((id, path) => {
    setActive(id);
    setIsOpen(false); // Close mobile menu immediately

    if (id === "certificate") {
      navigate(path);
    } else {
      navigate("/");
      requestAnimationFrame(() => {
        scrollToSection(id);
      });
    }
  }, [navigate, scrollToSection]);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <nav className="bg-gray-900 text-white fixed w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 h-16" data-aos="fade-down">
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => handleNavigation("home", "/")}
          role="button"
          tabIndex={0}
        >
          <img src={logo} alt="Logo" className="h-12 w-auto sm:h-[60px]" loading="eager" />
          <span className="text-xl sm:text-2xl font-semibold text-blue-400 font-mono">THE MASTER</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6">
          {menuItems.map((item) => (
            <li key={item.id} data-aos="zoom-in">
              <button
                className={`cursor-pointer px-3 py-2 rounded-lg transition-colors duration-200 text-sm lg:text-base ${
                  active === item.id ? "bg-blue-500 text-white" : "hover:text-blue-400"
                }`}
                onClick={() => handleNavigation(item.id, item.path)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-2xl focus:outline-none z-50 transition-transform duration-200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
        } md:hidden`}
        style={{ willChange: 'transform, opacity' }}
      >
        <ul className="flex flex-col items-center justify-center h-[500px] space-y-4">
          {menuItems.map((item) => (
            <li key={item.id} className="w-full text-center">
              <button
                className={`cursor-pointer block w-full py-3 text-lg transition-colors duration-200 ${
                  active === item.id ? "bg-blue-500 text-white" : "hover:text-blue-400"
                }`}
                onClick={() => handleNavigation(item.id, item.path)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
