import React, { useState } from "react";
import { Form } from "../style-components/elements/Login";
import { login } from "./API";
import img from '../img/logo.png'
import Swal from "sweetalert2";

const Login = () => {
  const dataInicial = {
    username: "",
    password: "",
  };
  const [data, setData] = useState(dataInicial);

  const dataLogin = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const LoginForm = (e) => {
    e.preventDefault();
console.log('hi')
    login(data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);

        return (window.location.href = "/products");
      })
      .catch((error) => {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "El nombre o contraseña del ususario son incorrectos",

      })}
      );
  };

  return (
    <div className="mt-20 container">
      <Form onSubmit={LoginForm} className='container mt-20'>
        <h4 className="title">Bienenido a E-COMMERCE</h4>
        <div className="container">
          <img src={img} width='300px'></img>
        </div>
        
        <label>Username: </label>
        <input
          placeholder="Ingrese el nombre del ususario"
          onChange={dataLogin}
          type="text"
          name="username"
          className="input"
        />

        <label>Password: </label>
        <input
          placeholder="Ingrese la contraseña"
          onChange={dataLogin}
          type="password"
          name="password"
          className="input"
        />
        <button className="btn btn-dark btn-black mt-20" > Ingresar</button>
      </Form>
    </div>
  );
};

export default Login;
