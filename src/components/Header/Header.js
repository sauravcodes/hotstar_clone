import React from "react";
import {
  Wrapper,
  Icon,
  ContentDiv,
  LeftDiv,
  RightDiv,
  Logo,
  TextDiv,
  SubsButton,
  LoginButton,
  SearchIcon,
  SearchDiv,
} from "./Header.styled";

const Header = () => {
  const IMAGE =
    "https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg";
  return (
    <Wrapper>
      <ContentDiv>
        <LeftDiv>
          <Icon />
          <Logo img src={IMAGE} />
          <TextDiv>TV</TextDiv>
          <TextDiv>Movies</TextDiv>
          <TextDiv>Sports</TextDiv>
          <TextDiv>News</TextDiv>
          <TextDiv>Premium</TextDiv>
          <TextDiv yellow>KIDS</TextDiv>
        </LeftDiv>
        <RightDiv>
          <SearchDiv>
            <input type="text" placeholder="Search"></input>
            <SearchIcon />
          </SearchDiv>
          <SubsButton>SUBSCRIBE</SubsButton>
          <LoginButton>LOGIN</LoginButton>
        </RightDiv>
      </ContentDiv>
    </Wrapper>
  );
};

export default Header;
