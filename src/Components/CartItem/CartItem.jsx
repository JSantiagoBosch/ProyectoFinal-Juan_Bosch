import './CartItem.css'
import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const CartItem = ({ id, name, price, quantity, stock }) => {
    const { removeItem, incrementar, decrementar } = useContext(CartContext);

    const handleInc = () => {
        if (quantity < stock) {
            incrementar(id, 1);
        }
    }

    const handleDec = () => {
        if (quantity > 1){
            decrementar(id, 1);
        } else {
            removeItem(id)
        }
    }

    const handleRemove = () => {
        // Llama a la función removeItem del contexto del carrito para eliminar el artículo por su id
        removeItem(id);
    };

    return (
        <div className="cart-item">

            <div className="item-details">
                <span className="item">{name}</span>
                <span className="item">${price}</span>
                <span className="item">
                    Cantidad: {quantity}
                    <button className='btnDec' onClick={handleDec}> - </button>
                    <button className='btnInc' onClick={handleInc}> + </button>
                </span>
                <button className="remove-button" onClick={handleRemove}>Eliminar</button>
            </div>
        </div>
    );
};

export default CartItem;