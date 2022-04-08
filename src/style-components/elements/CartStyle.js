import styled from 'styled-components'

export const DivProductCart = styled.div`
.div-principal-cart{
  display:flex ;
  align-items:center;
 
}

.btn-black {
  background: transparent;
  text-transform: capitalize;
  font-size: 1rem !important;
  color: var(--mainOrange);
  font-weight:bold;
  border-radius: 0 !important;
  border: 0.1rem solid var(--mainDark) !important;
}

.btn-black:hover {
  background: var(--mainDark) !important;
  color: white !important;
}
  }
  @media (max-width: 992px) {
 
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 576px) {
  }
`;


export const DivEmptyCart = styled.div`
h1{
  font-family:'Spartan', sans-serif !important;
}
`

export const DivColumnCart = styled.div`
margin:30px auto;
width:90%;

`

export const DivTotal = styled.div`
display:flex;
justify-content:center;
button{
  
  font-size:15px;
  padding:10px;
  margin:auto
}

`