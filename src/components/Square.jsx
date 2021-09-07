import '../index.css';

const Square = ({value, squareClick}) =>  {
  
    return (
      <div>
          <button className='btn' onClick={() => squareClick()}>{value}</button>
      </div>
    );
  }
  
export default Square;