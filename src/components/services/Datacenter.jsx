import Footer from "../Footer";
import Headers from "../Headers";
import WhatsApp from "../WhatsApp";

export function Datacenter() {
    return (
        <div>
            <Headers />
            <div className="w-full h-full m-auto">
                <div className="flex top-4 justify-center py-2">
                    <img src="../banners/secciones/DataCenter.png" className="h-[140px] object-cover sm:h-full bg-center" />
                </div>
                <div className=" px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-12 pb-8 sm:pt-12 sm:pb-12">
                        <div>
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            </div>
                            <div>                               
                                <p className="mt-1 text-lg font-mont leading-8 text-gray-600 sm:text-center">
                                    Te ayudamos a modernizar tu centro de datos, brindando agilidad, bajando los costos de las infraestructuras de TI tradicional, abriendo paso a soluciones cloud.
                                    Las nuevas tecnologías, adaptan las cargas de trabajo sobre la marcha y descomprimen el almacenamiento sin perder el rendimiento.
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