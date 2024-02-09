import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../utils/mutations/clientMutations";
import { GET_CLIENTS } from "../utils/queries/clientQueries";
import { GET_PROJECTS } from "../utils/queries/projectQueries";

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { clientId: client._id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm trash" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
