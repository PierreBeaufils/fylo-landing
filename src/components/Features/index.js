import './features.scss';
import accessIcon from '../../images/icon-access-anywhere.svg';
import securityIcon from '../../images/icon-security.svg';
import collaborationIcon from '../../images/icon-collaboration.svg';
import anyFileIcon from '../../images/icon-any-file.svg';

function Features() {
  return (
    <div className="corpse">
      <div className="features">
        <div className="features-item">
          <img src={accessIcon} alt="access icon" />
          <h3>title</h3>
          <p>text</p>
        </div>
        <div className="features-item">
          <img src={securityIcon} alt="security icon" />
          <h3>title</h3>
          <p>text</p>
        </div>
        <div className="features-item">
          <img src={collaborationIcon} alt="collaboration icon" />
          <h3>title</h3>
          <p>text</p>
        </div>
        <div className="features-item">
          <img src={anyFileIcon} alt="file icon" />
          <h3>title</h3>
          <p>text</p>
        </div>
      </div>
      <div className="description">
        test
      </div>
    </div>
  );
}

export default Features;
