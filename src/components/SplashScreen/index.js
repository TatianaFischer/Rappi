import React from "react";
import styled from 'styled-components';
import LogoImage from "./logoSplash.svg";

const Div = styled.div`
width: 100vw;
height: 100vh;
background-color: #e86e5a;
color: white;
animation-name: fadeOutOpacity;
animation-iteration-count: 1;
animation-timing-function: ease-out;
animation-duration: 2s;
animation-delay: 3s;
@keyframes fadeOutOpacity {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

`
export const Logo = styled.img`
    width: 208px;
    height: 116px;
    margin-left: 80px;
    margin-top: 190px;
    
`

const SplashScreen = () => {

    return (
        <Div>
            <Logo src={LogoImage} />
        </Div>
    )

}
export default SplashScreen