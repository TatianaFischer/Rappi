import styled from "styled-components";
import dropdown from "./dropdown.jpeg";

export const ModalBody = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 90%;
  max-width: 400px;
  background-color: white;
  padding: 1rem;
`;

export const ModalTitle = styled.h4`
  text-align: center;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;

export const SelectWrapper = styled.div`
  width: 100%;
  height: 3rem;
  overflow: hidden;
  background: url(${dropdown}) no-repeat 95% 50% white;
  display: inline-block;
  position: relative;
`;

export const ModalSelect = styled.select`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
  padding-left: 1rem;
  background: transparent;
  -webkit-appearance: none;
  appearance: none;
`;

export const ModalButton = styled.div`
  cursor: pointer;
  color: #4f81a8;
  width: 100%;
  text-align: right;
  margin-top: 1.75rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;
