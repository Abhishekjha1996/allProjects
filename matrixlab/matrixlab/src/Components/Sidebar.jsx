import React from "react";
import "../Styles/Sidebar.css";
import logo from "../icons/logo.png";
import logopic from "../icons/NFTify.png";
import token from "../icons/token.png";
import pair from "../icons/pair.png";
import pairad from "../icons/Pair Address.png";
import toknad from "../icons/Token Address.png";
import faceboock from "../icons/facebook .png";
import linkdin from "../icons/linkedin .png";
import twitter from "../icons/twitter .png";

const Sidebar = () => {
  return (
    <div id="Scontainer">
      <div>
        <div className="Sbox">
          <img className="slogo" src={logo} alt="logo" />
          <img className="slogopic" src={logopic} alt="logopic" />
        </div>
        <div className="Sbox">
          <img className="slogo" src={token} alt="logo" />
          {/* <img className='slogopic' src={toknad} alt='logo' /> */}
          <p className="tokentext">Token Address</p>
        </div>
        <div className="Sbox">
          <img className="slogo" src={pair} alt="logo" />
          {/* <img className='slogopic' src={pairad} alt='logo' /> */}
          <p className="tokentext">Pair Address</p>
        </div>
      </div>

      <div id="hug">
        <img className="shug" src={faceboock} alt="logo" />
        <img className="shug" src={linkdin} alt="logo" />
        <img className="shug" src={twitter} alt="logo" />
      </div>

      <div id="Sfotter"></div>
    </div>
  );
};

export default Sidebar;
