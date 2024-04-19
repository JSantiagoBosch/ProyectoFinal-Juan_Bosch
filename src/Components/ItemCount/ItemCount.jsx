import './ItemCount.css'
import { useState } from "react";

export default function ItemCount({ initial, stock, onAdd }) {
    const [quantity, setQuantity] = useState(initial);

    const incrementar = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrementar = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <>
            <div className="Counter">
                <div className="Controls">
                    <button className='customBtn' onClick={decrementar}> - </button>
                    <h4 className="Number">{quantity}</h4>
                    <button className='customBtn' onClick={incrementar}> + </button>
                </div>
                <div>
                    <button className='customBtn' onClick={() => onAdd(quantity)} disabled={!stock}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </>
    )
}