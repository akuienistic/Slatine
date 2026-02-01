import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  Youtube,
  Facebook,
  Music2,
  Disc3,
  MapPin,
  Phone,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@wekourecordz",
    icon: Youtube,
    color: "hover:bg-red-500/20 hover:text-red-500",
    bg: "bg-red-500/10",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/wekourecordz",
    icon: Facebook,
    color: "hover:bg-blue-500/20 hover:text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/wekourecordz",
    icon: Instagram,
    color: "hover:bg-pink-500/20 hover:text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    name: "Audiomack",
    href: "https://audiomack.com/wekourecordz",
    icon: Music2,
    color: "hover:bg-orange-500/20 hover:text-orange-500",
    bg: "bg-orange-500/10",
  },
];

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Juba, South Sudan" },
  { icon: Music2, label: "Studio", value: "Wekou Studio" },
  { icon: Phone, label: "Phone", value: "+211 912 345 678" },
  { icon: Mail, label: "Email", value: "contact@wekourecordz.com" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. Wekou Recordz will get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-3 block">Get In Touch</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Let's <span className="text-gradient">Create Together</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm">
            For bookings, collaborations, or studio inquiries — reach out through any of these platforms or send a direct message.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-border rounded-xl p-4 md:p-6 bg-card/50"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="pl-10 h-11 bg-muted/50 border-border focus:border-primary rounded-lg text-sm"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="pl-10 h-11 bg-muted/50 border-border focus:border-primary rounded-lg text-sm"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <Input
                type="text"
                placeholder="Subject (Booking, Collaboration, etc.)"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
                className="h-11 bg-muted/50 border-border focus:border-primary rounded-lg text-sm"
              />

              {/* Message Textarea */}
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="pl-10 bg-muted/50 border-border focus:border-primary resize-none rounded-lg text-sm"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold gap-2 h-11 rounded-lg"
              >
                {isSubmitting ? (
                  <div className="animate-spin w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full" />
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-2 gap-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="p-3 rounded-lg bg-muted/50 border border-border"
                  >
                    <Icon className="h-5 w-5 text-primary mb-2" />
                    <h3 className="font-heading font-bold text-foreground text-xs">{info.label}</h3>
                    <p className="text-muted-foreground text-xs">{info.value}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="p-4 rounded-xl bg-card/50 border border-border">
              <h3 className="font-heading text-base font-bold text-foreground mb-3">Follow On Social</h3>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className={`flex items-center gap-2 p-3 rounded-lg ${social.bg} border border-border transition-all duration-300 hover:scale-[1.02] ${social.color}`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="font-medium text-xs">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="p-4 rounded-xl bg-gradient-to-r from-primary/10 via-purple-500/5 to-accent/10 border border-primary/20"
            >
              <h3 className="font-heading text-base font-bold text-foreground mb-1">Wekou Recordz Label</h3>
              <p className="text-muted-foreground text-xs mb-2">
                Ready to create the next hit? Whether you're an artist, producer, or looking for studio time — let's talk.
              </p>
              <a
                href="mailto:studio@wekourecordz.com"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-semibold text-xs transition-colors"
              >
                <Mail className="h-3 w-3" />
                studio@wekourecordz.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
