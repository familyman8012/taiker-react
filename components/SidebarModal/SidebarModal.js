import React, { Component } from 'react';
import Link from 'next/link';
import * as gtag from "../../utils/gtag";

export class SidebarModal extends Component {

    state = {
        modal: false
    };
 
    closeModal = () => {
        this.props.onClick(this.state.modal);
    }

    render() {
        return (
          <>
            <div className={`sidebar-modal ${this.props.active}`}>
              <div className="sidebar-modal-inner">
                <div className="sidebar-about-area">
                  <div className="title">
                    <h2>About Us</h2>
                    <p>
                      "사업을 시작하면서 제일 많은 고민인 홈페이지 제작 아직도
                      어렵게 하고 계신가요?"
                      <br />
                      저희 YY AGENCY는 대표님들의 고민을 해결해드립니다. 앞선
                      기술력과 마케팅 전략으로 경영에 도움이 되는 홈페이지를
                      제작해드리는 에이전시 입니다. 유지 및 보수까지 대표님의
                      사업의 날개를 달아드립니다.
                    </p>
                  </div>
                </div>

                <div className="sidebar-instagram-feed">
                  <h2>Instagram</h2>
                  <ul>
                    {/* <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <img
                          src="/images/instagram-image/instagram-image1.jpg"
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <img
                          src="/images/instagram-image/instagram-image2.jpg"
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <img
                          src="/images/instagram-image/instagram-image3.jpg"
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <img
                          src="/images/instagram-image/instagram-image4.jpg"
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <img
                          src="/images/instagram-image/instagram-image5.jpg"
                          alt="image"
                        />
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        onClick={() =>
                          gtag.event({
                            action: "링크 클릭",
                            category: "Sidebar",
                            label: "Instagram sidebar img1",
                          })
                        }
                      >
                        <img
                          src="/images/instagram-image/insta-img1.jpg"
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        onClick={() =>
                          gtag.event({
                            action: "링크 클릭",
                            category: "Sidebar",
                            label: "Instagram sidebar img2",
                          })
                        }
                      >
                        <img
                          src="/images/instagram-image/insta-img2.png"
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        onClick={() =>
                          gtag.event({
                            action: "링크 클릭",
                            category: "Sidebar",
                            label: "Instagram sidebar img3",
                          })
                        }
                      >
                        <img
                          src="/images/instagram-image/insta-img3.png"
                          alt="image"
                        />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-contact-area">
                  <div className="contact-info">
                    <div className="contact-info-content">
                      <h2>
                        <span className="main-color">
                          <a
                            href="tel:01068078707"
                            onClick={() =>
                              gtag.event({
                                action: "링크 클릭",
                                category: "Sidebar",
                                label: "Sidebar tel",
                              })
                            }
                          >
                            010-6807-8707
                          </a>
                        </span>{" "}
                        <br /> &amp;
                        <br/>
                        <span className="main-color">
                          {" "}
                          <a
                            href="tel:01068078707"
                            onClick={() =>
                              gtag.event({
                                action: "링크 클릭",
                                category: "Sidebar",
                                label: "Sidebar tel",
                              })
                            }
                          >
                            010-7145-2679
                          </a>
                        </span>
                        <span className="or">OR</span>
                        <a
                          href="tel:01068078707"
                          onClick={() =>
                            gtag.event({
                              action: "링크 클릭",
                              category: "Sidebar",
                              label: "Sidebar tel",
                            })
                          }
                        >
                          <span>yyagency7@gmail.com</span>
                        </a>
                      </h2>

                      <ul className="social">
                        {/* <li>
                          <a href="https://www.youtube.com/" target="_blank">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li> */}
                        <li>
                          <a
                            href="https://www.instagram.com/yyagency_webpage"
                            target="_blank"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <span
                  onClick={this.closeModal}
                  className="close-btn sidebar-modal-close-btn"
                >
                  <i className="flaticon-close"></i>
                </span>
              </div>
            </div>
          </>
        );
    }
}

export default SidebarModal;