import { useEffect, useRef } from "react";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend",
      color: "primary",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      title: "Design",
      color: "secondary",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "UI/UX", level: 85 },
        { name: "Prototyping", level: 80 },
        { name: "Visual Studio", level: 90 },
      ],
    },
    {
      title: "Backend & ML",
      color: "accent",
      skills: [
        { name: "Python", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "PHP", level: 70 },
        { name: "Machine Learning", level: 70 },
        { name: "GAN", level: 65 },
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="relative py-32 px-4">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="reveal text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            My Skills
          </span>
          <h2 className="reveal stagger-1 font-heading text-4xl md:text-6xl font-bold mb-6">
            Tools & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="reveal stagger-2 w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`reveal stagger-${catIndex + 2} glass rounded-2xl p-8 hover-lift`}
            >
              <h3 className={`font-heading text-2xl font-bold mb-8 text-${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/60 rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${skillIndex * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack icons */}
        <div className="reveal stagger-5 mt-20">
          <p className="text-center text-muted-foreground mb-8 tracking-widest uppercase text-sm">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["HTML", "CSS", "JS", "React", "Python", "MySQL", "Figma", "Git"].map((tech, index) => (
              <div
                key={tech}
                className="glass px-6 py-3 rounded-full hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
