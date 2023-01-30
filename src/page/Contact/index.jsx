import { Container } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import Navbarr from "../../component/Navbar";
import Footer from "../../templates/Footer";

function Contact() {
    return (
        <div>
            <Navbarr />
            <Container className="d-flex align-items-center justify-content-center">
                <div className="w-50 p-lg-5">
                    <h2 className="text-primary text-center my-lg-4">Contact Us</h2>
                    <Form className="my-lg-5">
                        <Form.Group className="mb-3" controlId="formBasicFullname">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="text" placeholder="Your full name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Your email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <textarea placeholder="Your message here" class="form-control"></textarea>
                        </Form.Group>
                        <Button className="mt-3 w-100" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Contact;