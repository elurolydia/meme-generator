import React from "react";
import Sydney from "./images/Sydney.png"


export default function MemeImage () {
    return (
        <div className="memeDiv">
            <p className="top">TOP TEXT</p>
            <img src={Sydney} className="memeImage"/>
            <p className="bottom">BOTTOM TEXT</p>
        </div>
    )
}