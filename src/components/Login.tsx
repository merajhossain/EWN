import React, { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Field, ErrorMessage } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import * as Yup from 'yup';
import loginFetch from '../globalApi';
import Alert from 'react-bootstrap/Alert';
import loading from "../assets/loading.gif";

const schema: any = object().shape({
    username: Yup.string().email("Invalid email address").required(),
    password: Yup.string().required().min(8, 'Password is too short - should be 8 chars minimum.')
});
function Login() {
    const [showPassword, SetShowPassword] = useState<any>(false);
    const [showLoading, setShowLoading] = useState<any>(false);
    const [show, setShow] = useState(false);
    // *************Show hide password*****************
    const showHidePassword = () => {
        if (showPassword == true) {
            SetShowPassword(false);
        } else {
            SetShowPassword(true);
        }
    }

    return (
        <>
            <div className="row h-100">
                <div className="col-md-12 h-100">
                    <div className='d-flex align-items-center justify-content-center h-100'>
                        <div className="form-warpper shadow-lg p-3 bg-white rounded">
                            <div className='text-center'>
                                <img src="https://ewn-bd.com/images/site-navigation/logo.svg" alt="logo" className='mb-3' />
                                <h3>Login</h3>
                            </div>
                            {show && <Alert className='mt-3' variant="danger" onClose={() => setShow(false)} dismissible>
                                timeout of 5000ms exceeded
                            </Alert>}
                            
                            <Formik
                                validationSchema={schema}
                                onSubmit={(values, actions) => {
                                    setShowLoading(true)
                                    setTimeout(() => {
                                        setShowLoading(false);
                                        setShow(true);
                                    }, 5000);
                                    
                                }}
                                initialValues={{
                                    username: '',
                                    password:''
                                }}
                            >
                                {({
                                    handleSubmit,
                                    handleChange,
                                    values,
                                    errors
                                }) => (
                                    <Form noValidate  onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="validationFormikUsername" >
                                            <Form.Label>Username</Form.Label>
                                            <InputGroup hasValidation >
                                                <Form.Control 
                                                    type="email" 
                                                    placeholder="Enter username" 
                                                    name="username"
                                                    value={values.username}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.username}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.username}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="validationFormikPassword" >
                                        <Form.Label>Password</Form.Label>
                                            <InputGroup hasValidation>
                                                <Form.Control 
                                                    type={showPassword == true ? "text" : "password"} 
                                                    name="password" 
                                                    placeholder="Password" 
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.password}
                                                />
                                                <Button variant="outline-secondary" onClick={showHidePassword} >
                                                    {showPassword == true ? <FaEye /> : <FaEyeSlash />}
                                                </Button>
                                                <Form.Control.Feedback type="invalid">
                                                        {errors.password}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Form.Group className="mb-3" controlId="formCheckbox">
                                                <Form.Check type="checkbox" label="Remember Password" />
                                            </Form.Group>
                                            <div className='mb-3'>
                                                <Link to="#">Forget Password</Link>
                                            </div>
                                        </div>
                                        <div className="d-grid mb-3">
                                            <Button variant="success" type="submit" >
                                                <span>Submit</span>
                                                {showLoading == true ? <span><img src={loading} height="20" width="20" style={{ marginLeft:10 }} /></span> : ''}
                                                
                                            </Button>
                                        </div>

                                    </Form>
                                )}
                            </Formik>
                            <div className='text-center'>
                                <Link to="/sign-up"><span className='text-secondary'>Don't have account?</span> <span className='text-success'>Create An Account</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login;