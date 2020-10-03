import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

//import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//import Input from '@material-ui/core/Input';
//import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

import {
  PageConteiner,
  Logo,
  Tittle,
  InputContainer,
  Button,
} from './styles'

import LogoImage from './logo.svg';
import SplashScreen from "../SplashScreen/";


const BaseUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4B/login"

const LoginPage = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ showPassword , setShowPassword ] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClickShowPassword = () => {
    setShowPassword( !showPassword );
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${BaseUrl}`, body);
      localStorage.setItem("token", response.data.token);
      history.push("/");
    } catch (e) {
      alert("Falha no login");
    }
  };

  const goToSignUpPage = () => {
    history.push("/signup");
  };

  const showSplashScreen = () => {
    setTimeout(()=> {
      setIsLoading(false)
    }, 5000)
  };

  useEffect(() => {
    showSplashScreen();
  });

  return (
    <PageConteiner>
      {isLoading === true && <SplashScreen/>}
      <Logo src={LogoImage} />
      <Tittle>Entrar</Tittle>
      <InputContainer>
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
        
        <OutlinedInput
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: 8 }}
          placeholder="senha"
          
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
          labelWidth={70}
        />
        <Button onClick={handleLogin}><b>Entrar</b></Button>
      </InputContainer>
      <p onClick={goToSignUpPage}>Não tem cadastro? Clique aqui</p>
    </PageConteiner>
  )
};

export default LoginPage;


