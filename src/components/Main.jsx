import React from 'react';
import { useState, useEffect } from 'react';




export default function Main () {

    const [text, setText] = useState (
        {
            topText : '',
            bottomText: '',
            image: 'https://i.imgflip.com/1g8my4.jpg'
        }
    )

    const [memeImages, setMemeImages] = useState ([])

    useEffect (() => {
        fetch ("https://api.imgflip.com/get_memes")
        .then (res => res.json())
        .then (data => setMemeImages(data.data.memes))
    }, [])


    const changeImage = () => {
        const index =  Math.floor(Math.random() * memeImages.length);
        const url = memeImages[index].url;
        
        setText(prevValue => ({
            ...prevValue,
            image: url
        }));
    }


    const changeText  = (event) => { 
        const {name, value} = event.target;

        setText(prevText => ({...prevText, [name] : value}))}
    
    return (
        <main>
            <div id='formContainer'>
                <input type="text"  
                        id='topInput'  
                        placeholder='Top text'
                        name= 'topText'
                        onChange={changeText} 
                        value = {text.topText}
                />

                <input type="text"  
                        id='bottomInput'
                        placeholder='Bottom text'
                        name= 'bottomText'
                        onChange={changeText} 
                        value = {text.bottomText}
                />

                <button onClick={changeImage}>Get a new meme image  🖼</button>
            </div>

            <div className="memeDiv">
                <p className="top">{text.topText}</p>
                <img src={text.image} className="memeImage"/>
                <p className="bottom">{text.bottomText}</p>
            </div>
        </main>
    )
}