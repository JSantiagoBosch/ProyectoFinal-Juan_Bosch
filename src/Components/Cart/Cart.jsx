import './Cart.css'
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
    
    const {
        cart,
        clearCart,
        total,
        totalQuantity,
    } = useContext(CartContext)

    return (
        <>
            <div className='containerCart'>
                {totalQuantity === 0 ? (
                    <div className='sinProducto'>
                        <h1>No hay productos en el carrito</h1>
                        <Link to='/' className="customBtn"> Productos </Link>
                    </div>
                ) : (
                    <>
                        {cart.map(prods => <CartItem key={prods.id} {...prods} />)}
                        <h3 style={{color:'white'}}>Total: ${total}</h3>
                        <button onClick={() => clearCart()} className="customBtn"> Limpiar Carrito </button>
                        <Link to='/checkout' className="customBtn"> Finalizar Compra </Link>
                    </>
                )}
            </div>
        </>
    )
}