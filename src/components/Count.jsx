import { useReducer } from "react";
import "../index.css";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

const Count = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="board">
      <div>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>

      <div>Count: {state.count}</div>

      <div>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Count;
