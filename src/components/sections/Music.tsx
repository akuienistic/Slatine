import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, ExternalLink, Music as MusicIcon, Calendar, Eye, Sparkles, Heart, Zap, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const tracks = [
  {
    title: "Dhuengdu",
    featuring: "ft. Anyaryol Mathiang",
    description: "An amazing song describing the beauty of a woman and her affection",
    views: "1.6M+",
    year: "2024",
    youtubeUrl: "https://www.youtube.com/watch?v=7oeZIx1U3DQ",
    thumbnail: "https://img.youtube.com/vi/7oeZIx1U3DQ/maxresdefault.jpg",
    audiomackUrl: "https://audiomack.com/slatinepro",
  },
  {
    title: "African Beauty",
    featuring: "",
    description: "A celebration of African beauty and culture",
    views: "500K+",
    year: "2023",
    youtubeUrl: "https://www.youtube.com/watch?v=KluVFx00giY",
    thumbnail: "https://img.youtube.com/vi/KluVFx00giY/maxresdefault.jpg",
    audiomackUrl: "https://audiomack.com/slatinepro",
  },
  {
    title: "Arusa",
    featuring: "",
    description: "Featuring the signature Mathira Beatz sound",
    views: "4.4K+",
    year: "2022",
    youtubeUrl: "https://www.youtube.com/watch?v=XX5qF5dr1cY",
    thumbnail: "https://img.youtube.com/vi/XX5qF5dr1cY/maxresdefault.jpg",
    audiomackUrl: "https://audiomack.com/slatinepro/song/arusa",
  },
];

const MusicSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">Discography</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Music</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Experience the unique Mathira Beatz sound — a fusion of traditional Jiëŋ rhythms with modern production
            techniques.
          </p>
        </motion.div>

        {/* Mathira Beatz Feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 relative overflow-hidden rounded-3xl"
        >
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-accent/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.15),transparent_50%)" />

          {/* Floating elements */}
          <motion.div
            className="absolute top-4 right-8 w-16 h-16 rounded-full bg-primary/20 blur-xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-4 left-8 w-20 h-20 rounded-full bg-accent/20 blur-xl"
            animate={{ y: [0, 20, 0], scale: [1.1, 1, 1.1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <div className="relative p-8 md:p-12">
            {/* Header with icon */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <motion.div
                className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Sparkles className="h-12 w-12 text-primary-foreground" />
              </motion.div>
              <div className="text-center md:text-left">
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                  What is <span className="text-gradient">Mathira Beatz</span>?
                </h3>
                <p className="text-primary font-medium">The Sound of South Sudan</p>
              </div>
            </div>

            {/* Description */}
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
              Mathira Beatz is a revolutionary South Sudanese original sound, creatively built by combining{" "}
              <span className="text-foreground font-semibold">drums, trumpets, flutes, piano</span>, and other melodic
              instruments. This unique creativity is deeply rooted in the amazing{" "}
              <span className="text-primary font-semibold">Jiëŋ cultural art</span> known as Mathira, bringing
              traditional rhythms into the modern era.
            </p>

            {/* Feature icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Heart, label: "Cultural Roots", color: "bg-red-500/10 text-red-500" },
                { icon: Zap, label: "Modern Sound", color: "bg-yellow-500/10 text-yellow-500" },
                { icon: Waves, label: "Traditional", color: "bg-blue-500/10 text-blue-500" },
                { icon: Sparkles, label: "Unique", color: "bg-purple-500/10 text-purple-500" },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-border"
                  >
                    <div className={`w-10 h-10 rounded-lg ${feature.color} flex items-center justify-center`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-sm text-foreground">{feature.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold gap-2"
                onClick={() => window.open("https://www.youtube.com/watch?v=7oeZIx1U3DQ", "_blank")}
              >
                <Play className="h-5 w-5" />
                Listen to Mathira Beatz
              </Button>
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
                  {/* Album art */}
                  <div className="aspect-square rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={track.thumbnail}
                      alt={track.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = '<div class="w-24 h-24 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-foreground"><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/><path d="M8 17V5l12-2v12"/></svg></div>';
                      }}
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-16 h-16"
                        onClick={() => window.open(track.youtubeUrl, "_blank")}
                      >
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>

                  {/* Track Info */}
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">{track.title}</h3>
                  {track.featuring && <p className="text-primary text-sm font-medium mb-2">{track.featuring}</p>}
                  <p className="font-body text-muted-foreground text-sm mb-4">{track.description}</p>

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
                      onClick={() => window.open(track.youtubeUrl, "_blank")}
                    >
                      <Play className="h-4 w-4" />
                      Watch
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 gap-2"
                      onClick={() => window.open(track.audiomackUrl, "_blank")}
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
            onClick={() => window.open("https://www.youtube.com/@slatinepro", "_blank")}
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
