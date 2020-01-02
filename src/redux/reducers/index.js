import { combineReducers } from "redux";

import { projects } from "./projectsReducer"
import { loading } from "./loadingReducer"

export const reducer = combineReducers({
  projects,
  loading
});