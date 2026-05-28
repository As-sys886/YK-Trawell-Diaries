import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/mockData';
import AnimatedText from '@/components/ui/AnimatedText';
import GlassCard from '@/components/ui/GlassCard';

const CommunitySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="community" className="container mx-auto px-4 md:px-8">
      <AnimatedText
        text="Join Our Thriving Adventure Community"
        className="mb-12 text-center font-display text-3xl font-bold text-text md:text-5xl"
        delay={0.2}
      />

      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {TESTIMONIALS.map((testimonial) => (
          <motion.div key={testimonial.id} variants={itemVariants}>
            <GlassCard className="p-6 h-full flex flex-col justify-between">
              <Quote size={32} className="mb-4 text-primary" />
              <p className="mb-4 text-lg italic text-text-muted flex-grow">"{testimonial.quote}"</p>
              <div>
                <p className="font-display text-xl font-semibold text-text">- {testimonial.author}</p>
                <p className="text-sm text-text-muted">Trip: {testimonial.trip}</p>
                <div className="mt-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-accent fill-accent" />
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        <h3 className="mb-4 font-display text-2xl font-bold text-primary md:text-3xl">
          More than a trip, it's a family.
        </h3>
        <p className="mx-auto max-w-2xl text-lg text-text-muted">
          YK Trawell Diaries is built on shared experiences, friendly vibes, and making cinematic memories together. Join us and become part of something special.
        </p>
      </motion.div>
    </section>
  );
};

export default CommunitySection;
