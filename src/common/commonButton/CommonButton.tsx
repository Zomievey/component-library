import React, { memo } from "react";
import { Button, Spinner } from "react-bootstrap";

export interface CommonButtonProps {
  text: string;
  buttonType?: "button" | "submit" | "reset";
  height?: number;
  width?: number;
  fontSize?: number;
  isLoading?: boolean;
  onClick?: () => void;
}

function CommonButton({
  text = "",
  buttonType = "button",
  fontSize = 16,
  isLoading = false,
  height = 50,
  width = 150,
  onClick,
}: CommonButtonProps) {
  return (
    <button
      type={buttonType}
      className='btn btn-secondary'
      style={{
        width,
        height,
        fontSize,
      }}
      onClick={onClick}
    >
      {isLoading ? (
        <Button variant='secondary' disabled>
          <Spinner
            as='span'
            animation='border'
            size='sm'
            role='status'
            aria-hidden='true'
          />
          <span className='visually-hidden'>Loading...</span>
        </Button>
      ) : (
        text.toUpperCase()
      )}
    </button>
  );
}

//memoize the component for optimization so that the component only re-renders if the props change
export default memo(CommonButton);
