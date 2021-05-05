import React from "react";
import { store } from "../store";
import { Provider } from "react-redux";
import { setFilters } from "../store/filters.reducer";
import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "jest-without-globals";
import FilterDate from "../components/HeaderContent/HeaderContentFilters/FilterDate";

describe("Test change filters - attribute since", () => {
  let component = null;
  let spyDispatch = null;
  let restoreMocks = false;

  function restoreMockDispatch() {
    if (restoreMocks) {
      jest.restoreAllMocks();
    }
  }

  beforeEach(() => {
    spyDispatch = jest.spyOn(store, "dispatch");
    restoreMockDispatch();
    component = render(
      <Provider store={store}>
        <FilterDate />
      </Provider>
    );
  });

  it("should be at least one element checkbox", () => {
    const listCheckboxs = component.queryAllByText(
      (_, element) =>
        element.tagName.toLowerCase() === "input" &&
        element.getAttribute("type") === "checkbox"
    );

    expect(listCheckboxs.length).toBeGreaterThan(0);
  });

  it("should change filter since after check checkbox.", async () => {
    const listCheckboxs = component.queryAllByText(
      (_, element) =>
        element.tagName.toLowerCase() === "input" &&
        element.getAttribute("type") === "checkbox"
    );

    listCheckboxs.forEach((element) => {
      fireEvent.click(element);

      expect(spyDispatch).toHaveBeenCalledWith(
        setFilters({
          language: "all",
          sortRating: "none",
          since: element.value,
        })
      );
    });
    restoreMocks = true;
  });

  it("should change state in reducer", () => {
    const listCheckboxs = component.queryAllByText(
      (_, element) =>
        element.tagName.toLowerCase() === "input" &&
        element.getAttribute("type") === "checkbox"
    );

    listCheckboxs.forEach((element) => {
      store.dispatch(
        setFilters({
          language: "all",
          sortRating: "none",
          since: element.value,
        })
      );
      expect(store.getState().filters.since).toEqual(element.value);
    });
  });
});
