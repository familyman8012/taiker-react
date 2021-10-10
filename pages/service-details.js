import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Common/PageHeader';
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent';
import Footer from '../components/Layout/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageHeader 
                    pageTitle="Service Details" 
                    breadcrumbTextOne="Home" 
                    breadcrumbUrl="/" 
                    breadcrumbTextTwo="Service Details" 
                />

                <ServiceDetailsContent />
                
                <Footer />
            </>
        );
    }
}

export default ServiceDetails;