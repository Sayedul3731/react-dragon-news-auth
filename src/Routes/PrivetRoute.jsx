import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useContext } from "react"


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    if (loading) {
       return  <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivetRoute;