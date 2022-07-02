import './header.css'
import Image from '../../assets/fun.svg';

const Header = () => {
  return (
    <div className='wrapper'>
      <div className="hero-grid">
        <div className="hero-desc">
          <h1>A better way to grow your creative business</h1>
          <p>Now you can list aproduct once, sell it everywhere and grow your sales faster.</p>
          <div className="hero-input">
            <input type="email" placeholder='Enter your email Address' required />
            <button type='button' >Get Started</button>
          </div>
        </div>
        <div className="hero-img">
          <img src={Image} alt="img" style={{width: "100%"}} />
        </div>
      </div>
    </div>
  )
}

export default Header