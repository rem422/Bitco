import React from 'react'
import './header.css'
import havingFun from '../../assets/having-fun.svg'

const Header = () => {
    return (
    <div className='home' id='home'>
        <div className="max-width">
            <div className="home-content">
                <div className="home-info">
                    <h1 className="title">A better way to grow your creative business</h1>
                    <p className="text">Now you can list a product once,sell it everywhere and grow your sales faster.</p>
                    <div className="home-email">
                        <input type="email" placeholder='Enter your email Address' required/>
                        <button className="btn">Get Started</button>
                    </div>
                </div>
                <div className="home-image">
                    <img src={havingFun} alt="Image" />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header