// Students: this is the main file you should edit for your portfolio.
// Replace the placeholder values below with your own information.

const portfolioData = {
  name: "Sphere Moghadami",
  headline: "Your short headline goes here",
  intro:
    "Hi, I'm Sphere (also known as Seth). I'm a university student interested in Computer Science. This portfolio shows a few things I've made and what I'm learning.",
  aboutText:
    "I'm studying [your major] and working on [your interests]. Add a few sentences here about what you care about and what you would like to do next.",

  email: "smoghai2s@gmail.com",
  githubUrl: "",
  linkedinUrl: "",
  resumePath: "",
  profileImage: "",
  profileImageAlt: "Portrait of NAME",

  skills: ["Python", "HTML/CSS", "JavaScript", "SQL"],

  // Add another project by copying one object, changing its values, and adding a comma.
  projects: [
    {
      title: "Sinema",
      description:
        "Sinema is a full-stack movie and TV review platform that allows users to discover, save, rate, and review media through an interactive web experience. The application integrates the TMDB API for movie and TV data and uses OpenRouter AI to provide natural language media discovery. Built with Flask, SQLAlchemy, SQLite, JavaScript, and Bootstrap, Sinema demonstrates experience with API integration, authentication systems, database-driven applications, and modular web architecture. Originally developed as a collaborative software development project, Sinema has continued to evolve through additional feature development, improvements, and maintenance.",
      technologies: ["HTML/CSS", "JavaScript", "Python", "Flask", "Bootstrap 5", "SQLite", "REST API", "OpenRouter API"],
      image: "public/images/sinema.PNG",
      imageAlt: "Screenshot of Sinema",
      githubUrl: "https://github.com/SethMoga/Sinema",
      liveDemoUrl: "https://sinema-sigma.vercel.app"
    },
    {
      title: "DailyMunchin",
      description:
        "Use a second project to show a different skill, class assignment, or personal interest.",
      technologies: ["Technology One", "Technology Three"],
      image: "",
      imageAlt: "Screenshot of Project Two",
      githubUrl: "",
      liveDemoUrl: ""
    },
    {
      title: "Project Three",
      description:
        "Choose a project you would be comfortable discussing in an interview.",
      technologies: ["Technology Two", "Technology Four"],
      image: "",
      imageAlt: "Screenshot of Project Three",
      githubUrl: "",
      liveDemoUrl: ""
    }
  ]
};

export default portfolioData;
