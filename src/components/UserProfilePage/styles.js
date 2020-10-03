import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: var(--white);
`;

export const MainContainer = styled.div`
  font-family: "Roboto", sans-serif;
`;

export const UserInfoContainer = styled.article`
  width: 100%;
  margin: 0 auto;
`;

export const UserInfoWrapper = styled.div`
  width: 100%;
  margin: 0;

  &:hover {
    background-color: #eeeeee;
  }
`;

export const UserInfoCard = styled.section`
  width: 88%;
  margin: 10px auto 0 auto;
  letter-spacing: -0.39px;
  line-height: 25px;
  margin-bottom: 10px;
`;

export const HighlightedText = styled.div`
  width: 100%;
  height: 100%;
  &:hover {
    color: #b8b8b8;
  }
`;

export const PreviousOrdersContainer = styled.div`
  width: 360px;
  height: 120px;
  margin: 0 auto;
`;

export const PreviousOrdersCard = styled.div`
  width: 328px;
  height: 106px;
  border-radius: 8px;
  margin: 0 auto;
  border: solid 1px #b8b8b8;
`;

export const UserHistoryContainer = styled.div`
  height: 28px;
  width: 328px;
  margin: 0 auto 10px auto;
  border-bottom: 1px ridge #000;
`;

export const OrderNameText = styled.p`
  width: 296px;
  height: 18px;
  margin: 10px auto 12px auto;
  color: #e86e5a;
  font-size: 16px;
  letter-spacing: -0.39px;
`;

export const OrderDateText = styled.p`
  width: 296px;
  height: 18px;
  margin: 0 auto 10px auto;
  color: #000000;
  font-size: 12px;
  letter-spacing: -0.29px;
`;

export const OrderTotalText = styled.p`
  width: 296px;
  height: 18px;
  margin: 0 auto;
  color: #000000;
  font-size: 16px;
  letter-spacing: -0.39px;
  font-weight: bold;
`;

export const NoOrdersMessage = styled.div`
  width: 328px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

export const EditIconContainer = styled.img`
  position: absolute;
  right: 36px;
`;

export const UserInput = styled.input`
  width: 316px;
  height: 56px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
  margin-bottom: 24px;
  padding-left: 12px;

  &::placeholder {
    font-size: 16px;
    color: #d0d0d0;
  }
`;

export const SubmitButton = styled.button`
  border: none;
  width: 328px;
  height: 42px;
  border-radius: 2px;
  background-color: #e86e5a;
  font-size: 16px;
`;

export const InputLabel = styled.label`
  position: absolute;
  margin-top: -12px;
  margin-left: 14px;
  background-color: white;
  font-size: 12px;
  color: #b8b8b8;
`;

export const GoBackIconContainer = styled.img`
  position: absolute;
  top: 6px;
  left: 16px;
`;
