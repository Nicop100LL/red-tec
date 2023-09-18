import { BrowserRouter, Route, Routes } from "react-router-dom"


import { Home } from "./components/Home"

import { Consultoria } from "./components/services/Consultoria"
import { CentralVirtual } from "./components/services/CentralVirtual"
import { Internet } from "./components/services/Internet"
import { Infraestructura } from "./components/services/Infraestructura"
import { Implementacion } from "./components/services/Implementacion"
import { Datacenter } from "./components/services/Datacenter"
import ScrollToTop from "./components/ScrollToTop"

import Contact from "./components/Contacto"
import { Nosotros } from "./components/Nosotros"
import { Error404 } from "./components/404/Error404"
import { Equipamientoinfra } from "./components/products/EquipamientoInfra"
import { Licenciamiento } from "./components/products/Licenciamiento"
import { EquipamientoOfic } from "./components/products/EquipamientoOfic"
import { ServiciosProfesionales } from "./components/services/ServiviosProfesionales"

function App() {


  return (
    <div className=''>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/centralVirtual" element={<CentralVirtual />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="/infraestructura" element={<Infraestructura />} />
          <Route path="/datacenter" element={<Datacenter />} />
          <Route path="/servprof" element={<ServiciosProfesionales />} />
          <Route path="/implementacion" element={<Implementacion />} />
          <Route path="/equinfra" element={<Equipamientoinfra />} />
          <Route path="/equipofic" element={<EquipamientoOfic />} />
          <Route path="/licenciamiento" element={<Licenciamiento />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
