import React, { useState, forwardRef } from 'react';
import './../App.css'; 

const ObjectComponent = forwardRef(({ x, y, label, lines, onSpeak, onDialogueEnd, isDisabled, isActive }, ref) => {
  const [index, setIndex] = useState(0);

  const speak = () => {
    if (isDisabled && !isActive) return;
    if (index < lines.length) {
      onSpeak(lines[index]);
      setIndex((prev) => prev + 1);
    } else {
      // All lines read, close dialogue
      onDialogueEnd();
      setIndex(0);
    }
  };

  React.useImperativeHandle(ref, () => ({
    speak
  }));

  return (
    <div
      className="object"
      style={{
        position: "absolute",
        left: x,
        top: y,
        opacity: (isDisabled && !isActive) ? 0.6 : 1,
        cursor: 'pointer',
        pointerEvents: (isDisabled && !isActive) ? 'none' : 'auto'
      }}
      onClick={speak}
    >
      {label}
    </div>
  );
});

ObjectComponent.displayName = 'ObjectComponent';
export default ObjectComponent;