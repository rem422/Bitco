import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import './contact.css'
import Image from '../../assets/text.svg';

const Contact = () => {

useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="contact" id="contact">
        <div className="wrapper">
            <div className="contact-grid">
            <div className="contact-img" data-aos="fade-right" data-aos-duration="800">
            <img src={Image} alt="img" style={{width: "100%"}}/>
            </div>
            <div className="about-desc" data-aos="fade-left" data-aos-duration="800">
            <p>Lack of performance can have a seroius effect on your bottom line. Find out how the right software can help you run more effectively and efficiently.</p>
            <div className="contact-input">
            <input type="email" placeholder='Enter your email Address' required />
            <button type='button' >Subscriber Here</button>
            </div>
            <p>We're committed to your privacy. Bitco uses the information you provide to us to contact you about relevant content, and services. Y ou may unsubscribe from these communications at anytime. For more information, check out our Privacy Policy</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact