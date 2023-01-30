import axios from "axios"

export default function BreweryItem({ brewery,fetchBreweries }){
    console.log('brewery name: ', brewery)
    //Edit go to a detail view or bring up a modal?
    //Details on click or a button?

    const deleteBrewery = () => {
        axios({
            method: 'DELETE',
            url: `/api/template/:${brewery.id}`
        }).then((res) => {
            fetchBreweries()
        }).catch((err) => {
            console.log('DEL err: ', err)
        })
    }
    //Tailwind modal here?:
    const updateBrewery = () => {
        axios({
            method: 'PUT',
            url: `api/template/:${brewery.id}`,
            data: ''
        }).then((res) => {
            fetchBreweries()
        }).catch((err) => {
            console.log('Err in PUT: ', err)
        })
    }

    return(
        <div className="py-8 px-8  my-4 mx-4 w-2/5 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
            </svg>
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                    {brewery.name}
                </p>
                {brewery.website_url != null ? <a href={`${brewery.website_url}`} target={'_blank'}>Website</a> : <p className="text-slate-500 font-medium">URL Not provided</p>}
                </div>
                <div className="flex">
                    <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Details</button>
                    <button onClick={deleteBrewery} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Edit</button>
                    <button onClick={updateBrewery} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Delete</button>
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


