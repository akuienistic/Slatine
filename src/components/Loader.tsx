import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          {/* Animated circles */}
          <div className="relative mb-8">
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-primary/30"
              style={{ width: 120, height: 120, margin: 'auto' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="relative flex items-center justify-center rounded-full border-4 border-transparent"
              style={{
                width: 120,
                height: 120,
                borderTopColor: 'hsl(168 70% 40%)',
                borderRightColor: 'hsl(30 70% 55%)',
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <span className="font-heading text-4xl font-bold text-gradient">SP</span>
            </motion.div>
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h1 className="font-heading text-2xl font-bold text-foreground mb-2">
              Slatine Pro
            </h1>
            <motion.p
              className="text-muted-foreground text-sm tracking-widest uppercase"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading Experience...
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-muted"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.2, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
