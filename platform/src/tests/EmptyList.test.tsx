import React from "react";
import EmptyList from "../components/Common/EmptyList";
import { render } from "@testing-library/react";
import { describe, it, expect } from "jest-without-globals";

describe("Test empty list component", () => {
  it("should not display empty list when props isVisible false or not exists.", async () => {
    const component = render(<EmptyList />);
    const emptyListElement = await component.findByTestId("emptyListElement");
    expect(emptyListElement).not.toBeVisible();
  });

  it("should display empty list when props isVisible true or exists", async () => {
    const component = render(<EmptyList isVisible={true} />);
    const emptyListElement = await component.findByTestId("emptyListElement");
    expect(emptyListElement).toBeVisible();
  });
});
