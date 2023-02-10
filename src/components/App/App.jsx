import axios from "axios";
import React, { useState } from 'react';
import Header from "../Header/Header";
import BreweryList from "../BreweryList/BreweryList";

export const UserContext = React.createContext()


function App(){
    const [allBreweries, setAllBreweries] = useState([])
    const [favoriteBreweries, setFavoriteBreweries] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const [favorites, setFavorites] = useState(false)
    const [page, setPage] = useState(0)

    //Conditionally decides if it should fetch all or fetch favorites based on state
    //Should not use state here, variable should be renamed (even though it makes sense)
    const fetchBreweries = (state) => {
        fetchAllBreweries(state)
        fetchFavoriteBreweries()
    }
    const logoutFunction = () => {
        setAllBreweries([])
        setFavoriteBreweries([])
    }
    //Fetch all breweries from the api, will need to add a state call to pass
    //State defaults to MN, for now-- may eventually set as part of logging in or registering
    const fetchAllBreweries = (state="Minnesota") =>{
        axios({
            method: 'GET',
            url: `/api/allBreweries/all/${state}`
        }).then((response) => {
            console.log('GET response: ', response.data)
            setAllBreweries(response.data)
        }).catch((error) => {
            console.log('error in GET: ', error)
        })
    }
    //Fetches user's favorites so we can mark breweries in the all list that they already favorited
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



    //UserContext is supplying the user name to all pages- this may be accesssible through cookie storage?
    return(
        <>
                <UserContext.Provider value={currentUser}>
                <Header fetchBreweries={fetchBreweries} setCurrentUser={setCurrentUser} setFavorites={setFavorites} favorites={favorites} logoutFunction={logoutFunction} setPage={setPage}/>
                <div className="flex">
                    <BreweryList allBreweries={allBreweries} favoriteBreweries={favoriteBreweries} fetchBreweries={fetchBreweries} favorites={favorites} setPage={setPage} page={page}/>
                </div>
                </UserContext.Provider>
        </>
    )
}

export default App