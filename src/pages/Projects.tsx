import React from 'react'
import { NextSeo } from 'next-seo';


type Props = {}

const Projects = (props: Props) => {
  
  return (
    <>
    <NextSeo title='🚀 Projects'/>
      <div className="projects p-10 mb-10" id="projects">
        <h1 className="text-right mt-8">FeAtUrEd pRoJeCtS</h1>
        <p className="text-white text-1.5rem my-2 text-justify">
          Deployed 10+ scalable websites and cross-platform applications.
          Collaborated in 5+ projects with development teams of over 20 product
          owners, managers, co-developers, and tech talents of diverse
          specialties. Looking for the next project/role. Connect through GitHub
          to view my projects.
        </p>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
          {/* {projects.map(
            (
              project: {
                id: Key | null | undefined;
                image_url: string;
                project_name: string;
                description: string;
                tech_stack: string[];
                source_link: string;
              },
              id: any
            ) => (
              <ProjectCard
                key={project.id}
                image_url={project.image_url}
                project_name={project.project_name}
                description={project.description}
                tech_stack={project.tech_stack}
                source_link={project.source_link} id={undefined}
              />
            )
          )} */}
        </div>
      </div>
    </>
  );

}

export default Projects