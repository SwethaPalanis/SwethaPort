import { useEffect, useRef } from "react";
import { Code, Palette, Brain, Sparkles } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("active");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    { icon: Palette, label: "UI/UX Design", color: "primary" },
    { icon: Code, label: "Frontend Dev", color: "secondary" },
    { icon: Brain, label: "Machine Learning", color: "accent" },
    { icon: Sparkles, label: "Creative Solutions", color: "primary" },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="reveal text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="reveal stagger-1 font-heading text-4xl md:text-6xl font-bold mb-6">
            Designing the <span className="text-gradient">Future</span>
          </h2>
          <div className="reveal stagger-2 w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="reveal stagger-2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl rotate-6 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 via-accent/20 to-primary/20 rounded-3xl -rotate-6 animate-pulse" style={{ animationDelay: "1s" }} />
              
              {/* Main card */}
              <div className="relative glass rounded-3xl p-8 h-full flex flex-col justify-center items-center glow-box">
                <div className="text-8xl mb-6 animate-float">👩‍💻</div>
                <h3 className="font-heading text-2xl font-bold mb-2">Swetha P</h3>
                <p className="text-muted-foreground text-center">
                  B.Tech CSE • 2025
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Kongu Engineering College
                </p>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full animate-float" style={{ animationDelay: "0.5s" }}>
                  <span className="text-primary text-sm font-medium">7.31 CGPA</span>
                </div>
                <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full animate-float" style={{ animationDelay: "1s" }}>
                  <span className="text-secondary text-sm font-medium">CSI Member</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <p className="reveal stagger-3 text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science student with hands-on experience in{" "}
              <span className="text-foreground font-medium">UI/UX Design</span>,{" "}
              <span className="text-foreground font-medium">Frontend Development</span>, and{" "}
              <span className="text-foreground font-medium">Machine Learning</span>. 
              I love creating responsive, interactive web applications that deliver exceptional user experiences.
            </p>

            <p className="reveal stagger-4 text-lg text-muted-foreground leading-relaxed">
              My journey includes building everything from bus booking systems to AI-powered 
              Alzheimer's prediction models. I thrive in collaborative environments and am always 
              eager to learn new technologies.
            </p>

            {/* Highlights */}
            <div className="reveal stagger-5 grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="group glass p-4 rounded-xl hover-lift cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className={`w-8 h-8 mb-3 text-${item.color} group-hover:scale-110 transition-transform`} />
                  <p className="font-medium text-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
