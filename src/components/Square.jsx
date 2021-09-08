import '../index.css';

const Square = ({value, squareClick, highlightWinner, winner}) =>  {

  const btnClass=  (highlightWinner ? "winner-highlight" : "square-btn")
  
    return (
      <div>
          <button className= {btnClass} onClick={squareClick} disabled={winner}>{value}</button>
      </div>
    );
  }
  
export default Square;