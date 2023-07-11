import React from "react";


const Navbar = () => {

    let roleNavbar = localStorage.getItem("role")
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload(false);
    }

    return(
        <div>
            <h1>Ini navbar  </h1>
            {roleNavbar}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Navbar