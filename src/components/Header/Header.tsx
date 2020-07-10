import * as React from "react";
import "./Header.scss";

export interface Props {
  links: Array<Link>;
  logo: string;
}

export interface Link {
  text: string;
  order: number;
}

function Header({ links, logo }: Props) {
  return (

    <nav>
      <label className="logo"> Heal the heart</label>
      <ul>
        <li>
          <a className="active" href="#">Home</a>
          <a href="#">About me</a>
          <a href="#">Blogs</a>
          <a href="#">Login</a>
        </li>
      </ul>
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
