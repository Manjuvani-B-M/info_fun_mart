import React, { useEffect, useState } from 'react'
import '../assets/styles/jokes.css'
import axios from 'axios'

const Jokes = () => {

    let [joke, setJoke] = useState('')
    const [bool, setBool] = useState(false)
    

    let fetchJoke = async() => {
        let resJoke = await axios.get('https://sv443.net/jokeapi/v2/joke/Programming?type=single')            
                setJoke(resJoke.data.joke)
                setBool(true);    
    }

    return (
        <>
            <div className="jokes">
                <div className="header">
                    <h1>Jokes</h1>
                </div>
                <div className="container">
                    <div className="joke-box">
                       { bool
                        ?
                        <h2>{joke}</h2>
                        : 
                        <h2>Have fun?</h2>
                        } 
                    </div>
                    <div className="generate-btn">
                        <button onClick={fetchJoke}>Generate joke</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jokes