const education = [
  {
    period: "2021 — 2023",
    degree: "Master of Computer Application (MCA)",
    school: "Kannur University",
    location: "Kannur, India",
    description:
      "Completed postgraduate studies focused on software development, database management systems, web technologies, and application development.",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
    current: false,
  },
  {
    period: "2018 — 2021",
    degree: "Bachelor of Computer Application (BCA)",
    school: "Jamia Hamdard Delhi University",
    location: "Kannur, India",
    description:
      "Built a strong foundation in programming, computer applications, web development, and software engineering concepts.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    current: false,
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-secondary-foreground text-sm font-medium tracking-widest uppercase animate-fade-in">
            Education
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground animate-fade-in animation-delay-100">
            Academic{" "}
            <span className="font-serif italic font-normal text-white">
              foundation.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My educational journey that built the foundation for my web
            development and software engineering career.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary/30 to-transparent" />

          <div className="space-y-10">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="relative pl-16 animate-fade-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-[13px] top-7 w-4 h-4 rounded-full bg-primary ring-4 ring-background timeline-glow" />

                {/* Card */}
                <div className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1">
                  {/* Top Row */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <span className="text-primary text-sm font-medium tracking-wide">
                        {edu.period}
                      </span>

                      <h3 className="text-2xl font-semibold mt-2 text-white">
                        {edu.degree}
                      </h3>

                      <p className="text-muted-foreground mt-1">
                        {edu.school} • {edu.location}
                      </p>
                    </div>

                    <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm w-fit">
                      Academic
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mt-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {edu.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-4 py-2 rounded-full bg-surface border border-border text-sm text-muted-foreground hover:border-primary/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
