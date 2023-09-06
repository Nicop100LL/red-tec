import Footer from "../Footer";
import Headers from "../Headers";
import WhatsApp from "../WhatsApp";
import { motion } from "framer-motion";

export function ServiciosProfesionales() {
    return (
        <div>
            <Headers />
            <div className="w-full h-full m-auto">
                <div className="flex top-4 justify-center py-2">
                    <img src="../banners/secciones/ServiciosProfesionales.png" className="h-[135px] object-cover sm:h-full bg-center" />
                </div>
                <div className=" px-6 lg:px-8">
                    <div className="mx-auto pt-12 pb-8 sm:pt-12 sm:pb-12">
                        <div>
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            </div>
                            <div>                                
                                <p className="mt-6 text-lg font-mont leading-8 text-gray-600 sm:text-center lg:px-24">
                                Brindamos servicio de asesoramiento y consultoría para todo tipo de empresas. Nuestro principal objetivo es mejorar el rendimiento de su negocio incorporando nuevas tecnologías que agilicen el crecimiento. 
Las propuestas de REDTECSI incluyen mejora en la eficiencia de los sistemas de la empresa, baja de costos y aumento de la productividad individual y colectiva de tus colaboradores internos y externos. 
Tenemos a tu disposición un equipo de profesionales altamente capacitados para alcanzar las expectativas y generar ese cambio que tanto necesitas realizando cualquier tipo de proyectos que impliquen planificación y análisis para la realización de migraciones e implementaciones. 
REDTECSI contempla además un área dedicada al soporte 7x24 en remoto y on site.
                                </p>
                                <div className="py-16 grid lg:px-8 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
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
                                        <div className="transition-transform duration-500 group-hover:scale-105 lg:px-12">
                                            <div className="flex flex-col items-center justify-items-center">
                                                <img src="./Experiencia.png" alt="" className="w-24 h-24" />
                                                <h3 className="text-xl font-mont font-semibold pt-6 text-center text-cel">EXPERIENCIA</h3>
                                            </div>
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
                                            <div className="flex flex-col items-center justify-items-center">
                                                <img src="./Optimizacion.png" alt="" className="w-24 h-24" />
                                                <h3 className="text-xl font-mont font-semibold pt-6 text-cel">OPTIMIZACIÓN</h3>
                                            </div>
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
                                            <div className="flex flex-col items-center justify-items-center">
                                                <img src="./Bajadecostos.png" alt="" className="w-24 h-24" />
                                                <h3 className="text-xl font-mont font-semibold pt-6 text-cel">BAJA DE COSTOS</h3>
                                            </div>
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
                                            <div className="flex flex-col items-center justify-items-center">
                                                <img src="./Productividad.png" alt="" className="w-24 h-24" />
                                                <h3 className="text-xl font-mont font-semibold pt-6 text-cel">PRODUCTIVIDAD</h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhatsApp />
            <Footer />
        </div>
    )
}