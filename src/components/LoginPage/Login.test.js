import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoginPage from './index'





describe('<LoginPage />', () => {
    const testValues = {
        email: 'astrodev@gmil.com',
        password: '123456',
        handleLogin: jest.fn(),
    };

    it('Login works', () => {

        const {
            getAllByText
           } = render(<LoginPage />)

       
        
        const createButton = getAllByText(/Entrar/)

        fireEvent.click(createButton)

        expect(testValues.handleLogin).toHaveBeenCalledTimes(1);
        expect(testValues.handleLogin).toBeCalledWith({email: testValues.email, password: testValues.password});
    });

});

describe ("login page", ()=> {

test("Input shows on renderization", () => {
const { getByPlaceholderText } = render(<LoginPage />);
const input = getByPlaceholderText(/email@email.com/);
expect(input).toBeInTheDocument()
});

test("Input password shows on renderization", () => {
const { getByPlaceholderText } = render(<LoginPage />);
const input = getByPlaceholderText(/senha/);
expect(input).toBeInTheDocument()
});

});

