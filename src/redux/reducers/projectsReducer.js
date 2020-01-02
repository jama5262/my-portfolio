  
import * as types from "../../utils/constants/actionConstants"

const initialState = {
  projects: [
    {
      title: "This is project title",
      description: "This is thr description",
      image: "image here",
      updatedOn: "23th Dec 2019",
      tags: ["JavaScript", "React", "Redux"]
    },
    {
      title: "This is project title",
      description: "This is thr description",
      image: "image here",
      updatedOn: "23th Dec 2019",
      tags: ["JavaScript", "React", "Redux"]
    }
  ]
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