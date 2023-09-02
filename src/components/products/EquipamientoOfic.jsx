import { motion } from "framer-motion"
import Headers from "../Headers"
import WhatsApp from "../WhatsApp"
import Footer from "../Footer"

export function EquipamientoOfic() {
    return (
        <div>
            <Headers />
            <div className="w-full h-full m-auto">
                <div className="flex top-4 justify-center py-2">
                    <img src="../banners/secciones/Equipamientodeoficina.png" className="h-[140px] object-cover sm:h-full bg-center" />
                </div>
                <div className=" px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl pt-12 pb-8 sm:pt-12 sm:pb-12">
                        <div>                            
                            <div className="bg-white">
                                <div className="mx-auto lg:mx-0 max-w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">

                                    <div className="lg:grid lg:grid-cols-1 lg:items-center lg:gap-8">
                                        <div>
                                        <h3 className="text-3xl font-mont font-semibold text-center text-cel2 p-4">PC de escritorio - Notebook</h3>
                                        <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">
                                            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                                                <img
                                                    className="max-h-28"
                                                    src="./hp-logo.png"
                                                    alt="Hp"
                                                />
                                            </div>
                                            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                                                <img className="max-h-28" src="./Asus-logo.png" alt="Mirage" />
                                            </div>
                                            <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                                                <img className="max-h-28" src="./lenovo-logo.png" alt="Lenovo" />
                                            </div>
                                        </div>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-mont font-semibold text-center text-cel2 p-4 pt-12 lg:pt-0">Impresoras</h3>
                                            <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">
                                                <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                                                    <img
                                                        className="max-h-28"
                                                        src="./hp-logo.png"
                                                        alt="Workcation"
                                                    />
                                                </div>
                                                <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                                                    <img className="max-h-28" src="./brother-logo.png" alt="Mirage" />
                                                </div>
                                                <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                                                    <img className="max-h-28" src="./Xerox-logo.png" alt="Tuple" />
                                                </div>

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