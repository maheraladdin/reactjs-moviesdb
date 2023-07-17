import {getMovies} from "../types/moviesTypes";

const initialState = {
    movies: [],
    pageCount: 0,
    word: ""
}

// 2) Create a reducer function
export const movieReducer = (state= initialState, action) => {
    switch (action.type) {
        case getMovies:
            return {movies: action.payload, pageCount: action.pageCount, word: action.word};
        default:
            return state;
    }
}