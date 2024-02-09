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
      _id
      name
      description
      status
      clientId {
        _id
      }
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($projectId: ID!) {
    deleteProject(projectId: $projectId) {
      _id
      name
      description
      status
      clientId {
        _id
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject($projectId: ID!, $status: Status!) {
    updateProject(projectId: $projectId, status: $status) {
      _id
      name
      description
      status
      clientId {
        _id
      }
    }
  }
`;
