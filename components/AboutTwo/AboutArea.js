import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class AboutArea extends Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
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
                      <p>
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
                      </p>
                    </div>
                    <div className="about-text">
                      <h4>왜 YY AGENCY 인가?</h4>
                      <p>
                        국내 TOP TIER 급 개발진과 디자이너를 통한 최고의 기술과
                        세련된 디자인.
                        <br />
                        철저한 사후 관리, A/S SYSTEM,
                        <br /> 매 월, YY AGENCY를 이용해주신 대표님들을 위한 비지니스 관련 세미나 및 워크샵 제공
                        <br /> 대표님들을 위한 네트워킹 파티를 통한 대표님들간의 넓은 인맥 학보
                        <br /> YY AGENCY 는 홈페이지 제작은 물론, 고객님들의 성공과 함께 합니다.
                      </p>
                    </div>
                    <div className="about-text">
                      <h4>윤은석대표 이력</h4>
                      <p>
                        2009 보건복지부, 공공보건포털, 20 10 LG전자 18개 브랜드
                        사이트 구축, 운영 2011. 삼성SDS 엑스프라임,
                        자생한방병원, DAUM, 대우증권 반응형웹구축, 삼성전자
                        80개국 P3 웹접근성 가이드 제작/컨설팅, 2012.
                        현대스위스저축은행, 현대카드마이비즈니스 포털 2013~2018.
                        세이클럽, 세이큐피트, 빅터, 아자르, 2019 롯데백화점,
                        세이브더칠드런등등 2020~2021 능이소프트 프론트개발 2021
                        마인드케어센터 스타트업 CTO + 풀스택개발자
                      </p>
                    </div>
                    <div className="about-text">
                      <h4>YY AGENCY의 향후 목표</h4>
                      <p>
                        YY AGENCY 는 단순히 홈페이지 제작에만 머무는 것이 아닌,
                        고객님들의 사업의 성공을 함께 고민하고, 함께 성장하는 파트너로써,
                        고객님들의 사업의 성공에 대한 모든 솔루션을 제공할 수 있는 회사로써의 성장을 목표로 하고 있습니다.
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