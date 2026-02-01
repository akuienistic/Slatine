import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, ExternalLink, Disc, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import kedePiouPoster from '@/assets/kedepiou-poster.jpg';

const NewRelease = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* New Release Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold animate-pulse">
            <Sparkles className="h-4 w-4" />
            NEW RELEASE
            <Sparkles className="h-4 w-4" />
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Album Art */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              
              {/* Album cover */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20">
                <img
                  src={kedePiouPoster}
                  alt="Kedepiou - Slatine Pro ft. Alijoma"
                  className="w-full h-auto aspect-square object-cover"
                />
                
                {/* Play overlay */}
                <motion.div 
                  className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-20 h-20 glow-primary"
                    onClick={() => window.open('https://www.youtube.com/watch?v=RV_FX8wc4wM', '_blank')}
                  >
                    <Play className="h-10 w-10" />
                  </Button>
                </motion.div>
              </div>

              {/* Floating disc animation */}
              <motion.div
                className="absolute -top-6 -right-6 text-primary/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Disc className="h-12 w-12" />
              </motion.div>
            </div>
          </motion.div>

          {/* Release Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Out Now
            </span>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              <span className="text-gradient">Kedepiou</span>
            </h2>
            <p className="font-body text-xl text-muted-foreground mb-2">
              Slatine Pro <span className="text-primary">ft.</span> Alijoma
            </p>
            <p className="font-body text-muted-foreground mb-6">
              A powerful collaboration bringing together two incredible artists. Experience the unique blend of Mathira Beatz with fresh vocals.
            </p>

            {/* Labels */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm border border-border">
                Wekou Recordz
              </span>
              <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm border border-border">
                TopLev Music
              </span>
              <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm border border-border">
                2026
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold gap-2 glow-primary"
                onClick={() => window.open('https://www.youtube.com/watch?v=RV_FX8wc4wM', '_blank')}
              >
                <Play className="h-5 w-5" />
                Play Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 gap-2"
                onClick={() => window.open('https://audiomack.com/slatinepro', '_blank')}
              >
                <ExternalLink className="h-5 w-5" />
                Stream
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewRelease;
