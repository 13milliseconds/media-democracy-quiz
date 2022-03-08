import React, { useContext, useState } from 'react'
import Answer from "./answer";
import "../style/slide.scss"
import QuizContext from "../quiz-context";
import mixpanel from 'mixpanel-browser';

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
        nextSlide();
    }

    const nextSlide = () => {
        if (index + 1 == questions.length) { 
            updateSlide(index + 1)
            return;
        }
        setSlideCoreClass('leaving-next')
        setProgress((index + 1) / questions.length * 100);
        
        //Track answer
        mixpanel.track('Answer Question', {
            question: index + 1
          });

        setTimeout(() => {
            updateSlide(index + 1)
            setSlideCoreClass('coming-next')
        }, 250)
    }

    const prevSlide = () => {
        setSlideCoreClass('leaving-prev')
        setProgress((index - 1) / questions.length * 100 );

        setTimeout(() => {
            updateSlide(index - 1)
            setSlideCoreClass('coming-prev')
        }, 250)
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
            <div className="options">
                {questions[index].options && questions[index].options.map((option, i) => { 
                return <div key={i} className="option">{ option }</div>
                })}
            </div>
            <div className="answers">
              {answerText.map((answer, i) => <Answer
                  key={i}
                  onClick={() => selectAnswer(i)}
                  text={answer}
                  selected={answers[index] === i}
              />)}
              </div>
              <div className="mobile-option">
                <div className="option">{ questions[index].options[1] }</div>
            </div>
          </div>
          
          <footer className="slideFooter">  
            {/* <button className="next" onClick={() => answers[index] !== undefined && nextSlide()}>Next</button> */}
            {index > 0 && <button className="previous" onClick={()=>prevSlide()}>ᐸ</button>}
          </footer>
    </div>
  );
}

export default Slide;
