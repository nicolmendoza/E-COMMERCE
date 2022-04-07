import styled, { css } from "styled-components";

export const Form = styled.form`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  height: 60%;
  border-radius: 1rem;
  padding: 5%;
  width: 50%;
  border: 1px solid black;
  background: var(--mainOrange);
  margin-top: 50px;
  .input {
    margin: 5px;
  }
  .btn-dark{
      margin-top:5px;
  }
  .title{
      font-size:1.3rem;
      color:var(--mainWhite)
  }
  @media (max-width: 992px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 70%;
    .title{
        font-size:1rem;
    }
  }
  @media (max-width: 576px) {
    width: 70%;
    font-size: 0.8rem;
    .title{
        font-size:0.8rem;
    }
  }
`;
