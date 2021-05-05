import { AnyAction } from "redux";

/**
 * LanguageDataType.
 * Type for language data object item.
 */
export type LanguageDataType = {
  readonly urlParam: string;
  readonly name: string;
};

/**
 * ACTIONS.
 * Actions names for reducer dispatch.
 */
export enum ACTIONS {
  GET_LANGUAGE_LIST = "GET_LANGUAGE_LIST",
  ASSIGN_EMPTY_VALUE = "ASSIGN_EMPTY_VALUE",
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
 * Main state for language store reducer.
 */
export const initialState: Array<LanguageDataType> = [];

/**
 * Main function of language reducer.
 * @param LanguageDataType[] state
 * @param AnyAction action
 * @return Array<LanguageDataType>
 */
export default function reducer(
  state = initialState,
  action: AnyAction
): Array<LanguageDataType> {
  switch (action.type) {
    case ACTIONS.GET_LANGUAGE_LIST: {
      return action.payload;
    }
    case ACTIONS.ASSIGN_EMPTY_VALUE: {
      const copyState = state.slice();
      copyState.unshift(action.payload);
      return copyState;
    }
    default:
      return state;
  }
}

/**
 * Function action to get language list.
 * @param Array<LanguageDataType> languageList
 * @return TypeReturnAction<Array<LanguageDataType>>
 */
export async function getLanguageList(): Promise<
  TypeReturnAction<Array<LanguageDataType>>
> {
  async function fetchData() {
    return await (
      await fetch(`${process.env.REACT_APP_PUBLIC_URL}/languages`)
    ).json();
  }
  return {
    type: ACTIONS.GET_LANGUAGE_LIST,
    payload: await fetchData(),
  };
}

/**
 * Function action to set language list.
 * @param Array<LanguageDataType> languageList
 * @return TypeReturnAction<Array<LanguageDataType>>
 */
export function assignEmptyValue(
  emptyElement: LanguageDataType
): TypeReturnAction<LanguageDataType> {
  return {
    type: ACTIONS.ASSIGN_EMPTY_VALUE,
    payload: emptyElement,
  };
}
