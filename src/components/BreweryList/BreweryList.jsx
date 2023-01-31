import BreweryItem from "../BreweryItem/BreweryItem"
import React, { useState } from "react"
import { UserContext } from "../App/App"

export default function BreweryList({ breweries, fetchAllBreweries, favorites }){
    const value = React.useContext(UserContext)
    const [page, setPage] = useState(0)
    const pages = Math.ceil(breweries.length)
    console.log('value=', value)
    console.log('pages', pages)
    
    function increasePage(){
        const nextPage = page + 10
        setPage(nextPage)
    }

    function decreasePage(){
        const nextPage = page - 10
        setPage(nextPage)
    }


    
    return(
            <div className="border-8 rounded-xl flex flex-row w-screen">
                {page > 0 ? <button
                onClick={decreasePage}
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
                    <path fillRule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>
                </button> : <div className="w-32"></div>}
            <div className="flex flex-wrap gap-2 justify-evenly w-screen cell:w-4/5 cell:gap-0">
                {breweries && breweries.slice(page, (page+10)).map((brewery, i) =>(
                    <BreweryItem brewery={brewery} key={brewery.id} fetchAllBreweries={fetchAllBreweries} favorites={favorites}/>
                ))}
            </div>
                {page <= pages ? <button
                    onClick={increasePage}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
                        <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                </button> : null}
            </div>


    )
}