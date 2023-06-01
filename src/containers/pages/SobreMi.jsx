import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

function SobreMi() {
    return (
        <Layout>
            <Navbar/>
            <div className="pt-28">Esta es mi ruta home Principal</div>
            
            <Footer/>
        </Layout>
    )
}
export default SobreMi