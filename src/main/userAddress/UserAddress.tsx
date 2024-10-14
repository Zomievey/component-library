import React from "react";
import { Address } from "../../types/Address";

interface UserAddressProps {
  address: Address;
}

export default function UserAddress({ address }: UserAddressProps) {
  return (
    <>
      <h4>Address:</h4>
      <p className='card-text mb-1'>
        <strong>Street:</strong> {address.street}
      </p>
      <p className='card-text mb-1'>
        <strong>Suite:</strong> {address.suite}
      </p>
      <p className='card-text mb-1'>
        <strong>City:</strong> {address.city}
      </p>
      <p className='card-text'>
        <strong>Zipcode:</strong> {address.zipcode}
      </p>
    </>
  );
}
