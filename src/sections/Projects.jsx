import { ArrowUpRight, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState } from "react";
const projects = [
  {
    title: "PAYMEUSDT",
    description:
      "A fintech payment platform for freelancers and businesses to create invoices, send global payment links, and receive instant USDT payouts. Built landing pages in WordPress with a Laravel-based backend system.",
    image: "/projects/paymeusdt.png",
    tags: ["Laravel", "WordPress", "Payment Gateway", "Fintech"],
    live: "https://paymeusdt.com/",
    link: "https://app.paymeusdt.com/",
    github: "",
  },
  {
    title: "KULTRA AI",
    description:
      "An AI-powered marketing workspace featuring SaaS subscriptions, affiliate systems, wallet management, AI onboarding, and Airtable integration. Developed WordPress frontend and Laravel backend functionalities.",
    image: "/projects/kultra.png",
    tags: ["Laravel", "WordPress", "AI", "Airtable", "Python"],
    live: "https://kultra.ai/",
    link: "https://app.kultra.ai/",
    github: "",
  },
  {
    title: "EKART – Laravel eCommerce Platform",
    description:
      "Developed a scalable eCommerce platform with product management, shopping cart, order handling, and secure payment integration optimized for performance and security.",
    image: "/projects/ekart.png",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Jquery"],
    link: "",
    github: "https://github.com/NISAMNIZ/Ekart",
  },
  {
    title: "QuickBlog",
    description:
      "A blogging platform with authentication, role-based access control, post management, image uploads, comments, and real-time like functionality.",
    image: "/projects/quickblog.png",
    tags: ["Laravel", "PHP", "Jquery", "MySQL", "Bootstrap"],
    link: "",
    github: "https://github.com/NISAMNIZ/Blog-App",
  },
  // {
  //   title: "Campus Recruitment System",
  //   description:
  //     "Built a recruitment management platform allowing students and employers to connect securely with authentication, applicant tracking, and placement workflows.",
  //   image: "/projects/campus.png",
  //   tags: ["PHP", "MySQL", "HTML", "CSS"],
  //   link: "",
  //   github: "https://github.com/NISAMNIZ/Campus-Recruitment-System",
  // },
  {
    title: "OrbiVeritas",
    description:
      "Developed a professional WordPress website for a legal and strategic advisory firm based in the United States with a modern and responsive business-focused design.",
    image: "/projects/orbiveritas.png",
    tags: ["WordPress", "Elementor", "CSS", "Responsive Design"],
    link: "https://orbiveritas.com/",
    github: "",
  },
  {
    title: "My Investment In Dubai",
    description:
      "Created a Dubai real estate investment platform focused on attracting international investors with responsive layouts and optimized lead-generation pages.",
    image: "/projects/myinvestment.png",
    tags: ["WordPress", "Real Estate", "Responsive Design", "Elementor"],
    link: "https://www.myinvestmentindubai.com/",
    github: "",
  },
  {
    title: "Desert Palace Holidays",
    description:
      "Built a hospitality and holiday homes website for a Dubai-based rental business with booking-focused layouts and mobile-friendly design.",
    image: "/projects/desertpalace.png",
    tags: ["WordPress", "Hospitality", "CSS", "Elementor"],
    link: "https://desertpalaceholidays.com/",
    github: "",
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Landing Page */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      title="Landing Page"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <button onClick={() => setShowAll(!showAll)}>
            <AnimatedBorderButton>
              {showAll ? "Show Less" : "View All Projects"}
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </button>
        </div>
      </div>
    </section>
  );
};
