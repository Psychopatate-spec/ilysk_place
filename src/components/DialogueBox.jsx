import React from "react";
import "./../App.css";

function DialogueBox({ text, onClick }) {
  return (
    <div 
      className="dialogue-box"
      style={{ position: "absolute", left: "50%", top: "90%", transform: "translate(-50%, -90%)", cursor: "pointer" }}
      onClick={onClick}
    >
      <h2>{text}</h2>
    </div>
  );
}

export default DialogueBox;