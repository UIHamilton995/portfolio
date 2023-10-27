import React, { useEffect } from 'react';
import './Projects.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { fetchProjects } from '../store/ProjectsSlice';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="projects" id="projects">
      <h1 className="title projects-title">featuRed pRojecTs</h1>
      <p className="projects-para">
        Deployed 10+ scalable websites and cross-platform applications.
        Collaborated in 5+ projects with development teams of over 20 product owners, managers co-developers and tech talents of diverse specialties. Looking for next project/role. Connect through github to view my projects.      
      </p>
      <div className="projects-container">
        {
          projects.map((project, id) => (
            <ProjectCard

              image={project.image_url}
              title={project.project_name}
              description={project.description}
              stacks={project.tech_stack}
              source_link={project.source_link}

            />import React, { useEffect } from 'react';
            import { useSelector, useDispatch } from 'react-redux';
            import { fetchProjects } from '../store/ProjectsSlice';
            import ProjectCard from '../components/ProjectCard';
            
            const Projects: React.FC = () => {
              const dispatch = useDispatch();
              const projects = useSelector((state) => state.projects.projects);
            
              useEffect(() => {
                dispatch(fetchProjects());
              }, [dispatch]);
            
              return (
                <div className="projects p-10 mb-10" id="projects">
                  <h1 className="text-right mt-8">featuRed pRojecTs</h1>
                  <p className="text-white text-1.5rem my-2 text-justify">
                    Deployed 10+ scalable websites and cross-platform applications.
                    Collaborated in 5+ projects with development teams of over 20 product owners, managers, co-developers, and tech talents of diverse specialties. Looking for the next project/role. Connect through GitHub to view my projects.
                  </p>
                  <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
                    {projects.map((project, id) => (
                      <ProjectCard
                        image={project.image_url}
                        title={project.project_name}
                        description={project.description}
                        stacks={project.tech_stack}
                        source_link={project.source_link}
                      />
                    ))}
                  </div>
                </div>
              );
            };
            
            export default Projects;
            
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
