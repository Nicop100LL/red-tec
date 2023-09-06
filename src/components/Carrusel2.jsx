import React from 'react'
import Slider from 'infinite-react-carousel'
import { NavLink } from 'react-router-dom'

import './Slider.css'


const Carousel2 = ({ images }) => {
	return (
		<section className='slider'>			
			<Slider className='slider__content' autoplay autoplaySpeed={5000} dots={true} duration={1000} intervalo={8000}>
				{images.map((image) => (
					<NavLink to="/contacto" key={image.id} className='slider__content--item'>
						<img src={image.image} alt={image.title} />
						
					</NavLink>
				))}
			</Slider>
		</section>
	)
}


export default Carousel2