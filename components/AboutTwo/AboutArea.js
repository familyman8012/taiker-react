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
                      <h2>믿을 수 있는 실력과 트랜디한 YY AGENCY </h2>
                      <p>
                        최고의 기술을 가지고 새로운 트랜드를 만들어 가는 YY
                        AGENCY, 여러분의 비지니스를 위해 항상 최선을 다해 맞춤
                        홈페이지를 제작해드립니다.{" "}
                      </p>
                    </div>
                    <div className="about-text">
                      <h4>왜 YY AGENCY 인가?</h4>
                      <p>
                        다양하고 고급진 홈페이지 제작 기술과 오랜 경험으로 고객
                        맞춤 홈페이지 제작이 가능합니다. 고객 여러분드의 편의와
                        홈페이지 유지를 위해 고객 맞춤 교육및 세미나를 진행하고
                        있습니다. 세미나를 통한 인적 네트워크도 넓히며 여러분의
                        비지니스의 성공을 YY AGENCY가 기원합니다.
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
                        고객 여러분들의 소중한 인연을 바탕으로 홈페이지 유지 및 보소를 포함한 대표님들의 소통이 장과 새로운 패러다임의 비지니스 지원센터 구축을 목표로 하고 있습니다.
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