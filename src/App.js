import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";

import Login from "./components/Login";
// import {Provider} from 'react-redux'
// import store from './components/redux/store.js'
function App() {
  const token = localStorage.getItem("token");
  return (
    <div className="container">
      <BrowserRouter>
        {/* <Provider store={store}> */}

        <Navbar />
        <Routes>
          <Route path={"/"} element={token ? <Home /> : <Login />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route
            path={"/products"}
            element={token ? <Products /> : <Login />}
          ></Route>
          <Route
            path={"/products/:id"}
            element={token ? <Product /> : <Login />}
          ></Route>
        </Routes>
        {/* </Provider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
