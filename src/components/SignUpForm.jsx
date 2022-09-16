import React, { useState, useEffect, useMemo } from 'react';
import { Button, Col, InputGroup, Row } from 'react-bootstrap';
import { Link, useParams, useNavigate  } from 'react-router-dom';
import { Formik, Form  } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import * as Yup from 'yup';
import signupFormModel from './model/signupFormModel';
import BusinessInfoForm from './forms/BusinessInfoForm';
import formInitialValues from './model/formInitialValues';
import ContactInfoForm from './forms/ContactInfoForm';
import validationSchema from "./model/validationSchema";

console.log('signupFormModel', validationSchema);

const { formId, formField } = signupFormModel;

function _renderStepContent(step, errors, signUpFromType, values) {
  switch (step) {
    case 0:
      return <BusinessInfoForm formField={formField} errors={errors} values={values} signUpFromType={signUpFromType} />;
    case 1:
      return <ContactInfoForm formField={formField} errors={errors} values={values} signUpFromType={signUpFromType} />;
    case 2:
    default:
      return <></>;
  }
}

const steps = ['Business Info', 'Contact Person Info'];

export default function SignUpForm(props, ) {
   
    
    const [formType, setFormType] = useState();
    const [formStep, setFormStep] = useState(1);
    const { formId, formField } = signupFormModel;
    const [activeStep, setActiveStep] = useState(0);
    const currentValidationSchema = validationSchema[activeStep];
    const isLastStep = activeStep === steps.length - 1;

    let perameter  = useParams();
    useEffect(() => {
        setFormType(perameter.type?.substr(1));

    }, [perameter])

    let navigate = useNavigate(); 

    const _sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      async function _submitForm(values, actions) {
        await _sleep(1000);
        // alert(JSON.stringify(values, null, 2));
        let path = `/`; 
        navigate(path);
        actions.setSubmitting(false);
      }
    
      const  _handleSubmit = (values, actions) => {
        if (isLastStep) {
          _submitForm(values, actions);
        } else {
            actions.setTouched({});
            actions.setSubmitting(false);
            setActiveStep(activeStep + 1);
        }
        
      }
      
    
      function _handleBack() {
        setActiveStep(activeStep - 1);
      }
    return(
        <>
            <React.StrictMode>
                <React.Fragment>
                    <div className='d-md-flex align-items-center justify-content-center h-100 w-100'>
                        <div className='row w-100'>
                        <div className="offset-md-1 col-md-10">
                                <div className="form-warpper shadow-lg-custom p-5 bg-white rounded w-100">
                                    <div className="text-center">
                                        <h2>Let's Get Started With</h2>
                                        <h4 className='text-capitalize'>{formType}</h4>
                                        <p>Please provide rhe following informations</p>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-md-8 offset-md-2">
                                            <div className='d-flex align-items-center justify-content-between form-step-warpper'>
                                                <div className="text-center">
                                                    <div className={activeStep == 0 ? "step active" : 'step'}>1</div>
                                                    <span>Business Info</span>
                                                </div>
                                                <div className="text-center">
                                                    <div className={activeStep == 1 ? "step active" : 'step'}>2</div>
                                                    <span>Contact Person Info</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="business-info-wrapper w-100">
                                        <Formik
                                            initialValues={formInitialValues}
                                            validationSchema={currentValidationSchema}
                                            onSubmit={_handleSubmit}
                                            // validate={ activeStep == 1 ? validate : ''}
                                        >
                                            {({ values,
                                                errors,
                                                dirty,
                                                handleSubmit,
                                                handleChange,
                                                isSubmitting}) => (
                                                    
                                                    
                                                <Form id={formId}>
                                                    {_renderStepContent(activeStep, errors, formType, values)}
                                                    <Row>
                                                        <Col xs md={6}>
                                                            
                                                            {activeStep == 0 && (
                                                                <Link to="/sign-up">
                                                                    <div className="d-grid mb-3">
                                                                        <Button variant="outline-success" >Back</Button>
                                                                    </div>
                                                                </Link>
                                                            )}
                                                            {activeStep !== 0 && (
                                                                <div className="d-grid mb-3">
                                                                    <Button 
                                                                        variant="outline-success"
                                                                        disabled={isSubmitting}
                                                                        onClick={_handleBack} 
                                                                    >
                                                                        Back
                                                                    </Button>
                                                                </div>
                                                            )}
                                                        </Col>
                                                        <Col xs md={6}>
                                                            <div className="d-grid mb-3">
                                                                <Button variant="success" type="submit" >
                                                                    {isLastStep ? 'Submit' : 'Next'}
                                                                </Button>
                                                            </div>
                                                        </Col>                                            
                                                    </Row>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                    
                                    <div className='text-center mt-3'>
                                        <Link to="/"><span className='text-secondary'>Already have an account?</span> <span className='text-success'>Sign In</span></Link>
                                    </div>
                                </div>       
                            </div>
                        </div>
                    </div>  
                </React.Fragment>
            </React.StrictMode>
        </>
    )
}