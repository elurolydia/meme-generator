import React from "react";
import Sydney from "./images/Sydney.png"


export default function MemeImage () {
    return (
        <div className="memeDiv">
            <p className="top">Top Text</p>
            <img src={Sydney} className="memeImage"/>
            <p className="bottom">Bottom Text</p>
        </div>
    )
}