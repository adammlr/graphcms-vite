import React from 'react';
import CallToAction from './CallToAction/CallToAction';
import Text from './Text/Text';
import TileContainer from './Tile/TileContainer';

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
    case 'Tiles':
      return <TileContainer pageSection={pageSection} key={pageSection.id} />;
    case 'Text':
      return <Text pageSection={pageSection} key={pageSection.id} />;
    case 'CallToAction':
      return <CallToAction pageSection={pageSection} key={pageSection.id} />;
    default:
      return <div key={pageSection.id}>{pageSection.componentType}</div>;
  }
}
