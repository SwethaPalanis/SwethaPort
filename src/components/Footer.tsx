import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="font-heading text-2xl font-bold text-gradient">
            SP
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> by Swetha P © {new Date().getFullYear()}
          </p>

          {/* Quick links */}
          <div className="flex gap-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
