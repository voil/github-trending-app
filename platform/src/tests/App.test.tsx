import React from "react";
import { store } from "../store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import App, { globalErrorText } from "../components/App";
import { toogleApiState } from "../store/global.reducer";
import { describe, it, expect, beforeEach } from "jest-without-globals";

describe("Test change state api", () => {
  let component = null;
  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("should display alert notification", async () => {
    store.dispatch(toogleApiState(true));
    expect(await component.findByText(globalErrorText)).toBeInTheDocument();
  });
});
