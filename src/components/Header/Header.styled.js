import styled from "styled-components";
import { MdMenu } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #131a28;
  height: 80px;
`;
export const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 56px;
`;
export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const TextDiv = styled.p`
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: ${(props) => (props.yellow ? 700 : 500)};
  color: ${(props) => (props.yellow ? "#FFAA05" : "#cccdd0;")};
  margin-right: 28px;
`;
export const Icon = styled(MdMenu)`
  color: white;
  font-size: 26px;
  cursor: pointer;
  margin-right: 24px;
`;

export const Logo = styled.img`
  cursor: pointer;
  height: 50px;
  margin-right: 24px;
  margin-top: -14px;
`;
export const RightDiv = styled.div`
  display: flex;
  align-items: center;
`;
export const SubsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 120px;
  font-weight: 600;
  color: white;
  font-size: 16px;
  font-weight: 600px;
  outline: none;
  border: none;
  background-color: #1f80e0;
  /* margin-right: 24px; */
  border-radius: 5px;
`;
export const LoginButton = styled(SubsButton)`
  background-color: #131a28;
  width: 100px;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  display: flex;
  color: #cccdd0;
  align-items: center;
  position: absolute;
  margin-top: 6px;
`;

export const SearchDiv = styled.div`
  position: relative;
  display: flex;
  width: 450px;
  margin-right: 24px;
  justify-content: flex-end;
  & input {
    display: flex;
    margin-top: -6px;
    width: 300px;
    color: #cccdd0;
    outline: none;
    font-size: 18px;
    padding: 8px 0px;
    border-bottom: 2px solid #cccdd0;
    border-right: none;
    border-top: none;
    border-left: none;
    background-color: transparent;
    transition: all 0.2s ease-in;
  }

  & input:focus {
    border-bottom: 2px solid #1f80e0;
    width: 450px;
  }
`;
