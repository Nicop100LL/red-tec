import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

const posts = [
  {
    id: 1,
    name: 'INFRAESTRUCTURA',
    description: 'Soluciones integrales para tu empresa. Administramos servidores físicos y virtuales, evita pérdida de información y asegura tus resguardos y la alta disponibilidad de base de datos.',
    imagen: './Infraestructura.png',
    href: "/infraestructura"
  },
  {
    id: 2,
    name: 'SOPORTE',
    description: ' Contamos con un equipo de especialistas expertos en soporte con disponibilidad 7x24 para asistencia on site o remoto. Consulta por nuestras mesas de ayuda.',
    imagen: './Soporte.png',
    href: "/soporte"
  },
  {
    id: 3,
    name: 'LICENCIAMIENTO',
    description: 'Podemos asesorarte en la herramienta que más te convenga para tu negocio. Implementamos soluciones para que tu equipo trabaje seguro y desde cualquier lugar. ',
    imagen: './Licenciamiento.png',
    href: "/licenciamiento"
  }

]


export default function ListaCard() {
  return (
    <div className="relative bg-gray-50 px-4 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className=" bg-gray-100 relative mx-auto max-w-7xl">

        <div key={posts.id} className="mx-auto mt-12 grid max-w-lg gap-5 p-1 lg:max-w-none lg:grid-cols-3">
          {posts.length ?
            posts.map((post) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ onde: true, amount: 0 }}
                transition={{ delay: 0, duration: 1 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}

                key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <NavLink id="RouterNavLink" to={`${post.href}`}>
                  <div>
                    <div className="flex-shrink-0 group relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                      <div>
                        <div className="transition-transform duration-500 group-hover:scale-125">
                          <span className={`${post.name === 'SOPORTE' ? "-translate-x-4" : "-translate-x-[4rem]"}
                                       ${post.name === 'LICENCIAMIENTO' ? "-translate-x-[3rem]" : ""}
                       absolute text-2xl font-bold text-center top-1/2 left-1/3 text-white underline-offset-5 font-mont`}>{post.name}</span> {/*sombra text-stroke-3 */}
                          <img className="h-48 w-full object-cover " src={post.imagen} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between h-52 bg-white p-6">
                      <div className="flex-1">
                        <p className="mt-3 text-base font-mont text-gray-500">{post.description}</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </motion.div>
            )
            ) : <><Loading /> <Loading /> <Loading /></>}
        </div>
      </div>
    </div>
  )
}