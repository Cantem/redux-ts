import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducers";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// Infer the `RootState` types from the store itself
export type RootState = ReturnType<typeof reducers>;
