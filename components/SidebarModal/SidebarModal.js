import React, { Component } from 'react';
import Link from 'next/link';

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
                                    "사업을 시작하면서 제일 많은 고민인 홈페이지 제작 아직도 어렵게 하고 계신가요?"<br/>저희 YY AGENCY는
                                    대표님들의 고민을 해결해드립니다.
                                    앞선 기술력과 마케팅 전략으로 경영에 도움이 되는 홈페이지를
                                    제작해드리는  에이전시 입니다. 유지 및 보수까지 대표님의 사업의 날개를 달아드립니다. 
                    </p>
                  </div>
                </div>

                <div className="sidebar-instagram-feed">
                  <h2>Instagram</h2>
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <img
                          src="/images/blog-image/blog-image1.jpg"
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <img
                          src="/images/blog-image/blog-image2.jpg"
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <img
                          src="/images/blog-image/blog-image3.jpg"
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <img
                          src="/images/blog-image/blog-image4.jpg"
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <img
                          src="/images/blog-image/blog-image5.jpg"
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <img
                          src="/images/blog-image/blog-image6.jpg"
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <img
                          src="/images/blog-image/blog-image7.jpg"
                          alt="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <img
                          src="/images/blog-image/blog-image8.jpg"
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
                        <span className="main-color">010-7145-2679</span>
                        <span className="or">OR</span>
                        <span>yyagency77@gmail.com</span>
                      </h2>

                      <ul className="social">
                        
                        <li>
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
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank">
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