import React from "react";
import Troll from "./images/Troll Face.png"


export default function Navbar () {
    return (
        <nav>
            <div id="navDiv">
                <img src={Troll} alt="Troll face" />
                <h1>Meme Generator</h1>
            </div>

            <h3>React Course - Project 3</h3>
        </nav>
    )
}