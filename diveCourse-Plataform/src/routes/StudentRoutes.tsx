import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const StudentRoutes = () => {
    const { userRole} = useAuth();
    if(userRole){
        return  userRole == "student" ? <Outlet /> : <Navigate to="/" />
    }
    else return <Navigate to="/" />
     

}
