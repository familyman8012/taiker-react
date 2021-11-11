import { resolveHref } from "next/dist/shared/lib/router/router";
import React, { Component } from "react";
import * as gtag from "../../utils/gtag";

class ContactInfo extends Component {
  render() {
    return (
      <section className="pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <a
                  href="https://pf.kakao.com/_cxbjzb/chat"
                  target="_blank"
                  rel="noopner noreferrer"
                  onClick={() =>
                    gtag.event({
                      action: "링크 클릭",
                      category: "Contact",
                      label: "Kakao talk chanel",
                    })
                  }
                >
                  <div className="icon">
                    <i className="flaticon-email"></i>
                  </div>
                  <h3>카카오톡 채널 문의</h3>
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
                  <a
                    href="tel:+8201071452679"
                    onClick={() =>
                      gtag.event({
                        action: "링크 클릭",
                        category: "Contact",
                        label: "TEL",
                      })
                    }
                  >
                    01071452679
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <a
                  href="mailto:yyagency7@gmail.com"
                  onClick={() =>
                    gtag.event({
                      action: "링크 클릭",
                      category: "Contact",
                      label: "Email 문의",
                    })
                  }
                >
                  <div className="icon">
                    <i className="flaticon-email"></i>
                  </div>
                  <h3>이메일 문의</h3>
                  <p>yyagency7@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
          <span className="click">*클릭하면 연락바로 가능합니다.*</span>
        </div>
      </section>
    );
  }
}

export default ContactInfo;
