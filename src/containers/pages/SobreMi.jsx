import Features from "components/aboutMe/Features"
import Header from "components/aboutMe/Header"
import Hobbies from "components/aboutMe/Hobbies"
import Education from "components/aboutMe/education"
import Layout from "hocs/layouts/layout"

function SobreMi() {
    return (
        <Layout>
            <Header/>
            <Features/>
            <Hobbies/>
            <Education/>
        </Layout>
    )
}
export default SobreMi