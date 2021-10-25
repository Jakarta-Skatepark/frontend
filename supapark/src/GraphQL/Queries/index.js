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
