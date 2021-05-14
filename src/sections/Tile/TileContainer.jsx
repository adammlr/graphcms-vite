import React from 'react';
import clsx from 'clsx';
import './TileContainer.css';
import Tile from './Tile';
import SectionItem from '../SectionItem';

export default function TileContainer({ pageSection }) {
  return (
    <div
      className={clsx({
        inverted: pageSection.inverted,
        'tile-container': true,
      })}
    >
      <SectionItem>
        <div className="tile-list">
          {pageSection.tiles.map((tile) => {
            return <Tile tile={tile} key={tile.id} />;
          })}
        </div>
      </SectionItem>
    </div>
  );
}
