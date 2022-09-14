import React, {useState, useEffect} from 'react';
import { Button, Col, InputGroup, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useParams } from 'react-router-dom';
import { Formik, Field, ErrorMessage, useFormik  } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import * as Yup from 'yup';

const validationForBusinessInfoForm: any = object().shape({
    businessName: Yup.string().required("business name is required"),
    websitesUrl: Yup.string().required("website or social is required"),
    districtOrState: Yup.string().required("District or State is required"),
    cityOrTown: Yup.string().required("City or Town is required"),
    postCode: Yup.number().required("Postcode is required"),
    address: Yup.string().required("Address is required"),
});

const validationForPersonalInfoForm: any = object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email address").required(),
    role: Yup.string().required("Role is required"),
    nationalIdNumber: Yup.number().required("National ID number is required"),
    password: Yup.string().required('Password is required').min(5, 'Your password is too short.').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default function SignUpForm() {

    const [formType, setFormType] = useState<any>();
    const [formStep, setFormStep] = useState<any>(1);
    const [formDataOne, setFormDataOne] = useState<any>();
    const [colChange, setColChange] = useState<any>();

    let perameter  = useParams();
    useEffect(() => {
        setFormType(perameter.type?.substr(1));

    }, [perameter])
    
    useEffect(() => {
        formType == 'business' ? setColChange(6) : setColChange(4);       
    }, [formType])

    return(
        <>
            <div className='d-flex align-items-center justify-content-center h-100 w-100'>
                <div className='row w-100'>
                   <div className="offset-md-1 col-md-10">
                        <div className="form-warpper shadow-lg p-5 bg-white rounded w-100">
                            <div className="text-center">
                                <h2>Let's Get Started With</h2>
                                <h4>{formType}</h4>
                                <p>Please provide rhe following informations</p>
                            </div>
                            <div className="row py-3">
                                <div className="col-md-8 offset-md-2">
                                    <div className='d-flex align-items-center justify-content-between form-step-warpper'>
                                        <div className="text-center">
                                            <div className={formStep == 1 ? "step active" : 'step'}>1</div>
                                            <span>Business Info</span>
                                        </div>
                                        <div className="text-center">
                                            <div className={formStep == 2 ? "step active" : 'step'}>2</div>
                                            <span>Contact Person Info</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {formStep == 1 && 
                                <div className="business-info-wrapper w-100">
                                    <Formik
                                        validationSchema={validationForBusinessInfoForm}
                                        enableReinitialize={false}
                                        onSubmit={(values, actions) => {
                                            setFormDataOne(values);
                                            setFormStep(2)
                                        }}
                                        
                                        initialValues={{
                                            businessName: '' ,
                                            websitesUrl:'',
                                            districtOrState:'',
                                            cityOrTown:'',
                                            postCode:'',
                                            address:''
                                        }}
                                    >
                                        {({
                                            values,
                                            errors,
                                            dirty,
                                            isSubmitting,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            handleReset                                            
                                        }) => (
                                            <Form noValidate  onSubmit={handleSubmit}>
                                                <Row>
                                                    <Col xs md={6}>
                                                        <Form.Group className="mb-3" controlId="validationFormikBusinessName" >
                                                            <Form.Label>Business Name</Form.Label>
                                                            <InputGroup hasValidation >
                                                                <Form.Control 
                                                                    type="text" 
                                                                    placeholder="Business Name" 
                                                                    name="businessName"
                                                                    value={formDataOne?.businessName}
                                                                    onChange={handleChange}
                                                                    isInvalid={!!errors.businessName}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.businessName}
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs md={6}>
                                                        <Form.Group className="mb-3" controlId="validationFormikWesiteUrl" >
                                                            <Form.Label>Website or Social Media URL</Form.Label>
                                                            <InputGroup hasValidation >
                                                                <Form.Control 
                                                                    type="text" 
                                                                    placeholder="Website or social media URL" 
                                                                    name="websitesUrl"
                                                                    value={formDataOne?.websitesUrl}
                                                                    onChange={handleChange}
                                                                    isInvalid={!!errors.websitesUrl}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.websitesUrl}
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    {formType == 'business' && 
                                                        <Col xs md={colChange}>
                                                            <Form.Group controlId="formFile" className="mb-3">
                                                                <Form.Label>Default file input example</Form.Label>
                                                                <Form.Control type="file" />
                                                            </Form.Group>
                                                        </Col>
                                                    }
                                                    <Col xs md={colChange}>
                                                        <Form.Group className="mb-3" controlId="validationFormikDistrict" >
                                                            <Form.Label>District/State</Form.Label>
                                                            <InputGroup hasValidation >
                                                                <Form.Control 
                                                                    type="text" 
                                                                    placeholder="district or state" 
                                                                    name="districtOrState"
                                                                    value={formDataOne?.districtOrState}
                                                                    onChange={handleChange}
                                                                    isInvalid={!!errors.districtOrState}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.districtOrState}
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs md={colChange}>
                                                        <Form.Group className="mb-3" controlId="validationFormikCityTown" >
                                                            <Form.Label>City/Town</Form.Label>
                                                            <InputGroup hasValidation >
                                                                <Form.Control 
                                                                    type="text" 
                                                                    placeholder="district or state" 
                                                                    name="cityOrTown"
                                                                    value={formDataOne?.cityOrTown}
                                                                    onChange={handleChange}
                                                                    isInvalid={!!errors.cityOrTown}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.cityOrTown}
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs md={colChange}>
                                                        <Form.Group className="mb-3" controlId="validationFormikPostCodeZipcode" >
                                                            <Form.Label>Postcode/Zipcode</Form.Label>
                                                            <InputGroup hasValidation >
                                                                <Form.Control 
                                                                    type="text" 
                                                                    placeholder="postcode or zipcode" 
                                                                    name="postCode"
                                                                    value={formDataOne?.postCode}
                                                                    onChange={handleChange}
                                                                    isInvalid={!!errors.postCode}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.postCode}
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs md={12}>
                                                        <Form.Group className="mb-3" controlId="validationFormikAddress" >
                                                            <Form.Label>Address</Form.Label>
                                                            <InputGroup hasValidation >
                                                                <Form.Control 
                                                                    type="text" 
                                                                    placeholder="Address" 
                                                                    name="address"
                                                                    value={formDataOne?.address}
                                                                    onChange={handleChange}
                                                                    isInvalid={!!errors.address}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.address}
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs md={6}>
                                                        <Link to="/sign-up">
                                                            <div className="d-grid mb-3">
                                                                <Button variant="outline-success" >Back</Button>
                                                            </div>
                                                        </Link>
                                                    </Col>
                                                    <Col xs md={6}>
                                                        <div className="d-grid mb-3">
                                                            <Button variant="success" type="submit" >
                                                                <span>Next</span>
                                                            </Button>
                                                        </div>
                                                    </Col>                                            
                                                </Row>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            }
                            {formStep == 2 && 
                                <div className="business-info-wrapper w-100">
                                    <Formik
                                        validationSchema={validationForPersonalInfoForm}
                                        enableReinitialize={true}
                                        onSubmit={(values, actions) => {
                                            console.log('values', values);
                                        }}
                                        initialValues={{
                                            firstName: '' ,
                                            lastName:'',
                                            phoneNumber:'',
                                            email:'',
                                            role:'',
                                            nationalIdNumber:'',
                                            password:'',
                                            confirmpassword:''
                                        }}
                                    >
                                        {({
                                            values,
                                            errors,
                                            dirty,
                                            isSubmitting,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            handleReset                                           
                                        }) => (
                                            <Form noValidate  onSubmit={handleSubmit}>
                                                <Row>
                                                    <Col xs md={6}>
                                                        <Form.Group className="mb-3" controlId="validationFormikFirstName" >
                                                            <Form.Label>First Name</Form.Label>
                                                            <InputGroup hasValidation >
                                                                <Form.Control 
                                                                    type="text" 
                                                                    placeholder="First Name" 
                                                                    name="firstName"
                                                                    value={formDataOne?.firstName}
                                                                    onChange={handleChange}
                                                                    isInvalid={!!errors.firstName}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.firstName}
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs md={6}>
                                                        <Form.Group className="mb-3" controlId="validationFormikLastName" >
                                                            <Form.Label>Last Name</Form.Label>
                                                            <InputGroup hasValidation >
                                                                <Form.Control 
                                                                    type="text" 
                                                                    placeholder="Website or social media URL" 
                                                                    name="lastName"
                                                                    value={formDataOne?.lastName}
                                                                    onChange={handleChange}
                                                                    isInvalid={!!errors.lastName}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.lastName}
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs md={6}>
                                                        <Form.Group className="mb-3" controlId="validationFormikPhone" >
                                                            <Form.Label>Phone</Form.Label>
                                                            <InputGroup hasValidation >
                                                                <Form.Control 
                                                                    type="text" 
                                                                    placeholder="district or state" 
                                                                    name="phoneNumber"
                                                                    value={formDataOne?.phoneNumber}
                                                                    onChange={handleChange}
                                                                    isInvalid={!!errors.phoneNumber}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.phoneNumber}
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs md={6}>
                                                        <Form.Group className="mb-3" controlId="validationFormikCityTown" >
                                                            <Form.Label>Email</Form.Label>
                                                            <InputGroup hasValidation >
                                                                <Form.Control 
                                                                    type="email" 
                                                                    placeholder="district or state" 
                                                                    name="email"
                                                                    value={formDataOne?.email}
                                                                    onChange={handleChange}
                                                                    isInvalid={!!errors.email}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.email}
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs md={6}>
                                                        <Form.Group className="mb-3" controlId="validationFormikNationalIdNumber" >
                                                            <Form.Label>National ID Number</Form.Label>
                                                            <InputGroup hasValidation >
                                                                <Form.Control 
                                                                    type="text" 
                                                                    placeholder="nationalIdNumber" 
                                                                    name="nationalIdNumber"
                                                                    value={formDataOne?.nationalIdNumber}
                                                                    onChange={handleChange}
                                                                    isInvalid={!!errors.nationalIdNumber}
                                                                />
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.nationalIdNumber}
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs md={6}>
                                                        <Form.Group className="mb-3" controlId="validationFormikRole" >
                                                            <Form.Label>Role</Form.Label>
                                                            <InputGroup hasValidation >
                                                                <Form.Select 
                                                                    aria-label="Default select example"
                                                                    name="role"
                                                                    value={formDataOne?.role}
                                                                    onChange={handleChange}
                                                                    isInvalid={!!errors.role}
                                                                >
                                                                    <option>None</option>
                                                                    <option value="admin">Admin</option>
                                                                    <option value="system_user">System User</option>
                                                                    <option value="super_admin">Super Admin</option>
                                                                </Form.Select>
                                                                <Form.Control.Feedback type="invalid">
                                                                    {errors.role}
                                                                </Form.Control.Feedback>
                                                            </InputGroup>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs md={6}>
                                                        <div className="d-grid mb-3">
                                                            <Button variant="outline-success" onClick={() => setFormStep(1)} >Back</Button>
                                                        </div>
                                                    </Col>
                                                    <Col xs md={6}>
                                                        <div className="d-grid mb-3">
                                                            <Button variant="success" type="submit" >
                                                                <span>Submit</span>
                                                            </Button>
                                                        </div>
                                                    </Col>                                            
                                                </Row>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            }
                            <div className='text-center mt-3'>
                                <Link to="/"><span className='text-secondary'>Already have an account?</span> <span className='text-success'>Sign In</span></Link>
                            </div>
                        </div>       
                    </div>
                </div>
            </div>            
        </>
    )
}