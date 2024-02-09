import React, { useState } from "react";
import { GET_PROJECTS } from "../utils/queries/projectQueries";
import { useMutation } from "@apollo/client";
import { UPDATE_PROJECT } from "../utils/mutations/projectMutations";

const EditProjectForm = ({ project }) => {
  const [status, setStatus] = useState("");

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { status, projectId: project._id },
    refetchQueries: [
      { query: GET_PROJECTS, variables: { projectId: project._id } },
    ],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!status) {
      return alert("Please fill out all fields");
    } else {
      const { data } = await updateProject({
        variables: { status },
      });
    }
  };

  return (
    <>
      <div className="mt-5">
        <h3>Update Project Details</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              id="status"
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Planning">Planning</option>
              <option value="Progress">Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProjectForm;
