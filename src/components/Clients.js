import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../utils/queries/clientQueries";
import ClientRow from "./ClientRow";

const Clients = () => {
  const { loading, data, error } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: something went wrong</p>;

  return (
    <table className="table table-hover mt-3">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data?.fetchAllClients.map((client) => (
          <ClientRow key={client._id} client={client} />
        ))}
      </tbody>
    </table>
  );
};

export default Clients;
