import React from "react";
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function MovieCard({movie_id,poster_path,title,release_date,vote_average,vote_count}) {
    return (
        <Col sm="6" md="4" lg="3" className="pt-4">
            <Link to={`/movie/${movie_id}`}>
                <Card
                    className="bg-dark text-white text-capitalize text-center"
                >
                    <Card.Img
                        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : "https://via.placeholder.com/500x750"}
                        alt={title + " poster"}
                    />
                    <Card.ImgOverlay
                        className="d-flex flex-column justify-content-center align-items-center dark-overlay"
                    >
                        <Card.Title className="">Film title: {title}</Card.Title>
                        <Card.Text>Date: {release_date}</Card.Text>
                        <Card.Text>vote count: {vote_count}</Card.Text>
                        <Card.Text>vote: {vote_average}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Link>
        </Col>
    );
}