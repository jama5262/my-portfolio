  
import * as types from "../../utils/constants/actionConstants"

const initialState = {
  projects: []
}

export const projects = (state = initialState, action) => {
  switch (action.type) {
    case types.PROJECTS:
      state = { ...state, projects: action.projects }
      break;
    default:
      break;
  }
  return state
}