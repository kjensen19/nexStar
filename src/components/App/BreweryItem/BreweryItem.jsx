

export default function BreweryItem({ brewery }){
    console.log('brewery name: ', brewery)
    //Edit go to a detail view or bring up a modal?
    //Details on click or a button?
    return(
        <div >
            <p>{brewery.name}</p>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}