//api key from TMDB
const api = "api_key-1ceb7c357d484b08ab00b89bf73d76d6";

//base url of the site
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img = "https://image.tmdb.org/t/p/w300";

//requests for movies data
const requests = {
    fetchTrending: `$(base_url)/trending/all/week?$(api)&language-en-US`,
    
}