import React from "react";
import { Button } from "./button";
import { render, screen } from "@testing-library/react";

describe("button", () => {
  function renderButton() {
    render(<Button label="click me!" />);
    const btn = screen.getByRole("button");
    return { btn };
  }
  test("should render label correctly", () => {
    const { btn } = renderButton();
    expect(btn).toHaveTextContent("click me!");
  });
});
