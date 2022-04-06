import styled, {css} from 'styled-components';

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    height: 60%;
    border-radius: 1rem;

    padding: 0.625rem 2%;
    width: ${props => props.width || '30rem'};
    ${props => props.padding==='true' && css `
        padding:  2rem 4%;
    `}
`