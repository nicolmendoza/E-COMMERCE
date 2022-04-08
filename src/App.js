import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import { Link, Redirect } from "react-router-dom";

import Login from "./components/Login";
import { Provider } from "react-redux";
import { generarStore } from "./components/redux/store.js";
import Cart from "./components/Cart/Cart";
function App() {
  
  //el store retorna todo lo que estamos conbinando en rootReducer
  const token = localStorage.getItem("token");
  const store = generarStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={token ? <Home /> : <Login />}></Route>
          <Route path={"/login"} element={token ? <Home /> : <Login />}></Route>
          <Route
            path={"/products"}
            element={token ? <Home /> : <Login />}
          ></Route>
          <Route
            path={"/products/:id"}
            element={token ? <Product /> : <Login />}
          ></Route>
          <Route path={"/cart"} element={token ? <Cart /> : <Login />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
