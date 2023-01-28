import axios from "axios";
import { useState, useEffect } from 'react';
import BreweryList from "./BreweryList/BreweryList";

function App(){
    const [brewries, setBrewries] = useState([])

    const handleClick = () => {
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
        <div>
            <button onClick={handleClick}></button>
                <BreweryList brewries={brewries} />

            
        </div>
    )
}

export default App