import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const AdminRoutes = () => {
    const { userRole} = useAuth();
    if(userRole){
        return  userRole == "admin" ? <Outlet /> : <Navigate to="/" />
    }
    else return <Navigate to="/" />
     

}
