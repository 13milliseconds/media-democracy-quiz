import React, { useContext } from 'react'
import "../style/intro.scss"
import QuizContext from "../quiz-context";

function Intro() {
  const { updateSlide }= useContext(QuizContext);

  const start = () => { 
    updateSlide(0);
}

  return (
    <div className="Intro">
      <h2>Introduction</h2>
      <p>Introduction paragraph</p>
      <button className="start" onClick={start}>Start</button>
    </div>
  );
}

export default Intro;