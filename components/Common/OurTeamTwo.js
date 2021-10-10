    import React, { Component } from 'react';
    import Link from 'next/link';
    import dynamic from 'next/dynamic';
    const OwlCarousel = dynamic(import('react-owl-carousel3'));

    const options = {
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        mouseDrag: false,
        touchDrag: false,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            }
        }
    }

    class OurTeamTwo extends Component {

        _isMounted = false;
        state = {
            display:false
        }

        componentDidMount(){ 
            this._isMounted = true;
            this.setState({ display: true }) 
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        render() {
            return (
            <>
                <section className="team-area ptb-100">
                <div className="container">
                    <div className="section-title">
                    <span className="sub-title">YY Agency 팀</span>
                    <h2>YY Agency의 전문 인력</h2>
                    </div>

                    {this.state.display ? (
                    <OwlCarousel
                        className="team-slider owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-team-box">
                        <div className="image">
                            <img src="/images/team-image/team10.jpg" alt="team" />

                            <div className="social">
                            <a href="https://www.linkedin.com/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>

                        <div className="content">
                            <h3>Classy</h3>
                            <span>CEO & Full Stack Developer</span>
                        </div>
                        </div>

                        <div className="single-team-box">
                        <div className="image">
                            <img src="/images/team-image/team11.jpg" alt="team" />

                            <div className="social">
                            <a href="https://www.linkedin.com/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>

                        <div className="content">
                            <h3>Vicky</h3>
                            <span>Full Stack Developer</span>
                        </div>
                        </div>

                        <div className="single-team-box">
                        <div className="image">
                            <img src="/images/team-image/team12.jpg" alt="team" />

                            <div className="social">
                            <a href="https://www.linkedin.com/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>

                        <div className="content">
                            <h3>Megan</h3>
                            <span>Planer</span>
                        </div>
                        </div>

                        <div className="single-team-box">
                        <div className="image">
                            <img src="/images/team-image/team13.jpg" alt="team" />

                            <div className="social">
                            <a href="https://www.linkedin.com/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>

                        <div className="content">
                            <h3>Jin</h3>
                            <span>Web Designer</span>
                        </div>
                        </div>

                        <div className="single-team-box">
                        <div className="image">
                            <img src="/images/team-image/team14.jpg" alt="team" />

                            <div className="social">
                            <a href="https://www.linkedin.com/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                            </div>
                        </div>

                        <div className="content">
                            <h3>Yeon</h3>
                            <span>Web Designer</span>
                        </div>
                        </div>
                    </OwlCarousel>
                    ) : (
                    ""
                    )}
                </div>

                {/* Animation shape image */}
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
                <div className="shape-img9">
                    <img src="/images/shape/shape9.png" alt="image" />
                </div>
                <div className="shape-img10">
                    <img src="/images/shape/shape10.png" alt="image" />
                </div>
                </section>
            </>
            );
        }
    }

    export default OurTeamTwo;