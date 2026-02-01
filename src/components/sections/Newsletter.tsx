import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Send, Bell, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate subscription
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: 'Welcome to the tribe! 🎵',
      description: "You'll be the first to know about new releases and exclusive content.",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-accent/10" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/2 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-6"
          >
            <Bell className="h-8 w-8 text-primary-foreground" />
          </motion.div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay in the <span className="text-gradient">Loop</span>
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
            Be the first to hear about new music drops, exclusive behind-the-scenes content, and upcoming shows. Join the Mathira Beatz community.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-grow">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-12 h-14 bg-muted/50 border-border focus:border-primary"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="h-14 px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold gap-2"
            >
              {isSubmitting ? (
                <div className="animate-spin w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full" />
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Subscribe
                </>
              )}
            </Button>
          </form>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1">
              <Sparkles className="h-4 w-4 text-primary" />
              Exclusive content
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="h-4 w-4 text-primary" />
              No spam
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="h-4 w-4 text-primary" />
              Unsubscribe anytime
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
