import React, { Component } from 'react';
import NavbarTwo from '../components/Layout/NavbarTwo';
import Banner from '../components/HomeNine/Banner';
import Projects from '../components/HomeNine/Projects';
import FunFacts from '../components/Common/FunFacts';
import TestimonialsTwo from '../components/Common/TestimonialsTwo';
import PricingStyleFive from '../components/Pricing/PricingStyleFive';
import LetsGetToWork from '../components/Common/LetsGetToWork';
import Footer from '../components/Layout/Footer';
import IndexSeo from '../components/Common/Seo'
class Index9 extends Component {
    render() {
        return (
            <>
                <IndexSeo />
                <NavbarTwo />
                <Banner />
                <Projects />
                <FunFacts />
                <TestimonialsTwo />
                <PricingStyleFive />
                <LetsGetToWork /> 
                <Footer/> 
            </>
        );
    }
}

export default Index9;