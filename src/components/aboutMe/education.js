import Aunar from 'assets/img/Aunar.png'
import Mision from 'assets/img/logoMision.png'
import Alura from 'assets/img/aluraoracle.png'

function Education() {
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Educacion</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">He hecho parte de varios  programas que me han ayudado a aprender y a sobre todo obtener experiencia en el desarrollo, acontinuacion
                    te dejo mis estudios actuales y terminados</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <div class="relative w-full flex items-center justify-center">
                                <img alt="gallery" class="absolute inset-0 h-full object-contain object-center w-40 mx-auto" src={Aunar} />
                                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 transition-opacity duration-500 hover:opacity-100">
                                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">Universidad Autonoma de Nariño</h2>
                                    <h1 class="title-font text-lg font-medium text-white mb-3">Ingenieria Informatica</h1>
                                    <p class="leading-relaxed">Actualmente estudiando Ingenieria informatica en 8 semestre</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <div class="relative w-full flex items-center justify-center bg-gray-900">
                                <img alt="gallery" class="absolute inset-0 h-full object-contain object-center w-40 mx-auto" src={Mision} />
                                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 transition-opacity duration-500 hover:opacity-100">
                                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">Mision Tic</h2>
                                    <h1 class="title-font text-lg font-medium text-white mb-3">Universidad Autonoma de Bucaramanga</h1>
                                    <p class="leading-relaxed">Fui parte del programa mision tic</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <div class="relative w-full flex items-center justify-center">
                                <img alt="gallery" class="absolute inset-0 h-full object-contain object-center w-90 mx-auto" src={Alura} />
                                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 transition-opacity duration-500 hover:opacity-100">
                                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">Alura Latam</h2>
                                    <h1 class="title-font text-lg font-medium text-white mb-3">Oracle Next Education</h1>
                                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}
export default Education;