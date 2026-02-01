import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = '7oeZIx1U3DQ'; // Dhuengdu video

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Featured Video
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Watch <span className="text-gradient">Dhuengdu</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Experience the viral hit that captured hearts across Africa — featuring Anyaryol Mathiang with over 1.6 million views.
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-50" />
            
            <div className="relative aspect-video bg-muted">
              {isPlaying ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="Dhuengdu - Slatine Pro ft. Anyaryol Mathiang"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                />
              ) : (
                <>
                  {/* Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Dhuengdu Music Video Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
                    <motion.button
                      onClick={() => setIsPlaying(true)}
                      className="group relative"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative w-24 h-24 bg-primary rounded-full flex items-center justify-center glow-primary">
                        <Play className="h-10 w-10 text-primary-foreground ml-1" />
                      </div>
                    </motion.button>
                  </div>

                  {/* Video info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-foreground">Dhuengdu</h3>
                        <p className="text-muted-foreground text-sm">ft. Anyaryol Mathiang</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                        1.6M+ views
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-primary/50 hover:bg-primary/10"
            onClick={() => window.open('https://www.youtube.com/@slatinepro', '_blank')}
          >
            <Youtube className="h-5 w-5" />
            Subscribe for More
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
