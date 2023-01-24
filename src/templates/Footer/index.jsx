import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./footer-styles";

function Footer() {
    return (
        <Box className="bg-primary">
            <Container>
                <h1 style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "-20px",
                    marginBottom: "1rem"
                }}>
                    CodeHelper
                </h1>
                <p style={{
                    color: "white",
                    textAlign: "center",
                    marginBottom: "4rem"
                }}>
                    Thanks for visit our website
                </p>
            </Container>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Our Team</FooterLink>
                        <FooterLink href="#">Review</FooterLink>
                        <FooterLink href="#">Mision</FooterLink>
                        <FooterLink href="#">Collaboration</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#">Mobile Development</FooterLink>
                        <FooterLink href="#">Web Development</FooterLink>
                        <FooterLink href="#">Dekstop App Development</FooterLink>
                        <FooterLink href="#">Cyber Security</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">Chat</FooterLink>
                        <FooterLink href="#">Phone</FooterLink>
                        <FooterLink href="#">Gmail</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <FaFacebook />
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                        </FooterLink>
                        <FooterLink href="#">
                                <FaInstagram />
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                        </FooterLink>
                        <FooterLink href="#">
                                <FaTwitter />
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                        </FooterLink>
                        <FooterLink href="#">
                                <FaYoutube />
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
