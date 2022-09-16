import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import Form from 'react-bootstrap/Form';
import { Button, Col, InputGroup, Row } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function InputTextField(props) {

  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }

  return (
    <>
      <Form.Label>{props.label}</Form.Label>
      <PhoneInput
        country={'bd'}
        name="phone"
      />
    </>
  )
}