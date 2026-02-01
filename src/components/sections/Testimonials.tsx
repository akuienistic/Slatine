import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star, Music, Radio, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "Slatine Pro's Mathira Beatz is a revolutionary sound that beautifully bridges South Sudanese tradition with modern music production.",
    author: "Music Enthusiast",
    role: "YouTube Commenter",
    icon: Music,
  },
  {
    quote: "The way he blends traditional Jiëŋ instruments with contemporary beats is nothing short of genius. A true pioneer.",
    author: "African Music Fan",
    role: "Audiomack Listener",
    icon: Headphones,
  },
  {
    quote: "Dhuengdu is not just a song, it's a cultural movement. Slatine Pro is putting South Sudan on the global music map.",
    author: "Radio Host",
    role: "Juba FM",
    icon: Radio,
  },
];

const stats = [
  { label: 'YouTube Views', value: '1.6M+', description: 'On Dhuengdu alone' },
  { label: 'Subscribers', value: '31K+', description: 'Growing daily' },
  { label: 'Tracks Released', value: '50+', description: 'Original productions' },
  { label: 'Years Active', value: '5+', description: 'In the industry' },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-card/50 to-background">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Fan Love
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Join thousands of fans who have discovered the unique sound of Mathira Beatz.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover relative overflow-hidden">
                  {/* Quote mark decoration */}
                  <div className="absolute top-4 right-4 text-primary/10">
                    <Quote className="h-12 w-12" />
                  </div>
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="font-body text-muted-foreground italic flex-grow mb-6">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-heading font-bold text-foreground text-sm">{testimonial.author}</p>
                        <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </h3>
              <p className="text-foreground font-medium text-sm mb-1">{stat.label}</p>
              <p className="text-muted-foreground text-xs">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
