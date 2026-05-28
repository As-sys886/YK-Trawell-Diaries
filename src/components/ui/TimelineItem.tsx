import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

interface TimelineItemProps {
  day: string;
  time: string;
  title: string;
  description: string;
  isLeft: boolean; // To alternate left/right in the timeline
}

const TimelineItem: React.FC<TimelineItemProps> = ({ day, time, title, description, isLeft }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className={`relative grid grid-cols-1 md:grid-cols-2 ${isLeft ? 'md:pr-24' : 'md:pl-24'}`}
      variants={itemVariants}
    >
      <div className={`${isLeft ? 'md:col-start-1 md:text-right' : 'md:col-start-2'} mb-8 md:mb-0`}>
        <GlassCard className="p-6">
          <h3 className="mb-2 font-display text-2xl font-bold text-primary">{day}</h3>
          <div className="mb-3 flex items-center justify-start gap-2 text-text-muted md:justify-end">
            <Clock size={18} />
            <span className="font-medium">{time}</span>
          </div>
          <h4 className="mb-2 font-display text-xl font-semibold text-text">{title}</h4>
          <p className="text-text-muted">{description}</p>
        </GlassCard>
      </div>

      {/* Timeline Dot */}
      <div
        className={`absolute left-1/2 top-0 h-full w-4 -translate-x-1/2 flex items-center justify-center md:flex ${isLeft ? 'md:left-1/2' : 'md:left-1/2'}`}
      >
        <div className="absolute z-10 h-4 w-4 rounded-full bg-primary ring-4 ring-background/50"></div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
