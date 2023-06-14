import Portafolio from "components/proyects/portafolio"
import Layout from "hocs/layouts/layout"

function Proyectos() {
    return (
        <Layout>
            <div className="pt-28">
                <Portafolio/>
            </div>
        </Layout>
    )
}
export default Proyectos