import axios from "axios"

export default function BreweryItem({ brewery,fetchAllBreweries }){
    console.log('brewery name: ', brewery)
    //Edit go to a detail view or bring up a modal?
    //Details on click or a button?

    const deleteBrewery = () => {
        axios({
            method: 'DELETE',
            url: `/api/template/:${brewery.id}`
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
            url: `api/template/:${brewery.id}`,
            data: brewery
        }).then((res) => {
            fetchAllBreweries()
        }).catch((err) => {
            console.log('Err in PUT: ', err)
        })
    }
    const showDetails = () => {
        //either show extra info that is already included in object or fetch details for this id
    }

    return(
        <div className="py-8 px-8  my-4 mx-4 w-2/5 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            {brewery.favorite === true ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" text-purple-700 w-12 h-12">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
           :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          }
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                    {brewery.name}
                </p>
                {brewery.website_url != null ? <a href={`${brewery.website_url}`} target={'_blank'}>Website</a> : <p className="text-slate-500 font-medium">URL Not provided</p>}
                </div>
                <div className="flex">
                    <button onClick={showDetails} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Details</button>
                    <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Edit</button>
                    <button onClick={deleteBrewery} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Delete</button>
                </div>
            </div>
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


