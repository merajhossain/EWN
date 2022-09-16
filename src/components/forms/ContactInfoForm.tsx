import React, { useState, useEffect } from 'react';
import { Button, Col, InputGroup, Row, Form } from 'react-bootstrap';
import InputTextField from '../formFields/InputTextField';
import InputPasswordField from '../formFields/InputPasswordField';
import SelectField from '../formFields/SelectField';
import InputPhoneField from '../formFields/InputPhoneField';


const roles = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: 'admin',
    label: 'Admin'
  },
  {
    value: 'system_user',
    label: 'System User'
  },
  {
    value: 'super_admin',
    label: 'Super Admin'
  }
];

export default function ContactInfoForm(props: any) {

  const {
    formField: {
      firstName,
      lastName,
      phoneNumber,
      email,
      nationalIdNumber,
      role,
      password,
      confirmpassword
    }
  } = props;

  const [colChange, setColChange] = useState<any>();

  useEffect(() => {
    props?.signUpFromType == 'business' ? setColChange(4) : setColChange(6);
  }, [props?.signUpFromType])

  return (
    <React.Fragment>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId={'validationFormik' + firstName.label} >
            <InputTextField name={firstName.name} label={firstName.label} errors={props?.errors?.firstName} placeholder={firstName.placeHolder} />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId={'validationFormik' + lastName.label} >
            <InputTextField name={lastName.name} label={lastName.label} errors={props?.errors?.lastName} placeholder={lastName.placeHolder} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId={'validationFormik' + phoneNumber.label} >
            <InputPhoneField name={phoneNumber.name} label={phoneNumber.label} errors={props?.errors?.phoneNumber} placeholder={phoneNumber.placeHolder} />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId={'validationFormik' + email.label} >
            <InputTextField name={email.name} label={email.label} errors={props?.errors?.email} placeholder={email.placeHolder} />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId={'validationFormik' + role.label} >
            <SelectField roleData={roles} name={role.name} label={role.label} errors={props?.errors?.role} placeholder={role.placeHolder} />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId={'validationFormik' + nationalIdNumber.label} >
            <InputTextField name={nationalIdNumber.name} label={nationalIdNumber.label} errors={props?.errors?.nationalIdNumber} placeholder={nationalIdNumber.placeHolder} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId={'validationFormik' + password.label} >
            <InputPasswordField name={password.name} label={password.label} errors={props?.errors?.password} placeholder={password.placeHolder} />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId={'validationFormik' + confirmpassword.label} >
            <InputPasswordField name={confirmpassword.name} label={confirmpassword.label} errors={props?.errors?.confirmpassword} placeholder={confirmpassword.placeHolder} />
          </Form.Group>
        </Col>
      </Row>
    </React.Fragment>
  )

}
