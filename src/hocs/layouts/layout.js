import { connect } from "react-redux";
import Navbar from 'components/navigation/Navbar'
import Footer from 'components/navigation/Footer'
import { motion } from 'framer-motion'
function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div class="dark:bg-gray-900">
                <motion.div
                    initial={{ opacity: 0, transition: { duration: 0.5 } }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    style={{ position: 'relative'}}
                >

                    {children}

                </motion.div>
            </div>
            <Footer />
        </div>
    )
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Layout);