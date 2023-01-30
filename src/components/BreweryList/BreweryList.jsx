import BreweryItem from "../BreweryItem/BreweryItem"

export default function BreweryList({ brewries, fetchAllBreweries }){
    console.log('breweries: ', brewries)
    return(
        
        <div className="border-8 flex flex-wrap gap-2 justify-evenly w-max rounded-xl">
            {brewries && brewries.map((brewery, i) =>(
                <BreweryItem brewery={brewery} key={brewery.id} fetchAllBreweries={fetchAllBreweries}/>
            ))}
        </div>

    )
}