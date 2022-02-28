import results from '../data/results'
import "../style/results.scss"
import { VictoryPie, VictoryLabel } from 'victory';

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

  return (
      <div className="Results">
          <h2>Results</h2>
      <h3>{result.text}</h3>
      <div className="intro" dangerouslySetInnerHTML={{ __html: result.content }}></div>

      <section className="data">
        <h2>Americans in this segment</h2>
        <ul>
          {result.facts.map((fact, i) => <li key={i} className="fact">{ fact }</li>)}
        </ul>
        <div className="graphs">
          <div className="party">
          <VictoryPie
              colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
              data={partyData}
              labelComponent={<VictoryLabel renderInPortal/>}
              width={300}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
              />
          </div>
          <div className="gender">
          <VictoryPie
              colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
              data={genderData}
              width="300"
              />
          </div>
          <div className="age">
          <VictoryPie
              colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
              data={ageData}
              width="300"
              />
          </div>
          <div className="race">
          <VictoryPie
              colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
              data={raceData}
              width="300"
              />
          </div>
        </div>
      </section>

      <div className="answers">
              {answersResult.map((answer, i) => console.log(`${i} => ${answer}`))}
          </div>
          <footer className="resultsFooter">
              <p>More info in the footer</p>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><button>Share your results</button></a>
          </footer>
    </div>
  );
}

export default Results;