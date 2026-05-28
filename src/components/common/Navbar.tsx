import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import Button from '../ui/Button';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Itinerary', href: '#itinerary' },
  { name: 'Package', href: '#package' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Book Now', href: '#book' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/yktrawelldiaries' },
  { icon: Youtube, href: 'https://youtube.com/yktrawelldiaries' }, // Placeholder for Youtube
  { icon: Phone, href: 'tel:+916305566899' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center text-2xl font-bold text-primary">
          {/* <img src={logo} alt="YK Trawell Diaries Logo" className="mr-2 h-8" /> */}
          <span className="font-display">YK Trawell Diaries</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center md:flex">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`group relative text-lg font-medium transition-colors hover:text-primary ${location.hash === link.href ? 'text-primary' : 'text-text'}`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full ${location.hash === link.href ? 'w-full' : ''}`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-8 flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-text-muted">Hi, {user.username}</span>
                <Button onClick={handleLogout} variant="outline" size="sm">
                  Logout
                </Button>
                <Link to="/dashboard">
                  <Button variant="secondary" size="sm">Dashboard</Button>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-text focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed right-0 top-0 h-full w-full bg-background/95 backdrop-blur-lg md:hidden"
            >
              <div className="flex justify-end p-4">
                <button onClick={toggleMenu} className="text-text focus:outline-none">
                  <X size={28} />
                </button>
              </div>
              <ul className="flex flex-col items-center space-y-6 pt-10">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-3xl font-bold text-text hover:text-primary"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="flex gap-4 pt-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-primary"
                    >
                      <link.icon size={24} />
                    </a>
                  ))}
                </li>
                <li className="pt-6">
                {user ? (
                  <div className="flex flex-col items-center space-y-4">
                    <span className="text-xl text-text-muted">Hi, {user.username}</span>
                    <Button onClick={handleLogout} variant="outline">
                      Logout
                    </Button>
                    <Link to="/dashboard">
                      <Button onClick={toggleMenu} variant="secondary">Dashboard</Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col items-center space-y-4">
                    <Link to="/login">
                      <Button onClick={toggleMenu} variant="outline">Login</Button>
                    </Link>
                    <Link to="/signup">
                      <Button onClick={toggleMenu}>Sign Up</Button>
                    </Link>
                  </div>
                )}
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
