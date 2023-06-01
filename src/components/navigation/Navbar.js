import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import logo from 'assets/img/logo.png'
import { useState } from "react"
import { DotLoader } from "react-spinners"

function Navbar() {
    const [loading, setLoading] = useState(true)

    return (

        <header aria-label="Site Header" class="p-5 bg-gray-100 dark:bg-gray-900 w-full py-6 top-0 transition duration-300 ease-in-out z-40 fixed">
            <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex-1 md:flex md:items-center md:gap-12">
                        <a class="block text-teal-600 dark:text-teal-300" href="/">
                            <span class="sr-only">Home</span>
                            <img src={logo} className="" width={80} height={70} alt="logo" />
                        </a>
                    </div>

                    <div class="md:flex md:items-center md:gap-12">
                        <nav aria-label="Site Nav" class="hidden md:block">
                            <ul class="flex items-center gap-6 text-sm">
                                <li>
                                    <NavLink to='/about' className="text-gray-500 transition dark:text-white text-lg border-b-2 border-transparent hover:border-teal-500">
                                        Sobre Mi
                                    </NavLink>

                                </li>

                                <li>
                                    <NavLink
                                        to='/proyects'
                                        className="text-gray-500 dark:text-white text-lg border-b-2 border-transparent hover:border-teal-500 transition-all duration-300"
                                    >
                                        Proyectos
                                    </NavLink>

                                </li>

                                <li>
                                    <NavLink to='/services'
                                        className="text-gray-500 transition dark:text-white text-lg border-b-2 border-transparent hover:border-teal-500"
                                        href="/"
                                    >
                                        Servicios
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/blog'
                                        className="text-gray-500 transition dark:text-white  text-lg border-b-2 border-transparent hover:border-teal-500"
                                        href="/blog"
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact'
                                        className="text-gray-500 transition  dark:text-white text-lg border-b-2 border-transparent hover:border-teal-500"
                                        href="/blog"
                                    >
                                        Contacto
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>

                        <div class="flex items-center gap-4">
                            <div class="sm:flex sm:gap-4">
                                <button variant="outlined" className="flex items-center gap-3 rounded-md bg-teal-400 px-5 py-2.5 font-medium shadow dark:hover:bg-teal-600 text-lg">
                                    Crear Nuevos
                                    <DotLoader loading={loading} size={20} />
                                </button>

                            </div>

                            <div class="block md:hidden">
                                <button
                                    class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Navbar)