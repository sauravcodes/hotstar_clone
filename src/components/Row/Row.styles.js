import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0c111b;
`;
export const Heading = styled.div`
  font-size: 36px;
  margin: 56px;
  margin-bottom: 12px;
  color: #fff;
  text-align: start;
`;
export const MoviesDiv = styled.div`
  display: flex;
  overflow-x: scroll;
  flex-direction: row;
  margin-left: 56px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const MovieDiv = styled.div`
  margin: 0 16px 0 0px;

  & img {
    height: 300px;
    width: 230px;
  }
`;
