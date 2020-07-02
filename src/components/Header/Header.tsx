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
    <header className="Header">
      <nav className="Nav">
        {links.map((link) => {
          return <a href="/">{link.text}</a>;
        })}
        <button>Login</button>
      </nav>
    </header>
  );
}

export default Header;
