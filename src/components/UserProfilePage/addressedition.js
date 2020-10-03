import React, { useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import GoBackIcon from "../../images/back.svg";
import {
  Header,
  MainContainer,
  UserInfoContainer,
  GoBackIconContainer,
  SubmitButton,
  UserInput,
  InputLabel,
} from "./styles";

const UserInfoCard = styled.section`
  width: 328px;
  margin: 10px auto 0 auto;
  letter-spacing: -0.39px;
  line-height: 25px;
  margin-bottom: 10px;
`;

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4B";

const UserAddressPage = () => {
  const { form, onChange, resetForm } = useForm({
    street: "",
    number: "",
    complement: "",
    neighbourhood: "",
    city: "",
    state: "",
  });
  const history = useHistory();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const receivedToken = window.localStorage.getItem("token");
    setToken(receivedToken);
  }, [token]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const axiosConfig = {
    headers: {
      auth: token,
    },
  };

  const goToProfilePage = () => {
    history.push("/profile");
  };

  const editAddress = (event) => {
    event.preventDefault();

    const body = {
      street: form.street,
      number: form.number,
      complement: form.complement,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
    };

    axios
      .put(`${baseUrl}/address`, body, axiosConfig)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        alert("Endereço atualizado/cadastrado com sucesso!");
        resetForm();
        history.push("/profile");
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <MainContainer>
      <Header>
        <GoBackIconContainer src={GoBackIcon} onClick={goToProfilePage} />
        Endereço
      </Header>

      <UserInfoContainer>
        <UserInfoCard>
          <InputLabel for="street">Logradouro* </InputLabel>
          <form onSubmit={editAddress}>
            <UserInput
              name="street"
              id="street"
              placeholder="Av. Nove de Julho"
              value={form.street}
              type="text"
              onChange={handleInputChange}
              required
            ></UserInput>
            <InputLabel for="number">Número* </InputLabel>
            <UserInput
              name="number"
              id="number"
              placeholder="415"
              value={form.number}
              type="number"
              onChange={handleInputChange}
              required
            ></UserInput>
            <InputLabel for="complement">Complemento</InputLabel>
            <UserInput
              name="complement"
              id="complement"
              placeholder="Apto./Bloco"
              value={form.complement}
              type="text"
              onChange={handleInputChange}
            ></UserInput>
            <InputLabel for="neighbourhood">Bairro* </InputLabel>
            <UserInput
              name="neighbourhood"
              id="neighbourhood"
              placeholder="Jardim das Palmeiras"
              value={form.neighbourhood}
              type="text"
              onChange={handleInputChange}
              required
            ></UserInput>
            <InputLabel for="city">Cidade* </InputLabel>
            <UserInput
              name="city"
              id="city"
              placeholder="São Paulo"
              value={form.city}
              type="text"
              onChange={handleInputChange}
              required
            ></UserInput>
            <InputLabel for="state">Estado* </InputLabel>
            <UserInput
              name="state"
              id="state"
              pattern="[A-Z]{2,2}"
              placeholder="SP"
              type="text"
              value={form.state}
              onChange={handleInputChange}
              required
            ></UserInput>
            <SubmitButton type="submit">Salvar</SubmitButton>
          </form>
        </UserInfoCard>
      </UserInfoContainer>
    </MainContainer>
  );
};

export default UserAddressPage;
