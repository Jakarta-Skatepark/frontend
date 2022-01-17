import { gql } from '@apollo/client';

export const LOAD_ALL_DATA = gql`
  query GetAllSkateparks {
    skateparks {
      id
      park_name
      park_image
      park_address
      park_area
      park_type
      park_description
      latitude
      longitude
    }
  }
`;

export const LOAD_CARD = gql`
  query GetAllSkateparks {
    skateparks {
      id
      park_name
      park_image
      park_area
      latitude
      longitude
    }
  }
`;

export const MAPS_DATA = gql`
  query GetAllSkateparks {
    skateparks {
      id
      park_name
      park_image
      latitude
      longitude
    }
  }
`;

export const LOAD_SKATEPARK = gql`
  query GetSkatepark($skateparkId: ID!) {
    skatepark(id: $skateparkId) {
      id
      park_name
      park_image
      park_address
      park_area
      park_type
      park_description
      park_obstacle {
        obstacle_name
        link
      }
      instagram
      latitude
      longitude
    }
  }
`;

export const LOAD_ALL_OBSTACLES = gql`
  query GetObstacles {
    obstacles {
      id
      obstacle_name
    }
  }
`;

export const LOAD_OBSTACLE = gql`
  query GetObstacle($obstacleId: ID!) {
    obstacle(id: $obstacleId) {
      id
      obstacle_name
      imageUrl
      description
    }
  }
`;

export const USER_ADMIN = gql`
  query GetAdmin {
    admin {
      id
      username
      password
    }
  }
`;

// MUTATION
export const CREATE_SKATEPARK = gql`
  mutation addSkatepark(
    $createSkateparkId: ID!
    $parkName: String!
    $parkImage: String!
    $parkArea: String!
    $parkType: String!
    $parkAddress: String!
    $parkDescription: String!
    $latitude: Float!
    $longitude: Float!
  ) {
    createSkatepark(
      id: $createSkateparkId
      park_name: $parkName
      park_image: $parkImage
      park_area: $parkArea
      park_type: $parkType
      park_address: $parkAddress
      park_description: $parkDescription
      latitude: $latitude
      longitude: $longitude
    ) {
      id
    }
  }
`;

export const UPDATE_SKATEPARK = gql`
  mutation editSkatepark(
    $updateSkateparkId: ID!
    $parkName: String!
    $parkImage: String!
    $parkArea: String!
    $parkType: String!
    $parkAddress: String!
    $parkDescription: String!
    $latitude: Float!
    $longitude: Float!
  ) {
    updateSkatepark(
      id: $updateSkateparkId
      park_name: $parkName
      park_image: $parkImage
      park_area: $parkArea
      park_type: $parkType
      park_address: $parkAddress
      park_description: $parkDescription
      latitude: $latitude
      longitude: $longitude
    ) {
      id
    }
  }
`;

export const DELETE_SKATEPARK = gql`
  mutation deleteSkatepark($deleteSkateparkId: ID!) {
    deleteSkatepark(id: $deleteSkateparkId)
  }
`;
// deleteSkatep
