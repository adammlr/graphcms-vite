import React from 'react';
import './CallToAction.css';

export default function CallToAction({ pageSection }) {
  return (
    <div className="cta-container">
      <div className="cta-photo">
        <img src={pageSection.photo.url} />
      </div>
      <div className="cta-text">
        <div className="cta-text-content">
          <div className="cta-comments">{pageSection.comment}</div>
          <div className="cta-line1">{pageSection.line1}</div>
          <div className="cta-line2">{pageSection.line2}</div>
          <div className="cta-line3">{pageSection.line3}</div>
          <div>
            <button className="cta-button">{pageSection.buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
