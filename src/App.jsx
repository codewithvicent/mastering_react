import { useReducer } from "react";
import "./components/main.css";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  // REACT HOOKS ***************
  // useReducer hook
  // const [state, dispatch] = useReducer(reducerFn, initialState);

  const initialState = {
    count: 0,
  };
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <AuthContextProvider>
      <div className="main_wrapper">
        <div className="inner_wrapper">
          <p>{state.count}</p>
          <button
            style={{ margin: 10 }}
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Increment
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>
            Decrement
          </button>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
