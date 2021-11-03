                            import React, { Component } from 'react';
                            import Link from 'next/link';
                            import * as gtag from "../../utils/gtag";

                        class ProjectsCard extends Component {
                            render() {
                                return (
                                <>
                                    <div className="projects-area ptb-100">
                                    <div className="container-fluid">
                                        <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-projects-box">
                                            <img
                                                src="/images/projects-image/project1.png"
                                                alt="image"
                                            />

                                            <div className="projects-content">
                                                <h3>
                                                <a
                                                    href="https://mindcarecenter.org/"
                                                    target="_blank"
                                                    onClick={() =>
                                                    gtag.event({
                                                        action: "링크 클릭",
                                                        category: "Project",
                                                        label: "마인드케어",
                                                    })
                                                    }
                                                >
                                                    마인드케어센터
                                                </a>
                                                </h3>
                                                <span className="category">
                                                심리상담
                                                </span>
                                            </div>

                                            <div className="plus-icon">
                                                <a
                                                className="popup-btn"
                                                href="https://mindcarecenter.org/"
                                                target="_blank"
                                                onClick={() =>
                                                    gtag.event({
                                                    action: "링크 클릭",
                                                    category: "Project",
                                                    label: "마인드케어",
                                                    })
                                                }
                                                >
                                                <span></span>
                                                </a>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-projects-box">
                                            <img
                                                src="/images/projects-image/project2.png"
                                                alt="image"
                                            />

                                            <div className="projects-content">
                                                <h3>
                                                <a
                                                    href="http://yymonkeys.dothome.co.kr/works/1/"
                                                    target="_blank"
                                                    onClick={() =>
                                                    gtag.event({
                                                        action: "링크 클릭",
                                                        category: "Project",
                                                        label: "HOPE 법무법인",
                                                    })
                                                    }
                                                >
                                                    HOPE범무법인
                                                </a>
                                                </h3>
                                                <span className="category">
                                                법무법인
                                                </span>
                                            </div>

                                            <div className="plus-icon">
                                                <a
                                                className="popup-btn"
                                                href="http://yymonkeys.dothome.co.kr/works/1/"
                                                target="_blank"
                                                onClick={() =>
                                                    gtag.event({
                                                    action: "링크 클릭",
                                                    category: "Project",
                                                    label: "HOPE 법무법인",
                                                    })
                                                }
                                                >
                                                <span></span>
                                                </a>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-projects-box">
                                            <img
                                                src="/images/projects-image/project3.png"
                                                alt="image"
                                            />

                                            <div className="projects-content">
                                                <h3>
                                                <a
                                                    href="http://yymonkeys.dothome.co.kr/"
                                                    target="_blank"
                                                    onClick={() =>
                                                    gtag.event({
                                                        action: "링크 클릭",
                                                        category: "Project",
                                                        label:
                                                        "International 유치원",
                                                    })
                                                    }
                                                >
                                                    International 유치원
                                                </a>
                                                </h3>
                                                <span className="category">
                                                유치원
                                                </span>
                                            </div>

                                            <div className="plus-icon">
                                                <a
                                                className="popup-btn"
                                                href="http://yymonkeys.dothome.co.kr/"
                                                target="_blank"
                                                onClick={() =>
                                                    gtag.event({
                                                    action: "링크 클릭",
                                                    category: "Project",
                                                    label: "International 유치원",
                                                    })
                                                }
                                                >
                                                <span></span>
                                                </a>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-projects-box">
                                            <img
                                                src="/images/projects-image/project4.png"
                                                alt="image"
                                            />

                                            <div className="projects-content">
                                                <h3>
                                                <a
                                                    href="http://yymonkeys.dothome.co.kr/works/3/"
                                                    target="_blank"
                                                    onClick={() =>
                                                    gtag.event({
                                                        action: "링크 클릭",
                                                        category: "Project",
                                                        label: "YY GYM",
                                                    })
                                                    }
                                                >
                                                    YY GYM
                                                </a>
                                                </h3>
                                                <span className="category">
                                                헬스장
                                                </span>
                                            </div>

                                            <div className="plus-icon">
                                                <a
                                                className="popup-btn"
                                                href="http://yymonkeys.dothome.co.kr/works/3/"
                                                target="_blank"
                                                onClick={() =>
                                                    gtag.event({
                                                    action: "링크 클릭",
                                                    category: "Project",
                                                    label: "YY GYM",
                                                    })
                                                }
                                                >
                                                <span></span>
                                                </a>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-projects-box">
                                            <img
                                                src="/images/projects-image/project5.png"
                                                alt="image"
                                            />

                                            <div className="projects-content">
                                                <h3>
                                                <a
                                                    href="https://seolleim.kr/"
                                                    target="_blank"
                                                    onClick={() =>
                                                    gtag.event({
                                                        action: "링크 클릭",
                                                        category: "Project",
                                                        label: "설레임 연구소",
                                                    })
                                                    }
                                                >
                                                    설레임연구소
                                                </a>
                                                </h3>
                                                <span className="category">
                                                연애상담
                                                </span>
                                            </div>

                                            <div className="plus-icon">
                                                <a
                                                className="popup-btn"
                                                href="https://seolleim.kr/"
                                                target="_blank"
                                                onClick={() =>
                                                    gtag.event({
                                                    action: "링크 클릭",
                                                    category: "Project",
                                                    label: "설레임 연구소",
                                                    })
                                                }
                                                >
                                                <span></span>
                                                </a>
                                            </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-projects-box">
                                            <img
                                                src="/images/projects-image/project6.png"
                                                alt="image"
                                            />

                                            <div className="projects-content">
                                                <h3>
                                                <a
                                                    href="https://yymarket.imweb.me/"
                                                    target="_blank"
                                                    onClick={() =>
                                                    gtag.event({
                                                        action: "링크 클릭",
                                                        category: "Project",
                                                        label: "YY MARKET",
                                                    })
                                                    }
                                                >
                                                    YY MARKET
                                                </a>
                                                </h3>
                                                <span className="category">
                                                홈쇼핑
                                                </span>
                                            </div>

                                            <div className="plus-icon">
                                                <a
                                                className="popup-btn"
                                                href="https://yymarket.imweb.me/"
                                                target="_blank"
                                                onClick={() =>
                                                    gtag.event({
                                                    action: "링크 클릭",
                                                    category: "Project",
                                                    label: "YY Market",
                                                    })
                                                }
                                                >
                                                <span></span>
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="single-projects-box">
                                            <img
                                                src="/images/projects-image/project7.png"
                                                alt="image"
                                            />

                                            <div className="projects-content">
                                                <h3>
                                                <a
                                                    href="https://keyterior.imweb.me/"
                                                    target="_blank"
                                                    onClick={() =>
                                                    gtag.event({
                                                        action: "링크 클릭",
                                                        category: "Project",
                                                        label: "KEY TERIOR",
                                                    })
                                                    }
                                                >
                                                    KEY TERIOR
                                                </a>
                                                </h3>
                                                <span className="category">
                                                인테리어
                                                </span>
                                            </div>

                                            <div className="plus-icon">
                                                <a
                                                className="popup-btn"
                                                href="https://keyterior.imweb.me/"
                                                target="_blank"
                                                onClick={() =>
                                                    gtag.event({
                                                    action: "링크 클릭",
                                                    category: "Project",
                                                    label: "KEY TERIOR",
                                                    })
                                                }
                                                >
                                                <span></span>
                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="single-projects-box">
                                        <img
                                            src="/images/projects-image/project8.png"
                                            alt="image"
                                        />

                                        <div className="projects-content">
                                            <h3>
                                            <a
                                                href="https://nstyle.imweb.me/"
                                                target="_blank"
                                                onClick={() =>
                                                gtag.event({
                                                    action: "링크 클릭",
                                                    category: "Project",
                                                    label: "N STYLE",
                                                })
                                                }
                                            >
                                                N STYLE
                                            </a>
                                            </h3>
                                            <span className="category">소품샵</span>
                                        </div>

                                        <div className="plus-icon">
                                            <a
                                            className="popup-btn"
                                            href="https://nstyle.imweb.me/"
                                            target="_blank"
                                            onClick={() =>
                                                gtag.event({
                                                action: "링크 클릭",
                                                category: "Project",
                                                label: "N STYLE",
                                                })
                                            }
                                            >
                                            <span></span>
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </>
                                );
                            }
                        }

                        export default ProjectsCard;