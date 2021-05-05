import React from "react";
import { store } from "../store";
import { Provider } from "react-redux";
import { setFilters } from "../store/filters.reducer";
import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "jest-without-globals";
import FilterSortingStars from "../components/HeaderContent/HeaderContentFilters/FilterSortingStars";

describe("Test change filters - attribute sorting", () => {
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
        <FilterSortingStars />
      </Provider>
    );
  });

  it("should be sorting element in component", async () => {
    const sortingElement = await component.findByTestId("sortingElement");
    expect(sortingElement ? true : false).toEqual(true);
  });

  it("should change filter sortRating after click sorting element - state asc.", async () => {
    const sortingElement = await component.findByTestId("sortingElement");

    fireEvent.click(sortingElement);
    expect(spyDispatch).toHaveBeenCalledWith(
      setFilters({
        language: "all",
        sortRating: "asc",
        since: "none",
      })
    );

    restoreMocks = true;
  });

  it("should change state in reducer", () => {
    store.dispatch(
      setFilters({
        language: "all",
        sortRating: "desc",
        since: "none",
      })
    );
    expect(store.getState().filters.sortRating).toEqual("desc");
  });
});
