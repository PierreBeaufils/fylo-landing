import './features.scss';
import accessIcon from '../../images/icon-access-anywhere.svg';
import securityIcon from '../../images/icon-security.svg';
import collaborationIcon from '../../images/icon-collaboration.svg';
import anyFileIcon from '../../images/icon-any-file.svg';
import productiveIcon from '../../images/illustration-stay-productive.png';
import arrowIcon from '../../images/icon-arrow.png';
import profile1 from '../../images/profile-1.jpg';
import profile2 from '../../images/profile-2.jpg';
import profile3 from '../../images/profile-3.jpg';
import quotes from '../../images/bg-quotes.png';

function Features() {
  return (
    <div className="corpse">
      <div className="features">
        <div className="features-item">
          <img src={accessIcon} alt="access icon" />
          <h3>Access your files, anywhere</h3>
          <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
        </div>
        <div className="features-item">
          <img src={securityIcon} alt="security icon" />
          <h3>Security you can trust</h3>
          <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
        </div>
        <div className="features-item">
          <img src={collaborationIcon} alt="collaboration icon" />
          <h3>Real-time collaboration</h3>
          <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        </div>
        <div className="features-item">
          <img src={anyFileIcon} alt="file icon" />
          <h3>Store any type of file</h3>
          <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
        </div>
      </div>

      <div className="description">
        <img className="description-productivity" src={productiveIcon} alt="productivity" width="500px" />
        <div className="description-content">
          <h2>Stay productive, wherever you are</h2>
          <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
          <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
          <a href="#" className="link">See how Fylo works <img src={arrowIcon} alt="read more" width="17px" /></a>
        </div>
      </div>

      <div className="comments">
        <div className="comments-card comments-card1">
          <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
          <div className="comments-card-author">
            <img src={profile1} alt="author" width="30px" height="30px" />
            <div>
              <h4>Satish Patel</h4>
              <p>Founder and CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className="comments-card">
          <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
          <div className="comments-card-author">
            <img src={profile2} alt="author" width="30px" height="30px" />
            <div>
              <h4>Bruce McKenzie</h4>
              <p>Founder and CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className="comments-card">
          <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
          <div className="comments-card-author">
            <img src={profile3} alt="author" width="30px" height="30px" />
            <div>
              <h4>Iva Boyd</h4>
              <p>Founder and CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Features;
