import React, { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { FaStore, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';


export default function Signup() {

    const [signUpType, setSignUpType] = useState<any>("");

    return (
        <>
            <div className='d-flex align-items-center justify-content-center h-100 w-100'>
                <Row className='w-100'>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="text-center mb-5">
                            <h3>Choose Account Type</h3>
                        </div>
                        <Row>
                            <Col md={{ span: 6 }}>
                                <Card className='mb-3'>
                                    <Card.Body>
                                        <Card.Title className='text-center'><FaUserCircle size={50} /></Card.Title>
                                        <Card.Title className='text-center'>Indivisual</Card.Title>
                                        <Card.Text className='text-center'>

                                            For personal use <br /> (Regular couriar service).
                                        </Card.Text>
                                        <div className="text-center">
                                            <Link to="/sign-up-form:indivisual">
                                                <Button variant="success" >SIGN UP</Button>
                                            </Link>


                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={{ span: 6 }}>
                                <Card className='mb-3'>
                                    <Card.Body>
                                        <Card.Title className='text-center'><FaStore size={50} /></Card.Title>
                                        <Card.Title className='text-center'>Business</Card.Title>
                                        <Card.Text className='text-center'>
                                            For business use.<br />   <br />
                                        </Card.Text>
                                        <div className="text-center">
                                            <Link to="/sign-up-form:business">
                                                <Button variant="success" >SIGN UP</Button>
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}
