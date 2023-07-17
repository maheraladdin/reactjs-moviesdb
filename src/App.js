import './App.css';
import Navbar from './Components/NavBar';
import {Container} from "react-bootstrap";
import MovieList from "./Components/MovieList";
import React from "react";
import Paging from "./Components/Paging";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <article>
        <Navbar />
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <MovieList />
                            <Paging />
                        </>
                    } />
                    <Route path="movie/:id" element={<MovieDetails />} />
                </Routes>
            </BrowserRouter>
        </Container>
    </article>
  );
}

export default App;
