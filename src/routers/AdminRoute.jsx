import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import useUserType from "../hooks/useUserType";

const AdminRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [userType, loading] = useUserType(user?.email);
  const location = useLocation();

  if (!loading && userType === "Admin") {
    return children;
  }

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="text-green-500 loading loading-ball loading-lg"></span>
      </div>
    );
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
