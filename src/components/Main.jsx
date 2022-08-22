import React from 'react';
import { useState, useEffect } from 'react';




export default function Main () {

    const [mainItem, setMainItem] = useState (
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
        
        setMainItem(prevValue => ({
            ...prevValue,
            image: url
        }));
    }


    const changeText  = (event) => { 
        const {name, value} = event.target;

        setMainItem(prevItem => ({...prevItem, [name] : value}))}
    
    return (
        <main>
            <div id='formContainer'>
                <input type="text"  
                        id='topInput'  
                        placeholder='Top text'
                        name= 'topText'
                        onChange={changeText} 
                        value = {mainItem.topText}
                />

                <input type="text"  
                        id='bottomInput'
                        placeholder='Bottom text'
                        name= 'bottomText'
                        onChange={changeText} 
                        value = {mainItem.bottomText}
                />

                <button onClick={changeImage}>Get a new meme image  🖼</button>
            </div>

            <div className="memeDiv">
                <p className="top">{mainItem.topText}</p>
                <img src={mainItem.image} className="memeImage"/>
                <p className="bottom">{mainItem.bottomText}</p>
            </div>
        </main>
    )
}