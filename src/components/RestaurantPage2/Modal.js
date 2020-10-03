import React from "react";

import {
  ModalBody,
  ModalButton,
  ModalSelect,
  SelectWrapper,
  ModalTitle,
} from "./modalStyle";

import Modal from "@material-ui/core/Modal";

const QuantityModal = (props) => {
  const { open, onClose, addProductToCart, handleSelectChange } = props;

  return (
    <Modal open={open} onClose={onClose}>
      <ModalBody>
        <ModalTitle>Selecione a quantidade desejada</ModalTitle>
        <SelectWrapper>
          <ModalSelect onChange={handleSelectChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </ModalSelect>
        </SelectWrapper>
        <ModalButton onClick={addProductToCart}>
          ADICIONAR AO CARRINHO
        </ModalButton>
      </ModalBody>
    </Modal>
  );
};

export default QuantityModal;
