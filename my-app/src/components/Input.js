import React from "react";
import { Form } from "react-bootstrap";
export default function Input(props) {
  const { label, name, onChange, type, error, value, placeholder } = props;
  return (
    <div>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          isInvalid={error ? true : false}
          name={name}
          onChange={onChange}
          type={type}
          value={value}
          placeholder={placeholder}
        />
        <div className="invalid-feedback">{error}</div>
      </Form.Group>
    </div>
  );
}
