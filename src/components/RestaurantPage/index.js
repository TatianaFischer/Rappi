import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

import {
  Header,
  Footer,
  TittlePage,
  RestLogo,
  RestaurantContainer,
  Name,
  MainText,
  DetailsContainer,
  TimeAndShipping,
  CategoryTitle,
  ProductCard,
  ProductImg,
  ProductDetails,
  Price,
  ProductText,
  ProductName,
  AddButton,
} from "./styles";
import HomePageIcon from "./images/homepage.svg";
import CartIcon from "./images/shopping-cart.svg";
import AvatarIcon from "./images/avatar.svg";
import Back from "./images/back.svg";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4B";

function RestaurantPage() {
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [products, setProducts] = useState([]);

  const onClickId = useParams();
  const restaurantId = onClickId.id;

  // const token = localStorge.getItem('token')

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async (id) => {
    // const teste = id;
    const axiosConfig = {
      headers: {
        auth:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkpSU0RDT2FCT0JNNkpVMEFibmFNIiwibmFtZSI6InRlc3RlIiwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20iLCJjcGYiOiIxMTEuMTExLjExMS01NSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE1OTQ2NjUyNDN9.7Iz2Sr5TZeVOZKy8E7_2OpTPfK_ebRyGmJ-WXn7D-zg",
      },
    };
    try {
      const response = await axios.get(
        `${baseUrl}/restaurants/${restaurantId}`,
        axiosConfig
      );
      setRestaurantDetails(response.data.restaurant);
      setProducts(response.data.restaurant.products);
    } catch (error) {
      console.log(error);
      alert("erro ao abrir");
    }
  };
  const productsRender = products.map((product) => {
    return (
      <>
        <ProductCard>
          <ProductImg src={product.photoUrl} />
          <ProductDetails>
            <ProductName>{product.name}</ProductName>
            <ProductText> {product.description}</ProductText>
            <Price>R${product.price}</Price>
          </ProductDetails>

          <div>
            <AddButton>adicionar</AddButton>
          </div>
        </ProductCard>
      </>
    );
  });

  return (
    <RestaurantContainer>
      <Header>
        <img src={Back} />

        <TittlePage>Restaurante</TittlePage>
      </Header>

      <RestLogo src={restaurantDetails.logoUrl} />

      <DetailsContainer>
        <Name>{restaurantDetails.name}</Name>
        <MainText>{restaurantDetails.category}</MainText>
        <TimeAndShipping>
          <MainText>{restaurantDetails.deliveryTime} min</MainText>

          <MainText>Frete: R$ {restaurantDetails.shipping},00</MainText>
        </TimeAndShipping>

        <MainText>{restaurantDetails.address}</MainText>
      </DetailsContainer>

      <CategoryTitle>Principais:</CategoryTitle>

      {productsRender}

      <Footer>
        <img src={HomePageIcon}></img>
        <img src={CartIcon}></img>
        <img src={AvatarIcon}></img>
      </Footer>
    </RestaurantContainer>
  );
}

export default RestaurantPage;
