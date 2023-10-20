import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const BuyerRoute = ({ children }) => {
  const { loading, logUser } = useContext(AuthContext);

  const location = useLocation();

  if (logUser?.role === "Buyer") {
    return children;
  }

  if (loading) {
    return <h2>Loading.....</h2>;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
