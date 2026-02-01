import { Youtube, Facebook, Music2, Disc3, Instagram, Twitter, MapPin, Mail, Phone, Headphones } from "lucide-react";

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@wekourecordz",
    icon: Youtube,
    color: "hover:bg-red-500 hover:text-red-500",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/wekourecordz",
    icon: Facebook,
    color: "hover:bg-blue-500 hover:text-blue-500",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/wekourecordz",
    icon: Instagram,
    color: "hover:bg-pink-500 hover:text-pink-500",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/wekourecordz",
    icon: Twitter,
    color: "hover:bg-sky-500 hover:text-sky-500",
  },
  {
    name: "Audiomack",
    href: "https://audiomack.com/wekourecordz",
    icon: Music2,
    color: "hover:bg-orange-500 hover:text-orange-500",
  },
];

const footerLinks = {
  explore: [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Music", href: "#music" },
    { name: "Videos", href: "#videos" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Music Production" },
    { name: "Studio Recording" },
    { name: "Mixing & Mastering" },
    { name: "Artist Development" },
    { name: "Bookings" },
    { name: "Collaborations" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-card/80 to-card border-t border-border">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Headphones className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-foreground">Wekou Recordz</span>
                <p className="text-xs text-muted-foreground">Music Label & Studio</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-5 max-w-sm">
              One of South Sudan's premier music labels. Creating hit records, developing artists, and putting African
              music on the global map.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3 w-3 text-primary" />
                <span>Wekou Studio, Juba, South Sudan</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-3 w-3 text-primary" />
                <span>+211 912 345 678</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-3 w-3 text-primary" />
                <span>contact@wekourecordz.com</span>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-heading text-base font-bold text-foreground mb-4">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-heading text-base font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading text-base font-bold text-foreground mb-4">Follow Us</h3>
            <p className="text-muted-foreground text-xs mb-4">
              Connect with us on social media for updates, behind-the-scenes content, and more.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-muted flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary/20"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© {currentYear} Wekou Recordz. All rights reserved.</p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Designed and built by{" "}
              <a
                href="https://www.linkedin.com/in/simon-akuien-atem-710895290/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors font-medium inline-flex items-center gap-1"
              >
                Simon Star Tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
