import { useReducer } from "react";

const initialState = {
  count: 0,
};

type CounterStateType = {
  count: number;
};

const INCREMENT = "INCREMENT";
const INCREMENTBYAMOUNT = "INCREMENTBYAMOUNT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

type IncrementActionType = { type: typeof INCREMENT };
type IncrementByAmountActionType = {
  type: typeof INCREMENTBYAMOUNT;
  payload: number;
};
type ResetActionType = { type: typeof RESET };
type DecrementActionType = { type: "DECREMENT" };

type CounterActionType =
  | IncrementActionType
  | IncrementByAmountActionType
  | ResetActionType
  | DecrementActionType;

const reducer = (state: CounterStateType, action: CounterActionType) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case INCREMENTBYAMOUNT:
      return { count: state.count + action.payload };
    case RESET:
      return { count: 0 };
    case DECREMENT:
      return { count: state.count - 1 };

    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: INCREMENTBYAMOUNT, payload: 5 })}>
        Increment by Amount
      </button>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
    </div>
  );
};

export default App;
