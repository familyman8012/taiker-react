    import React, { Component } from 'react';
    import Link from 'next/link';

    class Projects extends Component {
        render() {
            return (
            <div className="works-area ptb-100">
                <div className="container-fluid">
                <div className="section-title">
                    <h2>Our portfolio</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-xl-3">
                    <div className="work-card">
                        <img src="/images/works/work1.png" alt="image" />

                        <div className="content text-center">
                        <span>
                            <a>심리상담</a>
                        </span>
                        <h3>
                            <a>마인드케어센터</a>
                        </h3>

                        <a className="work-btn">Read More</a>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-xl-3">
                    <div className="work-card">
                        <img src="/images/works/work2.png" alt="image" />

                        <div className="content text-center">
                        <span>
                            <a>법무범인</a>
                        </span>
                        <h3>
                            <a>HOPE 법무법인</a>
                        </h3>

                        <Link href="http://yymonkeys.dothome.co.kr/works/1/">
                            <a className="work-btn">Read More</a>
                        </Link>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-xl-3">
                    <div className="work-card">
                        <img src="/images/works/work3.png" alt="image" />

                        <div className="content text-center">
                        <span>
                            <a>학원/교육</a>
                        </span>
                        <h3>
                            <a>International 유치원</a>
                        </h3>

                        <Link href="http://yymonkeys.dothome.co.kr/">
                            <a className="work-btn">Read More</a>
                        </Link>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-xl-3">
                    <div className="work-card">
                        <img src="/images/works/work4.png" alt="image" />

                        <div className="content text-center">
                        <span>
                            <a>쇼핑</a>
                        </span>
                        <h3>
                            <a>YY MARKET</a>
                        </h3>

                        <Link href="https://yymarket.imweb.me/">
                            <a className="work-btn">Read More</a>
                        </Link>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-xl-3">
                    <div className="work-card">
                        <img src="/images/works/work5.png" alt="image" />

                        <div className="content text-center">
                        <span>
                            <a>서비스</a>
                        </span>
                        <h3>
                            <a>설레임연구소</a>
                        </h3>

                        <Link href="https://seolleim.kr/">
                            <a className="work-btn">Read More</a>
                        </Link>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-xl-3">
                    <div className="work-card">
                        <img src="/images/works/work6.png" alt="image" />

                        <div className="content text-center">
                        <span>
                            <a>GYM</a>
                        </span>
                        <h3>
                            <a>YY GYM</a>
                        </h3>

                        <Link href="http://yymonkeys.dothome.co.kr/works/3/">
                            <a className="work-btn">Read More</a>
                        </Link>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-xl-3">
                    <div className="work-card">
                        <img src="/images/works/work7.png" alt="image" />

                        <div className="content text-center">
                        <span>
                            <a>인테리어</a>
                        </span>
                        <h3>
                            <a>Keyterior</a>
                        </h3>

                        <Link href="https://keyterior.imweb.me/">
                            <a className="work-btn">Read More</a>
                        </Link>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-xl-3">
                    <div className="work-card">
                        <img src="/images/works/work8.png" alt="image" />

                        <div className="content text-center">
                        <span>
                            <a>쇼핑</a>
                        </span>
                        <h3>
                            <a>N STYLE</a>
                        </h3>

                        <Link href="https://nstyle.imweb.me/">
                            <a className="work-btn">Read More</a>
                        </Link>
                        </div>
                    </div>
                    </div>

                    {/* <div className="col-lg-4 col-sm-6 col-xl-3">
                    <div className="work-card">
                        <img src="/images/works/work9.jpg" alt="image" />

                        <div className="content text-center">
                        <span>
                            <Link href="/projects3">
                            <a>App Development</a>
                            </Link>
                        </span>
                        <h3>
                            <Link href="/project-details">
                            <a>We provide any type of app development</a>
                            </Link>
                        </h3>

                        <Link href="/project-details">
                            <a className="work-btn">Read More</a>
                        </Link>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-xl-3">
                    <div className="work-card">
                        <img src="/images/works/work10.jpg" alt="image" />

                        <div className="content text-center">
                        <span>
                            <Link href="/projects3">
                            <a>Marketing</a>
                            </Link>
                        </span>
                        <h3>
                            <Link href="/project-details">
                            <a>We provide any type of marketing support</a>
                            </Link>
                        </h3>

                        <Link href="/project-details">
                            <a className="work-btn">Read More</a>
                        </Link>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-xl-3">
                    <div className="work-card">
                        <img src="/images/works/work11.jpg" alt="image" />

                        <div className="content text-center">
                        <span>
                            <Link href="/projects3">
                            <a>Email Marketing</a>
                            </Link>
                        </span>
                        <h3>
                            <Link href="/project-details">
                            <a>We provide any type of Email Marketing</a>
                            </Link>
                        </h3>

                        <Link href="/project-details">
                            <a className="work-btn">Read More</a>
                        </Link>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-xl-3">
                    <div className="work-card">
                        <img src="/images/works/work12.jpg" alt="image" />

                        <div className="content text-center">
                        <span>
                            <Link href="/projects3">
                            <a>Email Marketing</a>
                            </Link>
                        </span>
                        <h3>
                            <Link href="/project-details">
                            <a>We provide any type of Marketing & Reporting</a>
                            </Link>
                        </h3>

                        <Link href="/project-details">
                            <a className="work-btn">Read More</a>
                        </Link>
                        </div>
                    </div>
                    </div> */}

                    {/* Pagination */}
                    <div className="col-lg-12 col-sm-12">
                    <div className="pagination-area">
                        <Link href="/projects3">
                        <a className="prev page-numbers">
                            <i className="fas fa-angle-double-left"></i>
                        </a>
                        </Link>
                        <span className="page-numbers current">1</span>
                        <Link href="/projects3">
                        <a className="page-numbers">2</a>
                        </Link>
                        <Link href="/projects3">
                        <a className="page-numbers">3</a>
                        </Link>
                        <Link href="/projects3">
                        <a className="page-numbers">4</a>
                        </Link>
                        <Link href="/projects3">
                        <a className="next page-numbers">
                            <i className="fas fa-angle-double-right"></i>
                        </a>
                        </Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            );
        }
    }

    export default Projects;