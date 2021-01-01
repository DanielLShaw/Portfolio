import React from "react";
import SPALink from "../SPALink";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <SPALink
        className="footer__link"
        href="https://github.com/DanielLShaw/portfolio"
      >
        <AiFillGithub size="30px" color="#000" />
      </SPALink>
      <SPALink
        className="footer__link"
        href="https://www.linkedin.com/in/daniellshaw/"
      >
        <FaLinkedin size="30px" color="#000" />
      </SPALink>
    </footer>
  );
}
