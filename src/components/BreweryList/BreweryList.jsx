import BreweryItem from "../BreweryItem/BreweryItem"
import React from "react"
import { UserContext } from "../App/App"

export default function BreweryList({ brewries, fetchAllBreweries }){
    const value = React.useContext(UserContext)
    console.log('breweries: ', brewries)
    console.log('value=', value)
    
    return(
            <div className="border-8 rounded-xl flex flex-row">
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
                    <path fillRule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>
                </button>
            <div className="flex flex-wrap gap-2 justify-evenly ">
                {brewries && brewries.map((brewery, i) =>(
                    <BreweryItem brewery={brewery} key={brewery.id} fetchAllBreweries={fetchAllBreweries}/>
                ))}
            </div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
                        <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>


    )
}