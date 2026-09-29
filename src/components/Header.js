import { foodLogo } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useContext} from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const isOnline = useOnlineStatus();
    const {loggedInUser } =useContext(UserContext);
    return (
        <div className="flex justify-between bg-pink-100">          
        <div className="logo-container">
        <img className="logo" src={foodLogo} alt="logo" />
        </div>
        <div className="flex items-center">
            <ul className="flex space-x-4 p-4">
                <li>{isOnline ? "✅ Online" : "❌ Offline"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <button className="login-btn" onClick={() =>{
                    btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login");             
                   
                }}>{btnName}</button>
                <li className="px-4 ">{loggedInUser}</li>
            </ul>
        </div>
        </div>
    );
    }


    export default Header;