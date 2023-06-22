import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faBook, faBasketball, faGamepad } from '@fortawesome/free-solid-svg-icons';
import Relax from 'assets/img/Relax.svg'
function Hobbies() {
    return (
        <section class="text-gray-400 bg-gray-900 body-font">

            <div class="container px-5 py-24 mx-auto flex items-center">
                <div class="flex-shrink-0 w-90 h-90 inline-flex items-center justify-center px-5">
                    <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src={Relax} alt="Decelopment" />

                </div>
                <div class="px-5">
                    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 ">

                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                                <div><FontAwesomeIcon icon={faMusic} size='3x' /></div>
                            </div>
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 class="font-medium title-font text-white mb-1 text-xl">Musica</h2>
                                <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex relative pb-20 sm:items-center md:w-2/3">
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                                <FontAwesomeIcon icon={faBook} size='3x' />
                            </div>
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 class="font-medium title-font text-white mb-1 text-xl">The Catalyzer</h2>
                                <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex relative pb-20 sm:items-center md:w-2/3 ">
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                                <FontAwesomeIcon icon={faBasketball} size='3x' />
                            </div>
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 class="font-medium title-font text-white mb-1 text-xl">The 400 Blows</h2>
                                <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex relative pb-10 sm:items-center md:w-2/3">
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-indigo-400 rounded-full inline-flex items-center justify-center">
                                <FontAwesomeIcon icon={faGamepad} size='3x' />
                            </div>
                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 class="font-medium title-font text-white mb-1 text-xl">Neptune</h2>
                                <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hobbies