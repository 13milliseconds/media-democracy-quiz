import results from '../data/results'
import "../style/results.scss"
import { VictoryPie, VictoryLabel } from 'victory';
import { FacebookShareButton, TwitterShareButton } from "react-share";


function Results({ answersResult }) {
  const max = Math.max(...answersResult);
  const mostAnswered = answersResult.indexOf(max);
  const result = results[mostAnswered]

  const partyData = [
    {x: "Democrats", y: result.data.party[0]},
    {x: "Republicans", y: result.data.party[1]},
    {x: "Independents", y: result.data.party[2]},
    {x: "Other", y: result.data.party[3] || 100 - result.data.party[0] - result.data.party[1] - result.data.party[2]},
  ];
  const genderData = [
    {x: "Female", y: result.data.gender[0]},
    {x: "Male", y: result.data.gender[1]},
  ];
  const ageData = [
    {x: "18-24", y: result.data.age[0]},
    {x: "35-54", y: result.data.age[1]},
    {x: "55+", y: result.data.age[2]},
  ];
  const raceData = [
    {x: "White", y: result.data.race[0]},
    {x: "Black", y: result.data.race[1]},
    {x: "Hispanic", y: result.data.race[2]},
    {x: "Other", y: 0},
  ];

  //log the result
  answersResult.map((answer, i) => console.log(`${i} => ${answer}`))

  return (
    <div className="Results">
      <div className="result-wrap">
      <div className="result-content">
        <h4>You are part of:</h4>
        <h2>{result.text}</h2>
        <h3>{ result.percent }% of Americans</h3>
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