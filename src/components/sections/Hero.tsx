import { motion } from 'framer-motion';
import { Play, Music2, Youtube, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/slatine-studio.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Slatine Pro in studio"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-primary/20 blur-xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-32 h-32 rounded-full bg-accent/20 blur-xl"
        animate={{ y: [0, 30, 0], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              <Music2 className="h-4 w-4" />
              Music Producer & Vocalist
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6"
          >
            <span className="text-gradient">Slatine</span> Pro
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-lg md:text-xl text-muted-foreground mb-4 max-w-xl"
          >
            One of the youngest and baddest South Sudanese music producers. Creator of{' '}
            <span className="text-primary font-semibold">Mathira Beatz</span> — a unique sound rooted in Jiëŋ cultural arts.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-muted-foreground mb-8 max-w-xl"
          >
            Based in Juba, South Sudan • Wekou Studio
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold gap-2 glow-primary"
              onClick={() => window.open('https://www.youtube.com/@wekourecordz', '_blank')}
            >
              <Play className="h-5 w-5" />
              Watch on YouTube
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 gap-2"
              onClick={() => window.open('https://audiomack.com/wekourecordz', '_blank')}
            >
              <Headphones className="h-5 w-5" />
              Listen Now
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md"
          >
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-gradient">1.6M+</h3>
              <p className="text-muted-foreground text-sm">Views</p>
            </div>
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-gradient">31K+</h3>
              <p className="text-muted-foreground text-sm">Subscribers</p>
            </div>
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-gradient">50+</h3>
              <p className="text-muted-foreground text-sm">Tracks</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
