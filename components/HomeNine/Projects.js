import React, { Component } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import * as gtag from "../../utils/gtag";
import Image from "next/image";

class Projects extends Component {
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init();
  }
  render() {
    return (
      <div className="works-area ptb-100">
        <div className="container-fluid">
          <div className="section-title">
            <h2>Our portfolio</h2>
            <span>클리하면 해당 홈페이지로 이동합니다.</span>
          </div>
          <div className="row gx-4 gy-4">
            <div
              className="col-lg-6 col-sm-6 col-xl-12"
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
            >
              <a
                href="http://mindcarecenter.org"
                target="_blank"
                rel="noopner noreferrer"
                onClick={() =>
                  gtag.event({
                    action: "링크 클릭",
                    category: "포토폴리오",
                    label: "마인드케어",
                  })
                }
              >
                <div className="work-card">
                  <Image
                    src="/images/works/work1.png"
                    width={1458}
                    height={765}
                    alt="image"
                  />

                  <div className="content text-center">
                    <span className="s2">심리상담</span>
                    <h3 className="s2">마인드케어센터</h3>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="col-lg-6 col-sm-6 col-xl-12"
              data-aos="flip-left"
              data-aos-anchor-placement="top-bottom"
            >
              <a
                href="http://yymonkeys.dothome.co.kr/"
                target="_blank"
                rel="noopner noreferrer"
                onClick={() =>
                  gtag.event({
                    action: "링크 클릭",
                    category: "포토폴리오",
                    label: "International 유치원",
                  })
                }
              >
                <div className="work-card">
                  <Image
                    src="/images/works/work3.png"
                    width={1458}
                    height={765}
                    alt="image"
                  />

                  <div className="content text-center">
                    <span className="s2">학원/교육</span>
                    <h3 className="s2">International 유치원</h3>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="col-lg-6 col-sm-6 col-xl-12"
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
            >
              <a
                href="http://yymonkeys.dothome.co.kr/works/1/"
                target="_blank"
                rel="noopner noreferrer"
                onClick={() =>
                  gtag.event({
                    action: "링크 클릭",
                    category: "포토폴리오",
                    label: "HOPE 법무법인",
                  })
                }
              >
                <div className="work-card">
                  <img src="/images/works/work2.png" alt="image" />

                  <div className="content text-center">
                    <span className="s2">법무범인</span>
                    <h3 className="s2">HOPE 법무법인</h3>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="col-lg-6 col-sm-6 col-xl-12"
              data-aos="flip-right"
              data-aos-anchor-placement="top-bottom"
            >
              <a
                href="https://yymarket.imweb.me/"
                target="_blank"
                rel="noopner noreferrer"
                onClick={() =>
                  gtag.event({
                    action: "링크 클릭",
                    category: "포토폴리오",
                    label: "YY MARKET",
                  })
                }
              >
                <div className="work-card">
                  <img src="/images/works/work4.png" alt="image" />

                  <div className="content text-center">
                    <span className="s2">쇼핑</span>
                    <h3 className="s2">YY MARKET</h3>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="col-lg-6 col-sm-6 col-xl-12"
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
            >
              <a
                href="https://seolleim.kr/"
                target="_blank"
                rel="noopner noreferrer"
                onClick={() =>
                  gtag.event({
                    action: "링크 클릭",
                    category: "포토폴리오",
                    label: "설레임연구소",
                  })
                }
              >
                <div className="work-card">
                  <img src="/images/works/work5.png" alt="image" />

                  <div className="content text-center">
                    <span className="s2">서비스</span>
                    <h3 className="s2">설레임연구소</h3>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="col-lg-6 col-sm-6 col-xl-12"
              data-aos="fade-left"
              data-aos-anchor-placement="top-bottom"
            >
              <a
                href="http://yymonkeys.dothome.co.kr/works/3/"
                target="_blank"
                rel="noopner noreferrer"
                onClick={() =>
                  gtag.event({
                    action: "링크 클릭",
                    category: "포토폴리오",
                    label: "YY GYM",
                  })
                }
              >
                <div className="work-card">
                  <img src="/images/works/work6.png" alt="image" />

                  <div className="content text-center">
                    <span className="s2">GYM</span>
                    <h3 className="s2">YY GYM</h3>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="col-lg-6 col-sm-6 col-xl-12"
              data-aos="zoom-in-up"
              data-aos-anchor-placement="top-bottom"
            >
              <a
                href="https://keyterior.imweb.me/"
                target="_blank"
                rel="noopner noreferrer"
                onClick={() =>
                  gtag.event({
                    action: "링크 클릭",
                    category: "포토폴리오",
                    label: "Keyterior",
                  })
                }
              >
                <div className="work-card">
                  <img src="/images/works/work7.png" alt="image" />

                  <div className="content text-center">
                    <span className="s2">인테리어</span>
                    <h3 className="s2">Keyterior</h3>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="col-lg-6 col-sm-6 col-xl-12"
              data-aos="zoom-in-down"
              data-aos-anchor-placement="top-bottom"
            >
              <a
                href="https://nstyle.imweb.me/"
                target="_blank"
                rel="noopner noreferrer"
                onClick={() =>
                  gtag.event({
                    action: "링크 클릭",
                    category: "포토폴리오",
                    label: "N Style",
                  })
                }
              >
                <div className="work-card">
                  <img src="/images/works/work8.png" alt="image" />

                  <div className="content text-center">
                    <span className="s2">쇼핑</span>
                    <h3 className="s2">N STYLE</h3>
                  </div>
                </div>
              </a>
            </div>

            {/* <div className="col-lg-4 col-sm-6 col-xl-3">
                      <div className="work-card">
                          <img src="/images/works/work9.jpg" alt="image" />

                          <div className="content text-center">
                          <span>
                              <Link href="/projects3">
                              <a>App Development</a>
                              </Link>
                          </span>
                          <h3>
                              <Link href="/project-details">
                              <a>We provide any type of app development</a>
                              </Link>
                          </h3>

                          <Link href="/project-details">
                              <a className="work-btn">Read More</a>
                          </Link>
                          </div>
                      </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 col-xl-3">
                      <div className="work-card">
                          <img src="/images/works/work10.jpg" alt="image" />

                          <div className="content text-center">
                          <span>
                              <Link href="/projects3">
                              <a>Marketing</a>
                              </Link>
                          </span>
                          <h3>
                              <Link href="/project-details">
                              <a>We provide any type of marketing support</a>
                              </Link>
                          </h3>

                          <Link href="/project-details">
                              <a className="work-btn">Read More</a>
                          </Link>
                          </div>
                      </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 col-xl-3">
                      <div className="work-card">
                          <img src="/images/works/work11.jpg" alt="image" />

                          <div className="content text-center">
                          <span>
                              <Link href="/projects3">
                              <a>Email Marketing</a>
                              </Link>
                          </span>
                          <h3>
                              <Link href="/project-details">
                              <a>We provide any type of Email Marketing</a>
                              </Link>
                          </h3>

                          <Link href="/project-details">
                              <a className="work-btn">Read More</a>
                          </Link>
                          </div>
                      </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 col-xl-3">
                      <div className="work-card">
                          <img src="/images/works/work12.jpg" alt="image" />

                          <div className="content text-center">
                          <span>
                              <Link href="/projects3">
                              <a>Email Marketing</a>
                              </Link>
                          </span>
                          <h3>
                              <Link href="/project-details">
                              <a>We provide any type of Marketing & Reporting</a>
                              </Link>
                          </h3>

                          <Link href="/project-details">
                              <a className="work-btn">Read More</a>
                          </Link>
                          </div>
                      </div>
                      </div> */}

            {/* Pagination */}
            {/* <div className="col-lg-12 col-sm-12">
                        <div className="pagination-area">
                          <Link href="/projects3">
                            <a className="prev page-numbers">
                              <i className="fas fa-angle-double-left"></i>
                            </a>
                          </Link>
                          <span className="page-numbers current">1</span>
                          <Link href="/projects3">
                            <a className="page-numbers">2</a>
                          </Link>
                          <Link href="/projects3">
                            <a className="page-numbers">3</a>
                          </Link>
                          <Link href="/projects3">
                            <a className="page-numbers">4</a>
                          </Link>
                          <Link href="/projects3">
                            <a className="next page-numbers">
                              <i className="fas fa-angle-double-right"></i>
                            </a>
                          </Link>
                        </div>
                      </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
