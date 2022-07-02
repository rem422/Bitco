import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


import './resources.css'
import Image from '../../assets/crypto.svg';

const Resources = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <div className="resources" id="resources">
        <div className="wrapper">
        <div className="resources-grid">
            <div className="resources-desc" data-aos="fade-right" data-aos-duration="800">
            <h2>Make product changes once</h2>
            <p>The complex world of manufacturing needs smart and agile solutions to make it work effectively - all the time. At Bitco, we have dedicated ourselves to devicing creative and innovative answers for some of the most challenging issues manufacturing has to deal with - now and in the future.</p>
            <button type="button">Get Started</button>
            </div>
            <div className="resources-img" data-aos="fade-left" data-aos-duration="800">
                <img src={Image} alt="img" style={{ width: "100%" }}/>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Resources;

// import React from "react";


// const About = () => {
//   return (
//
//   );
// };

// export default Resources;
