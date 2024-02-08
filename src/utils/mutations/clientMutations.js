import { gql } from "@apollo/client";

export const ADD_CLIENT = gql`
  mutation createClient($name: String!, $email: String!, $phone: String!) {
    createClient(name: $name, email: $email, phone: $phone) {
      _id
      name
      email
      phone
    }
  }
`;

export const DELETE_CLIENT = gql`
  mutation deleteClient($clientId: ID!) {
    deleteClient(clientId: $clientId) {
      _id
      name
      email
      phone
    }
  }
`;
