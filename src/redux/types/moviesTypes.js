export const getMovies = 'GET_MOVIES';

export const MOVIE_API_KEY = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;

export const getMoviesApi = `https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}&language=en-US`;