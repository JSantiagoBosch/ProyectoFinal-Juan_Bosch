import './CheckoutForm.css'
import { useState, useContext } from "react";
import Swal from 'sweetalert2'
import { CartContext } from '../../Context/CartContext';

const CheckoutForm = ({ onConfirm}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const { cart, clearCart } = useContext(CartContext);


    const handleConfirm = (e) => {
        e.preventDefault()

        if (cart.length === 0 || name.trim() === '' || phone.trim() === '' || email.trim() === '') {
            let errorMessage = 'Por favor completar todos los campos';
            if (cart.length === 0) {
                errorMessage = 'No hay productos en el carrito';
            }
                Swal.fire({
                    icon: 'error',
                    title: errorMessage,
                });
            return;
        }

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
        clearCart();
    }

    return (
        <>
            <div className='formContainer'>
                <form onSubmit={handleConfirm}>
                    <label>
                        Nombre
                        <input
                            type="text"
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                    </label>
                    <label>
                        Telefono
                        <input
                            type="number"
                            value={phone}
                            onChange={({ target }) => setPhone(target.value)}
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                    </label>
                    <div>
                        <button type="submit">
                            Crear Orden
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CheckoutForm;