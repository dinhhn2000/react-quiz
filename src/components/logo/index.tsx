import { NavLink } from 'react-router-dom';
import './logo.css'
import workLogo from '../../assets/logo.png';

function Logo(props: any) {
  return (
    <NavLink to="/" className="Logo">
      <img src={workLogo} alt="LOGO" />
    </NavLink>
  );
}

export default Logo;
