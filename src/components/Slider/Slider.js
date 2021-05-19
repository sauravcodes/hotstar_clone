import React, { useEffect, useState } from "react";
import {
  Wrapper,
  MainDiv,
  TextDiv,
  ImageDiv,
  Title,
  Subtitle,
  Desc,
  LeftArrow,
  RightArrow,
  GradientDiv,
} from "./Slider.styles";

function Slider({ movies }) {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleClick = () => {
    setLoading(true);
    setMovie(movies[Math.floor(Math.random() * movies.length - 1)]);
    setLoading(false);
  };

  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length - 1)]);
  }, [movies]);
  return (
    <Wrapper>
      <MainDiv>
        <GradientDiv></GradientDiv>
        <LeftArrow onClick={handleClick} />

        <TextDiv>
          <Title>{movie?.title}</Title>
          <Subtitle> Hotstar Special - Drama</Subtitle>
          <Desc>{movie?.overview}</Desc>
        </TextDiv>
        <ImageDiv>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt="outof"
          />
        </ImageDiv>
        <RightArrow onClick={handleClick} />
      </MainDiv>
      );
    </Wrapper>
  );
}

export default Slider;
