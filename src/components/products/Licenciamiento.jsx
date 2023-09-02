import { motion } from "framer-motion"
import Headers from "../Headers"
import WhatsApp from "../WhatsApp"
import Footer from "../Footer"

export function Licenciamiento() {
    return (
        <div>
            <Headers />
            <div className="w-full h-full m-auto">
                <div className="flex top-4 justify-center py-2">
                    <img src="../banners/secciones/Licenciamiento.png" className="h-[135px] object-cover sm:h-full bg-center" />
                </div>
                <div className=" px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-12 pb-8 sm:pt-12 sm:pb-12">
                        <div>
                            <div>                               
                                <p className="mt-6 lg:mt-16 font-mont text-lg leading-8 text-gray-600 sm:text-center">
                                    Asesorarte sobre la mejor herramienta que optimice tu fuerza de trabajo es lo que mejor sabemos hacer. Estos son algunos de nuestros principales aliados tecnológicos:
                                </p>
                            </div>
                            <div className="bg-white">
                    <div className="mx-auto lg:mx-12 max-w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <div className="lg:grid lg:grid-cols-1 lg:items-center lg:gap-8">
                        
                        <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-2 lg:mt-0 lg:grid-cols-2">
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                            className="max-h-28"
                            src="./MSFT.png"
                            alt="Workcation"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img className="max-h-28" src="./Veeam.png" alt="Mirage" />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img className="max-h-28" src="./vmware.png" alt="Tuple" />
                        </div>
                        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                            <img
                            className="max-h-28"
                            src="./Check.png"
                            alt="Laravel"
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
            </div >
            <WhatsApp />
            <Footer />
        </div>
    )
}