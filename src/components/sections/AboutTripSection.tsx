import { motion } from 'framer-motion';
import { ABOUT_TRIP_CONTENT } from '@/data/mockData';
import AnimatedText from '@/components/ui/AnimatedText';

const AboutTripSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="container mx-auto px-4 md:px-8">
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <AnimatedText
          text={ABOUT_TRIP_CONTENT.title}
          className="mb-8 font-display text-3xl font-bold text-text md:text-5xl"
          delay={0.2}
        />
        <motion.div className="mx-auto max-w-4xl space-y-6 text-lg text-text-muted md:text-xl">
          {ABOUT_TRIP_CONTENT.description.map((paragraph, index) => (
            <motion.p key={index} variants={itemVariants}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutTripSection;
