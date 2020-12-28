import './footer.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as MailIcon } from '../../images/icon-email.svg';
import { ReactComponent as LocationIcon } from '../../images/icon-location.svg';
import { ReactComponent as PhoneIcon } from '../../images/icon-phone.svg';
import LogoTwitter from 'react-ionicons/lib/LogoTwitter';
import LogoInstagram from 'react-ionicons/lib/LogoInstagram';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <Logo style={{ margin: '20px 0' }} />
        <div className="footer-content">
          <div className="location footer-item">
            <span><LocationIcon /></span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div className="contact footer-item">
            <div className="contact-section">
              <PhoneIcon />
              <p>+1-543-123-4567</p>
            </div>
            <div className="contact-section">
              <MailIcon />
              <p>example@fylo.com</p>
            </div>
          </div>
          <div className="about footer-item">
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Jobs</a></li>
              <li><a href="/">Press</a></li>
              <li><a href="/">Blog</a></li>
            </ul>
          </div>
          <div className="infos footer-item">
            <ul>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Terms</a></li>
              <li><a href="/">Privacy</a></li>
            </ul>
          </div>
          <div className="social footer-item">
            <LogoFacebook color="#50ABF1" fontSize="35px" style={{ cursor: 'pointer', margin: '10px' }} />
            <LogoTwitter color="#4867AA" fontSize="35px" style={{ cursor: 'pointer', margin: '10px' }} />
            <LogoInstagram color="#C034B1" fontSize="35px" style={{ cursor: 'pointer', margin: '10px' }} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;