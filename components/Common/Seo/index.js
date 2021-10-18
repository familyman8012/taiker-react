import { DefaultSeo, NextSeo } from "next-seo";

export function CommonSeo() {
  const CommonSeoData = {
    keywords: `홈페이지제작, 쇼핑몰제작, 반응형홈페이지, 반응형웹,  웹사이트제작, 홈페이지제작업체, 홈페이지제작비용,  웹에이전시, 웹사이트만들기`,
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/images/seo-banner/favicon-32x32.png",
      },
      {
        rel: "apple-touch-icon",
        href: "/images/seo-banner/apple-icon-76x76.png",
        sizes: "76x76",
      },
      {
        rel: "apple-touch-icon",
        href: "/images/seo-banner/apple-icon-120x120.jpg",
        sizes: "120x120",
      },
    ],
    additionalMetaTags: [
      {
        name: "application-name",
        content: "홈페이지 제작 YY AGENCY",
      },
      {
        name: "msapplication-tooltip",
        content: "YY AGENCY",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],

    twitter: {
      handle: "@handle",
      site: "mindcarecenter.org",
      cardType: "summary_large_image",
    },
  };
  return <DefaultSeo {...CommonSeoData} />;
}

export function IndexSeo() {
  const indexSeoData = {
    canonical: "https://www.yyagency.co.kr/",
    title: "명품을 만드는 홈페이지 제작 업체  - YY AGENCY",
    description:
      "앞선 기술력을 가지고 합리적인 맞춤 홈페이지 제작을 진행하는 YY AGENCY입니다.",

    openGraph: {
      type: "website",
      title: "고객이 원하는 그 이상의 홈페이지를 만들어가는 YY AGENCY",
      description: `명품 반응형 홈페이지 제작부터, 전략적 온라인 마케팅에 대한 도움까지, 사업성공을 위한 당신을 위한 YY 에이젼시`,
      url: "https://www.yyagency.co.kr/",
      images: [
        {
          url: "https://www.yyagency.co.kr/images/seo-banner/twi001t2689493_l.jpg",
          width: 1200,
          height: 630,
          alt: "홈페이지 제작 에이전시 YY AGENCY 홍보이미지",
        },
      ],
      site_name: "홈페이지 제작 에이전시 YY AGENCY",
    },
  };
  return <NextSeo {...indexSeoData} />;
}

export function AboutSeo() {
  const aboutSeoData = {
    canonical: "https://www.yyagency.co.kr/about",
    title: " 온라인 비지니스의 핵심은 반응형웹- YY AGENCY 소개",
    description:
      "레거시한 웹제작은 물론 최신 모던 리액트, NEXTJS 반응형웹 제작까지.. 앞선 기술과 UI/UX를 생각한 세련된 디자인",

    openGraph: {
      type: "website",
      title: "비지니스의 기틀을 위한 반응형 웹페이지- YY AGENCY 소개",
      description: `홈페이지는 비지니스의 첫인상입니다. 실제적인 매출에 도움이 되는 홈페이지를 제작해드립니다.`,
      url: "https://www.yyagency.co.kr/about",
      images: [
        {
          url: "https://www.yyagency.co.kr/images/seo-banner/seoimg.jpg",
          width: 1200,
          height: 630,
          alt: "홈페이지 제작 에이전시 YY AGENCY 소개 홍보이미지",
        },
      ],
      site_name: "홈페이지 제작 에이전시 YY AGENCY",
    },
  };
  return <NextSeo {...aboutSeoData} />;
}

export function ServicesSeo() {
  const ServicesSeoData = {
    canonical: "https://www.yyagency.co.kr/services",
    title:
      "앞선 기술력과 서비스를 기반으로 최상의 웹에이전시  - YY AGENCY 서비스",
    description:
      "반응형 웹, SEO, SSL, Google AD, Naver파워링크, 포털사이트 등록은 물론 철저한 A/S와 대표님들간의 네트워크 파티까지!",
    openGraph: {
      type: "website",
      title:
        "비지니스 확장 혹은 새로운 비지니스를 하고 싶다면? - YY AGENCY 예약",
      description: `저희는 여러분의 온라인 비지니스를 저희의 일처럼 성실하게 좋은 퀄리티로 만들어 드리는 파트너입니다.`,
      url: "https://www.yyagency.co.kr/services",
      images: [
        {
          url: "https://www.yyagency.co.kr/images/seo-banner/YYAGENCY_HOMEPAGE.png",
          width: 1200,
          height: 630,
          alt: "홈페이지 제작 에이전시 YY AGENCY 소개 홍보이미지",
        },
      ],
      site_name: "홈페이지 제작 에이전시 YY AGENCY",
    },
  };
  return <NextSeo {...ServicesSeoData} />;
}

export function PortfolioSeo() {
  const PortfolioSeoData = {
    canonical: "https://www.yyagency.co.kr/portfolio",
    title: "매출 대박 쇼핑몰제작 - YY AGENCY",
    description:
      "YY AGENCY는 다양한 홈페이지 제작을 경험으로 토대로 맞춤 홈페이지 제작을 진행합니다.",

    openGraph: {
      type: "website",
      title: "신뢰 할 수 있는 홈페이지 제작을 위한 포토폴리오 - YY AGENCY",
      description: `YY AGENCY는 대표님들의 비지니스 성공을 위해 수익형, 반응형, 홍보형 등의 다양한 종류의 홈페이지를 제공합니다.`,
      url: "https://www.yyagency.co.kr/portfolio",
      images: [
        {
          url: "https://www.yyagency.co.kr/images/seo-banner/twi001t2689493.jpg",
          width: 1200,
          height: 630,
          alt: "홈페이지 제작 에이전시 YY AGENCY 소개 홍보이미지",
        },
      ],
      site_name: "홈페이지 제작 에이전시 YY AGENCY",
    },
  };
  return <NextSeo {...PortfolioSeoData} />;
}

export function ContactSeo() {
  const ContactSeoData = {
    canonical: "https://www.yyagency.co.kr/contact",
    title:
      "홈페이지 제작 비용 문의 및 회원사 가입 문의 | 홈페이지 제작 에이전시 YY AGENCY",
    description: "홈페이지 제작 및 회원사 가입을 위한 연락처",

    openGraph: {
      type: "website",
      title:
        "홈페이지 제작 문의 및 회원사 가입 문의 | 홈페이지 제작 에이전시 YY AGENCY",
      description: `AM 10:00~ PM 6:00 전화및 카카오톡 상담 가능, 그외에 시간 채널톡 상담이 가능합니다.`,
      url: "https://www.yyagency.co.kr/contact",
      images: [
        {
          url: "https://www.yyagency.co.kr/images/seo-banner/tid024t007672_l.jpg",
          width: 1200,
          height: 630,
          alt: "홈페이지 제작 에이전시 YY AGENCY 소개 홍보이미지",
        },
      ],
      site_name: "홈페이지 제작 에이전시 YY AGENCY",
    },
  };
  return <NextSeo {...ContactSeoData} />;
}

export function YakwanSeo() {
  const YakwanSeoData = {
    canonical: "https://www.yyagency.co.kr/yakwan",
    title: "약관 | 홈페이지 제작 에이전시 YY AGENCY",
    description: "홈페이지 제작 에이전시 YY AGENCY 약관",
    openGraph: {
      type: "website",
      title: "약관 | 홈페이지 제작 에이전시 YY AGENCY",
      description: `홈페이지 제작 에이전시 YY AGENCY에 약관`,
      url: "https://www.yyagency.co.kr/yakwan",
      images: [
        {
          url: "https://www.yyagency.co.kr/images/seo-bannerYYAGENCY_HOMEPAGE.png",
          width: 1200,
          height: 630,
          alt: "홈페이지 제작 에이전시 YY AGENCY 소개 홍보이미지",
        },
      ],
      site_name: "홈페이지 제작 에이전시 YY AGENCY",
    },
  };
  return <NextSeo {...YakwanSeoData} />;
}

export function PolicySeo() {
  const PolicySeoData = {
    canonical: "https://www.yyagency.co.kr/policy",
    title: "개인정보처리방침 | 홈페이지 제작 에이전시 YY AGENCY",
    description: "홈페이지 제작 에이전시 YY AGENCY 개인정보처리방침",
    openGraph: {
      type: "website",
      title: "개인정보처리방침 | 홈페이지 제작 에이전시 YY AGENCY",
      description: `홈페이지 제작 에이전시 YY AGENCY에 개인정보처리방침`,
      url: "https://www.yyagency.co.kr/policy",
      images: [
        {
          url: "https://www.yyagency.co.kr/images/seo-banner/tip101t016660_l.jpg",
          width: 1200,
          height: 630,
          alt: "홈페이지 제작 에이전시 YY AGENCY 소개 홍보이미지",
        },
      ],
      site_name: "홈페이지 제작 에이전시 YY AGENCY",
    },
  };
  return <NextSeo {...PolicySeoData} />;
}
