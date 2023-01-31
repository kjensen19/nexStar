import axios from "axios";
import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import BreweryList from "../BreweryList/BreweryList";

export const UserContext = React.createContext()


function App(){
    const [breweries, setBreweries] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const [favorites, setFavorites] = useState(false)

    useEffect(() =>{
        fetchAllBreweries()
    }, [favorites])

    const fetchAllBreweries = () => {
        (favorites === false ? 
            axios({
                method: 'GET',
                url: '/api/template/all'
        }) : axios({
                method: 'GET',
                url: '/api/favorite'
            }))
        .then((response) => {
            console.log('GET response: ', response.data)
            setBreweries(response.data)
        }).catch((error) => {
            console.log('error in GET: ', error)
        })
    }


    return(
        <>
                <UserContext.Provider value={currentUser}>
                <Header fetchAllBreweries={fetchAllBreweries} setCurrentUser={setCurrentUser} setBreweries={setBreweries} setFavorites={setFavorites} favorites={favorites}/>
                <div className="flex">
                    <BreweryList breweries={breweries} fetchAllBreweries={fetchAllBreweries} favorites={favorites}/>
                </div>
                </UserContext.Provider>
        </>
    )
}

export default App