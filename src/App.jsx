import React from 'react';

import './App.css';
import { useQuery, gql } from '@apollo/client';

const QUERY = gql`
  query PageData {
    pages {
      title
      sections {
        ... on BulletSection {
          componentType
          inverted
          bulletPoints {
            line1
            line2
            image {
              url
            }
          }
        }
        ... on CallToActionSection {
          componentType
          line1
          line2
          line3
          buttonText
          comment
        }
        ... on TextSection {
          componentType
          line1
          line2
          image {
            url
          }
        }
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default App;
