import React from "react";
import Project from "../components/Projects";
import Clients from "../components/Clients";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <h1>Add Client Modal</h1>
        <h1>Add Project Modal</h1>
      </div>

      <Project />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
