
import { MailOpenIcon, PhoneIcon } from '@heroicons/react/solid'
import WhatsApp from './WhatsApp'
import Headers from './Headers'
import Footer from './Footer'

import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useEffect } from "react";

export default function Contact({ CamEst }) {

  const MostrarAlerta = () => {
    Swal.fire({
      icon: 'success',
      title: 'Gracias por registrarte',
      text: '¡En breve nos pondremos en contacto!',
      confirmButtonText: 'OK'
    })
      .then((result) => {
        if (result.isConfirmed) {
          // Llamar a la función cuando el usuario hace clic en OK
          CamEst();
        }
      })
  }

  const Funciones = () => {
    MostrarAlerta();
  }

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_xf0r9o3', 'template_l5ub0ou', event.target, 'VLgJPwOGAKZY0wX2F')
      .then(response => {
        if (response.status === 200) {
          Funciones();
          event.target.reset();
        }
        console.log(response);
      })
      .catch(error => console.log(error));
  }


  return (
    <div>
      <Headers />
      <div className='w-full h-full m-auto'>
        <div className="flex top-4 justify-center py-2">
          <img src="../banners/secciones/Contactanos.png" className="h-[115px] object-cover sm:h-full bg-center" />
        </div>
        <div className="relative bg-gray-50">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
          </div>
          <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
            <div className="bg-gray-100 py-4 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-10 xl:pr-12">
              <div className="mx-auto max-w-lg text-center">
                <h2 className="text-3xl font-bold tracking-tight text-cel sm:text-4xl">CONTACTANOS</h2>
                <p className="mt-3 text-lg font-mont leading-6 text-gray-500">
                  Estamos atentos a cualquier consulta o pedido que necesites. ¡Te esperamos!
                </p>
                <dl className="mt-8 grid place-content-center text-base text-gray-500">
            
              <div className="sm:mt-12">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">15-6913-9980</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailOpenIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">info@redtecsi.com.ar</span>
                </dd>
              </div>
            </dl>
              </div>
            </div>
            <div className="bg-gray-100 py-4 px-4 sm:px-6 lg:col-span-3 lg:py-10 lg:px-8 xl:pl-12">
              <div className="mx-auto max-w-lg lg:max-w-none">
                <form action="#" method="POST" onSubmit={sendEmail} className="grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="full-name" className="sr-only">
                      Full name
                    </label>
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      required={true}
                      autoComplete="name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Nombre y apellido"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="sr-only">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required={true}
                      autoComplete="name"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Empresa"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required={true}
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      required={true}
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Teléfono"
                    />
                  </div>
                  <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required={true}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Mensaje"
                  defaultValue={''}
                />
              </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
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