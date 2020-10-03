import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import EditIcon from "../../images/edit.svg";
import NavBar from "./navbar.js";

import {
  Header,
  MainContainer,
  UserInfoContainer,
  UserInfoWrapper,
  UserInfoCard,
  EditIconContainer,
  HighlightedText,
  UserHistoryContainer,
  NoOrdersMessage,
  PreviousOrdersContainer,
  PreviousOrdersCard,
  OrderNameText,
  OrderDateText,
  OrderTotalText,
} from "./styles";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4B";

const UserProfilePage = () => {
  const [user, setUser] = useState();
  const [token, setToken] = useState(null);
  const [previousOrders, setPreviousOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const receivedToken = window.localStorage.getItem("token");
    setToken(receivedToken);

    if (token !== null) {
      getProfile();
      getOrderHistory();
    }
  }, [user, token]);

  const axiosConfig = {
    headers: {
      auth: token,
    },
  };

  const getProfile = () => {
    axios
      .get(`${baseUrl}/profile`, axiosConfig)
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getOrderHistory = () => {
    axios
      .get(`${baseUrl}/orders/history`, axiosConfig)
      .then((response) => {
        setPreviousOrders(response.data.orders);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const goToEditProfilePage = () => {
    history.push("/profile/edit-profile");
  };

  const goToEditAddressPage = () => {
    history.push("/profile/edit-address");
  };

  return (
    <MainContainer>
      <Header>Meu perfil</Header>
      {user === undefined ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
          }}
        >
          <CircularProgress style={{ color: "#e86e5a" }} />
        </div>
      ) : (
        <>
          {
            <UserInfoContainer>
              <UserInfoWrapper>
                <UserInfoCard>
                  <EditIconContainer
                    src={EditIcon}
                    onClick={goToEditProfilePage}
                  />
                  <HighlightedText>{user.name}</HighlightedText>
                  <div>{user.email}</div>
                  <div>{user.cpf}</div>
                </UserInfoCard>
              </UserInfoWrapper>
              <UserInfoWrapper>
                <UserInfoCard>
                  <EditIconContainer
                    src={EditIcon}
                    onClick={goToEditAddressPage}
                  />
                  <HighlightedText data-testid="endereco">
                    Endereço cadastrado:
                  </HighlightedText>
                  <div>{user.address}</div>
                </UserInfoCard>
              </UserInfoWrapper>
            </UserInfoContainer>
          }

          <NavBar />
          <UserHistoryContainer>
            <h4>Histórico de pedidos:</h4>
          </UserHistoryContainer>
          {previousOrders.length === 0 && (
            <NoOrdersMessage>Você não realizou nenhum pedido</NoOrdersMessage>
          )}
          {previousOrders.map((order) => {
            return (
              <PreviousOrdersContainer>
                <PreviousOrdersCard>
                  <OrderNameText>{order.name}</OrderNameText>
                  <OrderDateText>{order.date}</OrderDateText>
                  <OrderTotalText>
                    SUBTOTAL: R${order.total.toFixed(2)}
                  </OrderTotalText>
                </PreviousOrdersCard>
              </PreviousOrdersContainer>
            );
          })}
          <div style={{ marginTop: 100 }}></div>
        </>
      )}
    </MainContainer>
  );
};

export default UserProfilePage;
