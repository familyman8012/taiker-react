    import React, { Component } from 'react';
    import dynamic from 'next/dynamic';
    const OwlCarousel = dynamic(import('react-owl-carousel3'));

    const options = {
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        mouseDrag: true,
        touchDrag: true,
        navText: [
            "<i className='flaticon-left-chevron'></i>",
            "<i className='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: { 
                items: 2,
            },
            1200: {
                items: 3,
            },
            1550: {
                items: 4,
            }
        }
    }

    class Testimonials extends Component {
        
        _isMounted = false;
        state = {
            display:false
        }

        componentDidMount(){ 
            this._isMounted = true;
            this.setState({ display: true }) 
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        render() {
            return (
              <>
                <section className="feedback-area ptb-100 bg-color">
                  <div className="container">
                    <div className="section-title">
                      <span className="sub-title">Review</span>
                      <h2>고객 리뷰</h2>
                    </div>
                  </div>

                  {this.state.display ? (
                    <OwlCarousel
                      className="feedback-slides owl-carousel owl-theme"
                      {...options}
                    >
                      <div className="single-feedback-item">
                        <p>
                          “처음 사업을 시작 하면서 아무것도 모르고 시작했는데,
                          YY AGENCY덕분에 편안하고 만족스럽게 홈페이지를 제작 했고, 이후에
                          YY AGENCY 세미나를 통해 사업에 필요한 것들을 배우고 있어요.
                          너무 감사드려요 다음 세미나 벌써부터 기다려지네요”
                        </p>
                        <div className="client-info">
                          <img
                            src="/images/client-image/client1.png"
                            alt="image"
                          />
                          <h3>rlaXXXX 고객님</h3>
                        </div>
                      </div>

                      <div className="single-feedback-item">
                        <p>
                          “온라인 사업으로 확장을 할 수 있게 도와준 YY AGENCY
                          너무 감사합니다.^^ 덕분에 매출도 너무 많이 오르고 힘든
                          코로나 시기를 잘 이겨낼 수 있었어요. YY AGENCY 직원
                          분들도 너무 친절하세요.”
                        </p>
                        <div className="client-info">
                          <img
                            src="/images/client-image/client2.png"
                            alt="image"
                          />
                          <h3>이XX 고객님</h3>
                        </div>
                      </div>

                      <div className="single-feedback-item">
                        <p>
                          " 많은 곳을 알아 봤지만 홈페이지 유지
                          관리를 이렇게 철저하게 해주시고 혼자서도 운영가능 하게 알려 주시는 곳이 여기가
                          처음인거 같아요. 세미나 가면 또 많은 대표님들과 교류의
                          장을 열어 주셔서 너무 감사드려요”
                        </p>
                        <div className="client-info">
                          <img
                            src="/images/client-image/client3.png"
                            alt="image"
                          />
                          <h3>김XX 고객님</h3>
                        </div>
                      </div>

                      <div className="single-feedback-item">
                        <p>
                          “ 앞서가는 기술 정말 맞네요. 홈페이지 너무 잘 돌아가요
                          너무 감사합니다. 위트 있는 직원분들도 너무 좋네요
                          덕분에 좋은 시너지와 홈페이지 만들었어요 앞으로도 YY
                          AGENCY와 함께 가고 싶어요"
                        </p>
                        <div className="client-info">
                          <img
                            src="/images/client-image/client4.png"
                            alt="image"
                          />
                          <h3>황XX 고객님</h3>
                        </div>
                      </div>

                      <div className="single-feedback-item">
                        <p>
                          "홈페이지 진짜 잘 만들어 주시네요 너무 편하게 가게를
                          운영 할 수있게 되어서 너무 행복합니다. 요즘 코시국
                          덕분에 걱정 진짜 많이 하고 가게 홈페이지 제작 했는데
                          저희 한테 너무 필요한 일이였네요 또한 새로운
                          사업파트너가 생긴거 같아 너무 좋아요 혹시 온라인 사업
                          확장 고민하시는 분들 꼭 YY AGENCY에서 하세요 정말 많은
                          도움이 되었습니다.”
                        </p>
                        <div className="client-info">
                          <img
                            src="/images/client-image/client5.png"
                            alt="image"
                          />
                          <h3>dlekXXX고객님</h3>
                        </div>
                      </div>
                    </OwlCarousel>
                  ) : (
                    ""
                  )}
                </section>
              </>
            );
        }
    }

    export default Testimonials;