import axios from "axios";
import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import BreweryList from "../BreweryList/BreweryList";

export const UserContext = React.createContext()


function App(){
    const [allBreweries, setAllBreweries] = useState([])
    const [favoriteBreweries, setFavoriteBreweries] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const [favorites, setFavorites] = useState(false)
    //Calls useEffect on page load and any change to the favorite state (toggled by button)
    useEffect(() =>{
        fetchBreweries()
    }, [favorites])
    //Conditionally decides if it should fetch all or fetch favorites based on state
    const fetchBreweries = () => {
        fetchAllBreweries()
        fetchFavoriteBreweries()
        .then((response) => {
        }).catch((error) => {
            console.log('error in GET: ', error)
        })
    }

    const fetchAllBreweries = () =>{
        axios({
            method: 'GET',
            url: '/api/template/all'
        }).then((response) => {
            console.log('GET response: ', response.data)
            setAllBreweries(response.data)
        }).catch((error) => {
            console.log('error in GET: ', error)
        })
    }

    const fetchFavoriteBreweries = () => {
        axios({
            method: 'GET',
            url: '/api/favorite'
        }).then((response) => {
            console.log('GET favorite response: ', response.data)
            setFavoriteBreweries(response.data)
        }).catch((error) =>{
            console.log('Error in fetchFavorites', error)
        })
    }


    return(
        <>
                <UserContext.Provider value={currentUser}>
                <Header fetchBreweries={fetchBreweries} setCurrentUser={setCurrentUser} setAllBreweries={setAllBreweries} setFavorites={setFavorites} favorites={favorites}/>
                <div className="flex">
                    <BreweryList allBreweries={allBreweries} favoriteBreweries={favoriteBreweries} fetchBreweries={fetchBreweries} favorites={favorites}/>
                </div>
                </UserContext.Provider>
        </>
    )
}

export default App