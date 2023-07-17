import React from "react";
import { Container, Form, Navbar} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {getMoviesDB, getMoviesBySearch} from "../redux/actions/movieAction";

export default function NavBar() {

    // redux dispatch
    const dispatch = useDispatch();

    const search = async (word) => {
        if(!word) return dispatch(getMoviesDB());
        return dispatch(getMoviesBySearch(word));
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">
                    <img
                        alt="film icon"
                        src="https://cdn-icons-png.flaticon.com/512/860/860349.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Form className="d-flex w-100 ps-2">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 w-100"
                        aria-label="Search"
                        onInput={(e) => search(e.target.value)}
                    />
                </Form>
            </Container>
        </Navbar>
    );
}