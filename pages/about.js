import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import AboutArea from '../components/AboutTwo/AboutArea';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import WhyChooseUs from '../components/AboutTwo/WhyChooseUs';
import Solution from '../components/Common/Solution';
import Testimonials from '../components/Common/Testimonials';
import Footer from '../components/Layout/Footer';
import { AboutSeo } from '../components/Common/Seo';

class About2 extends Component {
    render() {
        return (
          <>
            <AboutSeo />
            <Navbar />
            <PageHeader
              pageTitle="About Us"
              breadcrumbTextOne="Home"
              breadcrumbUrl="/"
              breadcrumbTextTwo="About Us"
            />
            <AboutArea />
            <FunFactsTwo />
            <WhyChooseUs />
            <Solution />
            <Testimonials />
            <Footer />
          </>
        );
    }
}

export default About2;