import styled from "styled-components";

export const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.4s linear;
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.3);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.4);
    }
    
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.6s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .btn-outline-dark{
    background:var(--mainOrange) !important;
    color:white;
    border:none
  }
  .card-title{
    font-size:0.9rem;
    word-wrap: break-word;
    min-height:6rem;
    margin:auto;
    height:auto
  }
  .card-text{
    text-align:center;
    margin:auto
  }
  .card-body{
  display:flex;
  flex-direction:column
  }
.btn-show{
  display:flex;
  justify-content:center
}
`;


export const Button = styled.button`
background:var(--mainOrange) !important;
color:white;
border:none;
padding:0.7rem;
border-radius:20px;
margin:auto;
width:100%
`