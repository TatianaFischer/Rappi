import styled from "styled-components";

export const Feed = styled.div`
  width: 360px;
  height: 640px;
  font-family: Roboto;
  margin-left: 8px;
`;
export const Header = styled.div`
  width: 360px;
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
`;
export const Tittle = styled.p`
  margin-top: 43px;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
`;
export const InputContainer = styled.div`
  width: 328px;
  height: 56px;
  margin-top: 8px;
  display: flex;
  margin-left: 16px;
  font-family: Roboto;
`;
export const Input = styled.input`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  font-family: Roboto;
  font-size: 16px;
  margin-bottom: 8px;
`;
export const FilterContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  width: 360px;
  height: 42px;
  display: flex;
  overflow: auto;
  white-space: nowrap;
`;
export const FilterKey = styled.p`
  margin-left: 24px;
  :active {
    color: #e86e5a;
  }
`;
export const RestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardContainer = styled.div`
  margin-bottom: 50px;
`;
export const RestCard = styled.div`
  width: 328px;
  height: 200px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-bottom: 8px;
`;
export const RestLogo = styled.img`
  width: 328px;
  height: 120px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
export const CardName = styled.p`
  color: #e86e5a;
  margin: 4px 16px 0px 16px;
`;
export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 16px;
  margin-left: 16px;
`;
export const CardInfo = styled.p`
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`;
export const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 49px;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.2),
    0 -2px 1px -1px rgba(0, 0, 0, 0.12), 0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  background-color: white;
  display: flex;
  justify-content: space-around;
`;
export const FilterResponse = styled.div`
  margin-top: 16px;
  margin-left: 16px;
`;
export const CartCard = styled.div`
  width: 100%;
  height: 118px;
  background-color: #e86e5a;
  bottom: 49px;
  left: 0;
  position: fixed;
`;

export const Rectangle = styled.div`
  width: 328px;
  height: 42px;
  border-radius: 2px;
  background-color: #e86e5a;
`;

export const Button = styled.div`
  width: 328px;
  height: 42px;
  border-radius: 2px;
  background-color: #e86e5a;
`;
