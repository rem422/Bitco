import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import '../Brands/brands.css';
import { google, slack, dropbox, shopify, atlassian } from '../Brands/import';

const Brands = () => {
    useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (
    <div className='brands'>
        <div className="wrapper">
            <div className="brand_logos">
                <div data-aos="fade-up" data-aos-duration="800">
                    <img className="brand-logo" src={google} alt="google"/>
                </div>
                <div data-aos="fade-up" data-aos-duration="800">
                    <img className="brand-logo" src={slack} alt="slack"/>
                </div>
                <div data-aos="fade-up" data-aos-duration="800">
                    <img className="brand-logo" src={dropbox} alt="dropbox"/>
                </div>
                <div data-aos="fade-up" data-aos-duration="800">
                    <img className="brand-logo" src={shopify} alt="shopify"/>
                </div>
                <div data-aos="fade-up" data-aos-duration="800">
                    <img className="brand-logo" src={atlassian} alt="atlassian"/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Brands;