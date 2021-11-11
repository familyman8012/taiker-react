import React from "react";

function index() {
  return (
    <>
      <div class="talk_preview_area">
        <div class="talk_banner_preview talk_expose_white on realtimeTalk">
          <span class="txt">
            즉시,무료 컨설팅
            <br />
          </span>{" "}
          <span class="arrow"></span>
        </div>
      </div>
      <div className="talk_banner_wrap kakao">
        <div className="">
          <div className="talk_preview_area">
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
              <div className="talk_banner_preview talk_expose_white on talk_kakao">
                <span className="ico_talk_banner">카톡</span>{" "}
                <em className="talk_banner_desc">카톡문의</em>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
