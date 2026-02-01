import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import NewRelease from '@/components/sections/NewRelease';
import About from '@/components/sections/About';
import VideoSection from '@/components/sections/VideoSection';
import MusicSection from '@/components/sections/Music';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Newsletter from '@/components/sections/Newsletter';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <NewRelease />
          <About />
          <VideoSection />
          <MusicSection />
          <Gallery />
          <Testimonials />
          <Newsletter />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
