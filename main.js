
let page = 1
fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f7b8a362a459b3c3d16a57a5972dc528&page=${page}`)
    .then(r => r.json())
    .then(r => {
        console.log(r.results)
        r.results.map((it) => {
            const movie = `<div class="sindhu">
                            <img src="https://image.tmdb.org/t/p/w300${it.poster_path}">
                            <h1>${it.original_title}</h1>
                            </div>`
            document.querySelector('.movies').innerHTML += movie
        })
    })
    .catch(err => console.error(err));

function sindhu(){
    console.log(page);
    page++
    
    return fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f7b8a362a459b3c3d16a57a5972dc528&page=${page}`)
    .then(r => r.json())
    .then(r => {
        console.log(r.results)
        r.results.map((it) => {
            const movie = `<div class="sindhu">
                            <img src="https://image.tmdb.org/t/p/w300${it.poster_path}">
                            <h1>${it.original_title}</h1>
                            </div>`
            document.querySelector('.movies').innerHTML += movie
        })
    })
    .catch(err => console.error(err));
    
}
