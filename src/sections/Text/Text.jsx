import clsx from 'clsx';
import React from 'react';
import SectionItem from '../SectionItem';
import './Text.css';

export default function Text({ pageSection }) {
  return (
    <div
      className={clsx({
        inverted: pageSection.inverted,
        'text-container': true,
      })}
    >
      <SectionItem>
        <div className={clsx({ 'text-image-container': pageSection.image })}>
          <div className="text-list">
            <div className="text-line-1">{pageSection.line1}</div>
            <div className="text-line-2">{pageSection.line2}</div>
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
