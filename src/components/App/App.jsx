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
    const [page, setPage] = useState(0)
    //This is currently being handled as part of the login process
    //Calls useEffect on page load and any change to the favorite state (toggled by button)
    useEffect(() =>{
        checkUser
    }, [])
    //Conditionally decides if it should fetch all or fetch favorites based on state
    const fetchBreweries = () => {
        fetchAllBreweries()
        fetchFavoriteBreweries()
    }
    const logoutFunction = () => {
        setAllBreweries([])
        setFavoriteBreweries([])
    }
    //Fetch all breweries from the api, will need to add a state call to pass
    const fetchAllBreweries = () =>{
        axios({
            method: 'GET',
            url: '/api/allBreweries/all'
        }).then((response) => {
            console.log('GET response: ', response.data)
            setAllBreweries(response.data)
        }).catch((error) => {
            console.log('error in GET: ', error)
        })
    }
    //Fetches user's favorites
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

    const checkUser = () =>{
        axios({
            method: 'GET',
            url: '/api/user'
        }).the((response) =>{
            console.log('checkUser response', response)
            if(response.user.name){
                setCurrentUser(response.user.name)
            }
        }).catch((error) =>{
            console.log('Error in checkUser', error)
        })
    }

    //UserContext is supplying the user name to all pages
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