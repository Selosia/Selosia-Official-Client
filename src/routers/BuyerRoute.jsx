import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import useUserType from "../hooks/useUserType";
import Loader from "../shared/Loader";

const BuyerRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [userType, loading] = useUserType(user?.email);

  const location = useLocation();

  if (!loading && userType === "Buyer") {
    return children;
  }

  if (loading) {
    return <div className="w-full h-screen flex justify-center items-center"> <Loader/></div>;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
