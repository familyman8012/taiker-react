import React, { Component } from "react";
import Link from "next/link";
import * as gtag from "../../utils/gtag";

class PricingStyleThree extends Component {
  render() {
    return (
      <section className="pricing-area-two pt-100 pb-70 bg-f4f7fe">
        <div className="container">
          <div className="section-title">
            <h2>홈페이지 제작 비용</h2>
            <p class="desc">
              대표님들이 원하는 모든 기능을 기대이상의 합리적 가격으로
              제공합니다.
              <br /> 모든 제작은 맞춤형으로 제작되는 만큼 무료 컨설팅으로
              문의주시면
              <br /> 자세하고 꼼꼼하게 안내해드리겠습니다.
              <br /> 대표님들의 상황에 따라, 워드프레스, IMWEB은 물론
              <br />
              REACT, NEXTJS, NODEJS 등의 최신 기술 스택을 최대한의 퍼포먼스로,
              <br />
              홈페이지 및 플랫폼을 제작해드리고 있습니다.
            </p>
            {/* <p>.</p> */}
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-pricing-table center">
                <div className="pricing-header">
                  {/* <ul className="pricing-tag">
                                                        <li>#심플</li>
                                                        <li>#가성비</li>
                                                        <li>#훌륭한</li>
                                                      </ul> */}
                  <span className="tit_product">심플하지만 훌륭한</span>
                  <h3>Essential 홈페이지</h3>

                  <div className="pricing-detail">
                    {/* <span>
                                                          간단한 정보 전달을
                                                          하기 좋은 가성비가
                                                          좋은 홈페이지 입니다.
                                                        </span> */}
                  </div>
                </div>

                {/* <div className="price">
                  <sup></sup> 99만원
                  <sub></sub>
                </div> */}
                <div className="box_product_desc">
                  심플하지만 훌륭한 홈페이지를 원하는
                  <br /> 대표님들을 위한 홈페이지입니다.
                  <br /> 브랜드 및 기업용 홈페이지을 위한
                  <br />
                  홈페이지로 추천합니다.
                </div>

                {/* <ul className="pricing-features">
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    반응형 웹페이지
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    SSL설치
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    대표님들에게 필요한 핵심 페이지들
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    SEO 최적화
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    다이나믹 이펙트
                  </li>
                </ul> */}

                <div className="btn-box">
                  <a
                    className="default-btn"
                    href="https://pf.kakao.com/_cxbjzb/chat"
                    target="_blank"
                    rel="noopner noreferrer"
                    onClick={() =>
                      gtag.event({
                        action: "링크 클릭",
                        category: "제작문의",
                        label: "99만원 패키지",
                      })
                    }
                  >
                    제작 문의
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-pricing-table center">
                <div className="pricing-header">
                  <span className="tit_product">고객들이 더 좋아하는</span>
                  <h3>명품 반응형 웹사이트</h3>
                </div>

                {/* <div className="price">
                  <sup></sup> 280만원 <sub></sub>
                </div> */}
                <div className="box_product_desc">
                  최상의 UI/UX, 예쁘고 트렌디한 디자인,
                  <br />
                  홈페이지 이용자분들에게 최상의 경험을 제공합니다.
                  <br />
                  REACT/NEXTJS 의 최상의 웹제작 기술
                  <br /> 고객이 원하는 그 이상의 홈페이지
                </div>

                {/* <ul className="pricing-features">
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    반응형 웹사이트
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    SSL설치
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    중형싸이트에 필요한 모든 페이지들
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    Goole Ad/Naver 파워링크 세팅
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    로얄 키워드 세팅
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    포털사이트 사이트 등록
                  </li>
                </ul> */}

                <div className="btn-box">
                  <a
                    className="default-btn"
                    href="https://pf.kakao.com/_cxbjzb/chat"
                    target="_blank"
                    rel="noopner noreferrer"
                    onClick={() =>
                      gtag.event({
                        action: "링크 클릭",
                        category: "제작문의",
                        label: "280만원 패키지",
                      })
                    }
                  >
                    제작 문의
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-pricing-table center">
                <div className="pricing-header">
                  <span className="tit_product">
                    홈페이지에 마케팅의 날개를 다는
                  </span>
                  <h3>명품 반응형+마케팅</h3>
                </div>

                {/* <div className="price">
                  <sup></sup> 350만원 <sub></sub>
                </div> */}
                <div className="box_product_desc">
                  명품 홈페이지 제작은 물론,
                  <br />
                  홈페이지에 마케팅의 날개를 달아드립니다.
                  <br />
                  퍼포먼스 마케팅, SNS 마케팅에 대한 셋팅 및 교육
                  <br />
                  브랜드 가치 및 매출을 높이고 싶은 분들이라면 주목!
                  <br />
                </div>
                {/* <ul className="pricing-features">
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    반응형 웹페이지
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    SEO 최적화
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    SSL 설치
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    Goole Ad/Naver 파워링크 세팅
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    로얄 키워드 세팅
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    블로그 마케팅 교육 1회
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    영상 편집 기본 교육 1회
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    인스타 마케팅 교육 1회
                  </li>
                </ul> */}

                <div className="btn-box">
                  <a
                    className="default-btn"
                    href="https://pf.kakao.com/_cxbjzb/chat"
                    target="_blank"
                    rel="noopner noreferrer"
                    onClick={() =>
                      gtag.event({
                        action: "링크 클릭",
                        category: "제작문의",
                        label: "350만원 패키지",
                      })
                    }
                  >
                    제작 문의
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-pricing-table center">
                <div className="pricing-header">
                  <span className="tit_product">매출 극대화를 위한</span>
                  <h3>수익형 E-BIZ 반응형 쇼핑몰</h3>
                </div>

                {/* <div className="price">
                  <sup></sup> 500만원 <sub></sub>
                </div> */}
                <div className="box_product_desc">
                  매출을 극대화 하고 싶은 분들을 위해
                  <br />
                  인터넷 비즈니스를 위한 All in One 솔루션 제공
                  <br />
                  쇼핑몰 기능과 마케팅 최적화 원고 제공
                  <br />
                  매월 주기적인 네트워킹
                </div>
                {/* <ul className="pricing-features">
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    반응형홈페이지 웹&amp;모바일 호환형
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    SEO최적화
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    SSL설치
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    Goole Ad/ Naver 파워링크 세팅
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    SNS 마케팅 (블로그,인스타,영상편집)교육 월1회
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    PG 서비스 제공
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    간편 로그인(카카오 네이버 로그인)
                  </li>
                </ul> */}

                <div className="btn-box">
                  <Link href="/contact">
                    <a
                      className="default-btn"
                      href="https://pf.kakao.com/_cxbjzb/chat"
                      target="_blank"
                      rel="noopner noreferrer"
                      onClick={() =>
                        gtag.event({
                          action: "링크 클릭",
                          category: "제작문의",
                          label: "500만원 패키지",
                        })
                      }
                    >
                      제작 문의
                      <span></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-pricing-table center">
                <div className="pricing-header">
                  <span className="tit_product">기업의 가치를 높이는</span>
                  <h3>품격 높은 기업형 반응형 홈페이지</h3>
                </div>

                {/* <div className="price">
                  <sup></sup> 700만원 <sub></sub>
                </div> */}
                <div className="box_product_desc">
                  기업의 품격을 높여주는 기업형 홈페이지입니다.
                  <br />
                  기업의 브랜드 가치를 높이고,
                  <br />
                  충성 고객 및 직원들을 위한 맞춤형 기능을 제공합니다.
                  <br />
                  국내 최고의 IT 사후 서비스 및 교육을 제공합니다.
                </div>
                {/* <ul className="pricing-features">
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    SEO 최적화, SSL설치
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    간편로그인(네이버/ 카카오톡)
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    최상의 기능을 가진 게시판,
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    Google Ad/Naver 파워링크 설정
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    관리자 페이지 제공
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    PG 시스템 제공
                  </li>

                  <li>
                    <i className="bx bxs-badge-check"></i>
                    퍼포먼스 마케팅 교육 월1회
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    그래프, 지도 등 맞춤 기능제공
                  </li>
                </ul> */}

                <div className="btn-box">
                  <a
                    className="default-btn"
                    href="https://pf.kakao.com/_cxbjzb/chat"
                    target="_blank"
                    rel="noopner noreferrer"
                    onClick={() =>
                      gtag.event({
                        action: "링크 클릭",
                        category: "제작문의",
                        label: "700만원 패키지",
                      })
                    }
                  >
                    제작 문의
                    <span></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-pricing-table center">
                <div className="pricing-header">
                  <span className="tit_product">스타트업의 꿈을 구현하는</span>
                  <h3>PLATFORM PROJECT</h3>
                </div>

                {/* <div className="price">
                  <sup></sup> 1000만원 부터 <sub> </sub>
                </div> */}
                <div className="box_product_desc">
                  스타트업 대표님들이 원하는 모든 것들을
                  <br />
                  합리적인 가격과 최상의 기술로 제작해드립니다.
                  <br />
                  국내 최고의 기술력으로
                  <br />
                  모든 프로젝트를 최상의 품질로 제작합니다.
                </div>
                {/* <ul className="pricing-features">
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    NextJs, React, Nodejs
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    고객 디자인 세밀히 반영
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    간편 로그인, 이메일 로그인, 실명인증등
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    푸쉬/알림/관리자 / 업체 기능 구현
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    위지윅 에디터, 그래프기능
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    O2O / 커뮤니티 기능 관련
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>
                    캘린더, 드래그/드롭 위치 저장 등
                  </li>
                  <li>
                    <i className="bx bxs-badge-check"></i>그 밖의 모든 기능
                  </li>
                </ul> */}

                <div className="btn-box">
                  <a
                    className="default-btn"
                    href="https://pf.kakao.com/_cxbjzb/chat"
                    target="_blank"
                    rel="noopner noreferrer"
                    onClick={() =>
                      gtag.event({
                        action: "링크 클릭",
                        category: "제작문의",
                        label: "1000만원 패키지",
                      })
                    }
                  >
                    제작 문의
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Image */}
        <div className="shape-img7">
          <img src="/images/shape/shape7.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.svg" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.png" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.png" alt="image" />
        </div>
        <div className="shape-img6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="shape-img9">
          <img src="/images/shape/shape9.png" alt="image" />
        </div>
        <div className="shape-img10">
          <img src="/images/shape/shape10.png" alt="image" />
        </div>
      </section>
    );
  }
}

export default PricingStyleThree;
