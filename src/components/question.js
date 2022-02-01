

function Question(props) {
    return (
      <div className="Question">
        <h2>{props.question.text}</h2>
        {props.question.caption && <p>{props.question.caption}</p>}
      </div>
    );
  }
  
  export default Question;
  