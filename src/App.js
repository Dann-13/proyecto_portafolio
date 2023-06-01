import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error404 from 'containers/errors/Error404'
import Home from '../src/containers/pages/Home'
import store from 'store';
import { Provider } from 'react-redux'
import SobreMi from 'containers/pages/SobreMi';
import Proyectos from 'containers/pages/Proyectos';
import Servicios from 'containers/pages/Servicios';
import Blog from 'containers/pages/Blog';
import Contacto from 'containers/pages/Contacto';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='*' element={<Error404 />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<SobreMi />} />
          <Route path='/proyects' element={<Proyectos />} />
          <Route path='/services' element={<Servicios />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contacto />} />
          

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
