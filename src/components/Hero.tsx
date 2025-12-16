import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "UI/UX Designer & ML Engineer";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/15 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 text-center px-4">
        {/* Greeting */}
        <div className="mb-6 overflow-hidden">
          <p 
            className="text-muted-foreground text-lg tracking-widest uppercase"
            style={{ animation: "slideUp 0.8s ease forwards" }}
          >
            Hello, I'm
          </p>
        </div>

        {/* Name with animated gradient */}
        <div className="mb-6 overflow-hidden">
          <h1 
            className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight"
            style={{ animation: "slideUp 0.8s ease forwards", animationDelay: "0.2s" }}
          >
            <span className="text-gradient animate-gradient bg-gradient-to-r from-primary via-secondary to-accent">
              SWETHA P
            </span>
          </h1>
        </div>

        {/* Animated role with typewriter */}
        <div className="mb-8 h-12 flex items-center justify-center">
          <div 
            className="glass px-6 py-3 rounded-full inline-flex items-center gap-2"
            style={{ animation: "scaleIn 0.6s ease forwards", animationDelay: "0.6s" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-foreground/90 font-medium tracking-wide">
              {displayText}
              <span className={`ml-1 border-r-2 border-primary ${showCursor ? "opacity-100" : "opacity-0"}`}>
                &nbsp;
              </span>
            </span>
          </div>
        </div>

        {/* Description */}
        <p 
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ animation: "fadeIn 1s ease forwards", animationDelay: "1s", opacity: 0 }}
        >
          B.Tech CSE student at Kongu Engineering College, crafting beautiful digital experiences
          with a passion for design, development, and machine learning.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-wrap gap-4 justify-center"
          style={{ animation: "slideUp 0.8s ease forwards", animationDelay: "1.2s", opacity: 0 }}
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)]"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-border text-foreground font-semibold rounded-full transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:bg-primary/5"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          style={{ animation: "fadeIn 1s ease forwards", animationDelay: "1.5s", opacity: 0 }}
        >
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
