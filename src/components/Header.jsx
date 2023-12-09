import React from "react";
import LightDarkBtn from "../ui/LightDarkBtn/LightDarkBtn";
import Clock from "./Clock";
import garland from "../assets/ny.png";
import garlandSound from "../assets/garland.mp3"

const Header = () => {

    const playGarland = () =>{
        let audio = new Audio(garlandSound);
        audio.play();
    }
    
    return (
        <div className="header">
            <div className="logo">
                <p>Weekly Planner</p>
                <img className="garlandImg" src={garland} alt="" onClick={playGarland}/>
                <Clock />
            </div>
            <LightDarkBtn />
        </div>
    );
};

export default Header;
