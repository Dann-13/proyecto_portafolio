import Features from "components/home/Features"
import Header from "components/home/Header"
import Layout from "hocs/layouts/layout"
import { useEffect } from "react"
function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
            <Header />
            <Features />
        </Layout>
    )
}
export default Home