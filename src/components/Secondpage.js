import React, { useState } from 'react'
import second from "../components/secondpage.module.css";
import BackgroundComponent from './BackgroundComponent';
import Imageslider from './Imageslider';
import { Link } from "react-router-dom";

const Secondpage = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handlePopupToggle = () => {
        setIsPopupOpen(!isPopupOpen);
      };
    

    const imageNames = [
        "slideimage1.png",
        "slideimage2.png",
        "slideimage3.png",
        "slideimage4.png",
        "slideimage5.png",
      ];
      const images = imageNames.map((imageName) => `${imageName}`);
  return (
    <div>
  <div className={second.v1_33}>
    <div className={second.v1_34} />
    <Link to="/third"><span className={second.v1_36}>Final Race</span></Link>
    <div className={second.v1_37} />
    <Link to="/"><div className={second.v1_44}>
    </div></Link>
    <div className={second.v1_47} />
    <Link to="/secondnew"><div className={second.v1_48} /></Link>
    <div className={second.v1_49} />
    <div className={second.v1_51} />
    <span className={second.v1_52}>Leader boards</span>
    <span className={second.v1_53}>About</span>
    <span className={second.v1_54}>Contact</span>
    <div className={second.v1_41}>
      <span className={second.v1_42}>Sign in</span>
      <div className={second.v1_43} />
    </div>
    <div className={second.v1_45} />
      <div className={second.v1_46} />
    <div className={second.v1_55}>
    <div className={`second.v1_56 ${isPopupOpen ? "open" : ""}`} onClick={handlePopupToggle}>
      
        <BackgroundComponent/>
        <div className={second.v1_59} />
        <span className={second.v1_60}>HRiders</span>
        <span className={second.v1_61}>01</span>
        <div className={second.v1_62} />
        <span className={second.v1_63}>234</span>
      </div>
      
      <div className={second.v1_64}>
        <BackgroundComponent/>
        <span className={second.v1_67}>Chanels</span>
        <span className={second.v1_68}>02</span>
        <span className={second.v1_69}>210</span>
        <div className={second.v1_70} />
        <div className={second.v1_71} />
      </div>
      <div className={second.v1_72}>
        <BackgroundComponent/>
        <span className={second.v1_75}>Royals</span>
        <span className={second.v1_76}>03</span>
        <span className={second.v1_77}>203</span>
        <div className={second.v1_78} />
        <div className={second.v1_79} />
      </div>
      <div className={second.v1_80}>
        <BackgroundComponent/>
        <span className={second.v1_83}>Tigers</span>
        <span className={second.v1_84}>04</span>
        <span className={second.v1_85}>194</span>
        <div className={second.v1_86} />
        <div className={second.v1_87} />
      </div>
      <div className={second.v1_88}>

        <BackgroundComponent/>

        <span className={second.v1_92}>Rockers</span>
          <span className={second.v1_93}>05</span>
          <span className={second.v1_94}>176</span>
          <div className={second.v1_95} />
          <div className={second.v1_96} />
      </div>
      <div className={second.v1_97}>
        <BackgroundComponent/>
        <span className={second.v1_100}>Lords</span>
        <span className={second.v1_101}>06</span>
        <span className={second.v1_102}>158</span>
        <div className={second.v1_103} />
        <div className={second.v1_104} />
      </div>
      <div className={second.v1_105}>
      <BackgroundComponent/>
      <span className={second.v1_109}>Rugged</span>
          <span className={second.v1_110}>07</span>
          <span className={second.v1_111}>151</span>
          <div className={second.v1_112} />
          <div className={second.v1_113} />
      </div>
      <div className={second.v1_114}>
      <BackgroundComponent/>
      <span className={second.v1_118}>Brazen</span>
          <span className={second.v1_119}>08</span>
          <span className={second.v1_120}>134</span>
          <div className={second.v1_121} />
          <div className={second.v1_122} />
        
      </div> 
    </div>
    <span className={second.v1_123}>Each Group</span>
    <span className={second.v1_124}>Consist 8 </span>
    <span className={second.v1_1244}>Department</span>
    <div className={second.name} />
  </div>
  <div>
    <Imageslider images={images}/>
    {/* Popup Box */}
    {isPopupOpen && (
        <div className={second.popup}>
        <div>
        <img className={second.popupimg} src='popup.png' alt="Popup" />
        <img className={second.popupimg2} src='hud-figma 1.png' alt='' />
        <img className={second.popupimg3} src='tracks.png' alt='' />
        <h4 className={second.popuptext1}>Department 01</h4>
        <p className={second.popuptext2}>Human Resource</p>
        <p className={second.popuptext3}>Race with department 05</p>
        <p className={second.popuptext4}>15th August 2023</p>
        <p className={second.popuptext5}>New Mexico, USA</p>
        </div>
        </div>
      )}
 
  </div>
    </div>
  )
}

export default Secondpage