import * as React from "react";
import "./Header.scss";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Routes, history } from '../../routes';
import appointments from '../../pages/appointments'

export interface Props {
  logo: string;
}

// export interface Link {
//   text: string;
//   order: number;
// }

function Header({ logo }: Props) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<Boolean>(false);
  return (

    <nav>
      <input type="checkbox" id="check" onClick={() => setShowMobileMenu(true)} />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars">
        </i>
      </label>


      <label className="logo">
      </label>
      <Router>
        <ul className={showMobileMenu ? "showMenu" : ""}>
          <li onClick={() => setShowMobileMenu(false)}>
            <Link to="/">Home</Link>
            <Link to="/appointments">Appointments</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <Routes />
      </Router>
    </nav>
    // <div className="topnav">
    //   {links.map((link) => {
    //     return (
    //       <a href="/" className="active">
    //         {link.text}
    //       </a>
    //     );
    //   })}
    // </div>
  );
}

export default Header;
