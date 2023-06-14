import Features from "components/aboutMe/Features"
import Header from "components/aboutMe/Header"
import Hobbies from "components/aboutMe/Hobbies"
import Layout from "hocs/layouts/layout"

function SobreMi() {
    return (
        <Layout>
            <Header/>
            <Features/>
            <Hobbies/>
        </Layout>
    )
}
export default SobreMi