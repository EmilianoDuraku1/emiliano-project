import React from "react";
import "./Footer.scss";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className=" footer-wrap">
          <div className="row">
            <div className="col-md-3">
              <div className="contact">
                <button className="icon">
                  <BsTelephone />
                </button>
                <span>+49 (0) 123 456 78 000</span>
              </div>
              <div className="title">
                <h3>Vivamus</h3>
              </div>
              <div className="sub-title">
                <p>quam</p>
                <p>venenatis</p>
                <p>tincidunt</p>
                <p>faucibus</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact">
                <button className="icon">
                  <HiOutlineMail />
                </button>
                <span>info@loremispum.com</span>
              </div>
              <div className="title">
                <h3>Elemtum</h3>
              </div>
              <div className="sub-title">
                <p className="upercase">THE LOREM IPSUM</p>
                <p className="upercase">REPLY</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact hidden">
                <button className="icon"></button>
              </div>
              <div className="title hidden">
                <h3>123</h3>
              </div>
              <div className="sub-title">
                <p>Datenschutz</p>
                <p>Impressum</p>
                <p>Cookie Richtlinen</p>
                <p>Allgemeine</p>
                <span>Geschaftsbedingungen</span>
              </div>
            </div>
          </div>
          <div className="footer-botom">
            <div className="copy-right">
              <span>Copyright © 2022 All Rights Reserved.</span>
            </div>
            <div className="footer-button">
              <button type="button">Lorem ipsum dolorm sin ahmet</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
