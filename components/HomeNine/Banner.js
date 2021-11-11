import React, { useEffect, Component, useCallback } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import * as gtag from "../../utils/gtag";

function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="portfolio-agency-banner pa-bg1">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container mt-80">
            <div className="banner-content text-center">
              <h1>
                고객이 원하는 홈페이지 그 이상 <br />
                YY AGENCY가 만들어갑니다.
              </h1>
              <p>반응형 홈페이지 &amp; 제작 이후 마케팅 관리</p>

              <div className="banner-btn">
                <a
                  href="https://pf.kakao.com/_cxbjzb/chat"
                  target="_blank"
                  className="talk_banner_link"
                  rel="noopner noreferrer"
                  onClick={() =>
                    gtag.event({
                      action: "링크 클릭",
                      category: "Contact",
                      label: "Kakao talk chanel",
                    })
                  }
                >
                  <span className="default-btn mr-4">
                    지금 즉시, 제작 관련 무료 컨설팅<span></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape-img2">
        <img src="/images/shape/shape2.svg" alt="image" />
      </div>
      <div className="shape-img3">
        <img src="/images/shape/shape3.svg" alt="image" />
      </div>
      <div className="shape-img4">
        <img src="/images/shape/shape4.png" alt="image" />
      </div>
      <div className="shape-img5">
        <img src="/images/shape/shape5.png" alt="image" />
      </div>
      <div className="shape-img6">
        <img src="/images/shape/shape6.png" alt="image" />
      </div>
      <div className="shape-img7">
        <img src="/images/shape/shape7.png" alt="image" />
      </div>
      <div className="shape-img8">
        <img src="/images/shape/shape8.png" alt="image" />
      </div>
      <div className="shape-img9">
        <img src="/images/shape/shape9.png" alt="image" />
      </div>
      <div className="shape-img10">
        <img src="/images/shape/shape10.png" alt="image" />
      </div>
    </div>
  );
}

export default Banner;
