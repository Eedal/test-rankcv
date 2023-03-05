import { gql } from "@apollo/client";


export const GET_CHARACTERS = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        image
        status
        episode {
          id
        }
        location {
          id
          name
        }
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;


export const GET_CHARACTER = gql`
  query character($characterId: ID!) {
    character(id: $characterId) {
      name
      image
      status
      episode {
        id
      }
      id
      location {
        id
        name
      }
    }
  }
`;



export const GET_EPISODES = gql`
  query episodes {
    episodes {
      results {
        id
        name
        air_date
        characters {
          name
          image
          status
          id
          location {
            id
            name
          }
        }
      }
    }
  }
`;

export const GET_LOCATIONS = gql`
  query locations {
    locations {
      results {
        id
        name
        residents {
          name
          image
          status
          episode {
            id
          }
          id
          location {
            id
            name
          }
        }
      }
    }
  }
`;
