import { Accordion, Container } from "react-bootstrap";
import AccordionItems from "../../component/AccordionItems";
import Navbarr from "../../component/Navbar";
import Footer from "../../templates/Footer";

function Faq() {
    return (
        <div>
            <Navbarr />
            <Container className="d-flex justify-content-center my-lg-5" style={{height: "90vh"}}>
                <div className="w-50">
                    <h2 className="text-primary text-center my-lg-5">Freuently Ask Question</h2>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <AccordionItems header="What can I do in the CodeHelper?" body="At CodeHelper you can collaborate and exchange ideas in this forum. And also can take a service at an affordable price and satisfying benefits." />
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <AccordionItems header="Why CodeHelper is recommended?" body="Because the code helper has features and services that are suitable for IT person and someone who needs a developer to serve in making applications and websites for certain needs and also has an affordable cost. No stamp and watermark." />
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <AccordionItems header="What are the advantages of taking services in CodeHelper?" body="In each service we have their respective fields. If you take these services then you can ask the mentor about difficulties when developing something and it will be guaranteed to be answered quickly." />
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default Faq;




