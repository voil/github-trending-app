import { AnyAction } from "redux";

/**
 * FiltersType.
 * Type for filters object.
 */
export type FiltersType = {
  language: string;
  sortRating: string;
  since: string;
};

export const CURRENT_FILTERS_NAME = "currentFilters";

/**
 * FiltersType.
 * Type for filters object.
 */
export interface FiltersTypeInterface {
  language: string;
  sortRating: string;
  since: string;
}

/**
 * ACTIONS.
 * Actions names for reducer dispatch.
 */
export enum ACTIONS {
  CHANGE_FILTERS = "CHANGE_FILTERS",
}

/**
 * TypeReturnAction<T>.
 * Type for language data object item.
 */
export type TypeReturnAction<T> = {
  type: string;
  payload: T;
};

/**
 * initialState.
 * Main state for filters store reducer.
 */
export const initialState: FiltersType = localStorage.getItem("currentFilters")
  ? JSON.parse(localStorage.getItem("currentFilters") || "")
  : {
      language: "all",
      sortRating: "none",
      since: "none",
    };

/**
 * Main function of language reducer.
 * @param FiltersType state
 * @param AnyAction action
 * @return Array<LanguageDataType>
 */
export default function reducer(
  state = initialState,
  action: AnyAction
): FiltersType {
  switch (action.type) {
    case ACTIONS.CHANGE_FILTERS: {
      return {
        ...action.payload,
      };
    }
    default:
      return state;
  }
}

/**
 * Function to set filters.
 * @param FiltersType filters
 * @return TypeReturnAction<FiltersType>
 */
export function setFilters(
  filters: FiltersType
): TypeReturnAction<FiltersType> {
  return {
    type: ACTIONS.CHANGE_FILTERS,
    payload: filters,
  };
}
