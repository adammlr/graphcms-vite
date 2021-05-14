import React from 'react';

import './App.css';
import { useQuery, gql } from '@apollo/client';
import SectionList from './sections/SectionList';

const QUERY = gql`
  query PageData {
    pages {
      title
      sections {
        ... on TileSection {
          id
          componentType
          inverted
          tiles {
            id
            line1
            line2
            image {
              url
            }
          }
        }
        ... on CallToActionSection {
          id
          componentType
          line1
          line2
          line3
          buttonText
          comment
        }
        ... on TextSection {
          id
          componentType
          inverted
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

export default function App() {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <SectionList sections={data.pages[0].sections} />;
}
