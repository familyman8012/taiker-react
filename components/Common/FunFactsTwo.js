import React, { Component } from 'react';

class FunFactsTwo extends Component {
    render() {
        return (
            <section className="fun-facts-two pt-100 pb-70 bg-f2f2f7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="fun-fact-card">
                                <i className='bx bx-list-check'></i>
                                <h3>
                                    <span className="odometer">128</span>
                                    <span className="sign-icon">+</span>
                                </h3>
                                <p>완료된 작업</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="fun-fact-card">
                                <i className='bx bx-smile'></i>
                                <h3>
                                    <span className="odometer">100</span>
                                    <span className="sign-icon">%</span>
                                </h3>
                                <p>고객 만족도</p>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-sm-6">
                            <div className="fun-fact-card">
                                <i className='bx bx-user-plus'></i>
                                <h3>
                                    <span className="odometer">17</span>
                                    <span className="sign-icon">+</span>
                                </h3>
                                <p>전문인력</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="fun-fact-card">
                                <i className='bx bx-trophy'></i>
                                <h3>
                                    <span className="odometer">15</span>
                                    <span className="sign-icon">+</span>
                                </h3>
                                <p>YY AGENCY의 회원사</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFactsTwo;