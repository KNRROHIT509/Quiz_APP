import React from 'react';
import { useState } from "react";
import Button from "./components/UI/Button/Button";
import Card from "./components/UI/Card/Card";
import Banner from "./components/UI/Banner/Banner";
import './App.css';  // Import the CSS file here

function App() {
  const [start, setStart] = useState(true);
  const [attempt, correctAnswerMarkUpdate] = useState(0);
  const [qsnAttempt, setqsnAttempt] = useState(0);
  const [card, setCard] = useState(false);
  const [result, setResult] = useState(false);
  const [banner, setBanner] = useState(false);

  const handleStart = () => {
    setStart(false);
    setCard(true);
    correctAnswerMarkUpdate(0);
    setqsnAttempt(0);
    setBanner(false);
  };

  const opt = {
    option1: "Blue",
    option2: "Red",
    option3: "Yellow",
    option4: "Green"
  };

  const questions = [
    { question: "What color are the leaves?", answer: "Green" },
    { question: "What color is the sky?", answer: "Blue" },
    { question: "What color is a banana?", answer: "Yellow" },
    { question: "What color is a strawberry?", answer: "Red" },
    { question: "What color is a watermelon?", answer: "Green" }
  ];

  const handleResult = () => {
    setStart(true);
    setBanner(true);
    setCard(false);
    setResult(false);
  };

  return (
    <div className="flex justify-center mt-4 ">
      <div>
        <div className="flex items-center justify-center space-x-4 mb-12">
          <h1 className="text-3xl">Quiz App</h1>
        </div>
        {banner && <Banner score={attempt} />}
        {card && (
          <div>
            {questions.map((q, index) => (
              <Card
                key={index}
                question={q.question}
                correctAnswerMarkUpdate={correctAnswerMarkUpdate}
                attempt={attempt}
                options={opt}
                answer={q.answer}
                setQsns={setqsnAttempt}
                qsn={qsnAttempt}
                setCard={setResult}
                qsnAttempt={qsnAttempt}
              />
            ))}
          </div>
        )}
        {result && (
          <Button
            onClick={handleResult}
            style={{ backgroundColor: 'orange', padding: '10px 20px', borderRadius: '5px' }}
          >
            Show Results
          </Button>
        )}
        {start && (
          <Button
            onClick={handleStart}
            style={{ backgroundColor: 'orange', padding: '10px 20px', borderRadius: '5px' }}
          >
            Start Quiz
          </Button>
        )}
      </div>
    </div>
  );
}

export default App;
