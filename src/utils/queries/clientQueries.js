import { gql } from "@apollo/client";

export const GET_CLIENTS = gql`
  query fetchAllClients {
    fetchAllClients {
      _id
      name
      email
      phone
    }
  }
`;
