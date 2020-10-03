import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import {
  Feed,
  Header,
  Tittle,
  InputContainer,
  FilterContainer,
  FilterKey,
  RestaurantContainer,
  Footer,
  ClockIcon,
  CartCard,
  CartCardText1,
  CartCardText2,
} from "./styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import HomePageIcon from "./images/homepage.svg";
import CartIcon from "./images/shopping-cart.svg";
import AvatarIcon from "./images/avatar.svg";
import CardRestaurant from "./CardRestaurant";
import Filter from "./FilteredPage";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/rappi4B/restaurants";

const HomePage = () => {
  const [filter, setFilter] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [category, setCategory] = useState("");

  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    setToken(token);
    if (!token) {
      history.push("/login");
    } else {
      getRestaurants();
    }
  }, [token]);


  const setFilterTrue = () => {
    setFilter(true);
  };

  const getRestaurants = () => {
    const axiosConfig = {
      headers: {
        auth: token,
      },
    };
    axios.get(baseUrl, axiosConfig).then((response) => {
      setRestaurants(response.data.restaurants);
    });
  };

  const setFilterFalse = () => {
    setFilter(false);
  };

  const changeCategory = (newCategory) => {
    if (newCategory !== category) {
      setCategory(newCategory);
    } else {
      setCategory("");
    }
  };

  let filteredList = restaurants;
  if (category !== "") {
    filteredList = filteredList.filter((restaurant) => {
      return restaurant.category === category;
    });

  }
  const history = useHistory();
  
  const goToCart = () => {
    history.push("./cart");
  };

  const goToProfile = () => {
    history.push("./profile");
  };


  return (
    <Feed>
      <Header>
        <Tittle>Rappi4</Tittle>
      </Header>

      {filter === false ? (
        <div>
          <InputContainer>
            <TextField
              onClick={setFilterTrue}
              variant="outlined"
              placeholder="Restaurantes"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </InputContainer>
          <FilterContainer>
            {restaurants
              .filter(
                (restaurant, index, array) =>
                  array.findIndex(
                    (item) => item.category === restaurant.category
                  ) === index
              )
              .map((restaurant) => (
                <FilterKey
                  value={restaurant.category}
                  key={restaurant.id}
                  onClick={() => changeCategory(restaurant.category)}
                >
                  {restaurant.category}
                </FilterKey>
              ))}
          </FilterContainer>
          <RestaurantContainer>
            <CardRestaurant restaurants={filteredList} />
          </RestaurantContainer>
        </div>
      ) : (
        <RestaurantContainer>
          <Filter restaurants={restaurants} />
        </RestaurantContainer>
      )}
      <Footer>
        <img src={HomePageIcon} onClick={setFilterFalse}></img>
        <img src={CartIcon} onClick={goToCart}></img>
        <img src={AvatarIcon} onClick={goToProfile}></img>
      </Footer>
    </Feed>
  );
};
export default HomePage;
