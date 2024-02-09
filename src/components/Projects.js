import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../utils/queries/projectQueries";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const { loading, data, error } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: something went wrong</p>;
  return (
    <div className="row mt-4">
      {data.fetchAllProjects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default Project;
