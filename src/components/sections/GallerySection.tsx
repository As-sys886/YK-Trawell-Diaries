import { motion } from 'framer-motion';
import { GALLERY_ITEMS } from '@/data/mockData';
import AnimatedText from '@/components/ui/AnimatedText';

const GallerySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.05, filter: 'brightness(1.1)', transition: { duration: 0.3 } },
  };

  return (
    <section id="gallery" className="container mx-auto px-4 md:px-8">
      <AnimatedText
        text="Capture the Cinematic Essence of Adventure"
        className="mb-12 text-center font-display text-3xl font-bold text-text md:text-5xl"
        delay={0.2}
      />

      <motion.div
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {GALLERY_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover="hover"
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-lg"
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <video
                src={item.src}
                title={item.alt}
                loop
                muted
                autoPlay
                playsInline
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="font-medium text-shadow-sm">{item.alt}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GallerySection;
