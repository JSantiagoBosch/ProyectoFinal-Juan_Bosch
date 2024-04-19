import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

export default function ItemDetail({ id, name, img, category, description, price, stock }) {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        
        setQuantityAdded(quantity)

        const item = {
            id, name, price, stock
        }

        addItem(item, quantity)
    }
    
    return (
        <>
            <div className='cervezaDescripContainer'>
            <div className="container cervezaStyle">
                <h3 className="text-center"> {name} </h3>
                <img className='cervezaImg' src={img} alt={name} />
                <p>Categoria: {category}</p>
                <p>{description}</p>
                <p>Stock: {stock}</p>
                <p>Precio: $ {price}</p>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='customBtn'> Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </div>
        </div>
        </>

    )
}