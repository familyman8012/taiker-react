import React from "react";
import Link from "../../utils/ActiveLink";
import * as gtag from "../../utils/gtag";

function NavbarInner({ classOne, toggleModal }) {
  return (
    <div className={classOne} id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/" activeClassName="active">
            <a
              className="nav-link"
              onClick={() =>
                gtag.event({
                  action: "링크 클릭",
                  category: "header",
                  label: "HOME",
                })
              }
            >
              Home
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/about">
            <a
              className="nav-link"
              onClick={() =>
                gtag.event({
                  action: "링크 클릭",
                  category: "header",
                  label: "ABOUT",
                })
              }
            >
              About
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/services" activeClassName="active">
            <a
              className="nav-link"
              onClick={() =>
                gtag.event({
                  action: "링크 클릭",
                  category: "header",
                  label: "SERVICE",
                })
              }
            >
              Services
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://blog.naver.com/yyagency7"
            target="_blank"
            onClick={() =>
              gtag.event({
                action: "링크 클릭",
                category: "header",
                label: "블로그",
              })
            }
          >
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://blog.naver.com/yyagency7"
            target="_blank"
            onClick={() =>
              gtag.event({
                action: "링크 클릭",
                category: "header",
                label: "블로그링크",
              })
            }
          >
            Blog
          </a>
        </li>

        <li className="nav-item">
          <Link href="/projects">
            <a
              className="nav-link"
              onClick={() =>
                gtag.event({
                  action: "링크 클릭",
                  category: "header",
                  label: "PORTFOLIO",
                })
              }
            >
              Portfolio
            </a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/contact" activeClassName="active">
            <a
              className="nav-link"
              onClick={() =>
                gtag.event({
                  action: "링크 클릭",
                  category: "header",
                  label: "CONTACT",
                })
              }
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>

      <div className="others-options">
        <div className="burger-menu" onClick={toggleModal}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default NavbarInner;
