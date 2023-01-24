import React from "react";
import { Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Bannerr() {
    return (
        <div className="bg-white p-lg-5 mw-100 mh-100" >
            <Container>
                <h1 className="text-primary mb-4">CodeHelper</h1>
                <div className="lh-sm">
                    <p className="text-secondary">Welcome to <b>CodeHelper</b></p>
                    <p className="text-secondary">Take a web & app services in simple and trusted, always in here</p>
                </div>
                <div className="mt-5 mb-5">
                    <Button className="px-lg-5 me-5" variant="outline-primary">Get Started</Button>
                    <Button className="px-lg-5 me-2" variant="primary">Take services</Button>
                </div>
            </Container>
        </div>
    )
}

export default Bannerr;