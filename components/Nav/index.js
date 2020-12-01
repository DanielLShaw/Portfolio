import React from "react";
import SPALink from "../SPALink";

import { TiThMenu, TiThMenuOutline } from "react-icons/ti";

import logo from "../../assets/images/logo.png";
import { NotMobile, Mobile } from "../Responsive";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import selectNavOpen from "../../store/selectors/nav";
import { toggleNav } from "../../store/actions/nav";

const Nav = () => {
  const dispatch = useDispatch();
  const navOpen = useSelector(selectNavOpen);
  const mobileClass = classNames({ "header-nav__popout": true, open: navOpen });

  const handleClick = () => {
    toggleNav()(dispatch);
  };

  const menuLinks = [
    { link: "/about", text: "About" },
    { link: "/aoc", text: "Advent of Code" },
  ];

  return (
    <>
      <NotMobile>
        <div className="header-nav desktop grid-x">
          <SPALink href="/" className="header-nav__logo cell medium-3">
            <img src={logo} alt="logo" />
          </SPALink>
          <nav className="header-nav__page-links cell medium-9">
            {menuLinks.map(({ link, text }) => (
              <SPALink
                key={`${link}-${text}`}
                href={link}
                className="header-nav__link"
              >
                {text}
              </SPALink>
            ))}
          </nav>
        </div>
      </NotMobile>
      <Mobile>
        <div className="header-nav mobile">
          <SPALink href="/" className="header-nav__logo ">
            <img src={logo} alt="logo" />
          </SPALink>
          <button className="header-nav__toggle" onClick={handleClick}>
            {navOpen ? (
              <TiThMenu size="60px" />
            ) : (
              <TiThMenuOutline size="60px" />
            )}
          </button>
          <nav className={mobileClass}>
            {menuLinks.map(({ link, text }) => (
              <SPALink
                key={`${link}-${text}`}
                href={link}
                className="header-nav__link"
              >
                {text}
              </SPALink>
            ))}
          </nav>
        </div>
      </Mobile>
    </>
  );
};

export default Nav;
