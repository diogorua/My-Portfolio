import { ArrowRight, ArrowDown ,ExternalLink, Github } from "lucide-react";

const projects = [
    {
      id: 1,
      title: "2D Portfolio",
      description: "This project it's made with the kaboom.js library which is a library for making games in JavaScript.",
      image: "/projects/project1.png",
      tags: ["JavaScript", "HTML"],
      demoUrl: "https://diogorua.github.io/2D-Portfolio/",
      githubUrl: "https://github.com/diogorua/2D-Portfolio",
    },
    {
      id: 2,
      title: "MERN thinkboard",
      description:
        "This project is a complete notes application with important features like rate limiting (using Upstash, a serveless data platform) and responsive design.",
      image: "/projects/project2.png",
      tags: ["MongoDB", "Express.js", "Node.js", "React"],
      demoUrl: "https://mern-thinkboard-5f1v.onrender.com/",
      githubUrl: "https://github.com/diogorua/mern-thinkboard",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative min-h-screen">
            <div className="container mx-auto max-w-5xl ">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on recently. Click on the links to explore more about each project.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span key={key} className="px-2 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>

                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/diogorua" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <a href="#contact"><ArrowDown className="h-5 w-5 text-primary" /></a>
            </div> 
        </section>
    );
};