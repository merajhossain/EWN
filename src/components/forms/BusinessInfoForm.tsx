import React, { useState, useEffect } from 'react';
import { Button, Col, InputGroup, Row, Form } from 'react-bootstrap';
import InputTextField from '../formFields/InputTextField';

export default function BusinessInfoForm(props: any) {

  const {
    formField: {
      businessName,
      websitesUrl,
      districtOrState,
      cityOrTown,
      postCode,
      address,
      fileUpload,
      zipCode
    }
  } = props;

  const [colChange, setColChange] = useState<any>();

  useEffect(() => {
    props?.signUpFromType == 'business' ? setColChange(6) : setColChange(4);
  }, [props?.signUpFromType])

  return (
    <React.Fragment>
      <Row>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId={'validationFormik' + businessName.label} >
            <InputTextField name={businessName.name} label={businessName.label} errors={props?.errors?.businessName} placeholder={businessName.placeHolder} />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3" controlId={'validationFormik' + websitesUrl.label} >
            <InputTextField name={websitesUrl.name} label={websitesUrl.label} errors={props?.errors?.websitesUrl} placeholder={websitesUrl.placeHolder} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {props?.signUpFromType == 'business' &&
          <Col xs={12} md={colChange}>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Trade Licence</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        }
        <Col xs={12} md={colChange}>
          <Form.Group className="mb-3" controlId={'validationFormik' + districtOrState.label} >
            <InputTextField name={districtOrState.name} label={districtOrState.label} errors={props?.errors?.districtOrState} placeholder={districtOrState.placeHolder} />
          </Form.Group>
        </Col>
        <Col xs={12} md={colChange}>
          <Form.Group className="mb-3" controlId={'validationFormik' + cityOrTown.label} >
            <InputTextField name={cityOrTown.name} label={cityOrTown.label} errors={props?.errors?.cityOrTown} placeholder={cityOrTown.placeHolder} />
          </Form.Group>
        </Col>
        <Col xs={12} md={colChange}>
          <Form.Group className="mb-3" controlId={'validationFormik' + zipCode.name} >
            <InputTextField name={zipCode.name} label={zipCode.label} errors={props?.errors?.zipCode} placeholder={zipCode.placeHolder} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <Form.Group className="mb-3" controlId={'validationFormik' + address.label} >
            <InputTextField name={address.name} label={address.label} errors={props?.errors?.address} placeholder={address.placeHolder} />
          </Form.Group>
        </Col>
      </Row>
    </React.Fragment>
  )

}
