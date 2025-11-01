import {
  ProjectPlanet
} from './ProjectPlanet';
import {
  ProjectModal
} from './ProjectModal';
import {
  useState, forwardRef
} from 'react';
import {Project, projects} from '../data/projects';



export const ProjectsSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

 

  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Animated nebula background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(45deg, #00D4FF, #4A1F6B, #00FFC4, #1A1F4B)',
          backgroundSize: '400% 400%',
          animation: 'nebula-shift 15s ease infinite'
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-20 bg-gradient-to-r from-[#00FFC4] to-[#7B4B8B] bg-clip-text text-transparent px-4">
          Orbital Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 sm:gap-16 place-items-center">
          {projects.map((project, index) => (
            <ProjectPlanet
              key={index}
              title={project.title}
              description={project.description}
              gradient={project.gradient}
              delay={index * 0.15}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          {...selectedProject}
        />
      )}
    </section>
  );
});