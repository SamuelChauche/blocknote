import React from "react";
import logo from "../assets/logo.png";

function Header() {
    return (
        <header className="app-header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="app-logo" />
            </div>
        </header>
    );
}

export default Header;
