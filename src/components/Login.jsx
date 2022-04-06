import React, { useState } from "react";
import { Form } from "../style-components/elements/Login";
import { login } from "./API";

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
    login(data)
      .then((token) => {
        localStorage.setItem("token", token);

        return (window.location.href = "/products");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Form onSubmit={LoginForm}>
        <label>Nombre: </label>
        <input
          placeholder="Ingrese el nombre del ususario"
          onChange={dataLogin}
          type="text"
          name="username"
        />

        <label>Password: </label>
        <input
          placeholder="Ingrese la contraseña"
          onChange={dataLogin}
          type="password"
          name="password"
        />
        <button>Ingresar</button>
      </Form>
    </>
  );
};

export default Login;
