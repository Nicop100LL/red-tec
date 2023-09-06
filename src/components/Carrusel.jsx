import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';

const Carrusel = () => {
  return (
    <div className="w-full max-w-screen mx-auto">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showArrows={true} // Muestra flechas de navegación
        showStatus={false} // Oculta el estado del carrusel
        showIndicators={true} // Muestra indicadores de navegación
        infiniteLoop={true} // Permite un bucle infinito
        transitionTime={2000} // Tiempo de transición en milisegundos
        interval={4000} // Tiempo entre diapositivas en milisegundos
        useKeyboardArrows={true} // Habilita la navegación con teclado
        additionalTransfrom={1} // Agrega una transformación adicional
      >
        <NavLink to="/contacto">
        <div>
          <img src="../banners/principal/BannersWeb.png" alt="Imagen 1"
          className='h-[150px] object-cover lg:h-full cursor-pointer' />
        </div>
        </NavLink>
        <NavLink to="/contacto">
        <div>
          <img src="./banners/principal/BannersWeb2.png" alt="Imagen 2" 
          className='h-[150px] object-cover lg:h-full cursor-pointer' />
        </div>
        </NavLink>
        <NavLink to="/contacto">
        <div>
          <img src="./banners/principal/BannersWeb3.png" alt="Imagen 3" 
          className='h-[150px] object-cover lg:h-full cursor-pointer' />
        </div>
        </NavLink>
      </Carousel>
    </div>
  );
};

export default Carrusel;
