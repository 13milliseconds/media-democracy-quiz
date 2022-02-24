import React, { useContext } from 'react'
import Question from "./question";
import Answer from "./answer";
import "../style/slide.scss"
import QuizContext from "../quiz-context";

let answerText = [
    'Strongly describes my opinion',
    'Somewhat describes my opinion',
    'Neutral',
    'Somewhat describes my opinion',
    'Strongly describes my opinion'
]

function Slide({ question, index }) {
    const { currentSlide, updateSlide, updateAnswers, answers }= useContext(QuizContext);

    //Answer Selected
    const selectAnswer = (i) => {
        let newAnswers = answers;
        newAnswers[index] = i;
        updateAnswers(newAnswers);
    }

  return (
      <div className={currentSlide === index ? "Slide active" : "Slide"}>
        <Question question={question} />
        <div className="answers">
              {answerText.map((answer, i) => <Answer
                  key={i}
                  onClick={() => selectAnswer(i)}
                  text={answer}
                  selected={answers[index] === i}
              />)}
          </div>
          <footer className="slideFooter">
              {index > 0 &&
                  <button className="previous" onClick={()=>updateSlide(index - 1)}>Previous</button>
              }
              { answers[index] !== undefined ?
                  <button className="next" onClick={() => updateSlide(index + 1)}>Next</button>
                  : <button className="next disabled">Next</button>
              }
          </footer>
    </div>
  );
}

export default Slide;
