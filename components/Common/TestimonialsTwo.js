import React, { Component } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const OwlCarousel = dynamic(import("react-owl-carousel3"));

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
    "<i className='flaticon-right-chevron'></i>",
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
    },
  },
};

class TestimonialsTwo extends Component {
  _isMounted = false;
  state = {
    display: false,
  };

  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
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
                  “홈페이지를 맡기면서 디자인이 좀 감성적이면 좋겠다 생각하고
                  말씀 드렸는데 홈페이지가 너무 예쁘게 만들어져서 너무
                  만족스러워요. 고객 분들도 홈페이지가 예쁘다고
                  칭찬해주시네요.제작 과정 중 친절했던 윤은석 대표님에게
                  감사드려요.”
                </p>
                <div className="client-info">
                  <h3>커피파는 청년 고객님</h3>
                  <Image
                    src="/images/client-image/client1.png"
                    width={70}
                    height={70}
                    alt="image"
                  />
                </div>
              </div>

              <div className="single-feedback-item border">
                <p>
                  “온라인 사업을 시작하면서 막막했습니다. 어디서 부터 해야할지
                  막막했는데, 홈페이지부터 만들자 생각하고, 만난 YY AGENCY.
                  홈페이지 제작만 생각했는 데, 윤은석 대표님 철학이 너무
                  좋으세요. 홈페이지 제작은 시작일 뿐이고, 성공까지 함께
                  해나가자며 마케팅부터 사업전략까지 정말 많이 도와주셨어요.
                  너무 편하게 온라인 사업을 시작했고, 지금 사업이 너무 잘 되가고
                  있습니다. YY AGENCY 와 함께 오랫동안 좋은 인연 이어갔으면
                  좋겠어요.”
                </p>
                <div className="client-info">
                  <h3>이XX 고객님</h3>
                  <Image
                    src="/images/client-image/client4.png"
                    width={70}
                    height={70}
                    alt="image"
                  />
                </div>
              </div>

              <div className="single-feedback-item border">
                <p>
                  “신속 정확한 일처리에 감탄 중이에요 직원분들 다 본인 일처럼
                  꼼꼼하게 수익형 반응형 홈페이지를 만들어 주셔서 매출에 너무 큰
                  도움이 되고 있어요.”
                </p>
                <div className="client-info">
                  <h3>김XX 고객님</h3>
                  <Image
                    src="/images/client-image/client5.png"
                    width={70}
                    height={70}
                    alt="image"
                  />
                </div>
              </div>
              <div className="single-feedback-item border">
                <p>
                  “YY AGENCY 의 기술력의 한계는 어디까지인가? 예산 5000만원으로,
                  여러 스타트업 플랫폼 업체들과의 미팅을 했었지만, 제가 원하는
                  플랫폼을 만들기에는 불가능했습니다. 윤대표님 덕분에 최고의
                  플랫폼을 제작했고 이제 곧 서비스 유료화를 진행합니다.
                  감사합니다.”
                </p>
                <div className="client-info">
                  <h3>김XX 고객님</h3>
                  <Image
                    src="/images/client-image/client5.png"
                    width={70}
                    height={70}
                    alt="image"
                  />
                </div>
              </div>
              <div className="single-feedback-item border">
                <p>
                  “사실 마케팅적 도움은 기대 1도 안했습니다. 그냥 부가서비스
                  정도로만 생각. 하지만 정말 큰 도움을 받았고, 매출에도 큰
                  도움이 되었습니다. 인터넷 비즈니스의 파트너, YY AGENCY를 만난
                  건 제 사업에 큰 행운이었던 것 같아요”
                </p>
                <div className="client-info">
                  <h3>김XX 고객님</h3>
                  <Image
                    src="/images/client-image/client5.png"
                    width={70}
                    height={70}
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
