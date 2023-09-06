import CustomArrows from "./Card"
import { Slideshow, Slide, TextoSlide } from "./Slideshow"
import Footer from "./Footer"
import Headers from "./Headers"
import ListaCard from "./ListaCard"
import WhatsApp from "./WhatsApp"
import img1 from '/banners/principal/BannersWeb.png';
import img2 from '/banners/principal/BannersWeb2.png';
import img3 from '/banners/principal/BannersWeb3.png';
import { NavLink } from "react-router-dom"
import Carrusel from "./Carrusel"
import Carrusel2 from "./Carrusel2"


export function Home() {

    const images = [
		{
			id: '1',
			title: 'Awesome forest',
			image:
				'./banners/principal/BannersWeb.png',
		},
		{
			id: '2',
			title: 'A litle bird.',
			image:
				'./banners/principal/BannersWeb2.png',
		},
		{
			id: '3',
			title: 'The best friend.',
			image:
				'./banners/principal/BannersWeb3.png',
		},
		
	]

    return (
        <div>
            <Headers />
            {/* <Carrusel  /> */}
            <Carrusel2 images={images} />          
            <ListaCard />
            <CustomArrows />
            <WhatsApp />
            <Footer />
        </div>
    )
}