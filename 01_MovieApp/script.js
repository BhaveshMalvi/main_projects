const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

// MOST POPULER MOVIES

    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    // SEARCH MOVIES


    // ININTIAL POINT 

    const movieBox = document.querySelector('#movie_box');
   
    

const getMovies =  async (api) => {
    const response = await fetch(api)
    const data = await response.json()
    console.log(data);
    showMovies(data.results)  // this is form of list on result.
}


const showMovies = (data) => {
    // console.log(data);
    movieBox.innerHTML = " ";
    // emplty the movie box
    data.forEach(
        (item) => {
        const box = document.createElement('div'); // build box 
        box.classList.add('box');  // list iteam add in box which are create.
        
        box.innerHTML = `
        <img src="${IMGPATH + item.poster_path}" alt="" />
        <div class="overlay">
        <div class="title"> 
        <h2> ${item.original_title}  </h2>
        <span> ${item.vote_average} <span>/
        </div>
        <h3>Overview:</h3>
        <p> 
        ${item.overview}
        </p>
        </div>
        `
        movieBox.appendChild(box)
    });
}

// search image

document.querySelector('#search').addEventListener(
    "keyup", function(event){
        // console.log(event.target.value);
        if( event.target.value != ""){
            getMovies(SEARCHAPI + event.target.value);
            //search movies
        } else {
            getMovies(APIURL);
            // POPULAR MOVIE
        }
    }
)

getMovies(APIURL)