import {
  ACTIONS,
  FiltersType,
  CURRENT_FILTERS_NAME,
} from "../store/filters.reducer";
import {
  getAsyncRepositoriesList,
  RepositoryType,
  toogleRepositoriesStateList,
  ACTIONS as ACTIONS_RESPOSITORIES,
} from "../store/repositories.reducer";
import { RootState } from "../store/index";
import { select, takeEvery, put, call } from "redux-saga/effects";

const getFiltersFromStore = (state: RootState): FiltersType => state.filters;

/**
 * Function save filtet to local storage.
 */
function* saveFilterToLocalStorage() {
  const filters: FiltersType = yield select(getFiltersFromStore);
  localStorage.setItem(CURRENT_FILTERS_NAME, JSON.stringify(filters));

  yield put(toogleRepositoriesStateList(true));
  const response: RepositoryType = yield call(
    getAsyncRepositoriesList,
    filters
  );
  yield put({
    type: ACTIONS_RESPOSITORIES.GET_REPOSITORIES_LIST,
    payload: response,
  });
}

/**
 * Function watcher saga to watch action change filters.
 */
export const watcherFilterSaga = function* root() {
  yield takeEvery(ACTIONS.CHANGE_FILTERS, saveFilterToLocalStorage);
};
