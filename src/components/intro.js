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
        <img class="flag" alt="Flag background" src={process.env.PUBLIC_URL + '/img/flag.png'} />
      <div className="introWrap">
        <h2>Who should be responsible for addressing harmful content online?</h2>
        <p>Should the government or social media companies regulate misinformation and other harmful content? Or should the decision be left up to individuals?</p>
        <button className="start button" onClick={start}>Take the quiz</button>
      </div>
        <img class="phone" alt="Phone illustration" src={process.env.PUBLIC_URL + '/img/phone.png'} />
    </div>
  );
}

export default Intro;