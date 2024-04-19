import './Checkout.css'
import { useState, useContext, useEffect } from "react";
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { CartContext } from '../../Context/CartContext';
import { sendOrder } from '../../Firebase/Firebase';
import Swal from 'sweetalert2'


const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, total } = useContext(CartContext);

    const handleConfirm = async ({ name, phone, email }) => {
        setLoading(true);

        const newOrder = {
            buyer: {
                name: name,
                email: email,
                phone: phone,
            },
            items: cart,
            date: new Date(),
            total: total,
        };

        try {
            const orderId = await sendOrder(newOrder);
            if (orderId) {
                setOrderId(orderId);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Mostrar SweetAlert mientras se carga la orden
    useEffect(() => {
        if (loading) {
            Swal.fire({
                title: 'Se está generando su orden...',
                showConfirmButton: false,
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading();
                }
            });
        } else {
            Swal.close(); // Cerrar SweetAlert cuando la carga se completa
        }
    }, [loading]);

    // Mostrar SweetAlert con el ID de la orden cuando esté disponible
    useEffect(() => {
        if (orderId) {
            Swal.fire({
                title: `El ID de su orden es: ${orderId}`,
                icon: 'success'
            });
        }
    }, [orderId]);

    return(
        <div className="checkoutContainer">

            <>
                <h1>Confirmar Compra</h1>
                <h3>Datos del usuario</h3>
                <CheckoutForm onConfirm={handleConfirm} />
            </>

            {
                orderId ? (
                    <h1 style={{textAlign: 'center'}}>ID: {orderId}</h1>
                ) : null
            }
        </div>
    );
};

export default Checkout;
