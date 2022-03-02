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
      <div className="introWrap">
        <h2>Does the internet need more moderators - to take on misinformation and harmful content? Or is that censorship? </h2>
        <p>Take our quiz to find out which of six categories best matches your views, then compare your results to a poll of 10,000 Americans conducted by Gallup and the John S. and James L. Knight Foundation.</p>
        <button className="start" onClick={start}>Take the quiz</button>
      </div>
    </div>
  );
}

export default Intro;