import axios from "axios";
import { useState, useEffect } from 'react';
import Header from "../Header/Header";
import BreweryList from "../BreweryList/BreweryList";
import AddBrewery from "../AddBrewery/AddBrewery";
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


    return(
        <>
            <Header />
            <div className="flex">
                <button onClick={fetchBreweries}>Get Breweries</button>
                <BreweryList brewries={brewries} fetchBreweries={fetchBreweries}/>
                <AddBrewery fetchBreweries={fetchBreweries} />
            </div>
            <Footer />
        </>
    )
}

export default App