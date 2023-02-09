Coding Assessment
Build a simple app to show Breweries from the breweries API
[Link](https://api.openbrewerydb.org/breweries)
Requirements:
    ✅1. Connect to the API and use the returned data as your initial list
        ✅1. Display in a list- need to write async promise array based on intial meta query to collect all data
    ✅2. Should have the ability to
        ✅1. Create a new Brewery(POST)
        ✅2. Update a Brewery from the list(PUT)
            ✅-should be able to reuse most of Add modal, populated with GET info
        ✅3. View all Brewery data(Detail GET)
        ✅4. Delete a Brewery from the list(DELETE)
    ✅3. README


Bonus Points:
    ✅Use React.js as your frontend framework
    ✅Use Tailwind CSS
    😅Use TypeScript

Once complete send the source code in a zip file and/or send a link to a source repo with the
code




Decisions:
    ✅Authentication (multi-user seems worth, especially if deploying)
    ✅Stay SPA or add routing?
    ✅pagination
    ✅Menu interface
    Add notes?- space issues unless we go to single item detail view
    Website preview (some don't work, possible security issues are the cons...  the pros are when it works it looks cool)
    ✅Deploy
    ✅Mobile

NEXT:
    ✅1. Rename template router to allBreweries or openbrewery or something
    ✅2. Add multiple state functionality (add dropdown on client) and variable on server side for all
        ✅1. Does that mean we also use for favorites (favorites by state?)- thinking no
    3. Search
    4. User icon(s)/profile
    5. Ability to see which other users have favorited a brewery?
    ❓6. Make sure we are checking if someone is logged in rather than automatically sending to login on refresh
    7. Some kind of sharing?
    8. user reviews/ratings (goes with 5, maybe?)
    9. Picture upload?
    10. Something shareable?
    ✅11. Error Handling


    
