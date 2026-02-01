import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Music, Mic2, Video, Sparkles } from 'lucide-react';
import slatineProImg from '@/assets/slatine-pro.jpg';

const skills = [
  { name: 'Music Production', icon: Music, description: 'Creating unique beats and sounds' },
  { name: 'Vocals', icon: Mic2, description: 'Professional singing and recording' },
  { name: 'Video Production', icon: Video, description: 'Shooting and directing music videos' },
  { name: 'Sound Design', icon: Sparkles, description: 'Crafting innovative audio experiences' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image/Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 rounded-2xl" />
              
              {/* Main content box */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src={slatineProImg}
                  alt="Slatine Pro"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet <span className="text-gradient">Slatine Pro</span>
            </h2>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              Meet Samuel Duk, professionally known as <span className="text-foreground font-semibold">Slatine Pro</span> or <span className="text-foreground font-semibold">Wakou</span>. As one of the youngest and most innovative music producers in Juba, South Sudan, I've dedicated my craft to creating sounds that honor our rich cultural heritage while pushing musical boundaries.
            </p>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              I'm the creator of <span className="text-primary font-semibold">Mathira Beatz</span> — a revolutionary South Sudanese original sound that blends drums, trumpets, flutes, piano, and melodic instruments. This creativity is deeply rooted in the amazing Jiëŋ cultural art known as Mathira, bringing traditional rhythms into the modern era.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/50 transition-all duration-300 card-hover"
                  >
                    <Icon className="h-6 w-6 text-primary mb-2" />
                    <h4 className="font-heading font-bold text-foreground text-sm">{skill.name}</h4>
                    <p className="text-muted-foreground text-xs mt-1">{skill.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
