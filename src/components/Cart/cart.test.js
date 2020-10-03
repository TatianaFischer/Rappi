import React from "react";
import { render, wait, fireEvent, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "./index";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";
afterEach(cleanup);

test("Endereço de entrega renderiza na tela", async () => {
  //Preparação
  axios.get = jest.fn().mockResolvedValue({
    data: {
      address: "terra media, 204, 204 - terra média",
    },
  });

  const { getByText } = render(<Cart />);

  //Verificação/Execução
  await wait(() => expect(axios.get).toHaveBeenCalled());
  await wait(() =>
    expect(
      getByText(/terra media, 204, 204 - terra média/i)
    ).toBeInTheDocument()
  );
});

test("Botão renderiza na tela", async () => {
  //Preparação

  const { getByText } = render(<Cart />);

  //Verificação/Execução
  await wait(() => expect(getByText(/Confirmar/i)).toBeInTheDocument());
});
