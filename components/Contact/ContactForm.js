    import React, { Component } from 'react';

    class ContactForm extends Component {
        render() {
            return (
            <section className="contact-area ptb-100">
                <div className="container">
                <div className="section-title">
                    <span className="sub-title">Contact Us</span>
                    <h2>홈페이지 제작 및 회원사 가입 문의</h2>
                    <p>
                    AM9:00~PM6:00 상담 가능 시간입니다. <br />
                    상담시간 이 외에 시간은 채널톡 또는 카카오톡을 이용해주세요.
                    </p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8">
                    <div className="contact-form">
                        <form id="contactForm">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                                <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="이름"
                                />
                            </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                                <input
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="이메일"
                                />
                            </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                                <input
                                type="text"
                                name="phone_number"
                                id="phone_number"
                                className="form-control"
                                placeholder="핸드폰번호"
                                />
                            </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                                <input
                                type="text"
                                name="msg_subject"
                                id="msg_subject"
                                className="form-control"
                                placeholder="Subject"
                                />
                            </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                rows="5"
                                placeholder="참고사항"
                                ></textarea>
                            </div>
                            </div>

                            <div className="col-lg-12 col-md-12 text-center">
                            <button type="submit" className="default-btn">
                                문의하기 <span></span>
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                    <div className="contact-image">
                        <img src="/images/contact.png" alt="image" />
                    </div>
                    </div>
                </div>
                </div>
            </section>
            );
        }
    }

    export default ContactForm;