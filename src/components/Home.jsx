import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Home = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser({});
  };

  return (
    <div className="home_wrapper">
      {!user?.username && (
        <p style={{ textAlign: "center", fontWeight: 500 }}>
          User is not Logged In{" "}
        </p>
      )}
      {user?.username && <button onClick={handleLogout}>Logout</button>}
      {user?.username && (
        <p style={{ textAlign: "center", fontWeight: 500 }}>
          User is Logged In: Username - {user.username}
        </p>
      )}
    </div>
  );
};
