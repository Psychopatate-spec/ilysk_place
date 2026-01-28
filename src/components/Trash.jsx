import React, { useState } from 'react';
import CloseButton from './CloseButton';
import './../App.css';

function Trash() {

  const code = "i need a break";
  const [items, setItems] = useState(null);

  return (
    <div className="Trash">
      <CloseButton />
      <div style={{ color: "rgb(212, 212, 212)", backgroundColor: "rgb(32, 32, 32)", fontSize: 12, padding: 8, width: 200, height: 200, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", userSelect: "none" }}>
        <button onClick={() => {
          setItems(Math.floor(Math.random() * 9) + 1);
        }}>
          Search ?
        </button>

        {items === 9 ? (
          <div>
            You found a journal. Looks like it hasn't been used in a while.
            <br />
            <input id="code" type="password" placeholder="code..." />
            <input id="submit" type="submit" onClick={() => {
              const passwordInput = document.getElementById('code').value;
              if (passwordInput === code) {
                window.location.hash = '#/realjournal';
              } else {
                alert('Wrong code');
              }
            }} />
          </div>
        ) : <div>You found trash.</div>}
      </div>
    </div>
  );
}

export default Trash;