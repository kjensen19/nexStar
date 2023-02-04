import axios from "axios"
import { useState } from 'react'
import AddBrewery from "../AddBrewery/AddBrewery"
import '../BreweryItem/BreweryItem.css'

export default function BreweryItem({ brewery, fetchBreweries, favorites, favoriteBreweries }){
    const [fav, setFav] = useState(false)
    const [details, setDetails] = useState(false)
    // console.log('brewery name: ', brewery)
    for(let brew of favoriteBreweries){
        if(brewery.name === brew.name){
            setFav(true)
        }
    }

    const deleteBrewery = () => {
        axios({
            method: 'DELETE',
            url: `/api/template/${brewery.id}`
        }).then((res) => {
            fetchBreweries()
        }).catch((err) => {
            console.log('DEL err: ', err)
        })
    }
    //Details toggle function
    const showDetails = () => {
        setDetails(!details)
    }
    //Handlers for favorite and unfavorite
    const favorite = () => {
        brewery.favorite = true
        setFav(brewery.favorite)
        axios.post('/api/template', brewery
            ).then((res) =>{
                console.log('res here???', res)
            }).catch((err) =>{
                //TODO: Add Alert here
                console.log('POST err in fav: ', err)
            })
        
        console.log(brewery)

    }
    const unFavorite = () => {
        brewery.favorite = false
        setFav(brewery.favorite)
        deleteBrewery()
    }

    return(
        <div id="breweryCard" className="py-4 pr-6 pl-4 my-2 w-5/12 min-w-fit bg-white rounded-xl shadow-2xl space-y-2 flex :scale-110 bg-gradient-to-r from-white to-amber-200 ">
            {brewery.favorite === true ?
            <button onClick={unFavorite}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-red-700 w-16 h-16 mr-4">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
            </button>
           :
            <button onClick={favorite}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 z-0 mr-4 text-red-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </button>
          }
            <div className="space-y-2 ">
                <div className="space-y-0.5 ">
                <p className="text-lg text-orange-600 font-semibold mr-4">
                    {brewery.name}
                </p>
                {brewery.website_url != null ? <a className="text-red-400 hover:text-indigo-500 hover:shadow-2xl" href={`${brewery.website_url}`} target={'_blank'}>Website</a> : <p className="text-slate-500 font-medium">Link Not provided</p>}
                </div>
                <div className="flex place-content-start w-fit">
                    <button onClick={showDetails} className="px-4 py-1 text-sm max-h-8 shadow-xl bg-orange-600 text-white font-semibold rounded-full border border-b-4 border-orange-700 hover:text-orange-200 hover:bg-indigo-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">Details</button>
                    {favorites === true ? <button onClick={deleteBrewery} className="px-4 py-1 mx-4 text-sm max-h-8 shadow-xl bg-orange-600 text-white font-semibold rounded-full border border-b-4 border-orange-700 hover:text-orange-600 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">Delete</button> : null}
                    {favorites === true ? <AddBrewery buttonName={'Edit'} brewery={brewery}/> : null}
                </div>
                
            </div>
            {details === true ? 
                    <div className="text-orange-600 ">
                        {brewery.phone !== null ? <p>({brewery.phone.slice(0,3)})-{brewery.phone.slice(0,3)}-{brewery.phone.slice(0,4)}</p> : <p>Not Provided</p>}
                        <p>{brewery.street}</p>
                        <p>{brewery.city}, {brewery.postal_code}</p>
                    </div>:<></>
                }
        </div>

    )
}
