import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

function Servicios() {
    return (
        <Layout>
            <Navbar/>
            <div className="pt-28">Principal Servicios</div>
            
            <Footer/>
        </Layout>
    )
}
export default Servicios