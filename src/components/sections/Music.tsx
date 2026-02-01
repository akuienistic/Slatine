import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, ExternalLink, Music as MusicIcon, Calendar, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const tracks = [
  {
    title: 'Dhuengdu',
    featuring: 'ft. Anyaryol Mathiang',
    description: 'An amazing song describing the beauty of a woman and her affection',
    views: '1.6M+',
    year: '2024',
    youtubeUrl: 'https://www.youtube.com/watch?v=7oeZIx1U3DQ',
    audiomackUrl: 'https://audiomack.com/slatinepro',
  },
  {
    title: 'African Beauty',
    featuring: '',
    description: 'A celebration of African beauty and culture',
    views: '500K+',
    year: '2023',
    youtubeUrl: 'https://www.youtube.com/watch?v=KluVFx00giY',
    audiomackUrl: 'https://audiomack.com/slatinepro',
  },
  {
    title: 'Arusa',
    featuring: '',
    description: 'Featuring the signature Mathira Beatz sound',
    views: '4.4K+',
    year: '2022',
    youtubeUrl: 'https://www.youtube.com/watch?v=XX5qF5dr1cY',
    audiomackUrl: 'https://audiomack.com/slatinepro/song/arusa',
  },
];

const MusicSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="music" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Discography
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Music</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Experience the unique Mathira Beatz sound — a fusion of traditional Jiëŋ rhythms with modern production techniques.
          </p>
        </motion.div>

        {/* Mathira Beatz Feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-accent/10 border border-primary/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <MusicIcon className="h-10 w-10 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                What is Mathira Beatz?
              </h3>
              <p className="font-body text-muted-foreground">
                Mathira Beatz is a new South Sudan's original sound creatively built by combining drums, trumpets, flutes, piano, and more melodic instruments. This creativity is deeply rooted in the amazing Jiëŋ cultural art known as Mathira.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover overflow-hidden group">
                <CardContent className="p-6">
                  {/* Album art placeholder */}
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-muted to-card mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center">
                      <MusicIcon className="h-12 w-12 text-foreground" />
                    </div>
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-16 h-16"
                        onClick={() => window.open(track.youtubeUrl, '_blank')}
                      >
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>

                  {/* Track Info */}
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {track.title}
                  </h3>
                  {track.featuring && (
                    <p className="text-primary text-sm font-medium mb-2">{track.featuring}</p>
                  )}
                  <p className="font-body text-muted-foreground text-sm mb-4">
                    {track.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {track.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {track.year}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 gap-2"
                      onClick={() => window.open(track.youtubeUrl, '_blank')}
                    >
                      <Play className="h-4 w-4" />
                      Watch
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 gap-2"
                      onClick={() => window.open(track.audiomackUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Listen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold gap-2"
            onClick={() => window.open('https://www.youtube.com/@slatinepro', '_blank')}
          >
            <ExternalLink className="h-5 w-5" />
            View All on YouTube
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MusicSection;
