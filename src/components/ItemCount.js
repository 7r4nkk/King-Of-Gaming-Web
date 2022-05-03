import { useState } from "react";

export default function Counter() {
const [counter, setCounter] = useState(1);
function aumentar() {
    setCounter(counter + 1);
}
function disminuir() {
    setCounter(counter - 1);
}

return (
    <div>
        <div class="contador">
            <h1 class="cantidad"> Cantidad: {counter}</h1>
            <button class="buy" className={counter > 1 ? "buy" : "disabled"} onClick={disminuir}>-</button>
            <button class="buy" className={counter < 5 ? "buy" : "disabled"} onClick={aumentar}>+</button>
        </div>    
    </div>
);
}
