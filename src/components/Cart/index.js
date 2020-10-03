import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import NavBar from "./navbar.js";
import useAuthorization from "../../hooks/useAuthorization";
import {
  ProductCard,
  ProductImg,
  ProductDetails,
  Price,
  ProductText,
  ProductName,
  AddButton,
  StyleQuantity,
  StyleQuantity2,
  Header,
  TittlePage,
  DetailsContainer,
  MainText,
  Name,
  TimeAndShipping,
  StyleCircular,
  Rectangle,
  Button,
  CartContainer,
  TotalPrice,
  TotalText,
  CardPrice,
  RectangleAddress,
  SecondaryText,
  RectangleDisabled,
  StyleQuantity3,
} from "./styles";
import Back from "./images/back.svg";
import CircularProgress from "@material-ui/core/CircularProgress";

const Estilo01 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Cart = () => {
  useAuthorization();
  const [cart, setCart] = useState([]);
  const [profile, setProfile] = useState("");
  const [restaurantDetail, setRestaurantDetail] = useState("");
  const [restaurantInfo, setRestaurantInfo] = useState("");

  const novoCarrinho = [];
  const [newCart, setNewCart] = useState([]);
  const [token, setToken] = useState();
  const [OptionPayment, setOptionPayment] = useState("unselected");

  const history = useHistory();
  const cartLocal = JSON.parse(window.localStorage.getItem("cart"));
  const restaurantInfoLocal = JSON.parse(
    window.localStorage.getItem("restaurantInfo")
  );

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    setToken(token);
    getProfile();
  }, [token]);

  const getProfile = () => {
    const headers = {
      headers: {
        auth: token,
      },
    };

    if (cartLocal) {
      setCart(cartLocal);
    } else {
      setCart([]);
    }

    setRestaurantInfo(restaurantInfoLocal);

    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/rappi4B/profile",
        headers
      )

      .then((response) => {
        setProfile(response.data.user);
        getRestaurantDetail();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getRestaurantDetail = () => {
    const headers = {
      headers: {
        auth: token,
      },
    };
    const id = restaurantInfo.id;
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/rappi4B/restaurants/${id}`,
        headers
      )
      .then((response) => {
        setRestaurantDetail(response.data.restaurant);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const placeOrder = () => {
    setNewCart(novoCarrinho);
    console.log("newCart", newCart);
    const headers = {
      headers: {
        auth: token,
      },
    };

    const products = newCart.map((product) => {
      return { id: product.id, quantity: product.quantidade };
    });
    console.log("produtos", products);

    const body = {
      products,
      paymentMethod: OptionPayment,
    };
    const id = restaurantInfo.id;
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/rappi4B/restaurants/${id}/order`,
        body,
        headers
      )
      .then((response) => {
        console.log(response);
        window.localStorage.removeItem("cart");
        window.localStorage.removeItem("restaurantInfo");
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
        console.log(body);
        window.localStorage.removeItem("cart");
        window.localStorage.removeItem("restaurantInfo");
        history.push("/");
      });
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((produto) => produto.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  console.log(cart);

  const handleRadio = (event) => {
    setOptionPayment(event.target.value);
  };

  console.log(cart);
  console.log(profile);
  console.log(restaurantDetail);
  console.log(OptionPayment);

  let total = 0;
  console.log("cartLocal", cartLocal);

  cart.forEach((produto) => {
    const verificaProduto = novoCarrinho.findIndex(
      (prod) => prod.id === produto.id
    );
    if (verificaProduto === -1) {
      const novoProduto = {
        id: produto.id,
        nome: produto.name,
        quantidade: Number(produto.quantity),
        preco: produto.price,
        descricao: produto.description,
        foto: produto.photoUrl,
      };
      novoCarrinho.push(novoProduto);
    } else {
      novoCarrinho[verificaProduto].quantidade += Number(produto.quantity);
    }
    total = produto.price * produto.quantity + total;
  });

  const carrinhoRenderizado = novoCarrinho.map((product) => (
    <ProductCard>
      <ProductImg src={product.foto} />
      <ProductDetails>
        {/* <StyleQuantity2>{product.quantidade}</StyleQuantity2> */}
        <StyleQuantity3>
          <ProductName>{product.nome}</ProductName>
          <StyleQuantity>
            <StyleQuantity2>{product.quantidade}</StyleQuantity2>
          </StyleQuantity>
        </StyleQuantity3>

        <ProductText> {product.descricao}</ProductText>
        <Price>R${product.preco.toFixed(2)}</Price>
      </ProductDetails>
      <div>
        <AddButton onClick={() => removeFromCart(product.id)}>
          Remover
        </AddButton>
      </div>
    </ProductCard>
  ));

  const totalFrete = total + restaurantDetail.shipping;

  const funcaoBotao = () => {
    alert("Seleciona opção de compra e preencha o carrinho");
  };

  const goToBack = () => {
    history.goBack();
  };

  if (restaurantDetail === "" && restaurantInfoLocal) {
    return (
      <StyleCircular>
        <CircularProgress style={{ color: "#e86e5a" }} />
      </StyleCircular>
    );
  }

  if (token) {
    return (
      <CartContainer>
        <div>
          <Header>
            <img src={Back} onClick={goToBack} />
            <TittlePage>Meu Carrinho</TittlePage>
          </Header>
          <RectangleAddress>
            <MainText style={{ marginLeft: "16px" }}>
              Endereço de entrega
            </MainText>
            <SecondaryText style={{ marginLeft: "16px" }}>
              {profile.address}
            </SecondaryText>
          </RectangleAddress>
          {novoCarrinho.length === 0 ? (
            <div style={{ textAlign: "center" }}>Carrinho Vazio</div>
          ) : (
            <div>
              <DetailsContainer>
                <Name>{restaurantDetail.name}</Name>
                <TimeAndShipping>
                  <MainText>{restaurantDetail.address}</MainText>
                </TimeAndShipping>
                <MainText>{restaurantDetail.deliveryTime} min</MainText>
              </DetailsContainer>
              <Estilo01>{carrinhoRenderizado}</Estilo01>
            </div>
          )}
          <div>
            <MainText style={{ marginLeft: "16px" }}>
              Frete: R$ {restaurantDetail.shipping},00
            </MainText>
            <CardPrice style={{ marginLeft: "16px" }}>
              <TotalText>Total:</TotalText>
              <TotalPrice>R${totalFrete.toFixed(2)}</TotalPrice>
            </CardPrice>
            <div></div>
            <div>
              <div style={{ marginLeft: "16px" }}>Forma de pagamento</div>
              <hr></hr>
              <input
                type="radio"
                name="opcao"
                value="money"
                onChange={handleRadio}
                style={{ marginLeft: "16px" }}
              ></input>
              <span>Dinheiro</span>
              <input
                type="radio"
                name="opcao"
                value="creditcard"
                onChange={handleRadio}
                style={{ marginLeft: "16px" }}
              ></input>
              <span>Cartão de Crédito</span>
            </div>
          </div>
          {novoCarrinho.length !== 0 && OptionPayment !== "unselected" ? (
            <Rectangle>
              <Button onClick={placeOrder}>Confirmar</Button>
            </Rectangle>
          ) : (
            <RectangleDisabled>
              <Button onClick={funcaoBotao}>Confirmar</Button>
            </RectangleDisabled>
          )}
        </div>
        <NavBar />
      </CartContainer>
    );
  } else {
    return <div>Acesso Negado</div>;
  }
};

export default Cart;
