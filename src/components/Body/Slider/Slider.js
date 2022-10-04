import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.scss";
import { sliderData } from "./sliderData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Qoutes from "../../../images/quotes.png";
import Logo from "../../../images/replylogo.png";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      centerMode: true,
      responsive: [
        {},
        {
          breakpoint: 1028,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="slider-section">
        <Slider {...settings}>
          {sliderData.map((item, index) => {
            return (
              <div className="slider-container" key={index}>
                <div className="slider">
                  <img className="slider-logo" alt="" src={Logo}></img>
                  <div className="slider-content">
                    <img className="slider-quotes" alt="" src={Qoutes}></img>
                    <p>{item.dsc}</p>
                    <h3>{item.name}</h3>
                    <span>{item.place}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    );
  }
}
