import React, { useContext } from 'react'
import Question from "./question";
import Answer from "./answer";
import "../style/slide.scss"
import QuizContext from "../quiz-context";

function Slide({ question, index }) {
    const { currentSlide, updateSlide }= useContext(QuizContext);
    console.log(index)
  return (
      <div className={currentSlide == index ? "Slide active" : "Slide"}>
        <Question question={question} />
        <div className="answers">
            {question.answers.map((answer, i) => <Answer key={i} data={answer} />)}
          </div>
          <footer className="slideFooter">
              {index > 0 &&
                  <a className="previous" onClick={()=>updateSlide(index - 1)}>Previous</a>
              }
              <a className="next" onClick={()=>updateSlide(index + 1)}>Next</a>
          </footer>
    </div>
  );
}

export default Slide;
