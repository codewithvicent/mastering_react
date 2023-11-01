import { useState } from "react";
import "./components/main.css";
function App() {
  // REACT HOOKS ***************
  // useState

  //  const [state, setState] = useState(initialState)

  // number
  const [count, setCount] = useState(0);

  // string
  const [name, setName] = useState("");

  // Array
  const [names, setNames] = useState(["John", "Jane", "Mavin", "Abeine"]);

  // object
  const [employee, setEmployee] = useState({
    empName: "John",
    empage: 12,
    empId: 56,
  });

  // boolean
  const [isEmployee, setIsEmplyee] = useState(false);

  const handleIncrement = () => {
    setCount(count - 5);
  };

  // rveal name handler
  const handleRevealName = () => {
    setIsEmplyee(!isEmployee);
  };

  return (
    <div className="main_wrapper">
      <div className="inner_wrapper">
        <div>count is {count}</div>
        <button onClick={handleIncrement}>Increment Count</button>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={handleRevealName}>Reveal Name</button>

        {isEmployee && <div>{name}</div>}

        {names.map((name) => (
          <div>{name}</div>
        ))}

        <div>
          {employee.empName} - {employee.empage} - {employee.empId}
        </div>
      </div>
    </div>
  );
}

export default App;
