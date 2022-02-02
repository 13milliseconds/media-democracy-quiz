

function Answer(props) {
    return (
      <div className={props.selected ? "Answer selected" : "Answer"} onClick={props.onClick}>
        {props.data.text}
      </div>
    );
  }
  
  export default Answer;
  