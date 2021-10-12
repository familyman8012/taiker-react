    import React, { Component } from 'react';
    import dynamic from 'next/dynamic';
    const OwlCarousel = dynamic(import('react-owl-carousel3'));

    const options = {
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        mouseDrag: false,
        touchDrag: false,
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
                        “컴푸터를 잘 못해서 홈페이지 관리에 어려움을 느꼈는데 YY
                        Agency에서 교육도 너무 친절하게 해주신 덕분에 저희 가게
                        매출도 많은 도움이 되었어요 감사해요”
                        </p>
                        <div className="client-info">
                        <h3>커피파는 청년 고객님</h3>
                        <img src="/images/client-image/client1.png" alt="image" />
                        </div>
                    </div>

                    <div className="single-feedback-item border">
                        <p>
                        "YY Agency 직원분들 너무 친절 하세요. 처음 하는 장사라서
                        너무 걱정 많았는데 덕분에 너무 이쁘고 편리한 반응형
                        웹사이트가 나와서 너무 잘 이용하고 있어요”
                        </p>
                        <div className="client-info">
                        <h3>살롱하는새댁 고객님</h3>
                        <img src="/images/client-image/client2.png" alt="image" />
                        </div>
                    </div>

                    <div className="single-feedback-item border">
                        <p>
                        “마켓팅 교육 너무 좋아요. 그리고 여러 대표님들과 교류 할
                        수 있는 컨포런스도 너무 도움이 많이 되고 있어요 너무 너무
                        감사드려요~~^^”
                        </p>
                        <div className="client-info">
                        <h3>김XX원장 고객님</h3>
                        <img src="/images/client-image/client3.png" alt="image" />
                        </div>
                    </div>

                    <div className="single-feedback-item border">
                        <p>
                        “YY Agency 덕분에 너무 편하게 온라인 사업을 시작 할 수
                        있어서 너무 좋아요. 직원분들 다 너무 친절하게 알려주시고
                        싸이트도 너무 이쁘고 관리도 너무 편하네요”
                        </p>
                        <div className="client-info">
                        <h3>이XX 고객님</h3>
                        <img src="/images/client-image/client4.png" alt="image" />
                        </div>
                    </div>

                    <div className="single-feedback-item border">
                        <p>
                        “신속 정확한 일처리에 감탄 중이에요 직원분들 다 본인
                        일처럼 꼼꼼하게 수익&nap;반응형 웹페이지를 만들어 주셔서
                        매출에 너무 큰 도움이 되고 있어요.”
                        </p>
                        <div className="client-info">
                        <h3>김XX 고객님</h3>
                        <img src="/images/client-image/client5.png" alt="image" />
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