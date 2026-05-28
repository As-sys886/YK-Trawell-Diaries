import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { DESTINATIONS } from '@/data/mockData';
import AnimatedText from '@/components/ui/AnimatedText';
import GlassCard from '@/components/ui/GlassCard';

const DestinationsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  return (
    <section id="destinations" className="container mx-auto px-4 md:px-8">
      <AnimatedText
        text="Explore Our Enchanting Destinations"
        className="mb-12 text-center font-display text-3xl font-bold text-text md:text-5xl"
        delay={0.2}
      />

      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {DESTINATIONS.map((destination, index) => (
          <motion.div key={index} variants={cardVariants} whileHover="hover">
            <GlassCard className="group relative h-full overflow-hidden rounded-xl p-0 transition-all duration-300">
              <img
                src={destination.image}
                alt={destination.name}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/60 to-transparent"></div>
              <div className="p-6 relative">
                <h3 className="mb-2 font-display text-2xl font-bold text-primary">
                  {destination.name}
                </h3>
                <p className="mb-4 text-text-muted">{destination.description}</p>
                <div className="mb-4 flex items-center text-text-muted">
                  <MapPin size={18} className="mr-2 text-accent" />
                  <span>{destination.location}</span>
                </div>
                <h4 className="mb-2 font-display text-lg font-semibold text-text">Highlights:</h4>
                <ul className="list-inside list-disc space-y-1 text-text-muted">
                  {destination.highlights.map((highlight, hIndex) => (
                    <li key={hIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default DestinationsSection;
