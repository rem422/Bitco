import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import './about.css'
import Image from '../../assets/sync.svg';

const About = () => {

    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="about" id="about">
      <div className="wrapper">
        <div className="about-grid">
        <div className="about-img" data-aos="fade-right" data-aos-duration="800">
        <img src={Image} alt="img" style={{width: "100%"}}/>
        </div>
          <div className="about-desc" data-aos="fade-left" data-aos-duration="800">
            <h2>Keep your inventory in sync</h2>
            <p>At Bitco, we have dedicated ourselves to devising creative and innovative answers for some of the most challenging issues manufacturing has to deal with - now and in the future. These answers are derived from our deep practicle experience.</p>
            <button type='button' >Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
