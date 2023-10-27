import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  source_link: string;
  image: string;
  stacks: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => (
  <div className="project-card bg-black text-white break-inside-avoid rounded overflow-hidden relative">
    {props.source_link !== 'N/A' ? (
      <a href={props.source_link} target="_blank" rel="noreferrer">
        <i className="fas fa-arrow-right absolute rotate-45 text-white text-2xl opacity-0 transition-all ease-in-out duration-300 top-2 left-96.5 hover:opacity-70 z-50"></i>
      </a>
    ) : (
      <span />
    )}
    <i className="far fa-arrow-up-right"></i>
    <Image src={props.image} alt="" className="w-full object-cover rounded-t" />
    <div className="card-description p-2 md:p-4 pb-5">
      <h3 className="text-white text-xl">{props.title}</h3>
      <p className="line-height-1.5">{props.description}</p>
      <div className="stacks flex flex-wrap gap-2">
        {props.stacks.map((stack, id) => (
          <button className="tech-stack rounded font-normal text-white text-base p-1 md:p-2 cursor-not-allowed hover:bg-#cb450c" key={id}>
            {stack}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
