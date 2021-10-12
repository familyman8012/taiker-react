    import { resolveHref } from 'next/dist/shared/lib/router/router';
    import React, { Component } from 'react';

    class ContactInfo extends Component {
        render() {
            return (
            <section className="pt-100 pb-70">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="contact-info-box">
                        <div className="icon">
                        <i className="flaticon-email"></i>
                        </div>
                        <h3>카카오톡 문의하기</h3>
                        <p>admin@taiker.com</p>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="contact-info-box">
                        <div className="icon">
                        <i className="flaticon-phone-call"></i>
                        </div>
                        <h3>전화 문의하기</h3>
                        <p>
                        <a href="tel:+8201071452679">01071452679</a>
                        </p>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                    <div className="contact-info-box">
                        <div className="icon">
                        <i className="flaticon-marker"></i>
                        </div>
                        <h3>채널톡 문의</h3>
                        <p>+123 456 7890</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            );
        }
    }

    export default ContactInfo;