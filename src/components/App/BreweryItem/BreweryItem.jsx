

export default function BreweryItem({ brewery }){
    console.log('brewery name: ', brewery)
    return(
        <div >
            <p>{brewery.name}</p>
        </div>
    )
}