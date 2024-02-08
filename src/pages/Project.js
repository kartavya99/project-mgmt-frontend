import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../utils/queries/projectQueries";

const Project = () => {
  const { id } = useParams();

  const { loading, data, error } = useQuery(GET_PROJECT, {
    variables: { projectId: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: something went wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Go Back
          </Link>
          <h1>{data.fetchProject.name}</h1>
          <p>{data.fetchProject.description}</p>
          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.fetchProject.status}</p>
          <div>Client Info</div>
          <div>Edit Project from button</div>
          <div>Delete project button</div>
        </div>
      )}
    </>
  );
};

export default Project;
