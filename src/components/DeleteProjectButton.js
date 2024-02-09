import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../utils/mutations/projectMutations";
import { GET_PROJECTS } from "../utils/queries/projectQueries";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const DeleteProjectButton = ({ projectId }) => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { projectId: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });
  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-r" onClick={deleteProject}>
        <FaTrash className="icon" />
        Delete Project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
