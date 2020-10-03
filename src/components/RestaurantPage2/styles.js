import styled from "styled-components";

export const RestaurantContainer = styled.div`
  width: 360px;
  height: 640px;
  font-family: Roboto;
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 360px;
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//////RESRAURANT DETAILS
export const RestLogo = styled.img`
  width: 328px;
  height: 120px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-left: 16px;
  margin-top: 18px;
`;

export const TittlePage = styled.p`
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
  margin-right: 137px;
`;

export const DetailsContainer = styled.div`
  width: 328px;
  height: 180px;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  margin-left: 16px;
`;
export const Name = styled.p`
  color: #e86e5a;
  margin: 6px 0 6px 0;
  width: 328px;
`;

export const MainText = styled.p`
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #b8b8b8;

  margin: 3px;
`;

export const TimeAndShipping = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 0px;
  width: 60%;
`;

export const CategoryTitle = styled.h5`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
  margin-left: 16px;
`;

////////PRODUCTS
export const ProductCard = styled.div`
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-bottom: 8px;
  margin-left: 16px;
  position: relative;
  display: flex;
`;

export const ProductImg = styled.img`
  width: 97px;
  height: 112px;
  object-fit: contain;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;

export const ProductDetails = styled.div`
  width: 198px;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const ProductName = styled.p`
  width: 166px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e86e5a;
  margin: 0 0 6px 0;
`;
export const ProductText = styled.p`
  width: 198px;
  height: 30px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.34px;
  color: #b8b8b8;
  margin: 6px;
`;
export const Price = styled.p`
  width: 108px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
  margin: 0;
`;

export const AddButton = styled.button`
  width: 90px;
  height: 31px;

  border: solid 1px var(--black);
  position: absolute;
  bottom: 0px;
  right: 0;
  background-color: white;
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
export const CartStyle = styled.button`
  display: none;
`;