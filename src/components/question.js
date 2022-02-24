

function Question(props) {
    return (
      <div className="Question">
        <h2>{props.question.text}</h2>
        {props.question.caption && <p>{props.question.caption}</p>}
      <div className="options">
        {props.question.options && props.question.options.map((option, i) => { 
          return <div key={i} className="option">{ option }</div>
        })}
      </div>
      </div>
    );
  }
  
  export default Question;
  