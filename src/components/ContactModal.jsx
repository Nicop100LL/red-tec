
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useEffect } from "react";

export default function ContactModal({ CamEst }) {

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
        }
        console.log(response);
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-1">

        <div className="bg-white py-10 px-2 sm:px-6 lg:col-span-3 lg:py-8 lg:px-4 xl:pl-12">
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
  )
}