    import React, { Component } from 'react';
    import dynamic from 'next/dynamic';
    const OwlCarousel = dynamic(import('react-owl-carousel3'));

    const options = {
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        mouseDrag:true,
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

    class TestimonialsTwo extends Component {
        
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
                <section className="feedback-area feedback-area-two ptb-100">
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
                      <div className="single-feedback-item border">
                        <p>
                          "홈페이지 맛집이라고 할까요? 홈페이지 퀄리티는 정말
                          미쳤고, 사후 관리가 정말 끝내줍니다. 만들고 나서,
                          지속적인 A/S 는 물론이고, 매달 YY AGENCY 를 이용하시는
                          대표님들에게 마켓팅 교육까지 한달에 한번씩 하고 있는데
                          너무 좋아요. 사업하다보면 내가 사업을 잘하고 있나
                          걱정되는데 YY AGENCY 세미나 및 네트워킹 파티를 통해,
                          다른 대표님들과 교류를 하면서 많이 배우고, 많이
                          얻습니다. 대표님들 모두 좋으시고, 이런 모임의 장을
                          만들어주신 YY AGENCY. 감사드려요~~^^”
                        </p>
                        <div className="client-info">
                          <h3>김XX원장 고객님</h3>
                          <img
                            src="/images/client-image/client3.png"
                            alt="image"
                          />
                        </div>
                      </div>

                      <div className="single-feedback-item border">
                        <p>
                          "예전에 다른 업체에 홈페이지를 맡겼었는 데, 너무
                          구식이고, 만들고 나서도 그냥 방치해서 이번에 홈페이지
                          제작을 맡기면서 많이 망설였습니다.그런데 임유진
                          실장님을 만나고 나서 생각의 전환을 할 수 있었어요.
                          단순하게 그냥 있어야 있는 홈페이지가 아닌 매출에
                          도움이 되는 마케팅으로써의 홈페이지를 제안해주셨고,
                          덕분에 지금 매출이 오프라인으로만 가게를 운영할 때의
                          거의 2배정도가 나오고 있습니다.”
                        </p>
                        <div className="client-info">
                          <h3>살롱하는새댁 고객님</h3>
                          <img
                            src="/images/client-image/client2.png"
                            alt="image"
                          />
                        </div>
                      </div>
                      <div className="single-feedback-item border">
                        <p>
                          “홈페이지를 맡기면서 디자인이 좀 감성적이면 좋겠다
                          생각하고 말씀 드렸는데 홈페이지가 너무 예쁘게
                          만들어져서 너무 만족스러워요. 고객 분들도 홈페이지가
                          예쁘다고 칭찬해주시네요.제작 과정 중 친절했던 윤은석
                          대표님에게 감사드려요.”
                        </p>
                        <div className="client-info">
                          <h3>커피파는 청년 고객님</h3>
                          <img
                            src="/images/client-image/client1.png"
                            alt="image"
                          />
                        </div>
                      </div>

                      <div className="single-feedback-item border">
                        <p>
                          “온라인 사업을 시작하면서 막막했습니다. 어디서 부터
                          해야할지 막막했는데, 홈페이지부터 만들자 생각하고,
                          만난 YY AGENCY. 홈페이지 제작만 생각했는 데, 윤은석
                          대표님 철학이 너무 좋으세요. 홈페이지 제작은 시작일
                          뿐이고, 성공까지 함께 해나가자며 마케팅부터
                          사업전략까지 정말 많이 도와주셨어요. 너무 편하게
                          온라인 사업을 시작했고, 지금 사업이 너무 잘 되가고
                          있습니다. YY AGENCY 와 함께 오랫동안 좋은 인연
                          이어갔으면 좋겠어요.”
                        </p>
                        <div className="client-info">
                          <h3>이XX 고객님</h3>
                          <img
                            src="/images/client-image/client4.png"
                            alt="image"
                          />
                        </div>
                      </div>

                      <div className="single-feedback-item border">
                        <p>
                          “신속 정확한 일처리에 감탄 중이에요 직원분들 다 본인
                          일처럼 꼼꼼하게 수익형 반응형 홈페이지를 만들어 주셔서
                          매출에 너무 큰 도움이 되고 있어요.”
                        </p>
                        <div className="client-info">
                          <h3>김XX 고객님</h3>
                          <img
                            src="/images/client-image/client5.png"
                            alt="image"
                          />
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

    export default TestimonialsTwo;