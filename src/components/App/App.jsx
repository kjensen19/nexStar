import axios from "axios";
import { useState, useEffect } from 'react';


function App(){
    const [brewery, setBrewery] = useState([])

    const handleClick = () => {
        axios({
            method: 'GET',
            url: '/api/template'
        }).then((response) => {
            console.log('GET response: ', response.data)
            setBrewery(response)
        }).catch((error) => {
            console.log('error in GET: ', error)
        })
    }

    return(
        <button onClick={handleClick}></button>
    )
}

export default App