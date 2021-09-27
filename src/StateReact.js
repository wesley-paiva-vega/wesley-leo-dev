import { useState } from 'react'
import Header from './Header'
import Button from './Button'
export default function StateReact() {

    const [state, setState] = useState('Um botão qualquer')

    return (
        <>
            <Header>
                <div>
                    <h3>Alterar estado do Button</h3>
                </div>
                <Button onClick={() => {setState("Você alterou o estado deste botão que no caso é um texto")}}>{state}</Button>
            </Header>
        </>
    )
}