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
    <div className="header">
      {links.map((link) => {
        return <span>{link.text}</span>;
      })}
    </div>
  );
}

export default Header;
