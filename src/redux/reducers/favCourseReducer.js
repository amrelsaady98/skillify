import {ADD_COURSE_TO_FAV, REMOVE_FAV_COURSE} from "../actions/coursesActions";

const initialState = {
  favCourses:[]
}
const favCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COURSE_TO_FAV:
      return { ...state, favCourses: [...state.favCourses, action.payload] };
    case REMOVE_FAV_COURSE:
      return { ...state, favCourses: state.favCourses.filter(course => course.id !== action.payload.id) };
    default:
      return state;
  }
}

export default favCourseReducer;