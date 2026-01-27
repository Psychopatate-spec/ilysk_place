import React, { useState, useEffect } from 'react';
import './../App.css';

function Cloud() {

  const [thoughts_displayed, setThoughtsDisplayed] = useState([]);

  const thoughts = [
    {
      id: 1,
      text1: "I'm fine",
      text2: "I'm not fine",
      text3: "I'm meh"
    },
    {
      id: 2,
      text1: "I don't care",
      text2: "I care",
      text3: "I care too much"
    },
    {
      id: 3,
      text1: "I'm shaking",
      text2: "I feel cold",
      text3: "Why am I shaking?"
    },
    {
      id: 4,
      text1: "I should have",
      text2: "I should stop",
      text3: "I should sleep"
    },
    {
      id: 5,
      text1: "It's nothing",
      text2: "It's not nothing",
      text3: "It's everything"
    },
    {
      id: 6,
      text1: "I want to",
      text2: "I don't want to",
      text3: "I hate to"
    }
  ]

  // Show a new random thought every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
      const newThought = {
        id: Date.now(),
        data: randomThought,
        currentText: randomThought.text1
      };
      setThoughtsDisplayed((prev) => {
        const updated = [...prev, newThought];
        if (updated.length > 5) {
          updated.shift(); // Remove the oldest thought
        }
        return updated;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle removal after 5 seconds for each thought
  useEffect(() => {
    if (thoughts_displayed.length === 0) return;

    const lastThought = thoughts_displayed[thoughts_displayed.length - 1];

    const removeTimeout = setTimeout(() => {
      setThoughtsDisplayed((prev) => prev.slice(1));
    }, 5000);

    return () => {
      clearTimeout(removeTimeout);
    };
  }, [thoughts_displayed.length]);

  // Handle text change on hover
  const handleHover = (thoughtId) => {
    setThoughtsDisplayed((prev) => {
      return prev.map((thought) => {
        if (thought.id === thoughtId) {
          const texts = [
            thought.data.text1,
            thought.data.text2,
            thought.data.text3,
          ].filter(Boolean);
          const others = texts.filter((t) => t !== thought.currentText);
          if (others.length > 0) {
            return {
              ...thought,
              currentText: others[Math.floor(Math.random() * others.length)]
            };
          }
        }
        return thought;
      });
    });
  };

  return (
    <div className="Cloud" style={{position: "absolute", left: "50%", top:"50%", transform:"translate(-50%, -50%)"}}>
      {thoughts_displayed.map((thought) => (
        <p key={thought.id} onMouseEnter={() => handleHover(thought.id)}>
          {thought.currentText}
        </p>
      ))}
    </div>
  );
}

export default Cloud;