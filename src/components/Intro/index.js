import './intro.scss';
import illustrationIntro from '../../images/illustration-intro.png';
import curvyDesktop from '../../images/bg-curvy-desktop.svg';
import curvyMobile from '../../images/bg-curvy-mobile.svg';

function Intro() {
  return (
    <div className="intro-container">
      <div className="intro">
        <img src={illustrationIntro} alt="logo" />
        <div className="intro-content">
          <h2>All your files in one secure location, accessible anywhere.</h2>
          <p>Fylo stores all your most important files in one secure location.</p>
          <p>Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
          <button className="startedButton">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
