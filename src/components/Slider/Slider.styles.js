import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #131a28;
`;
export const MainDiv = styled.div`
  display: flex;
  position: relative;
  width: 95%;
  height: 550px;
  margin: 6px 0 16px 0;
`;
export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffff;
  background-color: #030b17;
  width: 45%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
export const Title = styled.div`
  align-self: flex-start;
  font-size: 42px;
  font-weight: 600;
  padding-top: 88px;
  padding-left: 56px;
`;
export const Subtitle = styled.div`
  align-self: flex-start;
  padding-left: 56px;
  font-size: 20px;
  font-weight: 600;
  color: #cccdd0;
  margin-top: 16px;
`;
export const Desc = styled.div`
  align-self: flex-start;
  padding-left: 56px;
  text-align: start;
  width: 80%;
  font-size: 20px;
  font-weight: 600;
  color: #cccdd0;
  margin-top: 18px;
`;
export const ImageDiv = styled.div`
  width: 55%;
  display: flex;
  object-fit: cover;

  & img {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

export const LeftArrow = styled(IoIosArrowBack)`
  position: absolute;
  cursor: pointer;
  font-size: 36px;
  color: white;
  top: 40%;
  opacity: 0.2;
  transition: all 0.2s ease-in;
  &:hover {
    font-size: 42px;
    opacity: 1;
  }
`;
export const RightArrow = styled(IoIosArrowForward)`
  position: absolute;
  font-size: 36px;
  cursor: pointer;
  color: white;
  right: 20px;
  top: 40%;
  opacity: 0.2;
  transition: all 0.2s ease-in;

  &:hover {
    font-size: 42px;
    opacity: 1;
  }
`;

export const GradientDiv = styled.div`
  position: absolute;
  right: 50%;
  height: 550px;
  width: 200px;
  border-radius: 10px;
  background-image: linear-gradient(to right, #030b17, #0003);
`;
