import axios from "axios";
const movieDbUrl =  "https://api.themoviedb.org/3";
const api_key = "0396bed0c91b3ea9d542c82eeb4426d1";
//https://api.themoviedb.org/3/movie/550?api_key=0396bed0c91b3ea9d542c82eeb4426d1
const getTrendingVideos = axios.get(movieDbUrl+"/trending/movie/day?api_key="+api_key);

export default {
    getTrendingVideos
}