// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
    addDoc
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG);

// Por las dudas dejo las configuraciones de firebase

//     "apiKey":"AIzaSyBoclwDrZUz1ImacBZELqDhQ_zvnTWMplU",
//     "authDomain":"cerveceria-jubilus.firebaseapp.com",
//     "projectId":"cerveceria-jubilus",
//     "storageBucket":"cerveceria-jubilus.appspot.com",
//     "messagingSenderId":"1058426617925",
//     "appId":"1:1058426617925:web:9d3bcb8c5241cffef5e32c"

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); //Base de Datos

//Consulta a la Base de Datos
//Obtener todos los productos (Asincronico)
export async function getProducts() {
    //Llamamos a getDocs, y le pasamos la coleccion a la que queremos acceder
    const response = await getDocs(collection(db, 'products'));

    //response es una coleccion y es iterable, entonces guardo todos los productos en un array
    const listProducts = [];

    /*
    Si quiero obtener el ID
    tengo que crear un objeto y pasarl le id, y a ese objeto le paso la data()
    */
    response.forEach(doc => listProducts.push({ id: doc.id, ...doc.data() }/*Accedo a la data de ese doc*/))
    //En cada documento me llega el id, y le agrego la data()

    //Retornamos el array de los productos 'listProducts'
    return listProducts;
}


export async function filterByCategory(categoria) {
    // Como no necesitamos todos los elementos de la coleccion creamos una query especifica
    const q = query(collection(db, 'products'), where('category', '==', categoria))
    /*
    En la linea anterior estamos pidiendo los items de la coleccion productos, donde la propiedad category sea igual a la categoria que resivo por parametro
    */

    //Para ejecutar la query
    const querySnapshot = await getDocs(q);

    const listFiltro = [];
    querySnapshot.forEach(doc => listFiltro.push({ id: doc.id, ...doc.data() }))

    return listFiltro;
}


// Enviar una orden de pedido a nuestro coleccion 'orders'
export async function sendOrder(order) {

    const ordersCollection = collection(db, 'orders');

    // Para ver que devuelve db, la recibimos en docRef
    const docRef = await addDoc(ordersCollection, order)

    return docRef.id
}