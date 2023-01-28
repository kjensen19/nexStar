import { useState } from 'react';
import axios from 'axios';



export default function AddBrewery({ fetchBreweries }){
    //Variable for intial state and to empty inputs/state after successful add
    const emptyInputs = {name: '', street: '', city: '', state: '', postal_code: '', website_url: ''}
    //Brewery add object
    const [ newBrewery, setNewBrewery] = useState(emptyInputs)

    //change handler to manage task as an object w/spread operator keeping previous entries
    //name and value on inputs are important as they must match object for this function to work
    const handleChange = e => {
        const { name, value } = e.target;
        setNewBrewery(newBrewery => ({
            ...newBrewery,
            [name]: value
        }))
    }
    //Prevent default behavior of the submit, call axios POST on new task object
    const handleSubmit = (e) => {
        e.preventDefault();
        addNewBrewery(newBrewery);
    }

    //Call POST with new brewery object as data
    //On success trigger fetch (passed as prop)
    //Then empty inputs/object
    const addNewBrewery = (brewery) => {
        axios({
            method: 'POST',
            url: '/api/template',
            data: newBrewery
        }).then((res) =>{
            fetchBreweries()
            setNewBrewery(emptyInputs)
        }).catch((err) =>{
            //TODO: Add Alert here
            console.log('POST err: ', err)
        })
    }
    // {name: '', street: '', city: '', state: '', postal_code: '', website_url: ''}
    return(
        <div>
            <input onChange={handleChange} type='text' name='name' placeholder='Name' value={newBrewery.name} />
            <input onChange={handleChange} type='text' name='street' placeholder='Street' value={newBrewery.street} />
            <input onChange={handleChange} type='text' name='city' placeholder='City' value={newBrewery.city} />
            <input onChange={handleChange} type='text' name='state' placeholder='State' value={newBrewery.state} />
            <input onChange={handleChange} type='text' name='postal_code' placeholder='Zip code' value={newBrewery.postal_code} />
            <input onChange={handleChange} type='text' name='website_url' placeholder='URL' value={newBrewery.website_url} />
            <button onClick={handleSubmit}>Add Brewery</button>
        </div>
    )

}


