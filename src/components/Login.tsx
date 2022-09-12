import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { validator } from "../Validator";

function Login() {
    const [showPassword, SetShowPassword] = useState<any>(false);
    // *************Show hide password*****************
    const showHidePassword = () => {
        if(showPassword == true){
            SetShowPassword(false);
        }else{
            SetShowPassword(true);
        }
    }
    return(
        <>
            <div className="row h-100">
                <div className="col-md-12 h-100">
                    <div className='d-flex align-items-center justify-content-center h-100'>
                        <div className="form-warpper shadow-lg p-3 bg-white rounded">
                            <div className='text-center'>
                                <img src="https://ewn-bd.com/images/site-navigation/logo.svg" alt="logo" className='mb-3' />
                                <h3>Login</h3>
                            </div>

                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <InputGroup className="mb-3">
                                    <Form.Control type={showPassword == true ? "text" : "password"} placeholder="Password" />
                                    <Button variant="outline-primary" onClick={showHidePassword} >
                                        {showPassword == true ? <FaEye /> : <FaEyeSlash />}
                                    </Button>
                                </InputGroup>
                                <div className="d-flex align-items-center justify-content-between">
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" label="Remember Password" />
                                    </Form.Group>
                                    <div className='mb-3'>
                                        <Link to="#">Forget Password</Link>
                                    </div>
                                </div>
                                <div className="d-grid mb-3">
                                    <Button variant="success" type="button" >
                                        Submit
                                    </Button>
                                </div>
                                <div className='text-center'>
                                    <Link to="/sign-up"><span className='text-secondary'>Don't have account?</span> <span className='text-success'>Create An Account</span></Link>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
                this is demo
            </div>
        </>
        
    )
}

export default Login;