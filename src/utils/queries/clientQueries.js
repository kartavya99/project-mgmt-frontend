import { gql } from "@apollo/client";

export const GET_CLIENTS = gql`
  query fetchAllClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;
