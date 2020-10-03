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
  RemoveButton,
  Number,
  ProductsContainer
} from "./styles";
import HomePageIcon from "./images/homepage.svg";
import CartIcon from "./images/shopping-cart.svg";
import AvatarIcon from "./images/avatar.svg";
import Back from "./images/back.svg";
import Modal from "./Modal";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/rappi4B/restaurants";

function RestaurantPage2() {
  const {restaurantId} = useParams();


  const [restaurantDetails, setRestaurantDetails] = useState();
  const [cart, setCart] = useState([]);

  const [quantity, setQuantity] = useState(1);
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState()

  const history = useHistory();

  const goToProfile = () => {
    history.push("./profile");
  };

  const goToCart = () => {
    history.push("/cart");
  };

  const goToHome = () => {
    history.push("/");
  };

  const handleSelectChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleModal = (product) => {
    setModal(true);
    setSelectedProduct(product)
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
    } else {
      (async () => {
        const axiosConfig = {
          headers: {
            auth: token,
          },
        };
        try {
          const response = await axios.get(
            `${baseUrl}/${restaurantId}`,
            axiosConfig
          );
          setRestaurantDetails(response.data.restaurant);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, []);

  const addToCart = () => {
    const restaurantInfo = restaurantDetails && {
      id: restaurantDetails.id,
      name: restaurantDetails.name,
      address: restaurantDetails.address,
      deliveryTime: restaurantDetails.deliveryTime,
      shipping: restaurantDetails.shipping,
    };

    const newProduct = {
      ...selectedProduct,
      quantity: quantity,
    };

    const newCart = [...cart, newProduct];

    localStorage.setItem("restaurantInfo", JSON.stringify(restaurantInfo));
    localStorage.setItem("cart", JSON.stringify(newCart));

    setCart(newCart);
    setModal(false);
  };

  const removeProduct = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  const productsRender = restaurantDetails && restaurantDetails.products.map((product) => (

    <ProductCard>
      <ProductImg src={product.photoUrl} />
      <ProductDetails>
        <ProductName>{product.name}</ProductName>
        <ProductText> {product.description}</ProductText>
        <Price>R${product.price.toFixed(2)}</Price>
      </ProductDetails>

      {cart.length === 0 ?
        (<AddButton onClick={() => handleModal(product)}>adicionar </AddButton>)
        :
        (<div>
          {/* <Number>{quantity}</Number> */}
          <RemoveButton onClick={() => removeProduct(product.id)}>remover</RemoveButton>
        </div>
        )
      }

    </ProductCard>

  ));

  return (
    restaurantDetails ?
      <RestaurantContainer>
        <Header>
          <img src={Back} onClick={goToHome} />
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
        <ProductsContainer>
          {productsRender}
        </ProductsContainer>
        <Footer>
          <img src={HomePageIcon} onClick={goToHome}></img>
          <img src={CartIcon} onClick={goToCart}></img>
          <img src={AvatarIcon} onClick={goToProfile}></img>
        </Footer>
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          addProductToCart={addToCart}
          handleSelectChange={handleSelectChange}
        />
      </RestaurantContainer> : null
  );
}
export default RestaurantPage2;