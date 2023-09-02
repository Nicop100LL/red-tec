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


export function Home() {

    return (
        <div>
            <Headers />
            <Carrusel  />
            {/* <Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="8000">
                <Slide>
                    <NavLink to="/contacto">
                        <img src={img1} alt="" />
                    </NavLink>
                </Slide>
                <Slide>
                    <NavLink to="/contacto">
                        <img src={img2} alt="" />
                    </NavLink>
                </Slide>
                <Slide>
                    <NavLink to="/contacto">
                        <img src={img3} alt="" />
                    </NavLink>
                </Slide>
            </Slideshow> */}
            <ListaCard />
            <CustomArrows />
            <WhatsApp />
            <Footer />
        </div>
    )
}