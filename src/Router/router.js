import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

// pages
import LoginPage from "../components/LoginPage";
import SignUpPage from "../components/SignUpPage";
import RestaurantPage from "../components/RestaurantPage2.js";
import HomePage from "../components/HomePage";
import UserProfilePage from "../components/UserProfilePage";
import UserProfileAddressEditPage from "../components/UserProfilePage/addressedition";
import UserProfileEditPage from "../components/UserProfilePage/profileinfoedition";
import Cart from "../components/Cart";
import RestaurantPage2 from "../components/RestaurantPage2";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/profile">
          <UserProfilePage />
        </Route>
        <Route exact path="/restaurants/:id">
          <RestaurantPage />
        </Route>
        <Route exact path="/profile/edit-address">
          <UserProfileAddressEditPage />
        </Route>
        <Route exact path="/profile/edit-profile">
          <UserProfileEditPage />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/restaurants2/:id">
          <RestaurantPage2 />
        </Route>

        <Route path="*">
          <h1>Oops! Página não encontrada. (404)</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
