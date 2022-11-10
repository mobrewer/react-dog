import React, { useState } from "react";

const RandomDogs = ({setRandoDogBreed, getRandoDog, randoDog}) => {
    const [randoBreedName, setRandoBreedName] = useState('')

    const handleChange = (e) => {
        setRandoBreedName(e.target.value)
    }

    const handleSubmit = () => {
        setRandoDogBreed(randoBreedName)
        getRandoDog()
    }

    return (
        <div className="dog-pics">
            <h1>Random Dogs Pictures!</h1>
            <div className="form">
                <input type='text' placeholder='Enter dog breed here' onChange={handleChange}></input>
                <button onClick={handleSubmit}>Search for dogs!</button>
            </div>
            {randoDog && <img src={randoDog} alt='dog'></img>}
        </div>

    )
}
export default RandomDogs