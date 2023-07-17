import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import MovieCard from "./MovieCard";
import {Row} from "react-bootstrap";
import {getMoviesDB} from "../redux/actions/movieAction";

export default function MovieList() {

    // redux dispatch
    const dispatch = useDispatch();

    const {movies} = useSelector(state => state);

    useEffect( () => {
        dispatch(getMoviesDB());
    },[]);

    return (
        <Row className="mb-4">
            {
                movies.length > 0 ?
                movies.map((movie) => {
                    return (
                        <MovieCard
                            movie_id={movie.id}
                            vote_count={movie.vote_count}
                            key={movie.id}
                            poster_path={movie.poster_path}
                            title={movie.title}
                            release_date={movie.release_date}
                            vote_average={movie.vote_average}
                        />
                    )
                })
                    : <h1 className="text-center text-dark mt-5">" no matched films "</h1>
            }
        </Row>
    )
}