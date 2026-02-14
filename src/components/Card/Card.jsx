import React from 'react';
import './Card.css';

/**
 * Card Component
 * Reusable card for displaying projects and skills
 * Features hover overlay that reveals an image
 * 
 * @param {string} title - Card title text
 * @param {string} image - Image source path for hover overlay
 */
function Card({ title, image }) {
  return (
    <div className="card">
      {/* Card title with gradient text */}
      <h1>{title}</h1>
      
      {/* Hover overlay - hidden by default, slides up on card hover */}
      <div className="hoverCard">
        <img src={image} alt={`${title} preview`} />
      </div>
    </div>
  );
}

export default Card;