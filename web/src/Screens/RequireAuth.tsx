import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import AuthContext from '../context/AuthProvider';

const RequireAuth = ({  }) => {
    const { auth, setAuth } : any = useAuth();
    const location = useLocation();

    return (
        auth?.user?.find()
            ? <Outlet />
            : <Navigate to="/login"/>
    );
}

export default RequireAuth;