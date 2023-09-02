import { motion } from "framer-motion"
import Headers from "../Headers"
import WhatsApp from "../WhatsApp"
import Footer from "../Footer"

export function Internet() {
    return (
        <div>
            <Headers />
            <div className="w-full h-full m-auto">
                <div className="flex top-4 justify-center py-2">
                    <img src="../banners/secciones/InternetDedicado.png" className="h-[140px] object-cover sm:h-full bg-center" />
                </div>
                <div className=" px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-12 pb-8 sm:pt-12 sm:pb-12">
                        <div>
                            <div>
                                <p className="mt-6 lg:mt-16 font-mont text-lg leading-8 text-gray-600 sm:text-center">
                                    El servicio de internet fue especialmente diseñado para ofrecer conexión a internet de alta calidad para el segmento de ISP y corporativo. Se trata de una conexión dedicada, permanente y simétrica de excelente disponibilidad.
                                </p>
                            </div>
                            <div className="py-16 grid lg:grid-cols-2 grid-cols-1 gap-6">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ onde: true, amount: 0 }}
                                    transition={{ delay: 0, duration: 1 }}
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    className="p-12 grid border-2 flex-shrink-0 group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                    <div className="transition-transform duration-500 group-hover:scale-105">
                                        <div className="flex flex-col items-center justify-items-center pb-12 ">
                                            <img src="./Internet-icono1.png" alt="" className="w-24 h-24" />
                                        </div>
                                        <p className="font-mont">
                                            Redtecsi es provisto en modalidad FTTO (fiber to the office) utilizando tecnología de avanzada en redes de acceso de fibra óptica, como lo es active ethernet.
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ onde: true, amount: 0 }}
                                    transition={{ delay: 0, duration: 1 }}
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                    className="p-8 grid border-2 flex-shrink-0 group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                    <div className="transition-transform duration-500 group-hover:scale-105">
                                        <div className="flex flex-col items-center justify-items-center pb-12">
                                            <img src="./Internet-icono2.png" alt="" className="w-24 h-24" />
                                        </div>
                                        <p className="font-mont">
                                            Administre el ancho de banda de su ISP o Corporación de manera más efectiva, para mejorar sus comunicaciones a Internet y Redes de datos.
                                        </p>
                                    </div>
                                </motion.div>
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