import { FaHandsHelping } from "react-icons/fa";
import { FaUserSecret, FaUserTie, FaMedal, FaHandHoldingHand } from "react-icons/fa6";


export default function () {
    return (
        <div className="w-full bg-cel2 p-8 relative ">
            <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                <div className="grid place-items-center">

                <ul role="list" className="p-4 inline-flex space-x-8 grid-cols-5 lg:px-28 md:px-28 lg:gap-24 lg:items-center">
                    <div className="flex-col inline-flex gap-2 items-center text-gray-700 hover:text-gray-500 duration-300">
                        <FaMedal className="text-4xl box-content p-2" />
                        <h3 className="text-md font-bold">CALIDAD</h3>
                    </div>
                    <div className="flex-col inline-flex gap-2 items-center  text-gray-300 hover:text-gray-100 duration-300">
                        <FaUserTie className="text-4xl box-content p-2" />
                        <h3 className="text-md font-bold">PROFECIONALISMO</h3>
                    </div>
                    <div className="flex-col inline-flex gap-2 items-center  text-gray-300 hover:text-gray-100 duration-300">
                        <FaHandHoldingHand className="text-4xl box-content p-2" />
                        <h3 className="text-md font-bold">COMPROMISO</h3>
                    </div>
                    <div className="flex-col inline-flex gap-2 items-center  text-gray-300 hover:text-gray-100 duration-300">
                        <FaUserSecret className="text-4xl box-content p-2" />
                        <h3 className="text-md font-bold">SEGURIDAD</h3>
                    </div>
                    <div className="flex-col inline-flex gap-2 items-center  text-gray-300 hover:text-gray-100 duration-300">
                        <FaHandsHelping className="text-4xl box-content p-2" />
                        <h3 className="text-md font-bold">SERIEDAD</h3>
                    </div>
                </ul>
                </div>
            </div>
        </div>
    )
}