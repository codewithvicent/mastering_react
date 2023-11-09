import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");

  const { user, setUser } = useContext(AuthContext);

  const handleLogin = () => {
    setUser({
      username,
    });
    console.log(user);
  };

  return (
    <div className="login_wrapper">
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
