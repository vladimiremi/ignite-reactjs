import { useState } from "react";

//imutabilidade -> não pode ser alterado o valor. Ela vai receber um novo valor.

//usuarios = ['mimi', 'Samira'];
//usuarios.push('side'); -> errado

//novousuário = [...usuarios, 'side]; -> Correto


export default function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}