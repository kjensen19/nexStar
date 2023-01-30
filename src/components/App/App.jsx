import axios from "axios";
import { useState, useEffect } from 'react';
import Header from "../Header/Header";
import BreweryList from "../BreweryList/BreweryList";
import AddBrewery from "../AddBrewery/AddBrewery";
import Footer from "../Footer/Footer";

function App(){
    const [brewries, setBrewries] = useState([])

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
            <Header fetchAllBreweries={fetchAllBreweries}/>
            <div className="flex">
                <BreweryList brewries={brewries} fetchAllBreweries={fetchAllBreweries}/>
            </div>

        </>
    )
}

export default App