import axios from "axios"

export default function BreweryItem({ brewery }){
    console.log('brewery name: ', brewery)
    //Edit go to a detail view or bring up a modal?
    //Details on click or a button?

    const deleteBrewery = () => {
        axios({
            method: 'DELETE',
            url: `/api/template/:${brewery.id}`

        })
    }

    return(
        <div >
            <p>{brewery.name}</p>
            {brewery.website_url != null ? <a href={`${brewery.website_url}`} target={'_blank'}>Website</a> : <p>URL Not provided</p>}
            <button onClick={deleteBrewery}>Delete</button>
            <button>Edit</button>
        </div>
    )
}