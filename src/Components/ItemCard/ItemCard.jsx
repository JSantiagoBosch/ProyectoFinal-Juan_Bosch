import { useNavigate } from "react-router-dom";
import './ItemCard.css'

export default function ItemCard({ item }) {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/detail/${id}`)
    }

    return (

        <div className="col-xl-3 col-md-6 col-sm-12 mb-5" key={item.id}>
            <div className="tarjeta">
                <img src={item.img} alt={item.name} />
                <h3 className="text-center"> {item.name} </h3>
                <p>Precio: $ {item.price}</p>
                <button className="btn" onClick={() => handleClick(item.id)}> Ver Detalles </button>
            </div>
        </div>
    )
}

