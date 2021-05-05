import { AnyAction } from "redux";
import { hCreateUrlFilters, hSortResponseByStars } from "../support/utils";
import {
  FiltersTypeInterface,
  initialState as initialStateFilters,
} from "./filters.reducer";

/**
 * RepositoryAuthorType.
 * Type for repository author data object item.
 */
export type RepositoryAuthorType = {
  avatar: string;
  href: string;
  username: string;
};

/**
 * RepositoryType.
 * Type for repository data object item.
 */
export type RepositoryType = {
  readonly author: string;
  readonly avatar: string;
  readonly builtBy: Array<RepositoryAuthorType>;
  readonly currentPeriodStars: number;
  readonly description: string;
  readonly forks: number;
  readonly language: string;
  readonly languageColor: string;
  readonly name: string;
  readonly stars: number;
  readonly url: string;
};

/**
 * ACTIONS.
 * Actions names for reducer dispatch.
 */
export enum ACTIONS {
  GET_REPOSITORIES_LIST = "GET_REPOSITORIES_LIST",
  GET_REPOSITORIES_ERROR = "GET_REPOSITORIES_ERROR",
  TOOGLE_REPOSITORIES_STATE_LIST = "TOOGLE_REPOSITORIES_STATE_LIST",
}

/**
 * TypeReturnAction<T>.
 * Type for language data object item.
 */
export type TypeReturnAction<T> = {
  type: string;
  payload?: T;
};

/**
 * InitialState
 * Type for initial state of reducer.
 */
type InitialState = {
  list: Array<RepositoryType>;
  isLoadingActive: boolean;
};

/**
 * initialState.
 * Main state for language store reducer.
 */
export const initialState: InitialState = {
  list: [],
  isLoadingActive: true,
};

/**
 * Main function of repositories reducer.
 * @param RepositoryType[] state
 * @param AnyAction action
 * @return Array<RepositoryType>
 */
export default function reducer(
  state = initialState,
  action: AnyAction
): InitialState {
  switch (action.type) {
    case ACTIONS.GET_REPOSITORIES_LIST: {
      return {
        isLoadingActive: false,
        list: action.payload,
      };
    }
    case ACTIONS.TOOGLE_REPOSITORIES_STATE_LIST: {
      return {
        ...state,
        isLoadingActive: action.payload,
      };
    }
    case ACTIONS.GET_REPOSITORIES_ERROR: {
      return {
        ...state,
        isLoadingActive: false,
      };
    }
    default:
      return state;
  }
}

/**
 * Function to get async repositories list.
 * @param FiltersType filters
 * @return TypeReturnAction<Array<RepositoryType>>
 */
export async function getAsyncRepositoriesList(
  filters: FiltersTypeInterface = initialStateFilters
): Promise<Array<RepositoryType>> {
  return hSortResponseByStars(
    await (
      await fetch(
        `${process.env.REACT_APP_PUBLIC_URL}?${hCreateUrlFilters(filters)}`
      )
    ).json(),
    filters
  );
}

/**
 * Function toogle repositorie state list.
 * @param Boolean state
 * @return TypeReturnAction<boolean>
 */
export function toogleRepositoriesStateList(
  state: boolean
): TypeReturnAction<boolean> {
  return {
    type: ACTIONS.TOOGLE_REPOSITORIES_STATE_LIST,
    payload: state,
  };
}

/**
 * Function action to set repositories list.
 * @param FiltersType filters
 * @return TypeReturnAction<Array<RepositoryType>>
 */
export async function getRepositoriesList(
  filters: FiltersTypeInterface = initialStateFilters
): Promise<TypeReturnAction<Array<RepositoryType> | boolean>> {
  try {
    const response = await getAsyncRepositoriesList(filters);
    return {
      type: ACTIONS.GET_REPOSITORIES_LIST,
      payload: response,
    };
  } catch (error) {
    return {
      type: ACTIONS.GET_REPOSITORIES_ERROR,
    };
  }
}
