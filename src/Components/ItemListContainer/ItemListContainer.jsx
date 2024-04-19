import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { getProducts, filterByCategory } from '../../Firebase/Firebase';
import ClipLoader from "react-spinners/ClipLoader";
import './ItemListContainer.css'


export default function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        try {
            const asyncFunc = categoryId ? filterByCategory : getProducts;
            const response = await asyncFunc(categoryId);
            setProductos(response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); // Indicar que se completó la carga (ya sea con éxito o error)
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchProducts(); // Llamar a la función para cargar los productos

    }, [categoryId]);

    return (
        <>
                {
                    loading ?
                    <div className='loaderContainer'>
                        <ClipLoader  color='#a1110c' loading={loading}
                        size={150} aria-label="Loading Spinner" data-testid="loader" />
                    </div>
                        :
                        <main>
                            <ItemList productos={productos} />
                        </main>
                }
        </>
    )
}