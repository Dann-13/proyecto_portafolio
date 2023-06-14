import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faBook, faBasketball, faGamepad } from '@fortawesome/free-solid-svg-icons';
function Hobbies() {
    return (
        < section class="text-gray-400 bg-gray-900 body-font" >
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Hobbies</h1>
                    
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Conoceme un poco mas!, aqui estan algunas cosas que me gustan!
                        </p>
                </div>
                <div class="flex flex-wrap -m-4 text-center">
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                            <div class="py-5"><FontAwesomeIcon icon={faMusic} size='3x' /></div>
                            <h2 class="title-font font-medium text-3xl text-white">Zoe</h2>
                            <p class="leading-relaxed">Musica</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                            <div class="py-5">
                                <FontAwesomeIcon icon={faBook} size='3x' />
                            </div>
                            <h2 class="title-font font-medium text-3xl text-white">1.3K</h2>
                            <p class="leading-relaxed">Misterio</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                            <div class="py-5">
                                <FontAwesomeIcon icon={faBasketball} size='3x' />
                            </div>
                            <h2 class="title-font font-medium text-3xl text-white">Rockets</h2>
                            <p class="leading-relaxed">Baloncesto</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                            <div class="py-5">
                                <FontAwesomeIcon icon={faGamepad} size='3x' />
                            </div>
                            <h2 class="title-font font-medium text-3xl text-white">GTA</h2>
                            <p class="leading-relaxed">Videojuegos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Hobbies