import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <a
        className="footer__link"
        href="https://github.com/DanielLShaw/portfolio"
      >
        <AiFillGithub size="30px" color="#000" />
      </a>
      <a
        className="footer__link"
        href="https://www.linkedin.com/in/daniellshaw/"
      >
        <FaLinkedin size="30px" color="#000" />
      </a>
    </footer>
  );
}
