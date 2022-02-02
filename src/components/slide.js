import React, { useContext } from 'react'
import Question from "./question";
import Answer from "./answer";
import "../style/slide.scss"
import QuizContext from "../quiz-context";

function Slide({ question, index }) {
    const { currentSlide, updateSlide, updateAnswers, answers }= useContext(QuizContext);

    //Answer Selected
    const selectAnswer = (i) => {
        let newAnswers = answers;
        newAnswers[index] = i;
        updateAnswers(newAnswers);
    }

    //Next Slide
    const nextSlide = () => { 
        // TODO: Check that answer is selected

        //TODO: Save answer

        //TODO: Check that there is more question
        updateSlide(index + 1);
    }
  return (
      <div className={currentSlide == index ? "Slide active" : "Slide"}>
        <Question question={question} />
        <div className="answers">
              {question.answers.map((answer, i) => <Answer
                  key={i}
                  onClick={() => selectAnswer(i)}
                  data={answer}
                  selected={answers[index] == i}
              />)}
          </div>
          <footer className="slideFooter">
              {index > 0 &&
                  <a className="previous" onClick={()=>updateSlide(index - 1)}>Previous</a>
              }
              { answers[index] !== undefined ?
                  <a className="next" onClick={nextSlide}>Next</a>
                  : <a className="next disabled">Next</a>
              }
          </footer>
    </div>
  );
}

export default Slide;
