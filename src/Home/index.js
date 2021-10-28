import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Button from '../Button'
import { Container, ContainerButton, ToolTips, ContainerTooltip } from './styles'
import Header from '../Header'
import { Modal } from '../Modal'
import { Tooltip } from '../Tooltip'
import Whisper from 'rsuite/Whisper';

const Home = () => {

    const history = useHistory();

    const [show, setShow] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);


    const handleClickRouter = (path) => {
        history.push(`/${path}`)
    }

    const handleShowModal = () => {
        setShow(!show)
    }

    const handleShowTooltip = () => {
        setShowTooltip(!showTooltip)
    }
    
    useEffect(() => {

    },[show]);

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
                        <Button onClick={handleShowModal}>Abrir Modal</Button>
                        <Button onClick={() => handleClickRouter("react-slider")}>React Slider</Button>
                        

                    </ContainerButton>
                </Header>
                <Modal onClose={handleShowModal} open={show}> Um modal qualquer</Modal>
                <ContainerTooltip>
                    <Tooltip open={showTooltip}></Tooltip>
                    <span onMouseLeave={() => setShowTooltip(false)} onMouseOver={handleShowTooltip}>Texto que mostra o tooltip</span>
                </ContainerTooltip>
            </Container>
        </>
    )
}

export default Home