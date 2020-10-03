import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "../../images/avatar.svg";
import Homepage from "../../images/homepage.svg";
import ShoppingCart from "../../images/shopping-cart.svg";
import styled from "styled-components";

const NavigationBar = styled.div`
  background-color: #fff;
  border: 1px solid gray;
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 49px;
  top: 92.5%;
  position: fixed;
`;

const NavigationButton = styled.button`
  width: 33.3%;
  background-color: #fff;
  border: none;
`;

const NavBar = () => {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/");
  };

  const goToCart = () => {
    history.push("/cart");
  };

  return (
    <NavigationBar>
      <NavigationButton>
        <img src={Homepage} alt="pagina-principal" onClick={goToHomePage} />
      </NavigationButton>
      <NavigationButton>
        <img src={ShoppingCart} alt="carrinho-de-compras" onClick={goToCart} />
      </NavigationButton>
      <NavigationButton>
        <img src={Avatar} alt="avatar" />
      </NavigationButton>
    </NavigationBar>
  );
};

export default NavBar;
