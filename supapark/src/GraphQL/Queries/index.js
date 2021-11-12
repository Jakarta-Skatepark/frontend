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
      park_obstacles {
        id
        obstacle_name
      }
      park_geometry {
        latitude
        longitude
      }
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
      park_geometry {
        latitude
        longitude
      }
    }
  }
`;

export const MAPS_DATA = gql`
  query GetAllSkateparks {
    skateparks {
      id
      park_name
      park_geometry {
        latitude
        longitude
      }
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
      park_obstacles {
        id
        obstacle_name
      }
      park_geometry {
        latitude
        longitude
      }
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
