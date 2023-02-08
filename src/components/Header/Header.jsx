import AddBrewery from "../AddBrewery/AddBrewery"
import Login from "../Login/Login"
import React, { useState } from "react"
import axios from "axios"
import { UserContext } from "../App/App"

export default function Header({ fetchBreweries, setCurrentUser, setFavorites, favorites, logoutFunction, setPage }){
    const value = React.useContext(UserContext)
    const [breweryState, setBreweryState] = useState("Minnesota")
    //sets top level state to prompt a re-render
    const viewFavorites = () => {
        setPage(0)
        setFavorites(true)

    }

    const viewAll = () => {
        setPage(0)
        setFavorites(false)
    }

    const handleChange = (e) => {
       fetchBreweries(e.target.value)
        console.log('breweryState?', breweryState)
        setBreweryState(e.target.value)
    }

    return(
        <div className="flex flex-col w-screen">
            <h1 className='text-4xl text-white font-semibold grid w-screen place-items-center py-2'>{value.length === 0 ? 'MN Breweries' : `${value}'s Breweries`}</h1>
            <div className="flex py-2 px-4 gap-4 w-auto justify-center">
                <Login setCurrentUser={setCurrentUser} fetchBreweries={fetchBreweries} logoutFunction={logoutFunction}/>
                <button className="px-4 py-1 text-sm max-h-8 shadow-xl bg-orange-600 text-white font-semibold rounded-full border border-b-4 border-orange-700 hover:text-orange-600 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2" onClick={viewAll}>All</button>
                <button className="px-4 py-1 text-sm max-h-8 shadow-xl bg-orange-600 text-white font-semibold rounded-full border border-b-4 border-orange-700 hover:text-orange-600 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2" onClick={viewFavorites}>Favorites</button>
                <select 
                    className="px-4 py-1 text-sm max-h-8 shadow-xl bg-orange-600 text-white font-semibold rounded-full border border-b-4 border-orange-700 hover:text-orange-600 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                    onChange={handleChange}  
                    name='state'   
                    id="state"
                    >        
                    <option value="Alabama">AL</option>
                    <option value="Alaska">AK</option>
                    <option value="Arizona">AZ</option>
                    <option value="Arkansas">AR</option>
                    <option value="California">CA</option>
                    <option value="Colorado">CO</option>
                    <option value="Connecticut">CT</option>
                    <option value="Delware">DE</option>
                    <option value="Florida">FL</option>
                    <option value="Georgia">GA</option>
                    <option value="Hawaii">HI</option>
                    <option value="Idaho">ID</option>
                    <option value="Illinois">IL</option>
                    <option value="Indiana">IN</option>
                    <option value="Iowa">IA</option>
                    <option value="Kansas">KS</option>
                    <option value="Kentucky">KY</option>
                    <option value="Louisiana">LA</option>
                    <option value="Maine">ME</option>
                    <option value="Maryland">MD</option>
                    <option value="Massachusetts">MA</option>
                    <option value="Michigan">MI</option>
                    <option value="Minnesota">MN</option>
                    <option value="Mississippi">MS</option>
                    <option value="Missouri">MO</option>
                    <option value="Montana">MT</option>
                    <option value="Nebraska">NE</option>
                    <option value="Nevada">NV</option>
                    <option value="New_Hampshire">NH</option>
                    <option value="New_Jersey">NJ</option>
                    <option value="New_Mexico">NM</option>
                    <option value="New_York">NY</option>
                    <option value="North_Carolina">NC</option>
                    <option value="North_Dakota">ND</option>
                    <option value="Ohio">OH</option>
                    <option value="Oklahoma">OK</option>
                    <option value="Oregon">OR</option>
                    <option value="Pennsylvania">PA</option>
                    <option value="Rhode_Island">RI</option>
                    <option value="South_Carolina">SC</option>
                    <option value="South_Dakota">SD</option>
                    <option value="Tennessee">TN</option>
                    <option value="Texas">TX</option>
                    <option value="Utah">UT</option>
                    <option value="Vermont">VT</option>
                    <option value="Virginia">VA</option>
                    <option value="Washington">WA</option>
                    <option value="West_Virginia">WV</option>
                    <option value="Wisconsin">WI</option>
                    <option value="Wyoming">WY</option>
                </select>
                <AddBrewery fetchBreweries={fetchBreweries} buttonName={'Add'}/>
            </div>
            <div className="grid w-screen place-items-center text-2xl text-white font-semibold">
                <h1 className="  text-white rounded-xl px-2 my-2">{favorites === true ? 'Favorites' : `All ${breweryState} Breweries`}</h1>
            </div>
        </div>
    )
}

