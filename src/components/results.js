import React, { useContext } from 'react'
import "../style/results.scss"
import QuizContext from "../quiz-context";

function Results() {
    const { answers }= useContext(QuizContext);

  return (
      <div className="Results">
          <h2>Results</h2>
          <h3>You're a Samantha!</h3>
        <div className="answers">
              {answers.map((answer, i) => <div key={i}>{`${i} => ${answer}`}</div>)}
          </div>
          <footer className="resultsFooter">
              <p>More info in the footer</p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><button>Share your results</button></a>
          </footer>
    </div>
  );
}

export default Results;