import styled from 'styled-components'

export const StyledButton = styled.button`
    width: 150px;
    height: 70px;
    border: none;
    background-color: #046e8f;
    transition: ease-in-out 1s;
    color: #FFF;
    margin: 0 5px;

    &:hover {
        cursor: pointer;
        filter: brightness(0.8);
    }
`
export default {
    StyledButton,
};