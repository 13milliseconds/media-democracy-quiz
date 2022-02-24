

function Answer(props) {
    return (
      <div className={props.selected ? "Answer selected" : "Answer"} onClick={props.onClick}>
        {props.text}
      </div>
    );
  }
  
  export default Answer;
  