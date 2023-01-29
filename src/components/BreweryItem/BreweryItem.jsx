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
        <div >
            <p>{brewery.name}</p>
            {brewery.website_url != null ? <a href={`${brewery.website_url}`} target={'_blank'}>Website</a> : <p>URL Not provided</p>}
            <button onClick={deleteBrewery}>Delete</button>
            <button onClick={updateBrewery}>Edit</button>
        </div>
    )
}