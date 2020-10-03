import React from "react";
import { render, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserProfilePage from "./index.js";
import NavBar from "./navbar.js";
import ProfileInfoEdition from "./profileinfoedition";
import ProfileAddressEdition from "./addressedition";
import axios from "axios";
import userEvent from "@testing-library/user-event";

axios.get = jest.fn().mockResolvedValue({ data: [] });
axios.post = jest.fn().mockResolvedValue();
axios.put = jest.fn().mockResolvedValue();
window.alert = jest.fn();

/** PÁGINA DE PERFIL
 *
 */

describe("Renderizações iniciais da página de perfil", () => {
  test("Elementos da página de perfil aparecem na primeira renderização", async () => {
    const utils = render(<UserProfilePage />);
    const getByText = utils.getByText;

    const header = getByText(/Meu perfil/i);

    expect(header).toBeInTheDocument();
  });
});

/** PÁGINA DE EDIÇÃO DE PERFIL
 *
 */

describe("Renderizações iniciais da página de edição de perfil", () => {
  test("Inputs aparecem na primeira renderização", async () => {
    const utils = render(<ProfileInfoEdition />);

    const inputName = utils.getByLabelText(/Nome*/i);
    const inputEmail = utils.getByLabelText(/E-mail*/i);
    const inputCpf = utils.getByLabelText(/CPF*/i);

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputCpf).toBeInTheDocument();
  });

  test("Botão aparece na primeira renderização", async () => {
    const { getByText } = render(<ProfileInfoEdition />);

    expect(getByText(/Salvar/)).toBeInTheDocument();
  });
});

describe("Edita as informações do perfil do usuário", () => {
  test("Edita perfil", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          name: "Joana",
          email: "joana@gmail.com",
          cpf: "333.222.111-00",
        },
      ],
    });

    axios.put = jest.fn().mockResolvedValue();

    const utils = render(<ProfileInfoEdition />);
    const getByText = utils.getByText;

    const inputName = utils.getByLabelText(/Nome*/i);
    const inputEmail = utils.getByLabelText(/E-mail*/i);
    const inputCpf = utils.getByLabelText(/CPF*/i);

    await userEvent.type(inputName, "Joana");
    await userEvent.type(inputEmail, "joana@gmail.com");
    await userEvent.type(inputCpf, "333.222.111-00");

    expect(inputName).toHaveValue("Joana");
    expect(inputEmail).toHaveValue("joana@gmail.com");
    expect(inputCpf).toHaveValue("333.222.111-00");

    const button = getByText(/Salvar/);
    userEvent.click(button);

    expect(axios.put).toHaveBeenCalledWith(
      "https://us-central1-missao-newton.cloudfunctions.net/rappi4B/profile",
      {
        name: "Joana",
        email: "joana@gmail.com",
        cpf: "333.222.111-00",
      },
      { headers: { auth: null } }
    );

    await wait(() => expect(axios.put).toHaveBeenCalledTimes(1));
  });
});

/** PÁGINA DE EDIÇÃO DE ENDEREÇO
 *
 */

describe("Renderizações iniciais da página de edição de endereço", () => {
  test("Inputs aparecem na primeira renderização", async () => {
    const utils = render(<ProfileAddressEdition />);

    const inputStreet = utils.getByLabelText(/Logradouro*/i);
    const inputNumber = utils.getByLabelText(/Número*/i);
    const inputComplement = utils.getByLabelText(/Complemento/i);
    const inputNeighbourhood = utils.getByLabelText(/Bairro*/i);
    const inputCity = utils.getByLabelText(/Cidade*/i);
    const inputState = utils.getByLabelText(/Estado*/i);

    expect(inputStreet).toBeInTheDocument();
    expect(inputNumber).toBeInTheDocument();
    expect(inputComplement).toBeInTheDocument();
    expect(inputNeighbourhood).toBeInTheDocument();
    expect(inputCity).toBeInTheDocument();
    expect(inputState).toBeInTheDocument();
  });

  test("Botão aparece na primeira renderização", async () => {
    const { getByText } = render(<ProfileAddressEdition />);

    expect(getByText(/Salvar/)).toBeInTheDocument();
  });
});

describe("Edita as informações de endereço do usuário", () => {
  test("Edita endereço", async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          street: "Rua dos Bobos",
          number: "200",
          complement: "70",
          neighbourhood: "Jardim das Palmeiras",
          city: "São Paulo",
          state: "SP",
        },
      ],
    });

    axios.put = jest.fn().mockResolvedValue();

    const utils = render(<ProfileAddressEdition />);
    const getByText = utils.getByText;

    const inputStreet = utils.getByLabelText(/Logradouro*/i);
    const inputNumber = utils.getByLabelText(/Número*/i);
    const inputComplement = utils.getByLabelText(/Complemento/i);
    const inputNeighbourhood = utils.getByLabelText(/Bairro*/i);
    const inputCity = utils.getByLabelText(/Cidade*/i);
    const inputState = utils.getByLabelText(/Estado*/i);

    await userEvent.type(inputStreet, "Rua dos Bobos");
    await userEvent.type(inputNumber, "200");
    await userEvent.type(inputComplement, "70");
    await userEvent.type(inputNeighbourhood, "Jardim das Palmeiras");
    await userEvent.type(inputCity, "São Paulo");
    await userEvent.type(inputState, "SP");

    expect(inputStreet).toHaveValue("Rua dos Bobos");
    expect(inputNumber).toHaveValue(Number("200"));
    expect(inputComplement).toHaveValue("70");
    expect(inputNeighbourhood).toHaveValue("Jardim das Palmeiras");
    expect(inputCity).toHaveValue("São Paulo");
    expect(inputState).toHaveValue("SP");

    const button = getByText(/Salvar/);
    userEvent.click(button);

    expect(axios.put).toHaveBeenCalledWith(
      "https://us-central1-missao-newton.cloudfunctions.net/rappi4B/address",
      {
        street: "Rua dos Bobos",
        number: "200",
        complement: "70",
        neighbourhood: "Jardim das Palmeiras",
        city: "São Paulo",
        state: "SP",
      },
      { headers: { auth: null } }
    );

    await wait(() => expect(axios.put).toHaveBeenCalledTimes(1));
  });
});
