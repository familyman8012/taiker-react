import React, { Component } from 'react';
import Link from 'next/link';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-area-two ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <div className="section-title text-left">
                                    <span className="sub-title">YY AGENCY의 장점</span>
                                    <h2>맞춤 홈페이지 제작은 YY AGENCY</h2>

                                    <p>고객 맞춤 기능과 꼼꼼한 홈페이지 제작 기술이 여러분의 비지니스의 날개를 달아드립니다. </p>

                                    <p>막막하기만한 홈페이지 유지, 보수, 관리 YY AGENCY에서 간편하게 진행하세요. 마켓팅이 어려운 대표님들도 주목해주세요! YY AGENCY는 대표님들의 고민을 해결해드리겠습니다.맴버쉽 회원사를 위한 마케팅 강의 및 대표님들의 만남의 장이 될 수 있는 YY AGENCY.
                                    고객 만족 100% 대표님의 소중한 비지니스 저희 일처럼 최선을 다해 노력하겠습니다.홈페이지만을 위한 1회성 관계가 아닌 YY AGENCY 회원님들의 든든한 사업파트너가 되겠습니다. 
                                    </p>
                                </div>
    
                                {/* <div className="choose-btn">
                                    <Link href="/about2#">
                                        <a className="default-btn">
                                            Discover More <span></span>
                                        </a>
                                    </Link>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="choose-image">
                                <img src="/images/machine-learning/about3.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChooseUs;