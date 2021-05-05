import { store } from "../store";
import { describe, it, expect } from "jest-without-globals";
import { setFilters, CURRENT_FILTERS_NAME } from "../store/filters.reducer";

describe("Test side effect dispach change filters.", () => {
  it("should save filters params to local storage.", async () => {
    store.dispatch(
      setFilters({
        language: "all",
        sortRating: "asc",
        since: "false",
      })
    );
    const currentFilters = JSON.parse(
      window.localStorage.getItem(CURRENT_FILTERS_NAME) || ""
    );
    expect(currentFilters?.sortRating).toEqual("asc");
  });
});
