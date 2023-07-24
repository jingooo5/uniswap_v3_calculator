import React from "react";
import logo from "./logo.svg";
import styled, { keyframes } from "styled-components/macro";
import Navbar from "./components/NavBar";

const AppDiv = styled.div`
  text-align: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: ${({ theme }) => theme.navHeight}px 0px 5rem 0px;
  align-items: center;
  flex: 1;
`;

const AppHeader = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const logoSpin = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${logoSpin} infinite 20s linear;
  }
`;

function App() {
  return (
    <AppDiv>
      <HeaderWrapper>
        <Navbar />
      </HeaderWrapper>
      <BodyWrapper>
        <AppHeader>
          <AppLogo src={logo} />
        </AppHeader>
      </BodyWrapper>
    </AppDiv>
  );
}

export default App;
