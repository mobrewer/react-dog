import React from "react";

const Header =({setView}) => {
    return (
        <div className="header">
            <h1>Doggies and more doggies</h1>
            <div className="buttons">
                <span onClick={() => {setView('Breed List')}}> Breed List </span>
                <span onClick={() => {setView('Random Dogs')}}>Random Dog Pictures</span>
            </div>
        </div>
    )
}
export default Header