import Development from 'assets/img/Development.svg'
import Blob2 from 'assets/img/blobShape2.png'
function Header() {
    return (
        <section class="py-20 overflow-hidden dark:bg-gray-900 md:pt-20 sm:pt-20 2xl:pt-20">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div class="grid items-center grid-cols-1 md:grid-cols-2">

                    <div>
                        <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Hey 👋 Soy 
                            <br class="block sm:hidden" /> Daniel
                        </h2>
                        <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-400 md:mt-8">
                            Hola!, espero que estes bien!, en esta seccion encontraras mi pequeño espacio en donde conoceras
                            un poco de mi y de mis proyectos  &gt;&lt;
                        </p>

                    </div>

                    <div class="relative py-10">
                        <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src={Blob2} alt="Blob2" />

                        <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={Development} alt="Decelopment" />
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Header