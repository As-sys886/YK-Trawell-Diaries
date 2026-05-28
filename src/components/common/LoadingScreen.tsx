import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const cloudVariants = {
    animate: {
      x: ['-100%', '100%'],
      transition: {
        x: { repeat: Infinity, duration: 20, ease: 'linear' },
      },
    },
  };

  const mountainVariants = {
    animate: {
      scale: [0.9, 1, 0.9],
      y: ['10%', '0%', '10%'],
      transition: {
        scale: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-monsoon-dark to-background text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative h-48 w-full overflow-hidden">
        {/* Mountains */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-gray-700 to-gray-800"
          variants={mountainVariants}
          animate="animate"
        >
          <div className="absolute bottom-0 left-0 w-[150%] h-[120%] bg-[url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'><path fill=\'%233d4e5d\' d=\'M0 100 L20 40 L40 80 L60 20 L80 60 L100 0 L100 100 Z\'/></svg>')] bg-repeat-x bg-bottom bg-contain" style={{ transform: 'scaleY(-1) translateX(-20%)' }}></div>
          <div className="absolute bottom-0 left-0 w-[120%] h-full bg-[url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'><path fill=\'%234a5d6f\' d=\'M0 100 L30 50 L50 90 L70 30 L90 70 L100 50 L100 100 Z\'/></svg>')] bg-repeat-x bg-bottom bg-contain"></div>
        </motion.div>
        {/* Clouds */}
        <motion.div
          className="absolute top-0 h-1/2 w-[200%] bg-[url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 100 50\' xmlns=\'http://www.w3.org/2000/svg\'><path fill=\'%23aebbd0\' d=\'M0 50 C20 10, 30 10, 50 30 C70 50, 80 40, 100 40 L100 50 Z\'/></svg>')] bg-repeat-x bg-top bg-contain opacity-70"
          variants={cloudVariants}
          animate="animate"
          style={{ filter: 'blur(3px)' }}
        />
        <motion.div
          className="absolute top-1/4 h-1/2 w-[200%] bg-[url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 100 50\' xmlns=\'http://www.w3.org/2000/svg\'><path fill=\'%23c9d2e1\' d=\'M0 40 C15 5, 25 20, 45 10 C65 0, 75 15, 100 10 L100 40 Z\'/></svg>')] bg-repeat-x bg-top bg-contain opacity-80"
          variants={cloudVariants}
          animate="animate"
          style={{ filter: 'blur(2px)', animationDelay: '-10s' }}
        />
      </div>
      <motion.h1
        className="mt-8 font-display text-4xl font-extrabold text-primary md:text-5xl"
        variants={itemVariants}
      >
        YK Trawell Diaries
      </motion.h1>
      <motion.p className="mt-4 text-center text-lg text-text-muted md:text-xl" variants={itemVariants}>
        Unveiling Your Next Adventure...
      </motion.p>
      <motion.div
        className="mt-8 h-2 w-32 rounded-full bg-primary overflow-hidden"
        variants={itemVariants}
      >
        <motion.div
          className="h-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
