import React, { useState } from 'react';

import './App.css';

import Trash from './components/Trash.jsx';
import Computer from './components/Computer.jsx';
import RealJournal from './components/RealJournal.jsx';
import Journal from './components/Journal.jsx';
import Cloud from './components/Cloud.jsx';
import Cardboardbox from './components/Cardboardbox.jsx';
import DialogueBox from './components/DialogueBox.jsx';

import ObjectComponent from './components/Object.jsx';

import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [dialogue, setDialogue] = useState(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [activeObjectRef, setActiveObjectRef] = useState(null);
  
  const lampRef = React.useRef(null);
  const threadRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  const clockRef = React.useRef(null);
  const mirrorRef = React.useRef(null);

  const handleDialogueClick = () => {
    activeObjectRef?.current?.speak();
  };

  return (
    <div className="App">
      <HashRouter>
        <h1 style={{position: "absolute", top: "10%", left: "50%", transform: "translate(-50%, -10%)"}}>Where am I ?</h1>

        <Link 
          to="/trash" 
          style={{position: "absolute", left: "20%", top: "80%", transform: "translate(-20%, -80%)", pointerEvents: isInteracting ? "none" : "auto", opacity: isInteracting ? 0.5 : 1}}
        >
          Trash
        </Link>
        <Link 
          to="/computer"
          style={{position: "absolute", left: "70%", top: "40%", transform: "translate(-70%, -40%)", pointerEvents: isInteracting ? "none" : "auto", opacity: isInteracting ? 0.5 : 1}}
        >
          Computer
        </Link>
        <Link 
          to="/cloud"
          style={{position: "absolute", left: "30%", top:"30%", transform: "translate(-30%, -20%)", pointerEvents: isInteracting ? "none" : "auto", opacity: isInteracting ? 0.5 : 1}}
          >Cloud</Link>
        <Link 
          to="/cardboardbox"
          style={{position: "absolute", left: "40%", top:"70%", transform: "translate(-70%, -70%)", pointerEvents: isInteracting ? "none" : "auto", opacity: isInteracting ? 0.5 : 1}}
          >Cardboard box</Link>

        {dialogue && <DialogueBox text={dialogue.text} onClick={handleDialogueClick} />}

        <ObjectComponent
          ref={lampRef}
          x={750}
          y={200}
          label="Lamp"
          lines={[
            "Look, it's a lamp.",
            "It shines unconsistently.",
            "You can relate."
          ]}
          onSpeak={(text) => {
            setActiveObjectRef(lampRef);
            setIsInteracting(true);
            setDialogue({ text });
          }}
          onDialogueEnd={() => {
            setDialogue(null);
            setIsInteracting(false);
            setActiveObjectRef(null);
          }}
          isDisabled={isInteracting}
          isActive={activeObjectRef === lampRef}
        />

        <ObjectComponent
          ref={threadRef}
          x={1200}
          y={500}
          label="Red thread"
          lines={[
            "A simple red thread.",
            "It holds a deep meaning in your heart."
          ]}
          onSpeak={(text) => {
            setActiveObjectRef(threadRef);
            setIsInteracting(true);
            setDialogue({ text });
          }}
          onDialogueEnd={() => {
            setDialogue(null);
            setIsInteracting(false);
            setActiveObjectRef(null);
          }}
          isDisabled={isInteracting}
          isActive={activeObjectRef === threadRef}
        />

        <ObjectComponent
          ref={phoneRef}
          x={200}
          y={450}
          label="Cracked phone"
          lines={[
            "No new notifications.",
            "Still checking?",
            "Nothing changed."
          ]}
          onSpeak={(text) => {
            setActiveObjectRef(phoneRef);
            setIsInteracting(true);
            setDialogue({ text });
          }}
          onDialogueEnd={() => {
            setDialogue(null);
            setIsInteracting(false);
            setActiveObjectRef(null);
          }}
          isDisabled={isInteracting}
          isActive={activeObjectRef === phoneRef}
        />

        <ObjectComponent
          ref={clockRef}
          x={1300}
          y={300}
          label="Broken Clock"
          lines={[
            "Time passed.",
            "You noticed too late."
          ]}
          onSpeak={(text) => {
            setActiveObjectRef(clockRef);
            setIsInteracting(true);
            setDialogue({ text });
          }}
          onDialogueEnd={() => {
            setDialogue(null);
            setIsInteracting(false);
            setActiveObjectRef(null);
          }}
          isDisabled={isInteracting}
          isActive={activeObjectRef === clockRef}
        />
        <ObjectComponent
          ref={mirrorRef}
          x={900}
          y={400}
          label="Cracked mirror"
          lines={[
            "It's you.",
            "Your reflection changes everytime you look at it.",
            "But it's still you."
          ]}
          onSpeak={(text) => {
            setActiveObjectRef(mirrorRef);
            setIsInteracting(true);
            setDialogue({ text });
          }}
          onDialogueEnd={() => {
            setDialogue(null);
            setIsInteracting(false);
            setActiveObjectRef(null);
          }}
          isDisabled={isInteracting}
          isActive={activeObjectRef === mirrorRef}
        />
        
        <Routes>
          <Route path="/trash" element={<Trash />} />
          <Route path="/computer" element={<Computer />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/cardboardbox" element={<Cardboardbox />} />

          <Route path="/realjournal" element={<RealJournal />} />

          <Route path="/journal" element={<Journal />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;