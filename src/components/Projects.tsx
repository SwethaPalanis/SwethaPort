import { useEffect, useRef } from "react";
import { ExternalLink, Github, Brain, Database, Globe, User } from "lucide-react";

const Projects = () => {
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

  const projects = [
    {
      title: "Alzheimer's Disease Prediction",
      description:
        "A Hybrid Approach using GA-Enabled GAN for predicting Alzheimer's Disease from MRI scans with optimized accuracy.",
      technologies: ["Python", "GAN", "Genetic Algorithm", "Machine Learning"],
      icon: Brain,
      color: "accent",
      highlights: ["OASIS Dataset", "Image Generation", "GA Optimization"],
    },
    {
      title: "Online Bus Booking System",
      description:
        "Full-stack web application for searching, booking, and managing bus tickets with payment integration.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
      icon: Globe,
      color: "primary",
      highlights: ["Responsive Design", "Seat Management", "Payment System"],
    },
    {
      title: "Student NPTEL Database",
      description:
        "Comprehensive database system for managing NPTEL student information and course details with role-based access.",
      technologies: ["MySQL", "PHP", "Web Technologies"],
      icon: Database,
      color: "secondary",
      highlights: ["Schema Design", "Authentication", "Query Optimization"],
    },
    {
      title: "Personal Portfolio",
      description:
        "Responsive portfolio website showcasing UI/UX design skills, frontend development, and project experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
      icon: User,
      color: "primary",
      highlights: ["Responsive", "Interactive", "Cross-browser"],
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="relative py-32 px-4">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="reveal text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="reveal stagger-1 font-heading text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="reveal stagger-2 w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`reveal stagger-${index + 2} group relative`}
            >
              <div className="glass rounded-2xl p-8 h-full hover-lift overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl bg-${project.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className={`w-7 h-7 text-${project.color}`} />
                </div>

                {/* Content */}
                <h3 className="relative font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="relative text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="relative flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className={`px-3 py-1 bg-${project.color}/10 text-${project.color} text-sm rounded-full border border-${project.color}/20`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="relative flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="relative flex gap-4">
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm">Demo</span>
                  </button>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-${project.color}/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
