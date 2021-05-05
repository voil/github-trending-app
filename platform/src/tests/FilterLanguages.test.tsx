import React from "react";
import { store } from "../store";
import { Provider } from "react-redux";
import { setFilters } from "../store/filters.reducer";
import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "jest-without-globals";
import FilterLanguages from "../components/HeaderContent/HeaderContentFilters/FilterLanguages";

describe("Test change filters - attribute language", () => {
  let component = null;
  let spyDispatch = null;
  let restoreMocks = false;

  function restoreMockDispatch() {
    if (restoreMocks) {
      jest.restoreAllMocks();
    }
  }

  beforeEach(async () => {
    spyDispatch = jest.spyOn(store, "dispatch");
    restoreMockDispatch();
    component = render(
      <Provider store={store}>
        <FilterLanguages />
      </Provider>
    );
  });

  it("should be select element in component", () => {
    const selectElement = component.queryByText(
      (_, element) => element.tagName.toLowerCase() === "select"
    );

    expect(selectElement ? true : false).toEqual(true);
  });

  it("should change filter language after change select option.", async () => {
    const selectElement = component.queryByText(
      (_, element) => element.tagName.toLowerCase() === "select"
    );

    fireEvent.change(selectElement, { target: { value: "" } });
    expect(spyDispatch).toHaveBeenCalledWith(
      setFilters({
        language: "",
        sortRating: "none",
        since: "none",
      })
    );

    restoreMocks = true;
  });

  it("should change state in reducer", () => {
    store.dispatch(
      setFilters({
        language: "all",
        sortRating: "none",
        since: "none",
      })
    );
    expect(store.getState().filters.language).toEqual("all");
  });
});
