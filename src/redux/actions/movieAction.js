import { getMovies, getMoviesApi, MOVIE_API_KEY } from "../types/moviesTypes";
import axios from "axios";

/**
 * @desc     reduxApi is a function that returns a function that dispatches an object to the redux store
 * @param   {string} url - url of the api
 * @param   {number?} page - page number
 * @param   {string?} word - search word
 * @return {(function(*): Promise<void>)|*}
 */
const reduxApi = (url, page, word) => {
    return async (dispatch) => {
        // in case of search
        if(word) url = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=en-US&query=${word}&include_adult=false`;
        // in case of pagination
        if (page) url += `&page=${page}`;

        // get movies and pageCount from api
        const {data: {results: movies, total_pages: pageCount}} = await axios.get(url);

        // dispatch object to redux store
        const dispatchObject = {
            type: getMovies,
            payload: movies,
            pageCount: pageCount > 500 ? 500 : pageCount
        }

        // in case of search
        if (word) dispatchObject.word = word;

        // dispatch movies and pageCount to redux store
        dispatch(dispatchObject);
    }
};

/**
 * @desc     getMoviesDB is a function that returns a function that dispatches an object with all movies to the redux store
 * @return  {(function(*): Promise<void>)|*}
 */
export const getMoviesDB = () => reduxApi(getMoviesApi);

/**
 * @desc     getMoviesByPage is a function that returns a function that dispatches an object with movies and pageCount in page number to the redux store
 * @param   {number} page - page number
 * @param   {string?} word - search word
 * @return {(function(*): Promise<void>)|*}
 */
export const getMoviesByPage = (page,word) => reduxApi(getMoviesApi, page, word)

/**
 * @desc     getMoviesBySearch is a function that returns a function that dispatches an object with movies and pageCount in search word to the redux store
 * @param   {string} word - search word
 * @return {(function(*): Promise<void>)|*}
 */
export const getMoviesBySearch = (word) => reduxApi(getMoviesApi, undefined, word)