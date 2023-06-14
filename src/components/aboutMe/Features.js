
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNode, faSquareJs, faHtml5, faCss3, faJava, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

function Features() {
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="text-center mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">Skills</h1>
                    <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">En estos años he adquirido muchas habilidades, aqui te dejo las que mas domino 😲.</p>
                </div>
                <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    <div class="p-2 sm:w-1/2 w-full">
                        <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faSquareJs} size="2x" />
                                </div>
                            </div>

                            <span class="title-font font-medium text-white ml-4">JavaScript</span>
                        </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full">
                        <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                            <div class="flex-shrink-0">
                                <div class='w-12 h-12 flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faHtml5} size='2x' />
                                </div>
                            </div>
                            <span class="title-font font-medium text-white ml-4">Html</span>
                        </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full">
                        <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCss3} size="2x" />
                                </div>
                            </div>
                            <span class="title-font font-medium text-white ml-4">Css ~ Bootstrap ~ Tailwind</span>
                        </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full">
                        <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                            <div class="flex-shrink-0">
                                <div class='w-12 h-12 flex items-center justify-center'>
                                    <FontAwesomeIcon icon={faNode} size='2x' />
                                </div>
                            </div>
                            <span class="title-font font-medium text-white ml-4">Nodejs</span>
                        </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full">
                        <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faJava} size="2x" />
                                </div>
                            </div>
                            <span class="title-font font-medium text-white ml-4">Java</span>
                        </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full">

                        <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                            <div class='w-12 h-12 flex items-center justify-center'>
                                <FontAwesomeIcon icon={faPython} size='2x' />
                            </div>
                            <span class="title-font font-medium text-white ml-4">Python</span>
                        </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full">
                        <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                            <div class='w-12 h-12 flex items-center justify-center'>
                                <FontAwesomeIcon icon={faReact} size='2x' />
                            </div>
                            <span class="title-font font-medium text-white ml-4">React</span>
                        </div>
                    </div>
                    <div class="p-2 sm:w-1/2 w-full">
                        <div class="bg-gray-800 rounded flex p-4 h-full items-center">
                            <div class='w-12 h-12 flex items-center justify-center'>
                                <FontAwesomeIcon icon={faDatabase} size='2x' />
                            </div>
                            <span class="title-font font-medium text-white ml-4">Mysql ~ Postgresql</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Features