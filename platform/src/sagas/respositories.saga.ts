import { takeLatest, put } from "redux-saga/effects";
import { ACTIONS } from "../store/repositories.reducer";
import { toogleApiState } from "../store/global.reducer";

/**
 * Function generator to change state of api.
 */
function* displayErrorApi() {
  yield put(toogleApiState(true));
}

/**
 * Function watcher saga to watch action when api disabled.
 */
export const watcherRepositoriesSaga = function* root() {
  yield takeLatest(ACTIONS.GET_REPOSITORIES_ERROR, displayErrorApi);
};
