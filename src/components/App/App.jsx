import axios from "axios";
import { useState, useEffect } from 'react';

import Header from "../Header/Header";
import BreweryList from "../BreweryList/BreweryList";
import Footer from "../Footer/Footer";

function App(){
    const [brewries, setBrewries] = useState([])

    useEffect(() =>{
        fetchBreweries()
    }, [])

    const fetchBreweries = () => {
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

    const addBrewery = () => {
        axios({
            method: 'POST',
            url: '/api/template',
            data: ''
        })
    }

    return(
        <>
            <Header />
            <div>
                <button onClick={fetchBreweries}>Get Breweries</button>
                <button>Add Brewery</button>
                <BreweryList brewries={brewries} />
            </div>
            <Footer />
        </>
    )
}

export default App