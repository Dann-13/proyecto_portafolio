// Importación de librerías y archivos necesarios
import { createStore, applyMiddleware } from 'redux';  // Importa la función 'createStore' y 'applyMiddleware' de la librería 'redux'
import thunk from 'redux-thunk';  // Importa el middleware 'redux-thunk'
import RootReducer from './redux/reducers';  // Importa el reducer raíz del directorio 'redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';  // Importa la función 'composeWithDevTools' de la extensión 'redux-devtools'

// Definición del estado inicial y del middleware
const initialState = {};  // Define un objeto vacío como estado inicial
const middleware = [thunk];  // Crea un array que contiene el middleware 'redux-thunk'

// Creación de la tienda (store) de Redux
const store = createStore(
    RootReducer,  // Pasa el reducer raíz al createStore como primer argumento
    initialState,  // Pasa el estado inicial como segundo argumento
    composeWithDevTools(applyMiddleware(...middleware))  // Utiliza 'composeWithDevTools' para combinar las extensiones de Redux DevTools y el middleware 'redux-thunk'
);

export default store;  // Exporta la tienda (store) creada para ser utilizada en otros archivos de la aplicación
