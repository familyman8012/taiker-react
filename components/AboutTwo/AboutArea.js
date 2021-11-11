import React, { Component } from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

class AboutArea extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <section className="about-area-two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-image">
                <img
                  src="/images/about-img2.jpg"
                  alt="image"
                  className="rounded-10"
                />

                <div className="solution-video">
                  {/* <div
                        onClick={(e) => {
                          e.preventDefault();
                          this.openModal();
                        }}
                        className="video-btn popup-youtube"
                      >
                        <i className="flaticon-play-button"></i>
                      </div> */}
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content">
                <div className="section-title text-left">
                  <span className="sub-title">About Us</span>
                  <h2>
                    최고의 기술과 트랜디한 디자인
                    <br /> YY AGENCY{" "}
                  </h2>
                  {/* <p>
                        기존 레거시한 제작은 물론, NEXTJS, React 등 최신 모던
                        자바스크립트 프레임워크를 통한 제작까지, 최고의 기술을
                        보유한 YY AGENCY.
                        <br /> 단순하게 예쁘기만 한 디자인이 아닌 USER
                        EXPERIANCE를 생각하는 디자인.
                        <br />
                        다각적 전략적인 온라인 비지니스 컨설팅까지. <br />
                        새로운 트랜드를 만들어 가는 YY AGENCY, 여러분의
                        비지니스를 위해 항상 최선을 다해 맞춤 홈페이지를
                        제작해드립니다.{" "}
                      </p> */}
                </div>
                <div className="about-text">
                  <h4>왜 YY AGENCY 인가?</h4>
                  <p>
                    10년 이상의 고급 개발자, 디자이너를 통해 최고의 기술과
                    세련된 디자인.
                    <br />
                    철저한 사후 관리, A/S SYSTEM, 만족스러운 유지보수를
                    제공합니다.
                    <br /> 매 월, YY AGENCY를 이용해주신 대표님들을 위한
                    비지니스 관련 세미나 및 워크샵 제공
                    <br /> 대표님들을 위한 네트워킹 파티를 통한 대표님들간의
                    넓은 인맥 학보
                    <br /> YY AGENCY 는 홈페이지 제작은 물론, 고객님들의 성공과
                    함께 합니다.
                  </p>
                </div>
                <div className="about-text">
                  <h4>윤은석대표 이력</h4>
                  <p>
                    15년차 풀스택 개발자 출신으로, REACT, NEXTJS, NODEJS, AWS
                    기반 위주로 웹을 만들어나가는 것을 즐기고 있습니다. LG,
                    삼성, 롯데, 현대카드, 대우증권등 다양한 대기업 프로젝트와
                    공공기관 프로젝트들을 주로 진행하던 중, 자체 서비스 개발 및
                    VC 를 통한 투자유치를 하는 스타트업 사업을 시작했습니다.
                    다른 회사의 스타트업 대표님들과의 교류 속에서 스타트업
                    회사들의 구현단계, 개발에 대한 어려움을 알게 되었고, 그런
                    어려움을 덜어드리고자 YY AGENCY를 설립, 스타트업과 소상공인
                    분들을 위한 서비스를 제공하게 되었습니다. YY AGENCY를 설립
                    이후 좋은 개발자분들, 디자이너분들을 모셔 YY AGENCY에서
                    즐겁게 경영 + 개발을 하고 있습니다.
                  </p>
                </div>
                <div className="about-text">
                  <h4>YY AGENCY의 향후 목표</h4>
                  <p>
                    최상의 USER EXPERIENCE를 위한 홈페이지 및 플랫폼 제작은
                    물론, 제작 이후 사후 마케팅관리를 통해 대표님들의 꿈을
                    현실로 이루는데 도움이 되는 에이젼시가 되겠습니다. 또한 단순
                    에이젼시가 아닌 같은 꿈을 꾸는 스타트업으로써 네트워킹 파티
                    및 적극적 교류를 만들어 함께 하는 스타트업 및 소상공인
                    대표님들 모두가 성공할 수 있도록 돕는 것이 저희의 최대
                    목표입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* If you want change the video need to update below videoID */}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="szuchBiLrEM"
          onClose={() => this.setState({ isOpen: false })}
        />
      </section>
    );
  }
}

export default AboutArea;
