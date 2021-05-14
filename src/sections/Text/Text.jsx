import clsx from 'clsx';
import React from 'react';
import SectionItem from '../SectionItem';
import './Text.css';

export default function Text({ pageSection }) {
  return (
    <div
      className={clsx({
        inverted: pageSection.inverted,
        textContainer: true,
      })}
    >
      <SectionItem>
        <div className={clsx({ textImageContainer: pageSection.image })}>
          <div className="textList">
            <div className="textLine1">{pageSection.line1}</div>
            <div className="textLine2">{pageSection.line2}</div>
          </div>
          {pageSection.image && (
            <div>
              <img src={pageSection.image.url} />
            </div>
          )}
        </div>
      </SectionItem>
    </div>
  );
}
