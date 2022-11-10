import React from "react";

const BreedList = ({breed, fetchBreed}) => {
    return (
        <div className="breed-list">
            <h1>Breeds</h1>
            <button onClick= {fetchBreed}>Doggie Breeds</button>
            <ul>
                {breed && breed.map((breedFam, dog) => {
                    return (
                        <ul dog={dog}>
                            <h3>{breedFam[0]}</h3>
                            {breedFam[1].length > 0 && breedFam[1].map((breed, dog) => {
                                return <p dog={dog}>-{breed}</p>
                            })}
                        </ul>
                    )
                })}
            </ul>
          </div>
    )
}
export default BreedList