import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Error404 from './containers/errors/Error404'
import Home from './containers/pages/Home'
import SobreMi from 'containers/pages/SobreMi';
import Proyectos from 'containers/pages/Proyectos';
import Servicios from 'containers/pages/Servicios';
import Blog from 'containers/pages/Blog';
import { AnimatePresence } from 'framer-motion';
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='*' element={<Error404 />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<SobreMi />} />
        <Route path='/proyects' element={<Proyectos />} />
        <Route path='/services' element={<Servicios />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </AnimatePresence>
  )
}
export default AnimatedRoutes