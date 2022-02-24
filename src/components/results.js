import results from '../data/results'
import "../style/results.scss"

function Results({ answersResult }) {
  const max = Math.max(...answersResult);
  const mostAnswered = answersResult.indexOf(max);
  const result = results[mostAnswered]

  return (
      <div className="Results">
          <h2>Results</h2>
        <h3>{result.text}</h3>
      <div className="answers">
              {answersResult.map((answer, i) => <div key={i}>{`${i} => ${answer}`}</div>)}
          </div>
          <footer className="resultsFooter">
              <p>More info in the footer</p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><button>Share your results</button></a>
          </footer>
    </div>
  );
}

export default Results;