import React from "react";
import Qoutes from "../../../images/quotes.png";
import "./Description.scss";
function Description() {
  return (
    <section className="description">
      <div className="container">
        <div className="description-wrap">
          <img src={Qoutes} alt=""></img>
          <div className="dsc-content">
            <h3 className="dsc-title"> Lorem ipsum dolor amet </h3>
            <p className="dsc-parg">
              Donec pede justo, fragilla vel, aliiquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a , venenatis vitae ,
              justo, rhoncus ut , imperdiet a , venenatis vitae, justo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
