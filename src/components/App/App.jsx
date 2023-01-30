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
            <Header />
            <div className="flex">
                <BreweryList brewries={brewries} fetchAllBreweries={fetchAllBreweries}/>
            </div>
            <div className="flex py-4 px-4 gap-4 w-screen justify-center">
            <button className="px-4 py-1 text-sm max-h-8 shadow-md bg-white text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={fetchAllBreweries}>All Breweries</button>
            <button className="px-4 py-1 text-sm max-h-8 shadow-md bg-white text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={fetchAllBreweries}>Favorites</button>
            <AddBrewery fetchAllBreweries={fetchAllBreweries} />
            </div>
        </>
    )
}

export default App