import { motion } from 'framer-motion';
import Countdown from 'react-countdown';
import { Calendar, MapPin, Users } from 'lucide-react';
import { HERO_CONTENT, TRIP_DATE } from '@/data/mockData';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5, ease: 'easeOut' } },
  };

  const infoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1, ease: 'easeOut' } },
  };

  const countdownRenderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <span className="text-accent text-2xl md:text-3xl font-display">Trip Started!</span>;
    }
    return (
      <div className="flex space-x-4 text-center font-display text-text-muted">
        <div>
          <div className="text-3xl font-bold text-accent md:text-5xl">{days}</div>
          <div className="text-sm md:text-base">Days</div>
        </div>
        <div className="text-3xl font-bold text-accent md:text-5xl">:</div>
        <div>
          <div className="text-3xl font-bold text-accent md:text-5xl">{hours}</div>
          <div className="text-sm md:text-base">Hours</div>
        </div>
        <div className="text-3xl font-bold text-accent md:text-5xl">:</div>
        <div>
          <div className="text-3xl font-bold text-accent md:text-5xl">{minutes}</div>
          <div className="text-sm md:text-base">Minutes</div>
        </div>
        <div className="text-3xl font-bold text-accent md:text-5xl">:</div>
        <div>
          <div className="text-3xl font-bold text-accent md:text-5xl">{seconds}</div>
          <div className="text-sm md:text-base">Seconds</div>
        </div>
      </div>
    );
  };

  const heroVideoIsFile = HERO_CONTENT.video ? /\.(mp4|webm|ogg)(\?.*)?$/i.test(HERO_CONTENT.video) : false;
  let heroMediaElement = null;
  if (HERO_CONTENT.video) {
    if (heroVideoIsFile) {
      heroMediaElement = (
        <video
          src={HERO_CONTENT.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 h-[calc(100%+60px)] w-[calc(100%+60px)] -translate-x-1/2 -translate-y-1/2 object-cover"
        />
      );
    } else {
      heroMediaElement = (
        <iframe
          src={HERO_CONTENT.video}
          title="Hero Video"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute left-1/2 top-1/2 h-[calc(100%+60px)] w-[calc(100%+60px)] -translate-x-1/2 -translate-y-1/2 object-cover"
        ></iframe>
      );
    }
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-16"
    >
      <div className="absolute inset-0 z-0">
        {heroMediaElement ?? (
          <img
            src={HERO_CONTENT.image}
            alt="Monsoon Trekking Background"
            className="h-full w-full object-cover blur-sm brightness-75"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-0 bg-background/50"></div>
      </div>

      <div className="relative z-10 mx-auto px-4 text-center text-white md:px-8">
        <motion.h1
          className="mb-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg md:text-7xl lg:text-8xl"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          {HERO_CONTENT.heading}
        </motion.h1>
        <motion.p
          className="mb-8 font-display text-xl font-medium text-text-muted drop-shadow-md md:text-3xl"
          variants={subheadingVariants}
          initial="hidden"
          animate="visible"
        >
          {HERO_CONTENT.subheading}
        </motion.p>

        <motion.div
          className="glass-card mx-auto mb-10 flex max-w-2xl flex-wrap items-center justify-center gap-4 p-6 text-lg md:gap-8 md:p-8"
          variants={infoVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-2 text-text">
            <Calendar size={24} className="text-primary" />
            <span className="font-semibold">{HERO_CONTENT.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-text">
            <MapPin size={24} className="text-primary" />
            <span className="font-semibold">{HERO_CONTENT.startPoint}</span>
          </div>
          <div className="flex items-center gap-2 text-text">
            <Users size={24} className="text-primary" />
            <span className="font-semibold">Limited Seats: {HERO_CONTENT.seats}</span>
          </div>
        </motion.div>

        <motion.div
          className="mb-10"
          variants={infoVariants}
          initial="hidden"
          animate="visible"
        >
          <Countdown date={TRIP_DATE} renderer={countdownRenderer} />
          <p className="mt-4 text-xl font-medium text-text-muted md:text-2xl">until the adventure begins!</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 md:flex-row"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <a href="#book">
            <Button size="lg" className="w-full px-8 py-3 md:w-auto">
              Book Your Seat
            </Button>
          </a>
          <a href="#itinerary">
            <Button variant="outline" size="lg" className="w-full px-8 py-3 md:w-auto">
              View Itinerary
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
