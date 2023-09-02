const navigation = {
  solutions: [
    { name: 'telefono', href: '#' },
    { name: 'whatsapp', href: '#' },


  ],
  support: [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Documentación', href: '#' },

  ],
  company: [
    { name: 'Como llegar', href: 'https://www.google.com/maps/dir//Kawasaki+Madero,+Aim%C3%A9+Pain%C3%A9+1581,+Buenos+Aires/@-34.6785408,-58.45145,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95a3356b12025d4b:0xa1723e4181112f0!2m2!1d-58.3613057!2d-34.6157146?entry=ttu' },
    { name: 'Blog', href: '#' },

  ],
  legal: [

  ],
  social: [
    {
      name: 'Linkedin',
      href: ' https://www.linkedin.com/company/redtecsi/?viewAsMember=true',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 48 48" {...props}>
          <path
            fillRule="evenodd"
            d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/redtecsi/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
   
  ],
}
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import Modal from "./Modal";
import { Fragment, useState } from 'react'
import DotLoader from 'react-spinners/DotLoader'



export default function Footer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loading,setLoading]=useState(true)

  const [estadoModal, cambiarEstadoModal] = useState(false)
  return (
    <div>
      <Modal
        estado={estadoModal}
        cambiarEstado={cambiarEstadoModal}
      />
      <footer className="bg-marr" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-full mx-auto py-4 px-4 sm:px-6 lg:py-2 lg:px-36 bg-marr">
          <div className="xl:grid xl:grid-cols-1 xl:gap-2">
       
            <div className="space-y-3 lg:w-[750px] xl:w-[1100px] xl:col-span-1 md:pl-16">
              <img
                className="h-10"
                src="logo1.png"
                alt=""
              />
              <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-1">
                <div className="md:grid md:grid-cols-1 md:gap-1 lg:gap-12">
                  <div className="">
                  <div className="">
                    <span className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contacto</span>
                    <span className="lg:px-8 lg:pl-96 pl-32 md:pl-48">
                      <button onClick={() => cambiarEstadoModal(!estadoModal)} className="text-sm font-semibold leading-6 border-2 rounded-lg px-2 py-1 border-gray-400 text-gray-400 hover:border-gray-100 hover:text-gray-100">
                        CONSULTENOS
                        <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color="#06B0F9" />
                      </button>
                    </span>
                  </div>
                    <ul role="list" className="mt-0 space-y-4">

                      <li >

                        <div className="text-base flex">
                          <IoLogoWhatsapp className="mt-2 w-6 h-6  text-gray-500 hover:text-gray-900" />
                          <span className="p-2 text-gray-500 hover:text-gray-100">15-6913-9980</span>
                        </div>
                        <div className="text-base flex">
                          <IoMdMail className="mt-2 w-6 h-6 text-gray-500 hover:text-gray-100" />
                          <span className="p-2  text-gray-500 hover:text-gray-100">info@redtecsi.com.ar</span>
                        </div>
                      </li>

                    </ul>
                  </div>
                 

                </div>

              </div>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} target="_blank" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          
          <div className="mt-12 lg:mt-0 border-t border-gray-200 lg:pt-1 pt-8">
            <p className="text-base text-gray-400 xl:text-center">&copy; 2023 REDTEC. Todos los derechos reservados.</p>
          </div>
        </div>
        </div>
      </footer>
    </div>
  )
}