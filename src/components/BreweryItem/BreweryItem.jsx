import axios from "axios"
import { useState } from 'react'
import AddBrewery from "../AddBrewery/AddBrewery"

export default function BreweryItem({ brewery, fetchAllBreweries, favorites }){
    const [fav, setFav] = useState(false)
    const [details, setDetails] = useState(false)
    // console.log('brewery name: ', brewery)
    //Edit go to a detail view or bring up a modal?
    //Details on click or a button?

    const deleteBrewery = () => {
        axios({
            method: 'DELETE',
            url: `/api/template/${brewery.name}`
        }).then((res) => {
            fetchAllBreweries()
        }).catch((err) => {
            console.log('DEL err: ', err)
        })
    }
    //This should become favorite brewery, add fav brewery router. On click go from outline to filled icon
    const updateBrewery = () => {
        axios({
            method: 'PUT',
            url: `api/template/${brewery.id}`,
            data: brewery
        }).then((res) => {
            fetchAllBreweries()
        }).catch((err) => {
            console.log('Err in PUT: ', err)
        })
    }
    const showDetails = () => {
        setDetails(!details)
    }
    
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
        <div className="py-8 px-8  my-4 w-2/5 min-w-fit bg-white opacity-85 rounded-xl shadow-2xl space-y-2 cell:max-w-4/5 cell:py-4 cell:flex cell:items-center cell:justify-center cell:space-my-0 cell:space-mx-0 hover:scale-110 bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400">
            {brewery.favorite === true ?
            <button onClick={unFavorite}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-purple-700 w-12 h-12 z-0">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
            </button>
           :
            <button onClick={favorite}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 z-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </button>
          }
            <div className="text-center space-y-2 cell:w-40 cell:max-w-40">
                <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                    {brewery.name}
                </p>
                {brewery.website_url != null ? <a className="hover:text-purple-600 hover:shadow-2xl" href={`${brewery.website_url}`} target={'_blank'}>Website</a> : <p className="text-slate-500 font-medium">Link Not provided</p>}
                </div>
                <div className="flex gap-2 cell:gap-0">
                    <button onClick={showDetails} className="px-4 py-1 bg-white text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Details</button>
                    {favorites === true ? <AddBrewery buttonName={'Edit'} brewery={brewery}/> : null}
                    {favorites === true ? <button onClick={deleteBrewery} className="px-4 py-1 bg-white text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Delete</button> : null}
                </div>
                
            </div>
            {details === true ? 
                    <div>
                        <p>({brewery.phone.slice(0,3)})-{brewery.phone.slice(0,3)}-{brewery.phone.slice(0,4)}</p>
                        <p>{brewery.street}</p>
                        <p>{brewery.city}, {brewery.postal_code}</p>
                    </div>:<></>
                }
        </div>

    )
}

/* <div >

<p>{brewery.name}</p>
{brewery.website_url != null ? <a href={`${brewery.website_url}`} target={'_blank'}>Website</a> : <p>URL Not provided</p>}
<button onClick={deleteBrewery}>Delete</button>
<button onClick={updateBrewery}>Edit</button>
</div> */

/* <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="Woman's Face" /> */


//SVG for unfilled icons, this to enable favoriting 
/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg> */


