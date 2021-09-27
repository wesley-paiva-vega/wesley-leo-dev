import React from 'react'
import {Container} from './styles'
import Header from '../Header'
import { useHistory } from 'react-router'
import Button from '../Button'


const About = () => {

    const history = useHistory();
    const handleClickRouter = (path) => {
        history.push(`/${path}`)
    }

    return (
        <>
            <Container>
                <Header>Welcome To my About Page
                <Button onClick={() => handleClickRouter("")}>Go to my Home Page</Button>
                </Header>
            </Container>
        </>
    )
}

export default About