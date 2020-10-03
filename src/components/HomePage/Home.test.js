import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomePage from './index'

describe("testes de renderização inicial", () => { 

test("Rappi aparece na primeira renderização", () => {
    const { getByText } = render(<HomePage />);
    const logo = getByText(/Rappi/);
    expect(logo).toBeInTheDocument()
});

test("Input aparece na primeira renderização", () => {
    const { getByPlaceholderText } = render(<HomePage />);
    const input = getByPlaceholderText(/Restaurantes/);
    expect(input).toBeInTheDocument()
});

test("Categorias aparecem na primeira renderização", () => {
    const { getByText } = render(<HomePage />);
    const categoria = getByText(/mc/i);
    expect(categoria).toBeInTheDocument()
});


})