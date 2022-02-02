import './App.scss';
import { useState, useEffect } from 'react';
import Slide from './components/slide';
import questions from './data/questions'
import { QuizProvider } from './quiz-context';

const functionTemplate = () => {}

function App() {
  let quizDefault = {
    updateSlide: functionTemplate,
    updateAnswers: functionTemplate,
    currentSlide: 0,
    answers: []
  }

  const [context, setContext] = useState(quizDefault)

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

  const reset = () => updateContext(quizDefault)

  return (
    <div className="App">
      <QuizProvider value={context}>
        {questions.map((question, i) => <Slide question={question} index={i} key={i} />)}
        <div className="reset" onClick={reset}>Reset</div>
      </QuizProvider>
    </div>
  );
}

export default App;
