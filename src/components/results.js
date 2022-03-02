import results from '../data/results'
import "../style/results.scss"
import { FacebookShareButton, TwitterShareButton } from "react-share";


function Results({ answersResult }) {
  const max = Math.max(...answersResult);
  const mostAnswered = answersResult.indexOf(max);
  const result = results[mostAnswered]

  //log the result
  answersResult.map((answer, i) => console.log(`${i} => ${answer}`))

  return (
    <div className="Results">
      <div className="result-wrap">
      <div className="result-content">
        <h4>You are most aligned with</h4>
        <h2>{result.text}</h2>
        <h3>Along with { result.percent }% of the public</h3>
          <div className="intro" dangerouslySetInnerHTML={{ __html: result.content }}></div>
          <a className="button" target="_blank" href="https://knightfoundation.org/">Read the Report</a>
      </div>

        <div className="result-social">
          <h3>Share your results</h3>
        <FacebookShareButton url="https://13milliseconds.com" >
          <button>Facebook</button>
        </FacebookShareButton>
        <TwitterShareButton url="https://13milliseconds.com" >
          <button>Twitter</button>
        </TwitterShareButton>
      </div>
      </div>
    </div>
  );
}

export default Results;