import React from "react";
import Spin from "../components/Common/Spin";
import { render } from "@testing-library/react";
import { describe, it, expect } from "jest-without-globals";

describe("Test spin component", () => {
  it("should not display spinner when props spinning false or not exists.", async () => {
    const component = render(<Spin />);
    const spinnerElement = await component.findByTestId("spinnerElement");
    expect(spinnerElement).not.toBeVisible();
  });

  it("should display spinner when props spinning true or exists", async () => {
    const component = render(<Spin spinning={true} />);
    const spinnerElement = await component.findByTestId("spinnerElement");
    expect(spinnerElement).toBeVisible();
  });
});
