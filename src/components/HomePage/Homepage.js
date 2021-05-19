import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import axios from "axios";
import Row from "../Row/Row";
import requests from "../../requests";

function Homepage() {
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = "2dea0d03eb79de1e44ae3fef0d5f501c";

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
      );
      setMovie(response.data.results);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Slider movies={movie} />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    </>
  );
}

export default Homepage;
