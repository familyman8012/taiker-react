import React, { Component } from "react";
import Link from "next/link";

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
                  <a>프리미엄 반응형 웹사이트</a>
                </h3>
                <p>
                  모바일, 태블릿, 웹에서 완벽한 반응형 홈페이지를 제공합니다.
                  완벽한 웹표준과 Semantic Web관점으로 싸이트를 제작하여
                  크로스브라우징에 탁월합니다.
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
                  <a>안전한 간편로그인, 로그인 </a>
                </h3>
                <p>
                  이메일 가입/로그인 기능은 물론 카카오톡 네이버 아이디 구글
                  간편로그인으로 새로운 회원을 모집해보세요.
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
                  <a>안전한 결제 시스템 설치</a>
                </h3>
                <p>
                  쇼핑몰 또는 결제 시스템이 필요한 모든 업종의 안전한 결제
                  시스템을 설치해드립니다.
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
                  <a>스마트 2.0 YY 위즈윅 에디터</a>
                </h3>
                <p>
                  입력시 볼드, 이틀릭, 폰트, 이모지, 색상등은 물론, 이미지
                  업로드, 영상 임베드가 가능한 사용성을 극대화한 위즈윅 에디터로
                  편리하게 상세페이지, 게시물 제작, 커뮤니티 기능을 사용하실 수
                  있습니다.
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
                  <a>구글 ads 및 애널리스틱</a>
                </h3>
                <p>
                  홈페이지에 누가 어떤 키워드로 유입했고, 체류시간이 어떻게
                  되며, 잠재고객은 누구인지에 대한 분석을 하기 위해선, 구글
                  애널리스틱이 설치되어야 합니다. 또한 수천개의 싸이트에 저렴한
                  가격으로 높은 효율로 마케팅을 집행하고 싶다면 구글 ads 를 다룰
                  수 있어야 합니다. 명품 수익 &amp; 반응형 홈페이지 이상의
                  고객분들에게 설치 및 교육을 진행해드립니다.
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
                  <a>SEO최적화</a>
                </h3>
                <p>
                  Search Engine Optimization은 마케팅 관점에서 매우 중요합니다.
                  중요하면서도 가장 기본이지만 Meta 태그외 얼마나 웹표준을
                  준수해서 제작되었는지, seo 요소들을 제대로 구현했는지가
                  중요합니다. YY AGENCY 는 제작단계에서 부터 SEO 친화적 싸이트를
                  제작함으로써 SEO 최적화를 돕고 있습니다.
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
                  <a>쇼핑몰 기능</a>
                </h3>
                <p>
                  재고관리, 상품관리, 주문관리, 배송관리, 정산관리, 예약관리,
                  일간 주간 월간 통계기능등을 쉽고 편리하게 사용하실 수
                  있습니다.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one gray-bg">
                <div className="icon">
                  <i className="bx bx-link"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <a>포털사이트 사이트 등록</a>
                </h3>
                <p>네이버 서치어드바이저 및 구글 웹마스터도구 등록</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-card-one gray-bg">
                <div className="icon">
                  <i className="bx bx-list-plus"></i>
                  <i className="bx bxs-badge-check check-icon"></i>
                </div>
                <h3>
                  <a>만족스러운 유지보수 제공</a>
                </h3>
                <p>
                  만족스러운 유지보수 제공은 물론, 직접 운영가능하실 수 있도록
                  교육도 진행합니다.
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
                  <a>퍼포먼스 마케팅 진행</a>
                </h3>
                <p>
                  네이버 광고, 구글 광고, 인스타 광고, 페이스북 광고 집행 셋팅
                  및 진행을 도와드립니다. 지속적인 마케팅을 할 수 있도록
                  필수적인 핵심기능을 빠르게 교육도 시켜드려, 단기적인 성장은
                  물론 장기적 성장을 하실 수 있도록 마케팅 프로그램이
                  준비되어있습니다.
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
                  <a>SNS 마케팅</a>
                </h3>
                <p>
                  퍼포먼스 마케팅에 대한 데이터 이해와 셋팅, 진행은 물론 컨텐츠
                  마케팅에서의 핵심적인 부분들에 대한 이해를 도와 직접적 광고는
                  물론, 브랜딩 홍보를 위한 Insight 를 드리고 있습니다.
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
                  <a>회원사간의 교류의장</a>
                </h3>
                <p>
                  YY AGENCY 은 함께하는 대표님들의 동반자로써 함께하는 모든
                  대표님들의 성공을 위한 다양한 네트워킹 파티 및 세미나, 워크샵
                  등을 주관, 주최합니다.
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
