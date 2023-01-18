import React, { useContext } from "react";
import "../styles/Hotel.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/MainPage.css";
import { LoginContext } from "../Context/LoginContext";

function Favourites() {
    const { setIsLogin } = useContext(LoginContext);
    
    const styles = {
        display: "flex",
        justifyContent: "column",
        flexWrap: "wrap",
    };

    function handleClick(e) {
        // complete this delete from favourites function
        
    }

    function handleSignOut() {
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("password");
        window.localStorage.removeItem("favourites");
        setIsLogin(false);
    }

    return (
        <div>
            <div style={styles}>
                {/* display the favourite hotels here */}
                
            </div>
        </div>
    );
}

export default Favourites;
