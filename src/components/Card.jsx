import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHandsHelping } from "react-icons/fa";
import { FaUserSecret, FaUserTie, FaMedal, FaHandHoldingHand } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      autoplay: true,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,

            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          },


        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
      ]
    }
      ;
    return (
      <div className="p-10 lg:px-8 bg-cel2">
        <Slider className="grid place-content-center"{...settings}>
          <div className="flex-col inline-flex gap-2 p-12 items-center text-gray-300 hover:text-gray-100 duration-300">
            <FaMedal className="text-4xl box-content p-2 pl-4" />
            <h3 className="text-md font-bold">CALIDAD</h3>
          </div>
          <div className="flex-col inline-flex p-12 gap-2 items-center  text-gray-300 hover:text-gray-100 duration-300">
            <div className="grid place-content-center">
              <FaUserTie className="text-4xl box-content p-2 pl-14" />
              <h3 className="text-md font-bold">PROFESIONALISMO</h3>
            </div>
          </div>
          <div className="flex-col inline-flex p-12 gap-2 items-center  text-gray-300 hover:text-gray-100 duration-300">
            <div className="grid place-content-center">
              <FaHandHoldingHand className="text-4xl box-content p-2 pl-8" />
              <h3 className="text-md font-bold">COMPROMISO</h3>
            </div>
          </div>
          <div className="flex-col inline-flex p-12 gap-2 items-center  text-gray-300 hover:text-gray-100 duration-300">
            <div className="grid place-content-center">
              <FaUserSecret className="text-4xl box-content p-2 pl-6" />
              <h3 className="text-md font-bold">SEGURIDAD</h3>
            </div>
          </div>
          <div className="flex-col inline-flex p-12 gap-2 items-center  text-gray-300 hover:text-gray-100 duration-300">
            <div className="grid place-content-center">
              <FaHandsHelping className="text-4xl box-content p-2 pl-5" />
              <h3 className="text-md font-bold">SERIEDAD</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}