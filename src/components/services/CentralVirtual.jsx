import { motion } from "framer-motion"
import Headers from "../Headers"
import WhatsApp from "../WhatsApp"
import Footer from "../Footer"

export function CentralVirtual() {
    return (
        <div>
            <Headers />
            <div className="w-full h-full m-auto">
                <div className="flex top-4 justify-center py-2">
                    <img src="../banners/secciones/CentralVirtual.png" className="h-[140px] object-cover sm:h-full bg-center" />
                </div>
                <div className=" px-6 lg:px-8">
                    <div className="mx-auto pt-12 pb-8 sm:pt-12 sm:pb-12">
                        <div>
                            <div>                                
                                <p className="mt-6 lg:px-36 lg:mt-16 font-mont text-lg leading-8 text-gray-600 sm:text-center">
                                    Es un servicio sobre una plataforma web centralizada y un software de aplicaciones de VoIP (voz sobre IP) que permite centralizar de manera segura los servicios y beneficios de telefonía utilizando lo último en tecnología IP.
                                </p>
                            </div>
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
                                    <div className="transition-transform duration-500 group-hover:scale-105">
                                        <div className="flex flex-col items-center justify-items-center pt-8 pb-12 ">
                                            <img src="./OficinaInstantanea.png" alt="" className="w-24 h-24" />
                                            <h3 className="text-xl font-mont font-semibold pt-6 text-center text-cel">Oficina Instantánea</h3>
                                        </div>
                                        <p className="font-mont text-center text-gray-500">
                                            Posibilidad de instalar una nueva oficina y agregar nuevos empleados al sistema tecnológico, sin importar la ubicación geográfica. Solo se necesita acceso a cualquier internet.
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
                                            <img src="./Correo-de-voz.png" alt="" className="w-24 h-24" />
                                            <h3 className="text-xl font-mont font-semibold pt-6 text-cel">Correo de voz</h3>
                                        </div>
                                        <p className="font-mont text-center text-gray-500">
                                            Los mensajes de voz que recibas los podrás escuchar desde la computadora o el teléfono, guardalos o enviar una copia a todo el equipo en el momento que quieras.
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
                                            <img src="./Unico-numero.png" alt="" className="w-24 h-24" />
                                            <h3 className="text-xl font-mont font-semibold pt-6 text-cel">Único número</h3>
                                        </div>
                                        <p className="font-mont text-center text-gray-500">
                                            Línea IP con múltiples canales de comunicación simultánea, que permite atender varias llamadas al mismo tiempo desde cualquier ubicación, ya que cuenta con cola de espera.
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
                                        <div className="flex flex-col items-center justify-items-center pt-8 pb-12">
                                            <img src="./Privacidad.png" alt="" className="w-24 h-24" />
                                            <h3 className="text-xl font-mont font-semibold pt-6 text-cel">Privacidad</h3>
                                        </div>
                                        <p className="font-mont text-center text-gray-500">
                                            Es posible poner el cartel de “no molestar” y enviar todas las llamadas al buzon de voz. Nuestras centrales te permiten desviar llamadas, aceptar aquellas que selecciones, o incluso bloquearlas directamente.
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