import React from "react";
import { useHistory } from "react-router-dom";

import {
  RestCard,
  RestLogo,
  CardFooter,
  CardName,
  CardInfo,
  CardContainer,
} from "./styles";

const CardRestaurant = (props) => {
  const history = useHistory();
  const goToRestaurantPage = (id) => {
    history.push(`restaurants2/${id}`);
    console.log(id);
  };

  return (
    <CardContainer>
      {props.restaurants.map((restaurant) => {
        return (
          <RestCard
            onClick={() => goToRestaurantPage(restaurant.id)}
            key={restaurant.id}
          >
            <RestLogo src={restaurant.logoUrl} />
            <CardName>{restaurant.name}</CardName>
            <CardFooter>
              <CardInfo>{restaurant.deliveryTime} min</CardInfo>
              <CardInfo>Frete: R$ {restaurant.shipping.toFixed(2)}</CardInfo>
            </CardFooter>
          </RestCard>
        );
      })}
    </CardContainer>
  );
};
export default CardRestaurant;
