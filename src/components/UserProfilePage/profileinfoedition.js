import React, { useState, useEffect } from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import GoBackIcon from "../../images/back.svg";
import styled from "styled-components";
import {
  Header,
  MainContainer,
  UserInfoContainer,
  GoBackIconContainer,
  InputLabel,
  UserInput,
  SubmitButton,
} from "./styles";

const UserInfoCard = styled.section`
  width: 328px;
  margin: 10px auto 0 auto;
  letter-spacing: -0.39px;
  line-height: 25px;
  margin-bottom: 10px;
`;

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4B";

const ProfileInfoEdition = () => {
  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    cpf: "",
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

  const editUserInfo = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
    };

    axios
      .put(`${baseUrl}/profile`, body, axiosConfig)
      .then(() => {
        alert("Perfil atualizado com sucesso!");
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
        Meu perfil
      </Header>

      <UserInfoContainer>
        <UserInfoCard>
          <form onSubmit={editUserInfo}>
            <InputLabel for="name">Nome* </InputLabel>
            <UserInput
              name="name"
              id="name"
              placeholder="Joana Tavares"
              value={form.name}
              type="text"
              onChange={handleInputChange}
              required
            />
            <InputLabel for="email">E-mail* </InputLabel>
            <UserInput
              name="email"
              id="email"
              placeholder="joana@gmail.com"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={form.email}
              type="email"
              onChange={handleInputChange}
              required
            />
            <InputLabel for="cpf">CPF</InputLabel>
            <UserInput
              name="cpf"
              id="cpf"
              placeholder="333.222.111-00"
              pattern="(\d{3})\.(\d{3})\.(\d{3})-(\d{2})"
              value={form.cpf}
              type="text"
              onChange={handleInputChange}
              required
            />
            <SubmitButton type="submit">Salvar</SubmitButton>
          </form>
        </UserInfoCard>
      </UserInfoContainer>
    </MainContainer>
  );
};

export default ProfileInfoEdition;
