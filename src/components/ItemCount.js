
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { Button } from "@mui/material";
import { useState } from "react";

export default function ItemCount({ initial, stock, onAdd }) {
const [value, setValue] = useState(initial)
    const countUp = () => {
    if (value < stock) {
    setValue(value + 1);
    }
};
const countDown = () => {
    if (value > initial) {
    setValue(value - 1);
    }
};

return (
    <>
    <IconButton onClick={countDown} aria-label="delete" color="primary">
        <IndeterminateCheckBoxIcon color="success"></IndeterminateCheckBoxIcon>
    </IconButton>
    Cantidad: {value}
    <IconButton onClick={countUp} aria-label="add" color="primary">
        <AddBoxIcon color="success"></AddBoxIcon>
    </IconButton>
    <Button variant="outlined" color="success" onClick={() => onAdd(value)}>
        Agregar al carrito
    </Button>
    </>
);
}









/* import '../css/ItemCount.css'

import React from 'react'
import { onAdd } from './ItemListContainer1/Products';

const ItemCount = () => {
    return (
    <div>
        <div className="contador">
            <button id='agregar' className="btncount" onClick={onAdd}>AGREGAR AL CARRITO</button>
            <div include="form-input-select()">
                <select id='cantidad' required>
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

export default ItemCount */


