import AddBrewery from "../AddBrewery/AddBrewery"

export default function Header({ fetchAllBreweries }){
    return(
        <div className="sticky">
            <h1 className='text-4xl text-black font-semibold grid w-screen place-items-center py-4'>MN Brewery Finder</h1>
            <div className="flex py-4 px-4 gap-4 w-screen justify-center">
                <button className="px-4 py-1 text-sm max-h-8 shadow-md bg-white text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={fetchAllBreweries}>All Breweries</button>
                <button className="px-4 py-1 text-sm max-h-8 shadow-md bg-white text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={fetchAllBreweries}>Favorites</button>
                <AddBrewery fetchAllBreweries={fetchAllBreweries} />
            </div>
        </div>
    )
}

