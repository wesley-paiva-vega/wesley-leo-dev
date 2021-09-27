import { useEffect, useState } from "react"

export default function SetTimeOutExemple() {
    
    const [count, setCount] = useState(0)

    /* setTimeOut recebe dois parâmetros o primeiro indica qual função será
        chamada e o segundo é o tem em milissegundos que isso ocorrerá.
    */
    setTimeout(() => {
        setCount(count + 1)       
    },1000)

    useEffect(() => {
        console.log(count)      
    },[count])

    return (
        <div>
            <h1>Testando a Função setTimeOut</h1>
            <p>{count}</p>
        </div>
    )
}