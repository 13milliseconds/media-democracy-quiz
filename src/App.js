import './App.css';
import { useState, useEffect } from 'react';
import Slide from './components/slide';
import questions from './data/questions'
import { QuizProvider } from './quiz-context';

const functionTemplate = () => {}

function App() {
  let quizDefault = {
    updateSlide: functionTemplate,
    currentSlide: 0
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

  return (
    <div className="App">
      <QuizProvider value={context}>
          {questions.map((question, i) => <Slide question={question} index={i} key={i} />)}
        </QuizProvider>
    </div>
  );
}

export default App;
