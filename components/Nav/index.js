import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import selectNavOpen from "../../store/selectors/nav";
import { toggleNav } from "../../store/actions/nav";

const Nav = () => {
  const dispatch = useDispatch();
  const navOpen = useSelector(selectNavOpen);
  const classes = classNames({ open: navOpen });

  const handleClick = () => {
    toggleNav()(dispatch);
  };

  return (
    <>
      <button onClick={handleClick}>{navOpen ? "Open" : "Close"}</button>
      <nav className={classes}>
        <a href="/about">About</a>
      </nav>
    </>
  );
};

export default Nav;
