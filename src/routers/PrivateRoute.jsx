import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  // console.log(location);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="text-green-500 loading loading-ball loading-lg"></span>
      </div>
    );
  }

  if (user && !loading) {
    return children;
  }
  return (
    <Navigate
      to="/authentication/logIn"
      state={{ from: location }}
      replace
    ></Navigate>
  );
};

export default PrivateRoute;
