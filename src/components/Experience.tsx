import { useEffect, useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
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

  const experiences = [
    {
      title: "Machine Learning Engineer Intern",
      company: "Vcodez",
      location: "Remote",
      period: "2025 - Present",
      description: [
        "Developing and implementing machine learning models for various applications",
        "Working with data preprocessing, feature engineering, and model optimization",
        "Collaborating with cross-functional teams on AI-driven solutions",
        "Contributing to research and development of innovative ML algorithms",
      ],
      current: true,
    },
    {
      title: "UI/UX Designer",
      company: "Freelance & Academic Projects",
      location: "Chennai, India",
      period: "2022 - 2024",
      description: [
        "Designed user interfaces for web applications using Figma and Adobe XD",
        "Created responsive and interactive prototypes for client projects",
        "Conducted user research and implemented design thinking methodologies",
        "Developed personal portfolio showcasing design and development skills",
      ],
      current: false,
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="relative py-32 px-4">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="reveal text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Experience
          </span>
          <h2 className="reveal stagger-1 font-heading text-4xl md:text-6xl font-bold mb-6">
            Work <span className="text-gradient">Journey</span>
          </h2>
          <div className="reveal stagger-2 w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`reveal stagger-${index + 2} relative mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 -translate-y-1 ${
                  exp.current
                    ? "bg-primary animate-pulse shadow-[0_0_20px_hsl(var(--primary))]"
                    : "bg-muted border-2 border-primary"
                }`}
              />

              {/* Content card */}
              <div
                className={`ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
              >
                <div className="glass rounded-2xl p-8 hover-lift group">
                  {/* Current badge */}
                  {exp.current && (
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-3 py-1 rounded-full text-sm mb-4">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Currently Working
                    </div>
                  )}

                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-secondary" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
