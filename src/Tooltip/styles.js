import styled from "styled-components";

export const Tooltip = styled.div`
    background-color: lightcoral;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 40%;
    height: 100px;
    position: absolute;
    text-align: center;
    top: 30px;
    color: lightgoldenrodyellow;
    font-size: 16px;

    &:after {
    content: "";
    position:absolute;
    width:15px;
    height:15px;
    left:50%;
    top: 100%;
    transform:translate(-50%,-50%) rotate(45deg);
    background-color: lightcoral;
    }
`;

export const ContainerTooltip = styled.div`

`