import React from "react";
import Project from "../components/Projects";
import Clients from "../components/Clients";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>

      <Project />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
