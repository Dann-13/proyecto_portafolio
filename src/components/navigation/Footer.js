import { connect } from "react-redux"
import { Link } from "react-router-dom"
import logo from 'assets/img/logo.png'

function Footer() {
    return (
        <footer aria-label="Site Footer" class="bg-gray-100 dark:bg-gray-900">
            <div
                class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
            >
                <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                    <a
                        class="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600 sm:p-3 lg:p-4"
                        href="#MainContent"
                    >
                        <span class="sr-only">Back to top</span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </div>

                <div class="lg:flex lg:items-end lg:justify-between">
                    <div>
                        <div class="flex justify-center items-center text-teal-600 dark:text-teal-300">
                            <img src={logo} class="" width={110} height={100} alt="logo" />
                        </div>
                        <p
                            class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 lg:text-left"
                        >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
                            consequuntur amet culpa cum itaque neque.
                        </p>
                    </div>

                    <nav aria-label="Footer Nav" class="mt-12 lg:mt-0">
                        <ul
                            class="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
                        >
                            <li>
                                <Link to='/about'
                                    class="text-gray-500 transition dark:text-white text-lg border-b-2 border-transparent hover:border-teal-500"
                                    href="/"
                                >
                                    Sobre Mi
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to='/proyects'
                                    class="text-gray-500 dark:text-white text-lg border-b-2 border-transparent hover:border-teal-500 transition-all duration-300"
                                >
                                    Proyectos
                                </Link>
                            </li>

                            <li>
                                <Link to='/services'
                                    class="text-gray-500 transition dark:text-white text-lg border-b-2 border-transparent hover:border-teal-500"
                                    href="/"
                                >
                                    Servicios
                                </Link>
                            </li>

                            <li>
                                <Link to='/blog'
                                    class="text-gray-500 transition dark:text-white  text-lg border-b-2 border-transparent hover:border-teal-500"
                                    href="/blog"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact'
                                    class="text-gray-500 transition  dark:text-white text-lg border-b-2 border-transparent hover:border-teal-500"
                                    href="/blog"
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <p
                    class="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 lg:text-right"
                >
                    Copyright &copy; 2023. DannDev.
                </p>
            </div>
        </footer>
    )
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Footer)