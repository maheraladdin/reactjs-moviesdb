import React,{useEffect,useState} from "react";
import {Col, Row,Button} from "react-bootstrap";
import {Link,useParams} from "react-router-dom";
import axios from "axios";

export default function MovieDetails() {
    const {id} = useParams();

    const [movieDetails,setMovieDetails] = useState({});

    async function getMovieDetails() {
        await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=20c91bcb16106e37d855c0b956d513be&language=en-US`).then((response) => {
            setMovieDetails(response.data);
        });
    }

    useEffect(() => {
        (async () => {
            await getMovieDetails()
        })();
    }, [id])

    return (
        <article>
            <Row
                className="my-3 p-3 bg-dark text-light gap-3 gap-md-0 rounded-3"
            >
                <Col sm="12" md="5" lg="3" className="d-flex justify-content-center align-items-center justify-content-md-start align-items-md-center">
                    <img
                        src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` : "https://via.placeholder.com/250x375"}
                        height={movieDetails.poster_path ? "375px" : "auto"}
                        alt="film poster"
                    />
                </Col>
                <Col sm="12" md="6" lg="9" className="d-flex flex-column gap-2 justify-content-center align-items-center fs-1">
                    <section className="border-bottom border-1 text-center">Film name: {movieDetails.title}</section>
                    <section className="border-bottom border-1 text-center">release date: {movieDetails.release_date}</section>
                    <section className="border-bottom border-1 text-center">vote count: {movieDetails.vote_count}</section>
                    <section className="border-bottom border-1 text-center">vote: {movieDetails.vote_average}</section>
                </Col>
            </Row>
            <Row className="my-3 px-3 pb-3 bg-dark text-light rounded-3">
                {
                    movieDetails.overview ? (
                        <article>
                            <section className="text-capitalize fs-1">Story:</section>
                            <section>
                            {movieDetails.overview}
                            </section>
                        </article>
                    ) : null
                }
            </Row>
            <Row className="my-3 p-3">
                <Col sm="12" className="d-flex gap-2 justify-content-center align-items-center">
                    {
                        movieDetails.homepage ? (
                            <a target="_blank" rel="noreferrer" href={movieDetails.homepage}><Button variant="primary" className="text-capitalize">film page</Button></a>
                        ) : null
                    }
                    <Link to="/"><Button variant="primary" className="text-capitalize">home page</Button></Link>
                </Col>
            </Row>
        </article>
    )
}