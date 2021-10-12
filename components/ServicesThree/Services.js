    import React, { Component } from 'react';
    import Link from 'next/link';

    class Services extends Component {
        render() {
            return (
              <section className="ptb-100">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6">
                      <div className="service-card-one gray-bg">
                        <div className="icon">
                          <i className="bx bx-mobile-alt"></i>
                          <i className="bx bxs-badge-check check-icon"></i>
                        </div>
                        <h3>
                          <Link href="/service-details">
                            <a>프리미엄 반응형 웹사이트</a>
                          </Link>
                        </h3>
                        <p>
                          스마트한 시대에 맞춰 프리미엄 반응형 웹사이트는
                          기본입니다. 모바일 PC 어디서든 최적화된 사이트를
                          제공합니다.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="service-card-one gray-bg">
                        <div className="icon">
                          <i className="bx bx-purchase-tag-alt"></i>
                          <i className="bx bxs-badge-check check-icon"></i>
                        </div>
                        <h3>
                          <Link href="/service-details">
                            <a>수익&amp;브랜딩 홈페이지 제작</a>
                          </Link>
                        </h3>
                        <p>
                          반응형 웹사이트를 넘어 수익과 브랜딩을 함께 <br />
                          진행 할 수 있는 새로운 홈페이지입니다.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="service-card-one gray-bg">
                        <div className="icon">
                          <i className="bx bxs-download"></i>
                          <i className="bx bxs-badge-check check-icon"></i>
                        </div>
                        <h3>
                          <Link href="/service-details">
                            <a>SSL 설치</a>
                          </Link>
                        </h3>
                        <p>
                          SSL은 홈페이지의 보안을 위한 인증서로써 홈페이지
                          보안을 위한 필수 요소입니다
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                      <div className="service-card-one gray-bg">
                        <div className="icon">
                          <i className="bx bx-like"></i>
                          <i className="bx bxs-badge-check check-icon"></i>
                        </div>
                        <h3>
                          <Link href="/service-details">
                            <a>SEO최적화</a>
                          </Link>
                        </h3>
                        <p>SEO 최적화로 등록을 도와드립니다.</p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                      <div className="service-card-one gray-bg">
                        <div className="icon">
                          <i className="bx bx-link"></i>
                          <i className="bx bxs-badge-check check-icon"></i>
                        </div>
                        <h3>
                          <Link href="/service-details">
                            <a>포털사이트 사이트 등록 및 파워링크 설정</a>
                          </Link>
                        </h3>
                        <p>
                          네이버 다음 구글에 사이트 등록및 파워링크 세팅을
                          도와드립니다.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                      <div className="service-card-one gray-bg">
                        <div className="icon">
                          <i className="bx bxs-keyboard"></i>
                          <i className="bx bxs-badge-check check-icon"></i>
                        </div>
                        <h3>
                          <Link href="/service-details">
                            <a>로얄 키워드 등록</a>
                          </Link>
                        </h3>
                        <p>
                          좋은 키워드를 넣어야 더 좋은 광고 효과를 낼 수
                          있습니다. 따라서 로얄키워드 등록을 도와드립니다.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                      <div className="service-card-one gray-bg">
                        <div className="icon">
                          <i className="bx bx-check-shield"></i>
                          <i className="bx bxs-badge-check check-icon"></i>
                        </div>
                        <h3>
                          <Link href="/service-details">
                            <a>안전한 간편로그인 </a>
                          </Link>
                        </h3>
                        <p>
                          카카오톡 네이버 아이디 구글 간편로그인으로 새로운
                          회원을 모집해보세요.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                      <div className="service-card-one gray-bg">
                        <div className="icon">
                          <i className="bx bx-credit-card"></i>
                          <i className="bx bxs-badge-check check-icon"></i>
                        </div>
                        <h3>
                          <Link href="/service-details">
                            <a>안전한 결제 시스템 설치</a>
                          </Link>
                        </h3>
                        <p>
                          쇼핑몰 또는 결제 시스템이 필요한 모든 업종의 안전한
                          결제 시스템을 설치해드립니다.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                      <div className="service-card-one gray-bg">
                        <div className="icon">
                          <i className="bx bx-list-plus"></i>
                          <i className="bx bxs-badge-check check-icon"></i>
                        </div>
                        <h3>
                          <Link href="/service-details">
                            <a>유지보수 교육 시스템</a>
                          </Link>
                        </h3>
                        <p>
                          홈페이지 유지 및 보수를 위한 교육 및 세미나를 진행하여
                          고객 여러분들의 어려움을 줄여드립니다.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                      <div className="service-card-one gray-bg">
                        <div className="icon">
                          <i className="bx bx-news"></i>
                          <i className="bx bxs-badge-check check-icon"></i>
                        </div>
                        <h3>
                          <Link href="/service-details">
                            <a>퍼포먼스 마케팅 교육</a>
                          </Link>
                        </h3>
                        <p>
                          사업에서 가장 막막한 마케팅 저희가 도와드립니다.동영상
                          편집, 인스타그램 마케팅,블로그 마케팅등의 퍼포먼스
                          마케팅 교육및 세미나를 진행합니다.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                      <div className="service-card-one gray-bg">
                        <div className="icon">
                          <i className="bx bx-group"></i>
                          <i className="bx bxs-badge-check check-icon"></i>
                        </div>
                        <h3>
                          <Link href="/service-details">
                            <a>회원사간의 교류의장</a>
                          </Link>
                        </h3>
                        <p>
                          혼자서 혹은 작은 인원으로 시작하시는 대표님들
                          걱정하지마세요. 저희 회원사 대표님들의 교류를 위한
                          만남의 장을 열겠습니다. 정기적으로 교류 하며
                          상생효과를 누려 보세요.
                        </p>
                      </div>
                    </div>

                    {/* Pagination */}
                    {/* <div className="col-lg-12 col-sm-12">
                      <div className="pagination-area">
                        <Link href="/services3#">
                          <a className="prev page-numbers">
                            <i className="fas fa-angle-double-left"></i>
                          </a>
                        </Link>
                        <Link href="/services3#">
                          <a className="page-numbers">1</a>
                        </Link>
                        <span className="page-numbers current">2</span>
                        <Link href="/services3#">
                          <a className="page-numbers">3</a>
                        </Link>
                        <Link href="/services3#">
                          <a className="page-numbers">4</a>
                        </Link>
                        <Link href="/services3#">
                          <a className="next page-numbers">
                            <i className="fas fa-angle-double-right"></i>
                          </a>
                        </Link>
                      </div>
                    </div> */}
                  </div>
                </div>
              </section>
            );
        }
    }

    export default Services;