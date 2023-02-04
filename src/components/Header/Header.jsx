import AddBrewery from "../AddBrewery/AddBrewery"
import Login from "../Login/Login"
import React from "react"
import axios from "axios"
import { UserContext } from "../App/App"

export default function Header({ fetchBreweries, setCurrentUser, setFavorites, favorites, logoutFunction }){
    const value = React.useContext(UserContext)
    //sets top level state to prompt a re-render
    const viewFavorites = () => {
        setFavorites(true)

    }

    return(
        <div className="flex flex-col w-screen">
            <h1 className='text-4xl text-white font-semibold grid w-screen place-items-center py-2'>{value.length === 0 ? 'MN Breweries' : `${value}'s Breweries`}</h1>
            <div className="flex py-2 px-4 gap-4 w-auto justify-center">
                <Login setCurrentUser={setCurrentUser} fetchBreweries={fetchBreweries} logoutFunction={logoutFunction}/>
                <button className="px-4 py-1 text-sm max-h-8 shadow-xl bg-orange-600 text-white font-semibold rounded-full border border-b-4 border-orange-700 hover:text-orange-600 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2" onClick={() => setFavorites(false)}>All</button>
                <button className="px-4 py-1 text-sm max-h-8 shadow-xl bg-orange-600 text-white font-semibold rounded-full border border-b-4 border-orange-700 hover:text-orange-600 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2" onClick={viewFavorites}>Favorites</button>
                <AddBrewery fetchBreweries={fetchBreweries} buttonName={'Add'}/>
            </div>
            <div className="grid w-screen place-items-center text-2xl text-white font-semibold">
                <h1 className="  text-white rounded-xl px-2 my-2">{favorites === true ? 'Favorites' : 'All Breweries'}</h1>
            </div>
        </div>
    )
}

