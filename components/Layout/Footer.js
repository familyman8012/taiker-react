import React, { Component } from "react";
import Link from "next/link";
import * as gtag from "../../utils/gtag";
import Image from "next/image";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        <section className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <h3>제작 문의 및 SNS</h3>

                  <ul className="footer-contact-info">
                    <li>
                      <i className="flaticon-phone-call"></i>
                      <span>월~토 : 10:00AM - 06:00PM</span>
                      <a
                        href="tel:+8201071452679"
                        onClick={() =>
                          gtag.event({
                            action: "링크 클릭",
                            category: "Footer",
                            label: "phone call icon",
                          })
                        }
                      >
                        010-7145-2679
                      </a>
                    </li>
                    <li>
                      <i className="flaticon-email"></i>
                      <span>이메일 문의하기</span>
                      <a
                        href="yyagency7@gmail.com"
                        onClick={() =>
                          gtag.event({
                            action: "링크 클릭",
                            category: "Footer",
                            label: "Email 문의하기",
                          })
                        }
                      >
                        yyagency7@gmail.com
                      </a>
                    </li>
                    <li>
                      <i className="flaticon-social-media"></i>
                      <span>SNS</span>

                      <ul className="social">
                        {/* <li>
                              <a href="https://twitter.com/" target="_blank">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                              >
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li> */}
                        <li>
                          <a
                            href="https://www.instagram.com/yyagency_webpage/"
                            target="_blank"
                            onClick={() =>
                              gtag.event({
                                action: "링크 클릭",
                                category: "Footer",
                                label: "Instagram icon",
                              })
                            }
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        {/* <li>
                              <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                              >
                                <i className="fab fa-linkedin"></i>
                              </a>
                            </li> */}
                        {/* <li>
                              <a
                                href="https://www.youtube.com/"
                                target="_blank"
                              >
                                <i className="fab fa-youtube"></i>
                              </a>
                            </li> */}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget pl-5">
                  <h3>YY AGENCY 일상</h3>

                  <ul className="footer-instagram-post">
                    <li>
                      <a
                        href="https://www.instagram.com/yyagency_webpage/"
                        target="_blank"
                        onClick={() =>
                          gtag.event({
                            action: "링크 클릭",
                            category: "Footer",
                            label: "Instagram img",
                          })
                        }
                      >
                        <Image
                          src="/images/instagram-image/insta-img1.jpg"
                          width={120}
                          height={90}
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/yyagency_webpage/"
                        target="_blank"
                        onClick={() =>
                          gtag.event({
                            action: "링크 클릭",
                            category: "Footer",
                            label: "Instagram img2",
                          })
                        }
                      >
                        <Image
                          src="/images/instagram-image/insta-img2.jpg"
                          width={120}
                          height={90}
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/yyagency_webpage/"
                        target="_blank"
                        onClick={() =>
                          gtag.event({
                            action: "링크 클릭",
                            category: "Footer",
                            label: "Instagram img3",
                          })
                        }
                      >
                        <Image
                          src="/images/instagram-image/insta-img3.png"
                          width={120}
                          height={90}
                          alt="image"
                        />
                      </a>
                    </li>
                    {/* <li>
                          <a
                            href="https://www.instagram.com/yyagency_webpage/"
                            target="_blank"
                          >
                            <img
                              src="/images/instagram-image/insta-img4.jpg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/yyagency_webpage/"
                            target="_blank"
                          >
                            <img
                              src="/images/instagram-image/insta-img5.jpg"
                              alt="image"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/yyagency_webpage/"
                            target="_blank"
                          >
                            <img
                              src="/images/instagram-image/insta-img6.jpg"
                              alt="image"
                            />
                          </a>
                        </li> */}
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="copyright-area">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <p>
                        Copyright &copy;{currentYear} YY Agency. All rights
                        reserved{" "}
                        <a href="https://envytheme.com/" target="_blank">
                          YY Agnecy
                        </a>
                      </p>
                    </div>

                    <div className="col-lg-6 col-sm-6 col-md-6">
                      <ul>
                        <li>
                          <Link href="/terms-and-conditions">
                            <a>Terms &amp; Conditions</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy">
                            <a>Privacy Policy</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
          </div>
        </section>
      </>
    );
  }
}

export default Footer;
