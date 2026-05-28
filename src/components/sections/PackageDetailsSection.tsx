import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import { PACKAGE_INCLUDES, PACKAGE_EXCLUDES } from '@/data/mockData';
import AnimatedText from '@/components/ui/AnimatedText';
import GlassCard from '@/components/ui/GlassCard';

const PackageDetailsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="package" className="container mx-auto px-4 md:px-8">
      <AnimatedText
        text="Your Expedition Package Details"
        className="mb-12 text-center font-display text-3xl font-bold text-text md:text-5xl"
        delay={0.2}
      />

      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Includes Card */}
        <motion.div variants={cardVariants}>
          <GlassCard className="p-8 h-full flex flex-col">
            <div className="flex items-center mb-6">
              <CheckCircle2 size={32} className="text-green-500 mr-3" />
              <h3 className="font-display text-3xl font-bold text-primary">Includes</h3>
            </div>
            <ul className="space-y-4 text-lg text-text-muted flex-grow">
              {PACKAGE_INCLUDES.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <p className="font-display text-2xl font-semibold text-accent">
                All essentials for an unforgettable journey!
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Excludes Card */}
        <motion.div variants={cardVariants}>
          <GlassCard className="p-8 h-full flex flex-col">
            <div className="flex items-center mb-6">
              <XCircle size={32} className="text-red-500 mr-3" />
              <h3 className="font-display text-3xl font-bold text-text">Excludes</h3>
            </div>
            <ul className="space-y-4 text-lg text-text-muted flex-grow">
              {PACKAGE_EXCLUDES.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <XCircle size={20} className="text-red-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <p className="font-display text-2xl font-semibold text-text-muted">
                Personal expenses are not covered.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PackageDetailsSection;
