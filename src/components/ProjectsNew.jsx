import React from "react";
import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";
import { useFetchProjects } from "../fetchProjects";

const Projects = () => {
  const { projects, loading } = useFetchProjects();
  //   console.log(projects);
  if (loading) {
    return <h2 className=" text-center">Loading...</h2>;
  }
  return (
    <section className="py-20 align-element" id="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="grid py-16 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
