
import React, { useRef, useEffect, useState, useCallback } from 'react';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import styled from 'styled-components';

const Slideshow = ({
	children,
	controles = false,
	autoplay = false,
	velocidad = "500",
	intervalo = "5000"
}) => {
	const slideshow = useRef(null);
	const intervaloSlideshow = useRef(null);
	
  // Agrega un estado para el índice del slide actual
  const [slideActual, setSlideActual] = useState(0);

	const siguiente = useCallback(() => {
		// Comprobamos que el slideshow tenga elementos
		if (slideshow.current.children.length > 0) {


			// Obtenemos el primer elemento del slideshow.
			const primerElemento = slideshow.current.children[0];

			// Establecemos la transicion para el slideshow.
			slideshow.current.style.transition = `${velocidad}ms ease-out all`;

			const tamañoSlide = slideshow.current.children[0].offsetWidth;

			// Movemos el slideshow
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				// Reiniciamos la posicion del Slideshow.
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final.
				slideshow.current.appendChild(primerElemento);

				slideshow.current.removeEventListener('transitionend', transicion);
				setSlideActual((prevSlide) => (prevSlide + 1) % children.length);
			}

			// Eventlistener para cuando termina la animacion.
			slideshow.current.addEventListener('transitionend', transicion);

		}
	}, [velocidad]);

	const anterior = () => {
		
		if (slideshow.current.children.length > 0) {
			// Obtenemos el ultimo elemento del slideshow.
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

			slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
			
    // Actualiza el estado del índice del slide
    setSlideActual((prevSlide) => (prevSlide - 1 + children.length) % children.length);
		}
	}

	useEffect(() => {
		if (autoplay) {
			intervaloSlideshow.current = setInterval(() => {
				siguiente();
			}, intervalo);

			// Eliminamos los intervalos
			slideshow.current.addEventListener('mouseenter', () => {
				clearInterval(intervaloSlideshow.current);
			});

			// Volvemos a poner el intervalo cuando saquen el cursor del slideshow
			slideshow.current.addEventListener('mouseleave', () => {
				intervaloSlideshow.current = setInterval(() => {
					siguiente();
				}, intervalo);
			});
		}
	}, [autoplay, intervalo, siguiente]);

  // Utiliza useEffect para actualizar el estado slideActual cuando cambian los children
  useEffect(() => {
    const handleResize = () => {
      setSlideActual(0); // Reinicia el índice del slide cuando cambian los children
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [children]);


	return (
		<div className=''>
			<ContenedorPrincipal>
				<ContenedorSlideshow ref={slideshow}>
					{children}
				</ContenedorSlideshow>
				<div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {children.map((_, i) => (
            <div
              key={i}
              className={`
                transition-all w-1 h-1 lg:w-3 lg:h-3 bg-white rounded-full
                ${slideActual === i ? "p-1 lg:p-2" : "bg-opacity-50"}
              `}
              onClick={() => setSlideActual(i)} // Agrega un evento para cambiar al slide haciendo clic
            />
          ))}
        </div>
      </div>
				{controles && <Controles>
					<Boton onClick={anterior}>
						<BsChevronCompactLeft />
					</Boton>
					<Boton derecho onClick={siguiente}>
						<BsChevronCompactRight />
					</Boton>
				</Controles>}
			</ContenedorPrincipal>
		</div>
	);
}

const ContenedorPrincipal = styled.div`
	position: relative;
	overflow: hidden;
`;

const ContenedorSlideshow = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

const Slide = styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: .3s ease all;
	z-index: 10;
	/* max-height: 500px; */
	position: relative;

	img {
		width: 100%;
		vertical-align: top;
	}
	@media screen and (max-width: 700px) {
	img {
		height: 150px;
		object-fit: cover;
	}
	}
`;

const TextoSlide = styled.div`
	background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
	color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
	width: 100%;
	padding: 10px 60px;
	text-align: center;
	position: absolute;
	bottom: 0;

	@media screen and (max-width: 700px) {
		position: relative;
		background: #000;
	}
`;

const Controles = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const Boton = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 100%;
	text-align: center;
	position: absolute;
	transition: .3s ease all;
	/* &:hover {
		background: rgba(0,0,0,.2);
		path {
			fill: #fff;
		}
	} */

	path {
		filter: ${props => props.derecho ? 'drop-shadow(0px 0px 0px #fff)' : 'drop-shadow(0px 0px 0px #fff)'};
	}

	${props => props.derecho ? 'right: 0' : 'left: 0'}
`;

export { Slideshow, Slide, TextoSlide };