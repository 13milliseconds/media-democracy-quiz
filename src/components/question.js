

function Question(props) {
    return (
      <div className="Question">
      <div className="options">
        {props.question.options && props.question.options.map((option, i) => { 
          return <div key={i} className="option">{ option }</div>
        })}
      </div>
      </div>
    );
  }
  
  export default Question;
  