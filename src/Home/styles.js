import styled from 'styled-components'
import Tooltip from 'rsuite/Tooltip';


export const Container = styled.div`
    width: 100%;
    margin-top: 50px;
    display: flex;
    padding: 30px;
    justify-content: space-around;
`

export const ContainerButton = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    max-width: 680px;
    min-width: 350px;
    margin-left: 30px;
`

export const ToolTips = styled(Tooltip)`
    background-color:red;
    width: 100px;
`

export const ContainerTooltip = styled.div`
    background-color: lightblue;
    padding: 10px;
    width: 50%;
    height: 300px;
    margin: 200px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    span {
        color: lightcoral;
        margin-top: 20px;
    }
`