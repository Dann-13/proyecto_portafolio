import Features from "components/home/Features"
import Header from "components/home/Header"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/layout"

function Home() {
    return (
        <Layout>
            <Navbar/>
            <div>
                <Header />
            </div>
            <Features/>
            <Footer/>
        </Layout>
    )
}
export default Home