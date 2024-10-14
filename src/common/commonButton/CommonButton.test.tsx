import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CommonButton from "./CommonButton";

describe("CommonButton Component", () => {
  describe("Rendering", () => {
    it("renders the button with correct text", () => {
      render(<CommonButton text='Click Me' />);
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toHaveTextContent("CLICK ME");
    });

    it("shows 'LOADING...' when isLoading is true", () => {
      render(<CommonButton text='Submit' isLoading={true} />);
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toHaveTextContent("LOADING...");
    });

    it("renders the correct button type", () => {
      render(<CommonButton text='Submit' buttonType='submit' />);
      const buttonElement = screen.getByRole("button");
      expect(buttonElement).toHaveAttribute("type", "submit");
    });
  });

  describe("Functionality", () => {
    it("calls the onClick handler when clicked", () => {
      const onClickMock = jest.fn();
      render(<CommonButton text='Submit' onClick={onClickMock} />);
      const buttonElement = screen.getByRole("button");

      fireEvent.click(buttonElement);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });

  describe("Styling", () => {
    it("applies correct width, height, and font size", () => {
      render(
        <CommonButton text='Submit' width={200} height={60} fontSize={18} />
      );
      const buttonElement = screen.getByRole("button");

      expect(buttonElement).toHaveStyle({
        width: "200px",
        height: "60px",
        fontSize: "18px",
      });
    });

    it("renders with default props", () => {
      render(<CommonButton text='Default Button' />);
      const buttonElement = screen.getByRole("button");

      expect(buttonElement).toHaveStyle({
        width: "150px",
        height: "50px",
        fontSize: "16px",
      });
    });
  });
});
