import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowCircleUpIcon,
  MailIcon,
  CheckIcon,
  FingerPrintIcon,
  BanIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon, PhoneIcon, AtSymbolIcon } from '@heroicons/react/solid'
import { BrowserRouter, Link, NavLink } from 'react-router-dom'
import { FiMapPin, FiAlignJustify, FiTwitter } from "react-icons/fi"
import { FaTiktok, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Menu } from '@headlessui/react'
import Modal from './Modal'

const services = [
  { name: 'CONSULTORÍA', description: '', href: '/consultoria', icon: FiMapPin },
  { name: 'CENTRAL VIRTUAL', description: '', href: '/centralVirtual', icon: FaFacebookF },
  { name: 'INTERNET DEDICADO', description: '', href: '/internet', icon: FaInstagram },
  { name: 'INFRAESTRUCTURA', description: '', href: '/infraestructura', icon: FiTwitter },
  { name: 'DATACENTER', description: '', href: '/datacenter', icon: FaTiktok,  },
  { name: 'IMPLEMENTACIÓN Y MIGRACIONES', description: '', href: '/implementacion', icon: FiTwitter },
  { name: 'SOPORTE', description: '', href: '/soporte', icon: FiTwitter },
  { name: 'SERVICIOS PROFESIONALES', description: '', href: '/servprof', icon: FiTwitter },

]

const products = [
  { name: 'EQUIPAMIENTO DE INFRAESTRUCTURA', description: '', href: '/equinfra', icon: FiMapPin },
  { name: 'LICENCIAMIENTO', description: '', href: '/licenciamiento', icon: FaFacebookF },
  { name: 'EQUIPAMIENTO DE OFICINA', description: '', href: '/equipofic', icon: FaInstagram },

]

const callsToAction = [
  { name: 'WhatsApp', href: "https://wa.me/541169530210?text=Quiero%20realizar%20una%20consulta", icon: FaWhatsapp },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Headers() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [estadoModal, cambiarEstadoModal] = useState(false)

  return (
    <div>
      <Modal
        estado={estadoModal}
        cambiarEstado={cambiarEstadoModal}
      />
      <header className="bg-gray-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-24 w-auto" src="logo.png" alt="logo" />
            </Link>
          </div>
          <div className='grid place-content-end'>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <FiAlignJustify className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-28 gap-12">

              <NavLink to="/" className="text-sm font-semibold leading-6 text-gray-500">
                HOME
              </NavLink>
              <NavLink to="/nosotros" className="text-sm font-semibold leading-6 text-gray-500">
                QUIENES SOMOS
              </NavLink>

              {/* Menú Servicios */}
              <Menu as="div" className="relative">
                <Menu.Button
                  className="flex items-center active:text-cel focus:text-cel gap-x-1 text-sm font-semibold leading-6 text-gray-500">
                  SERVICIOS
                  <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Menu.Items className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[240px] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <Menu.Item as='div' className="p-4">
                      {({ close }) => (
                        <div>
                          {services.map((item) => (
                            <div
                              key={item.name}
                              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                            >
                              <div className="flex-auto">
                                <NavLink onClick={close} to={item.href} className="block font-semibold text-gray-500">
                                  {item.name}
                                </NavLink><p className="mt-1 text-gray-600">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>

              {/* Menú Productos */}
              <Menu as="div" className="relative">
                <Menu.Button
                  className="flex items-center active:text-cel focus:text-cel gap-x-1 text-sm font-semibold leading-6 text-gray-500">
                  PRODUCTOS
                  <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Menu.Items className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[240px] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <Menu.Item as='div' className="p-4">
                      {({ close }) => (
                        <div>
                          {products.map((item) => (
                            <div
                              key={item.name}
                              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                            >
                              <div className="flex-auto">
                                <NavLink onClick={close} to={item.href} className="block font-semibold text-gray-500">
                                  {item.name}
                                </NavLink><p className="mt-1 text-gray-600">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              <NavLink to="/contacto" className="text-sm font-semibold leading-6 text-gray-500">
                CONTACTO
              </NavLink>
            </Popover.Group>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                <span aria-hidden="true"></span>
              </a>
            </div>
          </div>
          {/* Menú responsive */}
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">

              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="logo1.png"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <NavLink
                          onClick={() => setMobileMenuOpen(false)}
                          to="/nosotros"
                          className="-mx-3 block rounded-lg px-3 pl-5 py-2 text-base font-semibold leading-7 active:text-cel focus:text-cel text-gray-500 hover:bg-gray-50"
                        >
                          QUIENES SOMOS
                        </NavLink>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base active:text-cel focus:text-cel text-gray-500 font-semibold leading-7 hover:bg-gray-50">
                          SERVICIOS
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {services && services.map((item) => (
                            <NavLink
                              key={item.name}
                              as="a"
                              onClick={() => setMobileMenuOpen(false)}
                              to={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 active:text-cel focus:text-cel text-gray-500 hover:bg-gray-50"
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base active:text-cel focus:text-cel text-gray-500 font-semibold leading-7 hover:bg-gray-50">
                          PRODUCTOS
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {products && products.map((item) => (
                            <NavLink
                              key={item.name}
                              as="a"
                              onClick={() => setMobileMenuOpen(false)}
                              to={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 active:text-cel focus:text-cel text-gray-500 hover:bg-gray-50"
                            >
                              {item.name}
                            </NavLink>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <NavLink
                  onClick={() => setMobileMenuOpen(false)}
                  to="/contacto"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 active:text-cel focus:text-cel text-gray-500 hover:bg-gray-50"
                  >
                    CONTACTO
                  </NavLink>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}
