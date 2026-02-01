import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import kedePiouPoster from '@/assets/kedepiou-poster.jpg';
import slatinePro from '@/assets/slatine-pro.jpg';

const galleryImages = [
  {
    src: kedePiouPoster,
    alt: 'Kedepiou - Slatine Pro ft. Alijoma',
    caption: 'Kedepiou single artwork with Alijoma',
  },
  {
    src: slatinePro,
    alt: 'Slatine Pro in the studio',
    caption: 'Behind the scenes at Wekou Studio',
  },
  {
    src: `https://img.youtube.com/vi/7oeZIx1U3DQ/maxresdefault.jpg`,
    alt: 'Dhuengdu music video',
    caption: 'From the Dhuengdu music video',
  },
  {
    src: `https://img.youtube.com/vi/KluVFx00giY/maxresdefault.jpg`,
    alt: 'African Beauty music video',
    caption: 'African Beauty video shoot',
  },
  {
    src: `https://img.youtube.com/vi/XX5qF5dr1cY/maxresdefault.jpg`,
    alt: 'Arusa music video',
    caption: 'Arusa - Mathira Beatz sound',
  },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };
  
  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <>
      <section className="py-24 md:py-32 bg-card/50" ref={ref}>
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Gallery
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Visual <span className="text-gradient">Journey</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the world of Slatine Pro — from studio sessions to music video shoots.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  index === 0 ? 'col-span-2 row-span-2' : ''
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className={`aspect-square ${index === 0 ? 'aspect-square' : ''}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center gap-2">
                    <Camera className="h-4 w-4 text-primary" />
                    <span className="text-foreground text-sm font-medium truncate">{image.caption}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-foreground hover:bg-muted z-10"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>

          {/* Navigation */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-foreground hover:bg-muted z-10"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-foreground hover:bg-muted z-10"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Image */}
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent rounded-b-xl">
              <p className="text-foreground text-center font-medium">
                {galleryImages[selectedIndex].caption}
              </p>
            </div>
          </motion.div>

          {/* Dots indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === selectedIndex ? 'bg-primary' : 'bg-muted-foreground/50'
                }`}
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(index); }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Gallery;
