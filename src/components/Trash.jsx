import React, { useState } from 'react';
import CloseButton from './CloseButton';
import './../App.css';

function Trash() {

  const [items, setItems] = useState(null);

  return (
    <div className="Trash" style={{position: "absolute", left: "50%", top:"50%", transform:"translate(-50%, -50%)"}}>
      <CloseButton />
      <button onClick={() => {
        setItems(Math.floor(Math.random() * 9) + 1);
      }}>
        Search ?
      </button>

      {items === 9 ? (
        <div>
          You found a journal. Looks like it hasn't been used in a while.
          <br />
          <input type="text" placeholder="code..." />
        </div>
      ) : <div>You found trash.</div>}
    </div>
  );
}

export default Trash;