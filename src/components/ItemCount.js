import '../css/ItemCount.css'
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
            <div include="form-input-select()">
                <select required>
    
                    <option value="" hidden>Cantidad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>    
    </div>
);
}
