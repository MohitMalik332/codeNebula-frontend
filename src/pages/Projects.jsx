import { useState } from "react";
import ProductCard from "../components/ProjectCard";


function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);


  const projects = [
    {
      title: "Portfolio Website",
      description: "Built using React and Spring Boot",
      category: "Major",
      skills: [
        { name: "React", value: 40, color: "#a855f7" },
        { name: "Spring", value: 35, color: "#ec4899" },
        { name: "CSS", value: 25, color: "#3b82f6" }
      ],
      github: "https://github.com/MohitMalik332",
      live: "https://your-live-link.com"
    },
    {
      title: "Todo App",
      description: "Simple React Todo Application",
      category: "Mini",
      skills: [
        { name: "Spring", value: 75, color: "#3beb55" },
        { name: "CSS", value: 25, color: "#cef33d" },
      ],
      github: "https://github.com/MohitMalik332",
      live: "https://mohitmalik332.github.io/react-todo-app/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">
        My Projects 🚀
      </h1>

      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {
          projects.map((project, index) => (
            <ProductCard 
              key={index}
              title={project.title}
              description={project.description}
              category={project.category}
              skills={project.skills}
              onClick={() => setSelectedProject(project)}
            />
          ))
        }

        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
            
            <div className="bg-gray-900 p-8 rounded-xl w-[90%] md:w-[500px] relative transform transition-all duration-500 scale-95 hover:scale-100">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              >
                ✖
              </button>

              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {selectedProject.title}
              </h2>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-200">Tech Stack</h3>
                
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition transform"
                >
                  GitHub
                </a>

                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 transition transform"
                >
                  Live Demo
                </a>

              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;