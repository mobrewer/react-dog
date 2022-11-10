import axios from "axios";
import React, { useState, useEffect } from "react";
import BreedList from "./Components/BreedList";
import Header from "./Components/Header";
import RandomDogs from "./Components/RandomDogs";

  function App() {
    const [randoDog, setRandoDog] = useState()
    const [breed, setBreed] = useState('')
    const [randoDogBreed, setRandoDogBreed] = useState()
    const [currentView, setCurrentView] =useState()

    const setView = str => {
      setCurrentView(str)
    }
    
    const fetchBreed = () => {
      axios.get('https://dog.ceo/api/breeds/list/all')
      .then(res => (Object.entries(res.data.message)))
      .then(res => setBreed(res))
    }

    useEffect(() => {
      getRandoDog()
    }, [randoDog])

    const getRandoDog =() => {
      axios.get(`https://dog.ceo/api/breed/${randoDogBreed}/images/random`)
      .then(res => setRandoDog(res.data.message))
    }

    return (
      <div className="App">
        <Header setView={setView}/>
        {currentView === 'random dogs' ? <RandomDogs randoDogBreed={randoDogBreed} randoDog={randoDog} getRandoDog={getRandoDog} setRandoDogBreed ={setRandoDogBreed} /> : <BreedList breed={breed} fetchBreed={fetchBreed}/>}
      </div>
    )
}
  export default App
