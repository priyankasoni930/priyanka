import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-gray-800 via-slate-600 to-slate-900 text-gray-100 font-sans">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <IntroSection />
        <SkillsSection />
        <ProjectsSection />
        <ConnectSection />
      </main>
    </div>
  );
}

function IntroSection() {
  return (
    <section className="mb-20 relative">
      <div className="absolute top-0 left-0 w-20 h-20 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 rounded-full opacity-10 blur-xl"></div>
      <h2 className="text-3xl font-bold mb-4">Hey I&apos;m Priyanka</h2>
      <p className="mb-4 text-xl">
        I am a{" "}
        <span className="font-semibold text-blue-300">
          Full Stack Developer
        </span>
      </p>
      <p className="mb-6 text-gray-300">
        I develop <span className="text-purple-300">FULL-STACK</span> apps/tools
      </p>

      <div className="flex space-x-6">
        <a
          href="https://github.com/priyankasoni930"
          className="text-gray-400 hover:text-blue-300 transition-colors"
        >
          <Github size={28} />
        </a>
        <a
          href="https://x.com/Priyankasoni930"
          className="text-gray-400 hover:text-purple-300 transition-colors"
        >
          <Twitter size={28} />
        </a>
          <a
          href="https://drive.google.com/file/d/1nRQxQxTyzh4HA0IMg3NTkhRvCdjdlPRH/view?usp=sharing"
          className="text-gray-400 hover:text-green-300 transition-colors font-semibold text-2xl"
          style={{ lineHeight: "28px", height: "28px" }}
          aria-label="CV"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Docker",
    "SQL",
    "MongoDB",
    "NodeJS",
    "ExpressJS",
    "Python",
    "GIT",
  ];

  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <p className="mb-4">CRAFTING FULL STACK WEB APPS</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-800 text-gray-200 px-3 py-1 rounded-md text-sm border border-gray-700 hover:border-blue-500 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
   // {
  //   name: "Duel Quest",
  //   description:
  //     "Dual Quest is an engaging two-player game designed to offer exciting and competitive gameplay. Whether you're competing with friends or family, Dual Quest delivers an enjoyable and interactive gaming adventure.",
  //   github: "https://github.com/priyankasoni930/Dual-Quest",
  //   link: "https://priyankasoni930.github.io/Dual-Quest/",
  //   form: "fullstack",
  //   techStack: ["HTML", "CSS", "JavaScript"],
  // },
  const projects = [
    {
      name: "Interview-Buddy",
      description:
        "Interview-Buddy is an app providing personalized interview simulations and AI-powered performance analysis. Designed to help users refine their interview skills.",
      github: "https://github.com/priyankasoni930/Interview-Buddy",
      link: "https://main--interview-buddy-pri.netlify.app/",
      form: "fullstack",
      techStack: [
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Gemini AI",
        "Drizzle"
      ],
    },

     {
      name: "Content-Creator",
      description:
        "Content Creator is a website designed to assist creators in generating high-quality content effortlessly. Content Creator has many templates with which you can produce engaging and polished content ",
      github: "https://github.com/priyankasoni930/Content-Creator.ai",
      link: "https://content-creator-ai-rose.vercel.app/",
      form: "fullstack",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "Gemini AI",
        "Drizzle",
      ],
    },

     {
      name: "BlogNest",
      description:
        "BlogNest is a user-friendly blogging platform designed to make creating, editing, and publishing content effortless, BlogNest also includes commenting, following, and activity tracking functionalities, making it easy to engage with your audience and stay updated on the activity of those you follow.",
      github: "https://github.com/priyankasoni930/BlogNest",
      link: "https://blog-nest-steel.vercel.app/",
      form: "fullstack",
      techStack: [
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "MongoDB",
      ],
    },
    
    {
      name: "LinkShrink",
      description:
        "LinkShrink is a sleek URL shortener website, designed to make sharing links easier and more efficient. LinkShrink allows users to quickly shorten long URLs, track click statistics, and manage their links effortlessly.",
      github: "https://github.com/priyankasoni930/LinkShrink",
      link: "https://link-shrink-snowy.vercel.app/",
      form: "fullstack",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Prisma"],
    },
    
    {
      name: "Virtual-Herbal-Garden",
      description:
        "Virtual Herbal Garden is a educational platform This website educates users about medicinal plants through detailed descriptions also features an engaging quiz to test your knowledge and a responsive chatbot to provides personalized insights and recommendations.",
      github: "https://github.com/priyankasoni930/Herbal-Garden",
      link: "https://herbal-garden-blue.vercel.app/",
      form: "fullstack",
      techStack: ["Next.js", "JavaScript", "Tailwind CSS", "Gemini AI"],
    },

    {
      name: "StoryNest",
      description:
        "StoryNest is a backend platform designed to provide a Wattpad-like experience for reading and writing stories.",
      github: "https://github.com/priyankasoni930/StoryNest-Backend",
      link: "#",
      form: "backend",
      techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    },
    {
      name: "DevInquire",
      description:
        "DevInquire is a backend  designed to support a Stack Overflow-like platform. It facilitates efficient question-and-answer interactions, enabling developers to seek help and share knowledge effortlessly. ",
      github: "https://github.com/priyankasoni930/DevInquire-Backend",
      link: "#",
      form: "backend",
      techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    },
   
  ];

  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
          >
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm border border-gray-600 hover:border-blue-500 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                >
                  <Github size={20} className="mr-1" /> GitHub
                </a>
                {project.form !== "backend" && (
                  <a
                    href={project.link}
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                  >
                    <ExternalLink size={20} className="mr-1" /> View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ConnectSection() {
  return (
    <section className="mb-20 text-center">
      <h2 className="text-2xl font-bold mb-4">Wanna Connect?</h2>
      <p className="mb-6 text-gray-300">
        Hit me up on Twitter or LinkedIn. I&apos;d love to chat!
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://x.com/Priyankasoni930"
          className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
        >
          <Twitter size={24} className="mr-2" /> Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/priyanka-soni-6a9798293/"
          className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
        >
          <Linkedin size={24} className="mr-2" /> LinkedIn
        </a>
      </div>
    </section>
  );
}
