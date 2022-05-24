import axios from "axios";

// base url: https://api.themoviedb.org/3/
// url completa: https://api.themoviedb.org/3/movie/550?api_key=15a8bf28fc92cf0776720e82601b9c23


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
