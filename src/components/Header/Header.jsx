import AddBrewery from "../AddBrewery/AddBrewery"
import Login from "../Login/Login"
import React from "react"
import axios from "axios"
import { UserContext } from "../App/App"

export default function Header({ fetchAllBreweries, setCurrentUser, setBreweries, setFavorites, favorites }){
    const value = React.useContext(UserContext)

    const viewFavorites = () => {
        setFavorites(true)
        // fetchAllBreweries()
        // axios.get('/api/favorite')
        // .then((response) => {
        //     console.log('GET response: ', response.data)
        //     setBreweries(response.data)
        // }).catch((error) => {
        //     console.log('error in GET: ', error)
        // })
    }

    return(
        <div className="flex flex-col">
            <h1 className='text-4xl text-black font-semibold grid w-screen place-items-center py-4'>{value.length === 0 ? 'MN Brewery Finder' : `${value}'s Brewery Finder`}</h1>
            <div className="flex py-4 px-4 gap-4 w-screen justify-center">
                <Login setCurrentUser={setCurrentUser}/>
                <button className="px-4 py-1 text-sm max-h-8 shadow-md bg-white text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={() => setFavorites(false)}>All Breweries</button>
                <button className="px-4 py-1 text-sm max-h-8 shadow-md bg-white text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={viewFavorites}>Favorites</button>
                <AddBrewery fetchAllBreweries={fetchAllBreweries} buttonName={'Add Brewery'}/>
            </div>
            <div className="grid w-screen place-items-center text-2xl text-white font-semibold">
                <h1 className="bg-purple-600 rounded-xl px-2 my-2">{favorites === true ? 'Favorites' : 'All Breweries'}</h1>
            </div>
        </div>
    )
}

