window.addEventListener('DOMContentLoaded', () => {
    searchHandler()
})

function searchHandler() {
    const formElement = document.getElementById('github-form')
    formElement.addEventListener('submit', (e) => searcher(e))

}

function searcher(event) {
    event.preventDefault()
    console.log(event.target.search.value)

    //do a 
    //fetch(`https://api.github.com/search/users?q=${event.target.search.value}`, SOMETHING)
    // read results to make card that looks like:
    //
    //  x NAME
    //
    //  ---DISP---
    //  --AVATAR--
    //
    //  x hyperlink name to each repo

}