import { Container } from "react-bootstrap";
import Cardd from "../../component/Card";
import Bannerr from "../../component/Banner";

function Body() {
    return (
        <>
            <Bannerr />
            <div className="pt-2 pb-5 bg-light">
                <Container className="py-lg-5">
                    <h2 className="text-primary" style={{ textAlign: "center" }}>Our Services</h2>
                    <h5 className="text-secondary mb-5 fw-normal" style={{ textAlign: "center" }}>Popular</h5>
                    <div className="d-flex justify-content-center">
                        <span className="row">
                            <span className="col  mx-4">
                                <Cardd
                                    image="https://media.istockphoto.com/id/1197640540/id/foto/desain-situs-web-mengembangkan-teknologi-pemrograman-dan-pengkodean.jpg?s=612x612&w=0&k=20&c=fWTLckmRefn_cygtcL_Xd6fOb817-_jkqDkTIkwyKEM="
                                    title="Mobile Development"
                                    desc="The Mobile Development services has three language and framework services available: Kotlin, Java, Swift, React Native, and Flutter. And we have expert developer to solve all bug and error."
                                />
                            </span>
                            <span className="col  mx-4">
                                <Cardd
                                    image="https://media.istockphoto.com/id/1212006391/id/foto/programmer-komputer-bekerja-pada-program-perangkat-lunak-baru.jpg?s=612x612&w=0&k=20&c=9SManIV2WZqOF8SOIgwTnT0FZOhcJbQdTZmI1e5CaK0="
                                    title="Web Development"
                                    desc="The Web Development services has many language and framework services available: CSS, Javascript, React JS, PHP, Node js, and Laravel. And we have expert developer to solve all bug and error."
                                />
                            </span>
                            <span className="col  mx-4">
                                <Cardd
                                    image="https://media.istockphoto.com/id/1071652068/id/foto/programmer-pengembangan-profesional-yang-bekerja-di-situs-web-pemrograman-perangkat-lunak-dan.jpg?s=612x612&w=0&k=20&c=RH5x2K4UG0U3ZmrEtY_bLurP_40VSvsWnNKFxz51eUw="
                                    title="Dekstop App Development"
                                    desc="The Dekstop App Development services has many language and framework services available: C, C#, Java, and C++. And we have expert developer to solve all bug and error."
                                />
                            </span>
                        </span>
                    </div>
                </Container>
            </div>
            <div className="d-flex align-items-center bg-white" style={{ height: "80vh" }}>
                <Container>
                    <div className="text-center py-lg-5">
                        <h1 className="text-primary">Explore the most explosion of our services</h1>
                        <p className="text-muted">Access the web so enjoy the full power of our services</p>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Body;