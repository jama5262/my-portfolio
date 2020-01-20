import { database } from "firebase";

import * as types from "../../utils/constants/actionConstants"

export const addProjects = projects => ({type: types.PROJECTS, projects})
export const loadingAction = showLoading => ({ type: types.LOADING, showLoading })
export const getProjects = () => {
  return (dispatch) => {
    dispatch(loadingAction(true))
    database()
    .ref('projects')
    .once('value')
    .then((data) => {
      dispatch(addProjects(data.val().sort((a, b) => a.priority - b.priority)))
      dispatch(loadingAction(false))
    })
    .catch((error) => {
      console.log(error);
      dispatch(loadingAction(false))
    })
  }
}