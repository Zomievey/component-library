import React from "react";
import { Spinner } from "react-bootstrap";

export default function CommonSpinner() {
  return (
    <Spinner animation='border' role='status'>
      <span className='visually-hidden'>Loading...</span>
    </Spinner>
  );
}
