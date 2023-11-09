import "./components/main.css";
import { Home } from "./components/Home";
import Login from "./components/Login";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  // REACT HOOKS ***************
  // useContext hook

  return (
    <AuthContextProvider>
      <div className="main_wrapper">
        <div className="inner_wrapper">
          <Home />
          <Login />
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
