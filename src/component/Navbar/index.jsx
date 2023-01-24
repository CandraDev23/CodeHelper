import React from "react"
import { Link } from "react-router-dom";
import { Button, Form, Modal } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";


function Navbarr() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showReg, setShowReg] = useState(false);

    const handleCloseReg = () => setShowReg(false);
    const handleShowReg = () => setShowReg(true);

    function moveToLogin() {
        handleCloseReg();
        handleShow();
    }

    function moveToReg() {
        handleClose();
        handleShowReg();
    }

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <Navbar className="text-center bg-primary" expand="lg">
            <Container>
                <Navbar.Brand href="#"><h3 className="fw-bold text-light">CodeHelper</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-75 ms-auto justify-content-between">
                        <Nav.Link><Link id="li" className="text-light" style={{ textDecoration: "none" }} to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link id="li" className="text-light" style={{ textDecoration: "none" }} to='/about'>About</Link></Nav.Link>
                        <Nav.Link><Link id="li" className="text-light" style={{ textDecoration: "none" }} to='/contact'>Contact</Link></Nav.Link>
                        <Nav.Link><Link id="li" className="text-light" style={{ textDecoration: "none" }} to='/faq'>FAQ</Link></Nav.Link>
                        <Button id="login_btn" className="px-5 fw-bold" onClick={handleShow}>Login</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className="text-primary fs-3">Login</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form className="my-lg-1">
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Your email" />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type={passwordShown ? "text" : "password"} placeholder="Your password" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Check type="checkbox" label="Show password" onClick={togglePassword}/>
                                    </Form.Group>
                                </Form>
                                <Button className="mt-lg-4 mb-lg-3 px-lg-5 w-100" variant="primary" onClick={handleClose}>
                                    Login
                                </Button>
                            </Modal.Body>
                            <Modal.Footer className="d-flex justify-content-center">
                                <p className="bg-white text-muted" style={{ marginTop: "-27px" }}>or</p>
                                <Button className="my-lg-4 px-lg-5 w-100" variant="outline-primary" onClick={moveToReg} >
                                    Register
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal show={showReg} onHide={handleCloseReg}>
                            <Modal.Header closeButton>
                                <Modal.Title className="text-primary fs-3">Register</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form className="my-lg-1">
                                    <Form.Group className="mb-2" controlId="formBasic">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Your full name" />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formBasic">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="Your username" />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Your email" />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type={passwordShown ? "text" : "password"} placeholder="Your password" />
                                        <Form.Text className="text-muted">
                                            Create your strong password for your account
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Check type="checkbox" label="Show password" onClick={togglePassword}/>
                                    </Form.Group>
                                    <Button className="my-lg-4 px-lg-5 w-100" variant="primary" onClick={handleCloseReg}>
                                        Register
                                    </Button>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer className="d-flex justify-content-center">
                                <p className="bg-white text-muted" style={{ marginTop: "-27px" }}>or</p>
                                <Button className="mt-lg-4 mb-lg-3 px-lg-5 w-100" variant="outline-primary" onClick={moveToLogin}>
                                    Login
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbarr;