import React, { useState } from 'react';
import './../App.css';

function Trash() {

  const [items, setItems] = useState(null);

  return (
    <div className="Trash">
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