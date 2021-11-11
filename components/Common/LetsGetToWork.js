import React, { Component } from "react";
import Link from "next/link";
import * as gtag from "../../utils/gtag";

class LetsGetToWork extends Component {
  render() {
    return (
      <section className="subscribe-area bg-F4F7FC">
        <div className="subscribe-inner-area lets-work jarallax">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <span className="sub-title">
                  반응형 홈페이지 &amp; 제작 이후 마케팅 관리
                </span>
                <h2>YY AGENCY에서 바로 진행하기</h2>
              </div>

              <div className="col-lg-6">
                <div className="contact-btn">
                  <a
                    className="default-btn"
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
                    문의하기 <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LetsGetToWork;
