import { useContext } from 'react'
import cart from './assets/cart.svg'
import './CartWidget.css'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

export default function CartWidget() {
    const { totalQuantity } = useContext(CartContext);

    return (
        <div className='cartContainer'>
            <Link to='/cart' className='estiloCart'>
                <img src={cart} alt="cart-widget" />
                <p>{totalQuantity}</p>
            </Link>
        </div>
    )
}