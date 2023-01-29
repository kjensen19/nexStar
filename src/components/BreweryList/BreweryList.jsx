import BreweryItem from "../BreweryItem/BreweryItem"

export default function BreweryList({ brewries, fetchBreweries }){
    console.log('breweries: ', brewries)
    return(
        
        <div>
            {brewries && brewries.map((brewery, i) =>(
                <BreweryItem brewery={brewery} key={brewery.id} fetchBreweries={fetchBreweries}/>
            ))}
        </div>

    )
}