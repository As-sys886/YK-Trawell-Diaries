import { Instagram, Smartphone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { FOOTER_CONTACTS } from '@/data/mockData';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
      className="bg-monsoon-dark py-12 text-text-muted"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="col-span-full md:col-span-1">
            <Link to="/" className="text-3xl font-bold text-primary font-display mb-4 block">
              YK Trawell Diaries
            </Link>
            <p className="text-sm leading-relaxed">
              Your companion for cinematic adventures, thrilling roadtrips, and unforgettable community experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-text">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-primary transition-colors">About Trip</a></li>
              <li><a href="#itinerary" className="hover:text-primary transition-colors">Itinerary</a></li>
              <li><a href="#package" className="hover:text-primary transition-colors">Package Details</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#book" className="hover:text-primary transition-colors">Book Now</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-text">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Smartphone size={18} className="text-primary" />
                <a href={`tel:${FOOTER_CONTACTS.phone}`} className="hover:text-primary transition-colors">
                  {FOOTER_CONTACTS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <a href={`mailto:${FOOTER_CONTACTS.email}`} className="hover:text-primary transition-colors">
                  {FOOTER_CONTACTS.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-text">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href={FOOTER_CONTACTS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              {/* Add other social media icons if available, e.g., Youtube, Facebook */}
            </div>
            <div className="mt-6">
              <h3 className="mb-2 font-display text-lg font-semibold text-text">Join Our Community</h3>
              <a
                href={FOOTER_CONTACTS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-green-700"
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.621-3.878-1.621-6.04 0-6.195 5.059-11.254 11.314-11.254 3.067 0 5.662 1.215 7.697 3.178l.006.006c1.996 1.954 3.107 4.542 3.107 7.601 0 6.195-5.059 11.254-11.314 11.254-1.993 0-3.95-.5-5.698-1.428L.057 24zm6.839-4.077c1.479.882 3.242 1.341 5.074 1.341 5.454 0 9.893-4.439 9.893-9.893s-4.439-9.893-9.893-9.893-9.893 4.439-9.893 9.893c0 1.962.545 3.826 1.583 5.441l-.545 1.996 2.052-.564c1.611 1.053 3.447 1.616 5.303 1.616zm3.33-5.286c-.222-.111-.334-.208-.445-.305-.111-.097-.245-.25-.333-.357-.089-.107-.178-.204-.267-.301-.089-.097-.178-.204-.267-.301-.397-.442-1.053-.984-1.432-1.082-.089-.02-.178-.039-.267-.039-.089 0-.178-.02-.267-.02-.178 0-.356.02-.534.02-.222 0-.445.078-.623.156-.222.097-.445.204-.623.301-.178.097-.334.214-.445.331-.111.117-.222.25-.333.37-.111.12-.222.25-.333.37-.156.174-.334.347-.397.437-.063.089-.126.177-.126.311-.02.099-.059.213.067.48.111.29.28.696.445.986.178.31.334.58.512.87.178.29.356.54.534.76.222.25.445.47.623.64.178.17.334.29.445.37.111.08.222.14.333.17.111.02.245.02.379.02.134 0 .267 0 .401-.02.134-.02.27-.04.401-.078.222-.058.463-.162.671-.259.208-.097.401-.223.58-.334.31-.178.58-.334.779-.53.199-.199.349-.434.463-.671.111-.222.199-.445.267-.623.067-.178.111-.334.111-.468 0-.25-.112-.39-.223-.468z" />
                </svg>
                Join WhatsApp Community
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-8 text-center text-sm">
          <p>{FOOTER_CONTACTS.copyright} </p>
          <p className="mt-2">All images and content © YK Trawell Diaries {currentYear}</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
