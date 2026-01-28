import React, { useState } from 'react';
import ObjectComponent from './Object';
import DialogueBox from './DialogueBox';
import CloseButton from './CloseButton';
import './../App.css';

function Cardboardbox() {

  const [dialogue, setDialogue] = useState(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [activeObjectRef, setActiveObjectRef] = useState(null);

  const maskRef = React.useRef(null);
  const booksRef = React.useRef(null);
  const earphonesRef = React.useRef(null);

  const handleDialogueClick = () => {
    activeObjectRef?.current?.speak();
  };

  return (
    <div className='Cardboardbox'>
      <CloseButton />
      <div style={{ color: "rgb(212, 212, 212)", backgroundColor: "rgb(32, 32, 32)", fontSize: 36, padding: 8, width: "80%", height: "65%", position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -40%)", userSelect: "none" }}>
        <ObjectComponent
          ref={maskRef}
          x={"10%"}
          y={"30%"}
          label="Mask"
          lines={[
            "A double faced mask.",
            "One side smiles, the other frowns.",
            "It turns slightly when you're not looking.",
            "It feels lighter than it should."
          ]}
          onSpeak={(text) => {
            setActiveObjectRef(maskRef);
            setIsInteracting(true);
            setDialogue({ text });
          }}
          onDialogueEnd={() => {
            setDialogue(null);
            setIsInteracting(false);
            setActiveObjectRef(null);
          }}
          isDisabled={isInteracting}
          isActive={activeObjectRef === maskRef}
        />
        <ObjectComponent
          ref={booksRef}
          x={"40%"}
          y={"30%"}
          label="Books"
          lines={[
            "A stack of old books.",
            "You swore you'd read them someday. The dust disagrees.",
            "They have lost hope."
          ]}
          onSpeak={(text) => {
            setActiveObjectRef(booksRef);
            setIsInteracting(true);
            setDialogue({ text });
          }}
          onDialogueEnd={() => {
            setDialogue(null);
            setIsInteracting(false);
            setActiveObjectRef(null);
          }}
          isDisabled={isInteracting}
          isActive={activeObjectRef === booksRef}
        />
        <ObjectComponent
          ref={earphonesRef}
          x={"70%"}
          y={"30%"}
          label="Earphones"
          lines={[
            "Earphones, perfectly tangled.",
            "Thinking about them makes them even more tangled.",
            "They still work, though. You put them on."
          ]}
          onSpeak={(text) => {
            setActiveObjectRef(earphonesRef);
            setIsInteracting(true);
            setDialogue({ text });
          }}
          onDialogueEnd={() => {
            setDialogue(null);
            setIsInteracting(false);
            setActiveObjectRef(null);
          }}
          isDisabled={isInteracting}
          isActive={activeObjectRef === earphonesRef}
        />
      </div>
      {dialogue && <DialogueBox text={dialogue.text} onClick={handleDialogueClick} />}
    </div>
  );
}

export default Cardboardbox;