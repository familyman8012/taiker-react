        import React, { Component } from 'react';
        import Navbar from '../components/Layout/Navbar';
        import PageHeader from '../components/Common/PageHeader';
        import Services from '../components/ServicesThree/Services';
        import Footer from '../components/Layout/Footer';
import ServicesSeo from '../components/Common/Seo'
        class Services3 extends Component {
            render() {
                return (
                    <>
                        <ServicesSeo/>
                    <Navbar />

                    <PageHeader
                    pageTitle="YY AGENCY 서비스"
                    breadcrumbTextOne="Home"
                    breadcrumbUrl="/"
                    breadcrumbTextTwo="YY AGENCY 서비스"
                    />

                    <Services />

                    <Footer />
                </>
                );
            }
        }

        export default Services3;