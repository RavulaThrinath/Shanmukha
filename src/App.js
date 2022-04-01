import React from "react";
import logo from "./Assets/ShanmukhaLogo.png";
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiWhatsappFill,
  RiPhoneFill,
  RiMailOpenFill,
} from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="container">
        <div className="content">
          <h1 className="main-title">{`Sorry, We're down \n for maintaince`}</h1>
          <p className="sub-title">
            {`Our Website isn't quite ready, \n but you can still`}
          </p>
          <div className="contact-details">
            <div className="contact-containetr">
              <h1>Contact Us</h1>

              <div className="iconss">
                <RiPhoneFill />
                <a href="tel:9848441473">+91-9848441473</a>
              </div>
              <div className="iconss">
                <RiMailOpenFill />
                <a href="mailto:shanmukhatextiles@gmail.com">
                  shanmukhatextiles@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-containetr">
              <h1>Visit Us</h1>
              <div className="iconss">
                <MdLocationPin />
                <a
                  href="https://g.page/shanmukha-textiles?share"
                  rel="noreferrer"
                  target="_blank"
                >
                  Shop No: 75, 394, Mahatma Gandhi Cloth Market, Chirala,
                  AP-523156
                </a>
              </div>
            </div>
            <div className="contact-containetr">
              <h1>Follow Us</h1>
              <div className="icons">
                <a
                  href="https://m.facebook.com/1602758206626685/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiFacebookCircleFill />
                </a>
                <a
                  href="https://www.instagram.com/shanmukhatextiles/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiInstagramFill />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=+91-9848441473&text=Hello!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiWhatsappFill />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <img src={maintainceImage} alt="" width="400px" />
        </div>*/}
      </div>
    </div>
  );
}

export default App;
