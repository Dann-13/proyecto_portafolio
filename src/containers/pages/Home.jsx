import Header from "components/home/Header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

function Home() {
    return (
        <Layout>
            <Navbar/>
            <div className="pt-25">
                <Header />
            </div>
            
            <Footer/>
        </Layout>
    )
}
export default Home