import React, { useContext, useState } from 'react'
import Question from "./question";
import Answer from "./answer";
import "../style/slide.scss"
import QuizContext from "../quiz-context";

let answerText = [
    'Fully Agree',
    'Somewhat Agree',
    'Neutral',
    'Somewhat Agree',
    'Fully Agree'
]

function Slide({ questions, index }) {
    const { currentSlide, updateSlide, updateAnswers, answers } = useContext(QuizContext);
    const [slideCoreClass, setSlideCoreClass] = useState('')
    const [progress, setProgress] = useState(0)

    //Answer Selected
    const selectAnswer = (i) => {
        let newAnswers = answers;
        newAnswers[index] = i;
        updateAnswers(newAnswers);
    }

    const nextSlide = () => {
        setSlideCoreClass('leaving-next')
        setProgress((index + 1) / questions.length * 100 );

        setTimeout(() => {
            updateSlide(index + 1)
            setSlideCoreClass('coming-next')
        }, 500)
    }

    const prevSlide = () => {
        setSlideCoreClass('leaving-prev')
        setProgress((index - 1) / questions.length * 100 );

        setTimeout(() => {
            updateSlide(index - 1)
            setSlideCoreClass('coming-prev')
        }, 500)
    }

  return (
      <div className={currentSlide === index ? "Slide active" : "Slide"}>
          <div className="progress">
              <div className="progressBar">
                <div className="progressBarInner" style={{width: progress + '%' }}></div>  
            </div>
              {`Question ${index + 1}/${questions.length}`}
          </div>
          <h2>When it comes to users posting and sharing content on social media platform...</h2>

          <div className={`slide-core ${slideCoreClass}`}>
            <Question question={questions[index]} />
            <div className="answers">
              {answerText.map((answer, i) => <Answer
                  key={i}
                  onClick={() => selectAnswer(i)}
                  text={answer}
                  selected={answers[index] === i}
              />)}
              </div>
          </div>
          
          <footer className="slideFooter">
              
              <button
                  className={answers[index] !== undefined ? "next" : "next disabled"}
                  onClick={() => answers[index] !== undefined && nextSlide()}>
                  Next
              </button>
                      {index > 0 &&
                          <a className="previous" onClick={()=>prevSlide()}>Previous</a>
                      }
          </footer>
    </div>
  );
}

export default Slide;
