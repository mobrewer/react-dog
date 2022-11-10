import React from "react";

const Header =({setView}) => {
    return (
        <div className="header">
            <h1>Doggies and more doggies</h1>
            <div className="buttons">
                <button onClick={() => {setView('breed list')}}> Breed List </button>
                <button onClick={() => {setView('random dogs')}}>Random Dog Pictures</button>
            </div>
        </div>
    )
}
export default Header