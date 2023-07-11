import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role")

    if (!token || token === "undefined") {
        return <Navigate to={"/login"} />;
    }

    // if (token) {
        
    // }

    return <>{children || <Outlet/>}</>
}

export default ProtectedRoute