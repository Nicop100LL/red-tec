import Footer from "../Footer";
import Headers from "../Headers";
import WhatsApp from "../WhatsApp";

export function ServiciosProfesionales() {
    return (
        <div>
            <Headers />
            <div className="w-full h-full m-auto">
                <div className="flex top-4 justify-center py-2">
                    <img src="../banners/secciones/ServiciosProfesionales.png" className="h-[135px] object-cover sm:h-full bg-center" />
                </div>
                <div className=" px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-12 pb-8 sm:pt-12 sm:pb-12">
                        <div>
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            </div>
                            <div>
                                <p className="mt-6 font-mont text-lg leading-8 text-gray-600 sm:text-center">
                                Redtecsi cuenta con técnicos especialmente capacitados para realizar cualquier tipo de migración y proyectos que impliquen planificación y análisis para una implementación óptima de productos o servicios en su empresa.
                                </p>
                                <div className="lg:flex gap-12 justify-center block py-8 lg:pt-12">
                                <h1 className="text-3xl font-mont border-2 p-2 text-cel2 py-4 my-2 font-semibold tracking-tight text-center">
                                    IMPLEMENTACIÓN
                                </h1>
                                <h1 className="text-3xl font-mont border-2 p-2 text-cel2 py-4 my-2 font-semibold tracking-tight text-center">
                                    MIGRACIONES
                                </h1>
                                <h1 className="text-3xl font-mont p-2 border-2 text-cel2 py-4 my-2 font-semibold tracking-tight text-center">
                                    SOPORTE
                                </h1>
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