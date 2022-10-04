import React, { Component } from "react";
import "./StandardSlider.scss";
import { StandardData } from "./StandardData";
import Slider from "react-slick";
import logo from "../images/replylogo.png";
import Qoutes from "../images/quotes.png";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
       
      ],
    };
    return (
      <section className="standard-slider-section">
        <div className="container">
          <div className="standard-slider">
            <Slider {...settings}>
              {StandardData.map((item, index) => (
                <article key={index} className="standard-article">
                  <div className="standard-wraper">
                    <a href="fds">
                      <div className="img-content">
                        <img src={logo} alt="" />
                      </div>

                      <div className="standard-teaser-content">
                        <img className="quotes" alt="" src={Qoutes}></img>
                        <div className="s-headline">{item.headline}</div>
                        <div className="s-name">{item.name}</div>
                        <div className="s-lname">{item.lName}</div>
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

// function StandardSlider() {
//   return (
//     <section className="standard-slider-section">
//       <div className="container">
//         <h2>Ausgewählte Tipps für Sie</h2>
//         <div className="standard-slider">
//           <article className="standard-article">
//             {StandardData.map((item, index) => (
//               <div key={index} className="standard-wraper">
//                 <a href="fds">
//                   <div className="standard-teaser-img">
//                     <div className="img-content">
//                       <img src={item.src} alt=""></img>
//                     </div>
//                   </div>
//                   <div className="standard-teaser-content">
//                     <div className="s-subline">{item.subline}</div>
//                     <div className="s-headline">{item.headline}</div>
//                     <div className="s-dsc">{item.dsc}</div>
//                     <div className="s-link">{item.link}</div>
//                   </div>
//                 </a>
//               </div>
//             ))}
//           </article>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default StandardSlider;
