import './App.scss';
import { useState, useEffect } from 'react';
import Slide from './components/slide';
import Intro from './components/intro';
import Results from './components/results';
import questions from './data/questions'
import { QuizProvider } from './quiz-context';

const functionTemplate = () => {}

function App() {
  let quizDefault = {
    updateSlide: functionTemplate,
    updateAnswers: functionTemplate,
    currentSlide: -1,
    answers: []
  }

  const [context, setContext] = useState(quizDefault)
  const [result, setResult] = useState([0, 0, 0, 0, 0, 0])

  const updateContext = (contextUpdates = {}) =>
    setContext(currentContext => ({ ...currentContext, ...contextUpdates }))

  // Update the slide number
  useEffect(() => {
    if (context?.updateSlide === functionTemplate) {
      updateContext({
        updateSlide: value => updateContext({ currentSlide: value }),
      })
    }
  }, [context?.updateSlide])
  
  // Update Answers
  useEffect(() => {
    if (context?.updateAnswers === functionTemplate) {
      updateContext({
        updateAnswers: value => updateContext({ answers: value }),
      })
    }
  }, [context?.updateAnswers])

  const reset = () => {
    updateContext(quizDefault)
    setResult([0, 0, 0, 0, 0, 0])
  }

  //Update result

  useEffect(() => {
    console.log('Calculate Result')
    let newResult = [0, 0, 0, 0, 0, 0];
    context.answers.forEach((answer, i) => {
      let answerPoints = questions[i].answers[answer];
      for (let i = 0; i < answerPoints.length; i++) {
        newResult[i] = newResult[i] + answerPoints[i];
      }
    });
    console.log(newResult);
    setResult(newResult)
  }, [context]);

  return (
    <div className="App">
      <QuizProvider value={context}>
        {context.currentSlide === -1
          ? <Intro />
          : context.currentSlide < questions.length
            ? questions.map((question, i) => <Slide question={question} index={i} key={i} />)
            : <Results answersResult={result} />
        }
        {context.currentSlide >= 0 &&
          < div className="reset" onClick={reset}>Reset</div>
        }
      </QuizProvider>
    </div>
  );
}

export default App;
