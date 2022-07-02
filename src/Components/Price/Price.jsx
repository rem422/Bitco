import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import './price.css'

const Price = () => {

useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='price' id='price'>
        <div className="wrapper">
            <div className="price-grid">
                <div className="price-desc" data-aos="fade-right" data-aos-duration="800">
                    <h3>Start your free trial</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and the typesetting industry to make a type specimen book</p>
                </div>
                <div className="price-btn" data-aos="fade-left" data-aos-duration="800">
                    <button type='button'>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Price