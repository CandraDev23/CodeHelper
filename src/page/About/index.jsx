import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../templates/Footer";
import Header from "../../templates/Header";


function About() {
    return (
        <div>
            <Header />
            <Container className="d-flex justify-content-center py-lg-5 text-center" style={{ height: "80vh" }}>
                <span className="py-lg-5">
                    <h1 className="py-3 text-primary">About Us</h1>
                    <p className="text-secondary">CodeHelper is a website for service providers & coding services, development, deployment of an application and website. On our website, we provide a question and answer forum with professional and experienced mentors. In addition, there are application or website development services that can choose according to your taste in choosing a developer, at an affordable price you can create your dream application platform without a watermark or stamp.
                    </p>
                </span>
            </Container>
            <Footer />
        </div>
    );
}

export default About;