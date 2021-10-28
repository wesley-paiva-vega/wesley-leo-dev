import styled from 'styled-components'
import Slider from 'react-slick'

const MySlider = styled(Slider)`
    width: 100px;
    background-color: red;
`

const Container = styled.div`
    margin: 0 auto;
    height: 200px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        margin: 0 auto;
        width: 300px;
    }
`

export default {
    Container,
    MySlider,
}