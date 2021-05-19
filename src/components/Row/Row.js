import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { Wrapper, Heading, MoviesDiv, MovieDiv } from "./Row.styles";

function Row({ title, fetchUrl }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      return response;
    }
    fetchMovies();
  }, []);
  console.log(movies);
  return (
    <Wrapper>
      <Heading>{title}</Heading>
      <MoviesDiv>
        {movies.map((movie) => (
          <MovieDiv>
            <img
              key={movie.id}
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
          </MovieDiv>
        ))}
      </MoviesDiv>
    </Wrapper>
  );
}

export default Row;
