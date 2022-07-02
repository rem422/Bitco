import "./footer.css";

const Footer = () => {

const getYear = () => {
    return new Date().getFullYear();
}

  return (
    <footer className='footer'>
        <div className="wrapper">
            <div className="footer-grid">
                <div className="footer-right">
                    <div className="logo">Bit<span>co</span></div>
                    <p>940 N Riverview Dr Ste 450
                    <br/> Holdarea DA 839992 USA</p>
                </div>
                <div class="footer-left">
                <div class="footer-menu-wrapper">
                    <div class="footer-menu-block">
                    <h4>Helpful Link</h4>
                    <ul>
                        <li><a href="#">Bitco</a></li>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Industries</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#resources">Resources</a></li>
                    </ul>
                    </div>
                    <div class="footer-menu-block">
                    <h4>About</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                    </div>
                    <div class="footer-menu-block">
                    <h4>Social</h4>
                    <ul>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Youtube</a></li>
                        <li><a href="#">Facebook</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
            <hr />
                <div className="copyright">
                    <p>&copy; copyright {getYear()}. All rights reserved.</p>
                    <p><a href="#">Privacy Policy</a>| <a href="#">Terms of Use</a>| <a href="#">Sitemap</a></p>
                </div>
        </div>
    </footer>
  )
}

export default Footer