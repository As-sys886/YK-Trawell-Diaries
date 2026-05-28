import { motion } from 'framer-motion';
import { ITINERARY } from '@/data/mockData';
import AnimatedText from '@/components/ui/AnimatedText';
import TimelineItem from '@/components/ui/TimelineItem';

const TripTimelineSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="itinerary" className="container mx-auto px-4 md:px-8">
      <AnimatedText
        text="Your Adventure Timeline"
        className="mb-12 text-center font-display text-3xl font-bold text-text md:text-5xl"
        delay={0.2}
      />

      <motion.div
        className="relative mx-auto max-w-3xl space-y-12 py-10 before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:-translate-x-1/2 before:bg-card-border md:space-y-16 lg:before:left-1/2 lg:before:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {ITINERARY.map((item, index) => (
          <TimelineItem
            key={index}
            day={item.day}
            time={item.time}
            title={item.title}
            description={item.description}
            isLeft={index % 2 === 0}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default TripTimelineSection;
