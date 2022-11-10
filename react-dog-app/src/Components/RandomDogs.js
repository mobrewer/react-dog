import React, { useState } from "react";

const RandomDogs = ({setRandoDogBreed, getRandoDog, randoDog, randoDogBreed}) => {

    const handleChange = (e) => {
        setRandoDogBreed(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        getRandoDog()
    }

    return (
        <div className="dog-pics">
            <h1>Random Dogs Pictures!</h1>
            <div className="form">
                <input type='text' value={randoDogBreed}  placeholder='Enter dog breed here' onChange={handleChange}></input>
                <button onClick={handleSubmit}>Search for dogs!</button>
            </div>
            {randoDog && <img src={randoDog} alt='dog'></img>}
        </div>

    )
}
export default RandomDogs