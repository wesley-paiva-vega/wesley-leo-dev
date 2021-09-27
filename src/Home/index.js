import React from 'react'
import Button from '../Button'
import {Container, ContainerButton} from './styles'
import Header from '../Header'
import { useHistory } from 'react-router'

const Home = () => {

    const history = useHistory();
    const handleClickRouter = (path) => {
        history.push(`/${path}`)
    }

    return (
        <>
            <Container>            
                <Header>
                    Exemple Button Component
                    <ContainerButton>
                        <Button onClick={() => handleClickRouter("home")}>Home</Button>
                        <Button onClick={() => handleClickRouter("about")}>About</Button>
                        <Button onClick={() => handleClickRouter("portifolio")}>Portifólio</Button>
                        <Button onClick={() => handleClickRouter("contato")}>Contato</Button>
                        <Button onClick={() => handleClickRouter("state-react")}>State-React</Button>
                        <Button onClick={() => handleClickRouter("set-time-out")}>SetTimeOut</Button>

                    </ContainerButton>
                </Header>
            </Container>
        </>
    )
}

export default Home