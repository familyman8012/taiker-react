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
                        <a href="http://pf.kakao.com/_cxbjzb" target="_blank">
                          <div className="icon">
                            <i className="flaticon-email"></i>
                          </div>
                          <h3>카카오톡 채널톡 문의</h3>
                          <p>yyagency</p>
                        </a>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="contact-info-box">
                        <div className="icon">
                          <i className="flaticon-phone-call"></i>
                        </div>
                        <h3>전화 문의하기</h3>
                        <p>
                          <a href="tel:+8201068078707">01068078707</a>
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                      <div className="contact-info-box">
                        <a href="mailto:yyagency7@gmail.com">
                          <div className="icon">
                            <i className="flaticon-email"></i>
                          </div>
                          <h3>이메일 문의</h3>
                          <p>yyagency7@gmail.com</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
        }
    }

    export default ContactInfo;