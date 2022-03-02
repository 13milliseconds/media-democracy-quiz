import React, { useContext } from 'react'
import Question from "./question";
import Answer from "./answer";
import "../style/slide.scss"
import QuizContext from "../quiz-context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

let answerText = [
    'Fully Agree',
    'Somewhat Agree',
    'Neutral',
    'Somewhat Agree',
    'Fully Agree'
]

function Slide({ question, index, qNumber }) {
    const { currentSlide, updateSlide, updateAnswers, answers }= useContext(QuizContext);

    //Answer Selected
    const selectAnswer = (i) => {
        let newAnswers = answers;
        newAnswers[index] = i;
        updateAnswers(newAnswers);
    }

  return (
      <div className={currentSlide === index ? "Slide active" : "Slide"}>
          <div className="progress">
              <div className="progressBar">
                <div className="progressBarInner" style={{width: ( (index + 1) / qNumber * 100) + '%' }}></div>  
            </div>
              {`Question ${index + 1}/${qNumber}`}
        </div>
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
              
              <button
                  className={answers[index] !== undefined ? "next" : "next disabled"}
                  onClick={() => answers[index] !== undefined && updateSlide(index + 1)}>
                  Next
              </button>
                      {index > 0 &&
                          <a className="previous" onClick={()=>updateSlide(index - 1)}>Previous</a>
                      }
          </footer>
    </div>
  );
}

export default Slide;
