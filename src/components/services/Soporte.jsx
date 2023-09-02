import Footer from "../Footer";
import Headers from "../Headers";
import WhatsApp from "../WhatsApp";

export function Soporte() {
    return (
        <div>
            <Headers />
            <div className="w-full h-full m-auto">
                <div className="flex top-4 justify-center py-2">
                    <img src="../banners/secciones/Soporte.png" className="h-[140px] object-cover sm:h-full bg-center" />
                </div>
                <div className=" px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-12 pb-8 sm:pt-12 sm:pb-12">
                        <div>
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            </div>
                            <div>
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam corrupti voluptate vero, atque inventore, ipsa suscipit, eum tempora reprehenderit repellendus aperiam voluptates voluptatibus dolores alias consectetur dolorum at rem impedit.
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