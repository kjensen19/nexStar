import React, { useState } from 'react';
import axios from 'axios';


  //brewery is passed in with a default empty object so we can reuse this component for editing, and buttonName to correctly render
export default function AddBrewery({ brewery={name:'', street:'', city:'', state:'', postal_code:'', website_url:''}, buttonName }){
    //Variable for intial state and to empty inputs/state after successful add
    const emptyInputs = {name:'', street:'', city:'', state:'', postal_code:'', website_url:''}
    //Brewery add object
    const [newBrewery, setNewBrewery] = useState(brewery)
    const [showModal, setShowModal] = useState(false);

    //change handler to manage task as an object w/spread operator keeping previous entries
    //name and value on inputs are important as they must match object for this function to work
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewBrewery(newBrewery => ({
            ...newBrewery,
            [name]: value
        }))
    }
    
   

    //Call POST with new brewery object as data
    //On success trigger fetch (passed as prop)
    //Then empty inputs/object
    function addNewBrewery(){
        console.log('in post', newBrewery)
        axios.post('/api/template', newBrewery
        ).then((res) =>{
            console.log('res here???', res)
            setShowModal(false)
            fetchBreweries()
            setNewBrewery(emptyInputs)
        }).catch((err) =>{
            //TODO: Add Alert here
            console.log('POST err: ', err)
        })
    }
    //Same as post, except used to edit an existing brewery in favorite's list
    const updateBrewery = () => {
      axios({
          method: 'PUT',
          url: `api/favorite/${brewery.id}`,
          data: newBrewery
      }).then((res) => {
          setShowModal(false)
          fetchBreweries()
      }).catch((err) => {
          console.log('Err in PUT: ', err)
      })
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Checks if we are editing or adding
        if(newBrewery.favorite === true){
          //PUT
          updateBrewery()
        }
        addNewBrewery();
    }
    // {name: '', street: '', city: '', state: '', postal_code: '', website_url: ''}
    //Button that cotrols opening and closing the modal and then the modal conditionally rendered based on state (controlled by button)
    return(
        <>
      <button
        className="px-4 py-1 text-sm max-h-8 shadow-xl bg-orange-600 text-white font-semibold rounded-full border border-b-4 border-orange-700 hover:text-orange-600 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
       {buttonName}
      </button>
      {showModal ? (
        <>
        <div className="flex items-center justify-center shadow-xl overflow-x-hidden overflow-y-auto  px-4 sm:px-6 lg:px-8 rounded-xl fixed inset-0 bg-slate-800 opacity-90 resize-none w-screen h-screen">
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none resize-none w-screen h-screen">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none ">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Brewery Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right pb-3"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-8 w-8 text-xl block bg-gray-500 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto"> <form action="#" method="POST">
    <div className="overflow-hidden shadow sm:rounded-md">
    <div className="bg-white px-4 py-5 sm:p-6">
    <h3 className="text-lg font-medium leading-6 text-gray-900 py-2">Add New Brewery</h3>
    <div className="grid grid-cols-6 gap-6">
    <div className="col-span-6 sm:col-span-3">
        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
        Name
        </label>
        <input
        onChange={handleChange} 
        name="name" 
        placeholder='Name' 
        value={newBrewery.name}
        type={"text"}
        id="first-name"
        autoComplete="given-name"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
    </div>
    <div className="col-span-6 sm:col-span-4">
    <label htmlFor="website_url" className="block text-sm font-medium text-gray-700">
    Website
    </label>
    <input
    onChange={handleChange} 
    type={'url'} 
    name='website_url' 
    placeholder='URL' 
    value={newBrewery.website_url}
    id="website_url"
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
    </div>
    <div className="col-span-6">
        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
        Street address
        </label>
        <input
        onChange={handleChange} 
        name='street' 
        placeholder='Street' 
        value={newBrewery.street}
        type="text"
        id="street-address"
        autoComplete="street-address"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
    </div>
    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
        City
        </label>
        <input
        onChange={handleChange} 
        placeholder='City' 
        value={newBrewery.city}
        type="text"
        name="city"
        id="city"
        autoComplete="address-level2"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
    </div>
    <div className="col-span-6 sm:col-span-3">
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
        State
        </label>
        <select
        onChange={handleChange}  
        name='state'  
        value={newBrewery.state} 
        id="state"
        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
        <option>Minnesota</option>
        </select>
    </div>
    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
        ZIP / Postal code
        </label>
        <input
        onChange={handleChange}
        name='postal_code' 
        placeholder='Zip code' 
        value={newBrewery.postal_code} 
        type="text"
        id="postal-code"
        autoComplete="postal-code"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
    </div>
    </div>
    </div>
    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
        <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={() => setShowModal(false)}
            >
            Close
            </button>
        <button
        onClick={handleSubmit}
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
        Save
        </button>
    </div>
    </div>
    </form>
    </div>
    </div> 
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
