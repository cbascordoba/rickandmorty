import Header from '../templates/Header';
import Home from '../pages/Home';
import character from '../pages/Character';
import Error404 from '../pages/Error404';
import Character from '../pages/Character';

// vamos a crear un objeto para manejar las rutas

const routes= {
    '/': Home,
    '/:id': Character,
    '/contact' : 'Contact',
}

// vamos a mostrar los elementos segun la logica que vamos a establecer

const router = async () => {
    // vamos a establecer los templates hacia un elemento del dom, public /index.html 
    //generamos dos elementos, vamos a estructurar estos elementos dentro de nuestro router
    //hacmos render hacia estos elementos 
    const header= null || document.getElementById('header');
    const content = null || document.getElementById('content');

    //vamos a empujar el header a mi aplicacion
    header.innerHTML = await Header();
};

export default router;