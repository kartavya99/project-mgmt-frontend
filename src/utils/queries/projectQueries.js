import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query fetchAllProjects {
    fetchAllProjects {
      _id
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

export const GET_PROJECT = gql`
  query fetchProject($projectId: ID!) {
    fetchProject(projectId: $projectId) {
      _id
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
