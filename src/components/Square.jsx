import '../index.css';

const Square = ({value, squareClick, highlightWinner}) =>  {

  const btnClass=  (highlightWinner ? "winner-highlight" : "square-btn")
  
    return (
      <div>
          <button className= {btnClass} onClick={squareClick}>{value}</button>
      </div>
    );
  }
  
export default Square;