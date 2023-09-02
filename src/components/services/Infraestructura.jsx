import { motion } from "framer-motion"
import Headers from "../Headers"
import WhatsApp from "../WhatsApp"
import Footer from "../Footer"

export function Infraestructura() {
    return (
        <div>
            <Headers />
            <div className="w-full h-full m-auto">
                <div className="flex top-4 justify-center py-2">
                    <img src="../banners/secciones/Infraestructura.png" className="h-[140px] object-cover sm:h-full bg-center" />
                </div>
                <div className=" px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-12 pb-8 sm:pt-12 sm:pb-12">
                        <div>
                            <div>
                                <p className="mt-6 lg:mt-16 font-mont text-lg leading-8 text-gray-600 text-center">
                                    En Redtec ofrecemos todos los elementos necesarios para operar y gestionar entornos de TI empresariales. Ayudamos a las empresas a adaptarse rápidamente a los cambios y aprovechar de manera eficiente los recursos informáticos.
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
                                            <img src="./Cloud.png" alt="" className="w-24 h-24" />
                                            <h3 className="text-xl font-mont font-semibold pt-6 text-cel">Cloud vs On premise</h3>
                                        </div>
                                        <p className="font-mont text-center text-gray-500">
                                            Migraciones simples y rápidamente cargas de trabajo basadas en VM como grandes bases de datos, aplicaciones empresariales y procesamiento por lotes grandes hacia y desde la nube.
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
                                    <div className="transition-transform duration-500 group-hover:scale-105 pb-24">
                                        <div className="flex flex-col items-center justify-items-center pb-12">
                                            <img src="./Privacidad.png" alt="" className="w-24 h-24" />
                                            <h3 className="text-xl font-mont font-semibold pt-6 text-cel">Evite pérdida de datos</h3>
                                        </div>
                                        <p className="font-mont text-center text-gray-500">
                                            Contamos con soluciones de recuperación de información ante desastres.
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