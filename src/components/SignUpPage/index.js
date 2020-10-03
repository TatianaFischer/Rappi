import React, { useState} from "react";
import { useHistory } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
//import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

import axios from "axios";

import {
  PageConteiner,
  Logo,
  Tittle,
  InputContainer,
  Button
} from "./styles";

import LogoImage from "./logo.svg";


const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4B"

function SignUpPage() {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState(""); 
  const [confPassword, setConfPassword] = useState("");
  const [ showPassword , setShowPassword ] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword( !showPassword );
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    const body = {
      name: name,
      email: email,
      cpf: cpf,
      password: password, 
    };

    if ( password === confPassword) {
      try {
        const response = await axios.post(`${baseUrl}/signup`, body);
        localStorage.setItem("token", response.data.token);
        history.push("/profile/edit-address")
      } catch (e) {
        alert("Falha no cadastro");
      }
    } else { alert("senhas não conferem")}
 
  };

  return (
    <PageConteiner>
      <Logo src={LogoImage} />
      <Tittle>Cadastrar</Tittle>

      <InputContainer>
        <TextField
          label="Nome"
          style={{ margin: 8 }}
          placeholder="Nome e sobrenome"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="name"
          required
          fullWidth
        />
        <TextField
          label="E-mail"
          style={{ margin: 8 }}
          placeholder="email@email.com"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          required
          fullWidth
        /> 
        <TextField
          label="CPF"
          style={{ margin: 8 }}
          placeholder="000.000.000-00"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          id="cpf"
          type="cpf"
          required
          fullWidth
        />
        
        <OutlinedInput
          label="Senha"
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: 8 }}
          placeholder="Minimo 6 caracteres"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        
        <OutlinedInput
          label="Confirmar"
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
          style={{ margin: 8 }}
          placeholder="Confirme a senha anterior"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Button onClick={handleSignUp}><b>Criar</b></Button>
      </InputContainer>
    </PageConteiner>
  );
}

export default SignUpPage;

/*
<TextField
          label="Senha"
          id="outlined-start-adornment"
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
          variant="outlined"
        />
        */