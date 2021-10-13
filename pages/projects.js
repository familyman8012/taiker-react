    import React, { Component } from 'react';
    import Navbar from '../components/Layout/Navbar';
    import PageHeader from '../components/Common/PageHeader';
    import ProjectsCard from '../components/Projects/ProjectsCard';
    import Footer from '../components/Layout/Footer';
import { PortfolioSeo } from '../components/Common/Seo'
    class Projects extends Component {
        render() {
            return (
            <>
                <Navbar />
<PortfolioSeo/>
                <PageHeader
                pageTitle="YY AGENCY 포토폴리오"
                breadcrumbTextOne="Home"
                breadcrumbUrl="/"
                breadcrumbTextTwo="YY AGENCY 포토폴리오"
                />

                <ProjectsCard />

                <Footer />
            </>
            );
        }
    }

    export default Projects;