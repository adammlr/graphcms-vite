import React from 'react';
import './Tile.css';

export default function Tile({ tile }) {
  return (
    <div className="tile">
      <div className="tile__image">
        <img src={tile.image.url}></img>
      </div>
      <div className="tile__text">{tile.line1}</div>
      <div className="tile__text2">{tile.line2}</div>
    </div>
  );
}
