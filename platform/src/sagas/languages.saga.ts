import { takeLatest, put } from "redux-saga/effects";
import { assignEmptyValue, ACTIONS } from "../store/language.reducer";

/**
 * Function generator to assign empty value for list language.
 */
function* assignEmptyValueLanguage() {
  yield put(
    assignEmptyValue({
      urlParam: "all",
      name: "Pokaż wszystkie",
    })
  );
}

/**
 * Function watcher saga to watch action get list language.
 */
export const watcherLanguageSaga = function* root() {
  yield takeLatest(ACTIONS.GET_LANGUAGE_LIST, assignEmptyValueLanguage);
};
