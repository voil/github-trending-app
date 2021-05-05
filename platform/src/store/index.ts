import global from "./global.reducer";
import filters from "./filters.reducer";
import languages from "./language.reducer";
import createSagaMiddleware from "redux-saga";
import repositories from "./repositories.reducer";
import { configureStore } from "@reduxjs/toolkit";
import { watcherFilterSaga } from "../sagas/filters.saga";
import { watcherLanguageSaga } from "../sagas/languages.saga";
import { watcherRepositoriesSaga } from "../sagas/respositories.saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    global,
    filters,
    languages,
    repositories,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watcherFilterSaga);
sagaMiddleware.run(watcherLanguageSaga);
sagaMiddleware.run(watcherRepositoriesSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
