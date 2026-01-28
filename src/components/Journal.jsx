import React, { useEffect } from 'react';
import './../App.css';

function Journal() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.hash = '#/';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Journal">
      <div style={{ color: "rgb(212, 212, 212)", backgroundColor: "rgb(32, 32, 32)", fontSize: 12, padding: 8, width: "100%", height: "100%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", userSelect: "none" }}>
        <h1 style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>you thought you were smart, huh ?</h1>
        {console.log("nice try.")}
      </div>
    </div>
  );
}

export default Journal;