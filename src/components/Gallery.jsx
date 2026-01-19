import React from 'react';
import './../App.css';

function Gallery() {
  return (
    <div className="Gallery">
      <h1>Gallery</h1>
      <p>A collection of my drawings</p>
      <div className="grid-container">
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>
    </div>
  );
}

export default Gallery;