import { type ElementType } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { WHY_JOIN_ITEMS } from '@/data/mockData';
import AnimatedText from '@/components/ui/AnimatedText';
import GlassCard from '@/components/ui/GlassCard';

// Create a map of icon names to components
const IconMap = LucideIcons as unknown as Record<string, ElementType>;

const WhyJoinSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <section id="why-join" className="container mx-auto px-4 md:px-8">
      <AnimatedText
        text="Why Join YK Trawell Diaries?"
        className="mb-12 text-center font-display text-3xl font-bold text-text md:text-5xl"
        delay={0.2}
      />

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {WHY_JOIN_ITEMS.map((item, index) => {
          const IconComponent = IconMap[item.icon];
          return (
            <motion.div key={index} variants={itemVariants} whileHover="hover">
              <GlassCard className="flex h-full flex-col items-center p-6 text-center">
                {IconComponent && (
                  <IconComponent size={48} className="mb-4 text-primary" strokeWidth={1.5} />
                )}
                <h3 className="mb-3 font-display text-xl font-semibold text-text">
                  {item.title}
                </h3>
                <p className="text-text-muted">{item.description}</p>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default WhyJoinSection;
