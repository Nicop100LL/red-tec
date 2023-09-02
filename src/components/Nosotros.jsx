import Footer from "./Footer";
import Headers from "./Headers";
import WhatsApp from "./WhatsApp";

export function Nosotros() {
    return (
        <div>
            <Headers />
            <div className="w-full h-full m-auto">
                <div className="flex top-4 justify-center py-2">
                    <img src="../banners/secciones/QuienesSomos.png" className="h-[140px] object-cover sm:h-full bg-center" />
                </div>
                <div className=" px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-12 pb-8 sm:pt-12 sm:pb-12">
                        <div>
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            </div>
                            <div>
                                <p className="mt-1 text-lg leading-8 font-mont text-gray-600 sm:text-center">
                                    Somos una compañía de TI con una larga trayectoria profesional en entrega de servicios integrales de alta calidad.
                                    Nuestro equipo está compuesto por profesionales calificados de alto rendimiento, enfocados en la calidad de entrega. Ofrecemos una amplia gama de servicios como administración de infraestructura, soporte de software y seguridad entre otros.

                                    Estamos comprometidos a brindar a nuestros clientes la mejor experiencia posible y estamos seguros de que podemos ayudarlos a contribuir en su negocio.

                                </p>
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