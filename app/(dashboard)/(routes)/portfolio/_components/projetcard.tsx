// ProjectCard.tsx
"use client";
import React from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  image?: string | null;
  link?: string | null;
  // Ajoutez d'autres propriétés si nécessaire
}

interface ProjectCardProps {
  project: Project;
}
// ... (imports)

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative w-full sm:w-70 h-64 cursor-pointer overflow-hidden">
      <div className="w-full h-full transition-transform transform scale-100 hover:scale-110">
        <img
          src={project.image || ""}
          alt={project.name}
          className="w-full h-full object-cover transition-all duration-300 hover:brightness-90 hover:blur-3"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 opacity-0 hover:opacity-100">
        <h2 className="text-white text-lg font-bold mb-2">{project.name}</h2>
        <p className="text-white text-sm mb-4 text-center">{project.description}</p>
        <a
          href={project.link || undefined}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold bg-sky-500 py-2 px-4"
        >
          Accéder au projet
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
