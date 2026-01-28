import React, { useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import CloseButton from './CloseButton';
import './../App.css';

function RealJournal() {
  return (
    <div className="RealJournal">
      <CloseButton />
      <div style={{ color: "rgb(212, 212, 212)", backgroundColor: "rgb(32, 32, 32)", fontSize: 12, padding: 8, width: 400, height: 500, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", userSelect: "none" }}>
        <HTMLFlipBook width={400} height={500}>
          <div className="page" style={{ backgroundColor: "white", color: "black", padding: 20 }}>
            <h2 style={{textAlign: "center"}}>i need a break</h2>
          </div>
          <div className="page" style={{ backgroundColor: "white", color: "black", padding: 20 }}>
            <p>This is "What I keep".<br />A room where I keep objects that I don't need anymore.<br />I never know when they might be useful again.</p>
          </div>
          <div className="page" style={{ backgroundColor: "white", color: "black", padding: 20 }}>
            <p>Instead of letting my thoughts wander, <br />I store them here.<br /><br />I'm afraid of losing them.<br /><br/ >Even the ones that don't make sense.<br />They made sense at the time.</p>
          </div>
          <div className="page" style={{ backgroundColor: "white", color: "black", padding: 20 }}>
            <p>Objects are easier to deal with than people<br />They don't change their meaning.<br />Unless I tell them to.</p>
          </div>
          <div className="page" style={{ backgroundColor: "white", color: "black", padding: 20 }}>
            <p>The box is not for people,<br/>it's for what they leave behind in me.<br /><br />A gesture.<br />A habit.<br />A thread.</p>
          </div>
          <div className="page" style={{ backgroundColor: "white", color: "black", padding: 20 }}>
            <p>I kept the mask because it worked.<br /><br />One face helped me stay.<br />The other helped me leave.<br /><br />I don't remember which one people preferred.</p>
          </div>
          <div className="page" style={{ backgroundColor: "white", color: "black", padding: 20 }}>
            <p>The thread doesn't do anything.<br />It's good when objects stay still.<br /><br />It was given to me by my best friend.<br />I never used it.<br />It still makes me smile.</p>
          </div>
          <div className="page" style={{ backgroundColor: "white", color: "black", padding: 20 }}>
            <p>Sometimes I wonder,<br />if this room is helping me remember,<br />or helping me avoid forgetting.</p>
          </div>
          <div className="page" style={{ backgroundColor: "white", color: "black", padding: 20 }}>
            <p>I know it took effort to get here.<br /><br />I’m sorry if you expected something clearer.<br /><br />I built all these obstacles<br />I built all these obstacles<br />had to be earned.<br /><br />I’m not sure that’s true anymore.</p>
          </div>
          <div className="page" style={{ backgroundColor: "white", color: "black", padding: 20 }}>
            <p>I could keep on writing,<br />but naming things too precisely<br /> makes them stop moving.</p>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}

export default RealJournal;