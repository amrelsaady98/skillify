import { combineReducers } from "redux";
import coursesReducer from "./coursesReducer";
import favCourseReducer from "./favCourseReducer";


const rootReducer = combineReducers({
  courses: coursesReducer,
  favCourses: favCourseReducer,

});

export default rootReducer;
