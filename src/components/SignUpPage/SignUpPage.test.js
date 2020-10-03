import React from "react";
import { render, wait} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignUpPage from './index'
import axios from "axios";
import userEvent from "@testing-library/user-event";

describe ("signup page", ()=> {

    test("Name input shows on renderization", () => {
    const { getByPlaceholderText } = render(<SignUpPage />);
    const name = getByPlaceholderText(/Nome e sobrenome/);
    expect(name).toBeInTheDocument()
    });

    test("Email input shows on renderization", () => {
    const { getByPlaceholderText } = render(<SignUpPage />);
    const email = getByPlaceholderText(/email@email.com/);
    expect(email).toBeInTheDocument()
    });

    test("Cpf input shows on renderization", () => {
    const { getByPlaceholderText } = render(<SignUpPage />);
    const cpf = getByPlaceholderText(/000.000.000-00/);
    expect(cpf).toBeInTheDocument()
    });
    
    test("Input password shows on renderization", () => {
    const { getByPlaceholderText } = render(<SignUpPage />);
    const password = getByPlaceholderText(/Minimo 6 caracteres/);
    expect(password).toBeInTheDocument()
    });
    
    })

describe('Testar se o cadastro é efetuado', () => {
    test ('Faz cadastro', async () => {
        axios.post = jest.fn().mockResolvedValue([
         {
            "name": "Astrodev",
	        "email": "astrodev@future4.com",
	        "cpf": "111.111.111-11",
	        "password": "123456"
         }
       ])
  
        const {
         getByPlaceholderText,
         getByText
        } = render(<SignUpPage />)

        const inputname = getByPlaceholderText("Nome e sobrenome");
        const inputemail = getByPlaceholderText("email@email.com");
        const inputcpf = getByPlaceholderText("000.000.000-00");
        const inputpassword = getByPlaceholderText("Minimo 6 caracteres");
        const button = getByText(/Criar/);
        
        userEvent.type(inputname, "Astrodev");
        userEvent.type(inputemail, "astrodev@future4.com");
        userEvent.type(inputcpf, "111.111.111-11");
        userEvent.type(inputpassword, "123456");
        userEvent.click(button);
        
  
        await wait(() => 
        expect(axios.post).toHaveBeenCalledTimes(1))
        await wait(() => 
        expect(inputname).toHaveValue("Astrodev"))
        await wait(() => 
        expect(inputemail).toHaveValue("astrodev@future4.com"))
        await wait(() => 
        expect(inputcpf).toHaveValue("111.111.111-11"))
        await wait(() => 
        expect(inputpassword).toHaveValue("123456"))
    });
});