import axios from "axios";
import React, { useState, useEffect } from 'react';
import Header from "../Header/Header";
import BreweryList from "../BreweryList/BreweryList";

export const UserContext = React.createContext()

function App(){
    const [brewries, setBrewries] = useState([])
    const [currentUser, setCurrentUser] = useState([])

    useEffect(() =>{
        fetchAllBreweries()
    }, [])

    const fetchAllBreweries = () => {
        axios({
            method: 'GET',
            url: '/api/template'
        }).then((response) => {
            console.log('GET response: ', response.data)
            setBrewries(response.data)
        }).catch((error) => {
            console.log('error in GET: ', error)
        })
    }


    return(
        <>
                <UserContext.Provider value={currentUser}>
                <Header fetchAllBreweries={fetchAllBreweries} setCurrentUser={setCurrentUser}/>
                <div className="flex">
                    <BreweryList brewries={brewries} fetchAllBreweries={fetchAllBreweries}/>
                </div>
                </UserContext.Provider>
        </>
    )
}

export default App