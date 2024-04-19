import ItemCard from "../ItemCard/ItemCard"
import './ItemList.css'


export default function ItemList({ productos }) {

    return (
        <>

            <div className="fondo-cervezas">
                <div className="tituloCentral text-center">
                    <span className="sub-titulo">Catálogo</span>
                    <h3 className="mt-3">Cervezas</h3>
                </div>
            </div>

            <section className="container pbSec">

                <div className="row">
                    {
                        productos.map((prod) => (
                            <ItemCard key={prod.id} item={prod} />
                        ))
                    }
                </div>

            </section>
        </>
    )
}