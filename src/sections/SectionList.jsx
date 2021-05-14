import React from 'react';
import TileContainer from './Tile/TileContainer';
import Text from './Text/Text';
import './SectionList.css';

export default function SectionList({ sections }) {
  return (
    <div>
      {sections.map((pageSection) => {
        return renderSection(pageSection);
      })}
    </div>
  );
}

function renderSection(pageSection) {
  switch (pageSection.componentType) {
    case 'Bullets':
      return <TileContainer pageSection={pageSection} key={pageSection.id} />;
    case 'Text':
      return <Text pageSection={pageSection} key={pageSection.id} />;
    default:
      return <div key={pageSection.id}>{pageSection.componentType}</div>;
  }
}
