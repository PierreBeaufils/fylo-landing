import './header.scss';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <ul className="menu">
        <li className="menu-item"><a href="#">Features</a></li>
        <li className="menu-item"><a href="#">Team</a></li>
        <li className="menu-item"><a href="#">Sign in</a></li>
      </ul>
    </div >
  );
}

export default Header;
