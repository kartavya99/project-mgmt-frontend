import { gql } from "@apollo/client";

export const ADD_PROJECT = gql`
  mutation createProject(
    $name: String!
    $description: String!
    $status: Status!
    $clientId: ID!
  ) {
    createProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      status
      clientId {
        _id
        email
        name
        phone
      }
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($projectIdL: ID!) {
    deleteProject(projectId: $projectId) {
      id
      name
      description
      status
      clientId {
        _id
        email
        name
        phone
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject($ProjectId: ID!, $status: Status!) {
    updateProject(projectId: $projectId, status: $status) {
      id
      name
      description
      status
      clientId {
        _id
        email
        name
        phone
      }
    }
  }
`;
