import React from "react";

const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "Bootstrap",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
      },
      {
        name: "WordPress",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg",
      },
      {
        name: "Shopify",
        image:
          "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      },
       {
      name: "jQuery",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg",
    },
    {
      name: "AJAX",
      image:
        "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
    },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Laravel",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg",
      },
      {
        name: "PHP",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      },
      {
        name: "REST API",
        image:
          "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
      {
        name: "Authentication",
        image:
          "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
      },
      {
        name: "Payment Gateway",
        image:
          "https://cdn-icons-png.flaticon.com/512/2489/2489756.png",
      },
    ],
  },

  {
    title: "Tools & Others",
    skills: [
      {
        name: "Git",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/favicons/favicon-dark.png",
      },
      {
        name: "Postman",
        image:
          "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        name: "VS Code",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      },
      {
        name: "Cloudways",
        image:
          "https://intercom.help/cloudways-e06408453e30/assets/favicon",
      },
      {
        name: "cPanel",
        image:
          "https://cdn-icons-png.flaticon.com/512/5968/5968332.png",
      },
      {
      name: "MS Office",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
        name: "Netlify",
        image:
          "https://www.netlify.com/favicon/icon.svg",
      },
      {
        name: "Vercel",
        image:
          "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/favicon.ico",
      },
    ],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 lg:px-16 xl:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            My Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Skills &
            <span className="text-primary"> Technologies</span>
          </h2>

          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to build modern web applications,
            scalable backend systems, eCommerce platforms, and responsive user
            experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/40 transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                {category.title}
              </h3>

              {/* Skill Items */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-background/40 border border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                    />

                    <span className="text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};