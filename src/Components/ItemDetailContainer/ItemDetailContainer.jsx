import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProducts } from "../../Firebase/Firebase";


export default function ItemDetailContainer() {
    
    const [producto, setProducto] = useState({});
    const { itemId } = useParams();

    //Quiero llamar a la funcion getProducts de Firebase, que es una funcion asincronica
    async function obtenerProducto(id){
        const productos = await getProducts();
        
        //Asigno con setProducts los productos
        setProducto(productos.find(cerveza => cerveza.id === id));
    }

    //La funcion obtenerProductos la llamamos cuando se renderiza por primera vez el componente
    useEffect(() => {
        obtenerProducto(itemId);
    }, [])

    return (
        <main>
                <ItemDetail {...producto} />
        </main>
    )
}