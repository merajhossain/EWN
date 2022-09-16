import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import Form from 'react-bootstrap/Form';
import { Button, Col, InputGroup, Row } from 'react-bootstrap';

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
      <InputGroup hasValidation >
        <Form.Control
          type="password"
          placeholder={props.placeholder}
          {...field}
          {...rest}
          // required={true}
          isInvalid={!!props?.errors}
        // value={props?.dataval}
        />
        <Form.Control.Feedback type="invalid">
          {_renderHelperText()}
        </Form.Control.Feedback>
      </InputGroup>
    </>
  )
}